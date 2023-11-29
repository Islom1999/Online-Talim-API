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
                    <a href="index.html" data-type="index-link">online-talim-api documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' :
                                            'id="xs-controllers-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' :
                                        'id="xs-injectables-links-module-AdminModule-f999410e7088ff880fc1013868d58bd3bdfab615483b2136ed163806e620477cd5804361c414c62202948f61cc5b766dbace071d9b717e8ab41d10e1c2d2e0d5"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' :
                                            'id="xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' :
                                        'id="xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-1"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' :
                                            'id="xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' :
                                        'id="xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-2"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' :
                                            'id="xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' :
                                        'id="xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-3"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' :
                                            'id="xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' :
                                        'id="xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-4"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' :
                                            'id="xs-controllers-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' :
                                        'id="xs-injectables-links-module-AdminModule-4985a07d63abbd389721d6bafde9e5f5b2ba2990454abfa2de0f4fae984f1a3b2b6620bf5c74c04627efb26fb7da608999725f105af53d2989d7174b93689293-5"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' :
                                            'id="xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' :
                                        'id="xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-6"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' :
                                            'id="xs-controllers-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' :
                                        'id="xs-injectables-links-module-AdminModule-102bf1cca6c848bcb2e6b7f024d33fa6c8960ab571c88d3090891eb2b0b937a95cd9dc0808e074591021599df72ddc6c9fd39f7ed46b9350526d6e3d4238c4d4-7"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-36244cab5e0f72246b0cb5e013a747a110ed6380149f78e3ee89ff14a1ab067101286443b7bffd815e9db651271df6ddc211666d21b6f029c2f7a9047ae4b1b4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-36244cab5e0f72246b0cb5e013a747a110ed6380149f78e3ee89ff14a1ab067101286443b7bffd815e9db651271df6ddc211666d21b6f029c2f7a9047ae4b1b4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-36244cab5e0f72246b0cb5e013a747a110ed6380149f78e3ee89ff14a1ab067101286443b7bffd815e9db651271df6ddc211666d21b6f029c2f7a9047ae4b1b4"' :
                                        'id="xs-injectables-links-module-AuthModule-36244cab5e0f72246b0cb5e013a747a110ed6380149f78e3ee89ff14a1ab067101286443b7bffd815e9db651271df6ddc211666d21b6f029c2f7a9047ae4b1b4"' }>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacebookStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacebookStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BaseModule-151099e9197553b1c16a1bdb44a4c5bd0dccf948c79b0e60ddd95421e32164f1419de0ca7e1aeb6af6d7b106008e44b64447b3a8fdb99bffb1464e4e6d6564af"' : 'data-bs-target="#xs-injectables-links-module-BaseModule-151099e9197553b1c16a1bdb44a4c5bd0dccf948c79b0e60ddd95421e32164f1419de0ca7e1aeb6af6d7b106008e44b64447b3a8fdb99bffb1464e4e6d6564af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BaseModule-151099e9197553b1c16a1bdb44a4c5bd0dccf948c79b0e60ddd95421e32164f1419de0ca7e1aeb6af6d7b106008e44b64447b3a8fdb99bffb1464e4e6d6564af"' :
                                        'id="xs-injectables-links-module-BaseModule-151099e9197553b1c16a1bdb44a4c5bd0dccf948c79b0e60ddd95421e32164f1419de0ca7e1aeb6af6d7b106008e44b64447b3a8fdb99bffb1464e4e6d6564af"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BillingModule.html" data-type="entity-link" >BillingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' : 'data-bs-target="#xs-controllers-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' :
                                            'id="xs-controllers-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' }>
                                            <li class="link">
                                                <a href="controllers/BillingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' : 'data-bs-target="#xs-injectables-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' :
                                        'id="xs-injectables-links-module-BillingModule-56d93d565a42a0218728a0fd42ea4a96c281a7b3560cc7a4c835eebddc6b52d72c35684ed00696a7970a0f531b7b4fb5ea08595b5cb194632e362fb9c452c3f8"' }>
                                        <li class="link">
                                            <a href="injectables/BillingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' :
                                            'id="xs-controllers-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' :
                                        'id="xs-injectables-links-module-CategoriesModule-aac7698900dcaaf5befd6368a1b6a27bb137a5a8edb6bed29fc0d7a7e48e707a40d8e82855c035780e401dfd6290b92317283dad57165ac32f1c5f43efbad0ec"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' :
                                            'id="xs-controllers-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' :
                                        'id="xs-injectables-links-module-ClientModule-a00333d05379bba5f7f3a4053bac6355e638ee0c0db3084a1425dc5c968239c6096d3515a34b061a3bb3ccdd2bf4ab1847328b54a85ecaef842dd5dda0e4138a"' }>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacebookStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacebookStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' :
                                            'id="xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' :
                                        'id="xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-1"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' :
                                            'id="xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' :
                                        'id="xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-2"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' :
                                            'id="xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' :
                                        'id="xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-3"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' :
                                            'id="xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' :
                                        'id="xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-4"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' :
                                            'id="xs-controllers-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' :
                                        'id="xs-injectables-links-module-ClientModule-919567209847b7a9e4b7a2e80ed04ec5f657356fdda3d0e533d1ccecaaac0a5c120d97bd412626ce3f3271c7ef7dc9bf1c807f98d289e9b9e3b8393729ed0bae-5"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' :
                                            'id="xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' :
                                        'id="xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-6"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' : 'data-bs-target="#xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' :
                                            'id="xs-controllers-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' : 'data-bs-target="#xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' :
                                        'id="xs-injectables-links-module-ClientModule-4c9afe57368c70af63946d5d1b1042689063ebcf0c73dbb0718ce6e8f09573f330a782ec44636d145ca91838cd43c6544f2f875d4e5813b9314bb882e6d1cdb8-7"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' : 'data-bs-target="#xs-controllers-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' :
                                            'id="xs-controllers-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' }>
                                            <li class="link">
                                                <a href="controllers/CoursesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' : 'data-bs-target="#xs-injectables-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' :
                                        'id="xs-injectables-links-module-CoursesModule-432b8a96184734258e942d6d8a0f68b5d9058f1d25cad1a428fc715346967cb4438c433e43175a8ab97cee7b90e93e97dd1beeb5422e82e616ff6f70f2661bb0"' }>
                                        <li class="link">
                                            <a href="injectables/CoursesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageModule.html" data-type="entity-link" >ImageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' : 'data-bs-target="#xs-controllers-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' :
                                            'id="xs-controllers-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' }>
                                            <li class="link">
                                                <a href="controllers/ImageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' : 'data-bs-target="#xs-injectables-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' :
                                        'id="xs-injectables-links-module-ImageModule-59412cc1f121c519d88978f007ca3a00fc3003fc98c6b70afabd54ce0e61c61f70dcedd93203fb387347b5c272b410059af3e081d58906c504f1364d9ce19a9c"' }>
                                        <li class="link">
                                            <a href="injectables/ImageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LessonsModule.html" data-type="entity-link" >LessonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' : 'data-bs-target="#xs-controllers-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' :
                                            'id="xs-controllers-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' }>
                                            <li class="link">
                                                <a href="controllers/LessonsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' : 'data-bs-target="#xs-injectables-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' :
                                        'id="xs-injectables-links-module-LessonsModule-6f6a1eddd11522394d5313645da0cad17ff98e3b78234530c249567d727c6d38c7a07d947699c93f51e777f0bad73def5cfdda8422e16e0e264a74e4d32b4878"' }>
                                        <li class="link">
                                            <a href="injectables/LessonsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PartsModule.html" data-type="entity-link" >PartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' : 'data-bs-target="#xs-controllers-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' :
                                            'id="xs-controllers-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' }>
                                            <li class="link">
                                                <a href="controllers/PartsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' : 'data-bs-target="#xs-injectables-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' :
                                        'id="xs-injectables-links-module-PartsModule-9d63662613457a77ebb7a8fca549dbedf6ff01afe5fe17a7875a43d0eeeabc0957043371edc44e89b4592629bc9d3bddf08082f965cb0f692f8cf14c3ae998a8"' }>
                                        <li class="link">
                                            <a href="injectables/PartsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PartsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' : 'data-bs-target="#xs-controllers-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' :
                                            'id="xs-controllers-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' : 'data-bs-target="#xs-injectables-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' :
                                        'id="xs-injectables-links-module-RoleModule-cb0ac5bc71ed64283ac42ad063473064d46300975db4e90e4f5f069d1bb4981c342215493d3f240c30d91334b3e3bb9c2539cbabeffc4251fd0311785c999b11"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' : 'data-bs-target="#xs-controllers-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' :
                                            'id="xs-controllers-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' : 'data-bs-target="#xs-injectables-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' :
                                        'id="xs-injectables-links-module-UserModule-c07ef216e01f8f7460a4a50ceac2411d78f03ebfdb3d9f4b8e9ed234305e0dd74b810343ac7f4a09ddee2d2591836b1c38fc4ae4e134462987c8c45eaf7232c9"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BilingQuery.html" data-type="entity-link" >BilingQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/Billing.html" data-type="entity-link" >Billing</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlockStatusDto.html" data-type="entity-link" >BlockStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/Course.html" data-type="entity-link" >Course</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBillingDto.html" data-type="entity-link" >CreateBillingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClientDto.html" data-type="entity-link" >CreateClientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCourseDto.html" data-type="entity-link" >CreateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLessonDto.html" data-type="entity-link" >CreateLessonDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePartDto.html" data-type="entity-link" >CreatePartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lesson.html" data-type="entity-link" >Lesson</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginClientDto.html" data-type="entity-link" >loginClientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Part.html" data-type="entity-link" >Part</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaErrorFilter.html" data-type="entity-link" >PrismaErrorFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryDTO.html" data-type="entity-link" >QueryDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryIdDto.html" data-type="entity-link" >QueryIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleDto.html" data-type="entity-link" >RoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleIdDto.html" data-type="entity-link" >RoleIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RtGuard.html" data-type="entity-link" >RtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBillingDto.html" data-type="entity-link" >UpdateBillingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClientPasswordDto.html" data-type="entity-link" >UpdateClientPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCourseDto.html" data-type="entity-link" >UpdateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLessonDto.html" data-type="entity-link" >UpdateLessonDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrdersDto.html" data-type="entity-link" >UpdateOrdersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePartDto.html" data-type="entity-link" >UpdatePartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePasswordDto.html" data-type="entity-link" >UpdatePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyEmailDto.html" data-type="entity-link" >VerifyEmailDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AtGuard.html" data-type="entity-link" >AtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AtStrategy.html" data-type="entity-link" >AtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacebookStrategy.html" data-type="entity-link" >FacebookStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleGuard.html" data-type="entity-link" >GoogleGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleStrategy.html" data-type="entity-link" >GoogleStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtStrategy.html" data-type="entity-link" >RtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PermissionsGuard.html" data-type="entity-link" >PermissionsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBaseController.html" data-type="entity-link" >IBaseController</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseService.html" data-type="entity-link" >IBaseService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFacebookClient.html" data-type="entity-link" >IFacebookClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGoogleClient.html" data-type="entity-link" >IGoogleClient</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});