import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import people from '../../../../assets/img/friends.jpeg';
import oslo from '../../../../assets/img/oslo.jpeg';
import bergen from '../../../../assets/img/bergen.jpeg';
import trondheim from '../../../../assets/img/trondheim.jpeg';
import stavanger from '../../../../assets/img/stavanger.jpeg';
import { routes } from '../../../../routes/routes';
import { LangSelector } from '../../../components/LangSelector/LangSelector.component';
import { TraslationKeywords } from '../../../../translations/types';

import classes from './Home.module.scss';

export const Home: React.FC = () => {
    const { main } = routes;
    const { t } = useTranslation();

    return (
        <>
            <header>
                <h1 className={classes.logo}>
                    Roomie
                </h1>
                <LangSelector />
                <nav className={classes.nav}>
                    <Link to={main.login.path}>
                        {t(TraslationKeywords.Login)}
                    </Link>
                    <Link to={main.newUser.path}>
                        Opprett bruker
                    </Link>
                </nav>
            </header>

            <section className={classes.firstSection}>
                <div className={classes.leftSide}>
                    <img
                        className={classes.people}
                        src={people}
                        alt="people"
                    />
                    <h1 className={classes.imgIntro}>
                        Vi hjelper deg å finne de riktige folka!
                    </h1>
                </div>
                <div className={classes.rightSide}>
                    <form>
                        <h1 className={classes.rightSideIntro}>
                            Finn den perfekte matchen din
                        </h1>
                        <label>
                            <input
                                type="text"
                                placeholder="Tast inn by eller postnummer..."
                            />
                            <input
                                type="submit"
                                value="Søk"
                            />
                        </label>
                    </form>
                </div>
            </section>

            <section className={classes.secondSection}>
                <h1 className={classes.secondSectionIntro}>
                    Populære byer
                </h1>
                <div className={classes.pictures}>
                    <div>
                        <p>
                            Oslo
                        </p>
                        <img
                            src={oslo}
                            alt="oslo"
                        />
                    </div>
                    <div>
                        <p>
                            Bergen
                        </p>
                        <img
                            src={bergen}
                            alt="bergen"
                        />
                    </div>
                    <div>
                        <p>
                            Trondheim
                        </p>
                        <img
                            src={trondheim}
                            alt="trondheim"
                        />
                    </div>
                    <div>
                        <p>
                            Stavanger
                        </p>
                        <img
                            src={stavanger}
                            alt="stavanger"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
