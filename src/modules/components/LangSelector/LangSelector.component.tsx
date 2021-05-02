import React from 'react';
import { Typography, Box, Menu, MenuItem, makeStyles } from '@material-ui/core';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import i18n from '../../../translations/translations';
import { IconName, IconWrapper } from '../../utils/IconUtils/Icon';

import { Lang, languages } from './LangSelector.constants';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 20px',
    },
    itemText: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
    },
    pointer: {
        cursor: 'pointer',
    },
    langContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
}));

export const LangSelector: React.FC = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState<null | Element>(null);

    const handleOpenMenu = React.useCallback((event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleChangeLanguage = React.useCallback((lang: string) => {
        void i18n.changeLanguage(lang);
    }, []);

    const handleCloseMenu = React.useCallback((name: string) => {
        const foundElement = languages.find((lang) => lang.name === name);

        if (foundElement) {
            handleChangeLanguage(name);
        }
        setAnchorEl(null);
    }, [ handleChangeLanguage ]);


    return (
        <Box className={classes.root}>
            <Box onClick={handleOpenMenu}>
                <IconWrapper
                    className={classes.pointer}
                    fontSize="large"
                    name={i18n.language as IconName}
                />
            </Box>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                {languages.map((lang: Lang) => (
                    <MenuItem
                        key={lang.name}
                        className={classes.langContainer}
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick={() => handleCloseMenu(lang.name)}
                    >
                        <IconWrapper name={lang.name} />
                        <Typography className={cx(classes.pointer, classes.itemText)}>
                            {t(lang.translation)}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
