/// <reference path="react.d.ts" />

declare module "react/lib/ReactCurrentOwner" {
    var current: any;
}
declare module "react/lib/ReactElement" {
    function isValidElement(element: any): boolean;
}

declare module "react/lib/ReactNodeTypes" {
    function getType(element: JSX.Element): string;
}

declare module "react/lib/ReactReconciler" {
    function mountComponent(element: JSX.Element, transaction: any, nativeParent: any, nativeContainerInfo: any, context: any): string | JSX.Element;

}

declare module "react/lib/ReactDOMContainerInfo" {
    export default function (): any;
}

declare module "react/lib/ReactDefaultBatchingStrategy" {
    
}

declare module "react/lib/ReactMarkupChecksum" {
    function addChecksumToMarkup(markup: string): string;
}

declare module "react/lib/ReactServerBatchingStrategy" {
    
}

declare module "react/lib/ReactServerRenderingTransaction" {
    function getPooled(makeStaticMarkup: boolean);
    function release(transaction: any);
}

declare module "react/lib/ReactUpdates" {
    module injection {
        function injectBatchingStrategy(strategy: any);
    }
}

declare module "react/lib/instantiateReactComponent" {
    export default function (element: __React.Component<any, any>);
}

declare module "react/lib/ReactCompositeComponent" {
    var Mixin: any;
}

declare module "react/lib/ReactDefaultInjection" {
    function inject();
}

declare module "react/lib/ReactVersion" {

}

declare module "react/lib/escapeTextContentForBrowser" {
    export default function (content: any);
}

declare module "react/lib/ReactDOMComponentTree" {
    function getNodeFromInstance(instance: __React.Component<any, any>);
    function precacheNode(instance, element);
}

declare module "react/lib/ReactBrowserEventEmitter" {
    function trapBubbledEvent(levelType: string, eventName: string, node: any);
}

declare module "react/lib/EventConstants" {
    var topLevelTypes: {
        topLoad: string;
        topError: string;
        topReset: string;
        topInvalid: string;
        topSubmit: string;
    };
}

declare module __ReactLib {
    module Element {
        function getNativeProps(instance, props, nativeParent?);
        function mountWrapper(instance, props, nativeParent);
        function postMountWrapper(instance);
    }
}

declare module "react/lib/ReactDOMButton" {
    import element = __ReactLib.Element;
    export = element;
}

declare module "react/lib/ReactDOMInput" {
    import element = __ReactLib.Element;
    export = element;
}

declare module "react/lib/ReactDOMOption" {
    import element = __ReactLib.Element;
    export = element;
}

declare module "react/lib/ReactDOMSelect" {
    import element = __ReactLib.Element;
    export = element;
}

declare module "react/lib/ReactDOMTextarea" {
    import element = __ReactLib.Element;
    export = element;
}

declare module "react/lib/DOMNamespaces" {
    var svg;
    var html;
    var mathml;
}

declare module "react/lib/validateDOMNesting" {
    function updatedAncestorInfo(parentInfo, tag, instance);
}

declare module "react/lib/ReactDOMComponentFlags" {
    var hasCachedChildNodes;
}

declare module "react/lib/DOMPropertyOperations" {
    function setAttributeForRoot(element);
}

declare module "react/lib/DOMLazyTree" {
    function self(element);
    export default self;
}

declare module "react/lib/AutoFocusUtils" {
    var focusDOMComponent;
}

declare module "react/lib/ReactDOMComponent" {
    class ReactDOMComponent {
        Mixin: any;
    }
    export default ReactDOMComponent;
}