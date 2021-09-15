import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    totalPrice: number,
    results: Array<{
        id: number,
        price: number,
        priceFormatted: string,
        title: string,
    }>
    onAddToWishlist: (id: number) => void
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem
                    product={results[index]}
                    onAddToWishlist={onAddToWishlist}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>

            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

            {/* {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                    />
                )
            })} */}
        </div>
    )
}



/**
 * 1. Criar uma nova versão do componente - comportamento inicial
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components versão
 * 2. Renders to ofteen
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo/useCallback
 *
 * Memo
 * 1. Calculos Pesados
 * 2. Igualdade referêncial (quando repassa para outros components)
 *
 * Callback
 *
 *
 */