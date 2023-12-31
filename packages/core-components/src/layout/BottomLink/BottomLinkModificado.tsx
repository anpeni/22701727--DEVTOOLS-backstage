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
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import { Link } from '../../components/Link';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

/** @public */
export type BottomLinkClassKey = 'root' | 'boxTitle' | 'arrow';

const useStyles = makeStyles<BackstageTheme>(
  theme => ({
    root: {
      //maxWidth: 'fit-content',
      //padding: '-1px 5px -1px 5px',
      marginLeft: '520px',
      //background: 'rgba(255, 255, 255, 0.10)',
      marginTop: '30px',
      marginBottom: '30px',
    },
    sombreadoLink: {
      display: 'flex',
      alignItems: 'center',
      //padding: '1px 10px 1px 5px',
      background: 'rgba(255, 255, 255, 0.10)',
      borderRadius: '20px',

    },
    boxTitle: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      //color: theme.palette.textSubtle,
      padding: '1px 20px 1px 20px',
    },
    arrow: {     
      transform: 'rotate(90deg)',
      color: '#FFF',
      fontSize: '20px',
      marginLeft: '5px',
    },
  }),
  { name: 'BackstageBottomLink' },
);

/** @public */
export type BottomLinkProps = {
  link: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

/**
 * Footer with link used in  {@link InfoCard } and {@link TabbedCard}
 *
 * @public
 *
 */
export function BottomLinkModificado(props: BottomLinkProps) {
  const { link, title, onClick } = props;
  const classes = useStyles();

  return (
    <Box>
      {/* <Divider /> */}
      <Link to={link} onClick={onClick} underline="none" >
        
        <Box display="flex" alignItems="center" className={classes.root}>
        <div className={classes.sombreadoLink}>
          <Box className={classes.boxTitle}>
            <span
              style={{
                display: 'block',
                color: '#FFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '32px',
                //padding: '-2px -2px -2px -2px',
                //marginLeft: '20px',
                //marginTop: '20px',
              }}>
              {title}
            </span>
            <ArrowCircleUpIcon className={classes.arrow} />
          </Box>
          
          </div>
          
        </Box>
        
      </Link>
    </Box>
  );
}
