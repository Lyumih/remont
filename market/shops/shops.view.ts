namespace $.$$ {
	export class $remont_market_shops extends $.$remont_market_shops {
		shops() {
			const query_arg = $mol_state_arg.value('query') || ''
			const query = query_arg.replaceAll(/(купить|куплю|заказать)/gi,'').trim()
			return [
				{ title: "Avito", uri: `https://www.avito.ru/?q=${query}` },
				{ title: "Я.Маркет", uri: `https://market.yandex.ru/search?text=${query}` },
				{ title: "Ozon", uri: `https://www.ozon.ru/search/?text=${query}&from_global=true` },
				{ title: "WildBerries", uri: `https://www.wildberries.ru/catalog/0/search.aspx?search=${query}` },
				{ title: "Мегамаркет", uri: `https://megamarket.ru/catalog/?q=${query}` },
				{ title: "Leroy Merlin", uri: `https://leroymerlin.ru/search/?q=${query}` },
				{ title: "Все инструменты.ру", uri: `https://www.vseinstrumenti.ru/search/?what=${query}` },
				{ title: "Ситилинк", uri: `https://www.citilink.ru/search/?text=${query}` },
				{ title: "М.Видео", uri: `https://www.mvideo.ru/product-list-page?q=${query}` },
				{ title: "DNS", uri: `https://www.dns-shop.ru/search/?q=${query}` },
				{ title: "BestMebel", uri: `https://www.tula.bestmebelshop.ru/search/index.php?q=${query}` },
			]
		}

		shop_list(): readonly any[] {
			return this.shops().map((shop) => this.Shop(shop.title))
		}

		shop_title( id: any ): string {
			return this.shops().find(i => i.title === id)?.title || ''
		}

		shop_uri( id: any ): string {
			return this.shops().find(i => i.title === id)?.uri || ''
		}
	}
}
