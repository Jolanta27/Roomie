import * as React from 'react';
import { SvgIconProps } from '@material-ui/core';

import * as customIcons from './customIcons';
import { muiIcons } from './mui.constants';
import { Icons } from './Icon.constants';

/**
 * @param name of the icon
 */

export type IconName =
 | keyof typeof muiIcons
 | keyof typeof customIcons;

interface IconProps extends SvgIconProps {
    name: IconName;
}

export const IconWrapper: React.FC<IconProps> = React.forwardRef(
    ({ name, ...iconProps }, ref) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let Icon = null;

        if (Object.keys(Icons).includes(name)) {
            Icon = muiIcons[name as keyof typeof muiIcons];
        } else {
            Icon = customIcons[name as keyof typeof customIcons];
        }

        return (
            <Icon
                ref={ref}
                {...iconProps}
            />
        );
    },
);
