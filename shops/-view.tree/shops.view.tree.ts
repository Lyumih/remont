namespace $ {
	export class $remont_market_shops extends $mol_view {
		
		/**
		 * ```tree
		 * sub / <= Shops
		 * ```
		 */
		sub() {
			return [
				this.Shops()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * shop_title* \
		 * ```
		 */
		shop_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * shop_uri* \
		 * ```
		 */
		shop_uri(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Shop*0 $mol_link_iconed
		 * 	title <= shop_title*
		 * 	uri <= shop_uri*
		 * ```
		 */
		@ $mol_mem_key
		Shop(id: any) {
			const obj = new this.$.$mol_link_iconed()
			
			obj.title = () => this.shop_title(id)
			obj.uri = () => this.shop_uri(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shop_list / <= Shop*0
		 * ```
		 */
		shop_list() {
			return [
				this.Shop("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Shops $mol_view sub <= shop_list
		 * ```
		 */
		@ $mol_mem
		Shops() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.shop_list()
			
			return obj
		}
	}
	
}

