import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
const MyPDFViewer = (props) => {
    const [error, setError] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(2);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setError(error);
    };

    const [state, setState] = useState("")

    useEffect(() => {
        if (props.test && !props.loading) {
            setPageNumber(1)
            setTimeout(() => {
                setState(props.test)
            }, [1000])
        }
    }, [props.test])


    function goToPrevPage() {
        setPageNumber(pageNumber - 1)
    }

    function goToNextPage() {
        setPageNumber(pageNumber + 1)
    }

    try {
        // Code that may throw an error
        if (state && !error) {
            return (
                <>
                    <div>
                        <Document file={state}
                            onLoadError={handleDocumentLoadError} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        {/* <p>
              Page {pageNumber} of {numPages}
            </p> */}
                    </div>
                    <div className="page-controls">
                        <Button variant="link"
                            disabled={pageNumber <= 1}
                            onClick={() => goToPrevPage()}
                            type="button"
                        >
                            <i className="fal fa-angle-left" />
                        </Button>
                        <span className="text-dark">
                            {`${pageNumber || (numPages ? 1 : '--')} of ${numPages || '--'}`}
                        </span>
                        <Button variant="link"
                            disabled={pageNumber >= numPages}
                            onClick={() => goToNextPage()}
                            type="button"
                        >
                            <i className="fal fa-angle-right" />
                        </Button>
                    </div>
                </>
            );
        }
    } catch (error) {
        console.error('Unhandled error:', error);
        return null; // Return null or a fallback UI in case of error
    }
};

export default MyPDFViewer;
