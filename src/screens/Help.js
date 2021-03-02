import React from 'react'
import {motion} from 'framer-motion'

function Help() {
    return (
        <motion.div
        exit={{
            x:'-100vh',
          }}
          transition={{
            ease:'easeInOut'
          }}
        style={{border:'0.5px solid darkgray',padding:'20px',margin:'20px',borderRadius:'20px',boxShadow:'7px 7px 7px lightgray'}}>
            <p style={{textAlign:'center',color:'gray'}}><b>Terms And Condition / Help</b></p>
            <p style={{color:'gray'}}>
            The Chat Center service is only available to persons 13 years or older. By agreeing to these terms of service you are stating that you are at least 13 years old.<br/>

The Chat Center Service allows you to create, access, view and store share messages for yourself, with your friends or the public through our mobile apps and our website . As long as you comply with these Terms, you have the right to download and install a copy of the App to your mobile device, and to access and use the Service, for your own personal use. Chat Center gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you by Chat Center. This license is for the sole purpose of enabling you to use and enjoy the benefit of Chat Center services, in the manner permitted by these terms. You may not:

copy, modify or distribute the App for any purpose;
transfer, sublicense, lease, lend, rent or otherwise distribute the App or the Service to any third party;
decompile, reverse-engineer, disassemble, or create derivative works of the App or the Service;
make the functionality of the App or the Service available to multiple users through any means;
use the Service in any unlawful manner, for any unlawful purpose, or in any manner inconsistent with these Terms.
The following terms apply to any App accessed through or downloaded from any app store or distribution platform (like the Apple App Store or other similar platforms) where the App is made available (each such distribution platform an "App Provider"). You acknowledge and agree that:

these Terms are concluded between you and Chat Center, and not with the App Provider, and that Chat Center (not the App Provider), is solely responsible for the App.
the App Provider has no obligation to furnish any maintenance and support services with respect to the App.
In the event of any failure of the App to conform to any applicable warranty, you may notify the App Provider, and the App Provider will refund the purchase price for the App to you (if applicable) and to the maximum extent permitted by applicable law, the App Provider will have no other warranty obligation whatsoever with respect to the App. Any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be the sole responsibility of Chat Center.

If you download our App, such as a stand-alone software product or a browser plugin, you agree that from time to time, the software may download upgrades, updates and additional features from us in order to improve, enhance and further develop the software, Service or App.

Our Service may change from time to time and/or we may stop (permanently or temporarily) providing the Service (or features within the Service), possibly without prior notice to you.

Chat Center Access
In order to access and use Chat Center, you will need to register and create an account (your "Account"). By creating an Account, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of the United States or other applicable jurisdiction. When creating an Account, you may be required to provide certain personal and contact information about yourself or your organization, including information such as your phone number and e-mail address, and other information. By creating an Account, you represent that you have the authority to do so for yourself, your publisher or your organization. We reserve the right to verify information prior to activating an account subject to confirm the Account's authenticity. You agree to provide accurate, current and complete information about your Account. Chat Center reserves the right to update and modify the terms of establishing an account or to change the types of accounts offered by Chat Center without notice to you.

You may choose to provide Chat Center with e-mail addresses and phone numbers of third parties whom you wish to use the Service with. You hereby give your express consent to Chat Center to use the e-mail addresses and phone numbers you provide for use in providing you access and use of the Service.
            </p>
            <cite>These terms and conditions are copied from other website, and might not fully match with my app</cite><br/>
            <cite>Mail your any issue here- rawatnitesh066@gmail.com</cite>
        </motion.div>
    )
}

export default Help
