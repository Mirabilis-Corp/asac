import React, {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SlideAnimations} from 'mirajs/dist/js';
import Lang from "../lang";
import { faSearch, faAngleDown, faBars, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ({lang}){

    let slide__about_ref = useRef(null);
    let slide__members_ref = useRef(null);
    let slide__publications_ref = useRef(null);

    let slides = [slide__about_ref, slide__members_ref, slide__publications_ref];

    const [drawer, setDrawer] = useState(false);
    const [currentDM, setCurrentDM] = useState(-1);
    const [search, setSearch] = useState("");
    const [search_active, setSearchActive] = useState(false);

    useEffect(() => {

    }, []);

    const setDrawerMenu = (slide) => {
        setCurrentDM(currentDM => currentDM === slide ? -1 : slide);
        slides.forEach((item, index) => {
           if (index === slide){
               SlideAnimations.slideToggle(item.current);
           }else{
               SlideAnimations.slideUp(item.current);
           }
        });
    };

    const onSearch = e => {
        setSearch(e.target.value);
    };

    return (
        <>
            <header className="app__header">
                <nav className="app__nav">
                    <div className="nav__logo">
                        <a href="/">
                            <img src={"logo.jpeg"} alt="Asac logo"/>
                        </a>
                    </div>
                    <ul className="nav__menu">
                        <li className="nav__menu-item active">
                            <a href="#">{Lang.header.home[lang]}</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">{Lang.header.about_us[lang]} <FontAwesomeIcon icon={faAngleDown} /></a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item"><a href="#">{Lang.header.rector_text[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.missions[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.organisation[lang]}</a></li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">{Lang.header.our_members[lang]} <FontAwesomeIcon icon={faAngleDown}/></a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item"><a href="#">{Lang.header.no_live_insurance[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.live_insurance[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.reinsurers[lang]}</a></li>
                            </ul>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">{Lang.header.our_partners[lang]}</a>
                        </li>
                        <li className="nav__menu-item">
                            <a href="#">{Lang.header.publications[lang]} <FontAwesomeIcon icon={faAngleDown}/></a>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item"><a href="#">{Lang.header.magazine[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.stat_rapport[lang]}</a></li>
                                <li className="nav__submenu-item"><a href="#">{Lang.header.video_libraries[lang]}</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={`search__root ${search_active ? 'active' : ''}`}>
                        <input className={"search_input"} placeholder={`${Lang.header.search[lang]}...`} type="search" value={search} onChange={(e) => onSearch(e)}/>
                        <button onClick={() => setSearchActive(search_active => !search_active)} className={"btn btn-icon btn-light"}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button className="btn btn-icon btn-light drawer_btn" onClick={() => setDrawer(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </nav>
            </header>

            <div onClick={() => setDrawer(false)} className={`drawer__overlay ${drawer ? 'show' : ''}`}> </div>

            <aside className={`drawer__root ${drawer ? 'show' : ''}`}>
                <div className="d-flex justify-content-center mt-8">
                    <button onClick={() => setDrawer(false)} className={"btn btn-icon btn-light drawer-close"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="nav__logo">
                        <img src={"logo.jpeg"} alt="Asac logo"/>
                    </div>
                </div>
                <ul className="drawer__menu">
                    <li className="drawer__menu-item active">
                        <a href="#">{Lang.header.home[lang]}</a>
                    </li>
                    <li className="drawer__menu-item">
                        <a onClick={() => setDrawerMenu(0)} href="#">
                            <FontAwesomeIcon icon={currentDM === 0 ? faMinus : faPlus} />&nbsp;&nbsp;{Lang.header.about_us[lang]}
                        </a>
                        <ul className="drawer__submenu" ref={slide__about_ref}>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.rector_text[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.missions[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.organisation[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{'lksng lskdjfps msljgapsmsljdgs mgljsdg m'}</a></li>
                        </ul>
                    </li>
                    <li className="drawer__menu-item">
                        <a onClick={() => setDrawerMenu(1)} href="#">
                            <FontAwesomeIcon icon={currentDM === 1 ? faMinus : faPlus}/>&nbsp;&nbsp;{Lang.header.our_members[lang]}
                        </a>
                        <ul className="drawer__submenu" ref={slide__members_ref}>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.no_live_insurance[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.live_insurance[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.reinsurers[lang]}</a></li>
                        </ul>
                    </li>
                    <li className="drawer__menu-item">
                        <a href="#">{Lang.header.our_partners[lang]}</a>
                    </li>
                    <li className="drawer__menu-item">
                        <a onClick={() => setDrawerMenu(2)} href="#">
                            <FontAwesomeIcon icon={currentDM === 2 ? faMinus : faPlus}/>&nbsp;&nbsp;{Lang.header.publications[lang]}
                        </a>
                        <ul className="drawer__submenu" ref={slide__publications_ref}>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.magazine[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.stat_rapport[lang]}</a></li>
                            <li className="drawer__submenu-item"><a href="#">{Lang.header.video_libraries[lang]}</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </>
    )
}
