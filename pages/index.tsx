import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.container}>

          <div className={styles.main}>

            <span className={styles.title}>Your partner in challenging projects</span>

            <div className={styles.svgContainer}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={740}
                height={624}
              />
            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}
