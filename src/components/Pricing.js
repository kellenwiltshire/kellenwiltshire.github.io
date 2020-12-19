import React from 'react'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const pricing = () => {
    return (
        <div className="pricing">
            <PricingTable className="pricing" highlightColor='#1976D2'>
                <PricingSlot highlighted buttonText='Contact' title='5 Page Website' priceText='$600'>
                    <PricingDetail> <b>Standard 5 Page Website</b></PricingDetail>
                    <PricingDetail> 30 Day Support After Delivery</PricingDetail>
                    <PricingDetail> Unlimited Revisions</PricingDetail>
                </PricingSlot>
                <PricingSlot  buttonText='SIGN UP' title='PROFESSIONAL' priceText='$150/month'>
                    <PricingDetail> <b>Standard 5 Page Website</b></PricingDetail>
                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
                <PricingSlot  buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                    <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                    <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                </PricingSlot>
            </PricingTable>
        </div>
    )
}

export default pricing;