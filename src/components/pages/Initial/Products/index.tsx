import { useDispatch, useSelector } from 'react-redux'
import { toogleProduct } from '../../../../store/Products/Products.actions'
import { selectAllProducts } from '../../../../store/Products/Products.selectors'
import './styles.css'
export const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    const handleToggle = (id: number) => {
        dispatch(toogleProduct(id))
    }

    const showVisualization = (event: any) => {
        const images = document.querySelectorAll('.imagemInitial') as unknown as Array<HTMLElement>
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const visualizationElements = [...visualization]
        const elementsImages = [...images]

        elementsImages.map((el, index) => {
            if(event.getAttribute('data-initial') === visualizationElements[index].getAttribute('data-initial')) {
                visualizationElements[index].classList.add('show') 
            }
            return el
        })
    }
    
    const removeVisualization = () => {
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const elements = [...visualization]

        elements.map((el) => {
            if(el.classList.contains('show')) {
                el.classList.remove('show')
            }
            return el
        })
    }

    return (
        <div className='containerProducts'>
            <div className='sliderContainerProducts'>
                {products.map((product: any) => (
                    <div className='imageContainer'>
                        <div className='visualization' data-initial={product.id}>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src={product.src}
                            alt={product.id}
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization}
                            className='imagemInitial'
                            data-initial={product.id}
                            onClick={() => handleToggle(product.id)}
                        />
                        <div className='textImageContainer'>
                            <h3>{product.name}</h3>
                            <p>R$ {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}