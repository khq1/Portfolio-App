'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portfolio-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' : 'data-target="#xs-components-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' :
                                            'id="xs-components-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CounterDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CounterDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FutureGreenTechComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FutureGreenTechComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbCaruselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgbCaruselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NordschleifeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NordschleifeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoPicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoPicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RespGalleryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RespGalleryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeSwitchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeSwitchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' : 'data-target="#xs-injectables-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' :
                                        'id="xs-injectables-links-module-AppModule-76c3a289a004a4bbade55768ddafc439a04c21e290120d2fe1551eb42b3a3d9c4a74b9cf81eea6f2889959ddb81ad73e8bd4ac7c187996100130419ef3d40c43"' }>
                                        <li class="link">
                                            <a href="injectables/StyleManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleManagerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DynamicDataSource.html" data-type="entity-link" >DynamicDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynamicFlatNode.html" data-type="entity-link" >DynamicFlatNode</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link" >CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicDatabase.html" data-type="entity-link" >DynamicDatabase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeroService.html" data-type="entity-link" >HeroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesComponent.html" data-type="entity-link" >MessagesComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NgbCaruselComponent.html" data-type="entity-link" >NgbCaruselComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SlideService.html" data-type="entity-link" >SlideService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StyleManagerService.html" data-type="entity-link" >StyleManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link" >ThemeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Option.html" data-type="entity-link" >Option</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Slide.html" data-type="entity-link" >Slide</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});