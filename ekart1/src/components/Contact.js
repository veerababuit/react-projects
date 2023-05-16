function Contact() {
    return (
        <>
            <h1 className="mt-5"> Contact Details Find Here</h1>

            {/* Google map */}

            <div id="map-container-google-3" className="z-depth-1-half map-container-3">
                <iframe  className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1909335126984!2d78.38011011479725!3d17.450573188040803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9407baba124b%3A0xb46a49085cd79e7b!2sDigital%20Lync!5e0!3m2!1sen!2sin!4v1671713527651!5m2!1sen!2sin" 
                width="1000" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
export default Contact;