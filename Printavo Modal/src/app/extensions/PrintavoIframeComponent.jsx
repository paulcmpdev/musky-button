import React, { useState, useEffect } from 'react';
import { Link, Button, Text, Box, Flex, hubspot } from '@hubspot/ui-extensions';

// Define the Extension component, taking in openIframe as a prop
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);
const Extension = ({ openIframe }) => {
  const [invoiceURL, setInvoiceURL] = useState('');


 onClick={handleClick}
  
 useEffect(() => {
    // Simulate fetching associated deals to get Invoice_URL
    // Replace this with your actual fetch call
    const fethcproperties = async () => {
      const dealsData = await fethcproperties(); // Assume fetchDeals is defined elsewhere
      const invoiceURL = dealsData.Invoice_URL; // Adjust according to actual data structure
      setInvoiceURL(invoiceURL);
    };

    fethcproperties();
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleClick = () => {
    if (invoiceURL) {
      openIframe({
        uri: invoiceURL, // Use the fetched Invoice_URL
        height: 1000,
        width: 1000,
        title: 'Printavo iFrame',
        flush: true,
      });
    }
  };
  // Render button if invoiceURL is available
  return invoiceURL ? (
    <button onClick={handleClick}>Open Invoice</button>
  ) : null; // Show nothing or a loader while fetching Invoice_URL
}

<>
<Flex direction="column" align="start" gap="medium">
  <Text>
    Clicking the button will open a modal dialog with an iframe that
    displays the content at the provided URL. Get more info on how to do this {" "}.
    <Link href="https://developers.hubspot.com/docs/platform/create-ui-extensions#open-an-iframe-in-a-modal">
      here
    </Link>
  </Text>

  <Box>
    <Button type="submit" onClick={handleClick}>
      Printavo Invoice
    </Button>
  </Box>
</Flex>
</>