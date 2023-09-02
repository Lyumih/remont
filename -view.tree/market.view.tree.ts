namespace $ {
	export class $remont_market extends $mol_page {
		
		/**
		 * ```tree
		 * title \Поиск товара v1
		 * ```
		 */
		title() {
			return "Поиск товара v1"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Shops
		 * 	<= Find
		 * ```
		 */
		body() {
			return [
				this.Shops(),
				this.Find()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Shops $remont_market_shops
		 * ```
		 */
		@ $mol_mem
		Shops() {
			const obj = new this.$.$remont_market_shops()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Find $hyoo_search_app
		 * ```
		 */
		@ $mol_mem
		Find() {
			const obj = new this.$.$hyoo_search_app()
			
			return obj
		}
	}
	
}

