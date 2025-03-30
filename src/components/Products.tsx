import { useState } from "react";
import type { CollectionEntry } from "astro:content";
export default function Products({ products }: CollectionEntry<'products'>[]){
    const contactMe = () => {
        alert("contact me on my whatsapp: +212608733452")
    }
    return (
        <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <img 
                  src={product.data.image} 
                  alt={product.data.title}
                  className="object-cover w-full h-full"
                />
                <a href={`/products/${product.slug}`} className="block w-full h-full"></a>
              </div>
    
              <div className="p-4 space-y-3">
                <div className="text-sm text-blue-600">
                  {product.data.marque}
                </div>
    
                <h2 className="text-gray-800 font-medium line-clamp-2">
                  {product.data.title}
                </h2>
    
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">{product.data.price} Dhs</span>
                  {product.data.oldprice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.data.oldprice} Dhs
                    </span>
                  )}
                  {product.data.discount && (
                    <span className="text-sm text-orange-500">
                      -{product.data.discount}%
                    </span>
                  )}
                </div>
    
                {product.data.rating && (
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span className={i < product.data.rating! ? "text-yellow-400" : "text-gray-200"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                )}
    
                {product.data.stock && (
                  <div className="text-sm text-red-500">
                    {product.data.stock} articles seulement
                  </div>
                )}
    
                {product.data.shipping && (
                  <div className="text-sm text-gray-500">
                    + livraison {product.data.shipping}
                  </div>
                )}
    
                <button 
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg text-sm"
                    onClick={contactMe}
                >
                  J'achète
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    )
}