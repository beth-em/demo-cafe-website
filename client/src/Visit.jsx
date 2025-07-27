/* Visit Us page shows location, contact info, and social links.
 */

export default function Visit() {
    return (
        <div>
            <h2></h2>

            {/* Location */}
            <div className="max-w-2xl mx-auto text-center py-20">
                <p className="text-lg text-rose-700">Springdale, Utah</p>
                <p className="text-sm text-rose-500">Open Daily 8am - 3pm</p>
            </div>

            {/* Contact */}
            <div className="mb-6">
                <p className="text-rose-700">Phone: 435-773-8826</p>
                <p className="text-rose-700">Email: hello@sundayplace.com</p>
            </div>

            {/* Socials */}
            <div className="space-x-4">
                <a href="https://instagram.com" className="text-rose-600 underline hover:text-rose-800">
                    Instagram
                </a>
                <a href="https://facebook.com" className="text-rose-600 underline hover:text-rose-800">
                    Facebook
                </a>
            </div>
        </div>
    );
}