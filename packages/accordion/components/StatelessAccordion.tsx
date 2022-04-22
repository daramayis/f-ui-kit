import * as React from "react";
import { Stack } from "../../styleUtils/layout";
import { Provider as AccordionProvider } from "./AccordionContext";
import { AccordionBaseProps } from "../types";

interface AccordionProps extends AccordionBaseProps {
  /**
   * An array of open accordion panel IDs
   */
  expandedItems?: string[];
  children: React.ReactNode;
}

const Accordion = ({
  allowMultipleExpanded = false,
  "data-cy": dataCy = "accordion",
  children,
  expandedItems = [],
  onChange
}: AccordionProps) => {
  return (
    <AccordionProvider
      allowMultipleExpanded={allowMultipleExpanded}
      controlledExpandedItems={expandedItems}
      onChange={onChange}
    >
      <Stack data-cy={dataCy}>{children}</Stack>
    </AccordionProvider>
  );
};

export default Accordion;
