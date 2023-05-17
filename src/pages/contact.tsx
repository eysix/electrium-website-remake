import Image from 'next/image'

import '../styles/about.scss'

export default function Home() {
    return (
      <div>
        <main>
            <section>
                <div className="text-center p-20">
                    <h1 className="text-2xl">Contact Us</h1>
                    <h2 className="text-lg p-10"> We would love to get to know you! Connect with us below!</h2>
                </div>
            </section>
        </main>
      </div>
    )
}