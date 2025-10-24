import React, { useState, useRef } from 'react'
import { Plus, X, ChevronLeft, ChevronRight } from 'lucide-react'
import './GalleryWidget.css'

const GalleryWidget = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&h=150&fit=crop'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=150&fit=crop'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=150&fit=crop'
    }
  ])

  const [currentPage, setCurrentPage] = useState(0)
  const imagesPerPage = 3
  const fileInputRef = useRef(null)

  const totalPages = Math.ceil(images.length / imagesPerPage)
  const startIndex = currentPage * imagesPerPage
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage)

  const handleAddImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImage = {
          id: images.length + 1,
          url: e.target.result
        }
        setImages([...images, newImage])
      }
      reader.readAsDataURL(file)
    }
    event.target.value = ''
  }

  const removeImage = (id) => {
    const newImages = images.filter(image => image.id !== id)
    setImages(newImages)
    
    // Adjust current page if needed
    const newTotalPages = Math.ceil(newImages.length / imagesPerPage)
    if (currentPage >= newTotalPages) {
      setCurrentPage(Math.max(0, newTotalPages - 1))
    }
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => 
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    )
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => 
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    )
  }

  return (
    <div className="gallery-widget">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <div className="header-controls">
          <button className="add-image-btn" onClick={handleAddImageClick}>
            <Plus size={20} />
            ADD IMAGE
          </button>
          <div className="navigation-buttons">
            <button className="nav-btn prev-btn" onClick={prevPage}>
              <ChevronLeft size={20} />
            </button>
            <button className="nav-btn next-btn" onClick={nextPage}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>
      
      <div className="gallery-grid">
        {currentImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={`Gallery ${image.id}`} />
            <button 
              className="remove-btn"
              onClick={() => removeImage(image.id)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
        
        {Array.from({ length: imagesPerPage - currentImages.length }).map((_, index) => (
          <div key={`empty-${index}`} className="empty-slot"></div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="page-indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`page-indicator ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GalleryWidget