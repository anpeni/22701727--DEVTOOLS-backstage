/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BackstageTheme } from '@backstage/theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type StatusClassKey =
  | 'status'
  | 'ok'
  | 'warning'
  | 'error'
  | 'pending'
  | 'running'
  | 'aborted';

const useStyles = makeStyles<BackstageTheme>(
  theme => ({
    status: {
<<<<<<< HEAD
      fontWeight: theme.typography.fontWeightMedium as any,
=======
      fontWeight: theme.typography.fontWeightMedium,
>>>>>>> c410b3123ad7338d6a4ba70bb591807e3671ae31
      '&::before': {
        width: '0.7em',
        height: '0.7em',
        display: 'inline-block',
        marginRight: theme.spacing(1),
        borderRadius: '50%',
        content: '""',
      },
    },
    ok: {
      '&::before': {
        backgroundColor: theme.palette.status.ok,
      },
    },
    warning: {
      '&::before': {
        backgroundColor: theme.palette.status.warning,
      },
    },
    error: {
      '&::before': {
        backgroundColor: theme.palette.status.error,
      },
    },
    pending: {
      '&::before': {
        backgroundColor: theme.palette.status.pending,
      },
    },
    running: {
      '&::before': {
        backgroundColor: theme.palette.status.running,
      },
    },
    aborted: {
      '&::before': {
        backgroundColor: theme.palette.status.aborted,
      },
    },
  }),
  { name: 'BackstageStatus' },
);

export function StatusOK(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.ok)}
      aria-label="Status ok"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StatusWarning(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.warning)}
      aria-label="Status warning"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StatusError(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.error)}
      aria-label="Status error"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StatusPending(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.pending)}
      aria-label="Status pending"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StatusRunning(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.running)}
      aria-label="Status running"
      aria-hidden="true"
      {...props}
    />
  );
}

export function StatusAborted(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  return (
    <Typography
      component="span"
      className={classNames(classes.status, classes.aborted)}
      aria-label="Status aborted"
      aria-hidden="true"
      {...props}
    />
  );
}
