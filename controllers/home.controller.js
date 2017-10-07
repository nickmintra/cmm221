exports.index = function(req, res) {
	let content = {
		highlight: {
			url:'/assets/images/home/banner/highlight.jpg',
			title:'Broccoli garden\'s uncle Ken'
		},
		thumbnail:[
			{
				url: '/assets/images/home/banner/thumbnail-1.jpg',
				title: ' Product from my garden'
			},
			{
				url: '/assets/images/home/banner/thumbnail-2.jpg',
				title: 'Uncle Ken Hotel '
			},
			{
				url: '/assets/images/home/banner/thumbnail-3.jpg',
				title: 'Uncle Ken café'
			},
			{
				url: '/assets/images/home/banner/thumbnail-4.jpg',
				title: 'Relex Programm'
			},
			{
				url: '/assets/images/home/banner/thumbnail-5.jpg',
				title: 'Adventure Programm'
			}
		]
	}

	res.render('home.twig' , content)
}