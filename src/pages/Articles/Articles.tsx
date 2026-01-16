'use client'
import { useEffect, useState } from 'react'
import ArticleModal from '../ArticleModal/ArticleModal'
import styles from './Articles.module.scss'
import Sidebar from '../../components/Sidebar'
import { useTranslation } from 'react-i18next'
export default function ArticlesPage () {
  const [articles, setArticles] = useState<any[]>([])
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null)
 const { t } = useTranslation()
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('https://dev.to/api/articles?per_page=10')
      const data = await res.json()
      setArticles(data)
    }
    fetchArticles()
  }, [])

  
return (
  <div className={styles.articlesPage}>
    <div className={styles.articlesPage__sidebar}>
      <Sidebar />
    </div>

    <div className={styles.articlesPage__content}>
      <h1>{t('art.title')}</h1>

      <div className={styles.articlesPage__content__grid}>
        {articles.map(article => (
          <div
            key={article.id}
            className={styles.articlesPage__content__card}
            onClick={() => setSelectedArticle(article)}
          >
            <h2>{article.title}</h2>
            <p>{article.description || t('art.noDescription')}</p>
          </div>
        ))}

        {selectedArticle && (
          <ArticleModal
            id={selectedArticle.id}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </div>
    </div>
  </div>
)
}
