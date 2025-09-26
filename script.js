// Enhanced Photo Gallery JavaScript

class PhotoGallery {
    constructor() {
        this.images = [];
        this.currentImageIndex = 0;
        this.isLoading = false;
        this.loadedImages = 0;
        this.imagesPerLoad = 8;
        
        this.init();
    }

    init() {
        this.setupImages();
        this.bindEvents();
        this.loadInitialImages();
        this.hideLoading();
    }

    setupImages() {
        this.images = [
            {
                id: 1,
                thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Serene Mountain Landscape',
                description: 'Snow-capped peaks reaching toward a crystal clear blue sky, showcasing nature\'s magnificent beauty.',
                alt: 'Serene mountain landscape with snow-capped peaks and clear blue sky'
            },
            {
                id: 2,
                thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Tropical Paradise',
                description: 'Turquoise waters meet pristine white sandy shores in this breathtaking tropical paradise.',
                alt: 'Tropical beach with turquoise water and white sandy shore'
            },
            {
                id: 3,
                thumbnail: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Urban Golden Hour',
                description: 'Modern skyscrapers bathed in the warm glow of golden hour, creating a stunning cityscape.',
                alt: 'Urban cityscape with modern skyscrapers at golden hour'
            },
            {
                id: 4,
                thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Ancient Forest',
                description: 'Sunlight filters through the canopy of an ancient forest, creating magical rays of light.',
                alt: 'Ancient forest with tall trees and sunlight filtering through canopy'
            },
            {
                id: 5,
                thumbnail: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Abstract Geometry',
                description: 'Vibrant colors and clean geometric patterns create a mesmerizing abstract composition.',
                alt: 'Abstract geometric patterns with vibrant colors and clean lines'
            },
            {
                id: 6,
                thumbnail: 'https://images.unsplash.com/photo-1558618047-3cbeb95a2b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1558618047-3cbeb95a2b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Morning Dewdrops',
                description: 'Macro photography captures the delicate beauty of dewdrops on a spider web in morning light.',
                alt: 'Macro photography of dewdrops on spider web in morning light'
            },
            {
                id: 7,
                thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Aurora Borealis',
                description: 'The Northern Lights dance across a starry night sky over a frozen lake in this spectacular display.',
                alt: 'Northern lights dancing in starry night sky over frozen lake'
            },
            {
                id: 8,
                thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Cozy Coffee Corner',
                description: 'A vintage coffee shop interior with warm lighting and rustic decor creates the perfect atmosphere.',
                alt: 'Vintage coffee shop interior with warm lighting and rustic decor'
            },
            // Additional images for "Load More" functionality
            {
                id: 9,
                thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Misty Lake',
                description: 'A serene lake shrouded in morning mist creates a peaceful and ethereal atmosphere.',
                alt: 'Misty lake in early morning light'
            },
            {
                id: 10,
                thumbnail: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Desert Sunset',
                description: 'Golden sand dunes stretch endlessly under a vibrant sunset sky in this desert landscape.',
                alt: 'Desert landscape with sand dunes at sunset'
            },
            {
                id: 11,
                thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Ocean Waves',
                description: 'Powerful ocean waves crash against rocky shores in this dramatic seascape photograph.',
                alt: 'Ocean waves crashing against rocky coastline'
            },
            {
                id: 12,
                thumbnail: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
                full: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=90',
                title: 'Autumn Forest',
                description: 'A forest path winds through trees displaying brilliant autumn colors in shades of gold and red.',
                alt: 'Forest path through autumn trees with colorful foliage'
            }
        ];
    }

    bindEvents() {
        // Modal events
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') this.closeModal();
        });
        
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousImage());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextImage());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Load more button
        document.getElementById('loadMore').addEventListener('click', () => this.loadMoreImages());
        
        // Action buttons
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadImage());
        document.getElementById('shareBtn').addEventListener('click', () => this.shareImage());
        
        // Touch events for mobile swipe
        this.setupTouchEvents();
    }

    setupTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        const modal = document.getElementById('modal');
        
        modal.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        modal.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextImage();
            } else {
                this.previousImage();
            }
        }
    }

    loadInitialImages() {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '';
        
        for (let i = 0; i < this.imagesPerLoad && i < this.images.length; i++) {
            this.createImageElement(this.images[i], i);
            this.loadedImages++;
        }
        
        this.updateLoadMoreButton();
    }

    loadMoreImages() {
        if (this.isLoading || this.loadedImages >= this.images.length) return;
        
        this.isLoading = true;
        const loadMoreBtn = document.getElementById('loadMore');
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            const startIndex = this.loadedImages;
            const endIndex = Math.min(startIndex + this.imagesPerLoad, this.images.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                this.createImageElement(this.images[i], i);
                this.loadedImages++;
            }
            
            this.isLoading = false;
            loadMoreBtn.textContent = 'Load More Images';
            loadMoreBtn.disabled = false;
            this.updateLoadMoreButton();
        }, 800);
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMore');
        if (this.loadedImages >= this.images.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    createImageElement(image, index) {
        const gallery = document.getElementById('gallery');
        
        const imageElement = document.createElement('div');
        imageElement.className = 'gallery-item animate-slide-up';
        imageElement.style.animationDelay = `${(index % this.imagesPerLoad) * 0.1}s`;
        imageElement.tabIndex = 0;
        imageElement.setAttribute('role', 'button');
        imageElement.setAttribute('aria-label', `View ${image.title}`);
        
        imageElement.innerHTML = `
            <img src="${image.thumbnail}" alt="${image.alt}" class="skeleton" loading="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>Click to view details</p>
            </div>
        `;
        
        // Handle image loading
        const img = imageElement.querySelector('img');
        img.addEventListener('load', () => {
            img.classList.remove('skeleton');
        });
        
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE2MCA5MEwyNDAgOTBMMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+';
            img.classList.remove('skeleton');
        });
        
        // Click event
        imageElement.addEventListener('click', () => this.openModal(index));
        imageElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.openModal(index);
            }
        });
        
        gallery.appendChild(imageElement);
    }

    openModal(index) {
        this.currentImageIndex = index;
        const image = this.images[index];
        
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        const imageLoading = document.getElementById('imageLoading');
        
        // Show modal and loading state
        modal.classList.remove('hidden');
        imageLoading.style.display = 'flex';
        modalImage.style.display = 'none';
        
        // Update modal content
        document.getElementById('modalTitle').textContent = image.title;
        document.getElementById('modalDescription').textContent = image.description;
        document.getElementById('imageCounter').textContent = `${index + 1} / ${this.loadedImages}`;
        
        // Load high-res image
        const highResImage = new Image();
        highResImage.onload = () => {
            modalImage.src = image.full;
            modalImage.alt = image.alt;
            imageLoading.style.display = 'none';
            modalImage.style.display = 'block';
        };
        
        highResImage.onerror = () => {
            modalImage.src = image.thumbnail;
            modalImage.alt = image.alt;
            imageLoading.style.display = 'none';
            modalImage.style.display = 'block';
        };
        
        highResImage.src = image.full;
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    previousImage() {
        if (this.currentImageIndex > 0) {
            this.openModal(this.currentImageIndex - 1);
        }
    }

    nextImage() {
        if (this.currentImageIndex < this.loadedImages - 1) {
            this.openModal(this.currentImageIndex + 1);
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.style.opacity = this.currentImageIndex > 0 ? '1' : '0.5';
        nextBtn.style.opacity = this.currentImageIndex < this.loadedImages - 1 ? '1' : '0.5';
        
        prevBtn.disabled = this.currentImageIndex === 0;
        nextBtn.disabled = this.currentImageIndex === this.loadedImages - 1;
    }

    handleKeyPress(e) {
        const modal = document.getElementById('modal');
        if (modal.classList.contains('hidden')) return;
        
        switch (e.key) {
            case 'Escape':
                this.closeModal();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previousImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextImage();
                break;
        }
    }

    downloadImage() {
        const image = this.images[this.currentImageIndex];
        const link = document.createElement('a');
        link.href = image.full;
        link.download = `${image.title.replace(/\s+/g, '_').toLowerCase()}.jpg`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast('Download started!');
    }

    shareImage() {
        const image = this.images[this.currentImageIndex];
        
        if (navigator.share) {
            navigator.share({
                title: image.title,
                text: image.description,
                url: image.full
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(image.full).then(() => {
                this.showToast('Image URL copied to clipboard!');
            }).catch(() => {
                this.showToast('Unable to share image');
            });
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        toast.classList.remove('translate-y-full');
        
        setTimeout(() => {
            toast.classList.add('translate-y-full');
        }, 3000);
    }

    hideLoading() {
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 1000);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PhotoGallery();
});

// Service Worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}
