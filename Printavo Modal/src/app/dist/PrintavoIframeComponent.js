(function(React2, react) {
  "use strict";
  function extend_V2(renderExtensionCallback) {
    return self.extend_V2(renderExtensionCallback);
  }
  function serverless(name, options) {
    return self.serverless(name, options);
  }
  function fetch(url, options) {
    return self.hsFetch(url, options);
  }
  const hubspot = {
    extend: extend_V2,
    serverless,
    fetch
  };
  react.createRemoteReactComponent("Alert");
  const Button = react.createRemoteReactComponent("Button", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("ButtonRow");
  react.createRemoteReactComponent("Card");
  react.createRemoteReactComponent("DescriptionList");
  react.createRemoteReactComponent("DescriptionListItem");
  react.createRemoteReactComponent("Divider");
  react.createRemoteReactComponent("EmptyState");
  react.createRemoteReactComponent("ErrorState");
  react.createRemoteReactComponent("Form");
  react.createRemoteReactComponent("Heading");
  react.createRemoteReactComponent("Image", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("Input");
  const Link = react.createRemoteReactComponent("Link", {
    fragmentProps: ["overlay"]
  });
  react.createRemoteReactComponent("TextArea");
  react.createRemoteReactComponent("Textarea");
  react.createRemoteReactComponent("LoadingSpinner");
  react.createRemoteReactComponent("ProgressBar");
  react.createRemoteReactComponent("Select");
  react.createRemoteReactComponent("Tag", {
    fragmentProps: ["overlay"]
  });
  const Text = react.createRemoteReactComponent("Text");
  react.createRemoteReactComponent("Tile");
  react.createRemoteReactComponent("Stack");
  react.createRemoteReactComponent("ToggleGroup");
  react.createRemoteReactComponent("StatisticsItem");
  react.createRemoteReactComponent("Statistics");
  react.createRemoteReactComponent("StatisticsTrend");
  react.createRemoteReactComponent("Table");
  react.createRemoteReactComponent("TableFooter");
  react.createRemoteReactComponent("TableCell");
  react.createRemoteReactComponent("TableRow");
  react.createRemoteReactComponent("TableBody");
  react.createRemoteReactComponent("TableHeader");
  react.createRemoteReactComponent("TableHead");
  react.createRemoteReactComponent("NumberInput");
  const Box = react.createRemoteReactComponent("Box");
  react.createRemoteReactComponent("StepIndicator");
  react.createRemoteReactComponent("Accordion");
  react.createRemoteReactComponent("MultiSelect");
  const Flex = react.createRemoteReactComponent("Flex");
  react.createRemoteReactComponent("DateInput");
  react.createRemoteReactComponent("Checkbox");
  react.createRemoteReactComponent("RadioButton");
  react.createRemoteReactComponent("List");
  react.createRemoteReactComponent("Toggle");
  react.createRemoteReactComponent("Dropdown");
  react.createRemoteReactComponent("Panel");
  react.createRemoteReactComponent("PanelFooter");
  react.createRemoteReactComponent("PanelBody");
  react.createRemoteReactComponent("PanelSection");
  react.createRemoteReactComponent("StepperInput");
  react.createRemoteReactComponent("Modal");
  react.createRemoteReactComponent("ModalBody");
  react.createRemoteReactComponent("ModalFooter");
  react.createRemoteReactComponent("Icon");
  react.createRemoteReactComponent("StatusTag");
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  hubspot.extend(({ actions }) => /* @__PURE__ */ React2.createElement(Extension, { openIframe: actions.openIframeModal }));
  const Extension = ({ openIframe }) => {
    const [invoiceURL, setInvoiceURL] = React2.useState("");
    onClick = { handleClick: handleClick2 };
    React2.useEffect(() => {
      const fethcproperties = async () => {
        const dealsData = await fethcproperties();
        const invoiceURL2 = dealsData.Invoice_URL;
        setInvoiceURL(invoiceURL2);
      };
      fethcproperties();
    }, []);
    const handleClick2 = () => {
      if (invoiceURL) {
        openIframe({
          uri: invoiceURL,
          // Use the fetched Invoice_URL
          height: 1e3,
          width: 1e3,
          title: "Printavo iFrame",
          flush: true
        });
      }
    };
    return invoiceURL ? /* @__PURE__ */ React2.createElement("button", { onClick: handleClick2 }, "Open Invoice") : null;
  };
  /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Flex, { direction: "column", align: "start", gap: "medium" }, /* @__PURE__ */ React2.createElement(Text, null, "Clicking the button will open a modal dialog with an iframe that displays the content at the provided URL. Get more info on how to do this ", " ", ".", /* @__PURE__ */ React2.createElement(Link, { href: "https://developers.hubspot.com/docs/platform/create-ui-extensions#open-an-iframe-in-a-modal" }, "here")), /* @__PURE__ */ React2.createElement(Box, null, /* @__PURE__ */ React2.createElement(Button, { type: "submit", onClick: handleClick }, "Printavo Invoice"))));
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRhdm9JZnJhbWVDb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uL2V4dGVuc2lvbnMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9odWJzcG90LmpzIiwiLi4vZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2NvcmVDb21wb25lbnRzLmpzIiwiLi4vZXh0ZW5zaW9ucy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3R5cGVzLmpzIiwiLi4vZXh0ZW5zaW9ucy9QcmludGF2b0lmcmFtZUNvbXBvbmVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZF9WMihyZW5kZXJFeHRlbnNpb25DYWxsYmFjaykge1xuICAgIHJldHVybiBzZWxmLmV4dGVuZF9WMihyZW5kZXJFeHRlbnNpb25DYWxsYmFjayk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlbGYuc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VsZi5oc0ZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnQgY29uc3QgaHVic3BvdCA9IHtcbiAgICBleHRlbmQ6IGV4dGVuZF9WMixcbiAgICBzZXJ2ZXJsZXNzLFxuICAgIGZldGNoLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IH0gZnJvbSAnQHJlbW90ZS11aS9yZWFjdCc7XG5leHBvcnQgY29uc3QgQWxlcnQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQWxlcnQnKTtcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG5leHBvcnQgY29uc3QgQnV0dG9uUm93ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvblJvdycpO1xuZXhwb3J0IGNvbnN0IENhcmQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdEZXNjcmlwdGlvbkxpc3QnKTtcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkxpc3RJdGVtID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Rlc2NyaXB0aW9uTGlzdEl0ZW0nKTtcbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0RpdmlkZXInKTtcbmV4cG9ydCBjb25zdCBFbXB0eVN0YXRlID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0VtcHR5U3RhdGUnKTtcbmV4cG9ydCBjb25zdCBFcnJvclN0YXRlID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Vycm9yU3RhdGUnKTtcbmV4cG9ydCBjb25zdCBGb3JtID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Zvcm0nKTtcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRpbmcnKTtcbmV4cG9ydCBjb25zdCBJbWFnZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbWFnZScsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuZXhwb3J0IGNvbnN0IElucHV0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lucHV0Jyk7XG5leHBvcnQgY29uc3QgTGluayA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdMaW5rJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGV4dEFyZWEnKTtcbi8vIFRleHRhcmVhIHdhcyBjaGFuZ2VkIHRvIFRleHRBcmVhXG4vLyBFeHBvcnRpbmcgYm90aCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuLyoqIEBkZXByZWNhdGVkIHVzZSBUZXh0QXJlYSBpbnN0ZWFkLiBXaXRoIGEgY2FwaXRhbCBBLiovXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGV4dGFyZWEnKTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nU3Bpbm5lciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nU3Bpbm5lcicpO1xuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1Byb2dyZXNzQmFyJyk7XG5leHBvcnQgY29uc3QgU2VsZWN0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlbGVjdCcpO1xuZXhwb3J0IGNvbnN0IFRhZyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWcnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbmV4cG9ydCBjb25zdCBUZXh0ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHQnKTtcbmV4cG9ydCBjb25zdCBUaWxlID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RpbGUnKTtcbi8qKiBAZGVwcmVjYXRlZCB1c2UgRmxleCBpbnN0ZWFkLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgcmVsZWFzZS4gKi9cbmV4cG9ydCBjb25zdCBTdGFjayA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGFjaycpO1xuZXhwb3J0IGNvbnN0IFRvZ2dsZUdyb3VwID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RvZ2dsZUdyb3VwJyk7XG5leHBvcnQgY29uc3QgU3RhdGlzdGljc0l0ZW0gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc0l0ZW0nKTtcbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3MnKTtcbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzVHJlbmQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc1RyZW5kJyk7XG5leHBvcnQgY29uc3QgVGFibGUgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGUnKTtcbmV4cG9ydCBjb25zdCBUYWJsZUZvb3RlciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUZvb3RlcicpO1xuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUNlbGwnKTtcbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZVJvdycpO1xuZXhwb3J0IGNvbnN0IFRhYmxlQm9keSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUJvZHknKTtcbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWRlcicpO1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWQnKTtcbmV4cG9ydCBjb25zdCBOdW1iZXJJbnB1dCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdOdW1iZXJJbnB1dCcpO1xuZXhwb3J0IGNvbnN0IEJveCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdCb3gnKTtcbmV4cG9ydCBjb25zdCBTdGVwSW5kaWNhdG9yID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0ZXBJbmRpY2F0b3InKTtcbmV4cG9ydCBjb25zdCBBY2NvcmRpb24gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQWNjb3JkaW9uJyk7XG5leHBvcnQgY29uc3QgTXVsdGlTZWxlY3QgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTXVsdGlTZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBGbGV4ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ZsZXgnKTtcbmV4cG9ydCBjb25zdCBEYXRlSW5wdXQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnRGF0ZUlucHV0Jyk7XG5leHBvcnQgY29uc3QgQ2hlY2tib3ggPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2hlY2tib3gnKTtcbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdSYWRpb0J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IExpc3QgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnTGlzdCcpO1xuZXhwb3J0IGNvbnN0IFRvZ2dsZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGUnKTtcbmV4cG9ydCBjb25zdCBEcm9wZG93biA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdEcm9wZG93bicpO1xuZXhwb3J0IGNvbnN0IFBhbmVsID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsJyk7XG5leHBvcnQgY29uc3QgUGFuZWxGb290ZXIgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxGb290ZXInKTtcbmV4cG9ydCBjb25zdCBQYW5lbEJvZHkgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxCb2R5Jyk7XG5leHBvcnQgY29uc3QgUGFuZWxTZWN0aW9uID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsU2VjdGlvbicpO1xuZXhwb3J0IGNvbnN0IFN0ZXBwZXJJbnB1dCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGVwcGVySW5wdXQnKTtcbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbCcpO1xuZXhwb3J0IGNvbnN0IE1vZGFsQm9keSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEJvZHknKTtcbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEZvb3RlcicpO1xuZXhwb3J0IGNvbnN0IEljb24gPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCgnSWNvbicpO1xuZXhwb3J0IGNvbnN0IFN0YXR1c1RhZyA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0dXNUYWcnKTtcbiIsImV4cG9ydCBjbGFzcyBFeHRlbnNpb25FdmVudCB7XG4gICAgdHlwZTtcbiAgICBidWJibGVzO1xuICAgIHRpbWVTdGFtcDtcbiAgICBpZDtcbiAgICBjb25zdHJ1Y3RvcihldmVudCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSBldmVudC5idWJibGVzO1xuICAgICAgICB0aGlzLnR5cGUgPSBldmVudC50eXBlO1xuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IGV2ZW50LnRpbWVTdGFtcDtcbiAgICAgICAgdGhpcy5pZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXRFeHRlbnNpb25FdmVudCBleHRlbmRzIEV4dGVuc2lvbkV2ZW50IHtcbiAgICB0YXJnZXRWYWx1ZTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgc3VwZXIoZXZlbnQpO1xuICAgICAgICB0aGlzLnRhcmdldFZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGljb25OYW1lcyA9IHtcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgcmVtb3ZlOiAncmVtb3ZlJyxcbiAgICBhZGQ6ICdhZGQnLFxuICAgIGF0dGFjaDogJ2F0dGFjaCcsXG4gICAgZGF0ZTogJ2RhdGUnLFxuICAgIGRlbGV0ZTogJ2RlbGV0ZScsXG4gICAgZWRpdDogJ2VkaXQnLFxuICAgIGVtYWlsOiAnZW1haWwnLFxuICAgIGV4Y2xhbWF0aW9uOiAnZXhjbGFtYXRpb24nLFxuICAgIGxvY2F0aW9uOiAnbG9jYXRpb24nLFxuICAgIHVwQ2FyYXQ6ICd1cENhcmF0JyxcbiAgICBkb3duQ2FyYXQ6ICdkb3duQ2FyYXQnLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBzaG9wcGluZ0NhcnQ6ICdjYXJ0JyxcbiAgICBjbG9jazogJ3RpbWUnLFxuICAgIGNvbW1lbnQ6ICdjb21tZW50cycsXG4gICAgY29udGFjdDogJ2NvbnRhY3RzJyxcbiAgICBzdGFyOiAnZmF2b3JpdGUnLFxuICAgIGZpbGU6ICdmaWxlJyxcbiAgICByZXBvcnRzOiAncmVwb3J0cycsXG4gICAgdmlkZW86ICd2aWRlbycsXG4gICAgcm9ib3Q6ICdzaW1wbGVCb3QnLFxuICAgIHJlZnJlc2g6ICdyZWZyZXNoJyxcbiAgICBmYWNlSGFwcHk6ICdlbW9qaScsXG4gICAgZmFjZU5ldXRyYWw6ICdlbW9qaUxpbmVOZXV0cmFsJyxcbiAgICBmYWNlU2FkOiAnZW1vamlMaW5lU2FkJyxcbiAgICB1cGxvYWQ6ICd1cGxvYWQnLFxuICAgIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICAgIGxlZnQ6ICdsZWZ0JyxcbiAgICByaWdodDogJ3JpZ2h0JyxcbiAgICBkYXRhU3luYzogJ2RhdGFTeW5jJyxcbiAgICBpbWFnZUdhbGxlcnk6ICdpbWFnZUdhbGxlcnknLFxuICAgIHNlYXJjaDogJ3NlYXJjaCcsXG4gICAgc2F2ZTogJ3NhdmVFZGl0YWJsZVZpZXcnLFxuICAgIG5vdGlmaWNhdGlvbjogJ25vdGlmaWNhdGlvbicsXG59O1xuLyoqXG4gKiBAY2F0ZWdvcnkgU2VydmVybGVzc1xuICovXG5leHBvcnQgdmFyIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXM7XG4oZnVuY3Rpb24gKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMpIHtcbiAgICBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzW1wiU3VjY2Vzc1wiXSA9IFwiU1VDQ0VTU1wiO1xuICAgIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXNbXCJFcnJvclwiXSA9IFwiRVJST1JcIjtcbn0pKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgfHwgKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgPSB7fSkpO1xuLyoqIEBkZXByZWNhdGVkIHVzZSBFeHRlbnNpb25FdmVudC9Gb3JtU3VibWl0RXh0ZW5zaW9uRXZlbnQgaW5zdGVhZCAqL1xuZXhwb3J0IGNsYXNzIFJlbW90ZUV2ZW50IHtcbiAgICB0eXBlO1xuICAgIGJ1YmJsZXM7XG4gICAgdGltZVN0YW1wO1xuICAgIHRhcmdldFZhbHVlO1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBldmVudCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSBldmVudC5idWJibGVzO1xuICAgICAgICB0aGlzLnR5cGUgPSBldmVudC50eXBlO1xuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IGV2ZW50LnRpbWVTdGFtcDtcbiAgICAgICAgdGhpcy50YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgQnV0dG9uLCBUZXh0LCBCb3gsIEZsZXgsIGh1YnNwb3QgfSBmcm9tICdAaHVic3BvdC91aS1leHRlbnNpb25zJztcblxuLy8gRGVmaW5lIHRoZSBFeHRlbnNpb24gY29tcG9uZW50LCB0YWtpbmcgaW4gb3BlbklmcmFtZSBhcyBhIHByb3Bcbmh1YnNwb3QuZXh0ZW5kKChcbiAgeyBhY3Rpb25zIH0gLy8gc2VydmVybGVzcyBmdW5jdGlvbiBpcyBub3QgcmVxdWlyZWQgZm9yIHNpbXBseSBkaXNwbGF5aW5nIGFuIGlmcmFtZVxuKSA9PiA8RXh0ZW5zaW9uIG9wZW5JZnJhbWU9e2FjdGlvbnMub3BlbklmcmFtZU1vZGFsfSAvPik7XG5jb25zdCBFeHRlbnNpb24gPSAoeyBvcGVuSWZyYW1lIH0pID0+IHtcbiAgY29uc3QgW2ludm9pY2VVUkwsIHNldEludm9pY2VVUkxdID0gdXNlU3RhdGUoJycpO1xuXG5cbiBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgXG4gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTaW11bGF0ZSBmZXRjaGluZyBhc3NvY2lhdGVkIGRlYWxzIHRvIGdldCBJbnZvaWNlX1VSTFxuICAgIC8vIFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgYWN0dWFsIGZldGNoIGNhbGxcbiAgICBjb25zdCBmZXRoY3Byb3BlcnRpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkZWFsc0RhdGEgPSBhd2FpdCBmZXRoY3Byb3BlcnRpZXMoKTsgLy8gQXNzdW1lIGZldGNoRGVhbHMgaXMgZGVmaW5lZCBlbHNld2hlcmVcbiAgICAgIGNvbnN0IGludm9pY2VVUkwgPSBkZWFsc0RhdGEuSW52b2ljZV9VUkw7IC8vIEFkanVzdCBhY2NvcmRpbmcgdG8gYWN0dWFsIGRhdGEgc3RydWN0dXJlXG4gICAgICBzZXRJbnZvaWNlVVJMKGludm9pY2VVUkwpO1xuICAgIH07XG5cbiAgICBmZXRoY3Byb3BlcnRpZXMoKTtcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IG1lYW5zIHRoaXMgZWZmZWN0IHJ1bnMgb25jZSBvbiBjb21wb25lbnQgbW91bnRcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAoaW52b2ljZVVSTCkge1xuICAgICAgb3BlbklmcmFtZSh7XG4gICAgICAgIHVyaTogaW52b2ljZVVSTCwgLy8gVXNlIHRoZSBmZXRjaGVkIEludm9pY2VfVVJMXG4gICAgICAgIGhlaWdodDogMTAwMCxcbiAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgIHRpdGxlOiAnUHJpbnRhdm8gaUZyYW1lJyxcbiAgICAgICAgZmx1c2g6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8vIFJlbmRlciBidXR0b24gaWYgaW52b2ljZVVSTCBpcyBhdmFpbGFibGVcbiAgcmV0dXJuIGludm9pY2VVUkwgPyAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+T3BlbiBJbnZvaWNlPC9idXR0b24+XG4gICkgOiBudWxsOyAvLyBTaG93IG5vdGhpbmcgb3IgYSBsb2FkZXIgd2hpbGUgZmV0Y2hpbmcgSW52b2ljZV9VUkxcbn1cblxuPD5cbjxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwic3RhcnRcIiBnYXA9XCJtZWRpdW1cIj5cbiAgPFRleHQ+XG4gICAgQ2xpY2tpbmcgdGhlIGJ1dHRvbiB3aWxsIG9wZW4gYSBtb2RhbCBkaWFsb2cgd2l0aCBhbiBpZnJhbWUgdGhhdFxuICAgIGRpc3BsYXlzIHRoZSBjb250ZW50IGF0IHRoZSBwcm92aWRlZCBVUkwuIEdldCBtb3JlIGluZm8gb24gaG93IHRvIGRvIHRoaXMge1wiIFwifS5cbiAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcGxhdGZvcm0vY3JlYXRlLXVpLWV4dGVuc2lvbnMjb3Blbi1hbi1pZnJhbWUtaW4tYS1tb2RhbFwiPlxuICAgICAgaGVyZVxuICAgIDwvTGluaz5cbiAgPC9UZXh0PlxuXG4gIDxCb3g+XG4gICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgUHJpbnRhdm8gSW52b2ljZVxuICAgIDwvQnV0dG9uPlxuICA8L0JveD5cbjwvRmxleD5cbjwvPiJdLCJuYW1lcyI6WyJjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCIsIlNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwiaW52b2ljZVVSTCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOztBQUFPLFdBQVMsVUFBVSx5QkFBeUI7QUFDL0MsV0FBTyxLQUFLLFVBQVUsdUJB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
