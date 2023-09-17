import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
const AdditionalDrug = () => {
    const products = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11 Feb 23</div><div className='theme12 f14'> @4:00</div></div>,
            DRUG: <div className='nowwrap1 f15'><div className="theme14">ING Pcm</div></div>,
            DOSE: <div className='nowwrap1 f15'><div className="theme14">100mg</div></div>,
            ROUTE: <div className='nowwrap1 f15'><div className="theme14">Iv</div></div>,
            FREQUENCY: <div className='nowwrap1 f15'><div className="theme14">OD</div></div>,

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11 Feb 23</div><div className='theme12 f14'> @4:00</div></div>,
            DRUG: <div className='nowwrap1 f15'><div className="theme14">ING Pcm</div></div>,
            DOSE: <div className='nowwrap1 f15'><div className="theme14">100mg</div></div>,
            ROUTE: <div className='nowwrap1 f15'><div className="theme14">Iv</div></div>,
            FREQUENCY: <div className='nowwrap1 f15'><div className="theme14">OD</div></div>,

        },

    ];
    const columns = [
        {
            dataField: "SNO",
            text: (
                <div className='f13'>
                    SNO
                </div>
            ),
        },
        {
            dataField: "DATE_TIME",
            text: (
                <div className='f13'>
                    DATE/TIME
                </div>
            ),
        },
        {
            dataField: "DRUG",
            text: (
                <div className='f13'>
                    DRUG
                </div>
            ),
        },
        {
            dataField: "DOSE",
            text: (
                <div className='f13'>
                   DOSE
                </div>
            ),
        },
        {
            dataField: "ROUTE",
            text: (
                <div className='f13'>
                    ROUTE
                </div>
            ),
        },
        {
            dataField: "FREQUENCY",
            text: (
                <div className='f13'>
                    FREQUENCY
                </div>
            ),
        }


    ];
    return (
        <div>
            <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
        </div>
    )
}

export default AdditionalDrug