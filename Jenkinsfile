pipeline {
  agent { 
    kubernetes {
      yaml """
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            job: backstage.angular
        spec:
          containers:
          - name: git-node
            image: timbru31/node-alpine-git:18
            command: ["cat"]
            tty: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi"  
          - name: install-dependencies
            image: nikolaik/python-nodejs:python3.11-nodejs16-bullseye
            command:
            - cat
            tty: true
            securityContext: 
              priviledged: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi" 
          - name: trivy-scanner
            image: public.ecr.aws/aquasecurity/trivy:latest
            command:
            - cat
            tty: true
            securityContext: 
              priviledged: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi"
          - name: kaniko
            image: gcr.io/kaniko-project/executor:v1.15.0-debug
            command:
            - cat
            tty: true
            securityContext: 
              priviledged: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi"
          - name: docker
            image: public.ecr.aws/docker/library/bash:5.2
            command:
            - cat
            tty: true
            securityContext: 
              priviledged: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi"      
          - name: npm
            image: node:12-alpine
            command:
            - cat
            tty: true
            securityContext: 
              priviledged: true
            resources:
              requests:
                cpu: "200m"
                memory: "128Mi"
          volumes:
          - name: jenkins-docker-cfg
            configMap:
              name: jenkins-docker-cfg
        """.stripIndent()
    }
  }

  stages {
    stage('environment') {
      steps {
        container('git-node') {
          script {
            sh """
                git config --global --add safe.directory ${WORKSPACE}
                git config --global user.email "jenkins@neoris.com"
                git config --global user.name "jenkins"
              """
            env.revision = sh(script: 'git log -1 --format=\'%h.%ad\' --date=format:%Y%m%d-%H%M | cat', returnStdout: true).trim()
            env.branch = env.BRANCH_NAME.take(20).replaceAll('/', '_')
            if (env.branch != 'develop') {
              env.revision += "-${branch}"
            }
            sh "echo Building revision: ${revision}"
          }
        }
      }
    }

    stage('install-dependencies') {
      steps {
        container('install-dependencies') {
          script {
            sh """
              yarn install --frozen-lockfile
            """
          }
        }
      }
    }

    stage('yarn-tsc') {
      steps {
        container('install-dependencies') {
          script {
            sh """
              yarn tsc
            """
          }
        }
      }
    }

    
    stage('validate-dockerfile') {
      steps {
        container('trivy-scanner') {
          script {
            sh """
              #!/usr/bin/env sh
                cmd="trivy config --severity CRITICAL ./packages/backend/Dockerfile"
                echo "Running trivy task with command below"
                echo "\$cmd"
                eval "\$cmd"
            """
          }
        }
      }
    }

     stage('build-and-push') {
            steps {
                script {
                    container('kaniko') {
                        // Define tus variables de entorno
                        env.AWS_EC2_METADATA_DISABLED = 'true'
                        env.AWS_SDK_LOAD_CONFIG = 'true'
                        env.AWS_ACCESS_KEY_ID = "QUtJQVE0VUw2NjVCS0VBV1E0VFQ="
                        env.AWS_SECRET_ACCESS_KEY = "WUFvaURvT2N3enhITUtvd1dzamxxWkJVZmEvdHd5eEpwYTh2ZzVzZQ=="
                        env.AWS_REGION = "ZXUtd2VzdC0x"
                        
                        // Define los argumentos y otros detalles
                        def kanikoArgs = [
                            '--tarPath=./image.tar',
                            '--no-push',
                            '--dockerfile=./packages/backend/Dockerfile',
                            '--context=/workspace/source/./',
                            "--destination=${params.image-registry}/cicd/backstage:${params.image-tag}",
                            '--digest-file=/tekton/results/IMAGE_DIGEST',
                            '--compressed-caching=false'
                        ]

                    }
              }
    }
  }
}

  }
