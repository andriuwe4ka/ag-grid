// Type definitions for ag-grid v17.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BorderLayout } from "../layout/borderLayout";
import { LoggerFactory } from "../logger";
import { BeanStub } from "../context/beanStub";
import { RowContainerComponent } from "../rendering/rowContainerComponent";
export declare type RowContainerComponentNames = 'fullWidth' | 'body' | 'pinnedLeft' | 'pinnedRight' | 'floatingTop' | 'floatingTopPinnedLeft' | 'floatingTopPinnedRight' | 'floatingTopFullWidth' | 'floatingBottom' | 'floatingBottomPinnedLeft' | 'floatingBottomPinnedRight' | 'floatingBottomFullWith';
export declare type RowContainerComponents = {
    [K in RowContainerComponentNames]: RowContainerComponent;
};
export declare class GridPanel extends BeanStub {
    private alignedGridsService;
    private gridOptionsWrapper;
    private columnController;
    private rowRenderer;
    private pinnedRowModel;
    private eventService;
    private context;
    private animationFrameService;
    private navigationService;
    private paginationProxy;
    private columnApi;
    private gridApi;
    private rangeController;
    private dragService;
    private selectionController;
    private clipboardService;
    private csvCreator;
    private mouseEventService;
    private focusedCellController;
    private $scope;
    private scrollVisibleService;
    private contextMenuFactory;
    private frameworkFactory;
    private valueService;
    private componentRecipes;
    private dragAndDropService;
    private heightScaler;
    private layout;
    private logger;
    private eBodyViewport;
    private eRoot;
    private eBody;
    private rowContainerComponents;
    private eBodyContainer;
    private ePinnedLeftColsContainer;
    private ePinnedRightColsContainer;
    private eFullWidthCellViewport;
    private eFullWidthCellContainer;
    private ePinnedLeftColsViewport;
    private ePinnedRightColsViewport;
    private eBodyViewportWrapper;
    private eHeaderContainer;
    private eHeaderOverlay;
    private ePinnedLeftHeader;
    private ePinnedRightHeader;
    private eHeader;
    private eHeaderViewport;
    private eFloatingTop;
    private ePinnedLeftFloatingTop;
    private ePinnedRightFloatingTop;
    private eFloatingTopContainer;
    private eFloatingTopViewport;
    private eFloatingTopFullWidthCellContainer;
    private eFloatingBottom;
    private ePinnedLeftFloatingBottom;
    private ePinnedRightFloatingBottom;
    private eFloatingBottomContainer;
    private eFloatingBottomViewport;
    private eFloatingBottomFullWidthCellContainer;
    private eAllCellContainers;
    private scrollLeft;
    private nextScrollLeft;
    private scrollTop;
    private nextScrollTop;
    private verticalRedrawNeeded;
    private bodyHeight;
    private enableRtl;
    private forPrint;
    private autoHeight;
    private scrollWidth;
    private pinningRight;
    private pinningLeft;
    private useAnimationFrame;
    private scrollTimeout;
    agWire(loggerFactory: LoggerFactory): void;
    getVScrollPosition(): {
        top: number;
        bottom: number;
    };
    getHScrollPosition(): {
        left: number;
        right: number;
    };
    destroy(): void;
    private onRowDataChanged();
    private showOrHideOverlay();
    private onNewColumnsLoaded();
    getLayout(): BorderLayout;
    private init();
    private addRowDragListener();
    private addStopEditingWhenGridLosesFocus();
    private addAngularApplyCheck();
    private disableBrowserDragging();
    private addEventListeners();
    private addDragListeners();
    private addMouseListeners();
    private addKeyboardEvents();
    private addBodyViewportListener();
    getBodyClientRect(): ClientRect;
    private getRowForEvent(event);
    private processKeyboardEvent(eventName, keyboardEvent);
    scrollToTop(): void;
    private processMouseEvent(eventName, mouseEvent);
    private mockContextMenuForIPad();
    private handleContextMenuMouseEvent(mouseEvent, touchEvent, rowComp, cellComp);
    private onContextMenu(mouseEvent, touchEvent, rowNode, column, value);
    private preventDefaultOnContextMenu(mouseEvent);
    private addShortcutKeyListeners();
    private onCtrlAndA(event);
    private onCtrlAndC(event);
    private onCtrlAndV(event);
    private onCtrlAndD(event);
    ensureIndexVisible(index: any, position?: string): void;
    getPrimaryScrollViewport(): HTMLElement;
    getCenterWidth(): number;
    isHorizontalScrollShowing(): boolean;
    private isVerticalScrollShowing();
    private isBodyVerticalScrollShowing();
    periodicallyCheck(): void;
    private setScrollShowing();
    private setBottomPaddingOnPinnedRight();
    private setMarginOnFullWidthCellContainer();
    ensureColumnVisible(key: any): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    private getWidthForSizeColsToFit();
    sizeColumnsToFit(nextTimeout?: number): void;
    getBodyContainer(): HTMLElement;
    getDropTargetBodyContainers(): HTMLElement[];
    getBodyViewport(): HTMLElement;
    getDropTargetLeftContainers(): HTMLElement[];
    getDropTargetPinnedRightContainers(): HTMLElement[];
    getHeaderContainer(): HTMLElement;
    getHeaderOverlay(): HTMLElement;
    getRoot(): HTMLElement;
    getPinnedLeftHeader(): HTMLElement;
    getPinnedRightHeader(): HTMLElement;
    private queryHtmlElement(selector);
    private loadTemplate();
    private findElements();
    private setupRowAnimationCssClass();
    private suppressScrollOnFloatingRow();
    getRowContainers(): RowContainerComponents;
    private addMouseWheelEventListeners();
    getHeaderViewport(): HTMLElement;
    private centerMouseWheelListener(event);
    genericMouseWheelListener(event: any): boolean;
    private generalMouseWheelListener(event, targetPanel);
    onDisplayedColumnsChanged(): void;
    private onDisplayedColumnsWidthChanged();
    private onScrollVisibilityChanged();
    private setWidthsOfContainers();
    private setPinnedLeftWidth();
    private setPinnedRightWidth();
    private setPinnedContainersVisible();
    setBodyAndHeaderHeights(): void;
    getBodyHeight(): number;
    setHorizontalScrollPosition(hScrollPosition: number): void;
    setVerticalScrollPosition(vScrollPosition: number): void;
    scrollHorizontally(pixels: number): number;
    scrollVertically(pixels: number): number;
    private addPreventHeaderScroll();
    private addScrollListener();
    private onBodyScroll();
    private onBodyHorizontalScroll();
    private doHorizontalScroll();
    private onBodyVerticalScroll();
    private onVerticalScroll(sourceElement);
    executeFrame(): boolean;
    private redrawRowsAfterScroll();
    private isBodyVerticalScrollActive();
    private addIEPinFix(onPinnedRightScroll, onPinnedLeftScroll);
    setLeftAndRightBounds(): void;
    getBodyViewportScrollLeft(): number;
    setBodyViewportScrollLeft(value: number): void;
    horizontallyScrollHeaderCenterAndFloatingCenter(): void;
    private fakeVerticalScroll(position);
    private setFakeScroll(eContainer, pixels);
    addScrollEventListener(listener: () => void): void;
    removeScrollEventListener(listener: () => void): void;
}
