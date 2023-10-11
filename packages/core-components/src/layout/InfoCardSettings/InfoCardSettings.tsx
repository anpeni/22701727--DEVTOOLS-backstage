

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

import { BottomLinkModificado, BottomLinkProps } from '../BottomLink';
import { ErrorBoundary, ErrorBoundaryProps } from '../ErrorBoundary';
import { Height } from '@material-ui/icons';

/** @public */
export type InfoCardClassKeySettings =
  | 'noPadding'
  | 'header'
  | 'headerTitle'
  | 'headerSubheader'
  | 'headerAvatar'
  | 'headerAction'
  | 'headerContent';

const useStyles = makeStyles(
  theme => ({
    noPadding: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    header: {
      padding: theme.spacing(3, 2, 0, 2.5),
    },
    headerTitle: {
      fontWeight: theme.typography.fontWeightBold as any,
    },
    divider: {
      border: 'none',
      height: '0px',
      margin: '0',
      flexShrink: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
headerSubheader: {
  paddingTop: theme.spacing(1),
    },
MuiDivider:{
  root: {
    height: '0px',
  },
},
headerAvatar: { },
headerAction: { },
headerContent: { },
subheader: {
  display: 'flex',
    },
  }),
{ name: 'BackstageInfoCardSettings' },
);

/** @public */
export type CardActionsTopRightClassKeySettings = 'root';

const CardActionsTopRight = withStyles(
  theme => ({
    root: {
      display: 'inline-block',
      padding: theme.spacing(8, 8, 0, 0),
      float: 'right',
    },
  }),
  { name: 'BackstageInfoCardCardSettingsActionsTopRight' },
)(CardActions);

const VARIANT_STYLES = {
  card: {
    flex: {
      display: 'flex',
      flexDirection: 'column',
    },
    fullHeight: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    gridItem: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100% - 10px)', // for pages without content header
      marginBottom: '10px',
      breakInside: 'avoid-page',
      '@media print': {
        height: 'auto',
      },
    },
  },
  cardContent: {
    fullHeight: {
      flex: 1,
    },
    gridItem: {
      flex: 1,
    },
  },
};

/** @public */
export type InfoCardVariantsSettings = 'flex' | 'fullHeight' | 'gridItem';

/**
 * InfoCard is used to display a paper-styled block on the screen, similar to a panel.
 *
 * You can custom style an InfoCard with the 'className' (outer container) and 'cardClassName' (inner container)
 * props. This is typically used with the material-ui makeStyles mechanism.
 *
 * The InfoCard serves as an error boundary. As a result, if you provide an 'errorBoundaryProps' property this
 * specifies the extra information to display in the error component that is displayed if an error occurs
 * in any descendent components.
 *
 * By default the InfoCard has no custom layout of its children, but is treated as a block element. A
 * couple common variants are provided and can be specified via the variant property:
 *
 * When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.
 * Set to the 'gridItem' variant to display the InfoCard with full height suitable for Grid:
 *
 * `<InfoCard variant="gridItem">...</InfoCard>`
 */
export type Props = {
  title?: ReactNode;
  subheader?: ReactNode;
  divider?: boolean;
  deepLink?: BottomLinkProps;
  /** @deprecated Use errorBoundaryProps instead */
  slackChannel?: string;
  errorBoundaryProps?: ErrorBoundaryProps;
  variant?: InfoCardVariantsSettings;
  children?: ReactNode;
  headerStyle?: object;
  headerProps?: CardHeaderProps;
  icon?: ReactNode;
  action?: ReactNode;
  actionsClassName?: string;
  actions?: ReactNode;
  cardClassName?: string;
  actionsTopRight?: ReactNode;
  className?: string;
  noPadding?: boolean;
  titleTypographyProps?: object;
};

/**
 * Material-ui card with header , content and actions footer
 *
 * @public
 *
 */
export function InfoCardSettings(props: Props): JSX.Element {
  const {
    title,
    subheader,
    divider = false,
    deepLink,
    slackChannel,
    errorBoundaryProps,
    variant,
    children,
    headerStyle,
    headerProps,
    icon,
    action,
    actionsClassName,
    actions,
    cardClassName,
    actionsTopRight,
    className,
    noPadding,
    titleTypographyProps,
  } = props;
  const classes = useStyles();
  /**
   * If variant is specified, we build up styles for that particular variant for both
   * the Card and the CardContent (since these need to be synced)
   */
  let calculatedStyle = {};
  let calculatedCardStyle = {};
  if (variant) {
    const variants = variant.split(/[\s]+/g);
    variants.forEach(name => {
      calculatedStyle = {
        ...calculatedStyle,
        ...VARIANT_STYLES.card[name as keyof (typeof VARIANT_STYLES)['card']],
      };
      calculatedCardStyle = {
        ...calculatedCardStyle,
        ...VARIANT_STYLES.cardContent[
        name as keyof (typeof VARIANT_STYLES)['cardContent']
        ],
      };
    });
  }

  const cardSubTitle = () => {
    if (!subheader && !icon) {
      return null;
    }

    return (
      <div
        className={classes.headerSubheader}
        data-testid="info-card-subheader"
      >
        {subheader && <div className={classes.subheader}>{subheader}</div>}
        {icon}
      </div>
    );
  };

  const errProps: ErrorBoundaryProps =
    errorBoundaryProps || (slackChannel ? { slackChannel } : {});

  return (
    <Card style={calculatedStyle} className={className}>
      <ErrorBoundary {...errProps}>
        {title && (
          <CardHeader
            classes={{
              root: classes.header,
              title: classes.headerTitle,
              subheader: classes.headerSubheader,
              avatar: classes.headerAvatar,
              action: classes.headerAction,
              content: classes.headerContent,
            }}
            title={title}
            subheader={cardSubTitle()}
            action={action}
            style={{ ...headerStyle }}
            titleTypographyProps={titleTypographyProps}
            {...headerProps}
          />
        )}
        {actionsTopRight && (
          <CardActionsTopRight>{actionsTopRight}</CardActionsTopRight>
        )}
        {divider && <Divider />}
        <CardContent
          className={classNames(cardClassName, {
            [classes.noPadding]: noPadding,
          })}
          style={calculatedCardStyle}
        >
          {children}
        </CardContent>
        {actions && (
          <CardActions className={actionsClassName}>{actions}</CardActions>
        )}
        {deepLink && <BottomLinkModificado {...deepLink} />}
      </ErrorBoundary>
    </Card>
  );
}
