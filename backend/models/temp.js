var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'YanXuan');

db.on('error', function() {
	console.log("error")
});
db.once('open', function() {

	console.log("goods connected");
	var goodsSchema = new mongoose.Schema({
		ID: Number,
		price: Number,
		chara: String,
		topName: String,
		subName: String,
		shortDescription: Array,
		shortDescriptionImage: Array,
		headImage: Array,
		type: Array,
		inventory: Array,
		description: Array,
		information: Array,
		sale: Number,
		category: String,
		subCategory: String,
		date: String,
		manufacturer: String,
		label: Array
	});
	goodsSchema.methods.findByID = function(cb) {
		return this.model("goods").find({
			ID: this.ID
		}, cb)
	}
	goodsSchema.statics.findByID = function(ID, cb) {
		return this.find({
			ID: ID
		}, cb)
	}
	goodsModel = db.model("goods", goodsSchema);
	addGoods()

})

function addGoods() {
	var goodsEntity = new goodsModel({
		"id": 1193025,
		"price": 169,
		"topName": "日式针织羽丝绒夏凉被",
		"subName": "亲肤透气，裸睡空调房好搭档",
		"shortDescription": ["全棉针织", "弹性亲肤", "仪征棉芯", "轻盈透气", "百隆纱线", "别致色彩"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/27164d5e3a3e0203803e8780ed285229.jpg", "http://yanxuan.nosdn.127.net/29a199ce0e9f8b8f4658bd7b13d1510c.jpg", "http://yanxuan.nosdn.127.net/d522f49e32d464cb10371a6f2b074be3.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/76b817572995693dfc82c585ce09a16d.png", "http://yanxuan.nosdn.127.net/ebd1dc501760883e36c74f5608cb1d05.jpg", "http://yanxuan.nosdn.127.net/31a57724a7cd26f52182cd49af88ac91.jpg", "http://yanxuan.nosdn.127.net/a56e6feb624c904987cb070cda206375.jpg", "http://yanxuan.nosdn.127.net/fbfaa79073559c42aac5571a1fa64ed5.jpg"],
		"types": ["180*200cm", "150*200cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/dc1ebab345a6364056375af5f1963f45.jpg", "http://yanxuan.nosdn.127.net/419cc50a5f16a0ddcde2ba7abf672de4.jpg", "http://yanxuan.nosdn.127.net/f605fca51a9dc43e1606a447a168b340.jpg", "http://yanxuan.nosdn.127.net/bdd869b29c8b554cf7d2d9809b9a6fe6.jpg", "http://yanxuan.nosdn.127.net/7723d057b0a3317c483d677b32df4707.jpg", "http://yanxuan.nosdn.127.net/f590e503768a9c216ac209d7c4287712.jpg", "http://yanxuan.nosdn.127.net/f78b5445af782e61cca13f3d0336de19.jpg", "http://yanxuan.nosdn.127.net/fd0491a0c792f253e4710a0580c6cfaa.jpg", "http://yanxuan.nosdn.127.net/546bd2dcdfeb37be659aca150d4f08f4.jpg", "http://yanxuan.nosdn.127.net/d56e8b9113eb5091257aa1936d426bad.jpg", "http://yanxuan.nosdn.127.net/cd6b6102bb125471092ec1bf3e2d229d.jpg", "http://yanxuan.nosdn.127.net/27eff14bd6f6f3ef80d7177c8f96fdbe.jpg", "http://yanxuan.nosdn.127.net/e009814f9e73c958bf774339e8c9a040.jpg", "http://yanxuan.nosdn.127.net/502c0aabacfeec46c685de9503954a48.jpg", "http://yanxuan.nosdn.127.net/d22a3944cfb42788d7052c80d0ec111e.jpg", "http://yanxuan.nosdn.127.net/a05d5dbe109f9779d40570e6d9ef8868.jpg", "http://yanxuan.nosdn.127.net/a6f78f86e604f7f890820d660f350fa3.jpg", "http://yanxuan.nosdn.127.net/c48dd819dcdd6b59601f1ef9e749f4d0.jpg", "http://yanxuan.nosdn.127.net/dce802b2a960d6d14b0e7830f6212f2d.jpg", "http://yanxuan.nosdn.127.net/e507dfbf7f9053763c7cdf0eedf3b714.jpg", "http://yanxuan.nosdn.127.net/587fba85df4aa802860eced3504fa9a8.jpg", "http://yanxuan.nosdn.127.net/dbd60373f8d824d6a0db55a097813ab5.jpg", "http://yanxuan.nosdn.127.net/9e3701b63d94fb6d513184440e5600de.jpg", "http://yanxuan.nosdn.127.net/9fc5bca13269348fba75b92c82275788.jpg", "http://yanxuan.nosdn.127.net/f4396746d95c41874c97f2f39e8f2ba6.jpg", "http://yanxuan.nosdn.127.net/ecfb77ac049871cafe5b21c1184a1e1e.jpg", "http://yanxuan.nosdn.127.net/753e002e81c240679aa60f65a1e28cfa.jpg", "http://yanxuan.nosdn.127.net/2d036c766e86e825adc2cb3f12c7b1bc.jpg", "http://yanxuan.nosdn.127.net/3f342c2f22409842cbb2b04e2168f573.jpg", "http://yanxuan.nosdn.127.net/e226afb1d9715ea9deb713fec91163b6.jpg", "http://yanxuan.nosdn.127.net/c9242fa3d85b407d354b04e2ae4ccd3b.jpg", "http://yanxuan.nosdn.127.net/09c1c4f4fd1880840bf6ee68d91f6912.jpg", "http://yanxuan.nosdn.127.net/4afd947fa274d7dd9fc04de37c4d71da.jpg", "http://yanxuan.nosdn.127.net/057e95c87d0e8651a0f79e1c9e0bfdfd.jpg", "http://yanxuan.nosdn.127.net/8450012b4a706dc71fc6c3389700bd84.jpg", "http://yanxuan.nosdn.127.net/5c593bf58dda4be4e12539c9f78a79a6.jpg", "http://yanxuan.nosdn.127.net/2a9cd9129216be870503d01617e3b78b.jpg", "http://yanxuan.nosdn.127.net/c4e5352fd39f994fa7191f67f91846ef.jpg", "http://yanxuan.nosdn.127.net/5fef6131a59ddf906878ec3322a9137e.jpg", "http://yanxuan.nosdn.127.net/115d227ea56effd8f15647f2b1897322.jpg", "http://yanxuan.nosdn.127.net/438767fc562a258f0d67bf3e6742c534.jpg", "http://yanxuan.nosdn.127.net/a9a7406da9a51787400d07381f4a52c6.jpg", "http://yanxuan.nosdn.127.net/2c5a3e022e379f552e006565f03341e7.jpg", "http://yanxuan.nosdn.127.net/52c0921cd8a59858e6aee184a7b877f3.jpg", "http://yanxuan.nosdn.127.net/fa25b963b49061aa896f6ea4e74f5214.jpg", "http://yanxuan.nosdn.127.net/5fdbaa7ded9ea2d5ddd7db239a5dbbb3.jpg", "http://yanxuan.nosdn.127.net/353c5a28d652ad564f5210b1a0be5a5f.jpg", "http://yanxuan.nosdn.127.net/1f8ecbe5a59286f334baac3f805d3c13.jpg", "http://yanxuan.nosdn.127.net/f300fcd939f65fb276b71dffaacbb5b3.jpg", "http://yanxuan.nosdn.127.net/c2a09f1426264d3eaac89709a675d5c7.jpg", "http://yanxuan.nosdn.127.net/a28973545581b987b6b5776613983628.jpg", "http://yanxuan.nosdn.127.net/3e6d6e7c8bc320947ec6cc49626cdf38.jpg", "http://yanxuan.nosdn.127.net/5fa2bd1b40e97418a7fee39c23aae493.jpg", "http://yanxuan.nosdn.127.net/fc59d45dbd264b4acd358a34d50c679a.jpg", "http://yanxuan.nosdn.127.net/f8c27981e7d12bf0a052d216d837575f.jpg", "http://yanxuan.nosdn.127.net/8c1fbf4c79391af117f29ee5c6057edc.jpg", "http://yanxuan.nosdn.127.net/c4acba85c950bd7d013939c90f226fca.jpg", "http://yanxuan.nosdn.127.net/eb75c0ccaa5b18dff97bb2cda78c035e.jpg", "http://yanxuan.nosdn.127.net/c29ecca58a2026b3df4f561a5fc2af43.jpg", "http://yanxuan.nosdn.127.net/c0b50457699bc2ef0b5ebf5d5128fea5.jpg", "http://yanxuan.nosdn.127.net/94aa18f82b30c8de1e919740d9acd1ec.jpg", "http://yanxuan.nosdn.127.net/2e31d479bc8286420bba37b1fad0fddc.jpg", "http://yanxuan.nosdn.127.net/ddcb346ea40fc9505d1a5a0b8426a328.jpg", "http://yanxuan.nosdn.127.net/f221116040e89c722a087942187bb342.jpg", "http://yanxuan.nosdn.127.net/55747e273b1aeaf0d4553ee218d9100f.jpg", "http://yanxuan.nosdn.127.net/c48108cabc079c2f64e813d04794aed5.jpg", "http://yanxuan.nosdn.127.net/e79ea7ec115d736bb515773a8ae8a69b.jpg", "http://yanxuan.nosdn.127.net/4b7f2a046449cd3da8236f4e1a22b716.jpg"],
		"inventory": [667, 203],
		"information": [{
			"attrName": "颜色",
			"attrValue": "烟草绿/ 茶香粉/ 丁子灰/ 木兰黄"
		}, {
			"attrName": "规格",
			"attrValue": "150*200cm/ 180*200cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 786,
		"date": "1500012158128",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1127052,
		"price": 169,
		"topName": "纯棉水洗色织格夏凉被",
		"subName": "100%棉填充，透气排汗，双面可用",
		"shortDescription": ["靓肤柔软", "水洗棉套", "细腻绒长", "轻软舒适", "轻柔水洗", "耐用柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a167cd424394fe9e65b0a0952d1242d0.jpg", "http://yanxuan.nosdn.127.net/4f3e4762a71371baf3dd1d7d201f8ac8.jpg", "http://yanxuan.nosdn.127.net/bc3a80374d9115b0049234a665532ef4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/c4d30e05cbf9f1489a9cc78f2e61f854.png", "http://yanxuan.nosdn.127.net/be1c0672aa4f82de4179ff25c9728359.jpg", "http://yanxuan.nosdn.127.net/a0451cd98141887b78a48414d82f1a9a.jpg", "http://yanxuan.nosdn.127.net/9cdc625066ff4124e5b3dc2518529706.jpg", "http://yanxuan.nosdn.127.net/398686c2483deb75ca4afeee62250fc9.jpg"],
		"types": ["藏蓝+白150*200cm", "藏蓝+白180*200cm", "雾灰+白150*200cm", "雾灰+白180*200cm", "粉色+白150*200cm", "粉色+白180*200cm"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/d5be558fae14c10f6cba988448667655.jpg", "http://yanxuan.nosdn.127.net/e150a80dc6dc5e887ba88ef0bda5635e.jpg", "http://yanxuan.nosdn.127.net/02d918eac34097cd1ec495e5a7fba839.jpg", "http://yanxuan.nosdn.127.net/60c93820597914e237a8828a7f68a693.jpg", "http://yanxuan.nosdn.127.net/4d16dcd7782d5f313c168c2f167e6250.jpg", "http://yanxuan.nosdn.127.net/84c8a43e0d9ce58c6131e8a4647137ea.jpg", "http://yanxuan.nosdn.127.net/fe289dbf468157089ecdce0a0e8cfc2b.jpg", "http://yanxuan.nosdn.127.net/9eccf5ffd73b67eb4f1a51252db9bf55.jpg", "http://yanxuan.nosdn.127.net/7c942a6a7916c458cd5807bd92d9adee.jpg", "http://yanxuan.nosdn.127.net/8e63e7711c48d043f4397a91258fcd25.jpg", "http://yanxuan.nosdn.127.net/9cbe77a023a19ed1777ca9442a5e7627.jpg", "http://yanxuan.nosdn.127.net/54870820ab7fdd6445cbe57fd2ea3363.jpg", "http://yanxuan.nosdn.127.net/13af57ba735b30b0b7d8b184f1fe2f4c.jpg", "http://yanxuan.nosdn.127.net/a1e596c50e40f1c284f29fa100280875.jpg", "http://yanxuan.nosdn.127.net/8d6de2aeb553b10bb17364373307fa53.jpg", "http://yanxuan.nosdn.127.net/4751c8f3d45ffb5fd6f2cc339f18f107.jpg", "http://yanxuan.nosdn.127.net/a4a7e6973de92d68909e3742b3ca6b9c.jpg", "http://yanxuan.nosdn.127.net/b79a47091b4bbcf1261aafc3b9d43db1.jpg", "http://yanxuan.nosdn.127.net/c7528e9c3444714e64b2f9c04a4b9d86.jpg", "http://yanxuan.nosdn.127.net/0def655afee89bb967c5e5653a628517.jpg", "http://yanxuan.nosdn.127.net/71e002b82cada63316bec4774c285bed.jpg", "http://yanxuan.nosdn.127.net/5b83ce40294a1df3e171b241dd191228.jpg", "http://yanxuan.nosdn.127.net/329f0adefde346912448306d20fca6b4.jpg", "http://yanxuan.nosdn.127.net/a372127bde07d95d2e526ca204acbe6b.jpg", "http://yanxuan.nosdn.127.net/8df1c05f289252b6b2d0486838fffa86.jpg", "http://yanxuan.nosdn.127.net/5216ca64a2c9102a5643a0c2448c0ea3.jpg", "http://yanxuan.nosdn.127.net/545f88e26372c5949b2627f781583147.jpg", "http://yanxuan.nosdn.127.net/13f6613d9d1057a817d31dd442bef97f.jpg", "http://yanxuan.nosdn.127.net/ec95e0ae84611cfeb6b5d3d53f40d525.jpg", "http://yanxuan.nosdn.127.net/7aa8f9a1a60717dd680cb824b6e36b11.jpg", "http://yanxuan.nosdn.127.net/1c80828de30155b6a0b527916554e9b0.jpg", "http://yanxuan.nosdn.127.net/c5774ff521760d002e462ed577ce099c.jpg", "http://yanxuan.nosdn.127.net/97b4fc3092aa889793fede3f371c2cf0.jpg", "http://yanxuan.nosdn.127.net/a0341593aa4481f407909f23afa9f172.jpg", "http://yanxuan.nosdn.127.net/a9c8354b0a6c0206e041a2143270cbca.jpg", "http://yanxuan.nosdn.127.net/8b98c3548f7b9a5777a73b06530680ab.jpg", "http://yanxuan.nosdn.127.net/9804b7cd06fbb122e847c54d901394e9.jpg", "http://yanxuan.nosdn.127.net/93818a6a52ef295025712293cacfeb96.jpg", "http://yanxuan.nosdn.127.net/de6882b26aa3077061b5ad0ec51cc418.jpg", "http://yanxuan.nosdn.127.net/a79826471d9c796a10ad7d9b24fb8cff.jpg", "http://yanxuan.nosdn.127.net/b6971be2451a827b46e1d7684ca58760.jpg", "http://yanxuan.nosdn.127.net/6a3396c116c1ebbca0e477a2e66b18e5.jpg", "http://yanxuan.nosdn.127.net/a818e261031b7a10091f344e81caabf6.jpg", "http://yanxuan.nosdn.127.net/86792241e6f58d5cea2435160b591997.jpg", "http://yanxuan.nosdn.127.net/4f4eb85063e1a9d836868580b589485e.jpg", "http://yanxuan.nosdn.127.net/821c728a7170f2d5452852e518809b97.jpg", "http://yanxuan.nosdn.127.net/6eb4a07c6304e1456e9aa551aefdb1b5.jpg", "http://yanxuan.nosdn.127.net/5ed9a831344dc68eaaf8310df0ddf2d0.jpg"],
		"inventory": [177, 532, 28, 34, 996, 60],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22796-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB18401-2010 A类"
		}, {
			"attrName": "规格",
			"attrValue": "150*200cm/180*200cm"
		}],
		"label": "",
		"manufacture": "",
		"sale": 498,
		"date": "1500012160785",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1023012,
		"price": 299,
		"topName": "色织华夫格夏凉被",
		"subName": "凹凸华夫格织法，舒适轻柔",
		"shortDescription": ["色织工艺", "均匀不褪", "双面材质", "柔软透气", "复合毛圈", "独特美感"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/895f116ef8444d8034e34ccf39fc825b.jpg", "http://yanxuan.nosdn.127.net/651f460d5b32508aae26c93acce298da.jpg", "http://yanxuan.nosdn.127.net/e1a4d85bac9375f34f6e459539d88535.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/07376e78bf4fb8a5aa8e6a0b1437c3ad.png", "http://yanxuan.nosdn.127.net/184c7ed8ac2ac4f8a7b33ee9d41fde77.jpg", "http://yanxuan.nosdn.127.net/46f42df107e2e338503fd13c4c8be128.jpg", "http://yanxuan.nosdn.127.net/a584f3f733da004d602b3be9d07c3473.jpg", "http://yanxuan.nosdn.127.net/733430be1402c5e645bb40f0682b8ae5.jpg"],
		"types": ["白色", "藏青", "灰色"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/70e21fc5c723dc6adcb1b531553597d9.jpg", "http://yanxuan.nosdn.127.net/fcdf78276ab0bcd8ed80a3dda8c29b6a.jpg", "http://yanxuan.nosdn.127.net/1eb088a53d00f094bbac4b1f7a662457.jpg", "http://yanxuan.nosdn.127.net/86be51c377922edd23e48b9d0c51d5dc.jpg", "http://yanxuan.nosdn.127.net/e9cadf6589933fab072aef8c0644bb91.jpg", "http://yanxuan.nosdn.127.net/adbb912f1131f821f4d01bb29ed31450.jpg", "http://yanxuan.nosdn.127.net/8309ca74e9ecea295882b68cc0080652.jpg", "http://yanxuan.nosdn.127.net/4cce90d2ad13258af815b828dd3fa34f.jpg", "http://yanxuan.nosdn.127.net/0ad6cf5c7f4ed107d39997ce1acfffd2.jpg", "http://yanxuan.nosdn.127.net/4b867cc1a9f3c0046b40118e009a2cbd.jpg", "http://yanxuan.nosdn.127.net/b14b08ce203d77633340b1677f6196b6.jpg", "http://yanxuan.nosdn.127.net/b697d210e3137bc9fa8f5b74a9916ce6.jpg", "http://yanxuan.nosdn.127.net/a8b23b600cb5848d00eb1a176554f5de.jpg", "http://yanxuan.nosdn.127.net/0b76964151af30178e74e28d0d590fd7.jpg", "http://yanxuan.nosdn.127.net/3eda6586081f50314690ab9f141d1758.jpg", "http://yanxuan.nosdn.127.net/939f9ac497e48529e0c44ef5af32f329.jpg"],
		"inventory": [717, 645, 534],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "180*220cm"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}, {
			"attrName": "重量",
			"attrValue": "1480g"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.深色纯棉毛巾被在织造染色过程中，巾面更易产生微细的纤维浮绒，使用前建议用清水漂洗1-2次，即可去掉产品上的浮绒。2.在洗涤时一定要注意不要与衣服混在一起机洗，强力的搓洗会引起掉毛或勾线现象。3.纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 494,
		"date": "1500012163494",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1023034,
		"price": 299,
		"topName": "泡泡纱可水洗夏凉被",
		"subName": "全棉泡泡纱，柔软亲肤",
		"shortDescription": ["立体梭织", "蓬松透气", "白鸭长绒", "温软透气", "色织工艺", "均匀不褪"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/2c99a59a33a11836bc12d0d42a074012.jpg", "http://yanxuan.nosdn.127.net/afc467d56b0077333d843e7da4286a86.jpg", "http://yanxuan.nosdn.127.net/03e496d1b84ed4c9c7a6d1b7ac5a3004.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3f5020113c49f4086e26ffe981c016b5.png", "http://yanxuan.nosdn.127.net/a955835c12f810703dfb9b88ef5a03e4.jpg", "http://yanxuan.nosdn.127.net/c919a1b0a040d84bb043abaafeb51c65.jpg", "http://yanxuan.nosdn.127.net/75665b6e6a0282c7f2490dedcba25ae8.jpg", "http://yanxuan.nosdn.127.net/a4a8c83ad8cb2ae1af978f69620c13e4.jpg"],
		"types": ["150*210cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/ee07176906bd240d73121800ae7bf19b.jpg", "http://yanxuan.nosdn.127.net/586c461b729d90ef9da8504c21054536.jpg", "http://yanxuan.nosdn.127.net/57c343280e764caa68f12fc38e5b7fcf.jpg", "http://yanxuan.nosdn.127.net/f18da8c4ccf7245c9cf5b2d130706963.jpg", "http://yanxuan.nosdn.127.net/8fb70b756b037d320a46b28cb8f2145a.jpg", "http://yanxuan.nosdn.127.net/e3aa1127d33e7dd0dd831a42f0fffd3c.jpg", "http://yanxuan.nosdn.127.net/1b6a9ee01d46bdb5ebe87546159b44bb.jpg", "http://yanxuan.nosdn.127.net/ec2165ac273eb67dbb9eb8ed0ef4810f.jpg", "http://yanxuan.nosdn.127.net/e301e60c9a9e0368fdb64d58397664e2.jpg", "http://yanxuan.nosdn.127.net/dbf78f9ddaf4e672fcdc605554fd4043.jpg", "http://yanxuan.nosdn.127.net/eeea101e0566302faa79f9d7f070b7af.jpg", "http://yanxuan.nosdn.127.net/1c87f397974d421a79e68827bf216769.jpg", "http://yanxuan.nosdn.127.net/33097a3e174fbc8cf032c225004920a6.jpg", "http://yanxuan.nosdn.127.net/c620d6a428b2cae383c49bbe127fd5b9.jpg", "http://yanxuan.nosdn.127.net/151a21ff661e734069b33ed35f070872.jpg", "http://yanxuan.nosdn.127.net/ca8fe2d40b7259a39cd75b3ebcc3fe77.jpg", "http://yanxuan.nosdn.127.net/400bff93b38c72fb35426ead27c812a3.jpg", "http://yanxuan.nosdn.127.net/5d935a6a9b462c26eb8de6c533dcd03f.jpg", "http://yanxuan.nosdn.127.net/2d7ceda68fcf01a3730567261160b9bd.jpg", "http://yanxuan.nosdn.127.net/f74748cdb1b335ec7957e29adce9dca2.jpg", "http://yanxuan.nosdn.127.net/e8f18696a65b0f860517f84174b3d78c.jpg", "http://yanxuan.nosdn.127.net/6539df9851283a069d7718c69f185d67.jpg", "http://yanxuan.nosdn.127.net/c19b5fa4554c78429a6ffacdcc91a65a.jpg", "http://yanxuan.nosdn.127.net/6bea88521493619388b8e7b55bcbde31.jpg", "http://yanxuan.nosdn.127.net/519a7a62a61dc57254b946382ef92861.jpg", "http://yanxuan.nosdn.127.net/22947c0b8d73d56e633c68c2e9d0aed1.jpg", "http://yanxuan.nosdn.127.net/31c0b0d5c2162a29ab38dd1bfc347595.jpg", "http://yanxuan.nosdn.127.net/e021426060f686418be9a723bc64cebc.jpg", "http://yanxuan.nosdn.127.net/2c7b52c7887d978266a3a6af58b3deb1.jpg", "http://yanxuan.nosdn.127.net/7784b198f5fa0fc1f9fdba3d3c199ac9.jpg", "http://yanxuan.nosdn.127.net/c996bd656d2dc27b503216343f8d5852.jpg", "http://yanxuan.nosdn.127.net/97ee3413939850e78b3f00285ed510fd.jpg", "http://yanxuan.nosdn.127.net/efa434a4c38131a555750cac7760bfd6.jpg", "http://yanxuan.nosdn.127.net/1245c20af6a9902867ee96994120a86d.jpg", "http://yanxuan.nosdn.127.net/a5ede9ea54fe5fa94fed1daea4484f4a.jpg", "http://yanxuan.nosdn.127.net/630e59c77dbdbda2fc824b2dc021ef99.jpg", "http://yanxuan.nosdn.127.net/ceb5bc83f1ea28fab593f371c2295baf.jpg", "http://yanxuan.nosdn.127.net/48a0b8980823ab88b9e56f8525292bae.jpg", "http://yanxuan.nosdn.127.net/da1293d27e1eababc408b5335ace582f.jpg", "http://yanxuan.nosdn.127.net/0df9513c64ff11c0bd1c9e15d458a1c2.jpg", "http://yanxuan.nosdn.127.net/d6bc6b1f65f2726d31382a53294ca007.jpg", "http://yanxuan.nosdn.127.net/584a34585fb9a670cfad5152e8424e65.jpg", "http://yanxuan.nosdn.127.net/76efee363cd253dc185d8ab6cdaf79ab.jpg", "http://yanxuan.nosdn.127.net/70e9916a361463ea4803e7c05de08105.jpg", "http://yanxuan.nosdn.127.net/d61afeafe44741aa8673b4632daf58f0.jpg", "http://yanxuan.nosdn.127.net/046c295312e47c4306fb90cd64403a4d.jpg", "http://yanxuan.nosdn.127.net/8f89ba049da78d439e39a166f3a64148.jpg", "http://yanxuan.nosdn.127.net/c68784268fc61878e8ceaa8d18718f1f.jpg"],
		"inventory": [286],
		"information": [{
			"attrName": "填充物",
			"attrValue": "70% 白鸭绒 30%白鸭毛"
		}, {
			"attrName": "克重",
			"attrValue": "250g"
		}, {
			"attrName": "产地",
			"attrValue": "中国"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "颜色",
			"attrValue": "水银灰/ 水蓝/ 水粉"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 438,
		"date": "1500012166002",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1130049,
		"price": 479,
		"topName": "柔软凉爽天丝麻蚕丝填充夏凉被",
		"subName": "天然恒温凉感面料，蚕丝美肤透气保护",
		"shortDescription": ["天丝麻套", "吸湿干爽", "深海因子", "抑菌保湿", "抑菌保湿", "恒温睡眠"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0dc3cf74f8c26aa18dd3251ff7d85ed2.jpg", "http://yanxuan.nosdn.127.net/2846056b2cea17bd5927bf158ebeb947.jpg", "http://yanxuan.nosdn.127.net/a32534936fb010b16bec5d02323b40fa.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/114825dcddc577d74027e7aabd8cea07.png", "http://yanxuan.nosdn.127.net/c7ed6fa62ee79921ac580dc025df5f54.jpg", "http://yanxuan.nosdn.127.net/efc598e817aa7cb220fa7aa962162105.jpg", "http://yanxuan.nosdn.127.net/80082370ca7df234210a664f1915b717.jpg", "http://yanxuan.nosdn.127.net/91e49302cf4cfe00937972b103809836.png"],
		"types": ["靛蓝150*200cm", "靛蓝180*200cm", "雅灰150*200cm", "雅灰180*200cm"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/08b8d73c10a411eb9036745cb82844a0.jpg", "http://yanxuan.nosdn.127.net/e6a4273894bf7f81b800af24d84d0f01.jpg", "http://yanxuan.nosdn.127.net/f99f937d27b480d01ec9ff8409c741ad.jpg", "http://yanxuan.nosdn.127.net/4e771f6f02ce155fb3747448950bca4b.jpg", "http://yanxuan.nosdn.127.net/e03e7cee1d05639690cea7780d654bf8.jpg", "http://yanxuan.nosdn.127.net/3a3a5b3d7945d2d10e9756a23e19fd8a.jpg", "http://yanxuan.nosdn.127.net/c414b97ee53671c327292c77d8f155c0.jpg", "http://yanxuan.nosdn.127.net/27e0107c96a3294308034017422b784a.jpg", "http://yanxuan.nosdn.127.net/86d469345f54301e357c9349d5b6fa67.jpg", "http://yanxuan.nosdn.127.net/87c084c00a9d8a99a39db7274dbc491c.jpg", "http://yanxuan.nosdn.127.net/eef303fa3969d84fb5486df4e6b2a1a3.jpg", "http://yanxuan.nosdn.127.net/7d08ba29a10fa3727879b52dbd677d16.jpg", "http://yanxuan.nosdn.127.net/d890b81ebb90bb62b0ab6adadfe0a0d3.jpg", "http://yanxuan.nosdn.127.net/c90a4187aca7bb117da1f43706cad9f6.jpg", "http://yanxuan.nosdn.127.net/20edbb483bc8c22a439b929f80dff965.jpg", "http://yanxuan.nosdn.127.net/d5cf8bc0af45209d2742c5e8a0a90058.jpg", "http://yanxuan.nosdn.127.net/8652e1569a4154cd515aedb1a8a9be19.jpg", "http://yanxuan.nosdn.127.net/640a02af5d2674006cfa9a761277f1c0.jpg", "http://yanxuan.nosdn.127.net/6ad74c168319e4bfcbb4460528d23f10.jpg", "http://yanxuan.nosdn.127.net/b781f03e8719ed714c3c36be035a7119.jpg", "http://yanxuan.nosdn.127.net/d0d07c3a16a71c35681f4fa0cffd95a4.jpg", "http://yanxuan.nosdn.127.net/b57651413bff14b2226ffd5c312aaf30.jpg", "http://yanxuan.nosdn.127.net/7f1fccfac8b4bbe9f264a2b97a13f942.jpg", "http://yanxuan.nosdn.127.net/eb34a9c9e36b8c95744228da4a639ed7.jpg", "http://yanxuan.nosdn.127.net/dcaa6fd6a3ffa7d8fc7abf5f28e9b7d6.jpg", "http://yanxuan.nosdn.127.net/474fe5b71eccf0f1ec56b0910dff6568.jpg", "http://yanxuan.nosdn.127.net/dc3e4ff251a76d819b7e461a6d448ce3.jpg", "http://yanxuan.nosdn.127.net/a7f53f4f79ba5f5eedd1cc0c7e3890bc.jpg", "http://yanxuan.nosdn.127.net/c767c6db5960cac13fee3fddff55f7ed.jpg", "http://yanxuan.nosdn.127.net/aee8f39cd9355a5311b44eb5b5679b86.jpg", "http://yanxuan.nosdn.127.net/9e87095e7ebd1aa22808c58cdbd18b29.jpg", "http://yanxuan.nosdn.127.net/2aa340c14fe7376be54d0e406b44eff8.jpg", "http://yanxuan.nosdn.127.net/9ce84fc882d8e0db24c1efc872b48823.jpg", "http://yanxuan.nosdn.127.net/4ab9cdd4c326e0366ed1250bc0c5f2e9.jpg", "http://yanxuan.nosdn.127.net/6ba2b2722f0e2bfec5daebec11b722b4.jpg", "http://yanxuan.nosdn.127.net/5d21c0e07168c08f51272efb80906ead.jpg", "http://yanxuan.nosdn.127.net/b307577c156847878c9a5279cacfb503.jpg", "http://yanxuan.nosdn.127.net/15fdf6b1e9c34fe79f6156225afb426e.jpg", "http://yanxuan.nosdn.127.net/2682e0e61b29f8454ebe9b48707c4d04.jpg", "http://yanxuan.nosdn.127.net/9ff2857f275f9648805c7000fa2e6ca5.jpg", "http://yanxuan.nosdn.127.net/c32e4d9ac7282488cb67ee92cab69034.jpg", "http://yanxuan.nosdn.127.net/f70a303539bb0605f808e5c782e951fb.jpg", "http://yanxuan.nosdn.127.net/187d769a008c1e9f3ccd34a08f11a5c4.jpg", "http://yanxuan.nosdn.127.net/0eb0f5549b159785af3c681e5a9d10b0.jpg", "http://yanxuan.nosdn.127.net/2e1d547e23323779a0a376afbee6b4ea.jpg", "http://yanxuan.nosdn.127.net/67fb5d982b802cf23f4c93eaf2293f67.jpg", "http://yanxuan.nosdn.127.net/5bd224d135fe4011fd6f3b208cc93a50.jpg", "http://yanxuan.nosdn.127.net/1634602c409c7812fe861e42ed785edb.jpg", "http://yanxuan.nosdn.127.net/2ddda0283f541f7506d12acf5dfd0302.jpg", "http://yanxuan.nosdn.127.net/ad022d5f76da9b511d8300c21d6313a8.jpg", "http://yanxuan.nosdn.127.net/6f7955c22131556c703f66b13921a78a.jpg", "http://yanxuan.nosdn.127.net/11fafd745b23398c5fecb1df0069805c.jpg", "http://yanxuan.nosdn.127.net/f244ef7b1457b2e8e3d879a59d1a0bba.jpg", "http://yanxuan.nosdn.127.net/00cd8c0857402b58a240a12120b57372.jpg", "http://yanxuan.nosdn.127.net/06defc608e86af5a6f57b53105794c6e.jpg", "http://yanxuan.nosdn.127.net/af3172d8757a292588623dd842858dc1.jpg", "http://yanxuan.nosdn.127.net/7eb328a71dd3fc486cbeb722e9eb8d2e.jpg", "http://yanxuan.nosdn.127.net/ae4c3c557b6c1473ebf37ff6741de4f3.jpg", "http://yanxuan.nosdn.127.net/5cf37dc2ce0cbbaac21487f32abf3c96.jpg", "http://yanxuan.nosdn.127.net/e9dbcd4b9feafa0abc9edaf3d8348c8c.jpg", "http://yanxuan.nosdn.127.net/93b4a0ecc8c7c5089a9fa487896fba63.jpg", "http://yanxuan.nosdn.127.net/c579ef7dacd81472d7716bc0d2e05774.jpg", "http://yanxuan.nosdn.127.net/92178aff537f0a7def6c9d6e00f6db0d.jpg", "http://yanxuan.nosdn.127.net/3dc0f78cd67129578837d8e98ea02f30.jpg", "http://yanxuan.nosdn.127.net/6a1fcca33b5dca8021739cd9ce5b9fa5.jpg"],
		"inventory": [685, 155, 363, 413],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100%桑蚕丝"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 24252-2009"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}, {
			"attrName": "填充物克重",
			"attrValue": "360g（小）/470g（大）"
		}],
		"label": "",
		"manufacture": "",
		"sale": 454,
		"date": "1500012168529",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1006013,
		"price": 479,
		"topName": "双宫茧桑蚕丝被 空调被",
		"subName": "一级桑蚕丝，吸湿透气柔软",
		"shortDescription": ["精选奢材", "春双宫茧", "纯棉外套", "天然安全", "吸湿护肤", "感温贴身"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d7777dbbf64bbd088e75687fda38ea3f.jpg", "http://yanxuan.nosdn.127.net/52e56e89e7bbb77be8053d50a4f6e29a.jpg", "http://yanxuan.nosdn.127.net/342ffe9d4aa09880f1b142cf282737b6.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/faecd11514b03d483ac84bc21dac057b.png", "http://yanxuan.nosdn.127.net/7e3c5ad1cff5689630b69c626ee9c612.jpg", "http://yanxuan.nosdn.127.net/f63158bb02c39913faf9d63731353bcb.jpg", "http://yanxuan.nosdn.127.net/7c3bdeb0bd8f716f2d6d84e1f73d1a4f.jpg", "http://yanxuan.nosdn.127.net/2068f51e62567a0bd2a10e6cb18f2c58.jpg"],
		"types": ["升级款0.5公斤/ 200*230cm", "升级款1公斤/ 220*240cm", "升级款1公斤/ 200*230cm", "0.5公斤/ 220*240cm", "1公斤/ 220*240cm", "0.5公斤/ 200*230cm", "1公斤/ 200*230cm"],
		"chara": "7色可选",
		"description": ["http://yanxuan.nosdn.127.net/ce1a958c5c4f2d30544efced1ed93139.jpg", "http://yanxuan.nosdn.127.net/f1b52b6f84e3ca18d2cc62a6d9918146.jpg", "http://yanxuan.nosdn.127.net/494b56ed02f712d0e8ff4dafae45f790.jpg", "http://yanxuan.nosdn.127.net/9816e842af565c03033d62b6385aa996.jpg", "http://yanxuan.nosdn.127.net/d782d41f3095478f2ec602a7f3ecede5.jpg", "http://yanxuan.nosdn.127.net/08e49483a68da8fd796517a1496c193e.jpg", "http://yanxuan.nosdn.127.net/e5b453f6b5093d68242d2509ddb6dd2c.jpg", "http://yanxuan.nosdn.127.net/351241d2f9fdc693590c1bc9f404e9c3.jpg", "http://yanxuan.nosdn.127.net/b9241ff154ae112164bf9caf2663f717.jpg", "http://yanxuan.nosdn.127.net/ba403d16fd9393bac98e1fd1c528cf11.jpg", "http://yanxuan.nosdn.127.net/b881dc9c8c7caf3e77470d7b3c7fa22e.jpg", "http://yanxuan.nosdn.127.net/6fb0fd8fca9149e598ffa890580f5f93.jpg", "http://yanxuan.nosdn.127.net/c05b07fa703fee718298030cbb1c3114.jpg", "http://yanxuan.nosdn.127.net/f1070e2ac0a40545b1c6fcfb08a18084.jpg", "http://yanxuan.nosdn.127.net/c86285395b8204ea893bcfceec2d667f.jpg", "http://yanxuan.nosdn.127.net/acfa9fcc437548ab18da5f76ac5b78ca.jpg", "http://yanxuan.nosdn.127.net/ed3b0f8af3b67e5327d31eaa118feafc.jpg", "http://yanxuan.nosdn.127.net/f709f2da4ac939bdcae1175c9962dd34.jpg", "http://yanxuan.nosdn.127.net/430c0886ee1d5e59a27d1972154d5f55.jpg", "http://yanxuan.nosdn.127.net/6e131aa7f70ad541aacec0efe029a17c.jpg", "http://yanxuan.nosdn.127.net/08b9488c7d703342cc7117d2ef066b2f.jpg", "http://yanxuan.nosdn.127.net/012f5e16fd6f15ca13be455f50e041c4.jpg", "http://yanxuan.nosdn.127.net/50d33c15fec458238dd65e4efd780c43.jpg", "http://yanxuan.nosdn.127.net/05f0d5d5364fdb3875af202d4f8e84fd.jpg", "http://yanxuan.nosdn.127.net/9ad4f181f9e8d8008545ced10420b664.jpg", "http://yanxuan.nosdn.127.net/09ea824b1fa43cf7115fd869c0791058.jpg", "http://yanxuan.nosdn.127.net/48f4a978d3488c34059a086904d1b751.jpg", "http://yanxuan.nosdn.127.net/a6398bc4f857d32ee1db82bc84adb24c.jpg", "http://yanxuan.nosdn.127.net/f4908421d539f31d83b596cc3f8c771a.jpg", "http://yanxuan.nosdn.127.net/43f0ab5a39e42fae94c9e793d040a26a.jpg", "http://yanxuan.nosdn.127.net/64e59d8b6fde3b804b9757e7ab1f120d.jpg", "http://yanxuan.nosdn.127.net/849859b5a5c745fb4736f81498a0810a.jpg", "http://yanxuan.nosdn.127.net/2da7690c8c6cc1518952249050af1d61.jpg", "http://yanxuan.nosdn.127.net/54f28de309058ccdd9146d13475729a9.jpg", "http://yanxuan.nosdn.127.net/9ae4a1137644331734234f9074fd62cf.jpg", "http://yanxuan.nosdn.127.net/c16784304ff66a183b43566a8be689d1.jpg", "http://yanxuan.nosdn.127.net/bae5914fb774799532490c6fa83e00e1.jpg", "http://yanxuan.nosdn.127.net/fdb04f2f0fb1df862b107a0c056233df.jpg", "http://yanxuan.nosdn.127.net/685b8e25321a8394dacf5fa8e789167a.jpg", "http://yanxuan.nosdn.127.net/66d3c22b4cc12453552a0156488f1216.jpg", "http://yanxuan.nosdn.127.net/6437b3bde71eb2fde5121614b301308e.jpg", "http://yanxuan.nosdn.127.net/d58d15d066413d7948fe3fff7adaa5d2.jpg", "http://yanxuan.nosdn.127.net/2d0ee6e338a8f08f7bf1312a91952602.jpg", "http://yanxuan.nosdn.127.net/466562d83f7f561d18cdd7e4b70e61e0.jpg", "http://yanxuan.nosdn.127.net/f568af69ac328fd6732660578eda7604.jpg", "http://yanxuan.nosdn.127.net/30f042d555770240ceada81e82f33418.jpg", "http://yanxuan.nosdn.127.net/e5d9a738c4127dc5cee5f99f82aa186d.jpg", "http://yanxuan.nosdn.127.net/f260bfe1dd80af394ceac34224fadc99.jpg", "http://yanxuan.nosdn.127.net/226a7dbccc4a2d975d1ec09ae51e5815.jpg", "http://yanxuan.nosdn.127.net/7e5c110e96847d8730481b010c027dc6.jpg", "http://yanxuan.nosdn.127.net/ee2b0bceb648885a02e34f882c5147d5.jpg", "http://yanxuan.nosdn.127.net/26f2f4c67d26d23a59708fc182a64fcd.jpg", "http://yanxuan.nosdn.127.net/285a28a80ff496a5d41c499e30016e74.jpg", "http://yanxuan.nosdn.127.net/942289a0f8e1d8439fbd55b924ebfa47.jpg", "http://yanxuan.nosdn.127.net/a15c2cdabea44694a264d1c039cc21b9.jpg", "http://yanxuan.nosdn.127.net/5aac78054e8d260176d9735a1f549108.jpg", "http://yanxuan.nosdn.127.net/9172705277c44893cbbc1d92d8eea4fa.jpg", "http://yanxuan.nosdn.127.net/dc281303a339dae0c1ad45d25556592b.jpg", "http://yanxuan.nosdn.127.net/dacab0c5e850b2daff80eb026147d788.jpg", "http://yanxuan.nosdn.127.net/520eeb7a3dbf46339743b92cf84f041e.jpg", "http://yanxuan.nosdn.127.net/9ff1eb7188732b1db7326b63fdddea8e.jpg", "http://yanxuan.nosdn.127.net/7261f9fb7ccdc3a0e9cba5df5d0695a6.jpg", "http://yanxuan.nosdn.127.net/e87dc869e023232dddc3c9a056001c9f.jpg", "http://yanxuan.nosdn.127.net/5c4c589ef9b1385616c34646d3dbf803.jpg", "http://yanxuan.nosdn.127.net/7811cf959abf417077bce1e15c02887f.jpg", "http://yanxuan.nosdn.127.net/6de3359672ed1a233265bed1b88b4525.jpg", "http://yanxuan.nosdn.127.net/76c0e7cf97052b1d2efb0a418ac8b2fb.jpg", "http://yanxuan.nosdn.127.net/5242e5fafa16176ac21422444a26e414.jpg", "http://yanxuan.nosdn.127.net/eebb64e95ed8d0c882aee8776997a786.jpg", "http://yanxuan.nosdn.127.net/a65ca356d75a1135c99b903906d6e44e.jpg", "http://yanxuan.nosdn.127.net/bd9d60851b2fefdb39a20da6177fc6cc.jpg", "http://yanxuan.nosdn.127.net/3c6d798459eb530caf7ab2f5f499a707.jpg", "http://yanxuan.nosdn.127.net/13bd54525ddefd7680c71a1695168a3a.jpg", "http://yanxuan.nosdn.127.net/8561294b745691d8ca56b159efac8955.jpg"],
		"inventory": [337, 526, 478, 359, 815, 200, 40],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "填充物",
			"attrValue": "100%桑蚕丝（长丝棉）"
		}, {
			"attrName": "填充物重量",
			"attrValue": "0.5KG/1KG"
		}, {
			"attrName": "温馨提示",
			"attrValue": "天然桑蚕丝具有正常蛋白味道，通风晾晒2-3天即可散去"
		}],
		"label": 爆品,
		"manufacture": "罗莱制造商",
		"sale": 773,
		"date": "1500012171021",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1068012,
		"price": 599,
		"topName": "全棉色织绗缝夏凉件套",
		"subName": "夏季凉被，冬季暖套，四季可用",
		"shortDescription": ["绗缝工艺", "舒适夹层", "纯棉材质", "柔软亲肤", "色织工艺", "色彩牢固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c11d79df9e106207b7c3069524b41b52.jpg", "http://yanxuan.nosdn.127.net/e69680af06cbe82b7ff1946c59b0edcd.jpg", "http://yanxuan.nosdn.127.net/edba5f44a2e1b62d8685aa29e04fa0f4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/69145abddddd31ae8878ea7ca7297b4b.png", "http://yanxuan.nosdn.127.net/b99da1e1f21b0fe977c170ab9c06d43b.jpg", "http://yanxuan.nosdn.127.net/bbad82d64b6e7a02d0b1d98189ed4fa2.jpg", "http://yanxuan.nosdn.127.net/e50f8e392c50d9c0538ccfd452849e6a.jpg", "http://yanxuan.nosdn.127.net/98d6ac6863c11e016ab620dc5d79c13c.jpg"],
		"types": ["灰紫", "浅咖色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/f2c8da50d92baec4dd3cf9efd031c609.jpg", "http://yanxuan.nosdn.127.net/c942345abc7f4ccb968922399bf7f9d2.jpg", "http://yanxuan.nosdn.127.net/9356de74f5f05ffa1f2193eea6c5bdc3.jpg", "http://yanxuan.nosdn.127.net/3a665cfb96c9941e5b8dff8d90853bc5.jpg", "http://yanxuan.nosdn.127.net/1a046b731093bec9b8959e2474cfa4a3.jpg", "http://yanxuan.nosdn.127.net/559719ac8d4e3f71905299b9177a4ce0.jpg", "http://yanxuan.nosdn.127.net/df69b9248e172d145a2a19344e42cc95.jpg", "http://yanxuan.nosdn.127.net/aa820a8ae627c519739d3ce12c2c6518.jpg", "http://yanxuan.nosdn.127.net/fd486a7f6146271c0541539be673f58c.jpg", "http://yanxuan.nosdn.127.net/ee9211f783669f8b81b268e1a63752cd.jpg", "http://yanxuan.nosdn.127.net/35e57db1fd86be37d669d355061fd6b2.jpg", "http://yanxuan.nosdn.127.net/921d514a1b6e33f4a2f5799f2dbc9a0f.jpg", "http://yanxuan.nosdn.127.net/9dd1dae09dbade1b4128648cc34b1bc4.jpg", "http://yanxuan.nosdn.127.net/2fdb3e737194ddf41c6d807f072a3da9.jpg", "http://yanxuan.nosdn.127.net/e69d648b43e8a251ece334534302e368.jpg", "http://yanxuan.nosdn.127.net/7c105ac189899e85677e746af9cf14b8.jpg", "http://yanxuan.nosdn.127.net/3dfe534d6109aeb1d6efec2c69064654.jpg", "http://yanxuan.nosdn.127.net/4e38db6341ce3864d00b67ed920deee3.jpg", "http://yanxuan.nosdn.127.net/9d6fd87dd1e350771e0414eef4a00f2a.jpg", "http://yanxuan.nosdn.127.net/18d8a013e03ad654f2e4f8817801168c.jpg", "http://yanxuan.nosdn.127.net/4891ddcdde1628465490e970fb0cdd4e.jpg", "http://yanxuan.nosdn.127.net/c5fa31df63a81e665df490c9d7f42a98.jpg", "http://yanxuan.nosdn.127.net/dd10bc9fdd09b964ef38e6e6ab481805.jpg", "http://yanxuan.nosdn.127.net/598ada2dd1db82e54bcbda20d493f471.jpg", "http://yanxuan.nosdn.127.net/cbb8921d833c3dcb89962f8d3f77d254.jpg", "http://yanxuan.nosdn.127.net/d1bd69c32e8228bfcc72ea580e530b66.jpg", "http://yanxuan.nosdn.127.net/6259e545bc7631c00391156e2f66f690.jpg", "http://yanxuan.nosdn.127.net/7d8b5c26dd3141e4c2939cade0eb3f25.jpg", "http://yanxuan.nosdn.127.net/f8892a18d128d00d19daf3a0c5f7601c.jpg", "http://yanxuan.nosdn.127.net/4c513d36bd6f8be0b44ffd321d821419.jpg", "http://yanxuan.nosdn.127.net/547fa7c92b2a1beb018c6326630f0d52.jpg", "http://yanxuan.nosdn.127.net/0d755722133aea49aa0ff53a345977b3.jpg", "http://yanxuan.nosdn.127.net/f7ce2a9b6b8a5ade671bb0f1c0c14b6d.jpg", "http://yanxuan.nosdn.127.net/fd6d960441bd4bd208cca0e0d85e98b8.jpg", "http://yanxuan.nosdn.127.net/98eea2b147f2a6db9c409aa004ef6d1c.jpg", "http://yanxuan.nosdn.127.net/5d95786dc2a8ea1bf0f2974c536c96ae.jpg", "http://yanxuan.nosdn.127.net/db9ebe54b716d0e728e76d9cfe578638.jpg", "http://yanxuan.nosdn.127.net/4884a54269e320eb5eaeb281ce44972a.jpg", "http://yanxuan.nosdn.127.net/4f7039e7cc12f77edbc0c05a4b5cabe0.jpg", "http://yanxuan.nosdn.127.net/78218e4c3089b11eaf51dcb128f9458a.jpg", "http://yanxuan.nosdn.127.net/25ac7c99eb8032df971d5c59c5b7c5d7.jpg", "http://yanxuan.nosdn.127.net/2322fcab99f29c5e3041fb03608c5af9.jpg", "http://yanxuan.nosdn.127.net/49fbd5127b6c785cab0a7b0511d010fc.jpg", "http://yanxuan.nosdn.127.net/337ac8db46d718d2e76217aeab913757.jpg", "http://yanxuan.nosdn.127.net/9fa6cd8ddc515ed4bbf2428b326df941.jpg"],
		"inventory": [204, 612],
		"information": [{
			"attrName": "颜色",
			"attrValue": "灰紫/ 浅咖色"
		}, {
			"attrName": "印染工艺",
			"attrValue": "色织工艺"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。 严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "材质",
			"attrValue": "面料：100%棉 填充物：65% 棉/ 35%聚酯纤维"
		}],
		"label": "",
		"manufacture": "Ralph Lauren制造商",
		"sale": 893,
		"date": "1500012175927",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1130056,
		"price": 2499,
		"topName": "奢华植鞣头层水牛皮席三件套",
		"subName": "三峡水牛头层皮，高端夏凉必备",
		"shortDescription": ["头层切割", "耐用凉爽", "58道工", "健康舒适", "铬植结合", "环保安全"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/45bf241c01d6c328210400a6a1916c44.jpg", "http://yanxuan.nosdn.127.net/f4d967bf4b060ec63f5bd7d30230c06b.jpg", "http://yanxuan.nosdn.127.net/34c0274bc7da114c9e58683203430b5a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/86e140486bfc1e3b979cd6ae18b18ae9.png", "http://yanxuan.nosdn.127.net/81b96e866a8de0df30779575f2b760f6.jpg", "http://yanxuan.nosdn.127.net/500befe2a90ec38c7f37ec4d2cc742ca.jpg", "http://yanxuan.nosdn.127.net/a4d40245f7330fc95172cc7f290b9f8e.jpg", "http://yanxuan.nosdn.127.net/3b9a09ffa1c18a4c28545e4dea06766a.jpg"],
		"types": ["苋红色", "象牙黄", "亮银灰", "橄榄棕"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/06018f43a09586fc82c59fc966894271.jpg", "http://yanxuan.nosdn.127.net/d3477f39bc02d8209b0f847e076a0c18.jpg", "http://yanxuan.nosdn.127.net/b198c4d504e8e8b8ad102c829796518d.jpg", "http://yanxuan.nosdn.127.net/e1aba06b791961752a9ceb6be1e24c67.jpg", "http://yanxuan.nosdn.127.net/33ad5a121c810e0839ddc7d63a264de7.jpg", "http://yanxuan.nosdn.127.net/b1721d2c75ccd8e757663904de556b19.jpg", "http://yanxuan.nosdn.127.net/e16d88e94316be03028c890ccea4a837.jpg", "http://yanxuan.nosdn.127.net/0c607974c9cacca9b2e1cfaf39a86534.jpg", "http://yanxuan.nosdn.127.net/9fcbca296f1640877a10be5254fd5a9a.jpg", "http://yanxuan.nosdn.127.net/31caefdc21b8285e70bdaeaa19375d53.jpg", "http://yanxuan.nosdn.127.net/63d001fd3d589ecf17ac07f55ca8c338.jpg", "http://yanxuan.nosdn.127.net/4591b56e438bc1561571e68d63686c63.jpg", "http://yanxuan.nosdn.127.net/e82d54597d09a049d2a615539b82d97e.jpg", "http://yanxuan.nosdn.127.net/1b01f29d4de865f2f728839d5f763664.jpg", "http://yanxuan.nosdn.127.net/96f0b341a7216945078f67c46cfc76e0.jpg", "http://yanxuan.nosdn.127.net/8d8d5d08f12b03254b737685963ece98.jpg", "http://yanxuan.nosdn.127.net/6e14edac1d034efbb7bfa6d6b80b18bb.jpg", "http://yanxuan.nosdn.127.net/585ae79b9484e1371b47921aad6053ce.jpg", "http://yanxuan.nosdn.127.net/c6e242c7e67aef0c81beabc3d76927ce.jpg", "http://yanxuan.nosdn.127.net/727a065ee928a12d29fd28993d8736b8.jpg", "http://yanxuan.nosdn.127.net/427f560b77b4b7ae3733f6bd44323f34.jpg", "http://yanxuan.nosdn.127.net/6837825668ecafdb19d1dd5eefc0776d.jpg", "http://yanxuan.nosdn.127.net/639e474df0f5c03ad4a5b65966326ac9.jpg", "http://yanxuan.nosdn.127.net/d380270dd16f3178500893429ecd46cd.jpg", "http://yanxuan.nosdn.127.net/0120fb96db3b6009bfc7a4e291586c30.jpg", "http://yanxuan.nosdn.127.net/06465fd8e3b01f68c123bdba452c9059.jpg", "http://yanxuan.nosdn.127.net/e04fdc410b199539ed8e6a8f259bda8a.jpg", "http://yanxuan.nosdn.127.net/598eda2a673e5ee4be110561fd61c9a7.jpg", "http://yanxuan.nosdn.127.net/09b74d607b6998254b84cfbd57023238.jpg", "http://yanxuan.nosdn.127.net/a2a1f990df5fd1be7a4d1e1304fd31be.jpg", "http://yanxuan.nosdn.127.net/a522106034dcad2c8879ed9cda0abba1.jpg", "http://yanxuan.nosdn.127.net/b710df2557808e8a924277df179b6533.jpg", "http://yanxuan.nosdn.127.net/8606b7e339cc26b5ddf86c46bb684e26.jpg", "http://yanxuan.nosdn.127.net/2ffd1232ffa0c2b4c935ae922ab37f3e.jpg", "http://yanxuan.nosdn.127.net/c82daddf86e8ce996bff0e9eacae9ea4.jpg", "http://yanxuan.nosdn.127.net/aed68e94d0a07945f75dd7f8e52767de.jpg", "http://yanxuan.nosdn.127.net/bbae4d7180aac99bbbc25b0c02ea1512.jpg", "http://yanxuan.nosdn.127.net/e908f9490d23e4dd5a666079f1b4d9b7.jpg", "http://yanxuan.nosdn.127.net/6927295cd8c34c7bada8346c15a7d59f.jpg", "http://yanxuan.nosdn.127.net/feddd2857df63c9f369b0747a9857755.jpg", "http://yanxuan.nosdn.127.net/756c8364e71cb55c2fd31a29f961f18e.jpg", "http://yanxuan.nosdn.127.net/1be8eba1b81e7773a6f2ef65e998b625.jpg", "http://yanxuan.nosdn.127.net/90871aa5d2c87a2b5b27e0b05ae33450.jpg", "http://yanxuan.nosdn.127.net/cbfec688bbeed5659c4ae47e48e247dc.jpg", "http://yanxuan.nosdn.127.net/b316c1d559ee3d638731485c665dea66.jpg", "http://yanxuan.nosdn.127.net/c3b6944e7469fe821a32f48fb36df6d3.jpg", "http://yanxuan.nosdn.127.net/9860a60d251bef50061dccb43c65ca81.jpg", "http://yanxuan.nosdn.127.net/93839e34f6f7a5440e40dab0f02d0711.jpg", "http://yanxuan.nosdn.127.net/3d2d87ba076d1097c7dbd5dc13a55ad2.jpg", "http://yanxuan.nosdn.127.net/95f5e6cdc2d882b5ea24313ba1449805.jpg", "http://yanxuan.nosdn.127.net/505bb89db52043e4968a1ade03638ec7.jpg", "http://yanxuan.nosdn.127.net/8032ab6e9d2a1f65a5dbf13a24e3b1f3.jpg", "http://yanxuan.nosdn.127.net/94323a3864dfa47cb6051e6b9c866c3b.jpg", "http://yanxuan.nosdn.127.net/34776b7645f2b89de3ea0663e112d2fd.jpg", "http://yanxuan.nosdn.127.net/5e5537ef9775a890aef2bb3a8d4b2b1c.jpg", "http://yanxuan.nosdn.127.net/4c9cc9844b099b1b05ff70c206e47f5e.jpg", "http://yanxuan.nosdn.127.net/c6c87d69cf31c83b509c15e7a7def4fb.jpg", "http://yanxuan.nosdn.127.net/24eb56943ff1cc83ae3518f957376066.jpg", "http://yanxuan.nosdn.127.net/7204d9c2d82595d81be6f5dcb46f8646.jpg", "http://yanxuan.nosdn.127.net/9be6a35d7ff2b4fdb8e11cca6a53266e.jpg", "http://yanxuan.nosdn.127.net/eb00244ae388e53cd05a2885bc601ab8.jpg", "http://yanxuan.nosdn.127.net/5b09e3746f8e47e25899682417d955b4.jpg", "http://yanxuan.nosdn.127.net/2b47a2793eb92ecc2fe980aadbdf7017.jpg", "http://yanxuan.nosdn.127.net/0341ad06faedcaace79429bba0b526aa.jpg", "http://yanxuan.nosdn.127.net/9373ed461624c0c5a1f80dcc2adef8bb.jpg", "http://yanxuan.nosdn.127.net/5522c1c054b20dcebd1d68f91acf978f.jpg", "http://yanxuan.nosdn.127.net/e085852de2da841e73db1bac9a1df8c4.jpg"],
		"inventory": [196, 848, 330, 357],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床：牛皮席：150x200cm/ 枕套：74x48cmx21.8米床：牛皮席：180x200cm/ 枕套：74x48cmx2"
		}, {
			"attrName": "鞣制方式",
			"attrValue": "铬植结合鞣"
		}, {
			"attrName": "颜色",
			"attrValue": "苋红色/ 象牙黄/ 橄榄棕/ 亮银灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 4204-2011"
		}, {
			"attrName": "产地",
			"attrValue": "中国重庆"
		}],
		"label": 限时购,
		"manufacture": "",
		"sale": 327,
		"date": "1500012178563",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1131017,
		"price": 259,
		"topName": "平滑细篾头层青碳化竹凉席",
		"subName": "细篾整密，凉滑不夹肉",
		"shortDescription": ["头层竹青", "加倍凉爽", "18道工", "平整细密", "碳化工艺", "耐磨无螨"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/36e40fe15761122cd9657c8dfc04d838.jpg", "http://yanxuan.nosdn.127.net/60dd80e2f2ebc47a569a2fe96481d23c.jpg", "http://yanxuan.nosdn.127.net/fcbdb7a77c7d54033a9cee1cb57693fe.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2b6e2268ed712f1a336283f013abb7a1.png", "http://yanxuan.nosdn.127.net/44af43b45ba5c2cdfcc4708cc9e2a724.jpg", "http://yanxuan.nosdn.127.net/2f8fb59b6ee20eadae2534ff7872cb23.jpg", "http://yanxuan.nosdn.127.net/a7896c18b39b560cec229f119d4151dc.jpg", "http://yanxuan.nosdn.127.net/d80addb9b62a41d3fe2c2a9036de4686.jpg"],
		"types": ["150 x 195cm", "180 x 200cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/9d8d14c7eebaac3b7e5ca9e04e8e6c45.jpg", "http://yanxuan.nosdn.127.net/f20d948c79b16a8d43db3577a70b0cc4.jpg", "http://yanxuan.nosdn.127.net/e2c13ee6391b3c7e5a26d1a221da4b95.jpg", "http://yanxuan.nosdn.127.net/0b9351f23f9ea236b42016622a4f2f97.jpg", "http://yanxuan.nosdn.127.net/077db5fc35c2d455e064949c0de53107.jpg", "http://yanxuan.nosdn.127.net/1efaf6491d8123abd2e1fe29e9a41540.jpg", "http://yanxuan.nosdn.127.net/3835119badbf14ce6e314abb73da0845.jpg", "http://yanxuan.nosdn.127.net/dae83137f3b9701ec4160f0804dfb496.jpg", "http://yanxuan.nosdn.127.net/07bb8c45322137e9592f26f4f349740c.jpg", "http://yanxuan.nosdn.127.net/06e87a370cd1db6cdb0d4e2e586f97b8.jpg", "http://yanxuan.nosdn.127.net/0e87ffdf38abf725a3fae7cb5eaa0b95.jpg", "http://yanxuan.nosdn.127.net/af039bae30c7516936ee8876fd6de014.jpg", "http://yanxuan.nosdn.127.net/acc153dec59cbf2eb50de98299a84c0d.jpg", "http://yanxuan.nosdn.127.net/5841f24428ccfdef1e8f5fead3a2723e.jpg", "http://yanxuan.nosdn.127.net/3049bdfddc6b5b34143a01b8ce739ac2.jpg", "http://yanxuan.nosdn.127.net/00ca2c84d667dabe5a9c7d8fa8bcdfc7.jpg", "http://yanxuan.nosdn.127.net/75bacf128798c492825f0ec473d6b7cc.jpg", "http://yanxuan.nosdn.127.net/1ddab7fc16195b10523b60101d9d9f5a.jpg", "http://yanxuan.nosdn.127.net/bee92c3fcc2e77c592362e443c7d4fe1.jpg", "http://yanxuan.nosdn.127.net/fa0acd5334183d53ba7ca2f0632130f6.jpg", "http://yanxuan.nosdn.127.net/de4484582927da47c44acf94382a9d23.jpg", "http://yanxuan.nosdn.127.net/6ab31639858e42fd76b49011e80d4c08.jpg", "http://yanxuan.nosdn.127.net/134f8baa78178b765303494124d4b94d.jpg", "http://yanxuan.nosdn.127.net/3fc1b984138baab910fac2a6b48b5ab3.jpg", "http://yanxuan.nosdn.127.net/75025efa352393c926d9e36dd33edd16.jpg", "http://yanxuan.nosdn.127.net/8819e2fd1743fca408f0def979b9cb1b.jpg", "http://yanxuan.nosdn.127.net/90746e39f50b38b3aa7473e6c134b56e.jpg", "http://yanxuan.nosdn.127.net/6e65c241dc06307031b9f43746bc17be.jpg", "http://yanxuan.nosdn.127.net/9a540fd67709c2e71b005b8f77455b4e.jpg", "http://yanxuan.nosdn.127.net/9c166e642413ea6d2da780aebad79794.jpg", "http://yanxuan.nosdn.127.net/e1f3fd90035662e35083adcf7196d8cb.jpg", "http://yanxuan.nosdn.127.net/e296c9ca25c208826263f947e3dc544d.jpg", "http://yanxuan.nosdn.127.net/a6dbc739eec012e336f65406cf6b1ea0.jpg", "http://yanxuan.nosdn.127.net/bc4af12a9283fca9b4ecaef876be75e8.jpg", "http://yanxuan.nosdn.127.net/97f746c2dc73fd2e9530b12ec92af664.jpg", "http://yanxuan.nosdn.127.net/419208f357eed1df2f00f936c5c7f72f.jpg", "http://yanxuan.nosdn.127.net/4bf72bc5ffd51d22ffdffd2a27578437.jpg", "http://yanxuan.nosdn.127.net/0db2bdfc88fd5222da52feca173c0246.jpg", "http://yanxuan.nosdn.127.net/dc305c1df379ee7ce89677064f33a544.jpg", "http://yanxuan.nosdn.127.net/d4ecb48610c327d0fad59c51a8b6ad6f.jpg", "http://yanxuan.nosdn.127.net/7e48618c3cdc75750a25253087e177ea.jpg", "http://yanxuan.nosdn.127.net/2eca68e2e223bf36abd9103193cdc1ee.jpg", "http://yanxuan.nosdn.127.net/1124e7689b15ae381d95d84fddcb447b.jpg", "http://yanxuan.nosdn.127.net/c376c87e028f2ce37ce0c2a8210ef77c.jpg", "http://yanxuan.nosdn.127.net/fcdc034059431293821d9cd72a3847ec.jpg", "http://yanxuan.nosdn.127.net/ee46e5e75394979bf7781c1024ec9936.jpg", "http://yanxuan.nosdn.127.net/b029fc2c034bb806a29e39040843a74f.jpg", "http://yanxuan.nosdn.127.net/eb40f45d6d487a0b23d4453d65824d1b.jpg", "http://yanxuan.nosdn.127.net/7bfbfef2ef6167a5a84e60260eb7be36.jpg", "http://yanxuan.nosdn.127.net/32720fd11b49ae933d693ae534c1ae4f.jpg", "http://yanxuan.nosdn.127.net/19e3a406a7844ec1a37ee6f2402b39fa.jpg", "http://yanxuan.nosdn.127.net/4b1a49829073f78bb00a783921875cea.jpg", "http://yanxuan.nosdn.127.net/e22e921ab953fb400048c9bc86aea17d.jpg", "http://yanxuan.nosdn.127.net/126519425c1514fd820ea23dea241c04.jpg", "http://yanxuan.nosdn.127.net/19a0712559df9a6918dd02b03c7470bd.jpg", "http://yanxuan.nosdn.127.net/3f094c860c70d240565e9e789c4e77fb.jpg", "http://yanxuan.nosdn.127.net/1614450812315c61357a38bc2860b8df.jpg", "http://yanxuan.nosdn.127.net/8bf1fcef9fe927966968e4faf6e2e94c.jpg", "http://yanxuan.nosdn.127.net/64416ae59a3e1258d954971dba04caf2.jpg", "http://yanxuan.nosdn.127.net/33b2c4969a356098f21d6cad9bbee330.jpg", "http://yanxuan.nosdn.127.net/438724bc06d1da09d0ee19cf3a48c8a3.jpg", "http://yanxuan.nosdn.127.net/cf323fac87f02d04777298e261ea70a8.jpg", "http://yanxuan.nosdn.127.net/bbad785497fb2cbc12f28c58906df18a.jpg"],
		"inventory": [530, 84],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "150x195cm/ 180x200cm"
		}, {
			"attrName": "颜色",
			"attrValue": "抹茶色"
		}, {
			"attrName": "执行标准",
			"attrValue": "LY/T 1843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 662,
		"date": "1500012182362",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1131018,
		"price": 279,
		"topName": "天然宽篾头层青碳化竹凉席",
		"subName": "宽细夹排，升级爽滑凉感",
		"shortDescription": ["头层竹青", "加倍凉爽", "多道工序", "平整细密", "碳化工艺", "耐磨无螨"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f776d320b3aafac70301e722263084ac.jpg", "http://yanxuan.nosdn.127.net/d73318040a8bbd8b2e0bba8cf2de6569.jpg", "http://yanxuan.nosdn.127.net/827b498518ff48a2b60fe68cbabe35fd.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png", "http://yanxuan.nosdn.127.net/2c17773fb4011fa968f68582b5ef79ca.jpg", "http://yanxuan.nosdn.127.net/bb7131d99e4384e54eebd95db99a14e8.jpg", "http://yanxuan.nosdn.127.net/c238c5c1b3bbd64077855fdd495b107c.jpg", "http://yanxuan.nosdn.127.net/b5cf754150aa22253b7a31709b60cc9d.jpg"],
		"types": ["150 x 195cm", "180 x 200cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/edcc2b607e6f40351eac6ea62f5a1506.jpg", "http://yanxuan.nosdn.127.net/3b403cb751c0a9e47cf3b60fe79c4df9.jpg", "http://yanxuan.nosdn.127.net/8facff5d33fc49a3c455384e42238082.jpg", "http://yanxuan.nosdn.127.net/474206259e4668a465b7765e042c57b7.jpg", "http://yanxuan.nosdn.127.net/943e68590d7df976f05f990f6caf4a5e.jpg", "http://yanxuan.nosdn.127.net/f48f94d35efa45f0484d773fc40466e3.jpg", "http://yanxuan.nosdn.127.net/83ec6b586691334248838d6acb0ba120.jpg", "http://yanxuan.nosdn.127.net/3c6059e4ea202cb6ffb13655010b69bb.jpg", "http://yanxuan.nosdn.127.net/b705682e260bf97e03623c904cdf32e9.jpg", "http://yanxuan.nosdn.127.net/a0d87ca9f9512eba2e6b9f606e7c161e.jpg", "http://yanxuan.nosdn.127.net/29cb181299e3b9bc1059b49c32c41f62.jpg", "http://yanxuan.nosdn.127.net/fd6eb23b72a1ee3a05f65c7017aa0f2e.jpg", "http://yanxuan.nosdn.127.net/c06a5e5ee645c4b116cd27b0821bf60f.jpg", "http://yanxuan.nosdn.127.net/8eab3543d2a8b20a3f940b76a14a4bc5.jpg", "http://yanxuan.nosdn.127.net/fb62eec861e6e8323c37dd0ab6d0ac34.jpg", "http://yanxuan.nosdn.127.net/6b624c9ae444a44f95a1d24b28f311a4.jpg", "http://yanxuan.nosdn.127.net/c0de8fda3a303f177fe474abb1494a9c.jpg", "http://yanxuan.nosdn.127.net/79078514205eaa8c19d5f7c9b1c25cd0.jpg", "http://yanxuan.nosdn.127.net/78163af462107b628a565ca623fd243b.jpg", "http://yanxuan.nosdn.127.net/fdf08cfbd4371410ca4407b43472ec36.jpg", "http://yanxuan.nosdn.127.net/7205fe6fc2dd0564db442d04c5a1a8b0.jpg", "http://yanxuan.nosdn.127.net/9844e9f9a3e5b89d59abfd0ebde7e035.jpg", "http://yanxuan.nosdn.127.net/62224869336e7a7be8dc08e309a8fbc3.jpg", "http://yanxuan.nosdn.127.net/700f5304f627a25a6d567ff62e3281b6.jpg", "http://yanxuan.nosdn.127.net/c55451e09abb13a2bb8a17b93450b075.jpg", "http://yanxuan.nosdn.127.net/80e5ce3ed2d215a4d3d2cfc93235611c.jpg", "http://yanxuan.nosdn.127.net/b4f56cd749a11bbe49e54c8259796231.jpg", "http://yanxuan.nosdn.127.net/ef01092ae1e3b5ce78049d374276b5e9.jpg", "http://yanxuan.nosdn.127.net/35ea39e3f12d0e094a1b4224dbdb25ee.jpg", "http://yanxuan.nosdn.127.net/185fd848f00009139b5a8353c0bd46e2.jpg", "http://yanxuan.nosdn.127.net/2eabcc62e5463f4706743fa926ec3ca3.jpg", "http://yanxuan.nosdn.127.net/da0ab5d9738981fa06615952b0077e4f.jpg", "http://yanxuan.nosdn.127.net/d9d17c84de376cc707e16876085b2b20.jpg", "http://yanxuan.nosdn.127.net/92aa6b6b4ab3cfd1505a8766e6c6f212.jpg", "http://yanxuan.nosdn.127.net/a45ca7f586c6c9c325407f645f4de765.jpg", "http://yanxuan.nosdn.127.net/00334b88a0eb6b67b7bd01461955b71b.jpg", "http://yanxuan.nosdn.127.net/df01498d8cf96646132dd63a529756ec.jpg", "http://yanxuan.nosdn.127.net/5631f619fd32ac76eb8f7e8b8087eee3.jpg", "http://yanxuan.nosdn.127.net/e16ce53472e1a9db5e64387d2375a24c.jpg", "http://yanxuan.nosdn.127.net/88494af69e9f1b319bd64585cae31ee0.jpg", "http://yanxuan.nosdn.127.net/ec59bceab5d18766b3f0cac8046c8f4a.jpg", "http://yanxuan.nosdn.127.net/ad0ec74420e1e197795e0f0eeb8ddf90.jpg", "http://yanxuan.nosdn.127.net/9f13c5480f015a4b5a413c097f470ad1.jpg", "http://yanxuan.nosdn.127.net/0d16cb4fa0672a7f3c13e1767b542ef9.jpg", "http://yanxuan.nosdn.127.net/f4853e3f430aaeedc9e97f64ef846e4b.jpg", "http://yanxuan.nosdn.127.net/c8a1a920113c5db51882cf4e445b648b.jpg", "http://yanxuan.nosdn.127.net/265d3c427bd149a37a1ec2dfd16465ae.jpg", "http://yanxuan.nosdn.127.net/ef48a80b0db530446830181414cae58a.jpg", "http://yanxuan.nosdn.127.net/ef91ec2ec228f6302ef08869dc3caf38.jpg", "http://yanxuan.nosdn.127.net/39aeedc5793b51cf6325903ef7212465.jpg", "http://yanxuan.nosdn.127.net/577c5cc0746c370797d4bbd095e75877.jpg", "http://yanxuan.nosdn.127.net/9d35aa533e787f3de2b7eff775764690.jpg", "http://yanxuan.nosdn.127.net/231db1195b0753bcff2dfc815607a44c.jpg", "http://yanxuan.nosdn.127.net/fe31a36634b40345447c4e080097f48b.jpg", "http://yanxuan.nosdn.127.net/0c940c4f4255e01d557597395ab27fab.jpg", "http://yanxuan.nosdn.127.net/cb09a707d014eef37e730826c1ec62b4.jpg", "http://yanxuan.nosdn.127.net/355b4289a22784ce6dd8cd4ff04ef6d1.jpg", "http://yanxuan.nosdn.127.net/3117363aa2aa2c41fd800bd0c98a402b.jpg", "http://yanxuan.nosdn.127.net/1b1ef93a4b891ffaf176a33e07d338f7.jpg", "http://yanxuan.nosdn.127.net/126b502ddac8f8cde864ccebdc9fdc78.jpg", "http://yanxuan.nosdn.127.net/33f2d1910fb16e2bac4ba7c8ae838a8e.jpg"],
		"inventory": [778, 840],
		"information": [{
			"attrName": "颜色",
			"attrValue": "抹茶色"
		}, {
			"attrName": "材料",
			"attrValue": "席面：毛竹包边：100%棉背面：100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "LY/T 1843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 311,
		"date": "1500012185037",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1164033,
		"price": 99,
		"topName": "头层青碳化宿舍单人床竹席",
		"subName": "细整竹丝，凉滑不夹肉，超高性价比",
		"shortDescription": ["头层竹青", "加倍凉爽", "18道工", "平整细密", "碳化工艺", "耐磨无螨"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/42dd82d2e0b8f602cbe66debbedc666e.jpg", "http://yanxuan.nosdn.127.net/2335b02ef53a7b2e314bd2baccb30907.jpg", "http://yanxuan.nosdn.127.net/f274beb32ef5960020440f45c317544a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9b97a5d2f9c24c434f7ee0df80678b5e.png", "http://yanxuan.nosdn.127.net/0ce5b7419c6452675b2ffe98a7349332.jpg", "http://yanxuan.nosdn.127.net/d15d71c15accd6beba66f76ccc843080.jpg", "http://yanxuan.nosdn.127.net/148d0386bbbbb09345684090b5adb6b7.jpg", "http://yanxuan.nosdn.127.net/f05eb41174f569e1449fd9d2fceaeaaa.jpg"],
		"types": ["90*195cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/0db3d27692fe7eb26adefad57422dece.jpg", "http://yanxuan.nosdn.127.net/205df6a96ae3d14f57c288185b46f463.jpg", "http://yanxuan.nosdn.127.net/4929769292fae15617a67d5be7a2e059.jpg", "http://yanxuan.nosdn.127.net/75c1cf713ba87d1385eb58271fabc046.jpg", "http://yanxuan.nosdn.127.net/e5aae3918939d3d78c4e3db110194880.jpg", "http://yanxuan.nosdn.127.net/4e82b1580eca5e88be882766b4824cbd.jpg", "http://yanxuan.nosdn.127.net/f318f16565087fd78330978d5c11d0ef.jpg", "http://yanxuan.nosdn.127.net/3cda2d84f4c6fa9808c67f88d82318d2.jpg", "http://yanxuan.nosdn.127.net/f8f7421efb1323c1018634f6463d3fa8.jpg", "http://yanxuan.nosdn.127.net/f18d56c56b899d4fa67cc6c3bdc68544.jpg", "http://yanxuan.nosdn.127.net/0af9385df63db36d8d697b4adf125ae9.jpg", "http://yanxuan.nosdn.127.net/63bf1ef24f0ddf1680cd7b5ccc0dbd1a.jpg", "http://yanxuan.nosdn.127.net/77e1497253af3f94a1799be8337404bd.jpg", "http://yanxuan.nosdn.127.net/d926e8a3fad7c67ee26afdd90933aa5b.jpg", "http://yanxuan.nosdn.127.net/a54250191fa9eedd87b9c50fe876e56c.jpg", "http://yanxuan.nosdn.127.net/f3be1353eb712ffd34e4a3d5caeda2f2.jpg", "http://yanxuan.nosdn.127.net/42c657d3360c6d563079de19f6459598.jpg", "http://yanxuan.nosdn.127.net/26a9097c83f5179de6fd2b24cfc651df.jpg", "http://yanxuan.nosdn.127.net/a46a55a512e5236f4fea2b42cd7e3ecb.jpg", "http://yanxuan.nosdn.127.net/be897eebf51530e7ef020d21a5f97be8.jpg", "http://yanxuan.nosdn.127.net/83b7fd9d096abf44308d0e29ccdd3fde.jpg", "http://yanxuan.nosdn.127.net/f5dfe2e3984cb9481e3204cfc4f91d11.jpg", "http://yanxuan.nosdn.127.net/47354d1c58cb97fdaf707edfea318abc.jpg", "http://yanxuan.nosdn.127.net/7fcd2219ce4ae4b6bc93cb9a305b59bf.jpg", "http://yanxuan.nosdn.127.net/ac30729ea9654cd25c37359f3e2450e6.jpg", "http://yanxuan.nosdn.127.net/5b86a59b3207dcb9f780391f96ef8bb7.jpg", "http://yanxuan.nosdn.127.net/d72652267b0effc45a5eab30f0349bfd.jpg", "http://yanxuan.nosdn.127.net/cdb325c5896466a63f791c551731cd6f.jpg", "http://yanxuan.nosdn.127.net/8f31bedc7438092ec0a0359339ab43ee.jpg", "http://yanxuan.nosdn.127.net/3381df72d8cea4592cee99669254ac6d.jpg", "http://yanxuan.nosdn.127.net/e292da570c37e672a0eb8f99703f86c6.jpg", "http://yanxuan.nosdn.127.net/20145256d1c1942f7bb947129005e9fd.jpg", "http://yanxuan.nosdn.127.net/b12ff9b03fa982a95f62327070eac154.jpg", "http://yanxuan.nosdn.127.net/b0e52f6ec297f37f0968deee59cfaf31.jpg", "http://yanxuan.nosdn.127.net/46a0b9258be9c573c47e12da7d932967.jpg", "http://yanxuan.nosdn.127.net/61f0714228d55a0ea6a08f0d399bd165.jpg", "http://yanxuan.nosdn.127.net/825e4009e70990603d49fe453133b101.jpg", "http://yanxuan.nosdn.127.net/3d34772210a23734497779a04e02686f.jpg", "http://yanxuan.nosdn.127.net/743c8e7315fa3b651ebf7795634e8c90.jpg", "http://yanxuan.nosdn.127.net/718a8afad4e5cf38d8a3348c1495f328.jpg", "http://yanxuan.nosdn.127.net/dd1d90de053157c96ecfd4e896325082.jpg", "http://yanxuan.nosdn.127.net/68cf56ef7826a22e305740ce684660b9.jpg", "http://yanxuan.nosdn.127.net/d25fb4663335387a7cfaca7ba0bad7f5.jpg", "http://yanxuan.nosdn.127.net/be2ee3ed7c8cc7a3a7910758b3b8141c.jpg", "http://yanxuan.nosdn.127.net/64a501553153197022489e23a27578ad.jpg", "http://yanxuan.nosdn.127.net/eea09249b6939c582ac52d241df0f8ba.jpg", "http://yanxuan.nosdn.127.net/6a9552e29ab2ca534762b200af8ea132.jpg", "http://yanxuan.nosdn.127.net/94eff1fa1b3c7257c09a471e778c5eb0.jpg", "http://yanxuan.nosdn.127.net/f721043b1d336e899d1d5d82c12147da.jpg", "http://yanxuan.nosdn.127.net/6e6abe9e703fddf0d80b2f8dad73103d.jpg", "http://yanxuan.nosdn.127.net/58f7b8f1b9ca7dbcb3c685c8c8347933.jpg", "http://yanxuan.nosdn.127.net/f7dc226c0b5b5be478e73a5c6e158c86.jpg", "http://yanxuan.nosdn.127.net/100b54c594d23fdca057f011fd7420c2.jpg", "http://yanxuan.nosdn.127.net/70bc68bec024e93f51099a4262bc8b9a.jpg", "http://yanxuan.nosdn.127.net/9431383220d215cf7a220e91ec144450.jpg", "http://yanxuan.nosdn.127.net/3fe86628c9dac5c853545abfbf8a9be0.jpg"],
		"inventory": [96],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "90*195cm"
		}, {
			"attrName": "颜色",
			"attrValue": "抹茶色"
		}, {
			"attrName": "执行标准",
			"attrValue": "LY/T 1843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 235,
		"date": "1500012187741",
		"category": "居家",
		"subCategory": "夏凉"
	})
	var goodsEntity = new goodsModel({
		"id": 1009013,
		"price": 99,
		"topName": "可水洗抗菌防螨丝羽绒枕",
		"subName": "进口防螨布，热销50万件",
		"shortDescription": ["物理防螨", "肌肤健康", "仪征丝绒", "细软蓬松", "反复测试", "贴合头颈"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f97048f6f518967cb525cdcc858a285c.jpg", "http://yanxuan.nosdn.127.net/eafeefd009f96a1bc94bce8285b7ebf1.jpg", "http://yanxuan.nosdn.127.net/a7b0ab6dfd69241fa6b0a479d932d9a1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ebd67e0ba884dc3d15a18898ecf6cb06.png", "http://yanxuan.nosdn.127.net/34bb2ff0358432c3f15e6afa0d5d2104.jpg", "http://yanxuan.nosdn.127.net/5114eb391397033eca305055e21d9cb3.jpg", "http://yanxuan.nosdn.127.net/73a866b532183dec74232b0cc1b36428.jpg", "http://yanxuan.nosdn.127.net/331a2954f81d0cfe764cbdf2e5b6b328.jpg"],
		"types": ["抗菌防螨枕"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/b2576e9567e5de643a02f3a5fc26ee17.jpg", "http://yanxuan.nosdn.127.net/029b577be403335de4c2a37b9d83a31d.jpg", "http://yanxuan.nosdn.127.net/779f04eac136c934fe9a17d2d26137ae.jpg", "http://yanxuan.nosdn.127.net/5d641ff16c4b2502442616f3e194d575.jpg", "http://yanxuan.nosdn.127.net/ec14832d8c947f4dbe716eabfaa7029a.jpg", "http://yanxuan.nosdn.127.net/645db2317426b5a852d331231e258c02.jpg", "http://yanxuan.nosdn.127.net/ac6055481565438d5fee342c3ccec155.jpg", "http://yanxuan.nosdn.127.net/8382f534cf2acac06551df87e136c4f0.jpg", "http://yanxuan.nosdn.127.net/ce4cf3fdb7230634c72fbf6c97bd3c16.jpg", "http://yanxuan.nosdn.127.net/5d78a9f815043b0ed880d0ba90b08dbc.jpg", "http://yanxuan.nosdn.127.net/3aa34184510cbdd8df6ba4440af6e37e.jpg", "http://yanxuan.nosdn.127.net/bbb48af3056fd3dcffa9968a076753f2.jpg", "http://yanxuan.nosdn.127.net/dc72b5750827b7d222d972888fb9831b.jpg", "http://yanxuan.nosdn.127.net/b24b9b12b891be546263e2cd3f0b704c.jpg", "http://yanxuan.nosdn.127.net/631996fac12032dbdc17ffd721fb7087.jpg", "http://yanxuan.nosdn.127.net/ecc5a8793e18aad9bf3d5f0a89bff12f.jpg", "http://yanxuan.nosdn.127.net/943a4bc41ad6e80051c5cfacd102cfde.jpg", "http://yanxuan.nosdn.127.net/c0a13678fdef5e56d53de783e8e01350.jpg", "http://yanxuan.nosdn.127.net/220ef8d778bdfc198fcb53f0f01289a2.jpg", "http://yanxuan.nosdn.127.net/573acbc397778453b21aba05e5a397f6.jpg"],
		"inventory": [27],
		"information": [{
			"attrName": "面料成分",
			"attrValue": "70%高模量聚酯+30%聚酰胺"
		}, {
			"attrName": "填充成分",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "重量",
			"attrValue": "1000g"
		}, {
			"attrName": "产地",
			"attrValue": "中国"
		}, {
			"attrName": "温馨提示",
			"attrValue": "枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 163,
		"date": "1500012190281",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1036002,
		"price": 99,
		"topName": "高山苦荞麦枕",
		"subName": "原生苦荞，健康护颈",
		"shortDescription": ["凉山苦荞", "天然有机", "高温灭菌", "透气饱满", "绗缝工艺", "柔软贴合"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/10aa00c451814987ee5b217323b3fc90.jpg", "http://yanxuan.nosdn.127.net/3525eb395d53a71c60ed98ba33d0ff3a.jpg", "http://yanxuan.nosdn.127.net/5de8fdf5adc2d23784ac13c1e0a4883e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/e2a9af4c4152ff443285cfaec2c1be7e.png", "http://yanxuan.nosdn.127.net/1c3acbfaa67a1a2034c53d6a12b87b5b.jpg", "http://yanxuan.nosdn.127.net/49366cac271c5614501660ccf2c886a6.jpg", "http://yanxuan.nosdn.127.net/6def3e5d0f22d46c20f88304f2dd1f23.jpg", "http://yanxuan.nosdn.127.net/49844b0d390c2a1cf6147e80de8c2e51.jpg"],
		"types": ["74×48cm±1cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/698e2a2252d9d4227f17f9d88a6e87ef.jpg", "http://yanxuan.nosdn.127.net/38d70ef29b5e883125a27d6607a9ce62.jpg", "http://yanxuan.nosdn.127.net/c0f7666b8f215007d322b7f7e7267d7c.jpg", "http://yanxuan.nosdn.127.net/1d7661b99de023bed2ebf360a8f0cb7e.jpg", "http://yanxuan.nosdn.127.net/3a1860e8b8cac1f3e5a42bc7de5a8e04.jpg", "http://yanxuan.nosdn.127.net/eb4e72d283bd58f1b23125dbeef11ef6.jpg", "http://yanxuan.nosdn.127.net/9846b6c36e9dc27fc4b18ec3e0177aff.jpg", "http://yanxuan.nosdn.127.net/9b4e21c0d2fa575dc1636baf71666b1c.jpg", "http://yanxuan.nosdn.127.net/9588e23919c7c54998bb5a07b0907eeb.jpg", "http://yanxuan.nosdn.127.net/c807c41d48efb876244bd41d1dd97ef5.jpg", "http://yanxuan.nosdn.127.net/4b213fc5b21cbf79c39412e6d9b21e7f.jpg", "http://yanxuan.nosdn.127.net/2fba066200fc8ce47a0c7e99b47f97e4.jpg", "http://yanxuan.nosdn.127.net/208af7a63670fc2a438364f2336f2806.jpg", "http://yanxuan.nosdn.127.net/ab0c3198ec5c1193da9cd5a491bb459d.jpg", "http://yanxuan.nosdn.127.net/4c24e52caa847dd17210cc57d243d08c.jpg", "http://yanxuan.nosdn.127.net/0371cfdea30a90ef6955e3bcf3f9b6c0.jpg", "http://yanxuan.nosdn.127.net/8916eff34678bfda4980a231a3b8d09a.jpg"],
		"inventory": [96],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100% 高山苦荞麦壳"
		}, {
			"attrName": "规格",
			"attrValue": "74×48cm±1cm"
		}, {
			"attrName": "填充物重量",
			"attrValue": "3KG"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.天然植物填充，遇梅雨季节需要干燥保存，如有少量飞虫产生，太阳下晒3小时即可去除。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 447,
		"date": "1500012192781",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1019006,
		"price": 99,
		"topName": "植物填充护颈夜交藤枕",
		"subName": "安神活络 天然保健",
		"shortDescription": ["野生采收", "野生采收", "附带插袋", "软硬调节", "绗缝工艺", "耐用柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/229119b97a7aacd3210740ce72b5f9ec.jpg", "http://yanxuan.nosdn.127.net/4bfd4e4617aa9c6d17d9608e1efee66e.jpg", "http://yanxuan.nosdn.127.net/d217a2714192b05706287bad134d989b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/b216f2a4d523f86b51e3fd3cb7b9fa7b.png", "http://yanxuan.nosdn.127.net/7d5b06bf24cf343ac939b38fb8c1a1c7.jpg", "http://yanxuan.nosdn.127.net/343d55292417edd5c3959f3ff5c28020.jpg", "http://yanxuan.nosdn.127.net/3e2d677726a32443cfb4e82b15829ff3.jpg", "http://yanxuan.nosdn.127.net/fff8d78ae12dfe5477e16669664ba4f5.jpg"],
		"types": ["夜交藤枕"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/dbb1e80da69953f64383dd71fd0213f5.jpg", "http://yanxuan.nosdn.127.net/6acc4669a29c55f5c222414ad01bf89b.jpg", "http://yanxuan.nosdn.127.net/514bd211189416cfd66867b7894e64ec.jpg", "http://yanxuan.nosdn.127.net/6291db12d9239a17cc4a746db803a307.jpg", "http://yanxuan.nosdn.127.net/2c12eb42828a8b7aa9b428e34b7a6af5.jpg", "http://yanxuan.nosdn.127.net/592207ddff96c716e5a8d3e02ba80151.jpg", "http://yanxuan.nosdn.127.net/b58dac5f4495fa73d8df137d4aa611d3.jpg", "http://yanxuan.nosdn.127.net/89e5a35e2763cd977f5ecb30f20651ab.jpg", "http://yanxuan.nosdn.127.net/d9b35ce1283c07e4f757e48016258e2d.jpg", "http://yanxuan.nosdn.127.net/29d555239824f9d3f92526120b75550c.jpg"],
		"inventory": [246],
		"information": [{
			"attrName": "填充成分",
			"attrValue": "20% 夜交藤+80% 聚酯纤维"
		}, {
			"attrName": "尺寸",
			"attrValue": "48*74cm"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "适用人数",
			"attrValue": "单人"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.植物填充，遇梅雨季节需要通风、干燥保存。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 653,
		"date": "1500012195355",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1019000,
		"price": 99,
		"topName": "升级款护颈波浪记忆枕",
		"subName": "享受自在侧睡",
		"shortDescription": ["密度适中", "饱满耐用", "4秒回弹", "缓解压力", "波浪设计", "贴合头颈"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/525429ff396d01c5f2a693524590908d.jpg", "http://yanxuan.nosdn.127.net/9ce48c8cb03d98b8491e0bd0ba30fd0f.jpg", "http://yanxuan.nosdn.127.net/fd016bbc7ab4764839336c6c310e9568.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f93d0fe10a8556107f91d2b77b0955a4.png", "http://yanxuan.nosdn.127.net/129cf4c83627828d8c68134eed07acba.jpg", "http://yanxuan.nosdn.127.net/155cd16ef921a10849eb6f353a81711d.jpg", "http://yanxuan.nosdn.127.net/50c44c65dc8913fbc87da4d29e4e16a1.jpg", "http://yanxuan.nosdn.127.net/007f21a042e9bc44ac4f44db11e5428b.jpg"],
		"types": ["波浪枕"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/c1e5ff831fd66e404c8b2ac90b91c4e0.jpg", "http://yanxuan.nosdn.127.net/b0118ea9e0c1aa9596f9b57a8d862581.jpg", "http://yanxuan.nosdn.127.net/948f4095c7efbd2a1a7bfd624321b2e2.jpg", "http://yanxuan.nosdn.127.net/9b415b3b9e48688d3c81c96edbe5a26a.jpg", "http://yanxuan.nosdn.127.net/4a841d953c5d0ec3dbce02152bb44c2f.jpg", "http://yanxuan.nosdn.127.net/2ce236ff050b8743bc2139c25db084d8.jpg", "http://yanxuan.nosdn.127.net/8dac2a76d5886429b8417cdd48bcbb7b.jpg", "http://yanxuan.nosdn.127.net/b79a8aac5584b137a3b010897415510e.jpg", "http://yanxuan.nosdn.127.net/100e058ca7bf727ac206147961e2638d.jpg", "http://yanxuan.nosdn.127.net/746152d0f88b32455c1a85691a18ee0b.jpg", "http://yanxuan.nosdn.127.net/56d32b1bef15fd6f4b5780466b04c69d.jpg", "http://yanxuan.nosdn.127.net/e949e68bdec54d89a8c55579da4eedd8.jpg", "http://yanxuan.nosdn.127.net/cee6a2ffbde4cfcc6f4e6bcaa824a28c.jpg", "http://yanxuan.nosdn.127.net/3ac36b88f968048e02a9d074a0d28478.jpg", "http://yanxuan.nosdn.127.net/8ed41d77cb4db472e73d996ca8566305.jpg", "http://yanxuan.nosdn.127.net/ccc002f264cd53415811961486ae49bd.jpg", "http://yanxuan.nosdn.127.net/21b631c1147dee010fc3a7060feb8497.jpg", "http://yanxuan.nosdn.127.net/124748dc5e030621db17ff341024cf9d.jpg", "http://yanxuan.nosdn.127.net/800ff0bc68c16062cd128a4850bb0800.jpg", "http://yanxuan.nosdn.127.net/7add37eaba2dcfc34441f8a6d605ddc7.jpg", "http://yanxuan.nosdn.127.net/c078aab2f23798ff88e1623e01694ff2.jpg", "http://yanxuan.nosdn.127.net/9fb2a267c184178d454c48a519338bfb.jpg"],
		"inventory": [889],
		"information": [{
			"attrName": "面料成分",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "尺寸",
			"attrValue": "50cm×30cm×9cm-7cm"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "适用人数",
			"attrValue": "单人"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.记忆绵产品为进口环保化学材质聚氨酯发泡而成，刚打开包装会有少量聚氨酯气体产生，拆除外套通风除味3-5天即可。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 289,
		"date": "1500012197861",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1019001,
		"price": 109,
		"topName": "升级款护颈加翼记忆枕",
		"subName": "仰睡优质装备",
		"shortDescription": ["加翼设计", "贴合承托", "中部凹陷", "颈椎牵引", "D45密", "饱满耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b997b19e1bfdfa303777e08bd5958e46.jpg", "http://yanxuan.nosdn.127.net/a07d2b169208406b7681e57f691daec1.jpg", "http://yanxuan.nosdn.127.net/43bd7f8f8a1542b2ad2169aea5033806.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1f20d49eae463c1c4a39f8305e2a627c.png", "http://yanxuan.nosdn.127.net/35634c85786bb56314df11c0dbea1b57.jpg", "http://yanxuan.nosdn.127.net/cdcdee30c0d89fd4defb57539dfab468.jpg", "http://yanxuan.nosdn.127.net/9bbfbeead2e0b038f6ee002a2f556281.jpg", "http://yanxuan.nosdn.127.net/e86e34c26d2b6d6caa02cd6cf4039cf5.jpg"],
		"types": ["加翼枕"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/c6eb7df0cb54b1efd167d8c9fb499d4d.jpg", "http://yanxuan.nosdn.127.net/c6df32e9289c2e47966c3b117268698a.jpg", "http://yanxuan.nosdn.127.net/92adf10bf5bb25403f449ec1e8612223.jpg", "http://yanxuan.nosdn.127.net/8f4b631f23c4d86aa3c6882258f1ed61.jpg", "http://yanxuan.nosdn.127.net/484044307538426c6c79d88891a44573.jpg", "http://yanxuan.nosdn.127.net/3340218a14eb10f023410cb7b14ff5c7.jpg", "http://yanxuan.nosdn.127.net/12f8e836b270f459bb9a7d0fd043f840.jpg", "http://yanxuan.nosdn.127.net/234a40d515b4ef5283a4b307aa694880.jpg", "http://yanxuan.nosdn.127.net/b999f414bab88eb61dc8c7c19e43784b.jpg", "http://yanxuan.nosdn.127.net/729907923ec1d1c987b4fc9a3aab75da.jpg", "http://yanxuan.nosdn.127.net/86c4cfbca9b18f1931fd6424d504f58c.jpg", "http://yanxuan.nosdn.127.net/11cd2b57e9430b77019c1148ffc98e00.jpg", "http://yanxuan.nosdn.127.net/a9025355615221491eeb0028f52c1190.jpg", "http://yanxuan.nosdn.127.net/6541688751bf78732def7b1e7b80acde.jpg", "http://yanxuan.nosdn.127.net/a307a08fe871cda58d345c3d27aec637.jpg", "http://yanxuan.nosdn.127.net/9d0c08ea2cce7fa09cd20463687fde2b.jpg", "http://yanxuan.nosdn.127.net/a141d9a027680a921b70adabb9e822f6.jpg", "http://yanxuan.nosdn.127.net/8eb750a2ce2373be40b852aaf0494edf.jpg", "http://yanxuan.nosdn.127.net/2275f3636c0719ab83d7391993da903a.jpg", "http://yanxuan.nosdn.127.net/0d05c90aa86f19886e94e402305dada1.jpg", "http://yanxuan.nosdn.127.net/0acbac29252596be257c86a590eb567a.jpg", "http://yanxuan.nosdn.127.net/c99b1fd6b0b812a289b5887233453646.jpg", "http://yanxuan.nosdn.127.net/e45ab89e057c3f73c0b06464115ea357.jpg", "http://yanxuan.nosdn.127.net/08f026762e2459f85f66766e4ea3e195.jpg", "http://yanxuan.nosdn.127.net/3365604b1b01c7a99d31a5307991bbb8.jpg", "http://yanxuan.nosdn.127.net/2406859dfe2befe93927346fe1317c22.jpg", "http://yanxuan.nosdn.127.net/0121587794b92e2a5bba41460984f091.jpg", "http://yanxuan.nosdn.127.net/5187cfe2da36ce4c3946aa6d6ce23461.jpg", "http://yanxuan.nosdn.127.net/07447d11bdb3db402bd06a991f765052.jpg", "http://yanxuan.nosdn.127.net/a5219f74a5884e3bd4dc2a44c40ac521.jpg", "http://yanxuan.nosdn.127.net/ca006cc5c87ccde67019c28e7627d0fc.jpg", "http://yanxuan.nosdn.127.net/3260e27582b77978faee526a2a3c9d68.jpg", "http://yanxuan.nosdn.127.net/95093aa9450eb598e110bfa7903dce7f.jpg"],
		"inventory": [284],
		"information": [{
			"attrName": "面料成分",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "尺寸",
			"attrValue": "50cm×30cm×10cm-6cm"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "适用人数",
			"attrValue": "单人"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.记忆绵产品为进口环保化学材质聚氨酯发泡而成，刚打开包装会有少量聚氨酯气体产生，拆除外套通风除味3-5天即可。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 14,
		"date": "1500012202442",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1037012,
		"price": 69,
		"topName": "圆形护颈苦荞麦枕",
		"subName": "高山苦荞填充，放松颈椎",
		"shortDescription": ["凉山苦荞", "天然有机", "高温灭菌", "透气饱满", "颈椎拉伸", "保健缓解"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9941b7fae6b7206d0af9b560c0bae7e7.jpg", "http://yanxuan.nosdn.127.net/6805233553c0a16861beaec77aa15816.jpg", "http://yanxuan.nosdn.127.net/3f62c9a9614bd051489d479bc0bb0ece.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/cdd020bcedff8576fd0d204219594ad4.png", "http://yanxuan.nosdn.127.net/d37e9d2b6bf71d4afa92928313abb69a.jpg", "http://yanxuan.nosdn.127.net/8ab74790baa735d1afba16aae5464180.jpg", "http://yanxuan.nosdn.127.net/2e1cb4e60899b883dd1824ad9ad8f6d3.jpg", "http://yanxuan.nosdn.127.net/cac91a5d7952110cda8b857c7b92703c.jpg"],
		"types": ["圆形"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/92e065fd564833df8d30ee998a6309cb.jpg", "http://yanxuan.nosdn.127.net/2f94db52407c73ef4c3c2ed4ab8c87e7.jpg", "http://yanxuan.nosdn.127.net/4dddb8eedae26269e0ae1cc114eeee50.jpg", "http://yanxuan.nosdn.127.net/d67592cccde77ce175b196fb51534880.jpg", "http://yanxuan.nosdn.127.net/812a929e1e7db26c1902a5fefa25a7b8.jpg", "http://yanxuan.nosdn.127.net/3c1e00a872c146ebcffd1aa42d758496.jpg", "http://yanxuan.nosdn.127.net/5441c3860c5ff8b3766ba2b0e014213f.jpg", "http://yanxuan.nosdn.127.net/d0a02aee1dc5f8a280eee678ab2d7a45.jpg", "http://yanxuan.nosdn.127.net/e2a21d3a75d4ec50431ddddd3298ae0b.jpg", "http://yanxuan.nosdn.127.net/5404f9d679b0d2ca0fd7aafffec1d3c0.jpg", "http://yanxuan.nosdn.127.net/b471c9b0bfcfa0c451eab494ff0278c3.jpg", "http://yanxuan.nosdn.127.net/33c95fe74862820264e02ff290a78272.jpg", "http://yanxuan.nosdn.127.net/5f31eb1f1b684de70bc70e8a86a4bc11.jpg", "http://yanxuan.nosdn.127.net/75c423d78d9c56af60958833afeb4452.jpg", "http://yanxuan.nosdn.127.net/b402caf41e160e62b61237c0a10abe8e.jpg", "http://yanxuan.nosdn.127.net/5c83d40738f5a03623bd0f8a24949bb4.jpg", "http://yanxuan.nosdn.127.net/dbdff4265463c930fb06b28767261926.jpg", "http://yanxuan.nosdn.127.net/43355138eb32b8cb6b950d51ba38db5c.jpg", "http://yanxuan.nosdn.127.net/1fe3c46e76126d6dc9872c9f0d561e9f.jpg", "http://yanxuan.nosdn.127.net/fea1a7969b68ce647e655398e2beef09.jpg", "http://yanxuan.nosdn.127.net/e48409e525be320f98fc14aa40ed3a9b.jpg", "http://yanxuan.nosdn.127.net/8512ad8f5d680271651dbc69d7d8a16a.jpg", "http://yanxuan.nosdn.127.net/8b3e54a7360dd849f3c098fc2cc5ae12.jpg", "http://yanxuan.nosdn.127.net/3b7c8648d1cf1c68bfb75293af7fd0c3.jpg", "http://yanxuan.nosdn.127.net/2db0d7c0f0151662e5a06078efec21c1.jpg", "http://yanxuan.nosdn.127.net/7fd50666a97d4cd2cf9c6f32a053b8ae.jpg", "http://yanxuan.nosdn.127.net/806a975d21c93917a1e406cd3de8e7f0.jpg", "http://yanxuan.nosdn.127.net/32ec426227e7208f93d47c844684e69d.jpg", "http://yanxuan.nosdn.127.net/8c472f321af2b527593aa96259944780.jpg", "http://yanxuan.nosdn.127.net/86f9773e41872a4398f4118fe0869a3a.jpg", "http://yanxuan.nosdn.127.net/c629d3761a71fdfca80dfe125b4783cb.jpg", "http://yanxuan.nosdn.127.net/69c8d2d299468bf485e1b62c3121be6b.jpg", "http://yanxuan.nosdn.127.net/038b59945443c481b96936c7a3ca3f81.jpg", "http://yanxuan.nosdn.127.net/2802906b8b2c3ff849b1b9ed1469d37e.jpg", "http://yanxuan.nosdn.127.net/de2b9357eed35a554f3fe3de1fe2d3dd.jpg", "http://yanxuan.nosdn.127.net/fc35132c0b41f1ee8c9ec5277ef55024.jpg", "http://yanxuan.nosdn.127.net/56869d9a1d818d4836bc8e41a03359d1.jpg", "http://yanxuan.nosdn.127.net/89fc80f8e57ec8c7eb89657eb7febcdb.jpg"],
		"inventory": [398],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "40*8cm"
		}, {
			"attrName": "外用面料",
			"attrValue": "45%麻45%棉10%聚酯纤维"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.天然植物填充，遇梅雨季节需要干燥保存，如有少量飞虫产生，太阳下晒3小时即可去除。 2.枕芯类商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款枕头，挑选最适合的进行使用。3.建议每次使用时间控制在15分钟以内。"
		}, {
			"attrName": "商品重量",
			"attrValue": "0.45kg+-0.05kg"
		}],
		"label": "",
		"manufacture": "",
		"sale": 488,
		"date": "1500012207454",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1006010,
		"price": 659,
		"topName": "秋冬保暖加厚细羊毛被",
		"subName": "细腻绵羊毛，保暖性增加一倍",
		"shortDescription": ["超细冬绒", "蓬松保暖", "丝光工艺", "不板结块", "贡缎被套", "柔软透气"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/161e966cc647f424edca1737a3e01fdc.jpg", "http://yanxuan.nosdn.127.net/ff2c212b5e242a7096d696d1841e059f.jpg", "http://yanxuan.nosdn.127.net/00bbea7274de2924fa4f7c2e6db8d0d4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/8fe022126a2789d970f82853be13a5e6.png", "http://yanxuan.nosdn.127.net/9b40ba300851af1b84ca0749bae70718.jpg", "http://yanxuan.nosdn.127.net/fd7465ba32e23fd107161306d6b580cc.jpg", "http://yanxuan.nosdn.127.net/288dc3fe3238962519f3abd5201e411e.jpg", "http://yanxuan.nosdn.127.net/06cb7ac0991cb4ea236c826e8e6f0a9c.jpg"],
		"types": ["200*230cm（白色）", "200*230cm（灰色）", "200*230cm（粉色）", "220*240cm（白色）", "220*240cm（灰色）", "220*240cm（粉色）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/666240e9c223cdd30ff436c8fca13964.jpg", "http://yanxuan.nosdn.127.net/a26733c0ff607d9d246da88838745c5f.jpg", "http://yanxuan.nosdn.127.net/a13d2bfb113d99722690a8f1bd234cd4.jpg", "http://yanxuan.nosdn.127.net/fc2dd95289f04db097965914fbc88ae2.jpg", "http://yanxuan.nosdn.127.net/70516f14cf6a0ab9defb3dcf8292af50.jpg", "http://yanxuan.nosdn.127.net/b68a5d5357c73702228820610f2b09bf.jpg", "http://yanxuan.nosdn.127.net/e1a3e63f324c197483a75d57ad668b83.jpg", "http://yanxuan.nosdn.127.net/76455ee48426aa01d02073cea70421c6.jpg", "http://yanxuan.nosdn.127.net/f63b2af8eebf296d43e3ed5e32b51fde.jpg", "http://yanxuan.nosdn.127.net/8e08e0549154416f8e43a059b6f86297.jpg", "http://yanxuan.nosdn.127.net/8078787e82f9f81dcf152f10c1116172.jpg", "http://yanxuan.nosdn.127.net/ca5b03e6fcaa438823a63557168239bf.jpg", "http://yanxuan.nosdn.127.net/66d6840676acea6867632098accab1e8.jpg", "http://yanxuan.nosdn.127.net/6b650e63b680520d5b2f949eeece99be.jpg", "http://yanxuan.nosdn.127.net/23fe27c6a4aa68532495bd3c8508cd45.jpg", "http://yanxuan.nosdn.127.net/1f850e09b064584fea67af0264bcb5d1.jpg", "http://yanxuan.nosdn.127.net/95160ea17cb972a666d4b25b43352c91.jpg", "http://yanxuan.nosdn.127.net/4d76c1a7e68b6e32d392c9d31b6c6c1b.jpg", "http://yanxuan.nosdn.127.net/6882b2cda12433db5b15dea2c2822931.jpg", "http://yanxuan.nosdn.127.net/493a18213c1276aade284ca7fa533fd6.jpg", "http://yanxuan.nosdn.127.net/a2ca849c0f8692722d1b2f4f7ab15682.jpg", "http://yanxuan.nosdn.127.net/074c0535870f5ff495365d541e9e0fe1.jpg", "http://yanxuan.nosdn.127.net/e77929bc1bd870794e279ab98e0aed77.jpg", "http://yanxuan.nosdn.127.net/034e034b97f82752917252f0905a6a7f.jpg", "http://yanxuan.nosdn.127.net/1009c8ef75db52d1b30799301f02f6ba.jpg", "http://yanxuan.nosdn.127.net/c947959cfba79635b16b2e6c8a381d8e.jpg", "http://yanxuan.nosdn.127.net/1402a23ce3304fea347cc477a2730c10.jpg", "http://yanxuan.nosdn.127.net/e20a0e35f61dfa80661cfebebbdc9c76.jpg", "http://yanxuan.nosdn.127.net/b454cad192665cd5e08ca615c2e50d11.jpg", "http://yanxuan.nosdn.127.net/7a3d37f412752b6070b2437d1b3ce947.jpg", "http://yanxuan.nosdn.127.net/b51e4739aabd861ccb2cc121d6995235.jpg", "http://yanxuan.nosdn.127.net/bc1c62bdb0619ac8096e38497fd743f4.jpg", "http://yanxuan.nosdn.127.net/75a75dd517c519673b4dcb9432eeb95d.jpg", "http://yanxuan.nosdn.127.net/1286f05dc152292b0a26a99264b4b649.jpg", "http://yanxuan.nosdn.127.net/817e205a9e888f598ee526968a4aa028.jpg", "http://yanxuan.nosdn.127.net/ab5e32bfd51cbe5222d54da5dc27b156.jpg", "http://yanxuan.nosdn.127.net/fb63d82b340c3f7cae488c36c4df7fa4.jpg", "http://yanxuan.nosdn.127.net/b82eb38c86f83f2c267cdde38abd3aaf.jpg", "http://yanxuan.nosdn.127.net/5c431f381281d34d9170da0450b71fa0.jpg", "http://yanxuan.nosdn.127.net/9295dce00900135d13c929a27004dedb.jpg", "http://yanxuan.nosdn.127.net/225b57a9228d0eeeebd0364ce158ce72.jpg", "http://yanxuan.nosdn.127.net/91204f049c5ebb92d9028e16d921d159.jpg", "http://yanxuan.nosdn.127.net/4959495098f879e22f92b1020e271c4f.jpg", "http://yanxuan.nosdn.127.net/5832998a00432b92077fd9659c6e793a.jpg", "http://yanxuan.nosdn.127.net/dd7c996d844866c403563f735acb0412.jpg", "http://yanxuan.nosdn.127.net/833d475ac9f50dccff7cd869e5a19d95.jpg", "http://yanxuan.nosdn.127.net/1e614e2a8b071f883108723ad37a17c6.jpg", "http://yanxuan.nosdn.127.net/ec894b26d87612d603a1a315d59ee183.jpg", "http://yanxuan.nosdn.127.net/2fc5fc414b01e306b52b4e50c48102fb.jpg"],
		"inventory": [112, 399, 671, 724, 362, 128],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "200*230cm/220*240cm"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "填充物",
			"attrValue": "超细羊毛"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.经过碳化、清洗、梳理的天然羊毛被带会有少量味道，通风晾晒2-3天即可散去 2.为减少羊毛漂白等化学用品的处理时间，部分羊毛可能未完全脱色，轻微泛黄属羊毛原色，为正常现象。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 767,
		"date": "1500012210613",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1006007,
		"price": 459,
		"topName": "秋冬保暖加厚澳洲羊毛被",
		"subName": "臻品级澳洲进口羊毛",
		"shortDescription": ["美利奴羊", "世界口碑", "吸湿吸汗", "温度调节", "卷曲纤维", "贴合回弹"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/cc263244de405707f57833038918b8d0.jpg", "http://yanxuan.nosdn.127.net/0c8250db99414edc0f718ba36343888b.jpg", "http://yanxuan.nosdn.127.net/9248162476c9fd013bafedd529b0736f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/66425d1ed50b3968fed27c822fdd32e0.png", "http://yanxuan.nosdn.127.net/b7e3438c473a296a7e9feecbd4139af5.jpg", "http://yanxuan.nosdn.127.net/70422011e5a9855a0723c9c08d0cbbb0.jpg", "http://yanxuan.nosdn.127.net/f65dbb00aff8b43be02f2c8104208877.jpg", "http://yanxuan.nosdn.127.net/85e8575c8e473a2f71054e9e36b1211c.jpg"],
		"types": ["200*230cm", "220*240cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/c78ec6e16d8477525c0a59e3c9d847b8.jpg", "http://yanxuan.nosdn.127.net/294185760b75f364f6ed42784877e59c.jpg", "http://yanxuan.nosdn.127.net/2468d1851e29930cc3802f125da5d6e8.jpg", "http://yanxuan.nosdn.127.net/0794791277945c1577776724778124f8.jpg", "http://yanxuan.nosdn.127.net/6973ca1e6f264620d5d25e581a0d623d.jpg", "http://yanxuan.nosdn.127.net/26f01273c833c2ae75177a5c8d9310ef.jpg", "http://yanxuan.nosdn.127.net/bf0207da5160588acf58d0f02ea9d360.jpg", "http://yanxuan.nosdn.127.net/c245f448cb1f46237042effc8560012c.jpg", "http://yanxuan.nosdn.127.net/6dc7ce1ee740e7c48945d8ecaa2b7dbc.jpg", "http://yanxuan.nosdn.127.net/1036f0656f311ba5a3161e567c84a1f2.jpg", "http://yanxuan.nosdn.127.net/dc31b5e420eaf4804659b19f703f9282.jpg", "http://yanxuan.nosdn.127.net/e7a65ac0824fc1584c2f1943ed1eaed0.jpg", "http://yanxuan.nosdn.127.net/88871ed9eccf7fbdfccf7912bb8f9d21.jpg", "http://yanxuan.nosdn.127.net/7aa0e4c0abeb157e231b17e91cfa8f02.jpg", "http://yanxuan.nosdn.127.net/a38f897200e305e7b23d62431b9c4d18.jpg", "http://yanxuan.nosdn.127.net/bb147c0e96cdac2d77ab4eef1785e99d.jpg", "http://yanxuan.nosdn.127.net/c6a270f7aed68cfe74e66d720c776fca.jpg", "http://yanxuan.nosdn.127.net/c2c0b548be17f620db8afbe039a99452.jpg", "http://yanxuan.nosdn.127.net/155fe0023e17bac4af486a6c1c098537.jpg", "http://yanxuan.nosdn.127.net/8f1f120ca7e362595fd986ea6de8814f.jpg", "http://yanxuan.nosdn.127.net/6971f0333e0eeef7d9951edad068d4ec.jpg", "http://yanxuan.nosdn.127.net/c307630edf971e408938f1007169fa53.jpg", "http://yanxuan.nosdn.127.net/4ea2ba74fb518a298ef825c43ed634f4.jpg"],
		"inventory": [457, 463],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "200*230cm/220*240cm"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "填充物",
			"attrValue": "100%羊毛"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.经过碳化、清洗、梳理的天然羊毛被带会有少量味道，通风晾晒2-3天即可散去 2.为减少羊毛漂白等化学用品的处理时间，部分羊毛可能未完全脱色，轻微泛黄属羊毛原色，为正常现象。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 293,
		"date": "1500012213329",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1068011,
		"price": 399,
		"topName": "全棉丝光骆驼绒秋冬被",
		"subName": "精细驼绒填充，加厚温暖",
		"shortDescription": ["蓬松驼绒", "不易板结", "吸水排湿", "增强保暖", "卷曲纤维", "紧锁热量"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9f435250cac3a4fadfb48735458ec92e.jpg", "http://yanxuan.nosdn.127.net/f58329f61311164370f7105c7391b166.jpg", "http://yanxuan.nosdn.127.net/aeba627ec43bd6e85ed4b1134f10e610.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/0e4ba6ed44fef8803c243e585b621ab7.png", "http://yanxuan.nosdn.127.net/ccd6d04356b4b8fa00659b7c287a742f.jpg", "http://yanxuan.nosdn.127.net/a3fddd5ba2d029c8adc22f4346d15be2.jpg", "http://yanxuan.nosdn.127.net/afe43ecb0839d0f1d91551a357db65a9.jpg", "http://yanxuan.nosdn.127.net/85dcb0a492eefb8a64c963400fac48a8.jpg"],
		"types": ["60%骆驼绒 2*2.3m", "90%骆驼绒 2*2.3m"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/513bb53138abc91136a185451db84124.jpg", "http://yanxuan.nosdn.127.net/892c546f668cda7061312c927d6b8706.jpg", "http://yanxuan.nosdn.127.net/a47d06b195c64a165b82e797ac6d0f74.jpg", "http://yanxuan.nosdn.127.net/2518d05fed8e33f2b61fd06a2711f7bc.jpg", "http://yanxuan.nosdn.127.net/104bfe84e2f4625c4cdf66c3e511b9cd.jpg", "http://yanxuan.nosdn.127.net/1c69525ee67d15f619a4c33d5570e732.jpg", "http://yanxuan.nosdn.127.net/79b82500961b6385b852633961ce5c6c.jpg", "http://yanxuan.nosdn.127.net/ea190f56ac369eaef45159412675bb49.jpg", "http://yanxuan.nosdn.127.net/ae33c22489785820a608a6508dda713b.jpg", "http://yanxuan.nosdn.127.net/dcd357ecf585630bf3e11364e7beef51.jpg", "http://yanxuan.nosdn.127.net/c77e5ed4dbd4ca1834cc1d65fb6fb978.jpg"],
		"inventory": [659, 479],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "尺寸",
			"attrValue": "200*230cm"
		}, {
			"attrName": "填充物重量",
			"attrValue": "2000g"
		}],
		"label": "",
		"manufacture": "",
		"sale": 445,
		"date": "1500012215796",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1006014,
		"price": 1399,
		"topName": "双宫茧桑蚕丝被 子母被",
		"subName": "双层子母被，四季皆可使用",
		"shortDescription": ["轻薄子被", "防空调病", "厚软母被", "深冬御寒", "双宫茧蚕", "轻盈透气"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a0cb85d08b01f2633e77c5974e43502d.jpg", "http://yanxuan.nosdn.127.net/a112acba8f63111f7a04515dcaa9727a.jpg", "http://yanxuan.nosdn.127.net/8951f338bd1acaad8d230d2a0509e1a7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2b537159f0f789034bf8c4b339c43750.png", "http://yanxuan.nosdn.127.net/22535d179b6796fbd45a83d6ecea3b50.jpg", "http://yanxuan.nosdn.127.net/6e93d7d868d918bef0138748ffbd9458.jpg", "http://yanxuan.nosdn.127.net/ccc21b29557929ec99067a445fc74ea3.jpg", "http://yanxuan.nosdn.127.net/1479bec93b57855889d93a9f4eef0b72.jpg"],
		"types": ["0.5+1.5公斤/ 220*240cm", "1+2公斤/ 220*240cm", "0.5+1.5公斤/ 200*230cm", "1+2公斤/ 200*230cm"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/3b5ee089edb2b5d3361bf60e208ec474.jpg", "http://yanxuan.nosdn.127.net/737260dd5cfae7ef72c713af861e8774.jpg", "http://yanxuan.nosdn.127.net/62a70427f9d6bf81bc19203e6f401e2e.jpg", "http://yanxuan.nosdn.127.net/051aa6ea1ef13b32240a34e0d2d5ca97.jpg", "http://yanxuan.nosdn.127.net/41b19060447843186366c221130ee4de.jpg", "http://yanxuan.nosdn.127.net/ae757922d72e6c4357d10f1d78bd7a8b.jpg", "http://yanxuan.nosdn.127.net/58bcf7d0ce99f4f2b5cf11b9511319e7.jpg", "http://yanxuan.nosdn.127.net/54496c73ebda2680aa2b9d8c375a82e3.jpg", "http://yanxuan.nosdn.127.net/6caae81b0956de612ce57b1419382813.jpg", "http://yanxuan.nosdn.127.net/2fbf34bb5b36ba708dfc3facc6551d1b.jpg", "http://yanxuan.nosdn.127.net/741663a8fb8f5a17442951d7ed670952.jpg", "http://yanxuan.nosdn.127.net/7055264e97783cc669a003e3e857de8f.jpg", "http://yanxuan.nosdn.127.net/59983cf72d63181eff723b7d6ec2a57d.jpg", "http://yanxuan.nosdn.127.net/6046cb49c22b635a84d490e8f0ab9f8f.jpg", "http://yanxuan.nosdn.127.net/01d18fcb6e8019798a630c9abb01580a.jpg", "http://yanxuan.nosdn.127.net/4093967aedc279e3c4ee3e672fbebbff.jpg", "http://yanxuan.nosdn.127.net/994d3bcf0b40fc9c31f51a9accd0b88c.jpg", "http://yanxuan.nosdn.127.net/72fd621d3b567cb6d963a9b554c58ee5.jpg", "http://yanxuan.nosdn.127.net/c1704b2d57d8ce5a30b371f702b80e23.jpg", "http://yanxuan.nosdn.127.net/a0cd8614de4c7bc709158dcf9b7e9ada.jpg", "http://yanxuan.nosdn.127.net/290ecc11a85a18b87825fe57caa81bd3.jpg", "http://yanxuan.nosdn.127.net/3467f0eb4f5a3feb30df257b1dd1a80a.jpg", "http://yanxuan.nosdn.127.net/406defa7a54f5626e050d9eee2a3a7f4.jpg", "http://yanxuan.nosdn.127.net/14f1fa09e672955a8afad3e35eae3798.jpg", "http://yanxuan.nosdn.127.net/df344f04a06d62cb15c48a220fb18e34.jpg", "http://yanxuan.nosdn.127.net/b468781d6f234e0107b7ed7c44492da5.jpg", "http://yanxuan.nosdn.127.net/d91c856cbb29826afbc4d3e2bbf63e27.jpg", "http://yanxuan.nosdn.127.net/f08409269a24bc60c51c97e56b279ddc.jpg", "http://yanxuan.nosdn.127.net/3809897fdc8a9db7bd447d7ec1116a17.jpg", "http://yanxuan.nosdn.127.net/fd024467887854c0f9540d9cfef2e6dc.jpg", "http://yanxuan.nosdn.127.net/da5afa55ec02ac1e430ecb985c7aef83.jpg", "http://yanxuan.nosdn.127.net/f522e5f98ccab9311de8b15a2c6951ae.jpg", "http://yanxuan.nosdn.127.net/a4d5ef81a10211b7a8d3b7134b3adccb.jpg", "http://yanxuan.nosdn.127.net/1c241ff5f9c267fbd27c2e0bf346dc00.jpg", "http://yanxuan.nosdn.127.net/9db75fb0766730ee2f2afcf8b8b33659.jpg", "http://yanxuan.nosdn.127.net/5f4f42fad5ace718567c9aa68ada22a1.jpg", "http://yanxuan.nosdn.127.net/fc0152f7a1a5a31603a59bdfdc4e987f.jpg", "http://yanxuan.nosdn.127.net/c2929041a7abc890965d4b399f3b6278.jpg", "http://yanxuan.nosdn.127.net/8e12a5accd62e0b29ace162ca64fe5ac.jpg", "http://yanxuan.nosdn.127.net/924c7f4ce0af0fdefd04164508648885.jpg", "http://yanxuan.nosdn.127.net/55f049536b6471804546d55b8f4fb88c.jpg", "http://yanxuan.nosdn.127.net/cd99f9a6f3d60a1d07ac3428b974f65d.jpg", "http://yanxuan.nosdn.127.net/0444882d13667f002b4eeeaa02bf0498.jpg", "http://yanxuan.nosdn.127.net/9491237b070c4eff99dff34d528b4b65.jpg", "http://yanxuan.nosdn.127.net/18bbcf7de0dfe9df10fdccffa328a54d.jpg", "http://yanxuan.nosdn.127.net/b396a6ce48ebd3297384d8deea6f06e9.jpg", "http://yanxuan.nosdn.127.net/2234040e3bcd7d6b7954b34afc9592a6.jpg", "http://yanxuan.nosdn.127.net/8b2015e0c984e01a2ec6e971f3b3c855.jpg", "http://yanxuan.nosdn.127.net/1cfd381db37cea6b62856d0bcceaa4e0.jpg", "http://yanxuan.nosdn.127.net/61c867e69ce18b47ba5e8b4dc35d45a3.jpg", "http://yanxuan.nosdn.127.net/efbb973c5e5b9bf58e764957f64402b2.jpg", "http://yanxuan.nosdn.127.net/66eb58f7818e87a8cc67923a2effaeee.jpg"],
		"inventory": [499, 440, 948, 979],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "填充物",
			"attrValue": "100%双宫茧桑蚕丝"
		}, {
			"attrName": "填充物重量",
			"attrValue": "0.5+1.5KG/1+2KG"
		}, {
			"attrName": "温馨提示",
			"attrValue": "天然桑蚕丝具有正常蛋白味道，通风晾晒2-3天即可散去"
		}],
		"label": "",
		"manufacture": "罗莱制造商",
		"sale": 930,
		"date": "1500012238017",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1092024,
		"price": 1599,
		"topName": "双宫茧纱布亲肤手工蚕丝被",
		"subName": "手工制作 滋养肌肤",
		"shortDescription": ["繁复工序", "奢华手作", "特级蚕丝", "蓬松贴身", "纯棉纱布", "透气柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fcb5203efcaaa003e26307f82c846d4b.jpg", "http://yanxuan.nosdn.127.net/ce99837c2802a8d0b4daaad00478c1e0.jpg", "http://yanxuan.nosdn.127.net/c806221e9867463d05512761d81216b1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f245a86dcb9f455217241e437b203926.png", "http://yanxuan.nosdn.127.net/9c42a6bac4380d79d4dccb68ac2b4bcc.jpg", "http://yanxuan.nosdn.127.net/18f86419d1f26597087a999b3e539b50.jpg", "http://yanxuan.nosdn.127.net/2cca81110d5a9ae4a012ab69b86a2246.jpg", "http://yanxuan.nosdn.127.net/c00fcd20e4147e3f5b32db47161eae81.jpg"],
		"types": ["200*230cm新年礼盒装", "200*230cm 1.5kg"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/12cc61a27bc734434a218b8cc07b214d.jpg", "http://yanxuan.nosdn.127.net/857fc6fa8911c6427797145b9bb6ae6e.jpg", "http://yanxuan.nosdn.127.net/a113e8c2e1623ed7bb40e9090cbe155f.jpg", "http://yanxuan.nosdn.127.net/d0e4903bb5271b173cc4bb08c86f7e5f.jpg", "http://yanxuan.nosdn.127.net/8d673570bf16e17d50154db6b374ac8f.jpg", "http://yanxuan.nosdn.127.net/e6536dc0e19f54d7f71b3bb2ab400e81.jpg", "http://yanxuan.nosdn.127.net/65bfe17e25d4f99f343cd9a98872f9b7.jpg", "http://yanxuan.nosdn.127.net/b48eae0d7ea1fd323939ce05af73cbc1.jpg", "http://yanxuan.nosdn.127.net/c7a6edefc081c303c9ace62b2caa7ea6.jpg", "http://yanxuan.nosdn.127.net/e94d4d6abf57837c97c7bddfc19f2745.jpg", "http://yanxuan.nosdn.127.net/42c9406a28fc6ccfa7e42a15ca01af02.jpg", "http://yanxuan.nosdn.127.net/f02cc82b2b34ecad3d9bdd8f2a8398c7.jpg", "http://yanxuan.nosdn.127.net/9c33ae57de042c04645ed74523ddfc00.jpg", "http://yanxuan.nosdn.127.net/e6b1c85d6f7eb06e90b2ec99ebb5ce6d.jpg", "http://yanxuan.nosdn.127.net/f7d4be39f58a15e3af9c57c39934b020.jpg", "http://yanxuan.nosdn.127.net/9f6c12a01a43030328db2a6fea92a1a2.jpg", "http://yanxuan.nosdn.127.net/6922fe294f7968453fd50f7c9418d6c4.jpg", "http://yanxuan.nosdn.127.net/c54d9e1d0185acf9945f05773b45e336.jpg", "http://yanxuan.nosdn.127.net/6c84e42086bda07a42ab7957e86c3e8f.jpg", "http://yanxuan.nosdn.127.net/97905cbf70e960208ad59529e9c9d96a.jpg", "http://yanxuan.nosdn.127.net/4d20ea3cf22532281f5220d68fd56644.jpg", "http://yanxuan.nosdn.127.net/c4f6aa61c6cbd9d8307bbe3df248ac86.jpg", "http://yanxuan.nosdn.127.net/79af898960aeeeb5db1f93bad8b4f0c7.jpg", "http://yanxuan.nosdn.127.net/d7307f590b71f3c70e9190c23015f19f.jpg", "http://yanxuan.nosdn.127.net/70bab066f55050f2b2fa4e8f00bca265.jpg", "http://yanxuan.nosdn.127.net/987835d0e28209afc539162b98a04cd9.jpg", "http://yanxuan.nosdn.127.net/1f3b06b5934aeac4efe1755d3a987c30.jpg", "http://yanxuan.nosdn.127.net/6e27f4183d153a8cbf1a16acdfd171fb.jpg", "http://yanxuan.nosdn.127.net/3faa2a006894691dc2dd0a47718645f1.jpg", "http://yanxuan.nosdn.127.net/230c7610de70ed83974dd4a57d0c700d.jpg", "http://yanxuan.nosdn.127.net/ecd9596f63b87c230ddab5b55a60f813.jpg", "http://yanxuan.nosdn.127.net/96690003d2be2183f78e6ca88816ec8e.jpg", "http://yanxuan.nosdn.127.net/f94a58279084fa70e89124c135aaf48c.jpg", "http://yanxuan.nosdn.127.net/1ac85b85d16ff2953fe0183a2c3fab2a.jpg", "http://yanxuan.nosdn.127.net/b43e793f03e20d8201dac6dd01d73215.jpg", "http://yanxuan.nosdn.127.net/725eaaa2edfaa0fd6688bb0a16acf7fd.jpg", "http://yanxuan.nosdn.127.net/1a142ec7e60d0f510b8b7dffd66f8e8c.jpg", "http://yanxuan.nosdn.127.net/a79e2c1314034c20fd77372c8f83a924.jpg", "http://yanxuan.nosdn.127.net/4ce918f1fd0486e1e3dab4ce2edbece9.jpg", "http://yanxuan.nosdn.127.net/464019e51c20c47849f92a319c1c6b6b.jpg", "http://yanxuan.nosdn.127.net/fd1ca477443ea80dd310cc0c8c903b82.jpg", "http://yanxuan.nosdn.127.net/c5ed5e4827c7623fa0d4f360a10ee109.jpg", "http://yanxuan.nosdn.127.net/eccc71760c31e25893235d11ff1310cd.jpg", "http://yanxuan.nosdn.127.net/059ca713a16298bb62d8b11fd91e5b2a.jpg", "http://yanxuan.nosdn.127.net/36ae5438953dcbdb77b237d4ec6cfea1.jpg", "http://yanxuan.nosdn.127.net/a5a1253ad74f94865c4f87ddc69ac721.jpg", "http://yanxuan.nosdn.127.net/765a73c655c2636eb4c6cb30e54a076b.jpg", "http://yanxuan.nosdn.127.net/f11a95cd2c22e3397bff05606658a2c6.jpg", "http://yanxuan.nosdn.127.net/1b14601b0465dbfb498c8d090c6a0795.jpg", "http://yanxuan.nosdn.127.net/0b9e0ebcd78cc2b783c5a7a4ad96466a.jpg", "http://yanxuan.nosdn.127.net/083e4d0fe87c59d1c34b9929417acfa4.jpg", "http://yanxuan.nosdn.127.net/0dd4f4f8efc6846f7cc874e36c96a5f5.jpg", "http://yanxuan.nosdn.127.net/24821c54966d1405a7a289475d68b78a.jpg", "http://yanxuan.nosdn.127.net/8d3e5ce1382e33bd6b323e58613dc389.jpg"],
		"inventory": [970, 958],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100%桑蚕丝"
		}, {
			"attrName": "填充物重量",
			"attrValue": "1500g"
		}, {
			"attrName": "外套",
			"attrValue": "100%纯棉纱布"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 24252-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 18401-2010 B类"
		}],
		"label": "",
		"manufacture": "",
		"sale": 538,
		"date": "1500012242465",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1075024,
		"price": 2399,
		"topName": "升级款纯棉静音白鹅羽绒被",
		"subName": "静音面料，加厚熟睡",
		"shortDescription": ["高纯鹅绒", "蓬松保暖", "500支", "亲肤静音", "脯前大绒", "0压舒睡"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a7495bd106fc5dcf02035889dadeaefc.jpg", "http://yanxuan.nosdn.127.net/47bbd9d54152db80736e1ebe96dc10dc.jpg", "http://yanxuan.nosdn.127.net/e286ddff8da51a95fea34e8684add905.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ce4a1eb18ea518bf584620632509935f.png", "http://yanxuan.nosdn.127.net/20b8099e0b733dd772eddc867286e4ef.jpg", "http://yanxuan.nosdn.127.net/24d57fc1aaee7ef34d5ad742dbe71c75.jpg", "http://yanxuan.nosdn.127.net/2e9cf29302ae0d14eb86765d4f04b280.jpg", "http://yanxuan.nosdn.127.net/32fe42db040cebe98cdac1cb03fcbe10.jpg"],
		"types": ["200*230cm", "220*240cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/56261ca3bfb33b4400911bd01ac27ae5.jpg", "http://yanxuan.nosdn.127.net/214f8c19371d71dac57ec63e398e87bc.jpg", "http://yanxuan.nosdn.127.net/12732b11ddc970e10ebf37d71088bab3.jpg", "http://yanxuan.nosdn.127.net/be6a7afdc814c8f56d08e3f4285cd456.jpg", "http://yanxuan.nosdn.127.net/67cca9bceb817b16690e291a67f41e28.jpg", "http://yanxuan.nosdn.127.net/67313c9944f3e4277c3e640ab60bbde3.jpg", "http://yanxuan.nosdn.127.net/47235be353e7eec56b7e425be4ddedba.jpg", "http://yanxuan.nosdn.127.net/c3e3d7887ec3ea8ddabd581c4e36e2f6.jpg", "http://yanxuan.nosdn.127.net/33f1565e2a14c3fb4456b694771e6fad.jpg", "http://yanxuan.nosdn.127.net/7a41d8674cd63d15c5549a6c5745a658.jpg", "http://yanxuan.nosdn.127.net/7522e4b7add69ae6ba223a38fbd34f4f.jpg", "http://yanxuan.nosdn.127.net/b5c9bd7dae7c24125104e80384c602ba.jpg", "http://yanxuan.nosdn.127.net/97a225e49a0a8c764ca394cccb3b10f2.jpg", "http://yanxuan.nosdn.127.net/16f06738c9fb6355352a4eb21a25744b.jpg", "http://yanxuan.nosdn.127.net/a3ad7de130695e388afa4946c63b4214.jpg", "http://yanxuan.nosdn.127.net/0dd0e528b444841f7326dc933b501938.jpg", "http://yanxuan.nosdn.127.net/9ae9599dba84e72c970eecafd9de6294.jpg", "http://yanxuan.nosdn.127.net/b93b7087d8c64647b725418211fd2c4b.jpg", "http://yanxuan.nosdn.127.net/8ff7f4cae6011903f209305cd57598c3.jpg", "http://yanxuan.nosdn.127.net/123723b1a400f6088af024190f154d01.jpg", "http://yanxuan.nosdn.127.net/c3a6127948261397e2cce816afe7ff10.jpg", "http://yanxuan.nosdn.127.net/a2bc185f49542115c38aca6508951f83.jpg", "http://yanxuan.nosdn.127.net/bf2a0932d6fd65702b0d30dee3f1c658.jpg", "http://yanxuan.nosdn.127.net/9f02e979aff1ce7a335cd314491886b4.jpg", "http://yanxuan.nosdn.127.net/1c64f22b8da97967e854b6e2240ba8ef.jpg", "http://yanxuan.nosdn.127.net/857365c29c631ca06d9218213e54f3d7.jpg", "http://yanxuan.nosdn.127.net/be2f36d6255a9f8baf5573c8cb80b4c3.jpg", "http://yanxuan.nosdn.127.net/e1f71db51b1e322046737356482f115e.jpg", "http://yanxuan.nosdn.127.net/0697d1c2cd446297ad0494fc97f75ebb.jpg", "http://yanxuan.nosdn.127.net/0e663a704ca44c6d448d37a9fbfb34b1.jpg", "http://yanxuan.nosdn.127.net/b5cc03a916aa7a1a7160aab17749c7b1.jpg", "http://yanxuan.nosdn.127.net/4be42b28ba4bdb04ec250ac5a1d23335.jpg", "http://yanxuan.nosdn.127.net/8f1f5bf21475bc50979dce49894bd03c.jpg", "http://yanxuan.nosdn.127.net/dca09a7be97a3bbebeea80f6266e1cbe.jpg", "http://yanxuan.nosdn.127.net/82cfe49a34dd57e9879ab264b2c4a0f9.jpg", "http://yanxuan.nosdn.127.net/609766611ba2b7f471f4b5ec3cfb1570.jpg", "http://yanxuan.nosdn.127.net/b4bfa751387777262f0dd3cbfeda6cf3.jpg", "http://yanxuan.nosdn.127.net/cce5ecbcc8d6cbaf2da11a0efa137467.jpg", "http://yanxuan.nosdn.127.net/0d698dd6bad6abd7b5ad731ca8954ab9.jpg", "http://yanxuan.nosdn.127.net/34b463871aee608c1c3ccc9a6ae4e7fa.jpg", "http://yanxuan.nosdn.127.net/6d7d047d324a9878de7cc1ccd2b24fab.jpg", "http://yanxuan.nosdn.127.net/cf43f53d3770ff5d34eaade48c42ddf0.jpg", "http://yanxuan.nosdn.127.net/8e4d8478f1cbe72b6991e59cdbf2c1c6.jpg", "http://yanxuan.nosdn.127.net/ec91680fb9913afc597afc4295c9810e.jpg", "http://yanxuan.nosdn.127.net/cf5f83c67d2b6303fc10d7698211c451.jpg", "http://yanxuan.nosdn.127.net/c4e736beeba84fa508b5001c14326817.jpg", "http://yanxuan.nosdn.127.net/b39bb20bc10eb80a4a73af1ef72e1f14.jpg", "http://yanxuan.nosdn.127.net/0ee97cc8179dc8f63df9545ed4cf1289.jpg", "http://yanxuan.nosdn.127.net/b6f5d89595f271bf1ece37ef1a59b7fa.jpg", "http://yanxuan.nosdn.127.net/9cfc8924f6085deaf154deb6da8ac794.jpg", "http://yanxuan.nosdn.127.net/69dc1813268f768aa90f696807c0614c.jpg", "http://yanxuan.nosdn.127.net/a781da27715d6bbb246e7a9997e1ef4e.jpg", "http://yanxuan.nosdn.127.net/4e3177e5434d5ef56ea7a782358da8ba.jpg", "http://yanxuan.nosdn.127.net/64468f6698d122f7c554299af3ea9f13.jpg", "http://yanxuan.nosdn.127.net/024b2a81d2860e631165a80a7142cf67.jpg", "http://yanxuan.nosdn.127.net/85b12419b868dc311361781e50d46877.jpg", "http://yanxuan.nosdn.127.net/6fcff064127cdf5b5a73d358db4efa21.jpg", "http://yanxuan.nosdn.127.net/7f28c8dd3c027fbfd64952d2c55b87fc.jpg", "http://yanxuan.nosdn.127.net/144ee76547f7b21bacb763426af25f07.jpg", "http://yanxuan.nosdn.127.net/191c12adb5895f7fb71c9d5b8bee424d.jpg", "http://yanxuan.nosdn.127.net/7158e3fa0c0c034b91dbd06d2eccef3a.jpg", "http://yanxuan.nosdn.127.net/01da4634f8486926944213e12b15e114.jpg", "http://yanxuan.nosdn.127.net/957eaa7ec5510cfc24d41e82f0882406.jpg"],
		"inventory": [381, 602],
		"information": [{
			"attrName": "含绒量",
			"attrValue": "95%"
		}, {
			"attrName": "面料",
			"attrValue": "100%纯棉"
		}, {
			"attrName": "面料参数",
			"attrValue": "120支 500根"
		}, {
			"attrName": "填充物重量",
			"attrValue": "1500g/1700g"
		}, {
			"attrName": "尺寸",
			"attrValue": "200*230cm/220*240cm"
		}, {
			"attrName": "工艺",
			"attrValue": "双层立衬"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 226,
		"date": "1500012245653",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1009009,
		"price": 1999,
		"topName": "白鹅绒秋冬加厚羽绒被",
		"subName": "热销5万条，一条被子过冬",
		"shortDescription": ["高纯鹅绒", "蓬松保暖", "防羽面料", "不跑绒毛", "双面立衬", "加强保温"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/663f5e2a66977dc5537f0c7c8ed8b671.jpg", "http://yanxuan.nosdn.127.net/513e217e61f06170cdc558215588335d.jpg", "http://yanxuan.nosdn.127.net/f9656adb532ef102445a4e8e5ad8ae6c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9791006f25e26b2d7c81f41f87ce8619.png", "http://yanxuan.nosdn.127.net/33a04714bc15a43d0ce87d71d1d9694a.jpg", "http://yanxuan.nosdn.127.net/e0999e26962b6e88b05fdfe9ba8ff644.jpg", "http://yanxuan.nosdn.127.net/dd2aff7f4edb26f5e0f691e94a51c66a.jpg", "http://yanxuan.nosdn.127.net/78059fd78b649d395f8e5740ba8eb99e.jpg"],
		"types": ["95%白鹅绒200*230cm（白色）", "95%白鹅绒200*230cm（灰色）", "95%白鹅绒200*230cm（粉色）", "95%白鹅绒220*240cm（白色）"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/79ae82326ba86985035215ca9bebd137.jpg", "http://yanxuan.nosdn.127.net/e7aadf2c5fd0942dc9bceb5a0738d969.jpg", "http://yanxuan.nosdn.127.net/6ccf2486677aafef68048894317b6e96.jpg", "http://yanxuan.nosdn.127.net/b3ce70df9905a810c60220d9d24ebb2c.jpg", "http://yanxuan.nosdn.127.net/d51b1e4f61cb563b09dae46ee282e220.jpg", "http://yanxuan.nosdn.127.net/e2791ef7173866f12be3341ca7202336.jpg", "http://yanxuan.nosdn.127.net/6cda9c3d9f044310f49afc5bbdb3533d.jpg", "http://yanxuan.nosdn.127.net/68e9be17108a9c6a0e6b786176a4b4c6.jpg", "http://yanxuan.nosdn.127.net/3974579c71cdf946088d339e9e5c865d.jpg", "http://yanxuan.nosdn.127.net/d95a8520e3e3dfec063fc484e1d57207.jpg", "http://yanxuan.nosdn.127.net/ce8b29a61396dced0f89ea3bfdf1f45d.jpg", "http://yanxuan.nosdn.127.net/129cba9ef941b367e56dad47aeb7fd96.jpg", "http://yanxuan.nosdn.127.net/f566abb0c978093647aa1742725129ae.jpg", "http://yanxuan.nosdn.127.net/f7c7c153400895b5d690f1eba9b3c315.jpg", "http://yanxuan.nosdn.127.net/be750a41eef4db163a29e2326a65660f.jpg", "http://yanxuan.nosdn.127.net/6ea11ee2e846b3536acb599b93b7d2e9.jpg", "http://yanxuan.nosdn.127.net/5814d4e02b3fd0b94d04ca262b201385.jpg", "http://yanxuan.nosdn.127.net/7959e1d91576bf0d21e7bd042e2210bd.jpg", "http://yanxuan.nosdn.127.net/4268cc5be26539ed427927e4e6d8e18e.jpg", "http://yanxuan.nosdn.127.net/5667dee42adfce79988974d96ddd8b09.jpg", "http://yanxuan.nosdn.127.net/d6c9f0a1a51cd0166844d3694cc92a1e.jpg", "http://yanxuan.nosdn.127.net/ce43457f50492c355ff1f7577685c004.jpg", "http://yanxuan.nosdn.127.net/9c2ff68fede235b1b9f249cd5dabce0d.jpg", "http://yanxuan.nosdn.127.net/785952cd32deedc2bfd90826e89ddc2a.jpg", "http://yanxuan.nosdn.127.net/b544624dcc990b966e6c6d20ee608b7c.jpg", "http://yanxuan.nosdn.127.net/761a606123be84d0c6eaa2e5eb9f4f81.jpg", "http://yanxuan.nosdn.127.net/0cce548176f68f7e00de503d4d146629.jpg", "http://yanxuan.nosdn.127.net/30cb73b7917af99d4ccbdbca9042d566.jpg", "http://yanxuan.nosdn.127.net/1a27c57bb90e145df10d633dcfdbe26b.jpg", "http://yanxuan.nosdn.127.net/8df76b01f83dd4d4a7f58014d8977067.jpg", "http://yanxuan.nosdn.127.net/ea47ed85b1334e2da9672ee3e9ad66a4.jpg", "http://yanxuan.nosdn.127.net/750caeba2fa63dec64d598e8299f2122.jpg", "http://yanxuan.nosdn.127.net/14bd429f1d48be5d9a8240c1fb4c494b.jpg", "http://yanxuan.nosdn.127.net/02ee506d1f4ba045d7408a0b1e719c8e.jpg", "http://yanxuan.nosdn.127.net/82443ff0a437048729b35fbdb85b0c3a.jpg", "http://yanxuan.nosdn.127.net/d3f39a87baa66fe50f3b141d148645b5.jpg", "http://yanxuan.nosdn.127.net/814e549460f206dccb8889165ef69ea2.jpg", "http://yanxuan.nosdn.127.net/43c21522533725d57ff893f9d080f6cd.jpg", "http://yanxuan.nosdn.127.net/dfc0d18fa3b2ba721fd7614af7962cbe.jpg", "http://yanxuan.nosdn.127.net/1b58ac36c4781edd6d09dfeb2fbb6112.jpg", "http://yanxuan.nosdn.127.net/aadb34b1fe47217989e46eefb2fcef2c.jpg", "http://yanxuan.nosdn.127.net/558aa961eb6b51692e50c5801d74adeb.jpg", "http://yanxuan.nosdn.127.net/af3a0c3d829d015c0850befa9aa7f05c.jpg", "http://yanxuan.nosdn.127.net/23c02d5a325df4c87eb339e694489339.jpg", "http://yanxuan.nosdn.127.net/c51160264c2344feb8a2580d0c47a655.jpg", "http://yanxuan.nosdn.127.net/ea8ecd877fdd3c0b30f7d7b961fdf8ee.jpg", "http://yanxuan.nosdn.127.net/5976f583518689c566c94ce65ac8fcb2.jpg", "http://yanxuan.nosdn.127.net/494dc60b71027177448188093c5eb072.jpg", "http://yanxuan.nosdn.127.net/9c0fc3b0727795fe696579e6b3a1f817.jpg", "http://yanxuan.nosdn.127.net/7ab7aa0de0e90b5a8768d25155e6c475.jpg", "http://yanxuan.nosdn.127.net/839ffe5bf65befd4ec353fbed7730b2c.jpg", "http://yanxuan.nosdn.127.net/313df862cf6181ef199b782969be4607.jpg", "http://yanxuan.nosdn.127.net/e39bfc4343d8968879ec66cc67db8987.jpg", "http://yanxuan.nosdn.127.net/d0c74814f38aba0c40a405ece465d554.jpg"],
		"inventory": [780, 538, 328, 280],
		"information": [{
			"attrName": "填充成分",
			"attrValue": "白鹅绒"
		}, {
			"attrName": "面料成分",
			"attrValue": "60%棉 40%聚酯纤维"
		}, {
			"attrName": "填充物重量",
			"attrValue": "1500g/1700g"
		}, {
			"attrName": "含绒量",
			"attrValue": "95%"
		}, {
			"attrName": "工艺",
			"attrValue": "双层立衬"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 274,
		"date": "1500012248715",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1068010,
		"price": 329,
		"topName": "全棉澳毛床褥床垫 床笠款",
		"subName": "精选优质澳毛，柔软保暖",
		"shortDescription": ["优加品质", "严格出品", "吸湿排汗", "天然恒温", "纯棉面料", "无荧光剂"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/891b2c209a0e9648d6a62bc802df6e7e.jpg", "http://yanxuan.nosdn.127.net/a6ec79688025c5353d17dd21757220c6.jpg", "http://yanxuan.nosdn.127.net/f2484161b338563dfe92ddae9d01af3c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9ed4ff9642ea9cb776a20560647cd72b.png", "http://yanxuan.nosdn.127.net/84d68d030d379712544c1df2fe5dd75a.jpg", "http://yanxuan.nosdn.127.net/977d1c16a4902d50712a00a0b2415d55.jpg", "http://yanxuan.nosdn.127.net/4794dea6cd4bf39626b00335c00b2257.jpg", "http://yanxuan.nosdn.127.net/8e3c52a8645ab6c83ceff377f33a5500.jpg"],
		"types": ["1.5*2m"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/95a63d6da753734c1ef2943e33a8bb3b.jpg", "http://yanxuan.nosdn.127.net/d9d333d9669d0524e57d0c3df85c32c0.jpg", "http://yanxuan.nosdn.127.net/d07d8f04991d6277ffbe8f2e9c1f269e.jpg", "http://yanxuan.nosdn.127.net/4514788afc9687cff4382d6b10b65484.jpg", "http://yanxuan.nosdn.127.net/85004c0d8c353a371e74b12c7043b7c8.jpg", "http://yanxuan.nosdn.127.net/9c2f84e148ab9dc37fca2ba9b14b1d91.jpg", "http://yanxuan.nosdn.127.net/7891ebca110196561a0b89f594dcb901.jpg", "http://yanxuan.nosdn.127.net/aab95836c91dd19b558ef7af6be87932.jpg", "http://yanxuan.nosdn.127.net/f95c06896c52e1818b068c6caccbd3b5.jpg", "http://yanxuan.nosdn.127.net/92f0ddd32ef8721a57398dc850c69db8.jpg", "http://yanxuan.nosdn.127.net/13fbf8e8abc527424bec76f5cb5d9362.jpg", "http://yanxuan.nosdn.127.net/a96f28cfdfc2902126b6543f8a41f713.jpg"],
		"inventory": [484],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5*2m/1.8*2m"
		}, {
			"attrName": "外层面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "填充物",
			"attrValue": "100%羊毛"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}, {
			"attrName": "厚度",
			"attrValue": "3cm+-视商品干燥情况有少量浮动"
		}],
		"label": "",
		"manufacture": "",
		"sale": 545,
		"date": "1500012251996",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1037011,
		"price": 599,
		"topName": "安睡慢回弹记忆绵床垫",
		"subName": "5cm记忆绵的亲密包裹",
		"shortDescription": ["肌肉骨骼", "深度休息", "托扶脊柱", "健康睡眠", "进口材质", "放心安全"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/961ebcc1fdd2ff08df501ab43b1efc48.jpg", "http://yanxuan.nosdn.127.net/b20532042eee4f8592b475205f4b3c54.jpg", "http://yanxuan.nosdn.127.net/eda12aa0a15d737990643a6a9fc31586.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a03ea6f4509439acdafcb7ceba1debe0.png", "http://yanxuan.nosdn.127.net/52e1230341bde01128645c65650f601c.jpg", "http://yanxuan.nosdn.127.net/49b3a096adad4ba4228d5d4fc00eb85f.jpg", "http://yanxuan.nosdn.127.net/01460a9963bdecead79ce86c7df1e90a.jpg", "http://yanxuan.nosdn.127.net/ed12a0fc67eea2fec8a81dd044af28d2.jpg"],
		"types": ["1.2*2m", "1.5*2m", "1.8*2m"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/000163839b86f6c53a2711965ffd12c3.jpg", "http://yanxuan.nosdn.127.net/849c21782177c68b85a238427f50f7c5.jpg", "http://yanxuan.nosdn.127.net/7185034505014ec9a40d2370b976487d.jpg", "http://yanxuan.nosdn.127.net/fc45ded526f7e5290e9a236265a2ba33.jpg", "http://yanxuan.nosdn.127.net/47b551b06df72b10363422ff29414d6d.jpg", "http://yanxuan.nosdn.127.net/9824d2917703652b5549d40df17e70e5.jpg", "http://yanxuan.nosdn.127.net/f7e492d511cd5d3a63b02be7cacf32b9.jpg", "http://yanxuan.nosdn.127.net/627201d3af403bfdaf68d576b47d4b2d.jpg", "http://yanxuan.nosdn.127.net/4999658fa5db61edb507deb5d1837144.jpg", "http://yanxuan.nosdn.127.net/7105c38dc595c698473a65be6470d81c.jpg", "http://yanxuan.nosdn.127.net/d02657711da54d8d741892ae2b7291ef.jpg", "http://yanxuan.nosdn.127.net/e9690b897ddf5af3b62899314989fb31.jpg", "http://yanxuan.nosdn.127.net/a806cd637a2b22f51e5d8c0b79b4460b.jpg", "http://yanxuan.nosdn.127.net/8b3292a8cbad23c80bfc6010a994ff7e.jpg", "http://yanxuan.nosdn.127.net/3e5b25057c1c2cf69a86eb3d13876e4a.jpg", "http://yanxuan.nosdn.127.net/3b54f16c6a8d0dc6de2d4c877c65c6c0.jpg", "http://yanxuan.nosdn.127.net/38e1f2f59e3a991c9661c264638875d7.jpg", "http://yanxuan.nosdn.127.net/47d9c80ebe881a91620fe7dd2708ac60.jpg", "http://yanxuan.nosdn.127.net/f41292065b3d4e6a8720cfbe5b7da4b6.jpg", "http://yanxuan.nosdn.127.net/d397e05b8c7e3decb669ab96455df95b.jpg", "http://yanxuan.nosdn.127.net/1bfb84ee7cb5f882e6b58e628a4a6fb2.jpg", "http://yanxuan.nosdn.127.net/34834ac699fa51a5b7548ed5dc2df2d7.jpg", "http://yanxuan.nosdn.127.net/c9fdba80a948de933da1084023181398.jpg", "http://yanxuan.nosdn.127.net/15df68e6d1a8828784876dab32e2f8fc.jpg", "http://yanxuan.nosdn.127.net/ba7def2b9548edecf7416b5a6cd39674.jpg", "http://yanxuan.nosdn.127.net/5d236b1d80b0ca7a0cb1f784bdffaa37.jpg", "http://yanxuan.nosdn.127.net/c90946891092795fb3a22abe41607ccb.jpg", "http://yanxuan.nosdn.127.net/a6fd58f5ad4c32c7949e934a86095c89.jpg", "http://yanxuan.nosdn.127.net/7b43d89ea34fa0a73f522ebf4e1fcf4d.jpg", "http://yanxuan.nosdn.127.net/97c3d113c9f17c571997b01cd54ad5a7.jpg", "http://yanxuan.nosdn.127.net/61151aa7b3616b2e6e335df95e796c63.jpg", "http://yanxuan.nosdn.127.net/08d34bee4fe17a5ef3900539f360a10c.jpg", "http://yanxuan.nosdn.127.net/8514e8b9c57a017277723a182a7c7a01.jpg", "http://yanxuan.nosdn.127.net/682494bf351daf5d3a6c013d9777ff88.jpg", "http://yanxuan.nosdn.127.net/c91d632faacc37afb94dd79972ba7717.jpg", "http://yanxuan.nosdn.127.net/e66b2fd0727f5aa1f513ae1830d41f30.jpg", "http://yanxuan.nosdn.127.net/b996340a9dea8d7139456f07f2c8d8b2.jpg", "http://yanxuan.nosdn.127.net/aa2150a92eddae781f3050a22ad5b0f7.jpg", "http://yanxuan.nosdn.127.net/5e8de009b013b082267ddf73444c97f8.jpg", "http://yanxuan.nosdn.127.net/3819f707a20d351229202e3c377116cb.jpg", "http://yanxuan.nosdn.127.net/56a3814a29a249f4b65b95e933f99a2b.jpg", "http://yanxuan.nosdn.127.net/b5ede682854f008a3d480acb639ce3d9.jpg", "http://yanxuan.nosdn.127.net/ed9f860f007b966da6e1e4efb8878869.jpg", "http://yanxuan.nosdn.127.net/e1dfe9c79c6c32853eca1565290e9729.jpg", "http://yanxuan.nosdn.127.net/8c2d95b328965557d68afafe6821599b.jpg", "http://yanxuan.nosdn.127.net/bd4a0cb5d55afd3bd974f1c8731e2c91.jpg", "http://yanxuan.nosdn.127.net/b6ebabed2c47152d647d1c1aabbcb3c3.jpg", "http://yanxuan.nosdn.127.net/b1a3e09f317d82fa2933e95a6a2c5b5b.jpg", "http://yanxuan.nosdn.127.net/c28e66b092c6debd30289f1a2ff3379a.jpg", "http://yanxuan.nosdn.127.net/17b492ac86edd77458a4b643ba5affea.jpg", "http://yanxuan.nosdn.127.net/5eda845ae8516c84c531aa1fb9a4f780.jpg", "http://yanxuan.nosdn.127.net/40872118300577c93da23ae7d53c3be8.jpg", "http://yanxuan.nosdn.127.net/4257afaf0dc29bade11bb2d99581f6da.jpg", "http://yanxuan.nosdn.127.net/8d674e2183a99a2219440d3f5cafdec5.jpg", "http://yanxuan.nosdn.127.net/a1bca36f2f3a3faf35b17402877ed292.jpg"],
		"inventory": [697, 759, 122],
		"information": [{
			"attrName": "外层面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "里层面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "内芯",
			"attrValue": "聚氨酯"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.记忆绵产品为进口环保化学材质聚氨酯发泡而成，刚打开包装会有少量聚氨酯气体产生，拆除外套通风除味3-5天即可。 2.床垫商品受身高、体型、睡眠习惯不同，产生不同的使用体验，建议多试睡几款床垫，挑选最舒适的进行使用。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 147,
		"date": "1500012255560",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1127003,
		"price": 2599,
		"topName": "AB面独立弹簧床垫 进口乳胶",
		"subName": "仅售供应商建议价的1/3",
		"shortDescription": ["多级分层", "舒睡材质", "舒适乳胶", "独立弹簧", "双面睡感", "软硬切换"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/645f5f23c737c3e1f080b40957f066fc.jpg", "http://yanxuan.nosdn.127.net/bb714457705dd1eec51bb603451095d0.jpg", "http://yanxuan.nosdn.127.net/36cdec66a1354dcd669448012fd5432c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/6ad1813d123f7a80f84c2cfa5f8c7caf.png", "http://yanxuan.nosdn.127.net/6bd1ea1d237244d05e8fafea82f90c5b.jpg", "http://yanxuan.nosdn.127.net/15efb5c5c2510fe797551abaded09ae0.jpg", "http://yanxuan.nosdn.127.net/71c211ce909a414279004c244997f6e9.jpg", "http://yanxuan.nosdn.127.net/677f5d85fdd17be748446cb082def361.jpg"],
		"types": ["150*200cm", "180*200cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/e384fc83ce02e1f2db69c18398c3af6e.jpg", "http://yanxuan.nosdn.127.net/66de7858c29820f8fd01811b7e040cbe.jpg", "http://yanxuan.nosdn.127.net/26875da9f029eb85fd412cb44b16ac1a.jpg", "http://yanxuan.nosdn.127.net/1c789c9b3d2318fd85454f64a2563119.jpg", "http://yanxuan.nosdn.127.net/f71b74de4c924ad353dd66da4647bd28.jpg", "http://yanxuan.nosdn.127.net/ec735afb426ca4c42725c85c3fe13401.jpg", "http://yanxuan.nosdn.127.net/1bff8c9cf43a33cacadd2fd8b09a2e57.jpg", "http://yanxuan.nosdn.127.net/93134f93fe7a8eaf76c360604ee11059.jpg", "http://yanxuan.nosdn.127.net/2b9102cc77049928948ef679243065a5.jpg", "http://yanxuan.nosdn.127.net/0ca5350e50f1af5b4bca45067ae2f6a4.jpg", "http://yanxuan.nosdn.127.net/937e4e62ce8f487a605d137d9036b06b.jpg", "http://yanxuan.nosdn.127.net/5f46e33fedebb5516e19475933379678.jpg", "http://yanxuan.nosdn.127.net/9343b69c7e87642b7f9b6eb00ac4b9e6.jpg", "http://yanxuan.nosdn.127.net/94a306298ca087077949cf5311ac2e07.jpg", "http://yanxuan.nosdn.127.net/dba5cb6ea0d703549cc13d619f37a25a.jpg", "http://yanxuan.nosdn.127.net/b1a40d93809351d56a21e9afa94a3b43.jpg", "http://yanxuan.nosdn.127.net/fe70f54105842662c19d56e325964638.jpg", "http://yanxuan.nosdn.127.net/d70958c6fe21cdebd2bcdb8abda3a6b2.jpg", "http://yanxuan.nosdn.127.net/f3067659dab678ce8bcd3e960a89fdf2.jpg", "http://yanxuan.nosdn.127.net/f82fa7cf1e9367300eb6a20902f79883.jpg", "http://yanxuan.nosdn.127.net/5018cb600cb1db0411e5d092f53c4c20.jpg", "http://yanxuan.nosdn.127.net/9331f66b7959c0319742a353dffbf659.jpg", "http://yanxuan.nosdn.127.net/8cc2e09e3515246187e45677a2331db8.jpg", "http://yanxuan.nosdn.127.net/fc402fcaf4a6aeacf498b561da8a8f50.jpg", "http://yanxuan.nosdn.127.net/5788e527bab0a6a0d2a0500a78a32b10.jpg", "http://yanxuan.nosdn.127.net/baf379aee77e253963f8c8b5d4fb9750.jpg", "http://yanxuan.nosdn.127.net/9a338ba5f73a659c4ce30b7c7e1c521f.jpg", "http://yanxuan.nosdn.127.net/7e5ab8f51b4b9f697c8a481c1695f3ff.jpg", "http://yanxuan.nosdn.127.net/a57bba6a5c46b500831a42e4c1453070.jpg", "http://yanxuan.nosdn.127.net/0ccc88a7f3be393fc3b5267721fa7830.jpg", "http://yanxuan.nosdn.127.net/d62fbd04cdb8cde156686ad08487b007.jpg", "http://yanxuan.nosdn.127.net/db0e65e8f93274e297ed8864fb4285b2.jpg", "http://yanxuan.nosdn.127.net/7f5f07bb7354418c490a586de9d0c293.jpg", "http://yanxuan.nosdn.127.net/50722e028d40c301aa00133725d39044.jpg", "http://yanxuan.nosdn.127.net/bee59daffdf96b6c1f69c3fe96cf2382.jpg", "http://yanxuan.nosdn.127.net/25bc3d3cc1883ec158643354e37e7c2b.jpg", "http://yanxuan.nosdn.127.net/169c13f6414bb935788d617571eb437c.jpg", "http://yanxuan.nosdn.127.net/0f851c3b8cb90d02094fd8f4e89d2d03.jpg", "http://yanxuan.nosdn.127.net/1c4a4a6ba9f2444be25bea3cef4f095f.jpg", "http://yanxuan.nosdn.127.net/76b2d37fd49d27d1e423b1b76e321cd5.jpg", "http://yanxuan.nosdn.127.net/2eba44a8c15b2463baeaa54cc3e79c5f.jpg", "http://yanxuan.nosdn.127.net/6d714d292519ab42902ae4dec299705b.jpg", "http://yanxuan.nosdn.127.net/520f619c5a2680611eda7168fb6eb170.jpg", "http://yanxuan.nosdn.127.net/7f22c3ba009720070cc524e0c9f51ff5.jpg", "http://yanxuan.nosdn.127.net/e74dffa0dee045a8e7b4c896e88c58e3.jpg", "http://yanxuan.nosdn.127.net/4e77e8fb41463a068dd1ee7435372def.jpg", "http://yanxuan.nosdn.127.net/fd823917807199508ed3a4ad00a1f2f4.jpg", "http://yanxuan.nosdn.127.net/eb2229ababf3dd2b575feb7051db94e6.jpg", "http://yanxuan.nosdn.127.net/3ffa26e3adef56db0b1ba508cff60564.jpg", "http://yanxuan.nosdn.127.net/b10d29eecfea153ad0ac8e5ae73474fe.jpg", "http://yanxuan.nosdn.127.net/2b9e124b0a10ee6e339ebcf0066b0901.jpg", "http://yanxuan.nosdn.127.net/96c982e4c91110c41a592e70698dc4eb.jpg", "http://yanxuan.nosdn.127.net/67ce840f20ac787f6a89d03dbe85d970.jpg", "http://yanxuan.nosdn.127.net/7886c4b5b66262dc34420c07554a8f4a.jpg", "http://yanxuan.nosdn.127.net/6d2f264a3c5c917a55d4c592893403ef.jpg", "http://yanxuan.nosdn.127.net/3c2e307d5bfddf72a60c72b15779d31c.jpg", "http://yanxuan.nosdn.127.net/269634198570d6b0b127586c01a761e4.jpg", "http://yanxuan.nosdn.127.net/ee4e6b818d3bbe7065f17a12a905ecb8.jpg", "http://yanxuan.nosdn.127.net/13d8aae666aba875eee005aa07bf6c62.jpg", "http://yanxuan.nosdn.127.net/c4187c35aa1c8e95ef0fec7730e93b57.jpg", "http://yanxuan.nosdn.127.net/eb1c178864a02bf90d3f551bc64da5da.jpg", "http://yanxuan.nosdn.127.net/1b6686396c7d9c4772ec5f320c357ed0.jpg", "http://yanxuan.nosdn.127.net/9a5013151e1003811fc0b37eabd03cb7.jpg", "http://yanxuan.nosdn.127.net/00da23e0b72320ef8f729a3830e7598c.jpg", "http://yanxuan.nosdn.127.net/f6bdc0e337ff9a679b0a87b06f19f0e1.jpg", "http://yanxuan.nosdn.127.net/c01e7ed7ae31c4cc82809031d2a2f686.jpg", "http://yanxuan.nosdn.127.net/f96828f8247e63316e2e44f783564105.jpg", "http://yanxuan.nosdn.127.net/7de721e6ff05de9d291b9da2475a7bb4.jpg", "http://yanxuan.nosdn.127.net/381c45d9711110c1ddba227138f1a1f3.jpg", "http://yanxuan.nosdn.127.net/50276bf246a60d07acc6625013945bbf.jpg", "http://yanxuan.nosdn.127.net/4b0866ff94c18fc3a9cba04fd5eded28.jpg", "http://yanxuan.nosdn.127.net/fc3381979af2c6ce1db46fc3e14513ef.jpg", "http://yanxuan.nosdn.127.net/fbc0bf87492267fc573f34080b6fddcc.jpg", "http://yanxuan.nosdn.127.net/b758a89516a023b8907bf7c66fd6d472.jpg", "http://yanxuan.nosdn.127.net/0bd9d75c575ec112173018f9ed18010f.jpg", "http://yanxuan.nosdn.127.net/28a2ffd4df54292330857f92b72d2fe0.jpg", "http://yanxuan.nosdn.127.net/604426a674e82fabfaa29ed137da273e.jpg", "http://yanxuan.nosdn.127.net/e91a0374e1943306a1a8ffb6a94218c9.jpg", "http://yanxuan.nosdn.127.net/f7cdc4fffd3b510235ddfad980ec98c9.jpg", "http://yanxuan.nosdn.127.net/6d794b88ef6256af93b24e03d7899f1f.jpg", "http://yanxuan.nosdn.127.net/ec4b333476eef7cf40ddea284f029838.jpg", "http://yanxuan.nosdn.127.net/b9b5945e350fe6df3b6b843c26096f1d.jpg", "http://yanxuan.nosdn.127.net/9ca2ce5c09a351d6e3a4dbdde559abaa.jpg", "http://yanxuan.nosdn.127.net/4306e59b387e45c6c92aa174d10df0f0.jpg", "http://yanxuan.nosdn.127.net/8a80911f2f06ab29d59402a36e6740c4.jpg", "http://yanxuan.nosdn.127.net/52a13bd9811f49cabd1fe90983853a2d.jpg", "http://yanxuan.nosdn.127.net/fcb6cde67b6665658cc09a3ca8187c7b.jpg", "http://yanxuan.nosdn.127.net/68ee635c800433efcc0554cdd6679f26.jpg", "http://yanxuan.nosdn.127.net/4a3192eb15ffc97d570af57666d0ca6a.jpg", "http://yanxuan.nosdn.127.net/2b58d03dd2fce4122cd1bc6611e0f24f.jpg", "http://yanxuan.nosdn.127.net/cb9e614ad17dbea44ef4001ba31be31b.jpg", "http://yanxuan.nosdn.127.net/6ee1b97a01298e5b9e13a346ea2f76ea.jpg", "http://yanxuan.nosdn.127.net/1ae4e36b59a1d3fbf1ddebf486c48e33.jpg", "http://yanxuan.nosdn.127.net/04d17bcab2fd045d88aa80507f4eeeeb.jpg", "http://yanxuan.nosdn.127.net/95d7739fe9dfdee4ff54ae40e229c6ec.jpg", "http://yanxuan.nosdn.127.net/af88801f447a6292df51b54830ec1aa2.jpg", "http://yanxuan.nosdn.127.net/c392c83a23cc9f0e095b2337b5f6138e.jpg", "http://yanxuan.nosdn.127.net/2d642899610ecf8896d4a06c2485b76c.jpg", "http://yanxuan.nosdn.127.net/d6f2bf6a3bcd24551784b0546fc509be.jpg", "http://yanxuan.nosdn.127.net/399b2b9a23800a2c158740a8c63de56f.jpg", "http://yanxuan.nosdn.127.net/b7eaea7deadf2693bd58506f94a107c7.jpg", "http://yanxuan.nosdn.127.net/b9cbcb55b16fa70ad5b77cfc6af2afdb.jpg", "http://yanxuan.nosdn.127.net/7d7fc46b2ca2cdedb7209243aa4691d7.jpg", "http://yanxuan.nosdn.127.net/6f3d9ba8f1efa8164adda2f412108e28.jpg", "http://yanxuan.nosdn.127.net/a2fd1a6e3e6883700e258f262a681701.jpg", "http://yanxuan.nosdn.127.net/114d0ef2e6dfba875b66f34e73a44535.jpg", "http://yanxuan.nosdn.127.net/9fe9441e54a3f871ee7f06d61e5d6834.jpg", "http://yanxuan.nosdn.127.net/f9d63568d171d2ada9890af060a6b8e0.jpg", "http://yanxuan.nosdn.127.net/f164d2a9b6f184d61477eb80e6598ea1.jpg", "http://yanxuan.nosdn.127.net/c297df128af915c9c37364f5ab9309dd.jpg", "http://yanxuan.nosdn.127.net/8ddb4d601fac70d41827cf6b85122302.jpg", "http://yanxuan.nosdn.127.net/75e32ae4d677464659ae812969cae9e7.jpg", "http://yanxuan.nosdn.127.net/19bff8a869344f8359c3e058e4338258.jpg", "http://yanxuan.nosdn.127.net/0bee20e6c01030d2093a53c90a9336a4.jpg", "http://yanxuan.nosdn.127.net/38bb557558158c1530ac1e90b99ff781.jpg", "http://yanxuan.nosdn.127.net/5ef8c6748bac7881b35b0d48bd5c0808.jpg", "http://yanxuan.nosdn.127.net/88baf7706dadb6600faea4fc1deb8950.jpg", "http://yanxuan.nosdn.127.net/60519fc90f805b2cc837e2227422767d.jpg", "http://yanxuan.nosdn.127.net/8bfee7f630bf1f199ae252967bc99e30.jpg", "http://yanxuan.nosdn.127.net/8df77f0d4059eedcb292b63ac2f375da.jpg", "http://yanxuan.nosdn.127.net/48663a29a4c89c2bc14e3a3982703a8b.jpg", "http://yanxuan.nosdn.127.net/6664a2b2a9fe648ef5045fd200a72801.jpg", "http://yanxuan.nosdn.127.net/c1b850234e6b0671802236b57ac32a4d.jpg", "http://yanxuan.nosdn.127.net/3a3c305cad83b9cc3a1e56a88103f75f.jpg", "http://yanxuan.nosdn.127.net/2cea047d3fe328b4dd4976d4b7e2a51d.jpg", "http://yanxuan.nosdn.127.net/11a9c76438e3426b9d1ba4af4e2513c1.jpg"],
		"inventory": [244, 919],
		"information": [{
			"attrName": "弹簧结构特征",
			"attrValue": "独立袋装弹簧"
		}, {
			"attrName": "使用场所",
			"attrValue": "卧室、榻榻米"
		}, {
			"attrName": "主要原材料",
			"attrValue": "进口乳胶"
		}, {
			"attrName": "辅料",
			"attrValue": "软硬质海绵"
		}, {
			"attrName": "高度",
			"attrValue": "25cm"
		}, {
			"attrName": "配送范围",
			"attrValue": "以客服回复可配送范围为准"
		}, {
			"attrName": "重量",
			"attrValue": "150*200cm 54+-3kg180*200cm 62+-3kg"
		}],
		"label": 爆品,
		"manufacture": "",
		"sale": 375,
		"date": "1500012260636",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1199006,
		"price": 3899,
		"topName": "3D透气高端弹簧床垫",
		"subName": "仅售供应商建议价的1/6",
		"shortDescription": ["30cm", "高床舒适", "3D材质", "弹力支撑", "透气网格", "抑菌除湿"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e87cad3e62263acf08400f9c8d404ce3.jpg", "http://yanxuan.nosdn.127.net/397e9ab4176299b7629f5012cbedf933.jpg", "http://yanxuan.nosdn.127.net/246f2c4bc7b14a8464f61777603e51ec.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/69faaa9ca66f6a3fb9bbdb3780adc82f.png", "http://yanxuan.nosdn.127.net/4f29a1ebfcb74fa44a4c340ae37b7f5c.jpg", "http://yanxuan.nosdn.127.net/a44bbfab58a3f2f4d928f2b50612814b.jpg", "http://yanxuan.nosdn.127.net/e8d2ee773d762d5e63ef3f7c81fb5c92.jpg", "http://yanxuan.nosdn.127.net/07d214d3cdae8c69e9845076605e1f31.jpg"],
		"types": ["1.8*2m", "1.5*2m"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/338cddf73bc39bb044372cf100800755.jpg", "http://yanxuan.nosdn.127.net/fd8e31312b4b0ef64f8ac87354db0900.jpg", "http://yanxuan.nosdn.127.net/3b81c23de7f3fa14c3015f7de3f54344.jpg", "http://yanxuan.nosdn.127.net/b3ee72b61e7644bbf3ec2fc05a9ef9d2.jpg", "http://yanxuan.nosdn.127.net/ce994014ccf383ffceaa93e47cd2685c.jpg", "http://yanxuan.nosdn.127.net/3b5621e76468bfde9400652977ccae72.jpg", "http://yanxuan.nosdn.127.net/a65a2725f5e606d5ca64fce59afe462c.jpg", "http://yanxuan.nosdn.127.net/f5383e7b15445a990167fc03f5d00c71.jpg", "http://yanxuan.nosdn.127.net/df9f8a4f03f5ee630321f69bf1bacae5.jpg", "http://yanxuan.nosdn.127.net/d2314a186b7f3ff9a36d987c22c7b6b3.jpg", "http://yanxuan.nosdn.127.net/c2a3d64730b88692606ae1820e013feb.jpg", "http://yanxuan.nosdn.127.net/c717577ec4905e71d979583baa20e93e.jpg", "http://yanxuan.nosdn.127.net/7c2795e4e18c0962068485b719d5cfc7.jpg", "http://yanxuan.nosdn.127.net/7c76decc746c33fd2551e1a8220ec512.jpg", "http://yanxuan.nosdn.127.net/3b6359925c0173fd0d9aa536a4198912.jpg", "http://yanxuan.nosdn.127.net/12647d6446f8eb1c3d5b1544f4c573df.jpg", "http://yanxuan.nosdn.127.net/47328d4af9d44a1e8eb368a60e3aa58d.jpg", "http://yanxuan.nosdn.127.net/f57397f10ed52b6ad6b9fd4b33638c6e.jpg", "http://yanxuan.nosdn.127.net/2e45044e03fbddafe2a52ac988c8487c.jpg", "http://yanxuan.nosdn.127.net/bd466e39b5c6f84977543f45ce8d0a25.jpg", "http://yanxuan.nosdn.127.net/b88b8aed26ec6629247188580c4d3ba9.jpg", "http://yanxuan.nosdn.127.net/46a76c2aba64fb461ec94c3bcd691b18.jpg", "http://yanxuan.nosdn.127.net/e1506426cba2bb455002e8978ce4dac2.jpg", "http://yanxuan.nosdn.127.net/71d7e358a099d39654b3e75e900c5ce0.jpg", "http://yanxuan.nosdn.127.net/628116b8f0db32160ae5af9c7c645f69.jpg", "http://yanxuan.nosdn.127.net/597107dbf3417e47efe56cf15f53bd96.jpg", "http://yanxuan.nosdn.127.net/30febeee0c10bf1ceeeaa189a4e70cb5.jpg", "http://yanxuan.nosdn.127.net/600db7b9215679f15bfde448916b427a.jpg", "http://yanxuan.nosdn.127.net/0b5a30fa57dd929fb52050307646fa55.jpg", "http://yanxuan.nosdn.127.net/352ac0029e431aee8c22c786fa7e6864.jpg", "http://yanxuan.nosdn.127.net/19eaf7a6e505d8ae5ef24f110040d6fc.jpg", "http://yanxuan.nosdn.127.net/f152d756aaec2ffd88b26e98dd473e08.jpg", "http://yanxuan.nosdn.127.net/4e6a9f7c400b91cdf23dea9687dd4e4f.jpg", "http://yanxuan.nosdn.127.net/7a48a312a23bb6aacda4d82b10d1c757.jpg", "http://yanxuan.nosdn.127.net/a657cb1fe2ceb7cbf43307fb1834f4d3.jpg", "http://yanxuan.nosdn.127.net/5748ffc01a52c8fa63d8c78f7af2117b.jpg", "http://yanxuan.nosdn.127.net/2f0a97a7c681ff39722453ebd9249aa2.jpg", "http://yanxuan.nosdn.127.net/d3be3e4112e3293a6fb0110bed8e48f2.jpg", "http://yanxuan.nosdn.127.net/744594c29d43ee75a3e090a8458dbfdd.jpg", "http://yanxuan.nosdn.127.net/65546944ecfe87ea66beeaeaeed1c2aa.jpg", "http://yanxuan.nosdn.127.net/38b004d3ef5d672961d729616abcc152.jpg", "http://yanxuan.nosdn.127.net/1afb0094449ca09b4813b9db90273656.jpg", "http://yanxuan.nosdn.127.net/b7748043c6d246915e64f8d90b8e4bf2.jpg", "http://yanxuan.nosdn.127.net/96dc72136e2e4fd38cd2aaac007cf7ca.jpg", "http://yanxuan.nosdn.127.net/56f24e137378d85c1207f769054c1b7a.jpg", "http://yanxuan.nosdn.127.net/1621bac74e899c61837642abc3bd820f.jpg", "http://yanxuan.nosdn.127.net/e113371bee1333485db32fe6fa67e15e.jpg", "http://yanxuan.nosdn.127.net/f08ceb756ca2f8b0ff1a92cee5420283.jpg", "http://yanxuan.nosdn.127.net/a48db8bafb69f268bf5be55bcb2c8258.jpg", "http://yanxuan.nosdn.127.net/0a839cc5f30d324b5a94bc859fb4e113.jpg", "http://yanxuan.nosdn.127.net/41bc940840f819a9d70164f2fa5f7f14.jpg", "http://yanxuan.nosdn.127.net/6c7c28e76fbeafa1ec786bfa5ce6fca5.jpg", "http://yanxuan.nosdn.127.net/68010a86b832cd04f52e5aa6972351b3.jpg", "http://yanxuan.nosdn.127.net/9ef41d2d0c162410914b083f16b2b857.jpg", "http://yanxuan.nosdn.127.net/43727bf668fce15c13e6fc5b20d8ddb3.jpg", "http://yanxuan.nosdn.127.net/c3ee3fafbdbe0ad6f229327548488dea.jpg", "http://yanxuan.nosdn.127.net/6e83aac6ba76e38075db542534c8de44.jpg", "http://yanxuan.nosdn.127.net/34065c3fb9947f6d9f96dbd9a2e7164e.jpg", "http://yanxuan.nosdn.127.net/241ad6efde3bced2850a09a32f06aa26.jpg", "http://yanxuan.nosdn.127.net/ed28a5b974f0c47d21dd7b03d5c49716.jpg", "http://yanxuan.nosdn.127.net/8bcb31d633af143f8e63c70fe82a1f57.jpg", "http://yanxuan.nosdn.127.net/3548afb45c6b686e25e6f7d8e9b33a7b.jpg", "http://yanxuan.nosdn.127.net/f8f8ff89f1ffecde723e8f863cef3568.jpg", "http://yanxuan.nosdn.127.net/a05dad7f013b8057449e7e74b1b418f9.jpg", "http://yanxuan.nosdn.127.net/aede67ad5500174b3197a2061653cde3.jpg", "http://yanxuan.nosdn.127.net/fecf55758a6f269e2e97280844d76200.jpg", "http://yanxuan.nosdn.127.net/f86e7d0c8eb3de9ed2b038ae4b38cb24.jpg", "http://yanxuan.nosdn.127.net/cdb6c75e88c8c73e9272023bcd86e18b.jpg", "http://yanxuan.nosdn.127.net/1ee0517a75e52783bb268b0755037ef2.jpg", "http://yanxuan.nosdn.127.net/1a076eaffdec5d7930b663ed5dd506ee.jpg", "http://yanxuan.nosdn.127.net/58250c7f310eecaa23af4b3065f0a381.jpg", "http://yanxuan.nosdn.127.net/1e68b4be760b7492081c118752e610fe.jpg", "http://yanxuan.nosdn.127.net/2c3a7c99d3423180669d2d71504060c2.jpg", "http://yanxuan.nosdn.127.net/a864006140533e7f881f6cb32234b6dd.jpg", "http://yanxuan.nosdn.127.net/a52d3567166bd896b19ce216905f7222.jpg", "http://yanxuan.nosdn.127.net/66749e7fd6aa18db7407a4808575f65c.jpg", "http://yanxuan.nosdn.127.net/dbd2cf28c05b92e367b8beb2d3fed47f.jpg", "http://yanxuan.nosdn.127.net/d12f6bdb4e2f91bfb22a9c9447f899dd.jpg", "http://yanxuan.nosdn.127.net/9cb3c4666a1dabc4c88a5c39023cc384.jpg", "http://yanxuan.nosdn.127.net/3f3696637901d2ebba5a55f45db2fdfd.jpg", "http://yanxuan.nosdn.127.net/65b6dd60aedf29c8e9a902a96fa95148.jpg", "http://yanxuan.nosdn.127.net/c8e6918cb751217130f5134cb25c1348.jpg", "http://yanxuan.nosdn.127.net/c0717799845954fa12fcf0cb80e30547.jpg", "http://yanxuan.nosdn.127.net/699c6073c643638331568e9bcd9fb91c.jpg", "http://yanxuan.nosdn.127.net/7c471368a526a16a848f823121759dfc.jpg", "http://yanxuan.nosdn.127.net/76d2f1c3ad6392fb1d1870531fb4ef47.jpg", "http://yanxuan.nosdn.127.net/953ed2ba8b4f33b087f3e1820f4bdb69.jpg", "http://yanxuan.nosdn.127.net/fd6d9155ef0c9b067cce955927781e99.jpg", "http://yanxuan.nosdn.127.net/2bd6508c07e4d5d9cfe6b6ed8f0a0168.jpg", "http://yanxuan.nosdn.127.net/62309265cefd513063cf7c0f19271f36.jpg", "http://yanxuan.nosdn.127.net/ec7e7f174ad9d90775a684c22607aeda.jpg", "http://yanxuan.nosdn.127.net/cfa426ecda71d1a7944092bb0cbaff94.jpg", "http://yanxuan.nosdn.127.net/b7b0d6db55a3a42a3e7274982f0216dd.jpg", "http://yanxuan.nosdn.127.net/62318309ddd5f3a1c9a62c2bf458e35e.jpg", "http://yanxuan.nosdn.127.net/2e53938c664a1c161fc05d53d7c83042.jpg", "http://yanxuan.nosdn.127.net/c9e6e7c2f226975b8dec06253ad21ab1.jpg", "http://yanxuan.nosdn.127.net/5c2dd89396bbcb3572abdcf2b8ed6754.jpg", "http://yanxuan.nosdn.127.net/ed51cd3cd51142c8a2d4f62fe20410d8.jpg", "http://yanxuan.nosdn.127.net/216f777e14c53bd59592b7690f10aa72.jpg", "http://yanxuan.nosdn.127.net/f8e29d3dc907f939b88aa81bfd87aac4.jpg", "http://yanxuan.nosdn.127.net/be3282b424fd1d4e68b4cdf4f5eb8170.jpg", "http://yanxuan.nosdn.127.net/b198f7f220bacef44fce2b1b582f225f.jpg", "http://yanxuan.nosdn.127.net/05ec4d96771ff00c52acd0010607e522.jpg", "http://yanxuan.nosdn.127.net/7d239d2201e872cab922032194169d28.jpg", "http://yanxuan.nosdn.127.net/04faaada298cc6a6807d6b387262ea1d.jpg", "http://yanxuan.nosdn.127.net/92aeaa1a4c012a26b1095561a07980ae.jpg", "http://yanxuan.nosdn.127.net/33389fd785da03fd26cff9279666a305.jpg", "http://yanxuan.nosdn.127.net/62ad90716f5c41a0a473e95122c84bf6.jpg", "http://yanxuan.nosdn.127.net/463f40280052bdbd4ccb94c541402f0d.jpg", "http://yanxuan.nosdn.127.net/c9d15378a9be46e18772e850818f6528.jpg", "http://yanxuan.nosdn.127.net/197db597bd3bb73d6a4b5f08683cc726.jpg", "http://yanxuan.nosdn.127.net/52f5c93cfc3a44d2e4af65d86b5b3c4d.jpg", "http://yanxuan.nosdn.127.net/9fd04d2e54beb5c5f4fcdd67ed26799b.jpg", "http://yanxuan.nosdn.127.net/8b29a00f7e03dc2e8ac90d95b9ad352e.jpg", "http://yanxuan.nosdn.127.net/a2468822af6d8cb9acb34a374a706e9f.jpg", "http://yanxuan.nosdn.127.net/ca35537f953ff0bbdaf58f01cc1d2536.jpg", "http://yanxuan.nosdn.127.net/9496ed3503a6b556e0bc181f4da0d24f.jpg", "http://yanxuan.nosdn.127.net/5aa408a43161e0431cca21cfd8b42c77.jpg", "http://yanxuan.nosdn.127.net/daaa4f59ff92daa5cf79a89675720ca1.jpg", "http://yanxuan.nosdn.127.net/6eebdae972bfd18f48c18505753bb0f7.jpg", "http://yanxuan.nosdn.127.net/dae06e7d002ebed116082a21154818fb.jpg", "http://yanxuan.nosdn.127.net/ae31fd0a43ae6260e34f3f92030e4fe0.jpg", "http://yanxuan.nosdn.127.net/7b9e47e63d7e0dc6d31b42d4a4829f02.jpg", "http://yanxuan.nosdn.127.net/0e65528e2d9a539da8b01da2559de75f.jpg", "http://yanxuan.nosdn.127.net/5c5b496985f436f06a4c5ad4536d09bc.jpg", "http://yanxuan.nosdn.127.net/3bed4f93813f9497f74ae142281687f4.jpg", "http://yanxuan.nosdn.127.net/09462aaf8c8fc88e50ce0f4deae7370e.jpg", "http://yanxuan.nosdn.127.net/ffe954e236b833e29fd1cc70aa05db17.jpg", "http://yanxuan.nosdn.127.net/103be8188573a27d37366a103cf9c809.jpg", "http://yanxuan.nosdn.127.net/ba47dedac749427f2eec17f13b421740.jpg", "http://yanxuan.nosdn.127.net/7c6f0b45b6ed4d911007b0edebefb7ce.jpg", "http://yanxuan.nosdn.127.net/d84d8be9657846c41b3f6ebda9c02df0.jpg", "http://yanxuan.nosdn.127.net/fa3364fb9ad68a05f51cc912615a17a7.jpg", "http://yanxuan.nosdn.127.net/4ecd8ceba8448163f4dacfe279375c56.jpg", "http://yanxuan.nosdn.127.net/85ad5b7b3c9d582da38c5618f02e968a.jpg", "http://yanxuan.nosdn.127.net/08a77c46b3fcaf080d42a0d921fe9213.jpg", "http://yanxuan.nosdn.127.net/e619046f3bc057ef542f2a52fb652600.jpg", "http://yanxuan.nosdn.127.net/0824aae74fea44a50097aee2f00210bb.jpg", "http://yanxuan.nosdn.127.net/4fd3e16387eecf9f7672064910465715.jpg", "http://yanxuan.nosdn.127.net/0674ec07193d970205560480430f72bc.jpg", "http://yanxuan.nosdn.127.net/43685623af85ba76bcd007bc39a764b4.jpg", "http://yanxuan.nosdn.127.net/ff6f28816ce47988217374cee83f8ae9.jpg", "http://yanxuan.nosdn.127.net/945500fed31f65d702fe6cc4797ad6a3.jpg"],
		"inventory": [725, 267],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "QB/T 1952.2-2011"
		}, {
			"attrName": "质量等级",
			"attrValue": "合格品"
		}, {
			"attrName": "弹簧结构特征",
			"attrValue": "独立袋装弹簧"
		}, {
			"attrName": "主要原材料",
			"attrValue": "涤纶网布+弹簧"
		}, {
			"attrName": "辅料",
			"attrValue": "海绵+立体纤维"
		}, {
			"attrName": "重量",
			"attrValue": "62kg+-5kg"
		}],
		"label": APP专享价,
		"manufacture": "",
		"sale": 278,
		"date": "1500012263883",
		"category": "居家",
		"subCategory": "被枕"
	})
	var goodsEntity = new goodsModel({
		"id": 1135002,
		"price": 2599,
		"topName": "黑凤梨 宫廷奢华真丝四件套",
		"subName": "100%桑蚕丝，丝滑润肤",
		"shortDescription": ["天然蚕丝", "细软透气", "19MM", "柔韧耐用", "健康印染", "中式素雅"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4f6c97042ed21ed3d7f441abd1280412.png", "http://yanxuan.nosdn.127.net/600073d1bbfcedcb56c3a235c41a0d97.png", "http://yanxuan.nosdn.127.net/1b7f5316d8c2deb1966b90e6d6fdabe6.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/45548f26cfd0c7c41e0afc3709d48286.png", "http://yanxuan.nosdn.127.net/0e59d09161bf11c947fe4bdbfe94aa87.jpg", "http://yanxuan.nosdn.127.net/47c131a02d5d5b97ddcd19c16b391bbb.jpg", "http://yanxuan.nosdn.127.net/5300c083dcc0c6a856364d883f3284e8.jpg", "http://yanxuan.nosdn.127.net/586f42c66523559838fbb97b7315bab6.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/ce065da5a581b8a1e1da01e1f72aa04d.jpg", "http://yanxuan.nosdn.127.net/1d20f3eab71f3d1ca375bb0d0690da7d.jpg", "http://yanxuan.nosdn.127.net/ca8e8313bc8d4e7f4f31e3055e15710f.jpg", "http://yanxuan.nosdn.127.net/d55ac81c509768a4b3712021d8d1a3af.jpg", "http://yanxuan.nosdn.127.net/d4d02d1e8e9d65a20bbfdccae802e5bc.jpg", "http://yanxuan.nosdn.127.net/34856973a680218ca31b055d01b98085.jpg", "http://yanxuan.nosdn.127.net/d9613a4c7cdc5de74f7e3a9b6edba343.jpg", "http://yanxuan.nosdn.127.net/b236819611f9a895ce917d1747c9d3d8.jpg", "http://yanxuan.nosdn.127.net/672f87bf54b9592d0a63ae752d53228e.jpg", "http://yanxuan.nosdn.127.net/5293b61682e8b96c68d290f4057aba82.jpg", "http://yanxuan.nosdn.127.net/dff3f45cfdb375e556c49e0211f2eab9.jpg", "http://yanxuan.nosdn.127.net/631a01941971f4f1ad82196d4348e6e5.jpg", "http://yanxuan.nosdn.127.net/42f3432b77ef99c711cf7a419f9afe42.jpg", "http://yanxuan.nosdn.127.net/5348c425c3a1b19cd79abde731350b17.jpg", "http://yanxuan.nosdn.127.net/aa1270b10f7a430aa3c05ba1b8890cce.jpg", "http://yanxuan.nosdn.127.net/16d8dfd030167b0b894e0d5cfa68b1db.jpg", "http://yanxuan.nosdn.127.net/e708b20d4b3cb672849798c47c588c9c.jpg", "http://yanxuan.nosdn.127.net/43a5a6d94dbf531d2f776c56cc7e8ed1.jpg", "http://yanxuan.nosdn.127.net/460679df62e6e9dbcec48a61a1379729.jpg", "http://yanxuan.nosdn.127.net/a855211c4e342141cb44fc4ffb8f25f5.jpg", "http://yanxuan.nosdn.127.net/555d5a6f27260c1c302dfa94f52307f7.jpg", "http://yanxuan.nosdn.127.net/69ce1c3add12c350f58f682fbfed5cde.jpg", "http://yanxuan.nosdn.127.net/8d854a59b7a925be557225962006b61f.jpg", "http://yanxuan.nosdn.127.net/a8f972dc894bd951e212c0e82950fbae.jpg", "http://yanxuan.nosdn.127.net/1ecaaaa70dbbe5e7f208df3dc059639b.jpg", "http://yanxuan.nosdn.127.net/b6f8bbcf3bd2d6fc12f6f73dd265ca88.jpg", "http://yanxuan.nosdn.127.net/31adf33919ecbfbde1ff66a6187dfa61.jpg", "http://yanxuan.nosdn.127.net/376a5bad83bfe9954a8695fb14aa7edc.jpg", "http://yanxuan.nosdn.127.net/8eff4ef1d35fb07e1d566cc76938ed51.jpg", "http://yanxuan.nosdn.127.net/b8b1162891aa8f59ae69e18b4952a96b.jpg", "http://yanxuan.nosdn.127.net/f37c85761905ae6fcd527890879357ff.jpg", "http://yanxuan.nosdn.127.net/6bbcb00ea1d86fb16b62e25e3b7a592a.jpg", "http://yanxuan.nosdn.127.net/cbfc7d8b8a716f9e808cd6963beb516f.jpg", "http://yanxuan.nosdn.127.net/89e84f757dcd08c422b72264c893948e.jpg", "http://yanxuan.nosdn.127.net/e56e4a405eb2d991bf51e9064afb10b1.jpg", "http://yanxuan.nosdn.127.net/e6d574095ace903c9e525a6563b0fe6c.jpg", "http://yanxuan.nosdn.127.net/d1cd1d440680bda9f3bcdb385936a8f3.jpg", "http://yanxuan.nosdn.127.net/0d7516291e4e51cb19db678fc0bddef9.jpg", "http://yanxuan.nosdn.127.net/88efd9933bb6265b52caf2388ca9d367.jpg", "http://yanxuan.nosdn.127.net/6602c65305b4899bdb150c1dc0e70dbe.jpg", "http://yanxuan.nosdn.127.net/9091ed33e081fa4ab2d182e91f78d76f.jpg", "http://yanxuan.nosdn.127.net/ee849c46df2befa61c296ad3d4762f6f.jpg", "http://yanxuan.nosdn.127.net/0f1db2e6e631e6674ea287286c295bc4.jpg", "http://yanxuan.nosdn.127.net/d430a0b04c726289f572e6a3d44f219b.jpg", "http://yanxuan.nosdn.127.net/9f301e59930023ff8164e9e535699ff2.jpg", "http://yanxuan.nosdn.127.net/61785407397675d1f8027e511489927d.jpg", "http://yanxuan.nosdn.127.net/f0ac6e99273e6c468e5c22bb35aa0ef0.jpg", "http://yanxuan.nosdn.127.net/fe2f6d9db1688faa4180b6510f1c7033.jpg", "http://yanxuan.nosdn.127.net/92c2d340239cb5a2f07b00ae09b9795f.jpg", "http://yanxuan.nosdn.127.net/8167df6c217f8b01be1bfcb7598f1480.jpg", "http://yanxuan.nosdn.127.net/e1500178de2abd1c4afa1d0ff8a55d70.jpg", "http://yanxuan.nosdn.127.net/0d958f5a1536421c1a9d2a63a9d7cba5.jpg", "http://yanxuan.nosdn.127.net/dd63f63a0cb388ce7c98567877f362ab.jpg", "http://yanxuan.nosdn.127.net/fc3c8e7519c1320dae39d6fadd281449.jpg", "http://yanxuan.nosdn.127.net/1a6e5819923271c2098c7ab448eb86c4.jpg", "http://yanxuan.nosdn.127.net/5933c35528141ddc87be6bcc9a3b0779.jpg", "http://yanxuan.nosdn.127.net/1f3b6611e13a033ab727298e61780526.jpg", "http://yanxuan.nosdn.127.net/30330394c4cc2fa4c186f7c9e8fa512f.jpg", "http://yanxuan.nosdn.127.net/e14cb49ea77b1dde6de9b1007e1dfdb0.jpg", "http://yanxuan.nosdn.127.net/da83d13952762d4108a7cf46d79cf51e.jpg", "http://yanxuan.nosdn.127.net/e850a16ff05d91f0c29daf3754145588.jpg", "http://yanxuan.nosdn.127.net/0db0092cdb05a3902b40b609affc77df.jpg", "http://yanxuan.nosdn.127.net/328339e4e593ff42daf047ecdd02e15e.jpg", "http://yanxuan.nosdn.127.net/f6918b9ff482b1f0436aaa793c4940b1.jpg", "http://yanxuan.nosdn.127.net/154e5b5caba88bec7b8cff7506c2b98e.jpg", "http://yanxuan.nosdn.127.net/bdaeadd340e11d187fcbca44902d07e5.jpg", "http://yanxuan.nosdn.127.net/653b0414f64b63b000122eb49acbefd5.jpg", "http://yanxuan.nosdn.127.net/e64b2aae42e83210ce0d0f323e519eba.jpg", "http://yanxuan.nosdn.127.net/359ae63652a3e46bd66f431cf12bf60d.jpg", "http://yanxuan.nosdn.127.net/f11286940f3103bb2509361f4bd5359d.jpg", "http://yanxuan.nosdn.127.net/8720fffbba0bed3d4575bdc3a2e99bfc.jpg", "http://yanxuan.nosdn.127.net/42c35fbf384d44be87ee4ec7353c7868.jpg", "http://yanxuan.nosdn.127.net/7e2001f5a9b8a84cb6ee1e3bbfd508d8.jpg", "http://yanxuan.nosdn.127.net/7e1553a46051d0d9b61eaf0c3a27dd4e.jpg", "http://yanxuan.nosdn.127.net/895e10c475ffd57af2a69364beaa7a79.jpg", "http://yanxuan.nosdn.127.net/4e09a31032bee917fa617c552cf17ed0.jpg", "http://yanxuan.nosdn.127.net/f3106658dacdedf7c29ca6e33cdd7aec.jpg", "http://yanxuan.nosdn.127.net/dfefe8bef418096c8f50128c14d17fd8.jpg"],
		"inventory": [641, 540],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床品：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "浅杏粉/ 玛瑙红/ 烟白灰"
		}, {
			"attrName": "产地",
			"attrValue": "中国四川"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22796-2009"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 521,
		"date": "1500012267022",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1110003,
		"price": 219,
		"topName": "全棉针织条纹四件套 新款",
		"subName": "裸睡享受，柔软透气有弹性",
		"shortDescription": ["长绒棉朵", "纤维柔长", "百隆纱线", "朦胧色彩", "针织工艺", "透气微弹"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4e810f9cbb5ce3a86d710d7859cb5127.jpg", "http://yanxuan.nosdn.127.net/ce0a4bad041979f542288d9ba355138c.jpg", "http://yanxuan.nosdn.127.net/4e41dd39d4a733bb700ffac69ea25624.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4409aed35d35f105c164b8c4e6184a08.png", "http://yanxuan.nosdn.127.net/1f0f46e45939bf6e99942ef2588653f7.jpg", "http://yanxuan.nosdn.127.net/af502dbac2858fa1fef9b597ae9c8cee.jpg", "http://yanxuan.nosdn.127.net/a4d8b85ef0822d3e684f9eb82e63a474.jpg", "http://yanxuan.nosdn.127.net/1ef893de4a69a467ed815b9cdca37a19.jpg"],
		"types": ["烟草绿（床单款）", "木兰黄（床单款）", "深茶褐（床单款）", "丁子灰（床单款）", "茶香粉（床单款）", "烟草绿（床笠款）", "木兰黄（床笠款）", "深茶褐（床笠款）", "丁子灰（床笠款）", "茶香粉（床笠款）"],
		"chara": "10色可选",
		"description": ["http://yanxuan.nosdn.127.net/2f535d751f29995d76e114df11c9596d.jpg", "http://yanxuan.nosdn.127.net/8d059ff7f6d8e8eb6405a1c909419d8e.jpg", "http://yanxuan.nosdn.127.net/129bd783856dc807620cba83e7ab3990.jpg", "http://yanxuan.nosdn.127.net/fd65e13198a27d16b2abc8dad6a5af37.jpg", "http://yanxuan.nosdn.127.net/c271a27cbda3087218aef21d547e87fa.jpg", "http://yanxuan.nosdn.127.net/f1a3d568f4a1462bbcdcd7d59dbd8967.jpg", "http://yanxuan.nosdn.127.net/687b4f3cfe3aa110c9fbb50eb0d932b5.jpg", "http://yanxuan.nosdn.127.net/57a4e51a7d947aa626c127dfd297d8fd.jpg", "http://yanxuan.nosdn.127.net/26972050b74ad8a6a1ad5fa2cafd51af.jpg", "http://yanxuan.nosdn.127.net/96a1dcea440f04ef79b4a2f230f3ad4e.jpg", "http://yanxuan.nosdn.127.net/5ca5445bfd20e2b33a532ac809f68ff7.jpg", "http://yanxuan.nosdn.127.net/de03388fb063c7bdd484d50d94e07c85.jpg", "http://yanxuan.nosdn.127.net/9f1014becce514418c474642e4dbe133.jpg", "http://yanxuan.nosdn.127.net/259a07ffa2f93da5935b52052f0ed77b.jpg", "http://yanxuan.nosdn.127.net/feeaeca01390d04f824bea163d97860c.jpg", "http://yanxuan.nosdn.127.net/ed5291fc942540ec229260327e19db02.jpg", "http://yanxuan.nosdn.127.net/6a98cb6b79a391d59b5a2621bed2cb2e.jpg", "http://yanxuan.nosdn.127.net/193907291ac623826f6f5c775a67fade.jpg", "http://yanxuan.nosdn.127.net/3a2cf141464f603ae3ca9a87bc57902a.jpg", "http://yanxuan.nosdn.127.net/7f09942ad010000b25f6ae3ea1c310b4.jpg", "http://yanxuan.nosdn.127.net/22755f238481e6f488e519cd37a88c07.jpg", "http://yanxuan.nosdn.127.net/e27603e0a6cc56f8458544d8de746648.jpg", "http://yanxuan.nosdn.127.net/326040cdf9498300941c870b96670e9b.jpg", "http://yanxuan.nosdn.127.net/3701d760df8c9401bbd7779c4e2b6da7.jpg", "http://yanxuan.nosdn.127.net/7ff5f542bc2fb42e5ffd6c03a5adcc1f.jpg", "http://yanxuan.nosdn.127.net/e41a8606a704a0f87c8804989df46fbe.jpg", "http://yanxuan.nosdn.127.net/e21b7d246a5591a33b77b546affe44c9.jpg", "http://yanxuan.nosdn.127.net/c226b15c68af8bca52f6b8771587564d.jpg", "http://yanxuan.nosdn.127.net/94db167b13530ba2b10cd188ba760787.jpg", "http://yanxuan.nosdn.127.net/f993161c1306efd08d7abd38e6aacc80.jpg", "http://yanxuan.nosdn.127.net/260c6a8cce9629fa598cb5ae814a5fc0.jpg", "http://yanxuan.nosdn.127.net/0721217aa607eb95c90b5bd282e02722.jpg", "http://yanxuan.nosdn.127.net/a77cb20962fcb86658039065983eadfd.jpg", "http://yanxuan.nosdn.127.net/26a092030e3544fd78b70a1b23ffcd45.jpg", "http://yanxuan.nosdn.127.net/d198cb4b33b7227091d3c43f9985ed7e.jpg", "http://yanxuan.nosdn.127.net/06c7a86095e1ea3e8199d02adfb40382.jpg", "http://yanxuan.nosdn.127.net/0961582402d2eb8f03a8c24738ba8310.jpg", "http://yanxuan.nosdn.127.net/878d564efeb08478a8b5014607226e7e.jpg", "http://yanxuan.nosdn.127.net/864275dbb440da7b78d31315d46b4fe2.jpg", "http://yanxuan.nosdn.127.net/9714d8dea45206ea48dced374133f1f4.jpg", "http://yanxuan.nosdn.127.net/1f9430a4eda9b137a8741c8ef93bc403.jpg", "http://yanxuan.nosdn.127.net/3738691274c7c6bc9ec1efaefc791e6f.jpg", "http://yanxuan.nosdn.127.net/6641a6baae1e866feb67be1fa17c2f94.jpg", "http://yanxuan.nosdn.127.net/4a01b54d36b4c7203f5fccfbedcdd5bc.jpg", "http://yanxuan.nosdn.127.net/ed7a97b1ccd0fc59381693bbea0b0095.jpg", "http://yanxuan.nosdn.127.net/0c301364eb76638fceed7e8faca88930.jpg", "http://yanxuan.nosdn.127.net/5c265082943fbd2ad0ad2165abd14804.jpg", "http://yanxuan.nosdn.127.net/409aa4533ab062369297e0030e3f3cb7.jpg", "http://yanxuan.nosdn.127.net/968fd5cc5137fdee55f67e4b8d73273e.jpg", "http://yanxuan.nosdn.127.net/35ea57f5d7f27a89c2cdf409b3600834.jpg", "http://yanxuan.nosdn.127.net/a839b95177fd3c40d85e0a5ba8c2d5a4.jpg", "http://yanxuan.nosdn.127.net/86f2cca04675d971e84a805b8c7b305a.jpg", "http://yanxuan.nosdn.127.net/d6e4f762caeb3e52ed36260cd1d852d9.jpg", "http://yanxuan.nosdn.127.net/442720bafa886f2fd3998322128e69de.jpg", "http://yanxuan.nosdn.127.net/ea26a5e7616aa512b1a7d0751c164490.jpg", "http://yanxuan.nosdn.127.net/be774453b44ea4b31daeb7254880171a.jpg", "http://yanxuan.nosdn.127.net/f381a9df2c5e6c458dfae0e48e6e2feb.jpg", "http://yanxuan.nosdn.127.net/965626ab8a3c5ff74599cafcb574a06f.jpg", "http://yanxuan.nosdn.127.net/9459a8df66adf404c54523daf280407b.jpg", "http://yanxuan.nosdn.127.net/85d33a1ec342243ce98545f32ee2b171.jpg"],
		"inventory": [590, 188, 607, 714, 87, 517, 2, 96, 642, 688],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品（床笠款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品（床笠款）：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm1.5米床品（床单款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米床品（床单款）：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm三件套适用于（1.2-1.35M床）：被套 150*200cm/ 床单 200*230cm/ 枕套 48*74cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22844-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "烟草绿/ 木兰黄/ 深茶褐/ 丁子灰/ 茶香粉"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 爆品,
		满赠,
		"manufacture": "MUJI制造商",
		"sale": 772,
		"date": "1500012270274",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1110004,
		"price": 299,
		"topName": "全棉针织纯色四件套",
		"subName": "日系纯色，面料轻柔舒透",
		"shortDescription": ["长绒棉朵", "纤维柔长", "百隆纱线", "朦胧色彩", "针织工艺", "透气微弹"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/bc13487a088727e63cdbfeed7eab13b3.jpg", "http://yanxuan.nosdn.127.net/20aec7f21aa09a16847d1deddd07b669.jpg", "http://yanxuan.nosdn.127.net/a8703e81dfb18e0b18edea6c997287cf.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/cdb83977c02c88f1114a15044a84297b.png", "http://yanxuan.nosdn.127.net/65c8a921f20f3cea144e5b49a205a4cc.jpg", "http://yanxuan.nosdn.127.net/929be8c2c0ff4918180c2d7a5ea192a8.jpg", "http://yanxuan.nosdn.127.net/acd915fbd3e63fd58638c871e1fa6de2.jpg", "http://yanxuan.nosdn.127.net/11741a9c889d09114fea3ee39031f6c3.jpg"],
		"types": ["烟草绿（床单款）", "深茶褐（床单款）", "丁子灰（床单款）", "木兰黄（床单款）", "茶香粉（床单款）", "烟草绿（床笠款）", "深茶褐（床笠款）", "丁子灰（床笠款）", "木兰黄（床笠款）", "茶香粉（床笠款）"],
		"chara": "10色可选",
		"description": ["http://yanxuan.nosdn.127.net/47880fc766d839a3828777feec53a13e.jpg", "http://yanxuan.nosdn.127.net/74441c84cbe5806fdef2e0cf43be0a88.jpg", "http://yanxuan.nosdn.127.net/908d408787ddfd3b7dc3f3c1af4c823b.jpg", "http://yanxuan.nosdn.127.net/10a45ff1b96d9ae1b2e85be045f35403.jpg", "http://yanxuan.nosdn.127.net/1c4764829423d9f9177ffaf444249847.jpg", "http://yanxuan.nosdn.127.net/d2a7380060684b67a4dfaae0c9ad5565.jpg", "http://yanxuan.nosdn.127.net/bfb828faec547b5eb2a3d4b225b6c114.jpg", "http://yanxuan.nosdn.127.net/d6ba6df6e20b025f43c249f32ce30990.jpg", "http://yanxuan.nosdn.127.net/53f9912b7780dc1cb42858583571aefe.jpg", "http://yanxuan.nosdn.127.net/10d7e046a52073eac16c7efa97b002b1.jpg", "http://yanxuan.nosdn.127.net/cc2eecbb9ff467c74b6ecfe3caa3101e.jpg", "http://yanxuan.nosdn.127.net/e069759f63521e6bc2eb37fef30e601b.jpg", "http://yanxuan.nosdn.127.net/51ad97945875fc28272b28da394fb5c0.jpg", "http://yanxuan.nosdn.127.net/3b8bbdf0972c0d3900e9b432785fb9ab.jpg", "http://yanxuan.nosdn.127.net/539ff1d8e6bfeb68c2de994f6fd96f94.jpg", "http://yanxuan.nosdn.127.net/1dd4f00e0d58729bbe91104bfbc803cd.jpg", "http://yanxuan.nosdn.127.net/fe865a7f3dc272a15357312c9e135dbd.jpg", "http://yanxuan.nosdn.127.net/fb16002250476297625bd5e44d05f552.jpg", "http://yanxuan.nosdn.127.net/dac6f9ebbef7ed76b2e4037569aa5773.jpg", "http://yanxuan.nosdn.127.net/9687a5f801c9a82ced7681a4ffc6ea1c.jpg", "http://yanxuan.nosdn.127.net/72c7f9a3339427759e67cee41d1e1550.jpg", "http://yanxuan.nosdn.127.net/2be0ac00a3e489a60ed3f67ed01633a5.jpg", "http://yanxuan.nosdn.127.net/98ac2b5e749ecd7f510d2cc00c3ff748.jpg", "http://yanxuan.nosdn.127.net/068f75ac19744123a66cce7a303b7353.jpg", "http://yanxuan.nosdn.127.net/db61610bf6ddbb006be527cc33e6b90e.jpg", "http://yanxuan.nosdn.127.net/1b70454ce9c57c9de3a6bcca1dbc9fd6.jpg", "http://yanxuan.nosdn.127.net/dbda570f086f41e3b3a6758b587c5f36.jpg", "http://yanxuan.nosdn.127.net/69d73b309079f46c750b120c097cf79f.jpg", "http://yanxuan.nosdn.127.net/1ac969778e969025f49b8f5277208c1b.jpg", "http://yanxuan.nosdn.127.net/c8ce3fb3642c7f30b65d184757c8d9da.jpg", "http://yanxuan.nosdn.127.net/00a35e419a8f18910b1b1ee7c6e959b9.jpg", "http://yanxuan.nosdn.127.net/1734a688af89da4b6b85b1a28f647c95.jpg", "http://yanxuan.nosdn.127.net/d3447a014f03d2497820da1961dd5677.jpg", "http://yanxuan.nosdn.127.net/dc00d27c34906fcf6660ffe92e061139.jpg", "http://yanxuan.nosdn.127.net/351d2f82ad39e224658645c4f6cc4e55.jpg", "http://yanxuan.nosdn.127.net/50e40e3ca3dd0f937a11127a1769baf2.jpg", "http://yanxuan.nosdn.127.net/afa2972fd4b02c6f8fe8b3cfa450b4ea.jpg", "http://yanxuan.nosdn.127.net/baab1f1388c30c3865cb54b1b62f236d.jpg", "http://yanxuan.nosdn.127.net/9230589d08130306c20975feed1c037c.jpg", "http://yanxuan.nosdn.127.net/cadfef7285c08eded93c2580dffb1da0.jpg", "http://yanxuan.nosdn.127.net/49a9af3a43004ea64803a236a1cecfbc.jpg", "http://yanxuan.nosdn.127.net/ec9acb15fed0ba6999b4d935e0f7d741.jpg", "http://yanxuan.nosdn.127.net/9d4133e5971c39bfaa46dafa4cc44984.jpg", "http://yanxuan.nosdn.127.net/c3573f285aba429a2ad8b7906541ee97.jpg", "http://yanxuan.nosdn.127.net/015f36cac6202af7e9c83e44e3128109.jpg", "http://yanxuan.nosdn.127.net/646847ae36d8f2597c06e74913858f4b.jpg", "http://yanxuan.nosdn.127.net/581adee870324a0db704e5e286515030.jpg", "http://yanxuan.nosdn.127.net/97da8649cd44c0b2a3f6e6f4457317b1.jpg", "http://yanxuan.nosdn.127.net/2049b7df9706b908a11c26579064e821.jpg", "http://yanxuan.nosdn.127.net/f5d7de8c4b8e2190ba6ba70a0aa310eb.jpg", "http://yanxuan.nosdn.127.net/fe54a77db1a0989b0e3580b05f369f04.jpg", "http://yanxuan.nosdn.127.net/0ddd3d3891cc9dd79331050bb530c479.jpg", "http://yanxuan.nosdn.127.net/bb58d50512c61c6d04932c0a7759e2c1.jpg", "http://yanxuan.nosdn.127.net/cc8ac13e888880f3a7956fa1b66ad148.jpg", "http://yanxuan.nosdn.127.net/ef194aa4a99db3284deab4b9b23f6525.jpg", "http://yanxuan.nosdn.127.net/ed25b346735838785f595411e9e4253c.jpg", "http://yanxuan.nosdn.127.net/980710fdfc19e5806f258ef56e1d8e34.jpg"],
		"inventory": [912, 21, 971, 770, 933, 687, 826, 790, 664, 702],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品（床笠款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品（床笠款）：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm1.5米床品（床单款）： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床品（床单款）：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22844-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "烟草绿/ 深茶褐/ 丁子灰/ 木兰黄/ 茶香粉"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 满赠,
		"manufacture": "MUJI制造商",
		"sale": 706,
		"date": "1500012273325",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1110007,
		"price": 219,
		"topName": "日式色织水洗棉格纹四件套 新款",
		"subName": "做旧微褶感，轻柔呵护棉",
		"shortDescription": ["水洗工艺", "褶皱透气", "活性染料", "不含甲醛", "色织工艺", "不易褪色"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/19c3ed12c4f48e2f8b45364df09a8f81.jpg", "http://yanxuan.nosdn.127.net/46bc6023a44895599ede7765c64ca08b.jpg", "http://yanxuan.nosdn.127.net/c004f7cac4432b27df300c1eceded25e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/deeb55bb45f94cb236a47d1264e883b8.png", "http://yanxuan.nosdn.127.net/02dc9714d67ac3aca20740e19b9a724a.jpg", "http://yanxuan.nosdn.127.net/38aaf23e7a2739e45dcdd5c50c6baa7e.jpg", "http://yanxuan.nosdn.127.net/0dfe050d6971180cb8cb1ea721b54e1d.jpg", "http://yanxuan.nosdn.127.net/51edc362a09630fd04030bcc16c2072d.jpg"],
		"types": ["松柏绿", "枯茶褐", "灰白", "石竹咖", "茶香粉"],
		"chara": "5色可选",
		"description": ["http://yanxuan.nosdn.127.net/70cb832eeb35c443d2b2ecb767f63ee5.jpg", "http://yanxuan.nosdn.127.net/2e96c30821d0cd262bf874c02cf79ba6.jpg", "http://yanxuan.nosdn.127.net/085a32475c6ec45840770d5cdde86a9e.jpg", "http://yanxuan.nosdn.127.net/4078bf8ca58b31637ca1fd6b5efb131e.jpg", "http://yanxuan.nosdn.127.net/9485d1121a64b8ea219108c9b42b5219.jpg", "http://yanxuan.nosdn.127.net/eacf868368220d3a17660ae660e8568d.jpg", "http://yanxuan.nosdn.127.net/513acc2e502afc97888be2f9fd62dfa1.jpg", "http://yanxuan.nosdn.127.net/d24a7cf81c26ef0edf42cbdf31693882.jpg", "http://yanxuan.nosdn.127.net/e9cb564e3c5d3ac31f1073d9f9fedc1b.jpg", "http://yanxuan.nosdn.127.net/1f2c7a0e6fc366e693ef92aa18287a6c.jpg", "http://yanxuan.nosdn.127.net/f000d3a7d86492983cc8ac393a20b801.jpg", "http://yanxuan.nosdn.127.net/bb8acd37cbf6fb5d0fd9f6a5b010a286.jpg", "http://yanxuan.nosdn.127.net/bec90d0413f85e0156c31dccda910e33.jpg", "http://yanxuan.nosdn.127.net/025868156b14fda40d5dde3a08a1a904.jpg", "http://yanxuan.nosdn.127.net/cebeb25f66630622b84fcaa8da3d2247.jpg", "http://yanxuan.nosdn.127.net/ba62c2b65ec9063025226702093f1312.jpg", "http://yanxuan.nosdn.127.net/b84216f554201b45616a316b75934b07.jpg", "http://yanxuan.nosdn.127.net/468bff84fb2ce0cfc1b7f8c25e0fc2f2.jpg", "http://yanxuan.nosdn.127.net/2871c79eb9aebcce99f04cfc538e47ac.jpg", "http://yanxuan.nosdn.127.net/2b7a9ed3109fe0318eba637013135b6c.jpg", "http://yanxuan.nosdn.127.net/715055a268e9e7cf929833b6bd810d3e.jpg", "http://yanxuan.nosdn.127.net/d95742fdf207ae04f3883cfbe8a580cd.jpg", "http://yanxuan.nosdn.127.net/6e68c613eb381d5bdbb391e1db38c911.jpg", "http://yanxuan.nosdn.127.net/8d6c509a91ca86f2aa6c034c90288243.jpg", "http://yanxuan.nosdn.127.net/f1be6827cd1e593599201c7eba9ba4d5.jpg", "http://yanxuan.nosdn.127.net/f053ec8acff9ef6f419dcc02d0f75e09.jpg", "http://yanxuan.nosdn.127.net/fa35c75d3f1eb160e267baab3838d6bf.jpg", "http://yanxuan.nosdn.127.net/11cebf3951e5d114fa7f5d4e8e23bc12.jpg", "http://yanxuan.nosdn.127.net/2805b2ad4d681d339aea33e2fbc8ba1e.jpg", "http://yanxuan.nosdn.127.net/9970ed49b3e0b629800aa5562af37dc9.jpg", "http://yanxuan.nosdn.127.net/0c25ba871d406424eeb17f1b7a56cb5d.jpg", "http://yanxuan.nosdn.127.net/2cd9cf1d75caee6678966c2c34b6150b.jpg", "http://yanxuan.nosdn.127.net/0bff5ea595d73f659de6160d0a0424b2.jpg", "http://yanxuan.nosdn.127.net/79be432f49fcfbe41f454b896da5b94c.jpg", "http://yanxuan.nosdn.127.net/6980abb2aa63f5287b98164abc471c38.jpg", "http://yanxuan.nosdn.127.net/af09f3ef628085edccfe0b407662aac1.jpg", "http://yanxuan.nosdn.127.net/647427f629f397e6907c34f4cba14e86.jpg", "http://yanxuan.nosdn.127.net/fc2c724283219a20b86252a99162438d.jpg", "http://yanxuan.nosdn.127.net/487f0d43526a87646307b1c609f7d975.jpg", "http://yanxuan.nosdn.127.net/1e8810dcc2e53c61921a1dce94dcc1b5.jpg", "http://yanxuan.nosdn.127.net/eb6af3c7f6800a98a96f61756b0c2e8e.jpg", "http://yanxuan.nosdn.127.net/53e0eaeaafad8977881203e255e06fc8.jpg", "http://yanxuan.nosdn.127.net/8101cdd0a6a3aa6f6125cfb224c634a3.jpg", "http://yanxuan.nosdn.127.net/e0b6a115abad9a966ea0a1b66550d1b6.jpg", "http://yanxuan.nosdn.127.net/ce68a79f49e0f2598d36ebf2086a7456.jpg", "http://yanxuan.nosdn.127.net/63f9637ba03c0112c33fc2bc5c5016bc.jpg", "http://yanxuan.nosdn.127.net/853bf3ab67f98995fde3e8786cdf3d2f.jpg"],
		"inventory": [989, 178, 406, 751, 379],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "印染工艺",
			"attrValue": "色织工艺"
		}, {
			"attrName": "颜色",
			"attrValue": "松柏绿/ 枯茶褐/ 灰白/ 石竹咖/ 茶香粉"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 满赠,
		"manufacture": "MUJI制造商",
		"sale": 994,
		"date": "1500012275935",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1115028,
		"price": 299,
		"topName": "日式色织水洗棉条纹四件套",
		"subName": "纯棉水洗感，柔软吸汗",
		"shortDescription": ["水洗工艺", "褶皱透气", "活性染料", "不含甲醛", "色织工艺", "不易褪色"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/61b478844f2d6b2ac3854b8fea766ce3.jpg", "http://yanxuan.nosdn.127.net/7404b4fb3715395843850e9907d25481.jpg", "http://yanxuan.nosdn.127.net/a8e15b7411c97a1d8e15bcc50ac97c15.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3d0045e8f43439c7004fae052b2162ed.png", "http://yanxuan.nosdn.127.net/dcc215390ba15aa8673c5cc4c56b6fae.jpg", "http://yanxuan.nosdn.127.net/aa8d17bcd7c0d5fa18b5b862a3484948.jpg", "http://yanxuan.nosdn.127.net/c99a4ecf10ca320714b437b40a68c82c.jpg", "http://yanxuan.nosdn.127.net/a020bf35bfa7c1b6dc75ea790c07b3d0.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/c7a4904d00fec84dcb8d024acf9c9124.jpg", "http://yanxuan.nosdn.127.net/1ca8260a0e668703f99b76d2b5febe39.jpg", "http://yanxuan.nosdn.127.net/1a8001ac179af2b6a9710754ab3be0a6.jpg", "http://yanxuan.nosdn.127.net/4565564e3359df7c1bfa3ad75d482fff.jpg", "http://yanxuan.nosdn.127.net/dd7ace2c6a2c4324ef5e1f9355e89268.jpg", "http://yanxuan.nosdn.127.net/cb9241fa90a48c6f9820785c728d2bff.jpg", "http://yanxuan.nosdn.127.net/8fae72fff469beacc683209a4514a41f.jpg", "http://yanxuan.nosdn.127.net/395d99acde8e480bde8dc765ac1eb580.jpg", "http://yanxuan.nosdn.127.net/3f5a5bc28c4db2fffc72228668a09534.jpg", "http://yanxuan.nosdn.127.net/849c44ecb9149dbe4186fd2a7176c2b8.jpg", "http://yanxuan.nosdn.127.net/85c02b7f73716798a07078ca99a84dcc.jpg", "http://yanxuan.nosdn.127.net/02e8ed22c5110a71db1bbe3ea911246d.jpg", "http://yanxuan.nosdn.127.net/3d668a817a0c0fbf2c550fb2732e3278.jpg", "http://yanxuan.nosdn.127.net/7504ed0982387d5837de6f146aeae2a6.jpg", "http://yanxuan.nosdn.127.net/5825013e93079cd9389a1a85db9ea986.jpg", "http://yanxuan.nosdn.127.net/c9895d59d2ce2c2f05b7d7d342edf8b0.jpg", "http://yanxuan.nosdn.127.net/85c29c4c8fb2db231665bcbf2322671d.jpg", "http://yanxuan.nosdn.127.net/57615e82ddcb6f5b4eb1239d3948d8fd.jpg", "http://yanxuan.nosdn.127.net/518b4a422d10e1075a76bb79232391e6.jpg", "http://yanxuan.nosdn.127.net/d5928965b398160fdfef1a1a826bac75.jpg", "http://yanxuan.nosdn.127.net/6271c3f5120f19b42bb913e6945cbf95.jpg", "http://yanxuan.nosdn.127.net/674aee6d3a58fb51551f6766689bc7ab.jpg", "http://yanxuan.nosdn.127.net/29f78e78e62742cff9b760a9b97e4347.jpg", "http://yanxuan.nosdn.127.net/755ac0784730b54dc44fc2a3fc97d941.jpg", "http://yanxuan.nosdn.127.net/b0cd4cc9a627be11362be64fa4bcbf06.jpg", "http://yanxuan.nosdn.127.net/3205cd14570da7022b1943da198763f0.jpg", "http://yanxuan.nosdn.127.net/f263b42fc5808f4de777410befd094cb.jpg", "http://yanxuan.nosdn.127.net/93d0a8bea9bd2f52941628dff09ef381.jpg", "http://yanxuan.nosdn.127.net/97e43d6548d7215956380ffd0c5a1810.jpg", "http://yanxuan.nosdn.127.net/e3e8b023e2dbf472c8889456c00cf9be.jpg", "http://yanxuan.nosdn.127.net/158be4bab49629d527bd8e27e55c77d1.jpg", "http://yanxuan.nosdn.127.net/4d345c8615953a60a424e5a47c0cd16a.jpg", "http://yanxuan.nosdn.127.net/ff89423e056191c2d4a12196b900d7f7.jpg", "http://yanxuan.nosdn.127.net/e953286fce6c89f74ce7150f2f478d64.jpg", "http://yanxuan.nosdn.127.net/ff0d95c718fe73cd66dff1de8a43d7a6.jpg", "http://yanxuan.nosdn.127.net/c2009a46185b6bd5463528971ef2c2af.jpg", "http://yanxuan.nosdn.127.net/f08bae55ef68af811f57ff105ec5ec3f.jpg", "http://yanxuan.nosdn.127.net/84ac737dabdb85482f2ce39df119c753.jpg", "http://yanxuan.nosdn.127.net/fc95259418359a519d7f604af79d6f19.jpg", "http://yanxuan.nosdn.127.net/9b673c4829dceec9488b5bddacc3ae7c.jpg", "http://yanxuan.nosdn.127.net/da72e531c1bc3bba73d61456396dcaba.jpg", "http://yanxuan.nosdn.127.net/10e489150f5b12c3fed27560df0cb391.jpg", "http://yanxuan.nosdn.127.net/fc42020bc2b630c1be212b734bf70e53.jpg", "http://yanxuan.nosdn.127.net/f27be3e26b925f26d81e5f90b12cd1cf.jpg", "http://yanxuan.nosdn.127.net/33e9cfb394b44658be3ab3fbae977638.jpg", "http://yanxuan.nosdn.127.net/008e03c492bf5b1cf9a3b94c525e3920.jpg", "http://yanxuan.nosdn.127.net/e4bc8cbbb6b937bb0b122649a4560e1c.jpg", "http://yanxuan.nosdn.127.net/dbee4d90772a3e0c40811de3fd2cfdea.jpg"],
		"inventory": [192, 191],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床品： 被套 200*230cm/ 枕套：48*74cm*2/ 床笠：150*200*28cm1.8米床品：被套 220*240cm/ 枕套：48*74cm*2/ 床笠：180*200*28cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "印染工艺",
			"attrValue": "色织工艺"
		}, {
			"attrName": "颜色",
			"attrValue": "黑茶条纹/ 若绿条纹/ 缥蓝条纹/ 素麻条纹"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 满赠,
		"manufacture": "MUJI制造商",
		"sale": 286,
		"date": "1500012278837",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1231001,
		"price": 359,
		"topName": "黑凤梨 300根全棉火烈鸟印花四件套",
		"subName": "细腻长绒棉，亲肤舒适",
		"shortDescription": ["长绒棉材", "柔软亲肤", "高支高密", "柔韧细腻", "活性印染", "健康固色"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/bae0e4a3aa952dec06ad3c2ca5871957.jpg", "http://yanxuan.nosdn.127.net/7f12aef5bb715b874e06e419f3e777a3.jpg", "http://yanxuan.nosdn.127.net/8af5591f52bb3e058134d996aac84346.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9b8d0fdfb1fc59c5a0f58e889147021b.png", "http://yanxuan.nosdn.127.net/b6af444c47b064bdb7a5456ee6a43a35.jpg", "http://yanxuan.nosdn.127.net/df7fefe199a273fdc81c547f6883a359.jpg", "http://yanxuan.nosdn.127.net/7eec4331ea16a52442fb09e497778414.jpg", "http://yanxuan.nosdn.127.net/d69fa70342f027d4b073a96a88c7d7b9.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/7174d03bb8f3e25b433cc7d6242f3359.jpg", "http://yanxuan.nosdn.127.net/cf486aceef3eddb1513c96ffe2f17c01.jpg", "http://yanxuan.nosdn.127.net/7f95400f2ab1df07cc20411dd72b0012.jpg", "http://yanxuan.nosdn.127.net/dc4bea81ca0edcbf103acb98cd1bfa69.jpg", "http://yanxuan.nosdn.127.net/82c2a89dd9e45029cd1284dad63b92dd.jpg", "http://yanxuan.nosdn.127.net/bbd52b4ac50b611f87ee306d8f992f3a.jpg", "http://yanxuan.nosdn.127.net/9c6edff6638a8246ffce3c102afd12d7.jpg", "http://yanxuan.nosdn.127.net/80225e46049610f52f046f88f6e6a557.jpg", "http://yanxuan.nosdn.127.net/588a74c7242a6a7a73724b0e9ca30417.jpg", "http://yanxuan.nosdn.127.net/0e89c65fb3cfbbe47239a3c9fa44acd8.jpg", "http://yanxuan.nosdn.127.net/85473784361ce9aeb5324aced4b4fed8.jpg", "http://yanxuan.nosdn.127.net/d7275f9d7ea715da8ded42267e4974c6.jpg", "http://yanxuan.nosdn.127.net/a55b63dd5a37b6aa0979954c9c062e9e.jpg", "http://yanxuan.nosdn.127.net/28563b9ed34b2e293a775beb72c58619.jpg", "http://yanxuan.nosdn.127.net/e4e0b98306d7cb08dd1a2175db295e91.jpg", "http://yanxuan.nosdn.127.net/0c05236b4c4db77ea196e10528f059ac.jpg", "http://yanxuan.nosdn.127.net/1ed32dc24cb7b9d9e2b172b5557a56a4.jpg", "http://yanxuan.nosdn.127.net/6de93d4fb5077a4053ee72dad51bd565.jpg", "http://yanxuan.nosdn.127.net/b5f807692f2a4955d3e720ba0dfcd9f2.jpg", "http://yanxuan.nosdn.127.net/8a124e68c5c0543f34e636a432057ab9.jpg", "http://yanxuan.nosdn.127.net/debe64784a6faa848926abd199aaa9ec.jpg", "http://yanxuan.nosdn.127.net/56891237ce43933fc02d7decacc3ba4a.jpg", "http://yanxuan.nosdn.127.net/faa949f909dfaaaec480a0f00cc1a14e.jpg", "http://yanxuan.nosdn.127.net/dc69d15df5fc544d39199689b06a4545.jpg", "http://yanxuan.nosdn.127.net/75e850fabff0d9b272113df24eae5f64.jpg", "http://yanxuan.nosdn.127.net/7c80e7ea18c91a6ec30bd41bbb00d4b8.jpg", "http://yanxuan.nosdn.127.net/c1991e6895fcdea8faf6e2ede625183d.jpg", "http://yanxuan.nosdn.127.net/e30fcede58a337ecc9c42a2b5156750b.jpg", "http://yanxuan.nosdn.127.net/374faa690df44f1f360cea89acb46753.jpg", "http://yanxuan.nosdn.127.net/93c6b677a3bf46aaeb728cdcc1c09620.jpg", "http://yanxuan.nosdn.127.net/1e3a53b81a01d0f0ce97b1adbf3eb15c.jpg", "http://yanxuan.nosdn.127.net/d0c41e0d3b81246c468620633bb236f8.jpg", "http://yanxuan.nosdn.127.net/762e0cf6ea11374b91b3e8caf74cf8ef.jpg", "http://yanxuan.nosdn.127.net/22c1f95da2c0bd7834f40235a4b6426c.jpg", "http://yanxuan.nosdn.127.net/6e6d5e3fe3ac688cd01bd3c30e2a9f31.jpg", "http://yanxuan.nosdn.127.net/14bddf3fb04c2aff83da77b43b09c2fd.jpg", "http://yanxuan.nosdn.127.net/ca92c4a34848c6bd42047a2e1f73fc4b.jpg", "http://yanxuan.nosdn.127.net/c33744297fffe015fa9ff01a1328dcaa.jpg", "http://yanxuan.nosdn.127.net/008dd36bd689a2fa70f8c19ba8bef9fd.jpg", "http://yanxuan.nosdn.127.net/e536608aa0b87c097885ffe7b47e2425.jpg", "http://yanxuan.nosdn.127.net/5c06e7d2c50a7a7714a016b8644d9da0.jpg", "http://yanxuan.nosdn.127.net/2e3c4a71393debab0d146ddcb47c3359.jpg", "http://yanxuan.nosdn.127.net/c0054b234062129f6fbb4f63b40b8a9d.jpg", "http://yanxuan.nosdn.127.net/8fe8df05cf8997aca77e27e180bf93be.jpg", "http://yanxuan.nosdn.127.net/3c93c707ecba26794edb891a7b76ef21.jpg", "http://yanxuan.nosdn.127.net/6d27c94d9429c828e1f6963675f530d0.jpg", "http://yanxuan.nosdn.127.net/7c6512d4139c8dacb6a14c70028fe88b.jpg", "http://yanxuan.nosdn.127.net/2a91926e91a811df60935a24da5904b1.jpg", "http://yanxuan.nosdn.127.net/e4c080a511520d709b2890fd74ff9599.jpg", "http://yanxuan.nosdn.127.net/decfa3947ad882ac9e841f0b0537ef9f.jpg", "http://yanxuan.nosdn.127.net/f620792b23964828bfbd39a9697529f9.jpg", "http://yanxuan.nosdn.127.net/757f5b27b4e2b234f0adcf604212e509.jpg", "http://yanxuan.nosdn.127.net/2cefc4aa7e425e85de2f313dec6baf95.jpg", "http://yanxuan.nosdn.127.net/3237fab2641709363fe82ca1687cf793.jpg", "http://yanxuan.nosdn.127.net/b99bfc3016bf9f3ffedc5e1e3f3584b4.jpg", "http://yanxuan.nosdn.127.net/94dcbd74f20fd7c74612b420229b7366.jpg", "http://yanxuan.nosdn.127.net/4d991b55952ae737f4214e6e97af8014.jpg", "http://yanxuan.nosdn.127.net/9ff62bd3237387541a2e94feea40eb96.jpg", "http://yanxuan.nosdn.127.net/5b7c8c7993ce6ddc8bbb74607cb7802d.jpg", "http://yanxuan.nosdn.127.net/d41a4bfc452e1661254259162cfa936e.jpg", "http://yanxuan.nosdn.127.net/98bc0588da0386c90f76fd19bbab5026.jpg", "http://yanxuan.nosdn.127.net/2f387876c659e64d279f1bf5996ab3c6.jpg", "http://yanxuan.nosdn.127.net/fbcfb181897c005341af32a0ffea914f.jpg", "http://yanxuan.nosdn.127.net/108fdfc5abfc7016350cbf6cd514c36c.jpg", "http://yanxuan.nosdn.127.net/c39f1ad52bdbcbe8f61b0bf3af5b6a36.jpg", "http://yanxuan.nosdn.127.net/73b62b4212bac0d98190eb31f73ae373.jpg", "http://yanxuan.nosdn.127.net/3f121583bcec3eaaf0eb6a3397e4955b.jpg", "http://yanxuan.nosdn.127.net/6e641d0ac5a37592c0c5b520ff6c61d6.jpg", "http://yanxuan.nosdn.127.net/b2403a83dc2596a0c70cbb87d52049b0.jpg", "http://yanxuan.nosdn.127.net/fed4d2d5d9d401afbbe3ff53b3c22ccf.jpg"],
		"inventory": [990, 235],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "材质",
			"attrValue": "100% 棉"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 994,
		"date": "1500012281463",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1152161,
		"price": 459,
		"topName": "竹语丝麻印花四件套",
		"subName": "3重透气，清爽柔滑",
		"shortDescription": ["长纤亚麻", "柔韧吸湿", "进口天丝", "透气润肤", "天然竹醌", "抑菌健康"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ba0d88a73597c8ce362efac34dea7942.jpg", "http://yanxuan.nosdn.127.net/a43183508cb18439d5300ab33466458c.jpg", "http://yanxuan.nosdn.127.net/b7d69d60650dbc33be0e46e7a8e64d11.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/977401e75113f7c8334c4fb5b4bf6215.png", "http://yanxuan.nosdn.127.net/38a0b23950b79611fb565bae14351a11.jpg", "http://yanxuan.nosdn.127.net/810555afa6919c766a33422edefb1bc8.jpg", "http://yanxuan.nosdn.127.net/b97b54e854660fedabc4dd07d3215216.jpg", "http://yanxuan.nosdn.127.net/79200063ab5893cf3fdd16f428e4d505.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/cf116e8989e4b81e0d50c5f319bc106f.jpg", "http://yanxuan.nosdn.127.net/93fbbfff577742915b3d0d7642656bf7.jpg", "http://yanxuan.nosdn.127.net/c40d9809465f1c1941021f564052d60f.jpg", "http://yanxuan.nosdn.127.net/933ae73c978ed874b2e5cd7ce909f962.jpg", "http://yanxuan.nosdn.127.net/cb256d888a121c2b71804c7da607b97b.jpg", "http://yanxuan.nosdn.127.net/4be4e62c7b44f25c1a618447aa5dbacf.jpg", "http://yanxuan.nosdn.127.net/b6fa8de210f4f309a407e61915cf6a37.jpg", "http://yanxuan.nosdn.127.net/fe8b40624ae2c42c07a5ee9c2d75c8d1.jpg", "http://yanxuan.nosdn.127.net/46864e53b8d9fc4dee333e237d4a1574.jpg", "http://yanxuan.nosdn.127.net/22b672c95a602f962ac3bf80bfe78c15.jpg", "http://yanxuan.nosdn.127.net/8dff21e77d809012d2542e144027dce1.jpg", "http://yanxuan.nosdn.127.net/c52320c2b0c0a345eebce48a306feb77.jpg", "http://yanxuan.nosdn.127.net/3804f056b176a9d6155b59d031ca6132.jpg", "http://yanxuan.nosdn.127.net/c25dc6d4a97dd48eb79099ccb1cc9e0e.jpg", "http://yanxuan.nosdn.127.net/ca65e2860c3cf07fa8eab69da1b52660.jpg", "http://yanxuan.nosdn.127.net/63bf368c5085f50fc615d9c4a59862ab.jpg", "http://yanxuan.nosdn.127.net/4204c63b17ec1fac9bcb91e10ccd1ad0.jpg", "http://yanxuan.nosdn.127.net/7ab56f66b90797f611eda19493579770.jpg", "http://yanxuan.nosdn.127.net/8af577bad4fc49a0c19746018daa3471.jpg", "http://yanxuan.nosdn.127.net/0ba321a17808e3bda5e80737d06d2ac0.jpg", "http://yanxuan.nosdn.127.net/40370cc37a778e51496be60aca486414.jpg", "http://yanxuan.nosdn.127.net/0dab164aa1ca90730899481e0c753195.jpg", "http://yanxuan.nosdn.127.net/329548b43585798b6f1bd9b7cd93a0c0.jpg", "http://yanxuan.nosdn.127.net/017f407ea546506b58221c477a2a8682.jpg", "http://yanxuan.nosdn.127.net/80ce79453e0eb915b3dfe9b7d638b410.jpg", "http://yanxuan.nosdn.127.net/d7cec1d667293cb179e67cd965d208df.jpg", "http://yanxuan.nosdn.127.net/cb29ca1498bd8ff9e36bcb99593f2485.jpg", "http://yanxuan.nosdn.127.net/ca0d32927d292e14e2992c63627e1181.jpg", "http://yanxuan.nosdn.127.net/d56d749cbf18eb121f3a4040a3ef334f.jpg", "http://yanxuan.nosdn.127.net/61f7e94e631a446f6a683d9256304fd6.jpg", "http://yanxuan.nosdn.127.net/e1f0cae229da25b32a5ddf9a6472379c.jpg", "http://yanxuan.nosdn.127.net/7a8c42109a307ee65b6de0f66d9e4e3f.jpg", "http://yanxuan.nosdn.127.net/3427a0dbb683d88e86b4b1864c767b84.jpg", "http://yanxuan.nosdn.127.net/4bd66cfacfda8467e491bcbb44e22906.jpg", "http://yanxuan.nosdn.127.net/979f9dcf65ce2b91f7b801f39db9b534.jpg", "http://yanxuan.nosdn.127.net/8043490f0853723691db7ba64cff86c6.jpg", "http://yanxuan.nosdn.127.net/30ef0f46fcc6a175836332e76f758cc5.jpg", "http://yanxuan.nosdn.127.net/ffd0c62f0c485cc78de05a6b22a7156e.jpg", "http://yanxuan.nosdn.127.net/a422ce5a7a147175adbda6d2549cef6b.jpg", "http://yanxuan.nosdn.127.net/882556a9ac3b06b518b61c166a8d7f1e.jpg", "http://yanxuan.nosdn.127.net/06aab3c72d4372656a9f1b2e513cb7fd.jpg", "http://yanxuan.nosdn.127.net/685e4a2fa3481ea948bef5681e52215a.jpg", "http://yanxuan.nosdn.127.net/e3674d2936668967d8b1f97288e66de9.jpg", "http://yanxuan.nosdn.127.net/eb1f199f0270941fe64e82340042ead1.jpg", "http://yanxuan.nosdn.127.net/f82cde4430eb4d1bdfb07db04af0e734.jpg", "http://yanxuan.nosdn.127.net/f39325963c794851d1f12d6383ecdeab.jpg", "http://yanxuan.nosdn.127.net/7baee43f0c04e3429f9dc30699624c9a.jpg", "http://yanxuan.nosdn.127.net/2543913123e578347f09cd3f389c05f4.jpg", "http://yanxuan.nosdn.127.net/c1c4bccb5cd4ce28be27f3dcdf0055f2.jpg", "http://yanxuan.nosdn.127.net/757da5724cac81a0ec5cafe3271930fc.jpg", "http://yanxuan.nosdn.127.net/442b6ff5b416611ee61f989c4dc4d3a1.jpg", "http://yanxuan.nosdn.127.net/082e748775f644b758d3de6526e97844.jpg", "http://yanxuan.nosdn.127.net/56fb598a9440324c73745b08715cca3b.jpg", "http://yanxuan.nosdn.127.net/598fd4ff9a9c1915c9a0f1c3534316d4.jpg", "http://yanxuan.nosdn.127.net/3d847d0a56e444b0e1cb36c26922b884.jpg", "http://yanxuan.nosdn.127.net/682c7151cad3e694497adfc12cb1e1da.jpg", "http://yanxuan.nosdn.127.net/1ed414f70dcf49f91ceb1e2cbc2f5542.jpg", "http://yanxuan.nosdn.127.net/3609fa8d28d06e40d1886eb1ac0704cc.jpg", "http://yanxuan.nosdn.127.net/725aa2568d0f7143f2fbfa101e84447f.jpg", "http://yanxuan.nosdn.127.net/5384db578319addff7edb303be9b1fed.jpg", "http://yanxuan.nosdn.127.net/ca32f04d1d59020beff80d16ce372825.jpg", "http://yanxuan.nosdn.127.net/3e3782425ceddc455c2ffe74039f00d6.jpg", "http://yanxuan.nosdn.127.net/ac06284b83b3b21a5dffe7614847c6cb.jpg", "http://yanxuan.nosdn.127.net/f5b98c459b62f8fbbf7be27bb9521d16.jpg", "http://yanxuan.nosdn.127.net/1f5f77de250035f7975183dc67b8f09a.jpg", "http://yanxuan.nosdn.127.net/086452250325756475c68cb7e93c9d7b.jpg"],
		"inventory": [417, 229],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 694,
		"date": "1500012284255",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1135001,
		"price": 459,
		"topName": "印象森林全棉贡缎四件套",
		"subName": "细腻长绒棉的柔滑",
		"shortDescription": ["长绒棉材", "柔软亲肤", "深海因子", "抑菌保湿", "活性印染", "健康不褪"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/6422f28c5f3416f046956e779ef39e06.jpg", "http://yanxuan.nosdn.127.net/e3d2466eff74347b1b8e334693916a11.jpg", "http://yanxuan.nosdn.127.net/4caab4ed9b37af1bed5e539eb36143d1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f82ee85933d6f0cc95382215281d3526.png", "http://yanxuan.nosdn.127.net/ff010423d0808d21f45a052378833c8b.jpg", "http://yanxuan.nosdn.127.net/d1eb900e90832c246c60c4cca13ccea5.jpg", "http://yanxuan.nosdn.127.net/7554ea2b1723eb3b521b9825c3c35d52.jpg", "http://yanxuan.nosdn.127.net/39695757fe860202cf2455614576adf4.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/4702fbacb2b1d1019ab1ee6cbb95c923.jpg", "http://yanxuan.nosdn.127.net/755c5eefe4c7354b6c57802209d86497.jpg", "http://yanxuan.nosdn.127.net/2edd5105353296066b11cb66f85c69c2.jpg", "http://yanxuan.nosdn.127.net/a9d9231605ac183f0ec9f46de4904c2d.jpg", "http://yanxuan.nosdn.127.net/66fb02009633c24b2566dbd723f38a94.jpg", "http://yanxuan.nosdn.127.net/c75472036d5bd792901673006c5880c2.jpg", "http://yanxuan.nosdn.127.net/60181b7a9a5d691b9b53d810fad53ffb.jpg", "http://yanxuan.nosdn.127.net/cc6de6986c6632858d46a16dfcc27f46.jpg", "http://yanxuan.nosdn.127.net/1795a9d8aa65e3068081e561f28a61e4.jpg", "http://yanxuan.nosdn.127.net/fa915eb82a90aba1900a2b54b34a0231.jpg", "http://yanxuan.nosdn.127.net/cb6720be5400b0769a80ddf087ae570d.jpg", "http://yanxuan.nosdn.127.net/58b2ee6d2e1c5dc9c7cba6fbe1aefabf.jpg", "http://yanxuan.nosdn.127.net/a0570931eb6f6bc853a55a5c71bb6970.jpg", "http://yanxuan.nosdn.127.net/ae577143f6940c288373117b5d52be63.jpg", "http://yanxuan.nosdn.127.net/993e135b0e5912b7d92d24d1d2471548.jpg", "http://yanxuan.nosdn.127.net/06aba6cf747a4edbbd17b046fa428258.jpg", "http://yanxuan.nosdn.127.net/d4be908f358aa8001bca227c85c28df5.jpg", "http://yanxuan.nosdn.127.net/7dd8d4d678139989ccbb246b519c581e.jpg", "http://yanxuan.nosdn.127.net/55c9acc8f5d5dc957b99b46ccbcbdcfb.jpg", "http://yanxuan.nosdn.127.net/b89e9829024cf72181c57b1a85cf0e81.jpg", "http://yanxuan.nosdn.127.net/40e2d5c6f0b661ae1647930ee6aed691.jpg", "http://yanxuan.nosdn.127.net/023aecf5d7a57b8a58915123991b1f2d.jpg", "http://yanxuan.nosdn.127.net/21ed6575668dbc20157452aa976b5a8f.jpg", "http://yanxuan.nosdn.127.net/751e860ff17939b02045c1cc0292f389.jpg", "http://yanxuan.nosdn.127.net/6bbf6beda850f79e1316bb2e0457820c.jpg", "http://yanxuan.nosdn.127.net/865833614c02682bfe4274e4b2b66540.jpg", "http://yanxuan.nosdn.127.net/ba51ed4bbd544ddf90f044715843d6f3.jpg", "http://yanxuan.nosdn.127.net/76c9e44a282dc10144dc3a0b63e557df.jpg", "http://yanxuan.nosdn.127.net/0ea6bfbc62166a5de4d30c2a87020a28.jpg", "http://yanxuan.nosdn.127.net/3b878651917c2bbd381841fdbc3ac116.jpg", "http://yanxuan.nosdn.127.net/8fc20f1ef144dc65c267a579864fca8e.jpg", "http://yanxuan.nosdn.127.net/7f9584b53c9219c5b643113a4dca04e5.jpg", "http://yanxuan.nosdn.127.net/c13d27e2a506c3f09a0f00dfc5e0700c.jpg", "http://yanxuan.nosdn.127.net/2c624fc248efc08f147663c9c082638e.jpg", "http://yanxuan.nosdn.127.net/41525d1e058cc0a995a3c72c29fabe40.jpg", "http://yanxuan.nosdn.127.net/20aa7be89f9509e429ba937513f0a9da.jpg", "http://yanxuan.nosdn.127.net/0a0a751ff157ba0737615debb2350c4e.jpg", "http://yanxuan.nosdn.127.net/284b656dd79635024be2a617ccdbb0d2.jpg", "http://yanxuan.nosdn.127.net/1f8c4b7213a0d6f573371c1d8a451cad.jpg", "http://yanxuan.nosdn.127.net/3cdaa6b699e185b1cc5fc298e71988a0.jpg", "http://yanxuan.nosdn.127.net/48f805ec011110caf42a6bcdb7a20212.jpg", "http://yanxuan.nosdn.127.net/d036a9dde26520900f8c4c6f3c2a099b.jpg", "http://yanxuan.nosdn.127.net/51219315766813126ef28e0efead56fa.jpg", "http://yanxuan.nosdn.127.net/e9265a6928043835fbbbaf390181d0b2.jpg", "http://yanxuan.nosdn.127.net/d2110635a0148a28d13031a9a98f5841.jpg", "http://yanxuan.nosdn.127.net/e1ee70c2067fcd6912f4bd47b7d7d6a6.jpg", "http://yanxuan.nosdn.127.net/50e8f767a43bd1b664829f731223cf7c.jpg", "http://yanxuan.nosdn.127.net/d42941b2a2af951b26b043ca599637f3.jpg", "http://yanxuan.nosdn.127.net/bf24a9f35948cae69acc693c8756d302.jpg", "http://yanxuan.nosdn.127.net/79652c19d4d290b6fc87048ddaf5911a.jpg", "http://yanxuan.nosdn.127.net/e2b2a5a2a56d8ebcdf43da4ea31dedd6.jpg", "http://yanxuan.nosdn.127.net/6fe9ce1bd99aa9a1e6e011601fe96b63.jpg"],
		"inventory": [563, 956],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "草绿色"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 夏日特价,
		"manufacture": "",
		"sale": 827,
		"date": "1500012288900",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1127038,
		"price": 359,
		"topName": "黑凤梨 简约知性全棉四件套 星空蓝",
		"subName": "静谧深邃蓝 沉稳中充满张力",
		"shortDescription": ["220支", "细密柔韧", "长绒棉材", "柔软亲肤", "设计师款", "沉稳内敛"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fff6b70820664bc697f9da5eec68b237.jpg", "http://yanxuan.nosdn.127.net/a72d2e30f8ce7aa9e5cf884d4fcfde1f.jpg", "http://yanxuan.nosdn.127.net/7643eb173a5f828a3af635680a9b11d5.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/addc278cf9c301dd535791df2e03b2ea.png", "http://yanxuan.nosdn.127.net/ea16e3e56b5e59b1e9ed06794d1b2c40.jpg", "http://yanxuan.nosdn.127.net/41bd77e384f61ebc93d8233709ba13f1.jpg", "http://yanxuan.nosdn.127.net/baf5b87ba6a481defecdc5742c9ca515.jpg", "http://yanxuan.nosdn.127.net/e5a5058060355b4e4c2f653ab7fbadb7.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/5c82a1b4ce9a2d9842f266b9140e5645.jpg", "http://yanxuan.nosdn.127.net/bcfefdbf497e4bfaac26bada378d2be5.jpg", "http://yanxuan.nosdn.127.net/d21b1913e8bb5c4b91ad88b20903694b.jpg", "http://yanxuan.nosdn.127.net/f1ef86ca1086bbd15d48d95eaa78ebbf.jpg", "http://yanxuan.nosdn.127.net/1e1fa0ddd1265228dfeea9d306ee6066.jpg", "http://yanxuan.nosdn.127.net/b5978816e45334071a7aaa90e078025a.jpg", "http://yanxuan.nosdn.127.net/6b03de460ef206fac8e12a04942e257c.jpg", "http://yanxuan.nosdn.127.net/6e7bd0eafd9182ff1f82e6c7ffa76227.jpg", "http://yanxuan.nosdn.127.net/ace3e54d516133841027e780b1334255.jpg", "http://yanxuan.nosdn.127.net/0d1ac5e223128f5f1f4c57c19353e63b.jpg", "http://yanxuan.nosdn.127.net/6b74c98c18d6b199b296cdf653c335e8.jpg", "http://yanxuan.nosdn.127.net/cfa7047ceedf774ae522b0f418bf51e5.jpg", "http://yanxuan.nosdn.127.net/0ffc1ebbd6b80f6e0fd0be46f1b4393c.jpg", "http://yanxuan.nosdn.127.net/5d53dafb3878b4427a17c49ebbf148f8.jpg", "http://yanxuan.nosdn.127.net/30130e00f017eda314239776c403d7c3.jpg", "http://yanxuan.nosdn.127.net/077f4dcfaf057337d5158dd6b67ed860.jpg", "http://yanxuan.nosdn.127.net/d0f08466c4c80b499f39f520374446a9.jpg", "http://yanxuan.nosdn.127.net/5e452f2de174f11eb437edb415cc5766.jpg", "http://yanxuan.nosdn.127.net/a73b6de4f9e944d2e4bc7814b42c5d51.jpg", "http://yanxuan.nosdn.127.net/3788f648351993b635016be8529dfe1a.jpg", "http://yanxuan.nosdn.127.net/727ab434396f7b89c6e014e10071fc54.jpg", "http://yanxuan.nosdn.127.net/6232632ad41e3875962e3a9b3567b947.jpg", "http://yanxuan.nosdn.127.net/527e066f32e78813b9c0aaa5eda19cf8.jpg", "http://yanxuan.nosdn.127.net/fd6a1bbfc2800d7bfba20136685ef6e8.jpg", "http://yanxuan.nosdn.127.net/47fb0639b05697bad3b437a0bd18bdcd.jpg", "http://yanxuan.nosdn.127.net/51a58699211c36dd1012bbf96ee92e04.jpg", "http://yanxuan.nosdn.127.net/f7e2bb06e5760e61c1909b727f09d523.jpg", "http://yanxuan.nosdn.127.net/bd333ca6713a378d873ffa9ce4e6caee.jpg", "http://yanxuan.nosdn.127.net/58737ebbcf09686a3bff2feff9c16024.jpg", "http://yanxuan.nosdn.127.net/06dcb49cecd456f4ade2c5396f9d0f9d.jpg", "http://yanxuan.nosdn.127.net/862fd22efee174a5301404cc0e356b36.jpg", "http://yanxuan.nosdn.127.net/57f970e41c359fccb6aad1fbbb7e72ba.jpg", "http://yanxuan.nosdn.127.net/58c2e2559f77146613e12f685fc2395e.jpg", "http://yanxuan.nosdn.127.net/e6d3eb254812daa9803a65f597a109cc.jpg", "http://yanxuan.nosdn.127.net/75e5c31038514ff9358114bba02ae5e7.jpg", "http://yanxuan.nosdn.127.net/cf04aa0502a97b3bd4a0fb050a1b2da4.jpg", "http://yanxuan.nosdn.127.net/12adfd0a4cd4640217f5953a19497e07.jpg", "http://yanxuan.nosdn.127.net/ceeebb9635e4f7a93948b09bfbd9caae.jpg", "http://yanxuan.nosdn.127.net/b601290255e7f35825819e81c52646bd.jpg", "http://yanxuan.nosdn.127.net/cad9a41e5c29d5f41302737180a20a9a.jpg", "http://yanxuan.nosdn.127.net/185dfb41aae122835c666f05aeb3a8b5.jpg", "http://yanxuan.nosdn.127.net/ef6c37f4cf190085c272de4bdeca92e0.jpg", "http://yanxuan.nosdn.127.net/e08d0156f3ffd5c26ebffeb6de71ae23.jpg", "http://yanxuan.nosdn.127.net/0b6170fbe3ce9774759dd1983c41ff76.jpg", "http://yanxuan.nosdn.127.net/9f4b90b91c70c55d1c5a3b59f482e56a.jpg", "http://yanxuan.nosdn.127.net/5d34ef9ca199eeb3f87067782f53ce96.jpg", "http://yanxuan.nosdn.127.net/e242fcd30ef676497eb602e7386d7210.jpg", "http://yanxuan.nosdn.127.net/711659958c3b18dbd77d9f3abf3b2597.jpg", "http://yanxuan.nosdn.127.net/83408bf9ced8c2f995b18f4e31dd7631.jpg", "http://yanxuan.nosdn.127.net/0a5a53d36a612bc29a0b4fe982e700cf.jpg", "http://yanxuan.nosdn.127.net/c8aadd9ce52219c8e6d530ba9c92c5fd.jpg", "http://yanxuan.nosdn.127.net/2cd6741a6c6da38f39949c11648309fa.jpg", "http://yanxuan.nosdn.127.net/d91c3b1a95c7d0e84d1cf36b36fb8ee4.jpg", "http://yanxuan.nosdn.127.net/3f45fdf1834e55bef2c4c6bcfad0ba83.jpg", "http://yanxuan.nosdn.127.net/ace8e3c90bf76fb4abad20114d00ceb9.jpg", "http://yanxuan.nosdn.127.net/8692680b661b3e4fe9aca49516020a77.jpg", "http://yanxuan.nosdn.127.net/395d96e341c0fe7862a615aeb17ccad1.jpg", "http://yanxuan.nosdn.127.net/1e2d1d4beb3b84461815e472a4d6e418.jpg", "http://yanxuan.nosdn.127.net/f5617fd9bad6acbd97139c4b2aac7efe.jpg", "http://yanxuan.nosdn.127.net/3355adde60d6a1d993cf075308693d95.jpg", "http://yanxuan.nosdn.127.net/5a300ad7312e0e170158042a14f0b733.jpg"],
		"inventory": [49, 302],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "星空蓝"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 92,
		"date": "1500012292284",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1151013,
		"price": 359,
		"topName": "简约知性全棉四件套 胭脂粉",
		"subName": "清新灵动粉 谱写浪漫意趣",
		"shortDescription": ["长绒棉材", "柔软亲肤", "设计师款", "清新柔和", "220支", "细密柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/67d0d2d3e9a0d0ff1facf8cfcab30f6c.jpg", "http://yanxuan.nosdn.127.net/ba1cccf5d7612fc0417977ae1699903a.jpg", "http://yanxuan.nosdn.127.net/94cda54080c600513ffd317ca55a8751.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/73a8692048f58f15e823b636d7c3bb74.png", "http://yanxuan.nosdn.127.net/36995f44ed0f31a66d689f60b2cf6b9c.jpg", "http://yanxuan.nosdn.127.net/00f009599828ba02994cf1db7ce1bf06.jpg", "http://yanxuan.nosdn.127.net/381ba1d947afd3ca6180c503114ebb47.jpg", "http://yanxuan.nosdn.127.net/40a15ca9468f56e3a3743b1afb17a8b6.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/d6544642d064b59d0a16093064306075.jpg", "http://yanxuan.nosdn.127.net/10b209c033243d0122a0d08654516fe1.jpg", "http://yanxuan.nosdn.127.net/ecdba59b976d4026358d020d313a7356.jpg", "http://yanxuan.nosdn.127.net/1c02e90582caaccd9be1a5c88f7dc2ed.jpg", "http://yanxuan.nosdn.127.net/b260372c315957b52d49ddd72a079eea.jpg", "http://yanxuan.nosdn.127.net/7460e729f98978f5fd958ce043358a98.jpg", "http://yanxuan.nosdn.127.net/7b83c3a2cf875b261801bd8a3c5808d8.jpg", "http://yanxuan.nosdn.127.net/a21baed71cff280b2f4c9ebb71568488.jpg", "http://yanxuan.nosdn.127.net/ffe7204613d5538e8ce828432ec09913.jpg", "http://yanxuan.nosdn.127.net/d98f40594db8ce1878ab29481f74bffe.jpg", "http://yanxuan.nosdn.127.net/eaf57e27e9d16233cb58160449a6bd50.jpg", "http://yanxuan.nosdn.127.net/ac2cb0c00a823d630e557cf1ef5d02a6.jpg", "http://yanxuan.nosdn.127.net/f90aa292b1a60e94760b72b793014194.jpg", "http://yanxuan.nosdn.127.net/ca69118402a541371f3c4a23017e04df.jpg", "http://yanxuan.nosdn.127.net/826b111040d1e63249a6d229ace4f9c1.jpg", "http://yanxuan.nosdn.127.net/d7a8f883f698b4c906ff613007c6a17a.jpg", "http://yanxuan.nosdn.127.net/3ec9478b87667e61ed70b4043bb43aee.jpg", "http://yanxuan.nosdn.127.net/27cb5f494e1d19750dbd28c13e5f7b65.jpg", "http://yanxuan.nosdn.127.net/61866f57b583beca8f083210f469291c.jpg", "http://yanxuan.nosdn.127.net/8c994af6144abebfa535ad11628545bc.jpg", "http://yanxuan.nosdn.127.net/0be78c4a1f1c76ea3210cd3812866cd9.jpg", "http://yanxuan.nosdn.127.net/496ede67a61486227a0c4631cbe5112e.jpg", "http://yanxuan.nosdn.127.net/bd9d7e9ded941eb0ed41ab258fb4ef02.jpg", "http://yanxuan.nosdn.127.net/3af2b547d590850a7725cb89312e11bd.jpg", "http://yanxuan.nosdn.127.net/9a0d33a9ef3151b6548461db4e095d79.jpg", "http://yanxuan.nosdn.127.net/1e9ab7ed3f52e74791086d0f2c88c1aa.jpg", "http://yanxuan.nosdn.127.net/72245ad84f53f6f138c80005d1f7ac86.jpg", "http://yanxuan.nosdn.127.net/693f9cc8bbf412d33ef4f87687fe09b0.jpg", "http://yanxuan.nosdn.127.net/efc34f26f385192d59eb023399890ffd.jpg", "http://yanxuan.nosdn.127.net/ed62f6274a033d6153efc88991214484.jpg", "http://yanxuan.nosdn.127.net/34d59d584a4a8c6fcd156f07c1f2e4ba.jpg", "http://yanxuan.nosdn.127.net/cf9df6cc1744a3ddf23dce32a8fe758c.jpg", "http://yanxuan.nosdn.127.net/411038ebae02b7e899713bb600bffb92.jpg", "http://yanxuan.nosdn.127.net/bcb52ad859856f0c80b9bdec4aa29f2d.jpg", "http://yanxuan.nosdn.127.net/ade70fae1a6894c7f8897478e41da3a0.jpg", "http://yanxuan.nosdn.127.net/e4d8c628742f041d6aacb736d6e122fb.jpg", "http://yanxuan.nosdn.127.net/890532252573ffb8ab6ee7005c88812b.jpg", "http://yanxuan.nosdn.127.net/107806b823f0126ffe486ed2332849d1.jpg", "http://yanxuan.nosdn.127.net/884f0400541572d836200188634cc12c.jpg", "http://yanxuan.nosdn.127.net/117ee3ba12f133b0d14412a60571c4d0.jpg", "http://yanxuan.nosdn.127.net/0780db4cb5ba5d4ce464289c9c51e551.jpg", "http://yanxuan.nosdn.127.net/5f0b4d36bbfbb00ad37a2d5760a0a275.jpg", "http://yanxuan.nosdn.127.net/bd8adc0d356a780e3948625dd93b3404.jpg", "http://yanxuan.nosdn.127.net/3c6c92bc3c08f692a86a1028777cd70f.jpg", "http://yanxuan.nosdn.127.net/a1ed97000ddaa2c94e22e4770a67c2c8.jpg", "http://yanxuan.nosdn.127.net/89f27d26c9c3b6473cf4da736a2b48ad.jpg", "http://yanxuan.nosdn.127.net/c3cf686c6b1e4c7aa75f91b71659feb4.jpg", "http://yanxuan.nosdn.127.net/bea4230158f1eb3cbf59a9c6df2e451b.jpg", "http://yanxuan.nosdn.127.net/d9218090d23fc8c74713de9ecb17b76b.jpg", "http://yanxuan.nosdn.127.net/c93d59df72c0fb9a38f8fd9a7a159e1b.jpg", "http://yanxuan.nosdn.127.net/d24584d02691832f0c9160e55ad6bd3d.jpg", "http://yanxuan.nosdn.127.net/7d73a590cf19bcadf073cf89cd9f21fd.jpg", "http://yanxuan.nosdn.127.net/6e06cc07d846fbd6a314e6845a8a722c.jpg", "http://yanxuan.nosdn.127.net/b88852a8de665870e4fd59aad0b2280c.jpg"],
		"inventory": [858, 697],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "胭脂粉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 875,
		"date": "1500012294927",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1151012,
		"price": 359,
		"topName": "简约知性全棉四件套 素雅灰",
		"subName": "素净优雅灰 彰显平和知性",
		"shortDescription": ["长绒棉材", "柔软亲肤", "设计师款", "沉稳内敛", "高支高密", "细密柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fc97a1278151523b61b971e27006e5aa.jpg", "http://yanxuan.nosdn.127.net/e4a700a48008702027d3436e5b87a2d6.jpg", "http://yanxuan.nosdn.127.net/caaccb257bf862604df89ef0afe93080.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/cb65635dbcef42b68ba21433f4948f5a.png", "http://yanxuan.nosdn.127.net/a0d154954426b63e3b52f772e94d67d3.jpg", "http://yanxuan.nosdn.127.net/f5d8ad0faa0259483f9449de25c75060.jpg", "http://yanxuan.nosdn.127.net/d22ce947923b8a0411c20f603bca30cb.jpg", "http://yanxuan.nosdn.127.net/f7fa2262219eab101a9ae4be2f8f9376.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/22b812da7dca97361b40aa96e81cc888.jpg", "http://yanxuan.nosdn.127.net/e36aff5bf628fd263767a204463ff886.jpg", "http://yanxuan.nosdn.127.net/ca854ced3282b74d91557b27aeb1fd6b.jpg", "http://yanxuan.nosdn.127.net/6c7a0be81b70367577f1e73ae65c5ab0.jpg", "http://yanxuan.nosdn.127.net/841c04848a1539e4410dd8b85716f164.jpg", "http://yanxuan.nosdn.127.net/a5fda1d7f117edb5f79e2730df10e834.jpg", "http://yanxuan.nosdn.127.net/5a79348c76f19c3d40eda77fa18c02e1.jpg", "http://yanxuan.nosdn.127.net/98325c35ebb3ac8d3f70c6029c11298c.jpg", "http://yanxuan.nosdn.127.net/b2ce12ff241eaef9cabda8a52399a293.jpg", "http://yanxuan.nosdn.127.net/4d650259ce6110cb11b0ec0d94ba6e1a.jpg", "http://yanxuan.nosdn.127.net/f3fd996afeb88689c99af8d77ce83ec1.jpg", "http://yanxuan.nosdn.127.net/823196c2a231fcc5cf935b25dfe2a79f.jpg", "http://yanxuan.nosdn.127.net/b38389192126c4c984e1ab6f684774ca.jpg", "http://yanxuan.nosdn.127.net/5deb581119cf457296927bab32257057.jpg", "http://yanxuan.nosdn.127.net/5957305e9660f58bb72484b7e6070aab.jpg", "http://yanxuan.nosdn.127.net/9d12bd0bd727852d5ca880f7125ade26.jpg", "http://yanxuan.nosdn.127.net/b79d56a55903858f6a356fbaee3a2dd7.jpg", "http://yanxuan.nosdn.127.net/0cd64b23754a7d992166e73b30837ad1.jpg", "http://yanxuan.nosdn.127.net/20d65ca8f1edf8fc0298991aa59913cf.jpg", "http://yanxuan.nosdn.127.net/35524cf9b68887afd1cf30b4938ca0c5.jpg", "http://yanxuan.nosdn.127.net/1e8885bbe79ffe39e4368f41149cf986.jpg", "http://yanxuan.nosdn.127.net/0d17a1679797ecd8dabfe5282a0206c2.jpg", "http://yanxuan.nosdn.127.net/a48049c6029bf32f88923a25b21460ae.jpg", "http://yanxuan.nosdn.127.net/3888e5201d789cd286a7dd328fd29371.jpg", "http://yanxuan.nosdn.127.net/f2137422baf040a7084d77b18c2fe1c1.jpg", "http://yanxuan.nosdn.127.net/7b5b91b4da409b1431b0eef63eb3038e.jpg", "http://yanxuan.nosdn.127.net/39f8df7f3b93b6c9b63f7f418cdcd78f.jpg", "http://yanxuan.nosdn.127.net/b96828bdccde8d8b56f5d1574f6f4b1a.jpg", "http://yanxuan.nosdn.127.net/e313d74ec293f40fe97b12dc189a03d9.jpg", "http://yanxuan.nosdn.127.net/4f1e5877dac306a9f1dab7ab30ebf5fd.jpg", "http://yanxuan.nosdn.127.net/00dc42047dc2374574c26efeeb17110a.jpg", "http://yanxuan.nosdn.127.net/9412d261ee5576f74d2be2b5acbc9e37.jpg", "http://yanxuan.nosdn.127.net/d1115ae6d8b672861dcc61007aa65f57.jpg", "http://yanxuan.nosdn.127.net/c38bc6b03fc8c0dee0c77c7dccce717e.jpg", "http://yanxuan.nosdn.127.net/d47729e2be12050e5543d25a211c3363.jpg", "http://yanxuan.nosdn.127.net/4540c62850a2e3c31b5ece17465cc579.jpg", "http://yanxuan.nosdn.127.net/ffea480abb4375dc2948b22f0211a4d8.jpg", "http://yanxuan.nosdn.127.net/20fdaa641b27197044e1e803e0b9ee06.jpg", "http://yanxuan.nosdn.127.net/1662355a190f5b850357250b506f88a6.jpg", "http://yanxuan.nosdn.127.net/6d1501046b469427df1b9f29aca69934.jpg", "http://yanxuan.nosdn.127.net/2904850c1eb778078909a971498ec669.jpg", "http://yanxuan.nosdn.127.net/37eb43cb6429ec8c0677f64108dda627.jpg", "http://yanxuan.nosdn.127.net/7103fcee303c117423a8b1e3fe56c7d9.jpg", "http://yanxuan.nosdn.127.net/d4c06ec49c9483be17adf3e61c22b97a.jpg", "http://yanxuan.nosdn.127.net/9b77eaeee7b84d199b2a0fa4b5935085.jpg", "http://yanxuan.nosdn.127.net/b30fa4346ed575a84bf51d108a9aebb5.jpg", "http://yanxuan.nosdn.127.net/822226fa01bdd7831aa9609803318655.jpg", "http://yanxuan.nosdn.127.net/5a3009a8210515f4fd9ee6bfbafd1b14.jpg", "http://yanxuan.nosdn.127.net/d99646284321dc0417652de95e6a1504.jpg", "http://yanxuan.nosdn.127.net/c01f65f02fcaf36ac3103663e260c7b4.jpg", "http://yanxuan.nosdn.127.net/9727a9eaf5f9a174a8c6d8406912a121.jpg", "http://yanxuan.nosdn.127.net/8222afa1b88bfa0b5d414ce4cb0bd82c.jpg", "http://yanxuan.nosdn.127.net/f52b8bdb0de1489f5f51c9ee10d18b85.jpg", "http://yanxuan.nosdn.127.net/3a74ade912297cfd24d259d9dc920e50.jpg"],
		"inventory": [956, 314],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "素雅灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 35,
		"date": "1500012298012",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1127039,
		"price": 399,
		"topName": "黑凤梨 清新趣粉全棉四件套 青粉拼接",
		"subName": "精梳长绒棉,亲肤舒适",
		"shortDescription": ["长绒棉材", "柔软亲肤", "设计师款", "清新撞色", "220支", "细密柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/2d9713f168bd0993ec4f467b8fc50c9c.jpg", "http://yanxuan.nosdn.127.net/5e8f84705654581bf41595bd7fc6edd0.jpg", "http://yanxuan.nosdn.127.net/34b5a79acb0b047e1445129e96300b79.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/be64df0a04ade4cfd75bf7d4e8509ecc.png", "http://yanxuan.nosdn.127.net/5da516d917bf7a02251ff40bd9a153c7.jpg", "http://yanxuan.nosdn.127.net/13c0996e62c82f00b0ba010d49447747.jpg", "http://yanxuan.nosdn.127.net/bd0c6fff729b4d4fa859441262d88c4c.jpg", "http://yanxuan.nosdn.127.net/0e8093d4a27ee7a1d0c81e3a82a49c27.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/ea9c58a78588182de43d8298924f77d2.jpg", "http://yanxuan.nosdn.127.net/4e866fef937a66944d07df3663994698.jpg", "http://yanxuan.nosdn.127.net/d22aa14dcdf2329d100661e3a22b30c2.jpg", "http://yanxuan.nosdn.127.net/76f752a3dc04e467069064281c4fec97.jpg", "http://yanxuan.nosdn.127.net/5d1d4634905c10ebeecb0f699f00946d.jpg", "http://yanxuan.nosdn.127.net/1b4aac1a0a13101cec79d7c58044c1ad.jpg", "http://yanxuan.nosdn.127.net/444142b175a39f6d3050c2154cb51256.jpg", "http://yanxuan.nosdn.127.net/19709aa7b20783feb7464e92c140cc54.jpg", "http://yanxuan.nosdn.127.net/e3d0b5923d927a06c7b5d24ee09058a1.jpg", "http://yanxuan.nosdn.127.net/b5beefd845d38881fecbcb01f7b6194d.jpg", "http://yanxuan.nosdn.127.net/2acc585aec686c053019f531dc44eca3.jpg", "http://yanxuan.nosdn.127.net/63890301c6483ad214f9a256e314151b.jpg", "http://yanxuan.nosdn.127.net/ec4181791f5bc62a8653899350306d55.jpg", "http://yanxuan.nosdn.127.net/50b3af498afa904b7db0dbae41984c69.jpg", "http://yanxuan.nosdn.127.net/4457ebc6c9726db04bac5ad8e72cfba4.jpg", "http://yanxuan.nosdn.127.net/bb4260353a3ef838fadf8bbf745f14f8.jpg", "http://yanxuan.nosdn.127.net/b7964ff85665424fec452e5d1b07dadf.jpg", "http://yanxuan.nosdn.127.net/0ea273aa456ef73bc939e22ce575da3c.jpg", "http://yanxuan.nosdn.127.net/b7ad4b8148ba757e016b206dda8538e9.jpg", "http://yanxuan.nosdn.127.net/c29ce75f3bc850190b8b619abbf192ff.jpg", "http://yanxuan.nosdn.127.net/8fb99b13b0f0dd72cb9a83102b92a83e.jpg", "http://yanxuan.nosdn.127.net/72cbd089ef4b49337e19c08d0baa60a6.jpg", "http://yanxuan.nosdn.127.net/7ee832a64ddcc022c9ffc02ac88dabdb.jpg", "http://yanxuan.nosdn.127.net/1db47a875ffdf12cfa1a12d4778e2986.jpg", "http://yanxuan.nosdn.127.net/b0dccdd7f06fa1f068af0cedfb48d88b.jpg", "http://yanxuan.nosdn.127.net/d3732af322505e19d629714fef1c515c.jpg", "http://yanxuan.nosdn.127.net/000ffed6b3cb68631f29a47a43d1e60b.jpg", "http://yanxuan.nosdn.127.net/d47aa6f45b84596e8a59979297b53847.jpg", "http://yanxuan.nosdn.127.net/36ab939a2a73cbeeab292be80ecf1fbd.jpg", "http://yanxuan.nosdn.127.net/d306643d1163717a583189a6d18ea770.jpg", "http://yanxuan.nosdn.127.net/438d15c4aca318ebf09bf8d1a18f8e52.jpg", "http://yanxuan.nosdn.127.net/9a151e519be770cc6222fef4e7498f86.jpg", "http://yanxuan.nosdn.127.net/f059901323cf6479a536e9747b8be37d.jpg", "http://yanxuan.nosdn.127.net/15510addfb22e59ac1a9abbc8e3e00da.jpg", "http://yanxuan.nosdn.127.net/b97fb8eb02ef5ec90ec64756303807b0.jpg", "http://yanxuan.nosdn.127.net/447b0e1917ae98a3c1f4f60cb5fb45a4.jpg", "http://yanxuan.nosdn.127.net/f67a8934fec97c35e12ce06f01836b88.jpg", "http://yanxuan.nosdn.127.net/a96e3c6087dd650a0b64d4cf75e33f58.jpg", "http://yanxuan.nosdn.127.net/bbdd8dae579b383e01fb2afa80252c50.jpg", "http://yanxuan.nosdn.127.net/98aae8bf23b32ee8d5460745beb64851.jpg", "http://yanxuan.nosdn.127.net/9cf80c9967cbf86c331c6ed895403711.jpg", "http://yanxuan.nosdn.127.net/6c240087cb32ddb3fed7affa19a2189a.jpg", "http://yanxuan.nosdn.127.net/6325c1b636ea30cf46311a94d8a14378.jpg", "http://yanxuan.nosdn.127.net/041a25fe5a6a94fb9c88d780c7ff4bdb.jpg", "http://yanxuan.nosdn.127.net/2f1d63f3a9c5cc3244765782beede7a0.jpg", "http://yanxuan.nosdn.127.net/2f5f4ba35d5895e46492bf19394a8231.jpg", "http://yanxuan.nosdn.127.net/4ba985907ab294a6173201c145821e2b.jpg", "http://yanxuan.nosdn.127.net/76d69759a305d9d3b4bdeec168802d51.jpg", "http://yanxuan.nosdn.127.net/f54e56c5c15edbfe25b57b32ce4feab1.jpg", "http://yanxuan.nosdn.127.net/d20ee561e963b2af417aae7d0ccb2784.jpg", "http://yanxuan.nosdn.127.net/6c9727307a9ca7a457094a0b6ef72f1d.jpg", "http://yanxuan.nosdn.127.net/712ec08c3e26ddb5a998bead08a0356f.jpg", "http://yanxuan.nosdn.127.net/ca7625e8fa9e46effb346cd588a5dc46.jpg", "http://yanxuan.nosdn.127.net/6dd264462b25bca2a26c583a61c487d1.jpg", "http://yanxuan.nosdn.127.net/907c86888a6203ff375c563e83c5009d.jpg", "http://yanxuan.nosdn.127.net/924c0f7351654c25e4b74a2ff1c346cc.jpg", "http://yanxuan.nosdn.127.net/5a830ed66d6e30bc447ab81fb9fc168d.jpg", "http://yanxuan.nosdn.127.net/a127a87bbde5485640252c75914b6769.jpg", "http://yanxuan.nosdn.127.net/ee695a3726217efbe168a5f777cbbd58.jpg", "http://yanxuan.nosdn.127.net/8eb9614b12f513e72d14dd149a13e3aa.jpg", "http://yanxuan.nosdn.127.net/97b13b5980de7a88bd13060857ce6003.jpg"],
		"inventory": [38, 35],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "青粉拼接"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 夏日特价,
		"manufacture": "",
		"sale": 316,
		"date": "1500012304856",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1155000,
		"price": 399,
		"topName": "清新趣粉全棉四件套 条纹绿格",
		"subName": "清新趣粉全棉四件套 青粉拼接",
		"shortDescription": ["长绒棉材", "柔软亲肤", "设计师款", "简约拼接", "220支", "细密柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1e42712c163ad0f019ec218f33c8a389.jpg", "http://yanxuan.nosdn.127.net/5124e7605b731e7eeff82dfb7a624b20.jpg", "http://yanxuan.nosdn.127.net/e6f2952f40b24e65f4faa87f231277a0.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d7d6ef1f1865991077384761b4521dce.png", "http://yanxuan.nosdn.127.net/517914d4f7d872b17a55e9c3864df717.jpg", "http://yanxuan.nosdn.127.net/6bdf224d6c0276a2737d6af775b6ed8a.jpg", "http://yanxuan.nosdn.127.net/6fa8774f6da6cc473ba3714aec95f6b6.jpg", "http://yanxuan.nosdn.127.net/2eca5d0f8a1ce61baf32311264cebdd1.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/162f14bce2afba3a484ce8fb5da1e58b.jpg", "http://yanxuan.nosdn.127.net/1f7942650759087591c5983b8833b0b0.jpg", "http://yanxuan.nosdn.127.net/7b2c61359c3323f426a0214d79f52e5d.jpg", "http://yanxuan.nosdn.127.net/4ef5a035b31b1dea51c0f9ad89df9af3.jpg", "http://yanxuan.nosdn.127.net/e78cd4ddd9bd39ab9a488fef9b5f7b3a.jpg", "http://yanxuan.nosdn.127.net/6cce2f34025ab487af8707ee4cf61373.jpg", "http://yanxuan.nosdn.127.net/248de06b79ddf1bc6e28a00ffbbb97d0.jpg", "http://yanxuan.nosdn.127.net/c2306432efd11b36979518c91f3dac76.jpg", "http://yanxuan.nosdn.127.net/d62be6560ff53b1fd6b8f83664965758.jpg", "http://yanxuan.nosdn.127.net/879123cb7355ce5aa2df371bf8821754.jpg", "http://yanxuan.nosdn.127.net/24bd066e91fe31da4c21fb6f13d0b944.jpg", "http://yanxuan.nosdn.127.net/9da18ea054a561a17c36e41d693bfdae.jpg", "http://yanxuan.nosdn.127.net/71873676e788a2d2aa5184f46cc0f30e.jpg", "http://yanxuan.nosdn.127.net/b3f9463598c55d2c55428b2eef8bf556.jpg", "http://yanxuan.nosdn.127.net/d1321c2db83e7485c67265427fa986bc.jpg", "http://yanxuan.nosdn.127.net/4cc8bc6028a45eddab15e21ebc7caef7.jpg", "http://yanxuan.nosdn.127.net/27453a8037edc367424e6432a3e5a59c.jpg", "http://yanxuan.nosdn.127.net/528ef8f963f9733d8cfd0f50556ae110.jpg", "http://yanxuan.nosdn.127.net/cb3c92fed21740cc6b5c5dc16fc60508.jpg", "http://yanxuan.nosdn.127.net/0dee0fd961eaffd7aa2bdaf62d2ab126.jpg", "http://yanxuan.nosdn.127.net/661e1cb14a801d03f28626196c00d14f.jpg", "http://yanxuan.nosdn.127.net/2b6a2f6a7f3a45039b0b7c572c2eeed8.jpg", "http://yanxuan.nosdn.127.net/e46db149caf4b825f4a90627e0db6a79.jpg", "http://yanxuan.nosdn.127.net/98673c4ff33fc8c55bf88945dbef364c.jpg", "http://yanxuan.nosdn.127.net/9a2324cb4ff8f4332c51343efeaafe8e.jpg", "http://yanxuan.nosdn.127.net/eb0d21207bf5b26592511ef80e48eb91.jpg", "http://yanxuan.nosdn.127.net/be386763462ada086662387e40431c85.jpg", "http://yanxuan.nosdn.127.net/71724c37bc98358af22d25a4edebe12d.jpg", "http://yanxuan.nosdn.127.net/3226eb33802d18a6baa093b1ccc3f412.jpg", "http://yanxuan.nosdn.127.net/32370f76a781924f6e0252abdea047f6.jpg", "http://yanxuan.nosdn.127.net/22c82828b81e11053849f3c9f826f453.jpg", "http://yanxuan.nosdn.127.net/e8c42123ac126046542176d511a29139.jpg", "http://yanxuan.nosdn.127.net/d981ab4821ca98c89e71d2a2a9b23330.jpg", "http://yanxuan.nosdn.127.net/995a72c9c8bb895f5445a473daccc218.jpg", "http://yanxuan.nosdn.127.net/251151c89c54c9c272288ed461533a8c.jpg", "http://yanxuan.nosdn.127.net/bba4921b09f7c9eb4bae76259d7d82e2.jpg", "http://yanxuan.nosdn.127.net/0fd159ef30bfd4cb6e4c37141ad96666.jpg", "http://yanxuan.nosdn.127.net/4e31861a89e1e10be81f5290e31e6b85.jpg", "http://yanxuan.nosdn.127.net/3404e5c9b9e9e3855a52831a1d4acad7.jpg", "http://yanxuan.nosdn.127.net/5d15b51fc382847b8de4a4b6fad3646b.jpg", "http://yanxuan.nosdn.127.net/6fd940b500b07c5157a7db17d858c56f.jpg", "http://yanxuan.nosdn.127.net/4cf02bfda7429cb78da05f8b521e5195.jpg", "http://yanxuan.nosdn.127.net/74ed4ea956e43e6b1f37b1dd31c6feee.jpg", "http://yanxuan.nosdn.127.net/77d288d7c8e815e014f6ceac652adf83.jpg", "http://yanxuan.nosdn.127.net/18478afad61f4fad519a4fe598c38bb8.jpg", "http://yanxuan.nosdn.127.net/f527072aeaed7abb974551d7ad93faf4.jpg", "http://yanxuan.nosdn.127.net/276d97cc862f718bfb7cd8a5970d2b9a.jpg", "http://yanxuan.nosdn.127.net/1765a6390fd9116320230cea1b2e2570.jpg", "http://yanxuan.nosdn.127.net/ee6eff91b9e9ee9c8a70cf9ad59cd274.jpg", "http://yanxuan.nosdn.127.net/4db4a90e1e83e2e77b4b17deb6b618c4.jpg", "http://yanxuan.nosdn.127.net/3e58b2129b6ca7f8f845d88ccb1ecda6.jpg", "http://yanxuan.nosdn.127.net/fe901e2f92e213b444f4950a6adb320f.jpg", "http://yanxuan.nosdn.127.net/11c552fba5a1ba0bf6189da2d243db7d.jpg", "http://yanxuan.nosdn.127.net/4c78602cdbba3992711257325de376ed.jpg"],
		"inventory": [925, 779],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "条纹绿格"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 935,
		"date": "1500012308125",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1022001,
		"price": 349,
		"topName": "法式浪漫绣球四件套",
		"subName": "浪漫绣球，法式般的呵护",
		"shortDescription": ["全竹节棉", "透气抗拉", "精致设计", "五彩流苏", "色织工艺", "色彩牢固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a90b77bdba29ea20a0bcacf455a682fd.jpg", "http://yanxuan.nosdn.127.net/6bf22c0c88aa34f3892197df15f5b330.jpg", "http://yanxuan.nosdn.127.net/d71251ed696258e48d900c2d2d690fe6.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/bf8faee3b27b480f63b70056597b626d.png", "http://yanxuan.nosdn.127.net/7c782187c209bed0457ed114569cdedf.jpg", "http://yanxuan.nosdn.127.net/045f5f28165e3f1144fe86ddbbab2ba3.jpg", "http://yanxuan.nosdn.127.net/afda747fab1299be4594f00b3e4e31d2.jpg", "http://yanxuan.nosdn.127.net/2860490e0349016cfc4a6a1d4f57c55d.jpg"],
		"types": ["法式绣球"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/3caeae4eca0f08bc143f5c57412d6bcd.jpg", "http://yanxuan.nosdn.127.net/01f377d37098d65602e2447788b93dfc.jpg", "http://yanxuan.nosdn.127.net/b47996d9b47ddb13789a4ace965328ef.jpg", "http://yanxuan.nosdn.127.net/5daff2af7d1940210efba1d94057b073.jpg", "http://yanxuan.nosdn.127.net/a1d01003115794950d3e4f110403fdfd.jpg", "http://yanxuan.nosdn.127.net/62c33967eb50d98eb09246092a054f74.jpg", "http://yanxuan.nosdn.127.net/29792456f207afd95a62d60214a01851.jpg", "http://yanxuan.nosdn.127.net/5cda3817dcffa4e1be4e479724e7f035.jpg", "http://yanxuan.nosdn.127.net/5cf34c4567ec6dbe839339698a3adf30.jpg", "http://yanxuan.nosdn.127.net/e64a01d30c65cea7c4ddf8f2229870d4.jpg", "http://yanxuan.nosdn.127.net/413863b3cabcbc94e322e9d2910f66ea.jpg", "http://yanxuan.nosdn.127.net/99ce4e6124b75df99e4d4b8de6878c5c.jpg", "http://yanxuan.nosdn.127.net/403a8d6fa2422a0587cd2063f28cbbe1.jpg", "http://yanxuan.nosdn.127.net/099a401a319dae53cc5a7705f7b657fe.jpg", "http://yanxuan.nosdn.127.net/85dd8f3d5a6e885604d5fda96c39f281.jpg", "http://yanxuan.nosdn.127.net/22ea153a4825aa13770743eb6a1d766f.jpg", "http://yanxuan.nosdn.127.net/578698b1a104997b3632db1f9dc74c6a.jpg", "http://yanxuan.nosdn.127.net/7b0b8b276985770b2e1c904e676de897.jpg", "http://yanxuan.nosdn.127.net/44f167771765a070a19c9ff6c130747e.jpg", "http://yanxuan.nosdn.127.net/342e7982df39b39f5bde5066c2421c24.jpg", "http://yanxuan.nosdn.127.net/3db52e63ab4b82aa5544bb68bf494da5.jpg", "http://yanxuan.nosdn.127.net/f4449875c22659a531bbd6eb104f45e7.jpg", "http://yanxuan.nosdn.127.net/177cf74899157b8edec80f14bdff2666.jpg", "http://yanxuan.nosdn.127.net/e5a4bf58ec86ccceaeeae46a800be248.jpg", "http://yanxuan.nosdn.127.net/aedd86730887d4ce9ab4ce11367e70e0.jpg", "http://yanxuan.nosdn.127.net/80a075b3084c766d313005abf44b59a4.jpg", "http://yanxuan.nosdn.127.net/6e2fbec13573dbd9fcc14b32fb9ca95e.jpg", "http://yanxuan.nosdn.127.net/48a2191cf1e56304bb2a8dc84c18dc55.jpg", "http://yanxuan.nosdn.127.net/7daef2160a7c2838b144cb4426e9232d.jpg", "http://yanxuan.nosdn.127.net/be2ba2e98e8f6c3a3e0a22bba52cde64.jpg", "http://yanxuan.nosdn.127.net/706f8518e4f9f0868efd6c06a92374b7.jpg", "http://yanxuan.nosdn.127.net/7377480490be9c4989733bfb20960553.jpg", "http://yanxuan.nosdn.127.net/02f382fffc5e413d2c2c20f3ed1f7cbc.jpg", "http://yanxuan.nosdn.127.net/dba4773485150b157bdb304a4b7c64c4.jpg", "http://yanxuan.nosdn.127.net/6a0662a11f315dfaad974a20f9195eef.jpg", "http://yanxuan.nosdn.127.net/08dc21856b99613f59d501f99c54a577.jpg", "http://yanxuan.nosdn.127.net/6723f2a290b14dea262b0abddc3464f0.jpg", "http://yanxuan.nosdn.127.net/2dd2e85a09efff621454acd0a96c3497.jpg", "http://yanxuan.nosdn.127.net/4a317a6b832d9321a69c8966409f68ea.jpg", "http://yanxuan.nosdn.127.net/f4031ea25471029f59ce36da8e0ce38e.jpg", "http://yanxuan.nosdn.127.net/8beeebd28e23d906d7916ab4575f3800.jpg", "http://yanxuan.nosdn.127.net/c65e967c692d7150baf9fee28f262935.jpg", "http://yanxuan.nosdn.127.net/3fc96c7688f33de5876b358fdf31ebf2.jpg", "http://yanxuan.nosdn.127.net/94adba0162052a5758ec9d8426123198.jpg", "http://yanxuan.nosdn.127.net/152038e70480f6ba580a4830dc36b2de.jpg", "http://yanxuan.nosdn.127.net/6053a2051a69b207a1c23236588c8ae8.jpg", "http://yanxuan.nosdn.127.net/72ff4dab74569803e60b9ef2e9f43d34.jpg", "http://yanxuan.nosdn.127.net/ef52fed7935192b6127031d91f6f4c21.jpg"],
		"inventory": [467],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "根数",
			"attrValue": "200根"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5M/ 1.8M床：被套200*230cm；床单245*250cm；枕套48*74cm"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 832,
		"date": "1500012310666",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1022000,
		"price": 399,
		"topName": "意式毛线绣球四件套",
		"subName": "浪漫毛线绣球，简约而不简单",
		"shortDescription": ["高支高密", "柔软顺滑", "刺绣线条", "立体明快", "绣球点缀", "温馨别致"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e4e4b2bd38d2e292b2dcf4d187e4b77b.jpg", "http://yanxuan.nosdn.127.net/d7cd6ee27f650e351c55abf36770af43.jpg", "http://yanxuan.nosdn.127.net/11be970fc0ab9cfd6ea989f2fe4840e6.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/5350e35e6f22165f38928f3c2c52ac57.png", "http://yanxuan.nosdn.127.net/61a44e7426fbc32db87afd48d85f2e99.jpg", "http://yanxuan.nosdn.127.net/ac649a9fc8332aae1c60e8a10fb5a775.jpg", "http://yanxuan.nosdn.127.net/3664e1b166b8dd54d05edd631e6966f9.jpg", "http://yanxuan.nosdn.127.net/989d0d84d55e4a77a1c6dafa0a3bc207.jpg"],
		"types": ["1.5M-1.8M（床尺寸）"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/3f63478dd19081036c7c8061a88438b3.jpg", "http://yanxuan.nosdn.127.net/a437697cad2ac00a76b8a2a9f9f7819b.jpg", "http://yanxuan.nosdn.127.net/30607b946fa5245ab1376d28ab8d68c6.jpg", "http://yanxuan.nosdn.127.net/d18e17059acf20d507fdb8f7054968a8.jpg", "http://yanxuan.nosdn.127.net/61a0539ce8ca1f38cce7c5647c94aaf7.jpg", "http://yanxuan.nosdn.127.net/ec45424eef32b60e477bf6860f6c3ac2.jpg", "http://yanxuan.nosdn.127.net/d2fb058299e851d21128af4c29bbf40f.jpg", "http://yanxuan.nosdn.127.net/88fcf4d3d09cc26809eaabf0df4ddc84.jpg", "http://yanxuan.nosdn.127.net/505360bfb9ae52b707d194195b547d1e.jpg", "http://yanxuan.nosdn.127.net/d359fdfda280d2c7681adee5a533a65d.jpg", "http://yanxuan.nosdn.127.net/e6276ab49a773dedadd75da6529fc41b.jpg", "http://yanxuan.nosdn.127.net/c6057375f8fdafdc1e8e7a894bb2f39a.jpg", "http://yanxuan.nosdn.127.net/2059408e8aee017c85e47c7267af21bc.jpg", "http://yanxuan.nosdn.127.net/0a7e4c7b19fd7822f89ccd63ca94b234.jpg", "http://yanxuan.nosdn.127.net/937329152fc61bff06d29d4b316b7259.jpg", "http://yanxuan.nosdn.127.net/f7bc2c66157bd5e2cdc978460214d33c.jpg", "http://yanxuan.nosdn.127.net/55d327d74e2c768006fcce7f83cf0051.jpg", "http://yanxuan.nosdn.127.net/5d06b9bef3bae34d66d38e30fad204d4.jpg", "http://yanxuan.nosdn.127.net/e1f4f2ee0a473c251c055ffeb25426d0.jpg", "http://yanxuan.nosdn.127.net/7b7efe85839b1f1ea17c829563fc9206.jpg", "http://yanxuan.nosdn.127.net/ca4091e28e5b8cfd76c1ad3de8fda999.jpg", "http://yanxuan.nosdn.127.net/ebd7266b6b01bddadf4903e8ca66a82a.jpg", "http://yanxuan.nosdn.127.net/db777171b81a10c51bae065de7fbef7f.jpg", "http://yanxuan.nosdn.127.net/416626d4074c929f080eff87586a49e2.jpg", "http://yanxuan.nosdn.127.net/c23701559de65d814e9062847e87c6db.jpg", "http://yanxuan.nosdn.127.net/200d89ca470fa10ac02971f26cf8f7fd.jpg", "http://yanxuan.nosdn.127.net/d6c39f0cf32656244e699eb21089f434.jpg", "http://yanxuan.nosdn.127.net/287fa73c7e8b56eb8bd0ecee08c865da.jpg", "http://yanxuan.nosdn.127.net/0807995485258c26c712169290aac892.jpg", "http://yanxuan.nosdn.127.net/c29f153a2fada82300a904b2ca46eeeb.jpg", "http://yanxuan.nosdn.127.net/bcd0c03d117c27a5c8856aabe577535e.jpg", "http://yanxuan.nosdn.127.net/f9d6c1f265a891458ec9646801a9f790.jpg", "http://yanxuan.nosdn.127.net/6bce3852bdd99bc428e5339dcec1749b.jpg", "http://yanxuan.nosdn.127.net/0076b7513361cb10daa6cdae51b0238f.jpg", "http://yanxuan.nosdn.127.net/b289f3fdd57ba7c2f9bfed5cc235ad5d.jpg", "http://yanxuan.nosdn.127.net/ea27ef8fcca46882e225ab03f29cc4c3.jpg", "http://yanxuan.nosdn.127.net/c0bbddfd513a56bb4b4e60b0d7485261.jpg", "http://yanxuan.nosdn.127.net/9b6904ddbb813688f8e1c36874437b8b.jpg", "http://yanxuan.nosdn.127.net/87439f2dc3805340736a508bfb4fc044.jpg", "http://yanxuan.nosdn.127.net/29ca62c0aee1df52a9435ed2bf915b06.jpg", "http://yanxuan.nosdn.127.net/993cfb5a549e93a86ac5a5485221ded3.jpg"],
		"inventory": [527],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "根数",
			"attrValue": "200根"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5M/ 1.8M床：被套200*230cm；床单245*250cm；枕套48*74cm"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 58,
		"date": "1500012313184",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1135000,
		"price": 359,
		"topName": "几何印花AB面全棉四件套",
		"subName": "几何线条，舒适的北欧线条风",
		"shortDescription": ["长绒棉材", "柔软亲肤", "活性印染", "健康不褪", "230支", "细密柔韧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/28b35152ab06c870f190551d8ab5dece.jpg", "http://yanxuan.nosdn.127.net/8b27ef8c5402d4c61b1a0d75c6d74a13.jpg", "http://yanxuan.nosdn.127.net/084757490ffe7a0ed628117ace104f85.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/53d0309471b570a7e12a3f01ba694491.png", "http://yanxuan.nosdn.127.net/94d2aaf45d453e491a90ea2a12c8c119.jpg", "http://yanxuan.nosdn.127.net/6a869e79b45fbc8604bda086d8d4515e.jpg", "http://yanxuan.nosdn.127.net/79f396a5eb345081078bf8e9c25314a8.jpg", "http://yanxuan.nosdn.127.net/127286b130ba377c46550d3829aa19e2.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/5886d64bd11e739481409fd0755f27ff.jpg", "http://yanxuan.nosdn.127.net/e7f3e7a7b307aa36dc368ddb035d7bf6.jpg", "http://yanxuan.nosdn.127.net/8f86620fabba81db05a1cd9e0d34fcc2.jpg", "http://yanxuan.nosdn.127.net/73576599168ee4d9ca99410ed317173f.jpg", "http://yanxuan.nosdn.127.net/2993458f7e4c013a6c3906c987e45615.jpg", "http://yanxuan.nosdn.127.net/3c024bfbbde0bc78f809ca1a0a5ff86e.jpg", "http://yanxuan.nosdn.127.net/7dd40693c4bfb89dce53e70ef68e2613.jpg", "http://yanxuan.nosdn.127.net/dade815f5e7cb4524925fcbbb908730c.jpg", "http://yanxuan.nosdn.127.net/80bdbb09ce624dc51619b6c304da4611.jpg", "http://yanxuan.nosdn.127.net/24c7c10cb17a2e23e279f919ce8b5d64.jpg", "http://yanxuan.nosdn.127.net/949346a006ab00e938a6893f07df5b15.jpg", "http://yanxuan.nosdn.127.net/1f76f8a481af8f96b2a2833710568424.jpg", "http://yanxuan.nosdn.127.net/391c87acd895cb525af5cd27381399fd.jpg", "http://yanxuan.nosdn.127.net/a2d20f3c2a11f8ac8b50f79a995ce071.jpg", "http://yanxuan.nosdn.127.net/37abae75d9c168f8f411fe22f2762b82.jpg", "http://yanxuan.nosdn.127.net/5e7470c29ea8f859b8cd0242b6f85b4e.jpg", "http://yanxuan.nosdn.127.net/b9955094ae733643cca3fce2cafc2474.jpg", "http://yanxuan.nosdn.127.net/c1b1d7d675c48055c9ce049ff8eb56d4.jpg", "http://yanxuan.nosdn.127.net/408547e9391b0d3cfd7e20a0794d7dc5.jpg", "http://yanxuan.nosdn.127.net/16bb6695b86e9a3e0943aee9a3fea770.jpg", "http://yanxuan.nosdn.127.net/8c6ba7ccf5b7ba3813e845195b666656.jpg", "http://yanxuan.nosdn.127.net/b3465000f419598594412a9117644a62.jpg", "http://yanxuan.nosdn.127.net/2f197914a2baa0c6f691649447fb292c.jpg", "http://yanxuan.nosdn.127.net/52cc6d94921734850d364bc9607ee4c0.jpg", "http://yanxuan.nosdn.127.net/1f01a55f7e32bd6908dd9a9276083106.jpg", "http://yanxuan.nosdn.127.net/c5bfa8dc19d56588ea54410c46a03902.jpg", "http://yanxuan.nosdn.127.net/cd4b80cb1ae6363cbd66da405a98fc66.jpg", "http://yanxuan.nosdn.127.net/b956be256bfeaa909d524663060c9b63.jpg", "http://yanxuan.nosdn.127.net/f8ea8188890ccae29e7df332038d3b17.jpg", "http://yanxuan.nosdn.127.net/62562eda777db6aef331786911357dc8.jpg", "http://yanxuan.nosdn.127.net/3afa4585fab6a65a055e06a8e927bc2a.jpg", "http://yanxuan.nosdn.127.net/57ed5177d964a3322248b5934aac6525.jpg", "http://yanxuan.nosdn.127.net/81fae26aceba01eda032d98f76977ad0.jpg", "http://yanxuan.nosdn.127.net/5369a2bffc1bef80bb7d9ae288a5cb1d.jpg", "http://yanxuan.nosdn.127.net/3e9b70a3e98d756876290fbc37736fd1.jpg", "http://yanxuan.nosdn.127.net/b8cfe3bb6ec0c6705bd1d574a5636490.jpg", "http://yanxuan.nosdn.127.net/1973d875f05efc544b3c47c0bb7cc4a1.jpg", "http://yanxuan.nosdn.127.net/2753c2a2129c83b379cd109d63ce248d.jpg", "http://yanxuan.nosdn.127.net/bc2de3ca83f8056a2a13b7ccab34946e.jpg", "http://yanxuan.nosdn.127.net/2aacd2f200beb9eaa8215cf8f91384f1.jpg", "http://yanxuan.nosdn.127.net/103e1c63addfe61233f99b399392bec2.jpg", "http://yanxuan.nosdn.127.net/bc18ce8e2612652826538d27f00543b1.jpg", "http://yanxuan.nosdn.127.net/30dc9f9df997d44cd5b69b1060bdc19a.jpg", "http://yanxuan.nosdn.127.net/f5a0f531246c6197198334d5dc82bb3f.jpg", "http://yanxuan.nosdn.127.net/76cf2868c5093025e4bfc0cc63161659.jpg", "http://yanxuan.nosdn.127.net/485b4307e5ad532095910245936526e5.jpg"],
		"inventory": [235, 947],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "蒂芙尼蓝/ 墨黑/ 亮橙/ 浅灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 697,
		"date": "1500012315746",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1134056,
		"price": 429,
		"topName": "竹语初棉撞色四件套",
		"subName": "天然竹醌成分，抑菌爽滑健康睡眠",
		"shortDescription": ["竹棉混纺", "凉爽吸湿", "活性印染", "健康不褪", "天然竹醌", "抑菌杀菌"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/015a56bd1e410f1a76b17c18e46e7112.jpg", "http://yanxuan.nosdn.127.net/49f0629093aa411704aa8512bdd65055.jpg", "http://yanxuan.nosdn.127.net/196ca5e4e89bfec527b35df114ec51d8.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/c29f47f58ba1e3c2ff5a193eec0b11d6.png", "http://yanxuan.nosdn.127.net/de53227c5300dc2a4a7e25a7d6dcf5a1.jpg", "http://yanxuan.nosdn.127.net/8c237329b54caeef7bd7613443796db0.jpg", "http://yanxuan.nosdn.127.net/99b68bf325279102597cbd2829bffc09.jpg", "http://yanxuan.nosdn.127.net/a72497e9a412babf1143ab64394ca9de.jpg"],
		"types": ["1.8M/ 2.0M（床尺寸）", "1.5M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/79ba1029377913ad2aff06285f0fb6b1.jpg", "http://yanxuan.nosdn.127.net/ad315f893e64a61ff80ef80a292d513c.jpg", "http://yanxuan.nosdn.127.net/89ae1a3a2137e96757b8b79e0242dd20.jpg", "http://yanxuan.nosdn.127.net/cd0a2c331b1b290bbae37b618e449e45.jpg", "http://yanxuan.nosdn.127.net/3d11919cfeff0d8c7e74bddf1d2691e2.jpg", "http://yanxuan.nosdn.127.net/cfda1ff4028e0c2deae3348d38507813.jpg", "http://yanxuan.nosdn.127.net/eb1425e3a8f2cc18080914e12664fc5e.jpg", "http://yanxuan.nosdn.127.net/92947dc66812db83d4adc47d8f7a8a94.jpg", "http://yanxuan.nosdn.127.net/6027338c777d3fc8c9fa371b21128be3.jpg", "http://yanxuan.nosdn.127.net/d46ef08621b610f95d955e5173c5be81.jpg", "http://yanxuan.nosdn.127.net/369953fa2ffef9298a79d0fe12775578.jpg", "http://yanxuan.nosdn.127.net/ef9e1a9d4a25469e58cfd5e0ff76eccf.jpg", "http://yanxuan.nosdn.127.net/11bb09fc9a265df62eb0bf4cd99749f5.jpg", "http://yanxuan.nosdn.127.net/80998b2fb9c6cca348e19caca983ce86.jpg", "http://yanxuan.nosdn.127.net/5bf53b5ed9a20e5a9e02774bf97bfd28.jpg", "http://yanxuan.nosdn.127.net/3cd15fc03c5a3289adf2da538c114cb6.jpg", "http://yanxuan.nosdn.127.net/dd3b1024e1cd4c80048afb5b84323c1e.jpg", "http://yanxuan.nosdn.127.net/60fde6de386a3c0e555e1b272cf15b54.jpg", "http://yanxuan.nosdn.127.net/c70ef3629ae8917158e693f5bc7ee9b9.jpg", "http://yanxuan.nosdn.127.net/c5329cb330d387b1ccecaa8c68b002c4.jpg", "http://yanxuan.nosdn.127.net/337b781642c8cb61faa1357c4f0e158d.jpg", "http://yanxuan.nosdn.127.net/bfb06d7d54cfd02007eab155b9cf7b37.jpg", "http://yanxuan.nosdn.127.net/f144ba9e36d9af2ad89e111ec3f63fae.jpg", "http://yanxuan.nosdn.127.net/ba4f100da1689eaf7fecbb5c16a3cc51.jpg", "http://yanxuan.nosdn.127.net/b43d19cab8097f3cc6f6f25f55c2da29.jpg", "http://yanxuan.nosdn.127.net/9690d4f141791b1b1712744e70d48e8b.jpg", "http://yanxuan.nosdn.127.net/3596aee4d5c35667092b9d91296aafed.jpg", "http://yanxuan.nosdn.127.net/ee994a21d4ab1f3ca808e8e1ed7a63fa.jpg", "http://yanxuan.nosdn.127.net/64919bffe93c9233583af94502a0b5e5.jpg", "http://yanxuan.nosdn.127.net/8e6e7c4b3c84511cb1613f2ad46a9cb6.jpg", "http://yanxuan.nosdn.127.net/778bdc6ad9fd24fbb782776c39832ba5.jpg", "http://yanxuan.nosdn.127.net/9175288f3f8909ba60d36cefb350aa13.jpg", "http://yanxuan.nosdn.127.net/05c1cada48dbf028b3fac1a467278412.jpg", "http://yanxuan.nosdn.127.net/be138ae76b2cac1b537b8da72a57abd9.jpg", "http://yanxuan.nosdn.127.net/13ef773a94d2f778d767f696cd8c4b95.jpg", "http://yanxuan.nosdn.127.net/372030f0c8fe35e6c9cbd8c15c1a9611.jpg", "http://yanxuan.nosdn.127.net/567536349f71c7fe3aee5cf0d380d55b.jpg", "http://yanxuan.nosdn.127.net/54171cdb9d3d33727088cadfb1a142b9.jpg", "http://yanxuan.nosdn.127.net/22f2f338e25a1570a0edad92fdb06341.jpg", "http://yanxuan.nosdn.127.net/b6029e1838ad4d14947d45989c671acc.jpg", "http://yanxuan.nosdn.127.net/786692b4ac8c90f617eb3952cbc34346.jpg", "http://yanxuan.nosdn.127.net/ffd48ca06353d09babf7520a452e2afa.jpg", "http://yanxuan.nosdn.127.net/3f4005528a825cdd8fa44d75a315bb6a.jpg", "http://yanxuan.nosdn.127.net/62a2cd885b0a894bf76ab6e388bfadf6.jpg", "http://yanxuan.nosdn.127.net/5c91b5e08e107e6ee62411ad99c3d60a.jpg", "http://yanxuan.nosdn.127.net/c987c04acbfcdd4983f6193730662b8d.jpg", "http://yanxuan.nosdn.127.net/111a3701590eca6859a50e5864fde12c.jpg", "http://yanxuan.nosdn.127.net/18b9123780c721a612e0079568ac0686.jpg", "http://yanxuan.nosdn.127.net/8bc614e557b357d00279223b82f90b39.jpg", "http://yanxuan.nosdn.127.net/c7f4601f26a0edc0198348a4ffde6207.jpg", "http://yanxuan.nosdn.127.net/5717ecb58595fb16666d616fec5e930f.jpg", "http://yanxuan.nosdn.127.net/b5eb0742a6bda8f0b4775de41e2c7df3.jpg", "http://yanxuan.nosdn.127.net/78367a5a6d84e79d7555aad25b14aeda.jpg", "http://yanxuan.nosdn.127.net/638041553c576ba9ae55676d26713128.jpg", "http://yanxuan.nosdn.127.net/818dfbab1fb3de8d12e3849cdd4df996.jpg", "http://yanxuan.nosdn.127.net/b258dcf889cdf082db902f6b5836521d.jpg", "http://yanxuan.nosdn.127.net/f9979167a9134858fc8f946b8cd0f326.jpg"],
		"inventory": [784, 237],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "砖釉红/菡萏粉/浅豆绿/青丝灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 夏日特价,
		"manufacture": "",
		"sale": 473,
		"date": "1500012318426",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1021010,
		"price": 299,
		"topName": "色织水洗棉纯色四件套",
		"subName": "做旧褶皱感，亲肤舒适",
		"shortDescription": ["水洗面料", "不易变形", "色织工艺", "不易褪色", "纯色设计", "素雅耐看"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a26ce876f7e9299c15df217d402a7d88.jpg", "http://yanxuan.nosdn.127.net/32b298b57ee5867edd87d5d60f2cf16e.jpg", "http://yanxuan.nosdn.127.net/4ff73f4f316da884e8599f38f9461703.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/25d734cc0b2eae8f63f9deb1e4ad5f64.png", "http://yanxuan.nosdn.127.net/4b0e35f974567e45c3070e85e228fae0.jpg", "http://yanxuan.nosdn.127.net/b7dfccd8bdc97d8823ac0e7ef788ffb3.jpg", "http://yanxuan.nosdn.127.net/7a4b5ffb08ac487647c2988ec0d8186d.jpg", "http://yanxuan.nosdn.127.net/13f2f859d43aff3f67b4d81f74b84cc3.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/16227b81865dce643b91b00ea6c39012.jpg", "http://yanxuan.nosdn.127.net/427ef03b20aa52014ab9d91c3f9fdb5e.jpg", "http://yanxuan.nosdn.127.net/dc2466433e832c592e537f0f54bc1702.jpg", "http://yanxuan.nosdn.127.net/a2bcd099ad5167317a73354291f2c007.jpg", "http://yanxuan.nosdn.127.net/da75827b70675306c6ca7d63bef5ffb1.jpg", "http://yanxuan.nosdn.127.net/6ffc1fcd1d8afcbfa43b727eb40842ae.jpg", "http://yanxuan.nosdn.127.net/d8ae03d8ff640eaffb14ba37a83b137f.jpg", "http://yanxuan.nosdn.127.net/52c5f880b8e1a7cb7900616bd13a4b62.jpg", "http://yanxuan.nosdn.127.net/0b77db532462faf31bed3c4629a1ecbf.jpg", "http://yanxuan.nosdn.127.net/07efa2bf79478f24799ff0a4cbfa0e54.jpg", "http://yanxuan.nosdn.127.net/68070ec063cb05000ed7aef2b3ef1632.jpg", "http://yanxuan.nosdn.127.net/dd54998d1cc11890f2650c74e7bfd340.jpg"],
		"inventory": [362, 763],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产地",
			"attrValue": "江苏南通"
		}, {
			"attrName": "根数",
			"attrValue": "200根"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5米床品： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 夏日特价,
		"manufacture": "",
		"sale": 101,
		"date": "1500012320921",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1090004,
		"price": 399,
		"topName": "日式法兰绒格子四件套",
		"subName": "气质英伦格纹，法兰绒的丰满细腻",
		"shortDescription": ["法兰绒布", "柔软升温", "色织工艺", "不含甲醛", "ITS", "安心使用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/bac11f61cf69547a3033b40c95859008.jpg", "http://yanxuan.nosdn.127.net/c85a826ba516912847a4f138a146f43a.jpg", "http://yanxuan.nosdn.127.net/45d78f9a78233a470376cd3c2e52df34.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/63bcf2a60031556fa92d5edf75517ed0.png", "", "http://yanxuan.nosdn.127.net/184ec60b12c918282cfc9c8b3d6fdff4.jpg", "http://yanxuan.nosdn.127.net/63952024af0379a53ae88513b87a6a47.jpg", "http://yanxuan.nosdn.127.net/1180f6fd43359f216c9b9af6339f17f2.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/c066caac8a812dd9df31bcb684d1028f.jpg", "http://yanxuan.nosdn.127.net/14505a86b8a5aad7f68d95a307251240.jpg", "http://yanxuan.nosdn.127.net/56005819db5f334f7ad979cf8c5e8328.jpg", "http://yanxuan.nosdn.127.net/e78626f0a293d9f96b435eb0676ebed4.jpg", "http://yanxuan.nosdn.127.net/66bbcc7bac41eaefac0c8d665a6587dd.jpg", "http://yanxuan.nosdn.127.net/d0d683ff8f2773187eb96a3db245c04f.jpg", "http://yanxuan.nosdn.127.net/ace95a43db913134980f9d060088ddd9.jpg", "http://yanxuan.nosdn.127.net/a79f500733139558be7719097cc35e8a.jpg", "http://yanxuan.nosdn.127.net/8cdbb3673484330285660e324fcad92d.jpg", "http://yanxuan.nosdn.127.net/d0f33d5179346a060170f25c7176b400.jpg", "http://yanxuan.nosdn.127.net/7df722315bbd97026d08d594012a8883.jpg", "http://yanxuan.nosdn.127.net/8ecec4a06ae781e351338a846c8fddd8.jpg", "http://yanxuan.nosdn.127.net/7774163da3a8af77cb8d5cf7cbb7f1fc.jpg", "http://yanxuan.nosdn.127.net/546f6eb1463f7d5c1f61e97debd97dd5.jpg", "http://yanxuan.nosdn.127.net/04693dddf654148c13e72913bab78d38.jpg", "http://yanxuan.nosdn.127.net/4ca69383f8b6ed6740c3396dcae40f0f.jpg", "http://yanxuan.nosdn.127.net/93fc4cf1196d3c53be9df232e31f54ad.jpg", "http://yanxuan.nosdn.127.net/1831f4e053c0a1e5f7f5b920bfc81d50.jpg", "http://yanxuan.nosdn.127.net/b1ad49900e5c5049ec373b38dec5e853.jpg", "http://yanxuan.nosdn.127.net/bff9fa4c54b8014749944d38a7f6624d.jpg", "http://yanxuan.nosdn.127.net/6c87d149c153d96ae2ece02222260fb6.jpg", "http://yanxuan.nosdn.127.net/2f496cd2f6acb4cea1b7a437a011f2db.jpg", "http://yanxuan.nosdn.127.net/09c7202093dbfa17ed531957ee5420f3.jpg", "http://yanxuan.nosdn.127.net/55dcd9976c411c768343e61c247eef42.jpg", "http://yanxuan.nosdn.127.net/fe0caea5be2133f2667040a05ed131c2.jpg", "http://yanxuan.nosdn.127.net/3490d6ea60ce6370a77116f5852a62fd.jpg", "http://yanxuan.nosdn.127.net/e1aa88cad5f1878727043f66c17b8c04.jpg", "http://yanxuan.nosdn.127.net/aba20aadce7c22f1618bdac9ddee20a8.jpg", "http://yanxuan.nosdn.127.net/71d620e9a2982e714ca1e1275473b5f7.jpg", "http://yanxuan.nosdn.127.net/df109deb351bc032a6a592b5a6393776.jpg", "http://yanxuan.nosdn.127.net/fb236b37a3eb64de2e3e6f8ccef9396d.jpg", "http://yanxuan.nosdn.127.net/3bfcf844e73f9d349e1521c85223d0de.jpg", "http://yanxuan.nosdn.127.net/51fe533f8a932a2be2b1d35d6cf67af7.jpg", "http://yanxuan.nosdn.127.net/3029f3ad26e15b46fffdd48a79fe0491.jpg", "http://yanxuan.nosdn.127.net/d826b9653b21ddad7c283ed01383174c.jpg", "http://yanxuan.nosdn.127.net/178b1865d80a669bf436416a0659fa82.jpg", "http://yanxuan.nosdn.127.net/477658b5c55c011d6a9f99a7daaabbc9.jpg", "http://yanxuan.nosdn.127.net/5e5dcdefa07cacc155cd4b893899290e.jpg", "http://yanxuan.nosdn.127.net/0649f71ed67a54ed029b0f8d5a55132d.jpg", "http://yanxuan.nosdn.127.net/fd68401d76a96d5e9813b1a4d4d7bc4b.jpg", "http://yanxuan.nosdn.127.net/eddde2b1c05a812a887c685c80e87b68.jpg", "http://yanxuan.nosdn.127.net/5f14d1d8e84e5e7455cf3ca97a7c31df.jpg", "http://yanxuan.nosdn.127.net/88d51c0bf3e0733af65493c3521ab457.jpg", "http://yanxuan.nosdn.127.net/310b2c19eb67605e8ed748974db7bea3.jpg", "http://yanxuan.nosdn.127.net/cb021e4d02fc9e20e198ad92278d956f.jpg", "http://yanxuan.nosdn.127.net/21e89fb8038e7d93fe586107a8ae0296.jpg", "http://yanxuan.nosdn.127.net/0eecfc926d51926d9c385c8a0cd9bbe0.jpg", "http://yanxuan.nosdn.127.net/a12b65b9227cd2dd8f2440a6f944309a.jpg", "http://yanxuan.nosdn.127.net/1ef2d4273cf516bc7730f54725590817.jpg", "http://yanxuan.nosdn.127.net/a6d7b3bd3c0aad9b724664060f0cf124.jpg", "http://yanxuan.nosdn.127.net/a92301a22022a6d01c40fed4ea874790.jpg", "http://yanxuan.nosdn.127.net/0a844bf79cf16f6363f9b5d1a1b22d62.jpg", "http://yanxuan.nosdn.127.net/01f1ec4232dcece4106b9a55be963d64.jpg", "http://yanxuan.nosdn.127.net/a7a77c8e5051fda11f487d5a7518bdfb.jpg", "http://yanxuan.nosdn.127.net/7d24667a7ff12d025529c188df56555f.jpg", "http://yanxuan.nosdn.127.net/0b6581a1cf24bf53e2f9540f75b4132d.jpg", "http://yanxuan.nosdn.127.net/e922bea464f8c2bd633a8f537b515f5c.jpg"],
		"inventory": [423, 424],
		"information": [{
			"attrName": "颜色",
			"attrValue": "红色格子/ 蓝色格子/ 绿色格子/ 灰色格子"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "工艺",
			"attrValue": "色织工艺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1：纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。 严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。2：不同批次面料和拉链稍有差异，请以实物为准。"
		}],
		"label": 夏日特价,
		"manufacture": "MUJI制造商",
		"sale": 296,
		"date": "1500012323618",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1023032,
		"price": 449,
		"topName": "纯棉色织缎纹四件套",
		"subName": "色织缎纹工艺，亲肤舒适",
		"shortDescription": ["提花被套", "细致有型", "贡缎组织", "悬垂感好", "色织工艺", "着色均匀"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/dddf222785f9ff774cdb5fdd59973afb.jpg", "http://yanxuan.nosdn.127.net/39d8a0dd45ed42ad757e94c6b3cf57e2.jpg", "http://yanxuan.nosdn.127.net/dfda33989240c392211f78851c0590e8.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/e0b928ada728c140f6965bb41f47407b.png", "http://yanxuan.nosdn.127.net/bbd9bf40c371e5beb0b380f3f431082f.jpg", "http://yanxuan.nosdn.127.net/2b786fa55756292a644dcf7b6f85b1d8.jpg", "http://yanxuan.nosdn.127.net/61a92631136272bf12cba53a4f27edfe.jpg", "http://yanxuan.nosdn.127.net/4c36bfcea9ca68e120f3aadd072bfd1e.jpg"],
		"types": ["1.5M（床尺寸）"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/e05936cc765b06296b623de8c8ad08df.jpg", "http://yanxuan.nosdn.127.net/4eff9d27f32ff39c19f8f6e4fb1f222e.jpg", "http://yanxuan.nosdn.127.net/7241fac29763a031c9ce1089a1e4b4be.jpg", "http://yanxuan.nosdn.127.net/0dc6d93ac0498c5dfab30508b9412bc7.jpg", "http://yanxuan.nosdn.127.net/88d77c126de94ba83b264c413433d1ef.jpg", "http://yanxuan.nosdn.127.net/3379adc4f8cb904a509830c339474986.jpg", "http://yanxuan.nosdn.127.net/e4b36d6bba85f96e1fe35c721f1bef4b.jpg", "http://yanxuan.nosdn.127.net/0340dc32d4eb348e015b6ad02e613ae5.jpg", "http://yanxuan.nosdn.127.net/2e478f4d41d9cb43e5ca6d3f4ec31e5d.jpg", "http://yanxuan.nosdn.127.net/656e723cec3cfc0e84d1c72eb286c3d3.jpg", "http://yanxuan.nosdn.127.net/c0730b88458593c7f8cc3fb389682378.jpg", "http://yanxuan.nosdn.127.net/51bf3bc396723d289a1f9ec099dd7c74.jpg", "http://yanxuan.nosdn.127.net/301f70f9f1926ade3e7a7ef4c01d9084.jpg", "http://yanxuan.nosdn.127.net/7b1596630f22d05ca935ab9d9793001e.jpg", "http://yanxuan.nosdn.127.net/87c1ea8b6868f46cdba056cd714108e8.jpg"],
		"inventory": [222],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "根数",
			"attrValue": "200根"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}, {
			"attrName": "工艺",
			"attrValue": "色织工艺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 843,
		"date": "1500012326253",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1030005,
		"price": 899,
		"topName": "撞色全亚麻四件套",
		"subName": "纯亚麻面料，透气亲肤",
		"shortDescription": ["亚麻面料", "吸湿散热", "水洗工艺", "不易变形", "别出心裁", "撞色风格"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/380abf02f4e1ee984073c1a5f5d48f66.jpg", "http://yanxuan.nosdn.127.net/df1b5503c5622354e2d7d183f3e48770.jpg", "http://yanxuan.nosdn.127.net/9501ac7a3e4510c83d721c655f373352.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/86f57132793d3e3c924a7ba529849288.png", "http://yanxuan.nosdn.127.net/d01e245eaeeff36003b083f9e48421a0.jpg", "http://yanxuan.nosdn.127.net/71fbb4653d7de33f53f8d272eebe9c8e.jpg", "http://yanxuan.nosdn.127.net/66a750c2205b4ed159818cfefc961d32.jpg", "http://yanxuan.nosdn.127.net/59b6eeb70a31992b1ea9b5fb3c781c27.jpg"],
		"types": ["1.5M（床尺寸）", "1.8M/ 2.0M（床尺寸）"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/a8fedb97484d141058bc355232bc7844.jpg", "http://yanxuan.nosdn.127.net/aa5e272a84cf083c296a03faeef32ed6.jpg", "http://yanxuan.nosdn.127.net/8fd2fb566df26754c654534797dfa1bd.jpg", "http://yanxuan.nosdn.127.net/32cf31205dc1b6b42bbd6ca9a2aabaea.jpg", "http://yanxuan.nosdn.127.net/e7e0f71348f56dd6a40c8a2478586791.jpg", "http://yanxuan.nosdn.127.net/774b470824b4ff4a29f60331e3b20144.jpg", "http://yanxuan.nosdn.127.net/cc9898e5d4ac3a6b76e42db121aae0b6.jpg", "http://yanxuan.nosdn.127.net/d692546b25c6928e68a153b82a67a43b.jpg", "http://yanxuan.nosdn.127.net/07a3c5a409189b8ee2ab79ca5421ee99.jpg", "http://yanxuan.nosdn.127.net/4bd1645b9e8f3aa94ea6a2041c352397.jpg", "http://yanxuan.nosdn.127.net/48b88069ce49024e5a7f3ee6165960ac.jpg", "http://yanxuan.nosdn.127.net/37a1645307f9d3f5731bb72147859b25.jpg", "http://yanxuan.nosdn.127.net/c9ff48188d699f20ddea72558f3ec71e.jpg", "http://yanxuan.nosdn.127.net/15d1df0e289d03ababe2936c621ace26.jpg", "http://yanxuan.nosdn.127.net/4bcb25939826af34300c9b657c025334.jpg", "http://yanxuan.nosdn.127.net/c22a223c9f4efafa68a8f42d3b71d528.jpg", "http://yanxuan.nosdn.127.net/84cf2b201b3e1a5a24b219babb9d9255.jpg", "http://yanxuan.nosdn.127.net/009e66cce8a7a43bd0e97e4f02a16414.jpg", "http://yanxuan.nosdn.127.net/d3aa5570b4e01e7e7e01d2d8b4dc4b37.jpg", "http://yanxuan.nosdn.127.net/4247a2bc0d95f5a664895b7e5553e3ec.jpg", "http://yanxuan.nosdn.127.net/e8e7c456990a99e0d821bc7a4019b46d.jpg", "http://yanxuan.nosdn.127.net/af6665f7902523e9b19dc8d05219a94b.jpg", "http://yanxuan.nosdn.127.net/50dae15620254859ce950e83a9de8e19.jpg", "http://yanxuan.nosdn.127.net/b0d183809d6dd2578e22012fb5f29cb2.jpg", "http://yanxuan.nosdn.127.net/534d89cbedac890a4845c09c02e3b97f.jpg", "http://yanxuan.nosdn.127.net/13f685794d72dfa136d4a4ba7f924492.jpg", "http://yanxuan.nosdn.127.net/13febece3486646420d7de552cc89144.jpg", "http://yanxuan.nosdn.127.net/3768643d8aee9f44218c85ab78af9caf.jpg", "http://yanxuan.nosdn.127.net/8be7249357104bc94a008641b3105f1f.jpg", "http://yanxuan.nosdn.127.net/31cd85a05cdeddef127b4c785fe8da16.jpg", "http://yanxuan.nosdn.127.net/fadf2462c0f06978829530510ba95a6d.jpg", "http://yanxuan.nosdn.127.net/da61ca6ac63f21d27a85bc7b31a92b20.jpg", "http://yanxuan.nosdn.127.net/2d768f65baec4b75130dcc7c70daad88.jpg", "http://yanxuan.nosdn.127.net/50d644bc2cf83575ddd6a71a82fb4d05.jpg", "http://yanxuan.nosdn.127.net/881e101c4072be27dbb21ecd935fc6b4.jpg", "http://yanxuan.nosdn.127.net/24472778c90fc48428d84350f31fd1a7.jpg", "http://yanxuan.nosdn.127.net/e8d1dbd24abc6184905bffeb9859b18d.jpg", "http://yanxuan.nosdn.127.net/2895c067f4d44a0fc14ee1add035e2dc.jpg", "http://yanxuan.nosdn.127.net/96479876bb249cbe1b65b76bd08e03f6.jpg", "http://yanxuan.nosdn.127.net/c1b15b5c27ad4cdff32ba9eac1d38b2d.jpg", "http://yanxuan.nosdn.127.net/4f068dfac9c93c994bd4d7efacec8b70.jpg", "http://yanxuan.nosdn.127.net/13dafff25c676995e6b893a4193d0d9b.jpg", "http://yanxuan.nosdn.127.net/4098b4ec10505fc8410dfa81e97a36d3.jpg", "http://yanxuan.nosdn.127.net/05a682bc8ceff7e28655691dad62a169.jpg", "http://yanxuan.nosdn.127.net/2b19a674dfa17eb6580113bf6e354158.jpg", "http://yanxuan.nosdn.127.net/95ed5187ef97940225fc2875da7ec342.jpg", "http://yanxuan.nosdn.127.net/dbc6fb5b61197b3c5bbb4cfd2406f423.jpg", "http://yanxuan.nosdn.127.net/311c416209f055bd5fcb85b9fa02802d.jpg", "http://yanxuan.nosdn.127.net/cc5f4d85baf345a43a13d5c005756d0b.jpg", "http://yanxuan.nosdn.127.net/88c814c6da3ce42657fe36cd4639050b.jpg", "http://yanxuan.nosdn.127.net/5f73bb5665bce9b76606919424e94ace.jpg", "http://yanxuan.nosdn.127.net/267bf3ac28457f2640c2adf47e927f65.jpg", "http://yanxuan.nosdn.127.net/95f30aedac3780793a77217cec971d36.jpg", "http://yanxuan.nosdn.127.net/9c8330b3a20ca3fd799c685fcd2610e3.jpg", "http://yanxuan.nosdn.127.net/156ea9b9174741fccf12d1f84729bea0.jpg"],
		"inventory": [121, 22],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 22844-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "颜色",
			"attrValue": "橙色/ 灰色/ 黄色"
		}, {
			"attrName": "工艺",
			"attrValue": "水洗工艺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 647,
		"date": "1500012328975",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1100000,
		"price": 79,
		"topName": "300根水洗棉缎纹纯色枕套*2",
		"subName": "水洗棉的呵护，透气亲肤",
		"shortDescription": ["双面水洗", "柔软耐磨", "活性印染", "环保健康", "高支高密", "丝滑至柔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b81851f943debe128eec2fd3a89098bc.jpg", "http://yanxuan.nosdn.127.net/1ef59aea4190d946a05e98fd8fdf9200.jpg", "http://yanxuan.nosdn.127.net/59b1e4981946c183cfba95919460e070.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/15e40cfb6a78f557616814a815685fd4.png", "http://yanxuan.nosdn.127.net/66bd23f2d520195c487cf6afbe1e1f82.jpg", "http://yanxuan.nosdn.127.net/1ee354a7e3cf58a6317fced4107cd6a1.jpg", "http://yanxuan.nosdn.127.net/7419b0bf5554c3f17fe5d999d779555e.jpg", "http://yanxuan.nosdn.127.net/d8f74a7c9836024618a322b1da9f410f.jpg"],
		"types": ["石板灰", "烟褐色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/2164615ef532024ac711e6296ad3d705.jpg", "http://yanxuan.nosdn.127.net/61e79183390cf672ad9be0d3442041e5.jpg", "http://yanxuan.nosdn.127.net/bc024462d81766a7224ab3545fb6d98f.jpg", "http://yanxuan.nosdn.127.net/c2cf4a3a51c4b68e55d2e7f2d13ca543.jpg", "http://yanxuan.nosdn.127.net/f5c0f96d6c54ec2a23ef365036456f6c.jpg", "http://yanxuan.nosdn.127.net/e63577594a28504eec2e0197f7ddadf8.jpg", "http://yanxuan.nosdn.127.net/cde5c10b5076f1b92e96e1c02ca7ff48.jpg", "http://yanxuan.nosdn.127.net/b035b6b8208aa9c2ad954f30fef99775.jpg", "http://yanxuan.nosdn.127.net/27cf1dd613ee7b01e4f90bce31a34a89.jpg", "http://yanxuan.nosdn.127.net/e6edf415e99e2ba2beeae4e6a38da856.jpg", "http://yanxuan.nosdn.127.net/be546650b508f5576267423da697ccef.jpg", "http://yanxuan.nosdn.127.net/7f387f9fbb09cb79e125efa85a3af051.jpg", "http://yanxuan.nosdn.127.net/bb0702de3a208768da04e2bcfb8dfb7b.jpg", "http://yanxuan.nosdn.127.net/520d7e3a895b1171ceba26f5a0f390e6.jpg", "http://yanxuan.nosdn.127.net/1bc14f1cf49d21c3b86e033029cb927a.jpg", "http://yanxuan.nosdn.127.net/d6cda639968622812a712d4230cefcc8.jpg", "http://yanxuan.nosdn.127.net/07ef76fe3850a0ef4c708fbf6698c506.jpg", "http://yanxuan.nosdn.127.net/5336250c74718eb078b218820220a4c1.jpg", "http://yanxuan.nosdn.127.net/09fdc6f77e536aab39bc7b89a35c6959.jpg", "http://yanxuan.nosdn.127.net/2500886b52d9d4fdd143fa7c2b3e5446.jpg", "http://yanxuan.nosdn.127.net/3b2a4e13d9bb597131df9e1bcfe5a9b6.jpg", "http://yanxuan.nosdn.127.net/b7fe46cf57f0d9cc349acfe7e657bcd3.jpg", "http://yanxuan.nosdn.127.net/deac82fd0b4571e3c13d52e50e62b302.jpg", "http://yanxuan.nosdn.127.net/b36159471e198538107b92489180a4b3.jpg", "http://yanxuan.nosdn.127.net/0ac810650922fb01cdb193b31484d79d.jpg", "http://yanxuan.nosdn.127.net/5f02de2f5574a50022a9e8ffd518298b.jpg", "http://yanxuan.nosdn.127.net/8ae5b6a1c345825c13de51b0727cc855.jpg", "http://yanxuan.nosdn.127.net/41149b83c142ba653b93223f9ed56301.jpg", "http://yanxuan.nosdn.127.net/a4f64c2bb342bd18e9d76d145b63c89a.jpg", "http://yanxuan.nosdn.127.net/e84264a53c8a4cb00f0e5e1577b2fb01.jpg", "http://yanxuan.nosdn.127.net/055385e03a51dfef123a2d0163d75a42.jpg", "http://yanxuan.nosdn.127.net/d9373db501542f25f812c3fecb45b4ec.jpg", "http://yanxuan.nosdn.127.net/51e7c319c838513a20b510d989ed0080.jpg", "http://yanxuan.nosdn.127.net/3a4310313b7d5cb6a970b3136438aed4.jpg", "http://yanxuan.nosdn.127.net/d5c25568e6495ad3352388dd2c9f0719.jpg", "http://yanxuan.nosdn.127.net/79698caf7fc4cb8f99daed2b2cdeb0ba.jpg", "http://yanxuan.nosdn.127.net/6d3d314ed9a188abd8cf244fce029d9e.jpg", "http://yanxuan.nosdn.127.net/adc3da2545131a5535d2d948dbd35ff7.jpg", "http://yanxuan.nosdn.127.net/76314625178eab034fe81ccc6f8efc2c.jpg", "http://yanxuan.nosdn.127.net/73dddf214a50cde45620c4b629b72693.jpg", "http://yanxuan.nosdn.127.net/8457cc3e51cb1061e02f69c6bc16e97c.jpg", "http://yanxuan.nosdn.127.net/e7cec5452f51eb8ca4930941da82d329.jpg", "http://yanxuan.nosdn.127.net/80c359e06e6d28c2dd2582401746dc4e.jpg", "http://yanxuan.nosdn.127.net/a3c56725175efa21648f094d644ec879.jpg", "http://yanxuan.nosdn.127.net/15474760d9e688b80758b23c88a7ffb2.jpg", "http://yanxuan.nosdn.127.net/7e2acf365def8ed93f62f05b3ccb2d33.jpg", "http://yanxuan.nosdn.127.net/dd4fcf9d4b37cb6146dfd32c7c2da790.jpg", "http://yanxuan.nosdn.127.net/070861a329f22e78579bc114dee3d51c.jpg", "http://yanxuan.nosdn.127.net/d8ea41b6c4d1fae0986f6ec2c9f16933.jpg"],
		"inventory": [840, 567],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 22796-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "石板灰/ 烟褐色"
		}, {
			"attrName": "尺寸",
			"attrValue": "48*74cm"
		}, {
			"attrName": "工艺",
			"attrValue": "水洗工艺"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 435,
		"date": "1500012337878",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1110008,
		"price": 99,
		"topName": "全棉贡缎纯色床单",
		"subName": "丝滑缎纹 舒适百搭",
		"shortDescription": ["缎纹面料", "缎纹面料", "活性染料", "不含甲醛", "8色可选", "风格百搭"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/681c3a745f2ffe8ed362e3397130868f.jpg", "http://yanxuan.nosdn.127.net/4de028886a36e4bbbc9603f12622f98b.jpg", "http://yanxuan.nosdn.127.net/23b4edaf6f64d121178336e90f73ddc7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/255a4888161f9b4fe530cf319f14551d.png", "http://yanxuan.nosdn.127.net/4ded1e09f09d9eb1d2f24d87759fb232.jpg", "http://yanxuan.nosdn.127.net/ce801d4915ecca7befb5e88159b3dbb3.jpg", "http://yanxuan.nosdn.127.net/406423eeb3c5c5347462246767ef6bd9.jpg", "http://yanxuan.nosdn.127.net/4e912ca54b45f3b0cf00b5f6977d1110.jpg"],
		"types": ["天蓝色", "茶香粉", "蜜橙", "千岁绿", "荧光绿", "青蓝", "伽罗色"],
		"chara": "7色可选",
		"description": ["http://yanxuan.nosdn.127.net/b075c8f9b1479f552f1c22bb003a4778.jpg", "http://yanxuan.nosdn.127.net/90335eae1e7996d825dc5c5d746fe185.jpg", "http://yanxuan.nosdn.127.net/5ef7c9665583f4d0611ab38f81165477.jpg", "http://yanxuan.nosdn.127.net/22b20201f6041727593064b943ea082d.jpg", "http://yanxuan.nosdn.127.net/3bcec02ed06d52e95268bd3d298ef807.jpg", "http://yanxuan.nosdn.127.net/e0945c41940ac307f5d2bc6a31faafc7.jpg", "http://yanxuan.nosdn.127.net/2e2631433feee257fe3bf92c83742601.jpg", "http://yanxuan.nosdn.127.net/a6dae5ef3ea6449c498a42ab1af30836.jpg", "http://yanxuan.nosdn.127.net/99852a77e69c6ce7640f1138fb39ae76.jpg", "http://yanxuan.nosdn.127.net/c8e0a0674ded8d0ceb966f5978cf5e2d.jpg", "http://yanxuan.nosdn.127.net/4296a26feba5da9a0f9852a2d33ca873.jpg", "http://yanxuan.nosdn.127.net/12e0878b73bfe13f8b7c39a9e615da13.jpg", "http://yanxuan.nosdn.127.net/896974059ed945bf63b8fae27f17b894.jpg", "http://yanxuan.nosdn.127.net/023f86983300f732b8ff800ba8cf7629.jpg", "http://yanxuan.nosdn.127.net/ca26b39219098b9d1383bb0ad9548f87.jpg", "http://yanxuan.nosdn.127.net/0582ec88341c7c83937754451db486e1.jpg", "http://yanxuan.nosdn.127.net/a22cff5105760b980501bd92d0d32370.jpg", "http://yanxuan.nosdn.127.net/3f1fb558309a6d1e563ae4b21f469d4c.jpg", "http://yanxuan.nosdn.127.net/69028e41d25b4b6f78e8080298cbe47f.jpg", "http://yanxuan.nosdn.127.net/ac2eac6e666cbc0b2094479e0d8e3c36.jpg", "http://yanxuan.nosdn.127.net/f7439f9889ee547c257b09fa744612f9.jpg", "http://yanxuan.nosdn.127.net/a8a807088245c6201effc52420599d8e.jpg", "http://yanxuan.nosdn.127.net/a8b9b3ee85a4f0c3d4ffd839558c4d20.jpg", "http://yanxuan.nosdn.127.net/3323d8b836d070e6df397b507ca8adab.jpg", "http://yanxuan.nosdn.127.net/d6e82b6e673559b9ecdd1bb1ed48dadb.jpg", "http://yanxuan.nosdn.127.net/898d1673898606a296ad8116f3fc3318.jpg", "http://yanxuan.nosdn.127.net/1bc1981453716961a1755a9aa99e1c22.jpg", "http://yanxuan.nosdn.127.net/a602783142d14395abcb79ae4e5f6443.jpg", "http://yanxuan.nosdn.127.net/84e314b6370167153e3b9d616ea22adb.jpg", "http://yanxuan.nosdn.127.net/ba6faca9fee24c2994e3d58525687f83.jpg", "http://yanxuan.nosdn.127.net/03870af31f1a785fc320c8b65156efd9.jpg", "http://yanxuan.nosdn.127.net/e4775a9469593964ca91f31e2569bb16.jpg", "http://yanxuan.nosdn.127.net/acab7d21a254b4ca86dc5077284e3385.jpg", "http://yanxuan.nosdn.127.net/738e701503368d7ca07e3bc140dcad89.jpg", "http://yanxuan.nosdn.127.net/e7be7dd38763515b727409bdff7cf6ee.jpg", "http://yanxuan.nosdn.127.net/4e367591acf6a3fc9b5c58f3b16a578a.jpg", "http://yanxuan.nosdn.127.net/95bd49b655d5b1e7b43fa726487d827b.jpg", "http://yanxuan.nosdn.127.net/2726d90533fc016a65fe1c5f950dc551.jpg", "http://yanxuan.nosdn.127.net/614482c69fd45d50168cf9eb244a0313.jpg", "http://yanxuan.nosdn.127.net/79c5a04fcdc3b8556eef8a58131d1c45.jpg", "http://yanxuan.nosdn.127.net/0efb4a459868f87b0e5b88664077b488.jpg", "http://yanxuan.nosdn.127.net/2bb1cbd5782598e50c65fe725a8904af.jpg", "http://yanxuan.nosdn.127.net/cab2905c4de70b5960aeb480fc9157da.jpg"],
		"inventory": [572, 585, 777, 516, 769, 743, 781],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5M床：245*250cm1.8M/ 2.0M床：245*270cm"
		}, {
			"attrName": "颜色",
			"attrValue": "天蓝色/ 烟草色/ 茶香粉/ 蜜橙/ 千岁绿/ 荧光绿/ 青蓝/ 伽罗色"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB 18401-2009 B类"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 833,
		"date": "1500012351638",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1036013,
		"price": 109,
		"topName": "全棉针织素色床笠",
		"subName": "百隆色纺纱，亲肤舒适，裸睡神器",
		"shortDescription": ["双捻工艺", "耐用紧密", "A类标准", "婴童可用", "色纺纱艺", "色彩牢固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ff8198ec9e1872e05363aabb8af5c9ad.jpg", "http://yanxuan.nosdn.127.net/3e2122644e6834370b98139e459bc1b2.jpg", "http://yanxuan.nosdn.127.net/64b319c8f6a6f6211564c27a690a4cbb.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/da1bc2c10f7b2e53f2466bd23953b982.png", "http://yanxuan.nosdn.127.net/e78d08c1c34aac63f3b73f2029ca4e77.jpg", "http://yanxuan.nosdn.127.net/29f185e123c9e1f4c075ff014db44324.jpg", "http://yanxuan.nosdn.127.net/b2f4d0efc4dc1baf94aaa36712681da5.jpg", "http://yanxuan.nosdn.127.net/b342166f7e4c5eb4a430d524f248ef07.jpg"],
		"types": ["1.5M床：150*200*25cm", "1.8M床：180*200*25cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/2ea947dc5f93d996b2d9651f07cf4e5a.jpg", "http://yanxuan.nosdn.127.net/584f94e084559eb5a4e8ba4b0c0d94b8.jpg", "http://yanxuan.nosdn.127.net/bd00b278f6e9ede88a9523f12da21a8d.jpg", "http://yanxuan.nosdn.127.net/89a1458cc189b185d42b0fce5ec47786.jpg", "http://yanxuan.nosdn.127.net/e8ca61b4ac2285c6399cf13e0e706122.jpg", "http://yanxuan.nosdn.127.net/8a0ef1725c91b35d28fa2aade62474fa.jpg", "http://yanxuan.nosdn.127.net/456dcb6d70990b9175d70ba596f3c407.jpg", "http://yanxuan.nosdn.127.net/e947956bcb3f7a281d75d900e14c1467.jpg", "http://yanxuan.nosdn.127.net/903adc0d93d873213cb63e2e8131b279.jpg", "http://yanxuan.nosdn.127.net/554f7b2d804375a1d6234dd530afba62.jpg", "http://yanxuan.nosdn.127.net/0736125b93c2530567a3da47e51207f1.jpg", "http://yanxuan.nosdn.127.net/d05886366aa27bfdbcab94f1cec3fdf4.jpg", "http://yanxuan.nosdn.127.net/a28af88609476e96c154e0724fbe1f5a.jpg", "http://yanxuan.nosdn.127.net/c8369453fa28fd4ceb4ad8d07797b8f5.jpg", "http://yanxuan.nosdn.127.net/6b876f252a587a0e96116b346b7f3261.jpg", "http://yanxuan.nosdn.127.net/fa33c3d86cb635ae43cb467eceac29ab.jpg", "http://yanxuan.nosdn.127.net/ece8b099041cb048b9fef0084e913b3c.jpg", "http://yanxuan.nosdn.127.net/4d506d32e1fe346b94bea4a4358ffa62.jpg", "http://yanxuan.nosdn.127.net/d45055d253ecac606f8f7a20cc740436.jpg", "http://yanxuan.nosdn.127.net/8b409d218695083e52089ab595ec169e.jpg", "http://yanxuan.nosdn.127.net/6c2713ccb4655853d0f34e97481742a4.jpg", "http://yanxuan.nosdn.127.net/099b05e20345682d8ccffed299de4036.jpg", "http://yanxuan.nosdn.127.net/681e72addfa6a5c99c225b6cac80338b.jpg", "http://yanxuan.nosdn.127.net/311a4c606bdebcf4e07bb4069d47d22d.jpg", "http://yanxuan.nosdn.127.net/d7d70ea6a2a2480717e8d495a78c9f1c.jpg", "http://yanxuan.nosdn.127.net/e746e02d8cf7f32f4f0c3aa42fd3951f.jpg", "http://yanxuan.nosdn.127.net/aaa74552f611e799d7912761a76718e0.jpg", "http://yanxuan.nosdn.127.net/083c5a0f704b115660f5d6f1fe23d617.jpg", "http://yanxuan.nosdn.127.net/5e4ac92008c116a73048c4607f12eeca.jpg", "http://yanxuan.nosdn.127.net/e833539bb3899ad048186fa2aff42241.jpg", "http://yanxuan.nosdn.127.net/2289c3881b2d32a9132d684cdd9b4fca.jpg", "http://yanxuan.nosdn.127.net/d1f8a657fd8363fcf4a62fa9ab838d61.jpg", "http://yanxuan.nosdn.127.net/0fbef986dac776654ec8cd23e3cd8bf8.jpg", "http://yanxuan.nosdn.127.net/ca3ff84fc05e386fdf3ee789d6fc70e7.jpg", "http://yanxuan.nosdn.127.net/80a1a3202fc0104e54bd1fb5b111b448.jpg", "http://yanxuan.nosdn.127.net/071a8ca1a90782d6813f7c125fe04ca9.jpg", "http://yanxuan.nosdn.127.net/840a076f6ac26b74b3786cfc3b66e785.jpg", "http://yanxuan.nosdn.127.net/923f018943db353459a940a2d3b57b5c.jpg", "http://yanxuan.nosdn.127.net/360d3db07247ab7e824086d134ca8e83.jpg", "http://yanxuan.nosdn.127.net/d28b9978bbf757f926a8f1fec1af4355.jpg", "http://yanxuan.nosdn.127.net/9a8d4554060bdbcb99c6b910bca6de73.jpg", "http://yanxuan.nosdn.127.net/dbc5931307c3dabab82f4b6314064097.jpg", "http://yanxuan.nosdn.127.net/0ed409573b7775e6a4aa0d11ae2bbe02.jpg", "http://yanxuan.nosdn.127.net/6e4653f2d0dcf16a6e9fba2364074df0.jpg", "http://yanxuan.nosdn.127.net/b27de84243cc25f752b3b7e955b0177d.jpg", "http://yanxuan.nosdn.127.net/8ddc46378605add71e99e51fdaf83db5.jpg", "http://yanxuan.nosdn.127.net/e402495d57f4934e7224948ac3d956cc.jpg", "http://yanxuan.nosdn.127.net/6cdded8ed37708bf2a817f05efccbec0.jpg", "http://yanxuan.nosdn.127.net/56ad5ff1c7f6c686739961df64abef75.jpg", "http://yanxuan.nosdn.127.net/7508fe30e5bd5d46c7dcd95b059616cf.jpg", "http://yanxuan.nosdn.127.net/760c798a64bd06d50a769935ba7cc59a.jpg", "http://yanxuan.nosdn.127.net/621d6bf8f4938f18b585d8418f592b6e.jpg", "http://yanxuan.nosdn.127.net/8147afb283cb461062a47c98ec6e663b.jpg", "http://yanxuan.nosdn.127.net/49a679fc021af27dc631702b58893bd8.jpg", "http://yanxuan.nosdn.127.net/cc9c61af723770deb3796bdc4d1c7fd0.jpg", "http://yanxuan.nosdn.127.net/09e9e3ee2729bd7b1525db50ef15d978.jpg", "http://yanxuan.nosdn.127.net/f77aaed5876f0b974834aaf0e0da96fa.jpg", "http://yanxuan.nosdn.127.net/b323f96fabccf05c8f3ddd3537790cb5.jpg", "http://yanxuan.nosdn.127.net/a23566fd52f0c4cfe83af728aa66a014.jpg", "http://yanxuan.nosdn.127.net/0c4bbac4f263a5dc10fd3c66f701985c.jpg", "http://yanxuan.nosdn.127.net/f40140d230db392fe51306614945713f.jpg", "http://yanxuan.nosdn.127.net/0b9c12121bda764443a1933e533a4445.jpg", "http://yanxuan.nosdn.127.net/632a48034a7c29e15a1e6c70014e3964.jpg"],
		"inventory": [92, 359],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5M床：150*200*25cm1.8M床：180*200*25cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 62028-2015"
		}, {
			"attrName": "工艺",
			"attrValue": "双捻工艺"
		}, {
			"attrName": "产地",
			"attrValue": "浙江 江苏"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1：针织棉面料因为工艺不可避免原因，使用一段时间后会出现起毛起球现象，使用去毛机修理一下即可。2：因为针织的编织工艺，成品在使用过程中会有轻微的变型，不影响使用。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 234,
		"date": "1500012363649",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1036016,
		"price": 109,
		"topName": "日式色织水洗棉床笠",
		"subName": "色织水洗工艺，亲肤柔软",
		"shortDescription": ["水洗工艺", "不易变形", "色织工艺", "着色均匀", "纯色褶皱", "亲柔透气"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d2fbc3d28e488529873ce8077b954fe9.jpg", "http://yanxuan.nosdn.127.net/320946b46c87c728f0be4d3fd1093cec.jpg", "http://yanxuan.nosdn.127.net/9d53bde46e4242370f9e6805c532c705.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/513d08057c69fdb7d19cc810e976118d.png", "http://yanxuan.nosdn.127.net/e4cd24991107bf5f020877ae356d5e91.jpg", "http://yanxuan.nosdn.127.net/a98f3626eddeb5840c1ad3f72b5ba368.jpg", "http://yanxuan.nosdn.127.net/2766b097e1b9b3993cf11c68c5581631.jpg", "http://yanxuan.nosdn.127.net/1fe07019b1a38aa1ff5e4da9c301642e.jpg"],
		"types": ["1.5M床：150*200*25cm", "1.8M床：180*200*25cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/27aa5bc8460115ccb194f7f6878e68bc.jpg", "http://yanxuan.nosdn.127.net/765f188e5a348b9309fb6925c7b21aea.jpg", "http://yanxuan.nosdn.127.net/43945809af824c2be9ee6fa77ffa7789.jpg", "http://yanxuan.nosdn.127.net/2a95d653097cb9349a4a4c994dbec535.jpg", "http://yanxuan.nosdn.127.net/38e7c1373521ff55c3c976b2c7bfe149.jpg", "http://yanxuan.nosdn.127.net/4407d34700a2c1fe874280344ba538ae.jpg", "http://yanxuan.nosdn.127.net/461cdf2416cea7981df8043dc5ef0f0c.jpg", "http://yanxuan.nosdn.127.net/eb17feeda18a8852a0a9e52631ae8194.jpg", "http://yanxuan.nosdn.127.net/0f4e1a21b84a69bf745b11d331cdfa0d.jpg", "http://yanxuan.nosdn.127.net/a12d561d7d8901f714a6e7748e1c5615.jpg", "http://yanxuan.nosdn.127.net/99bf6cdd7bb5518e60dcd6f5e7621f6f.jpg", "http://yanxuan.nosdn.127.net/66acc9ba0870f0bbfac7daf0f247ca8b.jpg", "http://yanxuan.nosdn.127.net/7de61864c4f3e580efe49bea1677b2f9.jpg", "http://yanxuan.nosdn.127.net/a0e3cb8406e04b802324deb5994f7bb8.jpg", "http://yanxuan.nosdn.127.net/cfcbc803bcd22c52179af79458e6ab74.jpg", "http://yanxuan.nosdn.127.net/c6378dfc799bf4348bdf591878b8874b.jpg", "http://yanxuan.nosdn.127.net/79dfe0e605da000837104ca59bcacd70.jpg", "http://yanxuan.nosdn.127.net/e5cddd147a17cd8e0ca3f1c344799150.jpg", "http://yanxuan.nosdn.127.net/75c4dd15612240676e8745947ba919b4.jpg", "http://yanxuan.nosdn.127.net/7da0b604d50d515c9cca36882ac14f1a.jpg", "http://yanxuan.nosdn.127.net/cf904edee30b5146bdaa9702e10220fe.jpg", "http://yanxuan.nosdn.127.net/01aefba507ae7eec7227c4198a66403b.jpg", "http://yanxuan.nosdn.127.net/df6e40b4b102add68cf411c5813662ed.jpg", "http://yanxuan.nosdn.127.net/d62ed698a238fc51141e4814e4aa36f6.jpg", "http://yanxuan.nosdn.127.net/3c76b521fd6adde54dbb435245f6870d.jpg", "http://yanxuan.nosdn.127.net/ca3f82155bca6258a3e8ce11f6057b78.jpg", "http://yanxuan.nosdn.127.net/436c43a0feedb51240f9c88bc0816733.jpg", "http://yanxuan.nosdn.127.net/41481ad182555bdf6b9c2091278414f7.jpg", "http://yanxuan.nosdn.127.net/d7546a5f6ef3158ff9b339252ff78696.jpg", "http://yanxuan.nosdn.127.net/7ecb09d1c8ced8b066dce901e51ee8cf.jpg", "http://yanxuan.nosdn.127.net/e403b8fb0f2bb6064412a1980c723d3e.jpg", "http://yanxuan.nosdn.127.net/54953bd9dd44742c5ad576b17582a703.jpg", "http://yanxuan.nosdn.127.net/cccb1ab3d945b7e24aed1dfbf42b9676.jpg", "http://yanxuan.nosdn.127.net/fe819702b2250071f0a0071687c7389a.jpg", "http://yanxuan.nosdn.127.net/eae0f463b127c7309bfdc13a45e48ff2.jpg", "http://yanxuan.nosdn.127.net/82e69da4363fc4404bf76b4f409343e8.jpg", "http://yanxuan.nosdn.127.net/22d0e5472c227bdc30f0ad0d9b35e8af.jpg", "http://yanxuan.nosdn.127.net/99957f03aa9251a8e59a7ae667dc479c.jpg", "http://yanxuan.nosdn.127.net/0433876cad19a06ea91bbc7608d47fee.jpg", "http://yanxuan.nosdn.127.net/a965570bf77472bfcec5f14680edd55d.jpg", "http://yanxuan.nosdn.127.net/99d89cbd0b23b522e5070039889e7a28.jpg", "http://yanxuan.nosdn.127.net/fb81ad0b1fc1cec89cc2c28bfde6d46d.jpg", "http://yanxuan.nosdn.127.net/cd2acab71c610d144464defb9e009af8.jpg", "http://yanxuan.nosdn.127.net/669cda2c9c42fdb0a72c74ea2da71d0c.jpg", "http://yanxuan.nosdn.127.net/18090d25c37e360ac4b1410daf14fb2a.jpg", "http://yanxuan.nosdn.127.net/6eee9afdba088f358eb96e8901ef6ad3.jpg", "http://yanxuan.nosdn.127.net/ace611f1dcb46256611b3485f820cf51.jpg", "http://yanxuan.nosdn.127.net/eacee782799659dcab997fedfb9ef286.jpg", "http://yanxuan.nosdn.127.net/4f26fa1d434ecc7eef863e9708828b79.jpg", "http://yanxuan.nosdn.127.net/2f5772eb4931b6d74b3147716f008dd0.jpg", "http://yanxuan.nosdn.127.net/f6d176dad0dccbe141aad82a7014eb0e.jpg", "http://yanxuan.nosdn.127.net/edb8b0859327503c7df8b24a544bc2b8.jpg", "http://yanxuan.nosdn.127.net/3efc7698b3ebc19aabb61ab061a1e80e.jpg", "http://yanxuan.nosdn.127.net/52735272d754f74beb3965970cc76b32.jpg", "http://yanxuan.nosdn.127.net/8904e0e64dea985fbd99cbeff1a83db3.jpg", "http://yanxuan.nosdn.127.net/29b1a16a684be99b30e3f99a5985f681.jpg", "http://yanxuan.nosdn.127.net/ef9f6230b76bef57703fac85f69efa0c.jpg", "http://yanxuan.nosdn.127.net/0f5bdb37e1abaabb8c2234a631b04aed.jpg", "http://yanxuan.nosdn.127.net/31a47d47d24d219a24bdac55eda9b466.jpg", "http://yanxuan.nosdn.127.net/057140b9ba1541ee97775cfdf5f418db.jpg", "http://yanxuan.nosdn.127.net/8329134fe549244755fe13aba2571712.jpg"],
		"inventory": [992, 560],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.5M床：150*200*25cm1.8M床：180*200*25cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22797-2009"
		}, {
			"attrName": "工艺",
			"attrValue": "色织水洗工艺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 739,
		"date": "1500012387266",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1100002,
		"price": 189,
		"topName": "300根水洗棉缎纹纯色床笠",
		"subName": "柔软水洗棉，百分百的呵护",
		"shortDescription": ["双面水洗", "柔软耐磨", "活性印染", "环保健康", "高支高密", "丝滑至柔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9926de3e084fe6f25af0b47f68836cdf.jpg", "http://yanxuan.nosdn.127.net/96e95586118cc4f717c46c5a3cae0172.jpg", "http://yanxuan.nosdn.127.net/ca1aa5cc4ee87472fe21bae060f70ed5.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/edf1945ef594c00920bdc727f4c5c7fd.png", "http://yanxuan.nosdn.127.net/b2f5fd5577d07a69e4f4f8919132901d.jpg", "http://yanxuan.nosdn.127.net/fb7b80643e0bc30a78688a964c3aee57.jpg", "http://yanxuan.nosdn.127.net/393e848f1da052784efe77f565b86dbb.jpg", "http://yanxuan.nosdn.127.net/8f4ed88b7550586de659a767bb409799.jpg"],
		"types": ["石板灰", "烟褐色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/b113c05377e190d731c8276e5799387c.jpg", "http://yanxuan.nosdn.127.net/1599d7e6b6912cc1d385d1eb4da29f32.jpg", "http://yanxuan.nosdn.127.net/33d3d8ff4e26960705bda55bd7dab175.jpg", "http://yanxuan.nosdn.127.net/fbefed7e260fc9e54098ae9b7cfad1af.jpg", "http://yanxuan.nosdn.127.net/1c822575867fa4918096666cf661feae.jpg", "http://yanxuan.nosdn.127.net/b6eff8d3a5ae780b159c0d9e95b63c9c.jpg", "http://yanxuan.nosdn.127.net/f02dc5450a320e0658a029e5190b9784.jpg", "http://yanxuan.nosdn.127.net/d93ca19fd2008710ee23112e22667072.jpg", "http://yanxuan.nosdn.127.net/9e6e1cce60f15101d79f4ba3ed162ff7.jpg", "http://yanxuan.nosdn.127.net/0102e764033c3954289920cb6e10826a.jpg", "http://yanxuan.nosdn.127.net/c5274a83fe9644269f81a39d157b0885.jpg", "http://yanxuan.nosdn.127.net/db217c5ee31c601dabaf53c5231d638f.jpg", "http://yanxuan.nosdn.127.net/f3cd27ea1974a41d88352c5359ef218b.jpg", "http://yanxuan.nosdn.127.net/449851f2dc340c54b373c28e0e28e43a.jpg", "http://yanxuan.nosdn.127.net/f758ecf146bd7ce77316d1ccb4d85136.jpg", "http://yanxuan.nosdn.127.net/d7d3a08f3d596f44bd144f1874f01d2b.jpg", "http://yanxuan.nosdn.127.net/701d32168cc8568cb9282fa7bac3e97f.jpg", "http://yanxuan.nosdn.127.net/32df87bc772fbb87bbd704e6f3f9152f.jpg", "http://yanxuan.nosdn.127.net/dbccd6766fd90ef1c4b7926a6da42914.jpg", "http://yanxuan.nosdn.127.net/a9248b70482bf6c0c08bfd7dc1825ff2.jpg", "http://yanxuan.nosdn.127.net/dd52704b957a03bd7652a8abfc79169f.jpg", "http://yanxuan.nosdn.127.net/95fed81f2051ac18aed79ac65506bcc7.jpg", "http://yanxuan.nosdn.127.net/a8ff2d10eb455e26fbd49ca8577a748e.jpg", "http://yanxuan.nosdn.127.net/e72b42e17384d7375eae6188db4a0b3b.jpg", "http://yanxuan.nosdn.127.net/a19cc090a4e878096c2e9bd1aa57255c.jpg", "http://yanxuan.nosdn.127.net/d8b63b926799b86237f9da0c09d9b9b1.jpg", "http://yanxuan.nosdn.127.net/c42156238f6747c56169e48ed2332fbe.jpg", "http://yanxuan.nosdn.127.net/c3727a66cd1faf92f17b6e42d1ac9ce5.jpg", "http://yanxuan.nosdn.127.net/20706d16caf832cbbc9336e777298b2e.jpg", "http://yanxuan.nosdn.127.net/b199e8aad7dc32d9da9e2acae4a9f7f3.jpg", "http://yanxuan.nosdn.127.net/a6171ea81148f8349f2a3e7795f9a797.jpg", "http://yanxuan.nosdn.127.net/53c24120423d4ab3e0682b34d165cce0.jpg", "http://yanxuan.nosdn.127.net/2998210b6516bb72ca4ecc552fe1c452.jpg", "http://yanxuan.nosdn.127.net/40a3b58c8994da5f68c9a70603cfc69f.jpg", "http://yanxuan.nosdn.127.net/676acaa002d43fe87c7f08891ce1e375.jpg", "http://yanxuan.nosdn.127.net/061f47e80f9ba0b14d0f6ff1d97832b0.jpg", "http://yanxuan.nosdn.127.net/d68d15ac856a5f394be758f5b14472d4.jpg", "http://yanxuan.nosdn.127.net/e17041f2ab2fd90d4d645c2b81e117ce.jpg", "http://yanxuan.nosdn.127.net/91ce73361dca495fc01ea078c63be200.jpg", "http://yanxuan.nosdn.127.net/8b301b6dd7ccd1476e20eb87ac93fd21.jpg", "http://yanxuan.nosdn.127.net/8f28caeb1ae005bbbf13e445cd81d70f.jpg", "http://yanxuan.nosdn.127.net/7f96513f4cf52f2cd0caf5a49f0cf47a.jpg", "http://yanxuan.nosdn.127.net/b50b75e2af4c9c60f8bbc92df33557c0.jpg", "http://yanxuan.nosdn.127.net/d8dd9c0862e37cfddf42257403759c56.jpg", "http://yanxuan.nosdn.127.net/5c8b1b6c2dbe8c26a13b4e4ac9a5f523.jpg", "http://yanxuan.nosdn.127.net/d14380f50a2484cfbfe6d4b55e254ee3.jpg", "http://yanxuan.nosdn.127.net/0b2c0b030495b0c1970026e643eb74d5.jpg", "http://yanxuan.nosdn.127.net/8edef8d8fa2c866a6d37088cc4888f51.jpg", "http://yanxuan.nosdn.127.net/b2759420c8d3cb17f8df32845feb3e8c.jpg", "http://yanxuan.nosdn.127.net/076653218d9bb6fbd2009edd2a7b55d7.jpg"],
		"inventory": [535, 538],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 22797-2009"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5M床：150*200*25cm1.8M床：180*200*25cm"
		}, {
			"attrName": "颜色",
			"attrValue": "石板灰/ 烟褐色"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "工艺",
			"attrValue": "水洗工艺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 4,
		"date": "1500012390017",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1100001,
		"price": 199,
		"topName": "300根水洗棉缎纹纯色床单",
		"subName": "水洗棉的柔软舒适，百分百的亲肤呵护",
		"shortDescription": ["双面水洗", "柔软耐磨", "活性印染", "环保健康", "高支高密", "丝滑至柔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e2ee8cd743dd0563857f15a83994c8b2.jpg", "http://yanxuan.nosdn.127.net/d5f280e38273999236aaaab7775bfbb6.jpg", "http://yanxuan.nosdn.127.net/b815f1fde695cae69e4da7a9db65643c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a95285853138cbaf56e4ba729f2b8749.png", "http://yanxuan.nosdn.127.net/22948407b79bf9cf67c39f111fb9024b.jpg", "http://yanxuan.nosdn.127.net/14d9efa1bfbe9d0747e950bb74fa07e7.jpg", "http://yanxuan.nosdn.127.net/46bf309e5ebc33f38d19957f9f2664f3.jpg", "http://yanxuan.nosdn.127.net/de5093b5353259604b68418fe58c6cea.jpg"],
		"types": ["石板灰", "烟褐色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/52a02aab5a4659f282fc638b350d7f95.jpg", "http://yanxuan.nosdn.127.net/7fe116f74bd0d14270c0990d1daf06b6.jpg", "http://yanxuan.nosdn.127.net/90882a17a426788993a81da84b4c7fbd.jpg", "http://yanxuan.nosdn.127.net/54d8848ead619164ebbfa7b67d448a47.jpg", "http://yanxuan.nosdn.127.net/766865b5d8124fe105cc5039521ce22f.jpg", "http://yanxuan.nosdn.127.net/4a91ebe3b5a7173d1540ed41114427a7.jpg", "http://yanxuan.nosdn.127.net/43502a858916eb140f3bfc95f90f61f4.jpg", "http://yanxuan.nosdn.127.net/b98b6b62828b7cf8ffeba592261d6d75.jpg", "http://yanxuan.nosdn.127.net/3e40587f3bf72c40ff72fa3e1b9639e5.jpg", "http://yanxuan.nosdn.127.net/81ade842bf7a9a87313fa55e1d4a7ff5.jpg", "http://yanxuan.nosdn.127.net/d1369e140bea5d9d1d807ac6a2184540.jpg", "http://yanxuan.nosdn.127.net/9dfa33237be0666a2eafcb4144c6507f.jpg", "http://yanxuan.nosdn.127.net/aebe79ce72d63dca6044d90ae42306b2.jpg", "http://yanxuan.nosdn.127.net/bd202b7b2c6939abfd9ec86ec4fcd04c.jpg", "http://yanxuan.nosdn.127.net/c90927890e763a70b7c022ae52bb3933.jpg", "http://yanxuan.nosdn.127.net/be7692bb8797f05e9ca5ecc53980bcfb.jpg", "http://yanxuan.nosdn.127.net/d719888db5c6a6d02de04fafeee52d34.jpg", "http://yanxuan.nosdn.127.net/9932f0c40aa4f0683d49dd279ac8cb37.jpg", "http://yanxuan.nosdn.127.net/b45044e18872c3fee33abf7c9a4756a6.jpg", "http://yanxuan.nosdn.127.net/9b1448b186b8958ec8451079b43a3fa6.jpg", "http://yanxuan.nosdn.127.net/04e7d6d26a3a7793c1fcfa85ce88930a.jpg", "http://yanxuan.nosdn.127.net/7f8133c402129a909bcbfb1a510957b8.jpg", "http://yanxuan.nosdn.127.net/997486762d960d57f9a60a5e927adcb0.jpg", "http://yanxuan.nosdn.127.net/c7c7488aa89d34886e1b7b94dc78aaf4.jpg", "http://yanxuan.nosdn.127.net/1d426c800a38b6fd9b0e89f905d5861e.jpg", "http://yanxuan.nosdn.127.net/92bc77c3893766d512d699420043250e.jpg", "http://yanxuan.nosdn.127.net/2cab9c7a67ba1a816be3c3cbb6db6719.jpg", "http://yanxuan.nosdn.127.net/d7809202f7f45fd5082a0899c0faa8a6.jpg", "http://yanxuan.nosdn.127.net/11f16921d77e740616262bb89cae747c.jpg", "http://yanxuan.nosdn.127.net/ad1a0b186d1d3653788849eee22b0701.jpg", "http://yanxuan.nosdn.127.net/15e219fb1ff21dcdf1149b4728f29c38.jpg", "http://yanxuan.nosdn.127.net/3c6c27566ad4ef4db783464203ec0b17.jpg", "http://yanxuan.nosdn.127.net/fbaed905816e210992ff56c11515baee.jpg", "http://yanxuan.nosdn.127.net/ab11d74c2e950bc4926df20d2f3289c2.jpg", "http://yanxuan.nosdn.127.net/6caf7b9fa56455f4efaff939a0894c89.jpg", "http://yanxuan.nosdn.127.net/11e1c56f129c68f2e668f35af5647a8c.jpg", "http://yanxuan.nosdn.127.net/e922764d150632e8acae2280b3c61570.jpg", "http://yanxuan.nosdn.127.net/450b0a0b0c624d559c27beabe6f9aeb9.jpg", "http://yanxuan.nosdn.127.net/d2bde52261504acd71ee7fd7394cc5f9.jpg", "http://yanxuan.nosdn.127.net/4010b0e19f9ccc01152e0004e90040ca.jpg", "http://yanxuan.nosdn.127.net/7b848a59522b381140e6ea54381fe60f.jpg", "http://yanxuan.nosdn.127.net/f6a55c1b12fe7478e6cb502fb3a89ab2.jpg", "http://yanxuan.nosdn.127.net/d04e5c6151fcd296c03e3636cc400ddf.jpg", "http://yanxuan.nosdn.127.net/f490ab8e9bbd286e47c0a8f3bd4adeee.jpg", "http://yanxuan.nosdn.127.net/c2710161ba5f0e64807a6282255bb686.jpg", "http://yanxuan.nosdn.127.net/fb7229e9c581b844289fe81bc0b88cb3.jpg", "http://yanxuan.nosdn.127.net/4ff64ea78659fd39b7934247a148e04b.jpg", "http://yanxuan.nosdn.127.net/c18fbe31057289c95fe5afd601ae00ed.jpg", "http://yanxuan.nosdn.127.net/1358116cd85df0f6bb586e5714b15578.jpg"],
		"inventory": [988, 412],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 22797-2009"
		}, {
			"attrName": "颜色",
			"attrValue": "石板灰/ 烟褐色"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.5M床：245*250cm1.8M/ 2.0M床：245*270cm"
		}, {
			"attrName": "工艺",
			"attrValue": "水洗工艺"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 119,
		"date": "1500012393197",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1021004,
		"price": 299,
		"topName": "澳洲羊羔毛AB面盖毯",
		"subName": "冬暖夏凉，吸湿排汗。",
		"shortDescription": ["梭织工艺", "细腻柔软", "天然羊毛", "吸湿保暖", "AB双面", "独特设计"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d022301024efa27b73bfee721263b0d6.jpg", "http://yanxuan.nosdn.127.net/cdc2b4bde62ca34851eed29683e78ba8.jpg", "http://yanxuan.nosdn.127.net/1d3ab11a6cf53bef973bdc196635b330.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/654b02045fde802b51d5bbf09a8b75f2.png", "http://yanxuan.nosdn.127.net/7040cb7e6982c3e008575a4ef28c9ca2.jpg", "http://yanxuan.nosdn.127.net/28f75df99da69ef03d1a9eb581571438.jpg", "http://yanxuan.nosdn.127.net/21bdfbb496ba391223b1ea35cecf61a5.jpg", "http://yanxuan.nosdn.127.net/6b00e7da23c7d6db26e6d7b6a7615dd2.jpg"],
		"types": ["生姜黄"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/7a82ce63285fa75e7c45958db6e1ea72.jpg", "http://yanxuan.nosdn.127.net/c6251683549d0cefad6d75d48371ee5d.jpg", "http://yanxuan.nosdn.127.net/332da1ccf902e60d638ee7a10b376949.jpg", "http://yanxuan.nosdn.127.net/46b7c34a5c80742a1c2e64c984aadf45.jpg", "http://yanxuan.nosdn.127.net/0309bc61af948669fe361b33271c79cc.jpg", "http://yanxuan.nosdn.127.net/f6d61c696d3194672cbfc760e2dfab04.jpg", "http://yanxuan.nosdn.127.net/1ece10fc88b908d9166e3f0fb5654b34.jpg", "http://yanxuan.nosdn.127.net/01da8df479e8eade44e5b97d98d2ecdc.jpg", "http://yanxuan.nosdn.127.net/6e94e41f4b0fc8a91b48d111cf559963.jpg", "http://yanxuan.nosdn.127.net/39cc39f48b07dcd55280d6d41446a855.jpg", "http://yanxuan.nosdn.127.net/bbb6f955287c419cb2560b9a92507fbd.jpg", "http://yanxuan.nosdn.127.net/b2e23c277654ce9cda3f0222c0cdfd9e.jpg", "http://yanxuan.nosdn.127.net/a5c537f3406d0b0cb7f432654d73456c.jpg", "http://yanxuan.nosdn.127.net/7fa0b1d1392d2755d8c76e5166717271.jpg", "http://yanxuan.nosdn.127.net/533ac276228fb4f4708407dbc9557074.jpg", "http://yanxuan.nosdn.127.net/6b8abe94b174667084cfaa909a1a6ae8.jpg", "http://yanxuan.nosdn.127.net/90651cf71db15227b9d691e55f0a75da.jpg", "http://yanxuan.nosdn.127.net/24c44cd0e9cc09849bbcd48235b81dac.jpg"],
		"inventory": [755],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "150*200cm"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}, {
			"attrName": "产地",
			"attrValue": "中国"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.羊毛毯采取传统机织工艺，纯天然织造的，直接接触皮肤会有轻微扎人。2.初次使用时会有少量浮毛，建议干洗处理。3.商品为纯羊毛织造而成，若有少量气味请通风2-3天去除。"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 319,
		"date": "1500012395789",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1046044,
		"price": 349,
		"topName": "美利奴羊毛盖毯设计师款",
		"subName": "欧洲知名品牌设计师联合打造",
		"shortDescription": ["美利奴羊", "温暖柔软", "散毛染色", "不易褪色", "梭织工艺", "不易变形"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c4413dadae06689caadde0dd7c0ab446.jpg", "http://yanxuan.nosdn.127.net/c22df4cf95a06772d3d7231d337ecd61.jpg", "http://yanxuan.nosdn.127.net/19c6e3058f46094488f48e17203acf7b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2bfecfe58ea3ee0d554f2ed58e9ba30a.png", "http://yanxuan.nosdn.127.net/20289753360694c2787b3d65ce9377ac.jpg", "http://yanxuan.nosdn.127.net/17b3b43e437cfe1c764710ff5d1834a5.jpg", "http://yanxuan.nosdn.127.net/1133086c5ee5994545ff68587ded4cb5.jpg", "http://yanxuan.nosdn.127.net/72177689d24d3684d341bb38b94468fa.jpg"],
		"types": ["150*200cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/1e6a7d46666cf41f62ae68b5fce159ef.jpg", "http://yanxuan.nosdn.127.net/da60db9b1d6fdbd138ffd639ea5a7d96.jpg", "http://yanxuan.nosdn.127.net/e10d5826f500d3921accdbcde3654ed4.jpg", "http://yanxuan.nosdn.127.net/7a0384e8fbb30e4f28a4eb63db3b570f.jpg", "http://yanxuan.nosdn.127.net/c105726991117504fafe0bfbd45b281e.jpg", "http://yanxuan.nosdn.127.net/03e2b1bc1e51731ec5fc4077f3930c90.jpg", "http://yanxuan.nosdn.127.net/cf095cc9dcd2e502cf189d8de3f19608.jpg", "http://yanxuan.nosdn.127.net/884911b2fc49d0d40b05479f06513f2a.jpg", "http://yanxuan.nosdn.127.net/a1f27e9690b91ab8b1a9eb14173d1258.jpg", "http://yanxuan.nosdn.127.net/4b8e25163aec2f41954112dc8a25c236.jpg", "http://yanxuan.nosdn.127.net/6d1efb833b2c8d60d1f78d28f43bdbc6.jpg", "http://yanxuan.nosdn.127.net/97d487110e5ba4f06c5200f92afb5d2e.jpg", "http://yanxuan.nosdn.127.net/f791e35b8d26af8843b3ec85ee5b1ea2.jpg", "http://yanxuan.nosdn.127.net/5a3877e74b20978c91a78422710eda61.jpg", "http://yanxuan.nosdn.127.net/c47c9ccf32a82847317332654cffefbe.jpg", "http://yanxuan.nosdn.127.net/660735bf422574c20d5e1de9a8412b68.jpg", "http://yanxuan.nosdn.127.net/aa0073b73e133fddd218cd873eb4704c.jpg", "http://yanxuan.nosdn.127.net/2e08a269b051e91d3fcf3f5e1a819587.jpg", "http://yanxuan.nosdn.127.net/1e6bef09f54ebcf9dfc739bed06ee884.jpg", "http://yanxuan.nosdn.127.net/1e91b06b37290a422433531a3c448fc9.jpg", "http://yanxuan.nosdn.127.net/3a860ec70f982f50981bec2e00e2c195.jpg", "http://yanxuan.nosdn.127.net/8c9123297e0e183ee00a592430756e4b.jpg", "http://yanxuan.nosdn.127.net/745d0978c9fa4a5a4ceb0244f55f2456.jpg", "http://yanxuan.nosdn.127.net/9b56578bc472ea3fd1e5ac46fca6189b.jpg", "http://yanxuan.nosdn.127.net/9c606fa0c3704aacb37d6ddc10017337.jpg", "http://yanxuan.nosdn.127.net/3c9f3b7d40f4277a078a774bfb9d8e07.jpg", "http://yanxuan.nosdn.127.net/628544b6dc30cd67c41dc9506df845a2.jpg", "http://yanxuan.nosdn.127.net/fef518af8f1e7b38a0eb1b28f4bb51a7.jpg", "http://yanxuan.nosdn.127.net/cda4010f9df50cf85c1f6b2c66739a1d.jpg", "http://yanxuan.nosdn.127.net/3081818ab418d732c80598a6528ed53b.jpg", "http://yanxuan.nosdn.127.net/f47a15c1b0d754e3fb2e45db373ccc08.jpg", "http://yanxuan.nosdn.127.net/fc890fd700609bcb80d4162573cc2b5c.jpg", "http://yanxuan.nosdn.127.net/cfa435b515b0ab8cd99b6eb63ca5092f.jpg"],
		"inventory": [686],
		"information": [{
			"attrName": "重量",
			"attrValue": "1260g"
		}, {
			"attrName": "尺寸",
			"attrValue": "150*200cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 61001-2006"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 512,
		"date": "1500012398391",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1010000,
		"price": 399,
		"topName": "澳洲纯羊毛盖毯 加厚款",
		"subName": "温暖加厚设计",
		"shortDescription": ["美利奴羊", "世界口碑", "高密纤维", "卷曲柔软", "色织工艺", "不易褪色"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c054d05dfecd95da5db74ddd76ee5503.jpg", "http://yanxuan.nosdn.127.net/66d6519a54399fa786094710847c91b0.jpg", "http://yanxuan.nosdn.127.net/3e85e6cc9114d3edcc95e27841db61a1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3bec70b85337c3eec182e54380ef7370.png", "http://yanxuan.nosdn.127.net/57779dbcd9cbb95241123d798f4693c2.jpg", "http://yanxuan.nosdn.127.net/64c52113e0c5ca42cd363d5854280119.jpg", "http://yanxuan.nosdn.127.net/b578539da6f0e39eb74991e9a0b74a90.jpg", "http://yanxuan.nosdn.127.net/b544dee2401c02e95c0a7bc70960eadf.jpg"],
		"types": ["浅咖格纹"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/ff86010e7277e9fe194e393fb1ad2ba9.jpg", "http://yanxuan.nosdn.127.net/217045fdde1eef8a8f37cd162bed12dc.jpg", "http://yanxuan.nosdn.127.net/128cd8aebeb3ace9e00ab1f06ef52d69.jpg", "http://yanxuan.nosdn.127.net/648886df63abe5211271ab1187f9c763.jpg", "http://yanxuan.nosdn.127.net/820a1f82b97a9f28b449bcdb2f72a631.jpg", "http://yanxuan.nosdn.127.net/f4f0e12ff92d2d3056290c94aa512f43.jpg", "http://yanxuan.nosdn.127.net/d4b8bb95cba61f7c6ec36af3312a3a68.jpg", "http://yanxuan.nosdn.127.net/e15a76573c7ba9d0a077eec5b914321b.jpg", "http://yanxuan.nosdn.127.net/8833d04e7f87b7a8d324c315df763726.jpg", "http://yanxuan.nosdn.127.net/aa8ad5312cb4a8d129528e37a6ac64bd.jpg", "http://yanxuan.nosdn.127.net/e5d26e28d938e9a33a2c729283f2cc82.jpg", "http://yanxuan.nosdn.127.net/d27a1a92b24adfdf0e6578ddbcd1b572.jpg", "http://yanxuan.nosdn.127.net/38eb737cc02e5b383911867ed48a004b.jpg", "http://yanxuan.nosdn.127.net/82d5a1d5e587b9e8e781f485fb9f73bf.jpg", "http://yanxuan.nosdn.127.net/728d11809778d6de50f7274a384952e6.jpg", "http://yanxuan.nosdn.127.net/046d49ddc7c9e7031a354129a05e72e8.jpg", "http://yanxuan.nosdn.127.net/8144e45974188424d576bc16fdfc5842.jpg", "http://yanxuan.nosdn.127.net/8bd138f32ee0930250aec8578d740a12.jpg", "http://yanxuan.nosdn.127.net/71b7da3908ca5d8bb96c690d0c069a5a.jpg", "http://yanxuan.nosdn.127.net/c3a9174f7ca98df4489fa0f1cacc289f.jpg", "http://yanxuan.nosdn.127.net/1b4adaa15075af3218bb54b556db6a70.jpg", "http://yanxuan.nosdn.127.net/b7e346ce58ad1400c14a11a515c37ab0.jpg", "http://yanxuan.nosdn.127.net/2f3df0b2855589a41c66d35945dbf792.jpg", "http://yanxuan.nosdn.127.net/8d5b71b357fc979d0e65968c6697a0df.jpg"],
		"inventory": [626],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "200*150cm"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.羊毛毯采取传统机织工艺，纯天然织造的，直接接触皮肤会有轻微扎人。2.初次使用时会有少量浮毛，建议干洗处理。3.商品为纯羊毛织造而成，若有少量气味请通风2-3天去除。"
		}],
		"label": 满赠,
		"manufacture": "",
		"sale": 191,
		"date": "1500012401091",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1084001,
		"price": 249,
		"topName": "纯棉简欧条纹针织盖毯",
		"subName": "纯棉针织，柔软亲肤",
		"shortDescription": ["双层织造", "牢固耐用", "活性印染", "活性印染", "纯棉材质", "柔软厚实"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/68ddb986f44955f8df7667822e1deb62.jpg", "http://yanxuan.nosdn.127.net/b58dc602fad922b316712b68d028573d.jpg", "http://yanxuan.nosdn.127.net/3b011fc5314d23e2e329a36dd66989a7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/07f682d405c1d2ed343c210ac8f8862a.png", "http://yanxuan.nosdn.127.net/8e316090dd262ca0a4fe8f37bdc1f1aa.jpg", "http://yanxuan.nosdn.127.net/3eb572eef0f47c125cbe99514e021d8f.jpg", "http://yanxuan.nosdn.127.net/cf87ca367a793e250f27a831da7e142e.jpg", "http://yanxuan.nosdn.127.net/0e6431e884c7afbe4c648f0317a368eb.jpg"],
		"types": ["军绿"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/d60df75bd3b7037cfbdb0bcb5fe29078.jpg", "http://yanxuan.nosdn.127.net/3a3b8f3a2fa9862a758916be8a99f237.jpg", "http://yanxuan.nosdn.127.net/16ae1db56d952fca040462fedf80fe6f.jpg", "http://yanxuan.nosdn.127.net/13833e191509f7ef0e0f2b2431b167e1.jpg", "http://yanxuan.nosdn.127.net/989982f7920b6cf6bf6942fb7e6f28e9.jpg", "http://yanxuan.nosdn.127.net/ec920f8b651cff338e5c6d3f9200ccbf.jpg", "http://yanxuan.nosdn.127.net/b997c8381faacba67423c4901e75cbd6.jpg", "http://yanxuan.nosdn.127.net/2fd1cb3ed252f2bd7f3ef09006f4183f.jpg", "http://yanxuan.nosdn.127.net/4c29a7dce14c954710ffbf3b2e6e1f5b.jpg", "http://yanxuan.nosdn.127.net/ad7deda640da27bed0957567b8c720fe.jpg", "http://yanxuan.nosdn.127.net/e3192b3299cc9debf87e017ed6e0e707.jpg", "http://yanxuan.nosdn.127.net/bdb27df5a064f09d0a6b2fa0cadeafc9.jpg", "http://yanxuan.nosdn.127.net/22dd3a0791adc1cb60c0e7f4e5f50ea8.jpg", "http://yanxuan.nosdn.127.net/955d02dad34f4a570d5f6799e29f0484.jpg", "http://yanxuan.nosdn.127.net/567c8474434e1c64f31bdbff5833dec7.jpg", "http://yanxuan.nosdn.127.net/f31f3d51648100fcb7c512f48fcaf8eb.jpg", "http://yanxuan.nosdn.127.net/777f29a46d14baab3e676c317ce17d26.jpg", "http://yanxuan.nosdn.127.net/fa41d6a9b78bb94e51face2264976044.jpg", "http://yanxuan.nosdn.127.net/f98cc5909c7b2960989dadf2ff3aca7e.jpg", "http://yanxuan.nosdn.127.net/8c3b809c819b448d8b5cae7aa5ccaaae.jpg", "http://yanxuan.nosdn.127.net/0e73953b0e4226ff8ce7760f1ef521ae.jpg", "http://yanxuan.nosdn.127.net/6a3c3af2199907393e91a24f8d2aa05d.jpg", "http://yanxuan.nosdn.127.net/bf286dc4fbad8ac953a2cf580b24059d.jpg", "http://yanxuan.nosdn.127.net/5ff7fcba4fc90420e266fe23a2b522b3.jpg", "http://yanxuan.nosdn.127.net/2da1324a8fef80f429d29d8c9905e221.jpg", "http://yanxuan.nosdn.127.net/b28b3a2839f599ba0be34d103dc03d43.jpg", "http://yanxuan.nosdn.127.net/d382ee5c40eeb88b27cdea1cdb102c77.jpg", "http://yanxuan.nosdn.127.net/02e82cbd31c4103d825b8bf3e65d282e.jpg", "http://yanxuan.nosdn.127.net/69aec67dd8281a9a563136cbd285957b.jpg", "http://yanxuan.nosdn.127.net/4ce752d3bc231a483501ea7253479974.jpg", "http://yanxuan.nosdn.127.net/75e8fe26c602ef7751ed8b433a0b078d.jpg", "http://yanxuan.nosdn.127.net/46aaf931f8ccf7ba1c47f6602fb0c4e6.jpg", "http://yanxuan.nosdn.127.net/853e0615dea16f01e63abb76f0b08357.jpg", "http://yanxuan.nosdn.127.net/8e31a21eb067f790b9cc410bc06c8d14.jpg", "http://yanxuan.nosdn.127.net/6df9b852ae02044d32db41ec0316a88f.jpg", "http://yanxuan.nosdn.127.net/bbdf123515558da5e4cffb62dfbc4c50.jpg", "http://yanxuan.nosdn.127.net/69ba446f41e17ac41e4872af2c03aa3d.jpg", "http://yanxuan.nosdn.127.net/f15085ed43a2c43240b0599ebc5cd58e.jpg", "http://yanxuan.nosdn.127.net/60471cae3855ce31a0a55c9c90dad5bc.jpg", "http://yanxuan.nosdn.127.net/7e345b6a5fb55570ae85fdddcd08d200.jpg", "http://yanxuan.nosdn.127.net/f85be76a1e0018a00ed1e64d7a18723c.jpg", "http://yanxuan.nosdn.127.net/2a1214d35881c724baf6281feabf49b8.jpg", "http://yanxuan.nosdn.127.net/65cb9bdfb5b8a8450834c38caf928eb9.jpg", "http://yanxuan.nosdn.127.net/32f8045537d03e634e79db1c0b8d3414.jpg", "http://yanxuan.nosdn.127.net/71021e6ad1d1fbe3ac40e3a42f1bc725.jpg", "http://yanxuan.nosdn.127.net/14919c06e49737b473eeeff20bdc8144.jpg", "http://yanxuan.nosdn.127.net/083a822300f398d51eb801d89072cd2d.jpg", "http://yanxuan.nosdn.127.net/bdfdf2ccf213c7e1a4144afefda96417.jpg", "http://yanxuan.nosdn.127.net/e5ae066cbddfa5a4705674ae13cdc829.jpg", "http://yanxuan.nosdn.127.net/e876d3126cb7464c68a4150ff4edcf8a.jpg", "http://yanxuan.nosdn.127.net/59bc3b22edabd57ec2a5e0cf1b5a4fe0.jpg", "http://yanxuan.nosdn.127.net/5fe0fc9f7bf969311b647de6a2f1c25c.jpg", "http://yanxuan.nosdn.127.net/2e78cb02f8704bd36802e25c73486adb.jpg", "http://yanxuan.nosdn.127.net/1b2e7f38703e96f95898a141a832c767.jpg", "http://yanxuan.nosdn.127.net/92763e94e4bde2bfdf140f53cb30fe39.jpg", "http://yanxuan.nosdn.127.net/b9c9a15013a260182333504e09e313b8.jpg", "http://yanxuan.nosdn.127.net/706f9fec46c3fbf9834d408c9b69c0fd.jpg", "http://yanxuan.nosdn.127.net/77bcc6f7b25f0a3a671c25af18935ba3.jpg", "http://yanxuan.nosdn.127.net/9048a396cf6474d8aa8c773a3c197b71.jpg"],
		"inventory": [283],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "150*200cm"
		}, {
			"attrName": "产品标准",
			"attrValue": "FZ/T 61001-2006"
		}, {
			"attrName": "安全技术",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1.纯棉毯采取传统针织工艺，纯天然织造的，使用前建议清洗一遍去除少量浮尘。2.商品为纯棉织造而成，若有少量气味请通风2-3天去除。3.纯棉针织盖毯清洗数次之后，可能存在微量变形，建议干洗。"
		}, {
			"attrName": "重量",
			"attrValue": "1280g"
		}],
		"label": 满赠,
		"manufacture": "Ralph Lauren制造商",
		"sale": 21,
		"date": "1500012403726",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1216003,
		"price": 19,
		"topName": "轻便保暖办公居家多用绒毯",
		"subName": "空调房必备，轻巧耐用",
		"shortDescription": ["法兰绒面", "细腻温暖", "仿泥点色", "饱满色彩", "轻巧耐用", "随心搭盖"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f2fbd114e57049a6d3d5314d7512d950.jpg", "http://yanxuan.nosdn.127.net/1e30acf5af1dde41716b28bbf39df7df.jpg", "http://yanxuan.nosdn.127.net/3357f4a4c1ba8caca2b6abf9d9e0b5f7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9ddbf2640e86dcfa91a73940d25c32e2.png", "http://yanxuan.nosdn.127.net/817f32dd90090290e74d40cc9b1db0ab.jpg", "http://yanxuan.nosdn.127.net/08cba07310471e677e99128a0eb70672.jpg", "http://yanxuan.nosdn.127.net/900d5b8152a90931ae728364185a5e87.jpg", "http://yanxuan.nosdn.127.net/f99a7daa13483a754f956c249c3b798b.jpg"],
		"types": ["海蓝", "深褐", "桃红", "苔绿", "麻灰"],
		"chara": "5色可选",
		"description": ["http://yanxuan.nosdn.127.net/51fd3269165a45b8a4c482ec7ca61c6a.jpg", "http://yanxuan.nosdn.127.net/6d78912a4b635bd8c740090ddde45a51.jpg", "http://yanxuan.nosdn.127.net/281b54b41b7302bd1d61df91bc7a02c5.jpg", "http://yanxuan.nosdn.127.net/f7fdf834d43b2835ecf92c72278a83a0.jpg", "http://yanxuan.nosdn.127.net/084ced66bceb59a5f17f2b652c7acf5e.jpg", "http://yanxuan.nosdn.127.net/919a82cc9adfb85c90d4f765a60b0114.jpg", "http://yanxuan.nosdn.127.net/a4b92d76110fd366cf2939c726f71622.jpg", "http://yanxuan.nosdn.127.net/7c10ea0459fd59eb6502fcbb92a5a900.jpg", "http://yanxuan.nosdn.127.net/c605128543dd491646f094798d3c4e16.jpg", "http://yanxuan.nosdn.127.net/0860a171273c159da0e928d6833ad051.jpg", "http://yanxuan.nosdn.127.net/019e67ca09651d3431ca1f11663aacef.jpg", "http://yanxuan.nosdn.127.net/72596a894962f8bdd8986ed16d382f05.jpg", "http://yanxuan.nosdn.127.net/bf8096983d4e78acfe0fb7ff42070449.jpg", "http://yanxuan.nosdn.127.net/3cf9467e982f6904ea61513db7c00a83.jpg", "http://yanxuan.nosdn.127.net/968bc8247cb1005bac6123cefa5abd9c.jpg", "http://yanxuan.nosdn.127.net/38951b30021ac4fad0f809c9d495cead.jpg", "http://yanxuan.nosdn.127.net/9fa63496dcb759d290192ca0d99b8c52.jpg", "http://yanxuan.nosdn.127.net/0cf049549bcf04e5e579021f91130adc.jpg", "http://yanxuan.nosdn.127.net/7152e3128cc242ef650a66eb83c40343.jpg", "http://yanxuan.nosdn.127.net/0e1ff6fea2fd6861b3e00efd26659d23.jpg", "http://yanxuan.nosdn.127.net/db87b69d0c98f2507f3298b81bbc07cb.jpg", "http://yanxuan.nosdn.127.net/4dbb406db8c8973c1827b3901dead6b8.jpg", "http://yanxuan.nosdn.127.net/2b29d6e06e1f2f128b8d9e29679c4355.jpg", "http://yanxuan.nosdn.127.net/1f3a9e21c3ddb5a660271b7b3a71a560.jpg", "http://yanxuan.nosdn.127.net/ec1c242286ef68e5baa68abe16c7fa73.jpg", "http://yanxuan.nosdn.127.net/0bbb92ff69e58c2c15227089469ca27d.jpg", "http://yanxuan.nosdn.127.net/f6e60c3f9d3e5dc1b34c78323c840146.jpg", "http://yanxuan.nosdn.127.net/eac90e3a0120d23f1d224d553db76fce.jpg", "http://yanxuan.nosdn.127.net/060f6fbad9282cb71bf51ce684abc01f.jpg", "http://yanxuan.nosdn.127.net/ef60cc4e82dd67a02f60f6e6359d48d5.jpg", "http://yanxuan.nosdn.127.net/65f8dd773ca196b40408c6d48e05290f.jpg", "http://yanxuan.nosdn.127.net/eae99d4ede52af4e27ee463cfa70ae0f.jpg", "http://yanxuan.nosdn.127.net/3a2f05bc4f54581d07cf55595c6ff218.jpg", "http://yanxuan.nosdn.127.net/42e9d442e1bf203e5804bdf2a7ccfc8c.jpg", "http://yanxuan.nosdn.127.net/919ab3be81818f7379ef1c7b8fe47ef9.jpg", "http://yanxuan.nosdn.127.net/583e535547989839f8e741ed4a821dbf.jpg", "http://yanxuan.nosdn.127.net/fd1d45c247397c65912577f1e1e969fd.jpg", "http://yanxuan.nosdn.127.net/3508ce71705a4858c2789e48524dec54.jpg", "http://yanxuan.nosdn.127.net/51c56ff2a2dd4a4d03113c66ccf8e5d5.jpg", "http://yanxuan.nosdn.127.net/b0356831f98dbda069f86f4256952fca.jpg", "http://yanxuan.nosdn.127.net/814b0b48c2132fcfb3855c71636cd9c3.jpg", "http://yanxuan.nosdn.127.net/b4cf5bfde9804c7a15ac091de097bb1e.jpg", "http://yanxuan.nosdn.127.net/46f8b090f2c9af0dd1d42d4fdb490ffd.jpg", "http://yanxuan.nosdn.127.net/2e8aaea63b4ae7d9081ad0ac1b902762.jpg", "http://yanxuan.nosdn.127.net/b4514f7dfa80b8fdd65ba48ec838f01f.jpg", "http://yanxuan.nosdn.127.net/8c7e9bdb31c5dfcd5ccddbee4a59d28b.jpg", "http://yanxuan.nosdn.127.net/3c1dd0189d153eab9876ee7092a78ebf.jpg", "http://yanxuan.nosdn.127.net/6aaa38b7c38e6be3728b654ee389407e.jpg", "http://yanxuan.nosdn.127.net/5b62ae69fb48381312a151504ac55b21.jpg", "http://yanxuan.nosdn.127.net/edcba1466c4314bff53aa9e15ec4ce18.jpg", "http://yanxuan.nosdn.127.net/9a19fb5669e680fe38482dd23cdaf21a.jpg", "http://yanxuan.nosdn.127.net/f6af8c6b0af337dc5b73547b188102ed.jpg"],
		"inventory": [176, 490, 362, 921, 956],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 61005-2015"
		}],
		"label": 新品,
		"manufacture": "",
		"sale": 117,
		"date": "1500012406212",
		"category": "居家",
		"subCategory": "床品件套"
	})
	var goodsEntity = new goodsModel({
		"id": 1009024,
		"price": 599,
		"topName": "日式和风懒人沙发",
		"subName": "优质莱卡纯棉，和风家居新体验",
		"shortDescription": ["进口粒子", "弹性环保", "莱卡纯棉", "抗皱耐磨", "弹性测试", "不易变形"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f1b2a9420b7fb278956bb912e91cf819.jpg", "http://yanxuan.nosdn.127.net/51b7cf5ecaee9827e2ff9821e1453d5e.jpg", "http://yanxuan.nosdn.127.net/7ec96095f8f605569207711fbf9d44d2.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png", "http://yanxuan.nosdn.127.net/9460f6b30661548c4a864607bfcdf4ca.jpg", "http://yanxuan.nosdn.127.net/acbdb480bcad193fad77ef6c4f52192e.jpg", "http://yanxuan.nosdn.127.net/e6feb5f4a0989d212bce068d4907657d.jpg", "http://yanxuan.nosdn.127.net/6059ab6e106d97c29d5723c1d6f1a11f.jpg"],
		"types": ["藏青（内胆+外套）", "粉色（内胆+外套）", "深咖（内胆+外套）", "银灰（内胆+外套）", "藏青（仅外套）", "粉色（仅外套）", "深咖（仅外套）", "银灰（仅外套）"],
		"chara": "8色可选",
		"description": ["http://yanxuan.nosdn.127.net/34a6a0daa3f7a397a38aad14cb9e90fa.jpg", "http://yanxuan.nosdn.127.net/76637af0eec246b318cb129b768de637.jpg", "http://yanxuan.nosdn.127.net/18fee22626e61fc1d1a01916914016ba.jpg", "http://yanxuan.nosdn.127.net/91f57a9bb142e1c1e2ff0bbea6f9af96.jpg", "http://yanxuan.nosdn.127.net/252d80fd75eb1254d746d0b57c267650.jpg", "http://yanxuan.nosdn.127.net/4b07697992a2b14de6fd0a5811936d71.jpg", "http://yanxuan.nosdn.127.net/c499439d6081bb4e836955b7514c1b96.jpg", "http://yanxuan.nosdn.127.net/bed437fdc091d020a8f805bcc8830bd8.jpg", "http://yanxuan.nosdn.127.net/0fc5febdb817abd7a1040bab03f048b7.jpg", "http://yanxuan.nosdn.127.net/a0417b3986c9dc082124fcc360390021.jpg", "http://yanxuan.nosdn.127.net/a5c9d24c652d4dee7946ef925105f3f2.jpg", "http://yanxuan.nosdn.127.net/b10272c58f95dd6737ce1cd41452a21d.jpg", "http://yanxuan.nosdn.127.net/510c6ef36760238b38ed59cd6e47a21f.png", "http://yanxuan.nosdn.127.net/6371348b917c021c55dc393fc59d4d28.png", "http://yanxuan.nosdn.127.net/de4079b128e57c5c0fa8a8177e9bc6e7.png", "http://yanxuan.nosdn.127.net/160966fbc772787f824dc1dbd5afb16d.png", "http://yanxuan.nosdn.127.net/bb3c8d3f10f2aca0908871c8e598aa0e.jpg"],
		"inventory": [548, 147, 748, 441, 763, 513, 621, 648],
		"information": [{
			"attrName": "外套材质",
			"attrValue": "外套帆布：100%棉；外套弹力布：锦纶80%氨纶20%"
		}, {
			"attrName": "内胆材质",
			"attrValue": "内胆面料：100%锦纶；填充物：聚苯乙烯（发泡粒子）"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "本品为人工填充粒子，重量难免会有误差，敬请谅解。同时产品在运输过程中受挤压，也可能会造成凹陷。储存时请避免重物挤压以引起泡沫粒子塌陷。"
		}, {
			"attrName": "退货相关",
			"attrValue": "非质量问题退货运费用户自行承担"
		}],
		"label": 爆品,
		"manufacture": "",
		"sale": 942,
		"date": "1500012408760",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1173006,
		"price": 599,
		"topName": "超柔弹力靠背懒人沙发",
		"subName": "回到家，只想瘫在沙发上",
		"shortDescription": ["深色面料", "气质耐脏", "弹力面料", "贴合承托", "安全粒子", "环保健康"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ff58005cae88ad33035f33135a16d7b1.jpg", "http://yanxuan.nosdn.127.net/424770acaa54eaaabcbdc4ea35761e1c.jpg", "http://yanxuan.nosdn.127.net/d0241ee73de1f5ce4747e82783d1a90c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ea8f5714ef50441d01930f4638eb98e1.png", "http://yanxuan.nosdn.127.net/bcd519f54e5efc5003c4e22db8d10367.jpg", "http://yanxuan.nosdn.127.net/993209d44054bd252394679011548068.jpg", "http://yanxuan.nosdn.127.net/300e7c5a38820214fe80af58fcf09ed1.jpg", "http://yanxuan.nosdn.127.net/d643e10faccf907f458dc658c9cfe041.jpg"],
		"types": ["褐色", "藏蓝"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/84aec71d420cda00327c1a9938eb3436.jpg", "http://yanxuan.nosdn.127.net/760cf1efb73885588c74f6b6e7dfd154.jpg", "http://yanxuan.nosdn.127.net/3c6f94d649c8f98f01cef0e33cc80bba.jpg", "http://yanxuan.nosdn.127.net/f99d7fd6f3ca8658ffb7ca7c0222e6ba.jpg", "http://yanxuan.nosdn.127.net/89b041c588e8b8c56db4058a7f134598.jpg", "http://yanxuan.nosdn.127.net/1945bc9db3a6e87941698413f762372a.jpg", "http://yanxuan.nosdn.127.net/5b528e94188404e77136346b627b7fd6.jpg", "http://yanxuan.nosdn.127.net/28bbf929cbcd25828f6ca221317f3a4a.jpg", "http://yanxuan.nosdn.127.net/134fabe36325f91c1446f2a046748109.jpg", "http://yanxuan.nosdn.127.net/22e3ae6880c4fe40ee8439e84f6d227b.jpg", "http://yanxuan.nosdn.127.net/a0c94c5e647c77072c0d4e253a9ddbbe.jpg", "http://yanxuan.nosdn.127.net/bf1f039fd5896f673717f73eea8b1adf.jpg", "http://yanxuan.nosdn.127.net/42c325ed07f4f1dba6d77bba231e4496.jpg", "http://yanxuan.nosdn.127.net/abd678b065692fa219bf180724b6f899.jpg", "http://yanxuan.nosdn.127.net/6c465632307363affdff054f2569b86c.jpg", "http://yanxuan.nosdn.127.net/df2eea0c0ef90d3e5979f2024808b16a.jpg", "http://yanxuan.nosdn.127.net/cb5c4a52e81ffb79151370d7a6fee79c.jpg", "http://yanxuan.nosdn.127.net/d9e7a384b44891097af36c554a446ff3.jpg", "http://yanxuan.nosdn.127.net/a9b019a3afed5c84be84130590b7ec80.jpg", "http://yanxuan.nosdn.127.net/3ef8f95a7d955dd29a2f3809a8a7dbd3.jpg", "http://yanxuan.nosdn.127.net/d33012c08625379aadeec7990a1c682c.jpg", "http://yanxuan.nosdn.127.net/d1d31552fd02ca5af1538b81d27d5dbf.jpg", "http://yanxuan.nosdn.127.net/1ec2faa876dd726480559e7cb90a685d.jpg", "http://yanxuan.nosdn.127.net/2b4eb2b7dee8391b119eb247bc99c3b3.jpg", "http://yanxuan.nosdn.127.net/fe601351dcbdbb0f68d4844cff12e966.jpg", "http://yanxuan.nosdn.127.net/b2e2f07bdc460dcf8b73be173562a355.jpg", "http://yanxuan.nosdn.127.net/fc4695887da150ad5a3ad73095fe6fb8.jpg", "http://yanxuan.nosdn.127.net/18bf03256bcf815b0218d7ef41789d84.jpg", "http://yanxuan.nosdn.127.net/ccf4146382a02a3b9b973ab5c3108852.jpg", "http://yanxuan.nosdn.127.net/31e7f3b953bd188b0846b957ac38fc57.jpg", "http://yanxuan.nosdn.127.net/352a0865b23f249118a11bdcb2f8a244.jpg", "http://yanxuan.nosdn.127.net/c0ea189b646dcf7e7eebfbd6bdfcc115.jpg", "http://yanxuan.nosdn.127.net/40fdf524ce3c21fafbf66488499b1cf5.jpg", "http://yanxuan.nosdn.127.net/6466377189c3ffc69d6bad9c0d2838c2.jpg", "http://yanxuan.nosdn.127.net/c5eedbe8a55683ae339769efb3d50ca4.jpg", "http://yanxuan.nosdn.127.net/e370a6876bd1e054ac59de740769fba5.jpg", "http://yanxuan.nosdn.127.net/004b1fb3528b1357694456c9a855d953.jpg", "http://yanxuan.nosdn.127.net/feb82db2e4d1b7d63141e7b1ce571f59.jpg", "http://yanxuan.nosdn.127.net/97809c43573e7254937ad1ede2b4a9dd.jpg", "http://yanxuan.nosdn.127.net/bb33fa05bcdc4ad85eecdbec94b319bc.jpg", "http://yanxuan.nosdn.127.net/a900cc8d74dd8034946b3e06c3880ad0.jpg", "http://yanxuan.nosdn.127.net/a450588adc9d41a95b4393222dd2167c.jpg", "http://yanxuan.nosdn.127.net/53fbfb98f7b936ad8a5a24c05f595fb1.jpg", "http://yanxuan.nosdn.127.net/c9e4052eb38de787a16e91dea95ae59d.jpg", "http://yanxuan.nosdn.127.net/273294f3302cb7f46b96ebfcd3956936.jpg", "http://yanxuan.nosdn.127.net/9f3a203b0f84e3afb1c4c1aa331b2c0d.jpg", "http://yanxuan.nosdn.127.net/f3fa72a0dd9695b5361947b46d100ea4.jpg", "http://yanxuan.nosdn.127.net/fbc149e103eae623acac4cb183feff16.jpg", "http://yanxuan.nosdn.127.net/ba6443bb2ed426f92a4f99c1496440d0.jpg", "http://yanxuan.nosdn.127.net/e5c521216bb50a9eaac0b12f2344b931.jpg", "http://yanxuan.nosdn.127.net/4672db6e7bf2968ae1150c4deae53bc2.jpg", "http://yanxuan.nosdn.127.net/e8a62e3bc1abcf630bdd63a0e76dd7cd.jpg", "http://yanxuan.nosdn.127.net/0bfcb2ba29b28223dc912a40a2beb27c.jpg", "http://yanxuan.nosdn.127.net/218ae800db56361fc154e00e7e4b3ca0.jpg"],
		"inventory": [377, 48],
		"information": [{
			"attrName": "颜色",
			"attrValue": "褐色/藏青"
		}, {
			"attrName": "面料",
			"attrValue": "外套弹力布：87%聚酯纤维13%氨纶内胆弹力布：95%聚酯纤维5%氨纶"
		}, {
			"attrName": "填充物",
			"attrValue": "聚苯乙烯（发泡粒子）"
		}, {
			"attrName": "填充物重量",
			"attrValue": "5.2kg"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}, {
			"attrName": "退货相关",
			"attrValue": "非质量问题退货运费用户自行承担"
		}],
		"label": "",
		"manufacture": "",
		"sale": 540,
		"date": "1500012411428",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1138000,
		"price": 29,
		"topName": "日式蓬软太鼓抱枕",
		"subName": "萌趣太鼓造型 软糯轻柔回弹",
		"shortDescription": ["麂皮绒面", "绒软细腻", "仿羽棉芯", "蓬松软糯", "活性染料", "健康耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/6ffc1a7437d9d54b4b417554a7261d58.jpg", "http://yanxuan.nosdn.127.net/9164ad4f7e225f09568e6ff0ebe2ec2e.jpg", "http://yanxuan.nosdn.127.net/a553d0014958f329b161b1824db3888a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png", "http://yanxuan.nosdn.127.net/6c077e6fdbb1097c530ec38f805bef96.jpg", "http://yanxuan.nosdn.127.net/18327e601ce72fce5295c3e8a4e5edb8.jpg", "http://yanxuan.nosdn.127.net/5599380c7fcccc15cb60d1e1f2f4ebca.jpg", "http://yanxuan.nosdn.127.net/aa818e0f542b19dca3dedbd82299f5d4.jpg"],
		"types": ["直径55CM", "直径40CM"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/c0433bd3aafdc44b2b5fe10ced151823.jpg", "http://yanxuan.nosdn.127.net/241526b14e760f3b327d745127b7cadd.jpg", "http://yanxuan.nosdn.127.net/924f6a3a78957b404ea2ad0ea24b4d58.jpg", "http://yanxuan.nosdn.127.net/21b519690bf5574c6a4794fd0663fa37.jpg", "http://yanxuan.nosdn.127.net/40ce0f2d0f0331024cb5eeffd48613f5.jpg", "http://yanxuan.nosdn.127.net/707d4c2e44903802f5181edc4d5e2aa4.jpg", "http://yanxuan.nosdn.127.net/0a26d87e0542007a59158a814b999f67.jpg", "http://yanxuan.nosdn.127.net/5732b17001835e524acac7d3b75685e7.jpg", "http://yanxuan.nosdn.127.net/19a4e7e34b7507e1ffb7ff3a3939a0fe.jpg", "http://yanxuan.nosdn.127.net/699bf4c433ba2bb7736401e2272a2697.jpg", "http://yanxuan.nosdn.127.net/bb28a8cb46ffd42a39122d3f0724b3ee.jpg", "http://yanxuan.nosdn.127.net/43f3eeb3661f54db929a9e3c8ee8be1c.jpg", "http://yanxuan.nosdn.127.net/37b4e61572b7c69462ae74b6a3cb4cb3.jpg", "http://yanxuan.nosdn.127.net/dd17986d401a93b01526b7855e722efa.jpg", "http://yanxuan.nosdn.127.net/e76a0c72a3e6cc2f15f61048ef1423c8.jpg", "http://yanxuan.nosdn.127.net/eabbdb77f25b449b1b3bcfd740a5c85c.jpg", "http://yanxuan.nosdn.127.net/c92f5747f156e0c3df3873456bfdc364.jpg", "http://yanxuan.nosdn.127.net/fce1bbb0804c45fcedc0d407526197bd.jpg", "http://yanxuan.nosdn.127.net/de893522b3454e6769d46d5d16c35ec9.jpg", "http://yanxuan.nosdn.127.net/c7ca459ec92d9f32b25c4d1681a3efdf.jpg", "http://yanxuan.nosdn.127.net/bd7974a599497d0830fe209f572f1d43.jpg", "http://yanxuan.nosdn.127.net/a52672cac9385c1a6da086e46aead878.jpg", "http://yanxuan.nosdn.127.net/edc7589ef8d2d748b10d4fbe62d6cad9.jpg", "http://yanxuan.nosdn.127.net/769529f68aad47685e9fd8ccc88a5065.jpg", "http://yanxuan.nosdn.127.net/6151ae4dcae5a0ed3e9194c0d994e8d8.jpg", "http://yanxuan.nosdn.127.net/ddfb7e8eb34b476cb3a5cc6aeae1b414.jpg", "http://yanxuan.nosdn.127.net/356742ded4619131733f009e7f44bdb8.jpg", "http://yanxuan.nosdn.127.net/d522efc0adefdf878a187d68287ccac7.jpg", "http://yanxuan.nosdn.127.net/bd385aa80f06967d8c120ee2a73ebdea.jpg", "http://yanxuan.nosdn.127.net/4a383ec27f0d0fecf6b218a6434a6537.jpg", "http://yanxuan.nosdn.127.net/dd76c5d83bdfac3eaef226032e9f2f1c.jpg", "http://yanxuan.nosdn.127.net/f37bf734bedcb5fc34f96a2d3ce21362.jpg", "http://yanxuan.nosdn.127.net/9426b170263b5f2e60b4e349002fb453.jpg", "http://yanxuan.nosdn.127.net/02c8fd2d4afb11e4ebfe7e675725f8b9.jpg", "http://yanxuan.nosdn.127.net/55114d32fb55124afb57fa5f96c7aad6.jpg", "http://yanxuan.nosdn.127.net/6c812cb0cf47dfb2b0e0dbdd4e2ae2d9.jpg", "http://yanxuan.nosdn.127.net/8491553451f68f13de7d88abd32e80bb.jpg", "http://yanxuan.nosdn.127.net/2358865b0b2916d7b4c85105828e6f5e.jpg", "http://yanxuan.nosdn.127.net/3d4a761f631987bcb1542cee33c35661.jpg", "http://yanxuan.nosdn.127.net/af64442ed12ecc4ec0a8f1053f0e6c4f.jpg", "http://yanxuan.nosdn.127.net/d00f1aa2e519c822a180024983611962.jpg", "http://yanxuan.nosdn.127.net/4dca882b9a0a583456f322030d96d99f.jpg", "http://yanxuan.nosdn.127.net/a95ed3ffbb239954cc0f1089600847cb.jpg", "http://yanxuan.nosdn.127.net/3783189e151670cae90114ac96208749.jpg", "http://yanxuan.nosdn.127.net/ea89e25888731072a7838f367efe40cc.jpg", "http://yanxuan.nosdn.127.net/1f3d87a044500179907d61e7984785b8.jpg", "http://yanxuan.nosdn.127.net/bfc62369d2cebd727c24356199b3dfc6.jpg", "http://yanxuan.nosdn.127.net/be23add374cfc9344889d449a537159c.jpg", "http://yanxuan.nosdn.127.net/113f624f32c22d14b8fe49495d275bce.jpg", "http://yanxuan.nosdn.127.net/ed060c62699d53a8d04451061aed0a95.jpg", "http://yanxuan.nosdn.127.net/a5cc33cd7c28a4c6dbb12e24c5b95e17.jpg", "http://yanxuan.nosdn.127.net/6ea47a643df6b81539cb50e83585febf.jpg", "http://yanxuan.nosdn.127.net/37bd564f186c644e582eb5056597fe2b.jpg", "http://yanxuan.nosdn.127.net/8b47fe758560f31f84441a5420c2777e.jpg", "http://yanxuan.nosdn.127.net/079946aa8f0edab416032a761e69c874.jpg", "http://yanxuan.nosdn.127.net/fab6ee083f738fe81e836f5b46345b8c.jpg"],
		"inventory": [11, 141],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "直径40cm/ 直径55cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "颜色",
			"attrValue": "天青色/ 松叶绿/ 珊瑚红/ 姜黄色/ 香芋粉/ 卡其色/ 深咖色/ 海军蓝"
		}],
		"label": "",
		"manufacture": "",
		"sale": 655,
		"date": "1500012414383",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1138001,
		"price": 79,
		"topName": "北欧简约山形纹绣花抱枕",
		"subName": "精细刺绣，舒适立体",
		"shortDescription": ["细密刺绣", "生动立体", "全棉套面", "透气舒适", "拆卸套面", "方便换洗"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/53a0c818b02895009598aeba49fd6a08.jpg", "http://yanxuan.nosdn.127.net/c0fa8106f7cd34ba0912c6ab22a0eb96.jpg", "http://yanxuan.nosdn.127.net/8dc0f42828fc39f558e374dc4139e39a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/dbc5b25b824c3b3d7ff43b56ca35eee9.png", "http://yanxuan.nosdn.127.net/26a98380a4bfc87e5bf1f284fa0e5326.jpg", "http://yanxuan.nosdn.127.net/0aaf361547fbf53416e39577b643f37f.jpg", "http://yanxuan.nosdn.127.net/d1162dd41523cacb74d55c2f020623f1.jpg", "http://yanxuan.nosdn.127.net/416067a61b4911bf7f6d26cd7adf8058.jpg"],
		"types": ["45x45cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/5737ca831d2cd44a2242eb0992583faf.jpg", "http://yanxuan.nosdn.127.net/1160e68bcdeba98d2aada60af18c03c8.jpg", "http://yanxuan.nosdn.127.net/c3772cb0d0f4767217726f9af7faa396.jpg", "http://yanxuan.nosdn.127.net/715a7f19500f5c28d9f73d37ebb1c557.jpg", "http://yanxuan.nosdn.127.net/84238cd8ab59b2fe193b825a3e89fd65.jpg", "http://yanxuan.nosdn.127.net/f4efe768f21095587d8bb4db202b2e23.jpg", "http://yanxuan.nosdn.127.net/dbb5a935340a7ff61de6bec5fa3fd985.jpg", "http://yanxuan.nosdn.127.net/b0750c142e857a922d77999a48760cb9.jpg", "http://yanxuan.nosdn.127.net/d742c6ee8b65f2812784e13c2efd04fc.jpg", "http://yanxuan.nosdn.127.net/3aada66e84ec86907ca941fbc5235f12.jpg", "http://yanxuan.nosdn.127.net/bb0fd8620c6d6208773667096709ba2b.jpg", "http://yanxuan.nosdn.127.net/82b0a7a951c15b41eb5a4bb688dd74dc.jpg", "http://yanxuan.nosdn.127.net/274fea6d222c1da9c687cb73f0f4f993.jpg", "http://yanxuan.nosdn.127.net/fc87ced2f7b274139bb079a75f7adf91.jpg", "http://yanxuan.nosdn.127.net/3a7f98096222daadf9820e1075670173.jpg", "http://yanxuan.nosdn.127.net/26501a456d9e85980e12efe92120de56.jpg", "http://yanxuan.nosdn.127.net/7a9fbd6be2b2a3c2c83d4edaad2086a6.jpg", "http://yanxuan.nosdn.127.net/a3bf915e824b8b917c893167a99a3773.jpg", "http://yanxuan.nosdn.127.net/211b5a457edcb05d3f3d21ff69c48398.jpg", "http://yanxuan.nosdn.127.net/cc0105d79ff4744f0680cbd2f87a8060.jpg", "http://yanxuan.nosdn.127.net/f1da6da8c6b7b52f958fdec1dd7769c6.jpg", "http://yanxuan.nosdn.127.net/88ed21fc61da4f79545941fffce1f68c.jpg", "http://yanxuan.nosdn.127.net/6eb4abc57dbd46d6dcc38cac3bd32c68.jpg", "http://yanxuan.nosdn.127.net/3c54b9b585c2e03559865e086f9b45bd.jpg", "http://yanxuan.nosdn.127.net/f88e9af10088b3a0b4669b27ef2fcadb.jpg", "http://yanxuan.nosdn.127.net/6b249bac9bf3aa94bf4fffb5ac4d1e70.jpg", "http://yanxuan.nosdn.127.net/b7ded1405eaa6f687eeb9e31b469d5de.jpg", "http://yanxuan.nosdn.127.net/3d072d1f04f7d94495227cf25b591744.jpg", "http://yanxuan.nosdn.127.net/89f67b83d74f2a18b680bb5e6ef0d721.jpg", "http://yanxuan.nosdn.127.net/236e948413b249b5ea4c1f6f8e835641.jpg", "http://yanxuan.nosdn.127.net/b799d3613b5e3b87d89a608533473df8.jpg", "http://yanxuan.nosdn.127.net/e6d4af8873253a0b5ae097c15c3628c0.jpg", "http://yanxuan.nosdn.127.net/fc017dc5a790385f6a96b43cf1a5b867.jpg", "http://yanxuan.nosdn.127.net/0f10cc90e368fad0bd49fafc3b9047b5.jpg", "http://yanxuan.nosdn.127.net/864bf5646ba2ad778f507c224973bca7.jpg", "http://yanxuan.nosdn.127.net/0443f772258e35af98be389a08fd85b8.jpg", "http://yanxuan.nosdn.127.net/821926b210f311717fdaa0eccb142e37.jpg", "http://yanxuan.nosdn.127.net/24d0ab5a259a662501e813cf21d752d8.jpg", "http://yanxuan.nosdn.127.net/b58c263c7e090c68d77e056c9d9afe27.jpg", "http://yanxuan.nosdn.127.net/d50d8b9f53f54ff0c066de7b39b2601c.jpg", "http://yanxuan.nosdn.127.net/b382bfe1d8797e845bbcfd9dce361f76.jpg", "http://yanxuan.nosdn.127.net/3aecb3e8d261312596727f56b54a0fa2.jpg", "http://yanxuan.nosdn.127.net/c733463829f1fe8fa61998ae7c2ae37b.jpg", "http://yanxuan.nosdn.127.net/da2850f298b6cf4108e00a06bbc59821.jpg", "http://yanxuan.nosdn.127.net/bd0924729a92af064c2108569e9d9463.jpg", "http://yanxuan.nosdn.127.net/b819438a87396b0e3cc22202fc19caf0.jpg", "http://yanxuan.nosdn.127.net/3ea853201f8ad389ae3068f3d765aa44.jpg", "http://yanxuan.nosdn.127.net/5ef9093e1959a79178c32d5fc0fbe996.jpg", "http://yanxuan.nosdn.127.net/da1d1a9a1e2afe85b640d573085a3d24.jpg", "http://yanxuan.nosdn.127.net/ce702a9ac92d3666be5d4de2af5e03ab.jpg", "http://yanxuan.nosdn.127.net/b43f6da048bbc7206990d9ff972a23ba.jpg", "http://yanxuan.nosdn.127.net/22eb869c0f07b55826e1e183dd498f3f.jpg", "http://yanxuan.nosdn.127.net/d2c6bf7e29f0e8380ebef90b3bab2294.jpg"],
		"inventory": [786],
		"information": [{
			"attrName": "颜色",
			"attrValue": "静谧蓝/ 古典金/ 动感绿/ 浪漫粉"
		}, {
			"attrName": "尺寸",
			"attrValue": "45 x 45cm"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}],
		"label": "",
		"manufacture": "",
		"sale": 132,
		"date": "1500012417301",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1015007,
		"price": 59,
		"topName": "典雅美式全棉刺绣抱枕",
		"subName": "典雅毛线绣，精致工艺",
		"shortDescription": ["三维棉芯", "蓬松柔软", "毛线刺绣", "立体色彩", "可拆洗套", "方便耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d8adb5e25500855b220c97f9952e8e13.jpg", "http://yanxuan.nosdn.127.net/66930062f08ce33abc0d8ec04fb94175.jpg", "http://yanxuan.nosdn.127.net/8281ced331ebb79c3cf1bbca603adb4f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a2045004de8a6225289376ad54317fc8.png", "http://yanxuan.nosdn.127.net/013657a5a5faf8a9a7e3f39b5bba4eac.jpg", "http://yanxuan.nosdn.127.net/d46ba997e163430e43735e4ad1caeff0.jpg", "http://yanxuan.nosdn.127.net/a90e545295d22de031b10aee631e48fe.jpg", "http://yanxuan.nosdn.127.net/f7188ec871d1f721f64cbe04860a4fe2.jpg"],
		"types": ["铃兰"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/66640f55aeb668ac9df6e26b6b30adb5.jpg", "http://yanxuan.nosdn.127.net/42852faba5623c6dc5be451d80e5df03.jpg", "http://yanxuan.nosdn.127.net/48ce93c6f6a731778c505442f163b09e.jpg", "http://yanxuan.nosdn.127.net/02a3abee9bb3e22f27781ced8774d1ab.jpg", "http://yanxuan.nosdn.127.net/c62a27145e1045879e3f2b97b9f86b4d.jpg", "http://yanxuan.nosdn.127.net/48baaafe4ea4c32242c57e58ce8e139f.jpg", "http://yanxuan.nosdn.127.net/99549f0375b108240866a09a0a2527d7.jpg", "http://yanxuan.nosdn.127.net/341529ba80d91c5304680be8f524a626.jpg", "http://yanxuan.nosdn.127.net/b15e35e9d8c04288dfb7546b1f743c17.jpg", "http://yanxuan.nosdn.127.net/2c0ebf7949133cb382b6bf18c8a5a1c0.jpg", "http://yanxuan.nosdn.127.net/bfd25d0fa6dc13a335877360e3dab8d1.jpg", "http://yanxuan.nosdn.127.net/dbcc420cef18e4a43589198ebfcc4fd1.jpg", "http://yanxuan.nosdn.127.net/15aa3e3ed45714d29ca062499db930ea.jpg", "http://yanxuan.nosdn.127.net/ab6963b4e529810577f3e428c9d10af6.jpg"],
		"inventory": [679],
		"information": [{
			"attrName": "面料成份",
			"attrValue": "100%全棉"
		}, {
			"attrName": "内芯面料",
			"attrValue": "100%全棉"
		}, {
			"attrName": "填充物",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "重量",
			"attrValue": "470g（内芯）"
		}, {
			"attrName": "产地",
			"attrValue": "中国"
		}],
		"label": "",
		"manufacture": "",
		"sale": 54,
		"date": "1500012420187",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1048005,
		"price": 59,
		"topName": "日式色织水洗条纹抱枕",
		"subName": "色织面料，水洗工艺，柔软亲肤",
		"shortDescription": ["水洗工艺", "透气定型", "色织工艺", "不易褪色", "仪征填充", "饱满蓬松"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/229fa41e71b2efa9c49d087323f27c07.jpg", "http://yanxuan.nosdn.127.net/18a271a2fde7080d5dc48d6ad05bdaa9.jpg", "http://yanxuan.nosdn.127.net/a53f6fcfdbd8dc4af9ad650d54beda68.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ce980c16810a471dffff6aa8d7bac754.png", "http://yanxuan.nosdn.127.net/112dfb2b0d975c8d525230e91d0b8add.jpg", "http://yanxuan.nosdn.127.net/7fe261a864417c0b78bca12b207678b5.jpg", "http://yanxuan.nosdn.127.net/d3491f2073d31d68af1dd5e050e54efb.jpg", "http://yanxuan.nosdn.127.net/63721e6063a5ba7e218441efd011066e.jpg"],
		"types": ["薄缥蓝", "枯野灰"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/39afc6f165cf752e16c199b65ab61ee8.jpg", "http://yanxuan.nosdn.127.net/f2635f2eb08e98687a132a97642d87de.jpg", "http://yanxuan.nosdn.127.net/08b6bca750a85d833740e1f12e5a6216.jpg", "http://yanxuan.nosdn.127.net/f61f9587dc8aec8330335da87dbb60ed.jpg", "http://yanxuan.nosdn.127.net/f22282ebbbeb664ba706e4f088c9db2b.jpg", "http://yanxuan.nosdn.127.net/ad7819c5597db9fce742cbc61aa53c72.jpg", "http://yanxuan.nosdn.127.net/ee4a43824784e660f44e16274c4717ed.jpg", "http://yanxuan.nosdn.127.net/f0eb752fd857fa1af74602afadabb0fd.jpg", "http://yanxuan.nosdn.127.net/46290c0b824babab46ce73feb23a554d.jpg", "http://yanxuan.nosdn.127.net/1c34134e19df505b4b1b2277880bba2f.jpg", "http://yanxuan.nosdn.127.net/0bce553f09f5146ba9209264c46e38ce.jpg", "http://yanxuan.nosdn.127.net/732ed69a0539f4d972213ed64e5bcff0.jpg", "http://yanxuan.nosdn.127.net/147fcd503618a36a76ed792c6a2254b1.jpg", "http://yanxuan.nosdn.127.net/1f68cea7d1e7dd23349f7c36e366cb6f.jpg", "http://yanxuan.nosdn.127.net/852711207b87360d29289be16a76e5ba.jpg", "http://yanxuan.nosdn.127.net/6f46c1d0edb91be4fa7c2747b423c494.jpg", "http://yanxuan.nosdn.127.net/2f2bc29d55899694b917c9991d0b1333.jpg", "http://yanxuan.nosdn.127.net/63d4fa2caa8bbd1d7e205e90fe176633.jpg", "http://yanxuan.nosdn.127.net/f885db84f7911c3c4abc9695f55f19f9.jpg", "http://yanxuan.nosdn.127.net/bd0c5be6c986a60a577ab7fd4fa9796e.jpg", "http://yanxuan.nosdn.127.net/fb0f814679347c4876f2ca30acd57f88.jpg", "http://yanxuan.nosdn.127.net/64b5936ea7e076885a7c1611d492aa57.jpg", "http://yanxuan.nosdn.127.net/b503dd5b259a049dc3fffcabe6264c10.jpg", "http://yanxuan.nosdn.127.net/3fb47a70640f6c252518a80a803bd362.jpg", "http://yanxuan.nosdn.127.net/1837c9a132b1ca0ed52f76f935563b7a.jpg", "http://yanxuan.nosdn.127.net/09e9cc037e909c934aba0b87c48914ad.jpg", "http://yanxuan.nosdn.127.net/e5c3a85ee4217386a8161016aa7727b9.jpg", "http://yanxuan.nosdn.127.net/e666622ecebc8fc733a49c5ad7d16c3e.jpg", "http://yanxuan.nosdn.127.net/48f87049ad7e2492ae75da78b97cd6fa.jpg", "http://yanxuan.nosdn.127.net/21cc4790d10496f2e73531c420fbb394.jpg", "http://yanxuan.nosdn.127.net/9510a74920b5589cba7af910774f8c0c.jpg", "http://yanxuan.nosdn.127.net/0c69b713c98187890316668d10aa55c6.jpg", "http://yanxuan.nosdn.127.net/dcafde6d38fd075c4ba6d0cc1e816314.jpg", "http://yanxuan.nosdn.127.net/ccdf51824645c27ab06e78faa85db7d9.jpg", "http://yanxuan.nosdn.127.net/8096a502cac9f926d288cbbe8b8534fa.jpg", "http://yanxuan.nosdn.127.net/0b2b9a1f8a1422e3975cbee85685672c.jpg", "http://yanxuan.nosdn.127.net/fd6779619cc7ed6f2a4057526f0c579d.jpg", "http://yanxuan.nosdn.127.net/bdef4d1620407043511daf2e97746f07.jpg", "http://yanxuan.nosdn.127.net/4f30d798c772ea1599723c427c1d643b.jpg", "http://yanxuan.nosdn.127.net/0cfc9aae9304010e24d92b29220dc0b5.jpg", "http://yanxuan.nosdn.127.net/7e20e47f1eaf643bc569ccb148781529.jpg", "http://yanxuan.nosdn.127.net/d9beb4226eb47be1c16e872dd9281634.jpg", "http://yanxuan.nosdn.127.net/70d2d737fbf7fc5980604ea294942b41.jpg", "http://yanxuan.nosdn.127.net/496224b05a3054625b065de6aa769959.jpg", "http://yanxuan.nosdn.127.net/d0671941e0dfb696d5392f174a949a13.jpg", "http://yanxuan.nosdn.127.net/2df72e131e86e433d939776783a44db7.jpg", "http://yanxuan.nosdn.127.net/3bea99ca3040befe69d4811e0ef9b226.jpg", "http://yanxuan.nosdn.127.net/fbc003f18889ab46a5a3a7e8698df351.jpg", "http://yanxuan.nosdn.127.net/ee0df8d583844e734273d73eb582a4a9.jpg", "http://yanxuan.nosdn.127.net/9ea9467e6f4ef5c8f0812c1595704840.jpg"],
		"inventory": [35, 273],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "45*45cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "颜色",
			"attrValue": "真朱红/ 薄缥蓝/ 枯野灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 629,
		"date": "1500012422796",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1057036,
		"price": 79,
		"topName": "日式纯色水洗亚麻抱枕",
		"subName": "水洗亚麻，透气亲肤",
		"shortDescription": ["水洗亚麻", "吸汗定型", "进口填充", "蓬松厚实", "细防雨布", "内芯不漏"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a38f1f0914bf4c734d6cd7ab352c8c9e.jpg", "http://yanxuan.nosdn.127.net/33ba65df91b960e5da31f441187f37c5.jpg", "http://yanxuan.nosdn.127.net/8d21be58360d49a8abe26ff4e3bd93f1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/8a9ee5ba08929cc9e40b973607d2f633.png", "http://yanxuan.nosdn.127.net/bec107bf0cc86dcf90fa084584d68c76.jpg", "http://yanxuan.nosdn.127.net/d5da1d907ce3e5dcc8cf72e925d9494b.jpg", "http://yanxuan.nosdn.127.net/2f82661892afb0fd5efa8ff343f9941e.jpg", "http://yanxuan.nosdn.127.net/fd1d9edc261fb68844c0fb65f0c1a4a4.jpg"],
		"types": ["灰紫", "蓝色", "灰色", "咖色"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/6b69f7597ccffd27d77467d9d04eb294.jpg", "http://yanxuan.nosdn.127.net/a89ca371ef07355c1feb293db961bd30.jpg", "http://yanxuan.nosdn.127.net/2076e89c5f8fde4f44f918bd02d18eb7.jpg", "http://yanxuan.nosdn.127.net/5c9111e4dcc13cb41db98f68086cc620.jpg", "http://yanxuan.nosdn.127.net/8f0645abcf883e7a863f32ce95f3c26b.jpg", "http://yanxuan.nosdn.127.net/76a2b12f2d0f48f268d18b0ca0d1d6bb.jpg", "http://yanxuan.nosdn.127.net/a91f75159867f33a91f4e9992e00afa1.jpg", "http://yanxuan.nosdn.127.net/93de61256a8ff3a8aa4bb90847ff454e.jpg", "http://yanxuan.nosdn.127.net/f611f99bea2920881e1421c110970234.jpg", "http://yanxuan.nosdn.127.net/a292339423f141ad5d7a4011ea316956.jpg", "http://yanxuan.nosdn.127.net/2045ae4f861d9eae6af351b9d82c9239.jpg", "http://yanxuan.nosdn.127.net/398718a6d579c4af5f255909283e44a2.jpg", "http://yanxuan.nosdn.127.net/5be95e2db627908d23605fe042af2937.jpg", "http://yanxuan.nosdn.127.net/50a4fa0f67aa85dfaad36695225fe2f8.jpg", "http://yanxuan.nosdn.127.net/7c825e297cfbaaae632146a55c61dc3c.jpg", "http://yanxuan.nosdn.127.net/261c7819e7e9ac165e64cae88a59f70c.jpg", "http://yanxuan.nosdn.127.net/ec83f40d91fcc79f59a2479dffeb4565.jpg", "http://yanxuan.nosdn.127.net/26f3e85402086b7d261a650e244dc676.jpg", "http://yanxuan.nosdn.127.net/dccb68f0d97112d245ab1924744b94b8.jpg", "http://yanxuan.nosdn.127.net/aaba69949efd7ed85e72071f4ade4945.jpg", "http://yanxuan.nosdn.127.net/3f23300061e5cf871e86a51f0012e885.jpg", "http://yanxuan.nosdn.127.net/a55eedca057e0c973549ac8f13b47800.jpg", "http://yanxuan.nosdn.127.net/abf16e831285e3d97dbb60a3162e7968.jpg", "http://yanxuan.nosdn.127.net/a9390c8dab9fc7d8c27ac9410eb0340c.jpg", "http://yanxuan.nosdn.127.net/8feb2be5afec5abe439cf1b42683373f.jpg", "http://yanxuan.nosdn.127.net/beb7620d0f685ab9c3af7ed18284b29e.jpg", "http://yanxuan.nosdn.127.net/7f70ceed2078d44d747a9ce369feee9e.jpg", "http://yanxuan.nosdn.127.net/5469e219bd5347568337746b257f094e.jpg", "http://yanxuan.nosdn.127.net/a177a6b6e58580809330895ebdbaff6b.jpg", "http://yanxuan.nosdn.127.net/9db0090d56ab757babb2ba661726cbe3.jpg", "http://yanxuan.nosdn.127.net/6363637e0dd2fc670745c217b2a5cbfc.jpg", "http://yanxuan.nosdn.127.net/1af1bde98f1497f591f62bff99ccca54.jpg", "http://yanxuan.nosdn.127.net/69d034b353ae2e6e30afb6c21483690f.jpg", "http://yanxuan.nosdn.127.net/4e29d6ac5ed040d63847ca456a179d43.jpg", "http://yanxuan.nosdn.127.net/29e460fba57f67cd83121f6cb917cfbd.jpg", "http://yanxuan.nosdn.127.net/16090c02f4d4b76c6be82d98e489586e.jpg", "http://yanxuan.nosdn.127.net/c840eb66cf002227c52a13fbe55f657b.jpg", "http://yanxuan.nosdn.127.net/16f65265b0942a60f3241704dc29be13.jpg", "http://yanxuan.nosdn.127.net/54a63da54b4e80867d8cd92d1ea9576e.jpg", "http://yanxuan.nosdn.127.net/ebd0b906076850983e5a2aae9f667ce7.jpg", "http://yanxuan.nosdn.127.net/bbf32cdc82643a85c12ff05ea88088ad.jpg", "http://yanxuan.nosdn.127.net/ca6e3ccc3725c3f58338b62a5a0655d3.jpg", "http://yanxuan.nosdn.127.net/6ef02962e6155f811566aad168dabbec.jpg", "http://yanxuan.nosdn.127.net/832735166071f05288ffd347dff58ee6.jpg", "http://yanxuan.nosdn.127.net/4fc490c4e9a0a0fa0affd317b8526f4e.jpg", "http://yanxuan.nosdn.127.net/1b05f975f16c09f106c81533c1a249b0.jpg"],
		"inventory": [365, 921, 566, 1],
		"information": [{
			"attrName": "颜色",
			"attrValue": "灰紫/ 蓝色/ 灰色/ 咖色"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "填充克重",
			"attrValue": "600G"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "材质",
			"attrValue": "面料：100% 亚麻内芯面料：100%棉填充：100%聚酯纤维"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 935,
		"date": "1500012425555",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1055012,
		"price": 39,
		"topName": "300根全棉羽丝绒抱枕芯",
		"subName": "仪征3D填充，充实的满足感",
		"shortDescription": ["仪征3D", "高回弹率", "纯棉面料", "舒适透气", "缎纹面料", "不漏纤维"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9415aeb5cb9518abf4d5a7f0f8c85f7a.jpg", "http://yanxuan.nosdn.127.net/d49d271a6430b4ea1f3b4199206c48c3.jpg", "http://yanxuan.nosdn.127.net/039d10394411bcec37eef4a0cf9b0087.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3d437c8d68e2ec3f3dd61001bf98f16e.png", "http://yanxuan.nosdn.127.net/55d2d990f71f618146238f5bbf36d650.jpg", "http://yanxuan.nosdn.127.net/4663facadd6c50f7ff11cd92b3cd8e7a.jpg", "http://yanxuan.nosdn.127.net/1c8123fb59473106eb829b6001c59701.jpg", "http://yanxuan.nosdn.127.net/0eeb46f412322fe591fcf134b877c74f.jpg"],
		"types": ["45*45cm", "66*66cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/07f2717762df73a6a697bb5399da6376.jpg", "http://yanxuan.nosdn.127.net/e202bdb4be8f36bda118cf7265d00f65.jpg", "http://yanxuan.nosdn.127.net/4b5766cf268d327a3518ee5429c4c4e7.jpg", "http://yanxuan.nosdn.127.net/4f4e4356d070dbca22cf19a60a2447ed.jpg", "http://yanxuan.nosdn.127.net/da3a3e22d355ccf82235603507f3a083.jpg", "http://yanxuan.nosdn.127.net/be789777e5e1381bb7b62d26fcfb619e.jpg", "http://yanxuan.nosdn.127.net/c48e78aa87b8e81eab6a60de74d1c19c.jpg", "http://yanxuan.nosdn.127.net/4f772f4990d8ae0acac660acf25be2d7.jpg", "http://yanxuan.nosdn.127.net/9f1bd930fcb57e79a4ce2a1c4a0f2f4c.jpg", "http://yanxuan.nosdn.127.net/f481e1e9b8c4e728f4f7225af52a335e.jpg", "http://yanxuan.nosdn.127.net/4fca69439b053b510724cf6834856a2c.jpg", "http://yanxuan.nosdn.127.net/a285ec5ac9c84a6616feca7301f515c3.jpg", "http://yanxuan.nosdn.127.net/52435458ac1c48fb45f4a9888052b5b6.jpg", "http://yanxuan.nosdn.127.net/01301675d00e13d21588d0bbb72e1745.jpg", "http://yanxuan.nosdn.127.net/63627106753f764733cf47047e887d1e.jpg", "http://yanxuan.nosdn.127.net/15ecf40c8045513fe6a1303fe7d4383f.jpg", "http://yanxuan.nosdn.127.net/e8ef113464ff066662e639868e6eda28.jpg", "http://yanxuan.nosdn.127.net/0de1977400dfda99d0601e1c12fdbf1e.jpg"],
		"inventory": [835, 619],
		"information": [{
			"attrName": "克重",
			"attrValue": "600G/ 1400G"
		}, {
			"attrName": "尺寸",
			"attrValue": "45*45cm / 66*66cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国江苏"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}],
		"label": "",
		"manufacture": "",
		"sale": 423,
		"date": "1500012429300",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1039051,
		"price": 79,
		"topName": "多功能午睡枕",
		"subName": "放松自在的午后时光",
		"shortDescription": ["全棉套面", "透气柔软", "L形设计", "趴睡减压", "记忆绵芯", "吸收压力"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/beab9a8d39f5a7478d1710d3cffaa134.jpg", "http://yanxuan.nosdn.127.net/5e3adddde4b4ae5d9ad7bde358276434.jpg", "http://yanxuan.nosdn.127.net/0eee73630c345dcc60aa43acb1a4acd4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/c8ca0600fa7ba11ca8be6a3173dd38c9.png", "http://yanxuan.nosdn.127.net/0b89243ca9fbfbc22469a5970cb1e626.jpg", "http://yanxuan.nosdn.127.net/73c86d83c8b691609dadf738b1c5fc04.jpg", "http://yanxuan.nosdn.127.net/ce894f867b1e3db7ba780726406c86f0.jpg", "http://yanxuan.nosdn.127.net/c031141657ed452c8ef2ab72aae4618e.jpg"],
		"types": ["灰色", "粉灰"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/9c807e683c459e2d4a82f347a04f694e.jpg", "http://yanxuan.nosdn.127.net/bcdb5669081596c8400067064055577c.jpg", "http://yanxuan.nosdn.127.net/857370bfebf207167c2fe6eaea310853.jpg", "http://yanxuan.nosdn.127.net/b077be39ee918f58871b0db52cfdf9b0.jpg", "http://yanxuan.nosdn.127.net/bb00429728287149426047c84dcd0b5b.jpg", "http://yanxuan.nosdn.127.net/dfbfe51485462dad29f2ffbab125ca7d.jpg", "http://yanxuan.nosdn.127.net/4a52bc69f7dcb60b9dc256f09393f653.jpg", "http://yanxuan.nosdn.127.net/239362095383c9cb3affa8436b227cd1.jpg", "http://yanxuan.nosdn.127.net/cf3caaefad0277f120fa942968e9f55f.jpg", "http://yanxuan.nosdn.127.net/3c2f9b1e280de6c228baa5dbb435f2d5.jpg", "http://yanxuan.nosdn.127.net/81667a802a0ca4d8109370b7fb8a5ff7.jpg", "http://yanxuan.nosdn.127.net/b3258ea07f671d3a3f8e9df08930c01b.jpg", "http://yanxuan.nosdn.127.net/d01f16d1edfb038d3f3c0b4a14421075.jpg", "http://yanxuan.nosdn.127.net/363b877c965ce293a741ea6357f2da56.jpg", "http://yanxuan.nosdn.127.net/bf66a5dd0e9f43087e3976cf8b846c16.jpg", "http://yanxuan.nosdn.127.net/40f4904be124951dfadb0850c4c60fd8.jpg", "http://yanxuan.nosdn.127.net/4c183e7e1c31d55155e79fa35eb35a6d.jpg", "http://yanxuan.nosdn.127.net/47ce46a9831f2ca56e8ed6edb3101351.jpg", "http://yanxuan.nosdn.127.net/8faaaa57dffbc18c431791d637191d06.jpg", "http://yanxuan.nosdn.127.net/0822abacf6f8c1b7256bf169b02d5d99.jpg", "http://yanxuan.nosdn.127.net/5190ebadf91f8866466ca9e6eec3449d.jpg", "http://yanxuan.nosdn.127.net/ec58ffced2f449238f0347d532de606e.jpg", "http://yanxuan.nosdn.127.net/f78d70d111e5fc92fb7d435ab14061ec.jpg", "http://yanxuan.nosdn.127.net/6f86f18f969ac19226a05a875b177bcd.jpg", "http://yanxuan.nosdn.127.net/15cd597e6332119c2ee229badc482649.jpg", "http://yanxuan.nosdn.127.net/9cfcec1d9a41526f19ee26c92e3399f4.jpg", "http://yanxuan.nosdn.127.net/5ecfbf58f9f94dd740213c26ae8bed84.jpg", "http://yanxuan.nosdn.127.net/b5c6055d355a08c0c055a1d36bd0d4be.jpg", "http://yanxuan.nosdn.127.net/d63a519ca80d60f03230c78babd582b5.jpg", "http://yanxuan.nosdn.127.net/9e8bf1789b29f29d9e9c0cdc585a2026.jpg", "http://yanxuan.nosdn.127.net/058e5b03e59a4f697e49c6353cb5293e.jpg", "http://yanxuan.nosdn.127.net/7c58c6bee5d23b01630d95ffb3c1a225.jpg", "http://yanxuan.nosdn.127.net/9972e85ae1a135d87f4d9d66d46db23e.jpg", "http://yanxuan.nosdn.127.net/e3ee0d64f62c56df7edc8df4dcc8b8e5.jpg", "http://yanxuan.nosdn.127.net/717bbe2fa376a8f14c924e7205401fb4.jpg", "http://yanxuan.nosdn.127.net/3f1207927deb22dd49178a7b807cad19.jpg", "http://yanxuan.nosdn.127.net/b811bbb503ef12612c0a9d03a1cb531e.jpg", "http://yanxuan.nosdn.127.net/120cec598fda2641b084b6540a960cd4.jpg", "http://yanxuan.nosdn.127.net/587beb7afa60f90ea4f1117cd207bf27.jpg", "http://yanxuan.nosdn.127.net/31be8bcd9a139f77d425049413f036ee.jpg", "http://yanxuan.nosdn.127.net/4e831cc8bcfe655cceb63aff7755d348.jpg", "http://yanxuan.nosdn.127.net/0b93ad20da287659db31edbb7314b2ed.jpg", "http://yanxuan.nosdn.127.net/1bb6b3f9358e333e3f4bec9c2085eef1.jpg", "http://yanxuan.nosdn.127.net/4421479083fe099d61873136f8915e3d.jpg", "http://yanxuan.nosdn.127.net/6f276827e535002cdd944b5643869d46.jpg", "http://yanxuan.nosdn.127.net/6e23b036a60207180a3bc10aa425eff4.jpg", "http://yanxuan.nosdn.127.net/84cc6e788710a713c58d80a62956ba2a.jpg", "http://yanxuan.nosdn.127.net/75ac978bb8eae76b6d48e8a6375def73.jpg", "http://yanxuan.nosdn.127.net/94e47ea1b1118c62a14227f5888a7b55.jpg", "http://yanxuan.nosdn.127.net/4ec99bd9478d10f1b84aa465378996be.jpg", "http://yanxuan.nosdn.127.net/b7520f5cb8248ac3ed5f135cabed1302.jpg", "http://yanxuan.nosdn.127.net/60cb589255f059c88616896b7134b6f0.jpg", "http://yanxuan.nosdn.127.net/906e877c85f69ba4ba8674385cb31690.jpg", "http://yanxuan.nosdn.127.net/bffe449ee02e4866d1cc0b4813986306.jpg", "http://yanxuan.nosdn.127.net/343f94ced5d75c34f430d129daf26921.jpg"],
		"inventory": [811, 331],
		"information": [{
			"attrName": "外层面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "里层面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "内芯",
			"attrValue": "聚氨酯"
		}, {
			"attrName": "安全技术",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "1,水洗时请将外套取下，用冷水洗涤后置于阴凉处阴干或烘干。不能同褪色衣物同洗，以防沾污、沾色。2,外套洗后稍有缩水是正常现象，因是弹性织物，仅需四周拉一下长度即可。3,记忆棉不可水洗，请经常保持产品干燥，定期通风（不可曝晒）。若不慎打湿，立即用干毛巾将水分吸干，置于通风处阴干或用冷吹风吹干即可。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 505,
		"date": "1500012431851",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135061,
		"price": 79,
		"topName": "日式多功能午睡枕 新款",
		"subName": "针织透气，日式条纹",
		"shortDescription": ["针织套面", "透气柔软", "L形设计", "趴睡减压", "记忆绵芯", "吸收压力"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/8f2e534fe19565ef7803be273eceaf89.jpg", "http://yanxuan.nosdn.127.net/d7868c630df6f6c8599984055b38caba.jpg", "http://yanxuan.nosdn.127.net/45251247ec9a78887d0e59e9d8bad5fd.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/8fe274380e9b549241e6f2c59caff809.png", "http://yanxuan.nosdn.127.net/271d8f88f9d385d4ef45a5ad7efbd034.jpg", "http://yanxuan.nosdn.127.net/2e50339fec00c7888e81520084053a69.jpg", "http://yanxuan.nosdn.127.net/2e0319b81a0eac356d7774627db4e42f.jpg", "http://yanxuan.nosdn.127.net/ba718d3618da3809981093b175e0ade2.jpg"],
		"types": ["灰色", "米色", "军绿", "深褐"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/5f3667e7b48ec32460223a563cec99bf.jpg", "http://yanxuan.nosdn.127.net/fe68dad45000db6d7df3a62f22caf48c.jpg", "http://yanxuan.nosdn.127.net/90f9dddc5959e9c1178a2e4a5a9214b7.jpg", "http://yanxuan.nosdn.127.net/7441b58659f93a4a0bacbd72521e9b13.jpg", "http://yanxuan.nosdn.127.net/d9990fd49bd7e5378408b0976c430648.jpg", "http://yanxuan.nosdn.127.net/6bd0d3e1b4235dd3597f2b7005c9297c.jpg", "http://yanxuan.nosdn.127.net/e9bd41a7fa325fd03d9ade11bb054151.jpg", "http://yanxuan.nosdn.127.net/b1e5bff8c2f8ac9abbea2182071531ea.jpg", "http://yanxuan.nosdn.127.net/fd9d6b8d3cafcdb1c28b9af84a36aaf2.jpg", "http://yanxuan.nosdn.127.net/1fb82c69506a3548e79d0684080cf83d.jpg", "http://yanxuan.nosdn.127.net/7ce5132fa6ef81a59c2197b601d50f39.jpg", "http://yanxuan.nosdn.127.net/443fe15fee0eb950729dd32e3f2db703.jpg", "http://yanxuan.nosdn.127.net/edbc59e7a42e59f17a844b04a2eab4f7.jpg", "http://yanxuan.nosdn.127.net/f646a4010b80a6dc3b351e75674d5c6c.jpg", "http://yanxuan.nosdn.127.net/93455b012cb7c94fbe74fdba9f661e18.jpg", "http://yanxuan.nosdn.127.net/a03acfc489300f0b7a135f690642c3a2.jpg", "http://yanxuan.nosdn.127.net/1672a3001da49f8822098aa94d271f2e.jpg", "http://yanxuan.nosdn.127.net/328bac7501c8db998969cc3e9136b0f0.jpg", "http://yanxuan.nosdn.127.net/b41153e5da9cbd47b74bfe8e8c7c8a63.jpg", "http://yanxuan.nosdn.127.net/9483a8866a299044fc11afee8920bb16.jpg", "http://yanxuan.nosdn.127.net/6100fa84f426e7e58ff798608c339199.jpg", "http://yanxuan.nosdn.127.net/a0e7d7baff5d9d95603384b3b6f54c03.jpg", "http://yanxuan.nosdn.127.net/f5996ba38b30e1a59e0fda0f1b71c474.jpg", "http://yanxuan.nosdn.127.net/796fafec71175b9204a4acb154d16ca7.jpg", "http://yanxuan.nosdn.127.net/0275ccb1ee9266dd3411c4b155e5700d.jpg", "http://yanxuan.nosdn.127.net/3e86e2845e1c6a76e90f479b979f183e.jpg", "http://yanxuan.nosdn.127.net/368644529e55a98b14d428d4c65e2b57.jpg", "http://yanxuan.nosdn.127.net/9a13c69664c3e43dd24c8ab2156c2670.jpg", "http://yanxuan.nosdn.127.net/128b8f36d145c69b4216b12165eed164.jpg", "http://yanxuan.nosdn.127.net/117211546dd3201791218866a8229cd8.jpg", "http://yanxuan.nosdn.127.net/40ce77b1dae23d3722221cdc1f7e216f.jpg", "http://yanxuan.nosdn.127.net/650e7ea5afd4854cf46c6e6127d768f6.jpg", "http://yanxuan.nosdn.127.net/b8f238322bac6316506e6d025f1f25bb.jpg", "http://yanxuan.nosdn.127.net/5b97f0716681d9b4937f26df099e15ce.jpg", "http://yanxuan.nosdn.127.net/f66b1995075fa195e1ab556214c02cc3.jpg", "http://yanxuan.nosdn.127.net/15349e88b5c75a6798032d4cf55caa2d.jpg", "http://yanxuan.nosdn.127.net/bf3e0c0da314d2be00470f705b9fa970.jpg", "http://yanxuan.nosdn.127.net/97af5dd1dc4c02b8e5b1f4a1a070d8b7.jpg", "http://yanxuan.nosdn.127.net/bb635efc24e7321e0b1d1212889d604a.jpg", "http://yanxuan.nosdn.127.net/8967ad7a0136cfe9dfd0640e7742b3e3.jpg", "http://yanxuan.nosdn.127.net/2b61dce15bfc3f852244e686bc2123c4.jpg", "http://yanxuan.nosdn.127.net/11a5487bb21370570983cac04127f4a6.jpg", "http://yanxuan.nosdn.127.net/b6cc0aaba697e06764fc03ad63bf5dcd.jpg", "http://yanxuan.nosdn.127.net/e8adaad4bd6ef0b69e1147a621ced4d5.jpg", "http://yanxuan.nosdn.127.net/68fa6232b68f9ae986ed317c28e515a6.jpg", "http://yanxuan.nosdn.127.net/d2c4fe0bcafaafcd8f604711ad4dd959.jpg", "http://yanxuan.nosdn.127.net/3782772b8b4ac2f36eab1fdff2e4e8db.jpg", "http://yanxuan.nosdn.127.net/be84846d395b46226bbbee501a3c746b.jpg", "http://yanxuan.nosdn.127.net/5fbf4da4ee8ba6d48c7f1eb5747b34c7.jpg", "http://yanxuan.nosdn.127.net/80e7fc08cb4407d15e3aee01157ccf80.jpg", "http://yanxuan.nosdn.127.net/ea1cf66bfe855db07dc7d4963fbda1ae.jpg", "http://yanxuan.nosdn.127.net/764314373f39c1c39d0b59e594299f26.jpg", "http://yanxuan.nosdn.127.net/8d210741f8b1f589cc6434ba0c7e3356.jpg", "http://yanxuan.nosdn.127.net/330f0a9b2c29eecfc1718531ff4cda97.jpg", "http://yanxuan.nosdn.127.net/c1e87ce70f21553e6311d25a37a32715.jpg", "http://yanxuan.nosdn.127.net/c19bad84a05ec44de91c964ba7030692.jpg", "http://yanxuan.nosdn.127.net/32ac87229f46c70c113cd06b943c75c9.jpg", "http://yanxuan.nosdn.127.net/b9d6b0013be5ee140d5d54d9997c12a3.jpg", "http://yanxuan.nosdn.127.net/7d5ad8fa1d5e533a22bc6be8db209d8d.jpg", "http://yanxuan.nosdn.127.net/49adc8ba54e98836fac9381957e91cb2.jpg", "http://yanxuan.nosdn.127.net/1eb4f0c8d0973fe4fc1fc61f801db26e.jpg", "http://yanxuan.nosdn.127.net/1aaf3d208686b489857441ba5efaefbb.jpg", "http://yanxuan.nosdn.127.net/776bf16a99bbdd732b126bde7ea737f9.jpg"],
		"inventory": [366, 542, 663, 348],
		"information": [{
			"attrName": "填充物重量",
			"attrValue": "280g"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22843-2009"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}],
		"label": "",
		"manufacture": "",
		"sale": 824,
		"date": "1500012434570",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135058,
		"price": 79,
		"topName": "日式多功能手卷午睡枕坐垫",
		"subName": "全棉针织条纹，透气按摩粒子",
		"shortDescription": ["按摩粒子", "流动承托", "精梳棉材", "亲肤柔软", "针织面料", "弹性吸汗"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d835ae60759b788b6fd0d5c5011d4bc9.jpg", "http://yanxuan.nosdn.127.net/d77ee4d4480aad8cb7009a8b1aa46ae4.jpg", "http://yanxuan.nosdn.127.net/238394d28b9d38f947d1d4a866516718.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/37bc0fa3524a904ac740340fa92bd515.png", "http://yanxuan.nosdn.127.net/45765c794a67f43ae09e2558158e99ea.jpg", "http://yanxuan.nosdn.127.net/2343dfbfd4a564ce5a0c0342c754dc96.jpg", "http://yanxuan.nosdn.127.net/6d8a21d7dadcac97cc0fe16f4de91b7a.jpg", "http://yanxuan.nosdn.127.net/8bf410efc12c23f3b6a65ba3023d2f10.jpg"],
		"types": ["灰色条纹", "米色条纹", "军绿条纹", "深褐条纹"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/2286fb6b29d365466760ecbf2ebc8c82.jpg", "http://yanxuan.nosdn.127.net/a9b2bd6e1049c5c4653a00b9802e6a11.jpg", "http://yanxuan.nosdn.127.net/2639883802a55490ea81fe3dcd543df3.jpg", "http://yanxuan.nosdn.127.net/582b3658d2e405bd74dce301502d70f1.jpg", "http://yanxuan.nosdn.127.net/ba9df33cbb0003bdab7d63dd0a70d599.jpg", "http://yanxuan.nosdn.127.net/24c5d1905d9c31072445d87f7a37eebb.jpg", "http://yanxuan.nosdn.127.net/e874eec46f85b846f696dd11fe61b858.jpg", "http://yanxuan.nosdn.127.net/d64ae710b7fc2c1cef03d7582515ede0.jpg", "http://yanxuan.nosdn.127.net/ab294e2889662c548e3e283e548d7ca2.jpg", "http://yanxuan.nosdn.127.net/2eb3eaef8f70960e95c67048faf1c68c.jpg", "http://yanxuan.nosdn.127.net/11bf7eb8c196ecc361c963836b81d4ad.jpg", "http://yanxuan.nosdn.127.net/ef7b28262d2d7def40175ca98bde3222.jpg", "http://yanxuan.nosdn.127.net/678ae536ac582a2923cfa8240bf66aa8.jpg", "http://yanxuan.nosdn.127.net/32d157099c01a5c6283513849f699d0f.jpg", "http://yanxuan.nosdn.127.net/e74c91fa555929d5493dcde5da877b02.jpg", "http://yanxuan.nosdn.127.net/e511841b236e95ab4ff0bf4562500ad0.jpg", "http://yanxuan.nosdn.127.net/deb067ad58dea4f11f53b191e3d1e77f.jpg", "http://yanxuan.nosdn.127.net/76a6d1fc324d373f70db08ce8750cb32.jpg", "http://yanxuan.nosdn.127.net/6305c83e95ddddd661cef3d5c9ac58cc.jpg", "http://yanxuan.nosdn.127.net/c9dcf3269c87105f1841aed22d0f36fd.jpg", "http://yanxuan.nosdn.127.net/54d7c9813569e17cef0f1027e5a52e6b.jpg", "http://yanxuan.nosdn.127.net/d39f00c7e20a5cd1a9ee8c9a65744cc0.jpg", "http://yanxuan.nosdn.127.net/b3bcd9d4b95c77f2a61dc5e29cd804cc.jpg", "http://yanxuan.nosdn.127.net/f52a276d2daf93cb61be8d6b6509106a.jpg", "http://yanxuan.nosdn.127.net/d659bfb20371020a769309886aadd16f.jpg", "http://yanxuan.nosdn.127.net/43d05684abd3de808a8e35506a232c76.jpg", "http://yanxuan.nosdn.127.net/48905901467d7f0950220b3eac766519.jpg", "http://yanxuan.nosdn.127.net/3ed5dcbd0e5d8b53cd6c4116780415af.jpg", "http://yanxuan.nosdn.127.net/f0e8dbe1a4acb9985534c1a1017b91ce.jpg", "http://yanxuan.nosdn.127.net/5953f2c981375ea3945f368b9efcf2e2.jpg", "http://yanxuan.nosdn.127.net/e2afc692ecef8565da94ab96d605bd8d.jpg", "http://yanxuan.nosdn.127.net/b1c74ac52f6858cbaf6795bb98269a60.jpg", "http://yanxuan.nosdn.127.net/c1090b13b82a36d182644a78c1ade112.jpg", "http://yanxuan.nosdn.127.net/8d28fba7b538217405ad66fb119e5fa0.jpg", "http://yanxuan.nosdn.127.net/22588b3bc32226a798cb1ae6106525ae.jpg", "http://yanxuan.nosdn.127.net/d9f07dcfdfa0e7a90df6e8c9ea397d17.jpg", "http://yanxuan.nosdn.127.net/00df39022e7a1c29a9c0fbf4a0e3fb38.jpg", "http://yanxuan.nosdn.127.net/8588aabc1bbe4475026d74052b166a51.jpg", "http://yanxuan.nosdn.127.net/22071588ec58dfd880e913908acf2544.jpg", "http://yanxuan.nosdn.127.net/c8f02bcd66829318d9ca39618df2f42f.jpg", "http://yanxuan.nosdn.127.net/e0a72a74333e658a4da4bf886d74d739.jpg", "http://yanxuan.nosdn.127.net/8e40a7ae5c9834f61408a1d31c839d79.jpg", "http://yanxuan.nosdn.127.net/af4812a2debd12fb561816f2df84fddc.jpg", "http://yanxuan.nosdn.127.net/e8182e35711a99d7e443bd69908948e2.jpg", "http://yanxuan.nosdn.127.net/82ca0181ca502c76834e528135b272e8.jpg", "http://yanxuan.nosdn.127.net/f359915790a2bc8a399f243357da1cd4.jpg", "http://yanxuan.nosdn.127.net/fa9246460b556890c5fdd5a8cc305743.jpg", "http://yanxuan.nosdn.127.net/5381c329f434e08e18e087ebec952a28.jpg", "http://yanxuan.nosdn.127.net/8f966701c7b93490c5cebf8e9cfdffa5.jpg", "http://yanxuan.nosdn.127.net/056d111c415c9db7282d8a27aeed9ae8.jpg", "http://yanxuan.nosdn.127.net/32dc1dbca7a4922e8da3aaf90ca5f1be.jpg", "http://yanxuan.nosdn.127.net/1ca114e5755a30f1557f8c75b89b1902.jpg", "http://yanxuan.nosdn.127.net/959c4385428233e4ec256a6646ced133.jpg"],
		"inventory": [904, 842, 736, 973],
		"information": [{
			"attrName": "填充物",
			"attrValue": "聚苯乙烯泡沫粒子"
		}, {
			"attrName": "填充物重量",
			"attrValue": "260g"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 8401-2010 B类"
		}],
		"label": "",
		"manufacture": "",
		"sale": 900,
		"date": "1500012437193",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1020000,
		"price": 79,
		"topName": "升级款记忆绵护椎腰靠",
		"subName": "人体工学设计，缓解腰背疼痛",
		"shortDescription": ["3区支撑", "饱满贴合", "天竺棉面", "柔软舒适", "记忆绵芯", "吸收压力"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/55f21f35af881d6ccdd19245a8804941.jpg", "http://yanxuan.nosdn.127.net/0eb9bfaa320b57a98c555ea843482026.jpg", "http://yanxuan.nosdn.127.net/f2dec71e0d84f3d78d16168fe774f3eb.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/819fdf1f635a694166bcfdd426416e8c.png", "http://yanxuan.nosdn.127.net/e163b42594b58936ee8500abb8b4112c.jpg", "http://yanxuan.nosdn.127.net/1f6f41a8c5cdafe375548d77e9f06d78.jpg", "http://yanxuan.nosdn.127.net/b69fd91ecc1c9b9aa431b8df4298a6a1.jpg", "http://yanxuan.nosdn.127.net/a621c700d49357a4ab46c6c7a97fa83c.jpg"],
		"types": ["灰色条纹", "粉色条纹"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/8176934e414ec6c85078cb64322fe336.jpg", "http://yanxuan.nosdn.127.net/33ff256b2f69de517f567ebb993dd08e.jpg", "http://yanxuan.nosdn.127.net/5204e4f7c7fa00866e270a93ec85a596.jpg", "http://yanxuan.nosdn.127.net/9f3aed0164b92344f17ffbc0b8fc7ade.jpg", "http://yanxuan.nosdn.127.net/1d2d94d8f0f10f17183954b69d09e2bb.jpg", "http://yanxuan.nosdn.127.net/3921600dd00e2c49a7414035111b767d.jpg", "http://yanxuan.nosdn.127.net/aef3c726fec0be6ce17089e06e753d4f.jpg", "http://yanxuan.nosdn.127.net/446fbad756b6327898cee40e7b67a0b6.jpg", "http://yanxuan.nosdn.127.net/0950b4fa1cac49eece29af35c6e69e4f.jpg", "http://yanxuan.nosdn.127.net/cf7e88b2b57641ab81bbf36351db5ff8.jpg", "http://yanxuan.nosdn.127.net/53d66b4714682aaff4ab082980a44b46.jpg", "http://yanxuan.nosdn.127.net/a7f2d82d7a5622dd9f6b0d44faed9fda.jpg", "http://yanxuan.nosdn.127.net/e7fdc566d101b7cf73cee32f55b0f945.jpg", "http://yanxuan.nosdn.127.net/4e04202364d1a0a1dc1a2a1ea871e45e.jpg", "http://yanxuan.nosdn.127.net/7b3135ad6c01a2675fc7e96f6643ff7f.jpg"],
		"inventory": [516, 56],
		"information": [{
			"attrName": "面料成分",
			"attrValue": "100%棉"
		}, {
			"attrName": "尺寸",
			"attrValue": "33cm×31cm×10cm"
		}, {
			"attrName": "颜色",
			"attrValue": "灰色条纹/粉色条纹"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 599,
		"date": "1500012439672",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135062,
		"price": 89,
		"topName": "慢回弹记忆绵护椎腰靠 加大版",
		"subName": "全棉针织，慢回弹承托力",
		"shortDescription": ["3区支撑", "饱满贴合", "加大尺寸", "回弹支撑", "记忆绵芯", "吸收压力"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d79e8210a26ef5334128c88a20130dfb.jpg", "http://yanxuan.nosdn.127.net/70a24813f275b3a97322affebf818dc0.jpg", "http://yanxuan.nosdn.127.net/8c4214ebce646483a95775213d9cfda0.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f842d662072ca1eba1960413a6ed5100.png", "http://yanxuan.nosdn.127.net/5660c03897bce8c1320e0e88c3d04b9b.jpg", "http://yanxuan.nosdn.127.net/9487fb70149274fbc205b0f1915e4225.jpg", "http://yanxuan.nosdn.127.net/d9426fb5afd9e4d51410de9d9ac85cc5.jpg", "http://yanxuan.nosdn.127.net/0368ec6d0052b641336014b7d4b14527.jpg"],
		"types": ["灰色", "米色", "军绿", "深褐"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/55868d84ff9873dffe47515578402342.jpg", "http://yanxuan.nosdn.127.net/a2d2ebfba33530566780f054d0632788.jpg", "http://yanxuan.nosdn.127.net/725e59ee1113f4b2bec86d50f62dad9f.jpg", "http://yanxuan.nosdn.127.net/1c5d26f6aa55c48b94dc8193eab6fdab.jpg", "http://yanxuan.nosdn.127.net/f37ce510bb54f9d35c73b37decceee13.jpg", "http://yanxuan.nosdn.127.net/d87640da6ec40b2e20c63f18ce9772f6.jpg", "http://yanxuan.nosdn.127.net/faff5d0729e2239be7ebc8b281498ec4.jpg", "http://yanxuan.nosdn.127.net/357c7e4258c5d9caa796685ab96ebed9.jpg", "http://yanxuan.nosdn.127.net/8e59b37d530435efbcec3c62d5c49152.jpg", "http://yanxuan.nosdn.127.net/f2f1fbb44b318816612acdf424adf62b.jpg", "http://yanxuan.nosdn.127.net/2c4a0c91ca2097bae9493115b2f3ce77.jpg", "http://yanxuan.nosdn.127.net/3b91fc24122f23cb8f5be84ff46d1655.jpg", "http://yanxuan.nosdn.127.net/20c5aa027f6b334b35608ba79d17d7a9.jpg", "http://yanxuan.nosdn.127.net/237fbed2a3cebdac75a3d1e7ab86a991.jpg", "http://yanxuan.nosdn.127.net/8717de67a744aba875fd4da70975d37e.jpg", "http://yanxuan.nosdn.127.net/d67939d97bb9626ee01c0a2ea7671cee.jpg", "http://yanxuan.nosdn.127.net/65ada7e5ce24e881ac368baac94a7476.jpg", "http://yanxuan.nosdn.127.net/c235c5ba95267fb82537b04110befc17.jpg", "http://yanxuan.nosdn.127.net/f4a3a8bd637db39e3c11b1b48da6daf6.jpg", "http://yanxuan.nosdn.127.net/e947b6d8f0327dce5a2203616c05b2ec.jpg", "http://yanxuan.nosdn.127.net/a25ebca99d24ac9e6438043f019ae3bd.jpg", "http://yanxuan.nosdn.127.net/5ddc7422237718f9daf48eb2d8c32aa1.jpg", "http://yanxuan.nosdn.127.net/080d303c5de0fe3bcda5c02867b2c05a.jpg", "http://yanxuan.nosdn.127.net/c5a33ebdb06cbc045b09a6cb605192f3.jpg", "http://yanxuan.nosdn.127.net/7d32c4030ecf52adba6ce529f3f757df.jpg", "http://yanxuan.nosdn.127.net/01db4ba287518354e71a68256ab98edd.jpg", "http://yanxuan.nosdn.127.net/b8b42ba01fe0dd0b85abbd850ba0e7c7.jpg", "http://yanxuan.nosdn.127.net/e6eb9b195a2ecbb40257649cb57e383a.jpg", "http://yanxuan.nosdn.127.net/ae6ff15276db47d54aaa446bbd84ae8a.jpg", "http://yanxuan.nosdn.127.net/1a74560232d181ec205d497c1e17017f.jpg", "http://yanxuan.nosdn.127.net/e1be11aa6d73e998d810369877a7ef2e.jpg", "http://yanxuan.nosdn.127.net/e518a5f5af7f2adab1a40a05d209c1d3.jpg", "http://yanxuan.nosdn.127.net/0268cbb25037de928f5cbd3416d5a38c.jpg", "http://yanxuan.nosdn.127.net/94001e3637ed81a14d35f427ecdc97dc.jpg", "http://yanxuan.nosdn.127.net/e5d0a9b838dc5954eb11fe9e461dc88d.jpg", "http://yanxuan.nosdn.127.net/fd15236a198c07cce9b6a477c627dbcf.jpg", "http://yanxuan.nosdn.127.net/31f9173a25b8fad02533bdb6d51536d7.jpg", "http://yanxuan.nosdn.127.net/97186245c2eb51a658498983854b0d56.jpg", "http://yanxuan.nosdn.127.net/f8ddb27ea710b2a2748452a4bf25dc9a.jpg", "http://yanxuan.nosdn.127.net/82bcdc3872a87ff874c41bc4e9e8d7db.jpg", "http://yanxuan.nosdn.127.net/2d733c2ae285cbb0a10d1edfe1f55e3e.jpg", "http://yanxuan.nosdn.127.net/179adbb84b8e340bf14dd3ea26a97b42.jpg", "http://yanxuan.nosdn.127.net/296e19b0b27204d18cd135eba6690fe8.jpg", "http://yanxuan.nosdn.127.net/08be14d5dfe0bc491278f5c100ae5399.jpg", "http://yanxuan.nosdn.127.net/dcf4cf64bc2ec54ba929093628ff151b.jpg", "http://yanxuan.nosdn.127.net/357f5fece7a0a8870f030cd98529e5bf.jpg", "http://yanxuan.nosdn.127.net/b5c2e8fb1556dff37827e4e500c954f0.jpg", "http://yanxuan.nosdn.127.net/8b4ad00cf3b2434773ea40b287f9c80b.jpg", "http://yanxuan.nosdn.127.net/a1aca6695377360f649785164957687b.jpg", "http://yanxuan.nosdn.127.net/ea475292fa6e2046de617173ab093b8d.jpg", "http://yanxuan.nosdn.127.net/4bd1145e10b58228dbdf328841c5d2a3.jpg", "http://yanxuan.nosdn.127.net/fe828e38497c67c540b9ec86002bd751.jpg", "http://yanxuan.nosdn.127.net/619e96a04fb60a4af2ec8e1f20e1fce6.jpg", "http://yanxuan.nosdn.127.net/02d6a7ee8e6387ed7aa51bdf777f9ee0.jpg", "http://yanxuan.nosdn.127.net/c38eb91f095286be2fed2c58492ba975.jpg", "http://yanxuan.nosdn.127.net/839c131a54bc40d18ec26ee5dd790d5f.jpg", "http://yanxuan.nosdn.127.net/0277b519b6c498c81c1af9b5a104e88a.jpg", "http://yanxuan.nosdn.127.net/607b8bae046f552de36254fea3144104.jpg", "http://yanxuan.nosdn.127.net/e92bfadb2a1b65388a7ad55d08b0c068.jpg", "http://yanxuan.nosdn.127.net/6df5e2e155ff4a908da7bbe8ba441a3d.jpg", "http://yanxuan.nosdn.127.net/d52cccf33bd1c7f4bc58a6f0ac14b746.jpg"],
		"inventory": [187, 632, 590, 543],
		"information": [{
			"attrName": "填充物重量",
			"attrValue": "500g"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22843-2009"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}],
		"label": "",
		"manufacture": "",
		"sale": 22,
		"date": "1500012442331",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1043005,
		"price": 59,
		"topName": "日式记忆绵坐垫",
		"subName": "活性炭记忆绵，缓解压力",
		"shortDescription": ["D90密", "加强支撑", "6秒回弹", "舒适缓压", "加活性炭", "锁水清凉"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fd568924656655d6f79d09da60c5dfe1.jpg", "http://yanxuan.nosdn.127.net/ae225e47f7874f5f0bb99b0b2fc70469.jpg", "http://yanxuan.nosdn.127.net/c26a6e0fc20e7c012a11fdba9afd62bf.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2a95b16f5b147cab4845641bee738a2e.png", "http://yanxuan.nosdn.127.net/e48d2eb849c4426894fad347e9b8691a.jpg", "http://yanxuan.nosdn.127.net/b19866dcc87474faed9e1dbc46f65bcc.jpg", "http://yanxuan.nosdn.127.net/1a63d1f3785071edcc40e98440950f7c.jpg", "http://yanxuan.nosdn.127.net/ba5890ed54ea33c387e9773ab3f5523c.jpg"],
		"types": ["方形坐垫", "圆形坐垫", "方形坐垫套(仅外套)", "圆形坐垫套(仅外套)"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/7239e35762ea2937549f53f4482124fa.jpg", "http://yanxuan.nosdn.127.net/c23c022ad6737aa351140d7ce97a4a43.jpg", "http://yanxuan.nosdn.127.net/b6fe3f499101077e6ee595a9145172c0.jpg", "http://yanxuan.nosdn.127.net/0fdc843045b99838abd8ce3fcbec2890.jpg", "http://yanxuan.nosdn.127.net/14d3e1c384f5bc66e85b4dfff61f49ab.jpg", "http://yanxuan.nosdn.127.net/14eed3d4524fe441a54b604f37cfd299.jpg", "http://yanxuan.nosdn.127.net/b1b3a30c34e6fecf8105bf430e6d547f.jpg", "http://yanxuan.nosdn.127.net/cb5411b150ce5a69c0f88ef3af918061.jpg", "http://yanxuan.nosdn.127.net/aebe8243acfa28a42d300d985c6e7036.jpg", "http://yanxuan.nosdn.127.net/1371f124f86fc38c195f49e4bf26ddc5.jpg", "http://yanxuan.nosdn.127.net/bd05471ebf5529464c85eace3e7c5c7a.jpg", "http://yanxuan.nosdn.127.net/9c607e963758e4ad3f3bc749098fdcec.jpg", "http://yanxuan.nosdn.127.net/dd472e779f1748937d269b87464722b5.jpg", "http://yanxuan.nosdn.127.net/d19ec3e68922cdae4da8c0ab174bf5eb.jpg", "http://yanxuan.nosdn.127.net/44003fe38ab817003cb441ed5e518c41.jpg", "http://yanxuan.nosdn.127.net/5f3a7c45c70930950e60ddac979953d5.jpg", "http://yanxuan.nosdn.127.net/77fc74a83c328dddf610a045277f094e.jpg", "http://yanxuan.nosdn.127.net/14056056c8e8cf3f77a479de696d18ea.jpg", "http://yanxuan.nosdn.127.net/3ec2764b8b29c67af332cc1fde825b70.jpg", "http://yanxuan.nosdn.127.net/494504fdb2d59d924de16cf79629dee9.jpg", "http://yanxuan.nosdn.127.net/ddf59afdada25b6b7aad72aaf8f0af20.jpg", "http://yanxuan.nosdn.127.net/1b8ad80c319aac920f3409bcd4376e17.jpg", "http://yanxuan.nosdn.127.net/8571525a4f280d09926a1b388d06fe8d.jpg", "http://yanxuan.nosdn.127.net/23c8bb2834f9ec05adb69e4df8354224.jpg", "http://yanxuan.nosdn.127.net/b9c44aea67b0392547fdb3ba7f24c5fc.jpg", "http://yanxuan.nosdn.127.net/f5045464902396b85ea12724ed962d7a.jpg", "http://yanxuan.nosdn.127.net/f484b21d07738839d1e199d8ba1031f1.jpg", "http://yanxuan.nosdn.127.net/21718c637256576c66876aa30653e29d.jpg"],
		"inventory": [98, 283, 541, 70],
		"information": [{
			"attrName": "坐垫内芯材料",
			"attrValue": "聚氨酯"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T22843-2009"
		}, {
			"attrName": "方形尺寸",
			"attrValue": "36*36*3cm"
		}, {
			"attrName": "圆形尺寸",
			"attrValue": "Φ34*3cm"
		}, {
			"attrName": "坐垫套面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "1,水洗时请将外套取下，用冷水洗涤后置于阴凉处阴干或烘干。不能同褪色衣物同洗，以防沾污、沾色。2,外套洗后稍有缩水是正常现象，因是弹性织物，仅需四周拉一下长度即可。3,记忆棉不可水洗，请经常保持产品干燥，每隔一段时间用吸尘器清理内芯落尘或用手轻轻拍打内芯，放在通风阴凉处适当晾晒即可。。若不慎打湿，立即用干毛巾将水分吸干，置于通风处阴干或用冷吹风吹干即可。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 320,
		"date": "1500012446783",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1134030,
		"price": 46,
		"topName": "简约知性记忆绵坐垫",
		"subName": "慢回弹海绵，时尚设计。",
		"shortDescription": ["记忆绵芯", "承托散压", "弹性垫套", "贴合透气", "活性染料", "健康牢固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/af6f630d9707ecbbe552d546cf6cd514.jpg", "http://yanxuan.nosdn.127.net/0192200fb97138550796c9007010b983.jpg", "http://yanxuan.nosdn.127.net/b256e6027ef21fe4b83cab148359fa45.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png", "http://yanxuan.nosdn.127.net/97c6d4c7e80855966f0d38392b42a570.jpg", "http://yanxuan.nosdn.127.net/35538160e3b41ae559031fa8c82fcebb.jpg", "http://yanxuan.nosdn.127.net/f2107c529bcc5c51bc3ce2b5cc9948db.jpg", "http://yanxuan.nosdn.127.net/9b4ee214032f7707c15943a1f1dfc881.jpg"],
		"types": ["藏蓝方形", "灰色方形", "粉色方形", "藏蓝圆形", "灰色圆形", "粉色圆形"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/3b31b3c57a7d7f42b13711bd1438d555.jpg", "http://yanxuan.nosdn.127.net/e92d9bad2a0339a81b47835f5530a358.jpg", "http://yanxuan.nosdn.127.net/edabc81fa6c7e66fe1698949f3b2b9f4.jpg", "http://yanxuan.nosdn.127.net/3444f640ec6ff6d6a8bcc3ce0f28848f.jpg", "http://yanxuan.nosdn.127.net/317ebb6f899631d1ed52759c14170a39.jpg", "http://yanxuan.nosdn.127.net/8f17af0ae3d56d482cec4105d390730a.jpg", "http://yanxuan.nosdn.127.net/345a9aba507ca86b34c37c29956eeb83.jpg", "http://yanxuan.nosdn.127.net/38b5c26064c4ea16ce3380bd69d2a671.jpg", "http://yanxuan.nosdn.127.net/eabf8d6393d65cbd9e2e87c75dfcc066.jpg", "http://yanxuan.nosdn.127.net/a703c316292e2c4c0b9d6551b25f1856.jpg", "http://yanxuan.nosdn.127.net/734765425e21e073844c1c9e062dc35d.jpg", "http://yanxuan.nosdn.127.net/cc24974d903f1d0e109482954f1da8e8.jpg", "http://yanxuan.nosdn.127.net/da57cdb5646fbff0cf8007f60304c30f.jpg", "http://yanxuan.nosdn.127.net/ddc76ceaeddfd7b527df40e01bf7877b.jpg", "http://yanxuan.nosdn.127.net/c158fdad4e3c80f90b02cf930b661bb0.jpg", "http://yanxuan.nosdn.127.net/b9682e656087dfa53c0f8365a0c300da.jpg", "http://yanxuan.nosdn.127.net/567cd1355b86120b192d36b4710552a0.jpg", "http://yanxuan.nosdn.127.net/327629df66c47aeba0cb92072cf94471.jpg", "http://yanxuan.nosdn.127.net/31199ec47d032c282762d8d49087c5af.jpg", "http://yanxuan.nosdn.127.net/169746e1e8293452b58c184db111d98b.jpg", "http://yanxuan.nosdn.127.net/a2a0cd32321cd198d67ea99fe5590120.jpg", "http://yanxuan.nosdn.127.net/4657e1914acce0c476d756f72e40ef97.jpg", "http://yanxuan.nosdn.127.net/9cb62e36a78ac61b587e6a9b5f9458a9.jpg", "http://yanxuan.nosdn.127.net/1b482df93b0a173be4a7bf6c2dabd543.jpg", "http://yanxuan.nosdn.127.net/533e784b613baea6c7d18ea81ce3b535.jpg", "http://yanxuan.nosdn.127.net/15772709fdda505c1a3a6b0e6453cce8.jpg", "http://yanxuan.nosdn.127.net/3b8ffb1a51ec50d46707513e6d6cb420.jpg", "http://yanxuan.nosdn.127.net/5cf3463a41c5fac921cdb11c3b0c8990.jpg", "http://yanxuan.nosdn.127.net/2565c92fa398dd47a1458be3e9009c9b.jpg", "http://yanxuan.nosdn.127.net/a4960bb2a74c1e22d82626ba7e33d33d.jpg", "http://yanxuan.nosdn.127.net/9c13f2fb5d0daac9ef6fab890c866dc4.jpg", "http://yanxuan.nosdn.127.net/749704a3f974d419e8b59a32de540784.jpg", "http://yanxuan.nosdn.127.net/d1c4d8d91866700a5e8c1cd33ea75b15.jpg", "http://yanxuan.nosdn.127.net/c55b8dc599470be31aa0218438a36528.jpg", "http://yanxuan.nosdn.127.net/80c3a1e268905658a576eccd85a65f37.jpg", "http://yanxuan.nosdn.127.net/6c597a8dbecc1e3de31e9b8e5d420586.jpg", "http://yanxuan.nosdn.127.net/320ec6f1fcbb288e5676832dceff16aa.jpg", "http://yanxuan.nosdn.127.net/8fc9119b2c7986bd575329d3a95abe9e.jpg", "http://yanxuan.nosdn.127.net/438a62f5bb789a6fa70b8ed5578cd7e1.jpg", "http://yanxuan.nosdn.127.net/1fe137a665f79a67359a9748de200ca6.jpg", "http://yanxuan.nosdn.127.net/02ad092fac2cf5da935078f01afe3ff3.jpg", "http://yanxuan.nosdn.127.net/d390285b49a6f4eb5ec9a460f77bce70.jpg", "http://yanxuan.nosdn.127.net/469c7bc6e70c8d3db7639dc3d6949356.jpg", "http://yanxuan.nosdn.127.net/323b6604e88a5c748b4f7cd00ca84595.jpg", "http://yanxuan.nosdn.127.net/4151a8c4cae3b9998c95ae0bd9528e93.jpg", "http://yanxuan.nosdn.127.net/c968e429b7a1f21ffa6281c76fd77c32.jpg"],
		"inventory": [152, 709, 383, 839, 256, 722],
		"information": [{
			"attrName": "填充物重量",
			"attrValue": "方形：185g圆形155g"
		}, {
			"attrName": "面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}],
		"label": "",
		"manufacture": "",
		"sale": 786,
		"date": "1500012450054",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1134032,
		"price": 49,
		"topName": "趣味粉彩系列记忆绵坐垫",
		"subName": "慢回弹海绵的呵护，萌趣添彩。",
		"shortDescription": ["记忆绵芯", "承托回弹", "弹性垫套", "贴合舒爽", "活性染料", "健康色彩"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/45802e9bafbe550ead96c7c4554d7549.png", "http://yanxuan.nosdn.127.net/cb8ada13312b097166394b8b6fa68226.png", "http://yanxuan.nosdn.127.net/f61f873999e3e19094df9bf96364702c.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/8b30eeb17c831eba08b97bdcb4c46a8e.png", "http://yanxuan.nosdn.127.net/fd102ddf676a971a6c4ff7719a46d670.jpg", "http://yanxuan.nosdn.127.net/377aed2b4b9364e870dce5c8c02a948f.jpg", "http://yanxuan.nosdn.127.net/a5d87a9f6f1f73256fd1e74b9c653abf.jpg", "http://yanxuan.nosdn.127.net/10906fa2f47f3d0d208d7c0cc9f387a4.jpg"],
		"types": ["绿灰方形", "粉灰方形", "黄灰圆形", "粉灰圆形"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/70f0494eae3fc21ce6bf2e8e1e9f1271.jpg", "http://yanxuan.nosdn.127.net/2bf48508548ea07127c6f39ba331df9a.jpg", "http://yanxuan.nosdn.127.net/694681d321ae1ec873229888e44e4d6c.jpg", "http://yanxuan.nosdn.127.net/d0d2bffc7debb53895cacf4a0d962a9e.jpg", "http://yanxuan.nosdn.127.net/aa764cbea6bbb29310691c2f05ab222d.jpg", "http://yanxuan.nosdn.127.net/0756866546cac1f65958caab62f87932.jpg", "http://yanxuan.nosdn.127.net/c34eb09160ce13b319ecffd64cba1238.jpg", "http://yanxuan.nosdn.127.net/b699291f4b4800755795c11c2b481be2.jpg", "http://yanxuan.nosdn.127.net/47571422e757585635559cf4a5b0c5dd.jpg", "http://yanxuan.nosdn.127.net/f024818f92f4b4c75df27afd08f02a3f.jpg", "http://yanxuan.nosdn.127.net/ba0a834b2c1c9cdd77daa837ea9394ee.jpg", "http://yanxuan.nosdn.127.net/40a8bfbeb8855fc958eae88867e6031a.jpg", "http://yanxuan.nosdn.127.net/35ced1039e8f005801df86d5b0177ebd.jpg", "http://yanxuan.nosdn.127.net/91dfa401e174ee50926f1947dd8ecf74.jpg", "http://yanxuan.nosdn.127.net/131eec7050d27dcf83ea0d2bf0f4b454.jpg", "http://yanxuan.nosdn.127.net/7f9744a7b6009814068deeca3179567e.jpg", "http://yanxuan.nosdn.127.net/fd5a58c083bc59508660d9880557c3e1.jpg", "http://yanxuan.nosdn.127.net/cd4c3c0ae07d7c2f307815ff5fa4ae92.jpg", "http://yanxuan.nosdn.127.net/70afb72ab4780c0780a4c095575999e9.jpg", "http://yanxuan.nosdn.127.net/f351c68827976537a63d2dceebc80476.jpg", "http://yanxuan.nosdn.127.net/d20355e7bb7d78e0d769500941fdf82d.jpg", "http://yanxuan.nosdn.127.net/ee88abd6e61655439d916e3350f57b50.jpg", "http://yanxuan.nosdn.127.net/9c741493b2084a95057301935d7fc36a.jpg", "http://yanxuan.nosdn.127.net/488ac50840bc9fae38a0b854179850c5.jpg", "http://yanxuan.nosdn.127.net/b040dd56df766ae11aeeb4c34137fc2f.jpg", "http://yanxuan.nosdn.127.net/3c037ff9ff39292aca79be34140499d3.jpg", "http://yanxuan.nosdn.127.net/fad286a43f1f91f8f165a399e4fd38a2.jpg", "http://yanxuan.nosdn.127.net/3a6a9cc5b0d793c6966248d1085de195.jpg", "http://yanxuan.nosdn.127.net/0830d0db98c2da3a9bb27514f492a34d.jpg", "http://yanxuan.nosdn.127.net/4f99e9a58182f7368f393764eb2c7952.jpg", "http://yanxuan.nosdn.127.net/2b01e59a5d413f09dd6cc0936d29b4a6.jpg", "http://yanxuan.nosdn.127.net/e74f5aad16c9a93b9ed36891e8044402.jpg", "http://yanxuan.nosdn.127.net/2e920f15564f23e8192998c06a19f665.jpg", "http://yanxuan.nosdn.127.net/0b035128bb4bce703d3c2b5dcb6b82e9.jpg", "http://yanxuan.nosdn.127.net/c3533231136a312ca9621496f41f9d3b.jpg", "http://yanxuan.nosdn.127.net/dcdb9ac8b51089185f938e4bcdaa6dee.jpg", "http://yanxuan.nosdn.127.net/0a20f4a7284b5efeb5baa2f418ab2b83.jpg", "http://yanxuan.nosdn.127.net/b3bec904b617d923786c187363885dd4.jpg", "http://yanxuan.nosdn.127.net/28dc586ccb0a8f34cf6d3ab6b22e2fef.jpg", "http://yanxuan.nosdn.127.net/29da6283333fcb06c4fc15bdd9a0de64.jpg", "http://yanxuan.nosdn.127.net/0b97ff8115a92e9e5e3ed50c4c4f7b31.jpg", "http://yanxuan.nosdn.127.net/0e9e9af90b35d01351d11ca14763a35e.jpg", "http://yanxuan.nosdn.127.net/28897227122903f01b48826aa3494259.jpg", "http://yanxuan.nosdn.127.net/ee8a925a76919d826f3c347b6de80dd7.jpg", "http://yanxuan.nosdn.127.net/d004e000684d4f3dc1d251bf386065c9.jpg", "http://yanxuan.nosdn.127.net/8448c1cbd455eaea0aa5b0bae9d108b9.jpg", "http://yanxuan.nosdn.127.net/2d1396da25d7a7830deecbe228343f0f.jpg", "http://yanxuan.nosdn.127.net/cd3010ed87d43433e4abdb106181ee0a.jpg", "http://yanxuan.nosdn.127.net/1dd22c7700948637bc48a874536ba111.jpg"],
		"inventory": [766, 775, 143, 379],
		"information": [{
			"attrName": "填充物",
			"attrValue": "聚氨酯"
		}, {
			"attrName": "填充物重量",
			"attrValue": "方形：185g圆形：155g"
		}, {
			"attrName": "面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB18401-2010 B类"
		}],
		"label": "",
		"manufacture": "",
		"sale": 845,
		"date": "1500012454216",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1115052,
		"price": 86,
		"topName": "日式和风蔺草蒲团坐垫",
		"subName": "龙眉蔺草编织 日式茶禅风",
		"shortDescription": ["海绵组织", "吸湿微弹", "加厚垫体", "轻便不硌", "天然蔺草", "温润凉感"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ae2bcdf506053cf4794674121db74503.jpg", "http://yanxuan.nosdn.127.net/e864db007df06c5e28435ca8d40888f8.jpg", "http://yanxuan.nosdn.127.net/fef3aca69b505270fe5e67e38c82172c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/39dea35a3ea2361e4b054ee2f421af53.png", "http://yanxuan.nosdn.127.net/f6ebbc20006a323db3aea566eced761c.jpg", "http://yanxuan.nosdn.127.net/82f2e4d1e138b3d336570de8f2c5ba1c.jpg", "http://yanxuan.nosdn.127.net/feff39d9bf8340aa3ecddc8ae23d5167.jpg", "http://yanxuan.nosdn.127.net/cc0ccf5d41022439f0d8eb6a4830b094.jpg"],
		"types": ["50*50*5cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/c5c39ed4982045a32efde6f8e4b3d327.jpg", "http://yanxuan.nosdn.127.net/385b1a317b993c403f5b1532bf714592.jpg", "http://yanxuan.nosdn.127.net/97c44d5c2411a2b8bb39ee34957783bc.jpg", "http://yanxuan.nosdn.127.net/489a326e13a5bb3ce44a40fc71ccbc40.jpg", "http://yanxuan.nosdn.127.net/a2d6eb8e6ba1de0db4bdc1d4ef8d124d.jpg", "http://yanxuan.nosdn.127.net/5e723ef50260b98666955796f6dab4c4.jpg", "http://yanxuan.nosdn.127.net/3cd9585a68c6b746f509408c2c16783a.jpg", "http://yanxuan.nosdn.127.net/582bdb6e01ad3b8f2d76d0124dfdcf8e.jpg", "http://yanxuan.nosdn.127.net/8dd281a87afd1ae88dc05e1db35142a4.jpg", "http://yanxuan.nosdn.127.net/73a608d337ac09b75b4bd14d8170b6d6.jpg", "http://yanxuan.nosdn.127.net/fdc10bae153b0dda81dd53b57c2b9e10.jpg", "http://yanxuan.nosdn.127.net/cccdb8b1831f0b70306a4b4eed8859db.jpg", "http://yanxuan.nosdn.127.net/5baf78b4175b0fdb0132b5d83bb7e279.jpg", "http://yanxuan.nosdn.127.net/e613832e2b3e0cfcad1c42e6cf3d6d3e.jpg", "http://yanxuan.nosdn.127.net/de9c7cedfd555ceb5adfed1c0c96b9b4.jpg", "http://yanxuan.nosdn.127.net/61a0ecae290671c15ac857e0f5b8fb5f.jpg", "http://yanxuan.nosdn.127.net/c8f15359576d133d55457f69c05aeab8.jpg", "http://yanxuan.nosdn.127.net/aae2ff89028e265b06656aa63a94c58e.jpg", "http://yanxuan.nosdn.127.net/dbecb94e2a020007505cad42c4e8553a.jpg", "http://yanxuan.nosdn.127.net/4adb8529010d4348b90cdc445f37d241.jpg", "http://yanxuan.nosdn.127.net/953207acdb90210c681deb18b59fdadb.jpg", "http://yanxuan.nosdn.127.net/fa5b73dea7f39614c01de4ee8acdc216.jpg", "http://yanxuan.nosdn.127.net/2b7ccd3a548618f2fadb20aee9ab9531.jpg", "http://yanxuan.nosdn.127.net/ecde950588789c70df2222f1ded0f579.jpg", "http://yanxuan.nosdn.127.net/597505ee5976bf7f68646ef2321c5b39.jpg", "http://yanxuan.nosdn.127.net/7f317d788383403a224a191452183b9f.jpg", "http://yanxuan.nosdn.127.net/9ca568894e24f4aa5d6eaf4174667ffa.jpg", "http://yanxuan.nosdn.127.net/bdbf86365486d602bc2c2b1aa4bd8781.jpg", "http://yanxuan.nosdn.127.net/aa9db3d211c93fa9d2914754464e679c.jpg", "http://yanxuan.nosdn.127.net/58e5cd852682d404200f57471e883485.jpg", "http://yanxuan.nosdn.127.net/14cc6189a160dcf8f0d2f0d0bd0b7f27.jpg", "http://yanxuan.nosdn.127.net/c49b33afea38804de07fc9a6bb80dda9.jpg", "http://yanxuan.nosdn.127.net/8cf4bc3c1b476cba2ec6290b02c698be.jpg", "http://yanxuan.nosdn.127.net/c3d5eb1291c79204e2e23dede15b8cac.jpg", "http://yanxuan.nosdn.127.net/38791f147ef4ee52bfee5e240f2a5f52.jpg", "http://yanxuan.nosdn.127.net/9756648996576857cabe3740da2edaa6.jpg", "http://yanxuan.nosdn.127.net/f4247a5ccb0f39be52a8c99cb15f92f7.jpg", "http://yanxuan.nosdn.127.net/40d0ceae7b2300246501b72540727505.jpg", "http://yanxuan.nosdn.127.net/14603e5d6e54d7e1abaae04ea713de08.jpg", "http://yanxuan.nosdn.127.net/06d66618b49e447645e3650dc6cb11ca.jpg", "http://yanxuan.nosdn.127.net/5ef12ad1adb0d16743a0054489846a13.jpg", "http://yanxuan.nosdn.127.net/99d648a6665d2a25f790a469c464d34b.jpg", "http://yanxuan.nosdn.127.net/76e121103fb90fdf267eb204af59c0d4.jpg", "http://yanxuan.nosdn.127.net/9d92a1874c26534262643772dbdef1d2.jpg", "http://yanxuan.nosdn.127.net/9cb04ad36ddc0b45066f8233ab9cf888.jpg", "http://yanxuan.nosdn.127.net/cdb4947e9c035fea2bb271c9f0b43d2f.jpg", "http://yanxuan.nosdn.127.net/55c1446b40d52e2da86f92fccc47ea2b.jpg", "http://yanxuan.nosdn.127.net/339c0d5acef5c3029fd3c0d500883ce5.jpg", "http://yanxuan.nosdn.127.net/11dc59302185026721eaa23509c333ee.jpg", "http://yanxuan.nosdn.127.net/81ed48a7099d3bfa9860fcdd4e546b60.jpg", "http://yanxuan.nosdn.127.net/c615061f6c675ba67897e03e1f9cee17.jpg", "http://yanxuan.nosdn.127.net/e30a5c3df143363971c97e75f254818d.jpg", "http://yanxuan.nosdn.127.net/4b33a8b54250cf02206d1d9fa5674725.jpg", "http://yanxuan.nosdn.127.net/cf292ce53420b314368494c36b189ce1.jpg"],
		"inventory": [974],
		"information": [{
			"attrName": "材质",
			"attrValue": "席面：蔺草/ 包边：65%聚酯纤维 35%棉 / 内芯：EPE"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 2934-2008"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 324,
		"date": "1500012459118",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1115051,
		"price": 39,
		"topName": "日式茶禅道蔺草坐垫",
		"subName": "柔滑凉爽坐垫 日式居家搭配",
		"shortDescription": ["龙眉蔺草", "吸湿爽滑", "珍珠棉芯", "轻便回弹", "密经编织", "平滑密整"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/3a4504a1558ca2f1542f336c60dd831f.jpg", "http://yanxuan.nosdn.127.net/960a4b177faba25391a21b404911576f.jpg", "http://yanxuan.nosdn.127.net/039aeb5d212b61df83b87413b9a4e582.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/79b800b5346d1f331219d2604ef63a8f.png", "http://yanxuan.nosdn.127.net/0b164e9956e5fb2af2ef3d294f0bad1e.jpg", "http://yanxuan.nosdn.127.net/99042919908f3b8c4d32767aa0da1b29.jpg", "http://yanxuan.nosdn.127.net/f4885dbe7f86f6f59800e87019fe9903.jpg", "http://yanxuan.nosdn.127.net/ddb3698b305d249d069b3e53418ff4a1.jpg"],
		"types": ["42*44cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/b27b69b249ef535bc8004e97249917aa.jpg", "http://yanxuan.nosdn.127.net/a1cc2cd0e54bcbace6c9b3e76674ffb3.jpg", "http://yanxuan.nosdn.127.net/c6af88c5914b8e4549dab9358bdff76e.jpg", "http://yanxuan.nosdn.127.net/5682d40023f0f7826d36a61a70a749f3.jpg", "http://yanxuan.nosdn.127.net/ebd5f387e732dbb3bbdfd2e8f59766ec.jpg", "http://yanxuan.nosdn.127.net/4edda720ec5d2bcb6e4c80a0ae3e3525.jpg", "http://yanxuan.nosdn.127.net/976eafb9055cb9bf1d3938d21849f615.jpg", "http://yanxuan.nosdn.127.net/eecffe4155d8a7b62e9865dca2dd39b3.jpg", "http://yanxuan.nosdn.127.net/f8d35c60f93599a7a94f70afdf5423e0.jpg", "http://yanxuan.nosdn.127.net/24717378fcf453628f78510fdb9984e5.jpg", "http://yanxuan.nosdn.127.net/817a156d9b5cbcf0f557e1cf8c756cf0.jpg", "http://yanxuan.nosdn.127.net/affd209a44c2fd02ac2116f85c3e47c1.jpg", "http://yanxuan.nosdn.127.net/d8393a8cc1296ffa3599d9aeab3b380a.jpg", "http://yanxuan.nosdn.127.net/6adc70d6dd515b93aff5e596cfd45f67.jpg", "http://yanxuan.nosdn.127.net/577d3ba1a98f8e3a4f01d1c2ae9fe8ee.jpg", "http://yanxuan.nosdn.127.net/9d15e8c9e6f5df2fca535a4e7cc31394.jpg", "http://yanxuan.nosdn.127.net/94bbf093f4cc12c3b0f3c1aa76af0989.jpg", "http://yanxuan.nosdn.127.net/cb130ca01db70d559a11a7d479f3d61c.jpg", "http://yanxuan.nosdn.127.net/91667a18080728810ea12aed7783d78d.jpg", "http://yanxuan.nosdn.127.net/b036f6683297ed09fd24cfafc3c01e90.jpg", "http://yanxuan.nosdn.127.net/bb6ffd2784ce50b68ff6dafa25babb8e.jpg", "http://yanxuan.nosdn.127.net/3bb53e3e81d4ca2446a7d9b23aed90bb.jpg", "http://yanxuan.nosdn.127.net/666438b3265e9983d99f1ab8d81ada24.jpg", "http://yanxuan.nosdn.127.net/6279d68ffc34afd6f3e1e73a84791fac.jpg", "http://yanxuan.nosdn.127.net/f5198c9298da25964ca090d1fd843a98.jpg", "http://yanxuan.nosdn.127.net/9b2c0ea59217b95abc775df4aa3b3489.jpg", "http://yanxuan.nosdn.127.net/6facdb0e80833dcddf91d19ddbcd400d.jpg", "http://yanxuan.nosdn.127.net/ef637f6c2603e690b2811b934af7f60d.jpg", "http://yanxuan.nosdn.127.net/3c704676856636c0372ce771caa08d07.jpg", "http://yanxuan.nosdn.127.net/00b825302de49657e1a76e59e63acd64.jpg", "http://yanxuan.nosdn.127.net/2b6cefecd0b37c7df0e6033792d426a2.jpg", "http://yanxuan.nosdn.127.net/c40f4f3d41a29dea99f8e18f38429b83.jpg", "http://yanxuan.nosdn.127.net/47f791e898a04b4c62f1f91f33d10c4e.jpg", "http://yanxuan.nosdn.127.net/9f85ff3be211aad2b09551e812e3631a.jpg", "http://yanxuan.nosdn.127.net/3093d852e052865a8396d4c8ba002fed.jpg", "http://yanxuan.nosdn.127.net/aac236495bf3f713d68889135d221f85.jpg", "http://yanxuan.nosdn.127.net/d4f27afbd3452b35206d7f865b1e8271.jpg", "http://yanxuan.nosdn.127.net/8135074b5474b7c1cfd1bcdbc4e9d5a3.jpg", "http://yanxuan.nosdn.127.net/2e0170f9ea163d7bfe44097ebca9032c.jpg", "http://yanxuan.nosdn.127.net/8e40b745e3fc493edbab566bf148727d.jpg"],
		"inventory": [532],
		"information": [{
			"attrName": "材质",
			"attrValue": "席面：蔺草/ 包边：65%聚酯纤维 35% 棉/ 内芯：EPE"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 2934-2008"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 726,
		"date": "1500012462128",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1130037,
		"price": 49,
		"topName": "帆布丝羽绒多用坐垫",
		"subName": "柔软蓬松，透气防螨。",
		"shortDescription": ["厚实填充", "回弹蓬软", "帆布面料", "耐磨透气", "圆圈固定", "牢固结实"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1de5dbf8d636eaff1feb93d508854eaa.jpg", "http://yanxuan.nosdn.127.net/930437439b4efd2d8714b70a8a601e42.jpg", "http://yanxuan.nosdn.127.net/a6ff6b8b8cd14269e0bb16eb4639f78e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/19ecd7c6f6f31219cf75117238d95139.png", "http://yanxuan.nosdn.127.net/b0ba668ae100729eb7e64926d7770780.jpg", "http://yanxuan.nosdn.127.net/b4f245f54e4e98f064e7fefac6a16642.jpg", "http://yanxuan.nosdn.127.net/f8cb009f605f1d0425627452ec8c1fd8.jpg", "http://yanxuan.nosdn.127.net/de3bf0eef433d216b782b9cb0830e66e.jpg"],
		"types": ["米白", "深褐"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/96eb609f4f459ab9c502eca7d6e7e204.jpg", "http://yanxuan.nosdn.127.net/a86dcf95f3a56db6b7f99f35585dbf2d.jpg", "http://yanxuan.nosdn.127.net/bced9d39bcb740a4655ce725f4823e96.jpg", "http://yanxuan.nosdn.127.net/11213e448a23292458adc934a643c076.jpg", "http://yanxuan.nosdn.127.net/9116d858fd59f1ed32fc8a692dfc3fed.jpg", "http://yanxuan.nosdn.127.net/8b5982e9a43ccaa724f397c9e777b026.jpg", "http://yanxuan.nosdn.127.net/e4397bee1cf9589eaaf06b8fe9d0a778.jpg", "http://yanxuan.nosdn.127.net/740affd3cef0ef40378c2cb265322f15.jpg", "http://yanxuan.nosdn.127.net/6aeacc205ef12e2a475eb7a8e8d1eedc.jpg", "http://yanxuan.nosdn.127.net/119709a17d08f2c1c48d95d24b34ca3c.jpg", "http://yanxuan.nosdn.127.net/8332210d4b81d04f42612fc097db259a.jpg", "http://yanxuan.nosdn.127.net/be1775926acb0e26b6012cba7893e979.jpg", "http://yanxuan.nosdn.127.net/6c6463b2f53c89273f1f79b22dd9e399.jpg", "http://yanxuan.nosdn.127.net/38ad3258ebf23df5164854fe403d1ecf.jpg", "http://yanxuan.nosdn.127.net/1dc5f238dcb73c249f813233d81156c4.jpg", "http://yanxuan.nosdn.127.net/bb132e2e8a254b8cbc345900f6fe3c39.jpg", "http://yanxuan.nosdn.127.net/0603f40fefd14ee24e83102c5f09100a.jpg", "http://yanxuan.nosdn.127.net/45966f38135adc1280a667040d8e02c9.jpg", "http://yanxuan.nosdn.127.net/1064a54404b6c795eae261334697e050.jpg", "http://yanxuan.nosdn.127.net/8ef89417a81ac1893c95179585bf1140.jpg", "http://yanxuan.nosdn.127.net/c2cd2da4d75a63ada7c655e53c223a0e.jpg", "http://yanxuan.nosdn.127.net/e942519448a5de394885730e0e3e4694.jpg", "http://yanxuan.nosdn.127.net/d016a18c381916813c2eaf46c3f791c1.jpg", "http://yanxuan.nosdn.127.net/6935f94bc80c11c89c3f8a2aa02c4273.jpg", "http://yanxuan.nosdn.127.net/9dedb80199b09770b98fa46cd8a8752d.jpg", "http://yanxuan.nosdn.127.net/f447537304e43a44b1e75272d3334899.jpg", "http://yanxuan.nosdn.127.net/10d901511a3d5f03be68bd64dbadfe1d.jpg", "http://yanxuan.nosdn.127.net/7b03a90f7bb697a9bc6e0be9d9997b11.jpg", "http://yanxuan.nosdn.127.net/62b277f50e7cca075cd2565a4f2b4466.jpg", "http://yanxuan.nosdn.127.net/e304f8f1ea10792be9072d3c7a4a8359.jpg", "http://yanxuan.nosdn.127.net/5d7c39350bee7fdc8bdb78a27eb83a17.jpg", "http://yanxuan.nosdn.127.net/742927f31cadc641a7b9bb3fc5eebfe3.jpg", "http://yanxuan.nosdn.127.net/b2562d7d1a0fa4b9497e4ec719f08a8f.jpg", "http://yanxuan.nosdn.127.net/430442f4524e66347fbbf10aaf213a07.jpg", "http://yanxuan.nosdn.127.net/620ec1f6387fa84f5518ad2484ebaa91.jpg", "http://yanxuan.nosdn.127.net/455f215b9a402ed9c0c0972c0abddbb0.jpg", "http://yanxuan.nosdn.127.net/1def5c3403bdf5cd7e11b85354542452.jpg", "http://yanxuan.nosdn.127.net/97348238ae3c27a56ff46e1b6c3deb3b.jpg", "http://yanxuan.nosdn.127.net/3739461a5eb338a70e7d34a86ff26d1a.jpg", "http://yanxuan.nosdn.127.net/96fae2f2cc374d459c3969e7a7cc1a83.jpg", "http://yanxuan.nosdn.127.net/c1654fc509c8c77e9fe4c75ffc099f24.jpg", "http://yanxuan.nosdn.127.net/bf95ab8945e61c7180eba1e01721b15a.jpg", "http://yanxuan.nosdn.127.net/b054e088382a0cb32a529082c52745e1.jpg", "http://yanxuan.nosdn.127.net/53d517d1ca7532cde5cc74ad2a10dc17.jpg", "http://yanxuan.nosdn.127.net/6222e1fd9b42422e8454cc087a0e0358.jpg", "http://yanxuan.nosdn.127.net/f8995022af1826e846b7a143e7b8b325.jpg", "http://yanxuan.nosdn.127.net/3a12c940956234db2f60a2b5b51d6a35.jpg", "http://yanxuan.nosdn.127.net/4be7d3058e6eec27a4be033642359535.jpg", "http://yanxuan.nosdn.127.net/2eca2f02d4ec269cc1893876fb17511a.jpg", "http://yanxuan.nosdn.127.net/cf761716e3b430f63e059a891703200e.jpg"],
		"inventory": [456, 176],
		"information": [{
			"attrName": "填充物",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "填充物克重",
			"attrValue": "330g"
		}, {
			"attrName": "面料",
			"attrValue": "100%棉"
		}, {
			"attrName": "颜色",
			"attrValue": "米白/深褐"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "安全技术类别",
			"attrValue": "GB 18401-2010 B类"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 574,
		"date": "1500012464601",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1130041,
		"price": 109,
		"topName": "皮毛一体多用长毛坐垫",
		"subName": "澳洲羊毛的细腻触感",
		"shortDescription": ["皮毛一体", "不易脱毛", "春羔羊毛", "细腻柔滑", "生态鞣制", "健康环保"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c3f8e1876986a6832e95c2fce1e87810.jpg", "http://yanxuan.nosdn.127.net/a490dda4562b049b46fffc67c7ea4476.jpg", "http://yanxuan.nosdn.127.net/a91f514029b52b3c714962c3e474dfbb.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/442b9d99c0e7f39efd7967e0e5987374.png", "http://yanxuan.nosdn.127.net/173d269f6c7b875bc433640a7cf12be4.jpg", "http://yanxuan.nosdn.127.net/ccec1687cfa1a47c26d5eb952074bba9.jpg", "http://yanxuan.nosdn.127.net/0de6c515b07b96f902b42eb4262a0c6c.jpg", "http://yanxuan.nosdn.127.net/f3d5ec834ce5028f306e1e1d47d868ab.jpg"],
		"types": ["象牙白", "碳灰", "黑色"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/a83b7218bebd4a83c0b9f6f8a5ea6d08.jpg", "http://yanxuan.nosdn.127.net/7eb4d058e83cd9b6aadf5c20c63bcb1e.jpg", "http://yanxuan.nosdn.127.net/731f44716c3c585f563196c887544f52.jpg", "http://yanxuan.nosdn.127.net/59afb77cc310a6fde3eabd6401e8bab1.jpg", "http://yanxuan.nosdn.127.net/db3c78a5adad2a0ea8d219083e8547b4.jpg", "http://yanxuan.nosdn.127.net/267cc4ac41d6632aec5b18e2026739dc.jpg", "http://yanxuan.nosdn.127.net/76a367af57d38c0bc77086e784c2b1d4.jpg", "http://yanxuan.nosdn.127.net/c092b3925ee7b5b7dbea29c528ad8db8.jpg", "http://yanxuan.nosdn.127.net/aac2f3d5806016fb150d85bebc93b2e7.jpg", "http://yanxuan.nosdn.127.net/9cfeb9a9bfcf4338db92e6d8709aef44.jpg", "http://yanxuan.nosdn.127.net/453d3f8a6e61298886c3fa4361b59605.jpg", "http://yanxuan.nosdn.127.net/d25fcc0a95baeba59f30b59afa3ff159.jpg", "http://yanxuan.nosdn.127.net/1ee00ea5c06c29973db9cf3c499ef0ba.jpg", "http://yanxuan.nosdn.127.net/23c51b8a7d25e88cc510609363f254a1.jpg", "http://yanxuan.nosdn.127.net/07a632e4319a4cc45df6404975a4856a.jpg", "http://yanxuan.nosdn.127.net/8f20bda3dd2f724c3871226efc8ab3e1.jpg", "http://yanxuan.nosdn.127.net/9e237eaaad9484fa1ab1f4a8050df712.jpg", "http://yanxuan.nosdn.127.net/68be7318cc3708254004b1f25abca889.jpg", "http://yanxuan.nosdn.127.net/c0aabf924bbb70486bb38bdf0fe0b9ef.jpg", "http://yanxuan.nosdn.127.net/938abacde4b46e5fce40c8cb6b5a31f9.jpg", "http://yanxuan.nosdn.127.net/560dc26811c85df2a81425ccc80f2daf.jpg", "http://yanxuan.nosdn.127.net/ea86c3ab570b110f24322dc88a2bf67c.jpg", "http://yanxuan.nosdn.127.net/20b35a848e5b3e68039d8825ebaf0a92.jpg", "http://yanxuan.nosdn.127.net/613568156bb735d4e826fadf9b14f30a.jpg", "http://yanxuan.nosdn.127.net/9c2626064e1a840a3fd0d8937092a2a2.jpg", "http://yanxuan.nosdn.127.net/4710cebed0fec2581f6c9d7a0ad35f4e.jpg", "http://yanxuan.nosdn.127.net/ab23943bde5aee5a2f4db6305a638d06.jpg", "http://yanxuan.nosdn.127.net/7f1722c1d44e6791a239d20ae2a84cb0.jpg", "http://yanxuan.nosdn.127.net/ec18f626b235961bba578d8726ab5d80.jpg", "http://yanxuan.nosdn.127.net/f7c162a729f465edd62b2489af405820.jpg", "http://yanxuan.nosdn.127.net/de81035e3a2a44ad0420d25b374b248a.jpg", "http://yanxuan.nosdn.127.net/92fcfcee4d8a828fcbda97ecd4ac7c61.jpg", "http://yanxuan.nosdn.127.net/c98e8d8abc2f97df7fa1ed3e8a19e793.jpg", "http://yanxuan.nosdn.127.net/505355f028aafae9ac04ef604c46a89d.jpg", "http://yanxuan.nosdn.127.net/3439e5f1fce7f602ae8fabce64e3bafa.jpg", "http://yanxuan.nosdn.127.net/2ceea236ef9f0b2198dfce82e9265c06.jpg", "http://yanxuan.nosdn.127.net/784fe3f5f7fdeebdb26b2dab8542d1f9.jpg", "http://yanxuan.nosdn.127.net/15e4f99d5d272b0680868d2007d64382.jpg", "http://yanxuan.nosdn.127.net/99c09fe7b0d3ca49a81c7df0cc0a9dc1.jpg", "http://yanxuan.nosdn.127.net/65c12643b55584e3e0474292c42088ae.jpg", "http://yanxuan.nosdn.127.net/4d8d75b4b195d6086a44f2ee6d906d12.jpg", "http://yanxuan.nosdn.127.net/c52456cd1b25174f0222273b7394a5b7.jpg", "http://yanxuan.nosdn.127.net/a089ad7a18777861c80d185b090dedc9.jpg", "http://yanxuan.nosdn.127.net/671ddba19da9b13492dbb5e3126fc018.jpg", "http://yanxuan.nosdn.127.net/3f60ed6e112c17e1ddbb301181477e8d.jpg", "http://yanxuan.nosdn.127.net/b2a5a06bac71ceb645b47a322bef9588.jpg", "http://yanxuan.nosdn.127.net/f612db88ffb6d1b7287039c8d3aee82d.jpg", "http://yanxuan.nosdn.127.net/27daed7f1faba0f42c1b0987eca43e1a.jpg", "http://yanxuan.nosdn.127.net/20a180e85c13f5ece01875ad91842193.jpg", "http://yanxuan.nosdn.127.net/8d42ca472ca07af1e8037673a2d1159e.jpg", "http://yanxuan.nosdn.127.net/6b161c4bf4b6937ed473449b21c61b8c.jpg", "http://yanxuan.nosdn.127.net/76b268744bf751b5783ada179c343474.jpg", "http://yanxuan.nosdn.127.net/18606e0a3c59f2a26585fbdd6a5dcedd.jpg", "http://yanxuan.nosdn.127.net/8636692d4819117b12b27f77506562d4.jpg", "http://yanxuan.nosdn.127.net/b8d7e96b6cf7fc8dd7a4b9136c9c9c37.jpg", "http://yanxuan.nosdn.127.net/a69f5909a0ebf3450db5117530fbe339.jpg", "http://yanxuan.nosdn.127.net/00e9909b758d7585ac99423105b6d4a9.jpg", "http://yanxuan.nosdn.127.net/2ba5974ae02618ba26ff2bb17f3f13ad.jpg", "http://yanxuan.nosdn.127.net/9bea1ce19478453bbbe46607b7a7880c.jpg", "http://yanxuan.nosdn.127.net/ec70f25fdeab6b03b4b8f01dc070f5d4.jpg", "http://yanxuan.nosdn.127.net/50bbfa868ba0fc8d424bf1ec82f78ac6.jpg", "http://yanxuan.nosdn.127.net/b634157638fba9765dd10caf729e27e0.jpg", "http://yanxuan.nosdn.127.net/79ccb6cc4a76e2b69976d3f279539b94.jpg"],
		"inventory": [584, 36, 188],
		"information": [{
			"attrName": "重量",
			"attrValue": "0.4-0.6kg"
		}, {
			"attrName": "材料",
			"attrValue": "面100%羊毛皮衬100%聚酯纤维"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T2972-2008"
		}],
		"label": "",
		"manufacture": "",
		"sale": 308,
		"date": "1500012467210",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1130042,
		"price": 239,
		"topName": "皮毛一体多用单张长毛皮垫",
		"subName": "盖毯、沙发垫、椅垫、地垫",
		"shortDescription": ["皮毛一体", "不易脱毛", "春羔羊毛", "细腻柔滑", "生态鞣制", "健康环保"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f4bc47f95b1e209f93a4c3f374de539d.jpg", "http://yanxuan.nosdn.127.net/956fdfec169115fd05e62d07da75297a.jpg", "http://yanxuan.nosdn.127.net/73f97655327c07cf776d171d3719cd7d.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/dc9d09334eb201fe9408ed604e549941.png", "http://yanxuan.nosdn.127.net/b07878f08b72752e382aabb5f3e2953a.jpg", "http://yanxuan.nosdn.127.net/686fcb1f88a347074e403100b11bbfab.jpg", "http://yanxuan.nosdn.127.net/d63f27a42ba184ae7b901a8b325f3647.jpg", "http://yanxuan.nosdn.127.net/2ff09addcb19551f5b988a1ec2b436b3.jpg"],
		"types": ["小号白色", "小号黑色", "双拼白色", "双拼黑色"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/d4ace79c311683de546aba0830b13cef.jpg", "http://yanxuan.nosdn.127.net/18f00b15f815b2d3b37f2348f51ce341.jpg", "http://yanxuan.nosdn.127.net/a17fcbf654cc3a60c107555af325f0fe.jpg", "http://yanxuan.nosdn.127.net/6feee80476170267af6d71cdfc0b37dc.jpg", "http://yanxuan.nosdn.127.net/124b182a0a67835b4200cff8176c2b02.jpg", "http://yanxuan.nosdn.127.net/bd74be4a87738afaa04399b4d6d9a870.jpg", "http://yanxuan.nosdn.127.net/e556cbed463186c4bd99726067b923af.jpg", "http://yanxuan.nosdn.127.net/20688f897c671755758786d3040b5c07.jpg", "http://yanxuan.nosdn.127.net/260894bbf0796d65bebe0b8af28b6c95.jpg", "http://yanxuan.nosdn.127.net/56c59db0a7a2edb57f79cd4ce4725ebd.jpg", "http://yanxuan.nosdn.127.net/f9abac8c992347562001de711510bb03.jpg", "http://yanxuan.nosdn.127.net/1dfd5efde1a9607ad69344f3feb07cae.jpg", "http://yanxuan.nosdn.127.net/5563d9a3bcb3063e35ff0a04ea92e0f2.jpg", "http://yanxuan.nosdn.127.net/7106f4f4495f0c3aea5174855ce2e54b.jpg", "http://yanxuan.nosdn.127.net/da4e5459ca9ce74f3ed0ff5c696d2893.jpg", "http://yanxuan.nosdn.127.net/e9b673bcc593d748b37a81edea189219.jpg", "http://yanxuan.nosdn.127.net/a72abb429df56c56bbe23b76f9b75204.jpg", "http://yanxuan.nosdn.127.net/cb1ba0a44c42710e55d6237a34d34ed6.jpg", "http://yanxuan.nosdn.127.net/370e417d42332266cc31245eef4e2829.jpg", "http://yanxuan.nosdn.127.net/604f40c00f0529e948a6f6823fe3f8e5.jpg", "http://yanxuan.nosdn.127.net/b9ad179d3795a8ebd43f5c9572ba2164.jpg", "http://yanxuan.nosdn.127.net/2cd302f653917f33d9a2d311599ed4f7.jpg", "http://yanxuan.nosdn.127.net/da22ec1b12867fb95fd7614a7736f76c.jpg", "http://yanxuan.nosdn.127.net/3671bc562ca4d94dc9b87ad90de08ef3.jpg", "http://yanxuan.nosdn.127.net/884bb79eb13e38ded605375476cc07e2.jpg", "http://yanxuan.nosdn.127.net/0f7fb86caeb445cf7eaf060f1df33383.jpg", "http://yanxuan.nosdn.127.net/90680bb4193443696a79af88cc5786a0.jpg", "http://yanxuan.nosdn.127.net/ff03648c6839c642086a35143a0b5059.jpg", "http://yanxuan.nosdn.127.net/f276b0dd0ca7fcdb576457a46eae4ff3.jpg", "http://yanxuan.nosdn.127.net/c7ec5147aee4c483754a957969029eb2.jpg", "http://yanxuan.nosdn.127.net/c26d9ad8701cc643cbfc6f69177791bc.jpg", "http://yanxuan.nosdn.127.net/55f4129b1fbcc20d6a0b9e2362043cb5.jpg", "http://yanxuan.nosdn.127.net/02770843341ed31eabb0ddadc5526c52.jpg", "http://yanxuan.nosdn.127.net/dd815b745f3c22fa4cff373d41943a86.jpg", "http://yanxuan.nosdn.127.net/480e0f3996285f44e368a73e6c5fe47d.jpg", "http://yanxuan.nosdn.127.net/264ee5efd645ca38168ad3bef5496cc5.jpg", "http://yanxuan.nosdn.127.net/c46826b7d93342f359a818e80ec44765.jpg", "http://yanxuan.nosdn.127.net/aaade386233b7b54edadb80675494918.jpg", "http://yanxuan.nosdn.127.net/848aac16cd9d30ce840deb70389c907b.jpg", "http://yanxuan.nosdn.127.net/c50458c6772905734ff3e7ca1bce9978.jpg", "http://yanxuan.nosdn.127.net/61834d14a5d1d2b77ac92e1baca558c6.jpg", "http://yanxuan.nosdn.127.net/56ca8b2bc8f4b5ef00b2f87939a11602.jpg", "http://yanxuan.nosdn.127.net/5cb834323e30c14d86a4c1cc9b84d894.jpg", "http://yanxuan.nosdn.127.net/85e5f74e7205a9328209ca25be550598.jpg", "http://yanxuan.nosdn.127.net/0ea202d5a703a4291495f5c0f83bed73.jpg", "http://yanxuan.nosdn.127.net/bf7433c7f8a437cf93ef90d1431adb57.jpg", "http://yanxuan.nosdn.127.net/fbeddf135c0fe1f0ecfae5c6c057ea00.jpg", "http://yanxuan.nosdn.127.net/66b9e3c4986788281dece847560367d9.jpg", "http://yanxuan.nosdn.127.net/9e5d979ede709143d5f0f852855768c3.jpg", "http://yanxuan.nosdn.127.net/ce0a7f7bb447aa5148ecd03a7555c820.jpg", "http://yanxuan.nosdn.127.net/7e6b8abe385df7425ade75210724ffcc.jpg", "http://yanxuan.nosdn.127.net/bb3266c177f530869f44f1eaaf0b2bb7.jpg", "http://yanxuan.nosdn.127.net/ced47c9582a9353dc71d668467067b9e.jpg", "http://yanxuan.nosdn.127.net/ae6270545f82ef2bee47fb0fa3d15e04.jpg", "http://yanxuan.nosdn.127.net/75d28b0323f8b9586d0339ab881c4e04.jpg", "http://yanxuan.nosdn.127.net/d7750e85464204a7c57f50689eec1db4.jpg", "http://yanxuan.nosdn.127.net/373138262298b9c59e33a7cc3fe2f1e1.jpg", "http://yanxuan.nosdn.127.net/f39bae90e169f4e5417e0be5c66ad4df.jpg", "http://yanxuan.nosdn.127.net/4f16ebd2501372da0d4b3e4e516df3fd.jpg", "http://yanxuan.nosdn.127.net/f925d64a68d213867ceafc1211d59250.jpg", "http://yanxuan.nosdn.127.net/eddd76fef80b87e1cf3a8d7bd6ceee3c.jpg", "http://yanxuan.nosdn.127.net/b74337d99199c178ff101a912cb37212.jpg", "http://yanxuan.nosdn.127.net/d6fc6571f3526af0d9126071bd479e35.jpg", "http://yanxuan.nosdn.127.net/d26b83628f5e2b2830fd49b52ba67e70.jpg"],
		"inventory": [779, 439, 201, 18],
		"information": [{
			"attrName": "重量",
			"attrValue": "小号：0.6-0.9kg双拼：1.2-2kg"
		}, {
			"attrName": "材料",
			"attrValue": "100%羊毛皮"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 2972-2008"
		}, {
			"attrName": "产品等级",
			"attrValue": "一等品"
		}, {
			"attrName": "备注",
			"attrValue": "黑色商品接触液体会有少量掉色"
		}],
		"label": "",
		"manufacture": "",
		"sale": 467,
		"date": "1500012469720",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1081000,
		"price": 49,
		"topName": "北欧风珊瑚绒多功能暖手枕",
		"subName": "手枕坐垫两用",
		"shortDescription": ["珊瑚绒面", "轻柔保暖", "有硅棉芯", "柔滑轻盈", "折叠暖手", "展开垫坐"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/959963783415d788058ed6827491374e.jpg", "http://yanxuan.nosdn.127.net/cf2f846b6dcc3ee003d7cd1b439c8476.jpg", "http://yanxuan.nosdn.127.net/82681b259e061eed542004c5a44862a5.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/cc45baafad00405699552c187c64c512.png", "http://yanxuan.nosdn.127.net/a4fda9721fda4cb644f7eaf8e07a26f0.jpg", "http://yanxuan.nosdn.127.net/086010dccc921d77f21c67d15b3f4233.jpg", "http://yanxuan.nosdn.127.net/f652505736cd034a74c2dc89637dcd4e.jpg", "http://yanxuan.nosdn.127.net/bb03b98fb84fa9cdbc3ea4616c7db915.jpg"],
		"types": ["45*35cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/19ce01a5361a70388e7d40e94ccd3495.jpg", "http://yanxuan.nosdn.127.net/a037a815a9c11449de1c5c94d6a6d987.jpg", "http://yanxuan.nosdn.127.net/e7ccc425d60247f8468ede401cb74683.jpg", "http://yanxuan.nosdn.127.net/039951ed06296e8065f7b219a4a111de.jpg", "http://yanxuan.nosdn.127.net/37576f4179798648632a694da355996f.jpg", "http://yanxuan.nosdn.127.net/7d45db0fcfff3fb9ced3f6bc5e5d6a23.jpg", "http://yanxuan.nosdn.127.net/e46450a60e9bc60bca3f483ad14337b6.jpg", "http://yanxuan.nosdn.127.net/071c557f2845aa18a7f4d80f556b1178.jpg", "http://yanxuan.nosdn.127.net/5935e928d9b1b6781db188cf41f93424.jpg", "http://yanxuan.nosdn.127.net/83f8bac183a90e5d8f32c698813ef046.jpg", "http://yanxuan.nosdn.127.net/f7ae7816d84e084b9df010ae92f7c0bf.jpg", "http://yanxuan.nosdn.127.net/3c89f0917bceb94f0e300df77d08c75e.jpg", "http://yanxuan.nosdn.127.net/62c52e788f028eab5b4927671f4aa109.jpg", "http://yanxuan.nosdn.127.net/93b9efc4c1b39c065c0dde2974a9dc52.jpg", "http://yanxuan.nosdn.127.net/40da45628d48712880dc64843aba8e6a.jpg", "http://yanxuan.nosdn.127.net/ec12badecafb5dd8f67b52efa6cf4b15.jpg", "http://yanxuan.nosdn.127.net/bde2888497b52e724ca72d42a86578d1.jpg", "http://yanxuan.nosdn.127.net/5f1b163294dff20ac85a5f6dc8016500.jpg", "http://yanxuan.nosdn.127.net/2f970069e7d381421dec8c407fcd2a7a.jpg", "http://yanxuan.nosdn.127.net/b852d0821395488c729a4d09941b2ea7.jpg", "http://yanxuan.nosdn.127.net/660168255d39ded4c1d2038cff5d253f.jpg", "http://yanxuan.nosdn.127.net/7fe09efd35ef54dfa0a92c8059971995.jpg", "http://yanxuan.nosdn.127.net/f13328e747638a9681502f97d0fc032a.jpg", "http://yanxuan.nosdn.127.net/05c538811b7d8d37b15e9b168b45ed19.jpg", "http://yanxuan.nosdn.127.net/e597815f2bbf76f2c078326d3cd255e1.jpg", "http://yanxuan.nosdn.127.net/73d7bd31e90a2bdc79263dde20e2496c.jpg", "http://yanxuan.nosdn.127.net/1e10091f21b56c616ac4ab51decab76a.jpg", "http://yanxuan.nosdn.127.net/e5023b92342a2f936996c2eaf2e79f1d.jpg", "http://yanxuan.nosdn.127.net/a090e4b9269a901e660cc35a1c38975a.jpg", "http://yanxuan.nosdn.127.net/85c707ebaae017ab65bf5e2266ec7c6d.jpg", "http://yanxuan.nosdn.127.net/30a57bf64ad98af99955d90e45ae9f3f.jpg", "http://yanxuan.nosdn.127.net/7ec59f055c27c776ee5ec635e1e64b79.jpg", "http://yanxuan.nosdn.127.net/f39b93929486b2ba679ed22fac5021b6.jpg", "http://yanxuan.nosdn.127.net/5ea9e76b9b0988c823796752cd3bc4e5.jpg", "http://yanxuan.nosdn.127.net/5b952cc40eab4b590943ad91fb35c4ec.jpg", "http://yanxuan.nosdn.127.net/5f5e5f1d2adbb2aaaf10e1e38913206b.jpg", "http://yanxuan.nosdn.127.net/50c14625bb7a2d0331fee4181ae22455.jpg", "http://yanxuan.nosdn.127.net/7af5402277f0cfd4e9ac2bf9c0c0cd8e.jpg", "http://yanxuan.nosdn.127.net/b413e4e18e70b2b1bddb54358fbf507e.jpg", "http://yanxuan.nosdn.127.net/2006d2a3ff91300d1265ce875433484a.jpg", "http://yanxuan.nosdn.127.net/35c5c281c7b8bfe5a67704abfbd0f550.jpg", "http://yanxuan.nosdn.127.net/0f30d0dd64c48d72f543cf7f48f66f48.jpg", "http://yanxuan.nosdn.127.net/13632b105431e683733b69d8a065d458.jpg", "http://yanxuan.nosdn.127.net/c3a10c77b61704c1efa426d566ead340.jpg"],
		"inventory": [378],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "产地",
			"attrValue": "浙江杭州"
		}, {
			"attrName": "材质",
			"attrValue": "100% 聚酯纤维"
		}],
		"label": "",
		"manufacture": "",
		"sale": 90,
		"date": "1500012472169",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1128002,
		"price": 599,
		"topName": "黑凤梨 清新趣粉系列居家地毯 青粉拼接",
		"subName": "清新撞色 细腻柔软",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "对色拼接", "清新悦目"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9d605f9ca020201367e27df05c9a18f1.jpg", "http://yanxuan.nosdn.127.net/917666394119c741ea4f81d7ef230919.jpg", "http://yanxuan.nosdn.127.net/04f2d11c960b90250488775cc73cf3eb.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a1094a808ffb3a52a6cb13565a283d98.png", "http://yanxuan.nosdn.127.net/15a42a487b167c83a3e4f2ea099088c5.jpg", "http://yanxuan.nosdn.127.net/2996456487cd6e916319ad80e41c935f.jpg", "http://yanxuan.nosdn.127.net/fb6d907e5fa419c6b3706ed07d7343c9.jpg", "http://yanxuan.nosdn.127.net/a4a58f132454ba2e4bd657458c10d89b.jpg"],
		"types": ["160 x 230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/98bd8ce8440d1490fda16e4484bb2542.jpg", "http://yanxuan.nosdn.127.net/ec7ed91652c8a2d7d41e28770d9e17c4.jpg", "http://yanxuan.nosdn.127.net/3a6a68ee32cd57fc623ae637f7851f08.jpg", "http://yanxuan.nosdn.127.net/5f6873735488552ee8c333e0fce5d09c.jpg", "http://yanxuan.nosdn.127.net/555721479b94b6bf07e85ee20d084731.jpg", "http://yanxuan.nosdn.127.net/aa922b9ed90f794ae2920bd113e8cb20.jpg", "http://yanxuan.nosdn.127.net/497c5c38c9108cbe88d937d73ad4fbcc.jpg", "http://yanxuan.nosdn.127.net/f3e24decdb12c3d4f0612d26727d0f29.jpg", "http://yanxuan.nosdn.127.net/e2390f483f6f39db19b3d4ed5cf688fa.jpg", "http://yanxuan.nosdn.127.net/a29181f7fbbce014d053d476c1786f33.jpg", "http://yanxuan.nosdn.127.net/3940cb9d61644bf4ba57ce06d1d5c19f.jpg", "http://yanxuan.nosdn.127.net/2e13d90aa366cb12ef7da294edcdc01e.jpg", "http://yanxuan.nosdn.127.net/2c735a32fd5d54cdc28b7f73d5f807e9.jpg", "http://yanxuan.nosdn.127.net/d0d3566f6b9fba333bf2827d141a9508.jpg", "http://yanxuan.nosdn.127.net/54ce6bde5bb2a10cda09352132708cf1.jpg", "http://yanxuan.nosdn.127.net/3cc1be0e5ed4ae5a89ebe8ac11d5d06f.jpg", "http://yanxuan.nosdn.127.net/c009da8d2935445227ac71c0f33d892c.jpg", "http://yanxuan.nosdn.127.net/a08eb24568521c6142e4fec5059a680a.jpg", "http://yanxuan.nosdn.127.net/b280715015487c220d898ff03c589889.jpg", "http://yanxuan.nosdn.127.net/1518b47e6cea15f2f6e2f5bb689b9547.jpg", "http://yanxuan.nosdn.127.net/1ec7710c977fb4e5feadea963c3fddc4.jpg", "http://yanxuan.nosdn.127.net/3a02df0cae12a145597fe38f18f4a345.jpg", "http://yanxuan.nosdn.127.net/cf7a5e668cc6632e6a95c7bec94fd365.jpg", "http://yanxuan.nosdn.127.net/b06c3f486707c6c884db365c738d3f1f.jpg", "http://yanxuan.nosdn.127.net/9f1571aa5a33259844b4400ae8e7928a.jpg", "http://yanxuan.nosdn.127.net/3f11806ec70d3c83ce34c894f636f44f.jpg", "http://yanxuan.nosdn.127.net/a71f3927af55587d1f25acf58f50ad56.jpg", "http://yanxuan.nosdn.127.net/668503f2b9cbb2e185bcdf37b6c971a2.jpg", "http://yanxuan.nosdn.127.net/39f364c14902174d97a40db7d788b74b.jpg", "http://yanxuan.nosdn.127.net/c3fbe3b97d1ee3c6af0c7a75093cd3fb.jpg", "http://yanxuan.nosdn.127.net/880fc5ad54bcf65a80e3b4d92d63df47.jpg", "http://yanxuan.nosdn.127.net/380e873f899138eb4b83095f45ac70a2.jpg", "http://yanxuan.nosdn.127.net/d2dfd265de8a150224fdca8f69e18985.jpg", "http://yanxuan.nosdn.127.net/9004da2436b24c35359f83c9ae66c4b9.jpg", "http://yanxuan.nosdn.127.net/faf2629210e24239824567c96174740b.jpg", "http://yanxuan.nosdn.127.net/1ae91b701d37d20469a690c752025c21.jpg", "http://yanxuan.nosdn.127.net/777cc0bd88b57c11acac1e9c7e0ccced.jpg", "http://yanxuan.nosdn.127.net/65e40561049f38def9b377ef6382f438.jpg", "http://yanxuan.nosdn.127.net/95f99e495bf132086f2c52666a2a216e.jpg", "http://yanxuan.nosdn.127.net/2edd2ede5af43e2d77c3e6f4254d000f.jpg", "http://yanxuan.nosdn.127.net/9140b76d994e871acf3bbcb1ef722690.jpg", "http://yanxuan.nosdn.127.net/bc4502ce6032aba4fc669a46e44c4848.jpg", "http://yanxuan.nosdn.127.net/b257c548a8ff1294ef8d28ee1a365296.jpg", "http://yanxuan.nosdn.127.net/b21dc3574698dd7c0fca0686dc382850.jpg", "http://yanxuan.nosdn.127.net/1552e620e1fd8b817d24214289f45587.jpg", "http://yanxuan.nosdn.127.net/e3fe17dad5cb651c29a8b283d83380e7.jpg", "http://yanxuan.nosdn.127.net/0e253da20dc248c52e2d76be82be8649.jpg", "http://yanxuan.nosdn.127.net/a691bef45f319bef540c3452c0dad512.jpg", "http://yanxuan.nosdn.127.net/9a11be645069762bf276518ec7ea040e.jpg", "http://yanxuan.nosdn.127.net/a47ba96963b4c210089798974c1606cd.jpg", "http://yanxuan.nosdn.127.net/7a813f90c799398a570a6fc0a6ecafd6.jpg", "http://yanxuan.nosdn.127.net/6055ec439ceb99d0fb58e84986450e34.jpg"],
		"inventory": [901],
		"information": [{
			"attrName": "颜色",
			"attrValue": "青粉拼接"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}, {
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}],
		"label": "",
		"manufacture": "",
		"sale": 480,
		"date": "1500012475169",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1147045,
		"price": 599,
		"topName": "黑凤梨 清新趣粉系列居家地毯 灰黄条纹",
		"subName": "条纹色块拼接 软糯温馨",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "北欧轻撞", "温情优雅"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e9ba37c4bacadc1da850b87d943430d5.jpg", "http://yanxuan.nosdn.127.net/325a14ef1713c54895b27f31a54cfef9.jpg", "http://yanxuan.nosdn.127.net/4089fcee0b91055a99ab6744d937d04a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/5cda4a0c4c4ff9728d03186bd053c9ca.png", "http://yanxuan.nosdn.127.net/fc2cc85988f5dff0cb279f71defb70e9.jpg", "http://yanxuan.nosdn.127.net/e4bd418068967198c004c553baeb96ea.jpg", "http://yanxuan.nosdn.127.net/80c19798d0c56e1c10b7b8221d6decd9.jpg", "http://yanxuan.nosdn.127.net/9160dde4aa5d7f961607d3e6c9d04843.jpg"],
		"types": ["160*230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/1ed94457b18efade698cf5bc82946c64.jpg", "http://yanxuan.nosdn.127.net/af4b478fd94d03b21778707c9887d7c9.jpg", "http://yanxuan.nosdn.127.net/ab71b53fa330df829c35cde11bc00c7d.jpg", "http://yanxuan.nosdn.127.net/4e4a69efb4d96bb9da854ba57d3f4bee.jpg", "http://yanxuan.nosdn.127.net/458952119055bac8fb5012e61de4202f.jpg", "http://yanxuan.nosdn.127.net/3ff256aaa5b4628015c72dc545b97116.jpg", "http://yanxuan.nosdn.127.net/9d6524f89cf23ed79d9ce252ec8102f9.jpg", "http://yanxuan.nosdn.127.net/7564e109450297626873b1bd35f1dc15.jpg", "http://yanxuan.nosdn.127.net/a9ed17d4dbbcaefe9eb6e815aa617d28.jpg", "http://yanxuan.nosdn.127.net/912753f3e5d9126fab5b270461e9862a.jpg", "http://yanxuan.nosdn.127.net/4245afe3095adbe480a2b7500463c4c0.jpg", "http://yanxuan.nosdn.127.net/fbeb1eb10ff1b56c58015087a51dbdd9.jpg", "http://yanxuan.nosdn.127.net/c0eed21f887c4c503ecaaec41b8cc718.jpg", "http://yanxuan.nosdn.127.net/7e039cbd7b8a352d1fcddf82fdcbcc1b.jpg", "http://yanxuan.nosdn.127.net/9d9631d41034a4a5139246596d1a98eb.jpg", "http://yanxuan.nosdn.127.net/01a4f4135d9ea0c758b86dfbe06700ef.jpg", "http://yanxuan.nosdn.127.net/9a91d6d7ea7d5b102ef25ffe548d33a6.jpg", "http://yanxuan.nosdn.127.net/c5d0e4626539ec124b1e5749ba47fd87.jpg", "http://yanxuan.nosdn.127.net/04562ca209832e96cb7a1a8c6c6ba692.jpg", "http://yanxuan.nosdn.127.net/b0c597907245add1f1ef9c5bc83e6956.jpg", "http://yanxuan.nosdn.127.net/9ab5a8a7946c8e298e710fd7387fd006.jpg", "http://yanxuan.nosdn.127.net/45ddffc7336f20fb8c2dd72fadf6c04b.jpg", "http://yanxuan.nosdn.127.net/6e45c4ca2c8774fbedcf27b36fedcaa2.jpg", "http://yanxuan.nosdn.127.net/80220d9fbbdb46072f24f52c4a1e471f.jpg", "http://yanxuan.nosdn.127.net/699721c69022e3d1fc01177acc6b3994.jpg", "http://yanxuan.nosdn.127.net/20f9ee903fc53ed489ebd4c016cca2b9.jpg", "http://yanxuan.nosdn.127.net/bfec1cff8f1f66175b96d1744529418b.jpg", "http://yanxuan.nosdn.127.net/c2242210c0ebac3bd53838410e2e07b8.jpg", "http://yanxuan.nosdn.127.net/7ed10edbc16c64094ca25844c247d6a2.jpg", "http://yanxuan.nosdn.127.net/a19c1c5aa2e7059a2c842fefc84d24d8.jpg", "http://yanxuan.nosdn.127.net/7c750686f1e428dfcb48d495fc86950c.jpg", "http://yanxuan.nosdn.127.net/0f37e168dc3dd85d2a5e2eb73bdd4a1a.jpg", "http://yanxuan.nosdn.127.net/fc6e45f3d2f3ff07a5acd90ed9e8c483.jpg", "http://yanxuan.nosdn.127.net/956e30d2fc8a27d0dab55b60509a18ac.jpg", "http://yanxuan.nosdn.127.net/9ab0298865969ec23adfde31932b9c9d.jpg", "http://yanxuan.nosdn.127.net/33d8bb52698e16c8ceaa75c08868bd64.jpg", "http://yanxuan.nosdn.127.net/18f05e2c650f666cc5fdaa37eb8fe88c.jpg", "http://yanxuan.nosdn.127.net/c8fd28eeb087d745ca468af9c5f7a76f.jpg", "http://yanxuan.nosdn.127.net/4078faca9b3a7e7da2e4481e633862aa.jpg", "http://yanxuan.nosdn.127.net/45a50baceb3735117971bfec1598ad55.jpg", "http://yanxuan.nosdn.127.net/3457b8c8898c3649846a686b18c6c073.jpg", "http://yanxuan.nosdn.127.net/1bae4da9d791e7d1985b91724012c7b9.jpg", "http://yanxuan.nosdn.127.net/85c7315646be6b17da83315129ad3f68.jpg", "http://yanxuan.nosdn.127.net/8d60ec126f131635e7a2bb97fa136575.jpg", "http://yanxuan.nosdn.127.net/4b57e4cb1f6ac334f26bf2890555e821.jpg", "http://yanxuan.nosdn.127.net/e213840c45988c5bf60281a2f860e444.jpg", "http://yanxuan.nosdn.127.net/8737a6f12b3885584a4bfc61be0d8bc6.jpg", "http://yanxuan.nosdn.127.net/641ee25368e0dd298a52fb5568917ee2.jpg", "http://yanxuan.nosdn.127.net/98dda2986177cd491bf4ecce12b02201.jpg", "http://yanxuan.nosdn.127.net/af3c6c2be77a481ec590085730c51b64.jpg", "http://yanxuan.nosdn.127.net/7a4091f0f0a75c37ad830d03b6d3545e.jpg", "http://yanxuan.nosdn.127.net/4b1b0dbb676d5ac1d3ba71ad97e5bdcc.jpg"],
		"inventory": [556],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}],
		"label": "",
		"manufacture": "",
		"sale": 25,
		"date": "1500012479248",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1147046,
		"price": 599,
		"topName": "黑凤梨 清新趣粉系列居家地毯 条纹间粉",
		"subName": "多色拼接 舒柔静音",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "紧凑拼接", "灵动色彩"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/87028ad70f69a188a2eea07acf4e1cb9.jpg", "http://yanxuan.nosdn.127.net/2df5529b2f2cfd9a6a5a05a77a280919.jpg", "http://yanxuan.nosdn.127.net/1f97a91635a50a89eabfb87d17e1afb2.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/655d718df8107f8e7fd1dc6140e29039.png", "http://yanxuan.nosdn.127.net/bf827be7365ce9cbf63e5c09a3d02c03.jpg", "http://yanxuan.nosdn.127.net/dba153ee3fd18775ba79b34cfedbe7f4.jpg", "http://yanxuan.nosdn.127.net/b92912b2c65d2a62fcdd1167fb1aec03.jpg", "http://yanxuan.nosdn.127.net/efb43b046cc0102a65b967b835c3cdd9.jpg"],
		"types": ["160*230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/e93970ae79fe8383b1824446ae5a777c.jpg", "http://yanxuan.nosdn.127.net/a06ca83d36ba36a86d6b0ca18127ca40.jpg", "http://yanxuan.nosdn.127.net/6a29db4aaf5ebf9ef5bc66131c9adb17.jpg", "http://yanxuan.nosdn.127.net/db488366b952a086ae47cf2a2a3b111a.jpg", "http://yanxuan.nosdn.127.net/2c2058e3443963230a10f4a626f64761.jpg", "http://yanxuan.nosdn.127.net/d46eaa565712f2e557fc399348115c58.jpg", "http://yanxuan.nosdn.127.net/1312817e308d238f22cec138ad4109ea.jpg", "http://yanxuan.nosdn.127.net/46abac0dad0eb9caa78b8a29c8960f52.jpg", "http://yanxuan.nosdn.127.net/44a32b6f9d5d7ac6b3e30d558e7e3a2d.jpg", "http://yanxuan.nosdn.127.net/8986a938e9ab51a45491ef0050930768.jpg", "http://yanxuan.nosdn.127.net/2bec62c2fb9a1944e040df1b938cc938.jpg", "http://yanxuan.nosdn.127.net/e3f6ef160a1775ac5c3306c652c6cb00.jpg", "http://yanxuan.nosdn.127.net/983af10d8abd63945562cadd0fd963e2.jpg", "http://yanxuan.nosdn.127.net/11cbf9a380c4ee96e83f3b21ee722f50.jpg", "http://yanxuan.nosdn.127.net/793b08e1e809ebba3918db164a1db3ae.jpg", "http://yanxuan.nosdn.127.net/0cb6a6b2714716ea293afc66b5cdc756.jpg", "http://yanxuan.nosdn.127.net/db4b675383183dd6643c8dc2e0680fbe.jpg", "http://yanxuan.nosdn.127.net/d2a63b7492ae68278066bb22028fbed3.jpg", "http://yanxuan.nosdn.127.net/d2e78108ff4b947c27453aebe4887fa9.jpg", "http://yanxuan.nosdn.127.net/a2d88e598e4162efefaa0dd74d59d288.jpg", "http://yanxuan.nosdn.127.net/c9d3a5ab82547e6b739e940cbd3f48dc.jpg", "http://yanxuan.nosdn.127.net/8d40549c168b608307075f0cb5d2b664.jpg", "http://yanxuan.nosdn.127.net/ea700ebd6d00bb86561ff919a8ad09e7.jpg", "http://yanxuan.nosdn.127.net/2ec01972d1d8dcddb5fed52e10ffb201.jpg", "http://yanxuan.nosdn.127.net/a51c5fae8ad8357c12338e906ed97320.jpg", "http://yanxuan.nosdn.127.net/b06f633a8cb492b5f36cc4e7ac9c309d.jpg", "http://yanxuan.nosdn.127.net/4f99a7df12cdbb08d99912e6450629f9.jpg", "http://yanxuan.nosdn.127.net/14ef3d79f89da70d581d295deb2549c5.jpg", "http://yanxuan.nosdn.127.net/0b6e64a781cb0621f31a24409604e4ea.jpg", "http://yanxuan.nosdn.127.net/53b7f365392392b5fcdf43ed457dedf9.jpg", "http://yanxuan.nosdn.127.net/e4f89d060cfc7d4b250927b5efaa6f97.jpg", "http://yanxuan.nosdn.127.net/f145671a1b2be225eca04a0bb929dfb9.jpg", "http://yanxuan.nosdn.127.net/808ed7eea5e40ea2745b972352a93e21.jpg", "http://yanxuan.nosdn.127.net/19a1fd6ab3dee6ec9fde6eb88d4d92ce.jpg", "http://yanxuan.nosdn.127.net/949cd546f1920ee050bc23f91202714f.jpg", "http://yanxuan.nosdn.127.net/e5fc49a67d80c823d9ae36cc51dd9a7a.jpg", "http://yanxuan.nosdn.127.net/c44674c10796449091aa5a4c59787bfe.jpg", "http://yanxuan.nosdn.127.net/1cfc33e30ad76699ecf58f9a6818c92f.jpg", "http://yanxuan.nosdn.127.net/a501e7e209cddb32b460eee4ba719a8c.jpg", "http://yanxuan.nosdn.127.net/5265f1a7734b81f2c520ff4ed3ad2564.jpg", "http://yanxuan.nosdn.127.net/c37f2389c1cbed2b19961629c1df9c91.jpg", "http://yanxuan.nosdn.127.net/10b486661e992f2f6d35f757235d3e85.jpg", "http://yanxuan.nosdn.127.net/0e50f25b7eb65ed8338e9302d0a8827f.jpg", "http://yanxuan.nosdn.127.net/26f7c859f4020f0ad7552e1c639a01d1.jpg", "http://yanxuan.nosdn.127.net/01f961662dd9a6502498df36d3a43850.jpg", "http://yanxuan.nosdn.127.net/9353127c91cbd7ef6e8225687c5ec2d1.jpg", "http://yanxuan.nosdn.127.net/5af64e333a371fe8f314c2f3d1ae447d.jpg", "http://yanxuan.nosdn.127.net/167d9bea82015ab3e9664ca448f7e18f.jpg", "http://yanxuan.nosdn.127.net/a4e3fde939779200bca16afc4ceaa4c2.jpg", "http://yanxuan.nosdn.127.net/1e7e68d636ea00399ce78e45ea6663d4.jpg", "http://yanxuan.nosdn.127.net/e72676b9f05c76eb4c0d2c1b543c1e79.jpg", "http://yanxuan.nosdn.127.net/4d9555767bf0d110e9ae2dc6e7da0dfc.jpg"],
		"inventory": [179],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}],
		"label": "",
		"manufacture": "",
		"sale": 640,
		"date": "1500012483346",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1147047,
		"price": 559,
		"topName": "简约知性系列居家地毯 蓝粉拼接",
		"subName": "三角几何拼接 超细绒感",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "简约拼接", "明快几何"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/aa57f3deabfe27d0024bd9558d88b3c0.jpg", "http://yanxuan.nosdn.127.net/64375cb47b76d9b5fcdb58b60312779e.jpg", "http://yanxuan.nosdn.127.net/86737eb698ec20c3134fb244069813a1.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/bda805b0a2464b6ec33c18981565e50e.png", "http://yanxuan.nosdn.127.net/014530f37555bba33eec154a36b78a02.jpg", "http://yanxuan.nosdn.127.net/7e1e516c116a663e587fc5dd3cd2f47b.jpg", "http://yanxuan.nosdn.127.net/db03baeb92ec4be50203dc690b793830.jpg", "http://yanxuan.nosdn.127.net/a9239c7e79510a1218f94da58a278a8d.jpg"],
		"types": ["160*230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/e56e30a2c6cbdeadb1a2b6d00f2e877f.jpg", "http://yanxuan.nosdn.127.net/d14496c74886e92b3a3f30692756e77a.jpg", "http://yanxuan.nosdn.127.net/0a371e340849de0ca0c628021cbc0014.jpg", "http://yanxuan.nosdn.127.net/1a5a80c783e941991414cd8ede724312.jpg", "http://yanxuan.nosdn.127.net/37a49c90311b2661a24887ff2de448c7.jpg", "http://yanxuan.nosdn.127.net/e25787020a28bbb6e9f2a220aa2dd442.jpg", "http://yanxuan.nosdn.127.net/52b8beb545c2ae0115522908ac352a39.jpg", "http://yanxuan.nosdn.127.net/afaa8978308f2531ada6aaaf63c56347.jpg", "http://yanxuan.nosdn.127.net/18789d3aacac9d2de6a6b21cfb7aec53.jpg", "http://yanxuan.nosdn.127.net/154e9f3504ada7cdadcb906ee01450c7.jpg", "http://yanxuan.nosdn.127.net/3326e16fbfee855392404e970bd5aa4c.jpg", "http://yanxuan.nosdn.127.net/7b5b0d22fc526776cef8e756dff60dd1.jpg", "http://yanxuan.nosdn.127.net/48dd357aa1abc60c01b3fbf8dacb2694.jpg", "http://yanxuan.nosdn.127.net/27e574eab03093d302f01e5ceb42d0af.jpg", "http://yanxuan.nosdn.127.net/30228bd984383c97633eef50ca556406.jpg", "http://yanxuan.nosdn.127.net/baa3cc805dc0afb4257c30466771535a.jpg", "http://yanxuan.nosdn.127.net/daa37937c3440919e597e4954e68f646.jpg", "http://yanxuan.nosdn.127.net/82df87910187f081e2a4d5f5a06df4cb.jpg", "http://yanxuan.nosdn.127.net/eaa197c3d63c8479e38f46595df50a5e.jpg", "http://yanxuan.nosdn.127.net/56cf9f1b8de8627ad0d064843d97cd96.jpg", "http://yanxuan.nosdn.127.net/99ad88418c88c550b183dc12a9280a1d.jpg", "http://yanxuan.nosdn.127.net/a84aafb6ddbe25f32bddc4f843ad35d0.jpg", "http://yanxuan.nosdn.127.net/9ce402bfb9d08603259264e9115166b2.jpg", "http://yanxuan.nosdn.127.net/1a7248d14d630770dfff1b17350219ba.jpg", "http://yanxuan.nosdn.127.net/43113bc52b7eece12f777092d9b04c3f.jpg", "http://yanxuan.nosdn.127.net/fbe65886e9405ceb1a43fb3097fd709a.jpg", "http://yanxuan.nosdn.127.net/e098163e428171418a77c077a8330299.jpg", "http://yanxuan.nosdn.127.net/cbb9a88692c9621652244844bf0b299d.jpg", "http://yanxuan.nosdn.127.net/7d8264c945ccb68d432dcaeb86e3e4ec.jpg", "http://yanxuan.nosdn.127.net/5e0a467456d69bc746e6bd7797f6963b.jpg", "http://yanxuan.nosdn.127.net/a58d0c630b0e2f51fa49aef8687a9e16.jpg", "http://yanxuan.nosdn.127.net/1de7c562962e54da6a63e749634eb008.jpg", "http://yanxuan.nosdn.127.net/8931ee6e2b4b3ed3454184093b6471ed.jpg", "http://yanxuan.nosdn.127.net/3b032ca9815193ec258be3ffa0a25da3.jpg", "http://yanxuan.nosdn.127.net/bfd12f882162e93008c97bff3187f694.jpg", "http://yanxuan.nosdn.127.net/79d69e15728310ec458ec665a287fc87.jpg", "http://yanxuan.nosdn.127.net/e10b0c8d89689483eceea36aa330deb4.jpg", "http://yanxuan.nosdn.127.net/88c5b10b0916839ae7cf6ca1b8c8d83f.jpg", "http://yanxuan.nosdn.127.net/17b3ace86142f2b8c7f29ed10d1dba55.jpg", "http://yanxuan.nosdn.127.net/83f9993c4dda4898693ba3fe9f313c1f.jpg", "http://yanxuan.nosdn.127.net/9310f4e403eb5db6107bfc280c3e6cf8.jpg", "http://yanxuan.nosdn.127.net/7ba895b4d7507984a26344d7c03db550.jpg", "http://yanxuan.nosdn.127.net/34f3faaad28a93f140f3f1b78def4bce.jpg", "http://yanxuan.nosdn.127.net/355dc9d6e4a8a1a8561183641ef2890a.jpg", "http://yanxuan.nosdn.127.net/f2b6a2155e30bf99750756ec4fb99f11.jpg"],
		"inventory": [174],
		"information": [{
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}, {
			"attrName": "颜色",
			"attrValue": "蓝粉拼接"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}],
		"label": "",
		"manufacture": "",
		"sale": 387,
		"date": "1500012487009",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1147048,
		"price": 559,
		"topName": "简约知性系列居家地毯 蓝灰格",
		"subName": "沉稳双拼色 居家温柔伴护",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "理性简约", "寂婉极简"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0435c87688181d8f8b0bff18fc63d2f6.jpg", "http://yanxuan.nosdn.127.net/b97a7b5c91f133e49d9879b93c63ef81.jpg", "http://yanxuan.nosdn.127.net/f99743d122d47c140a41dd628a0e3ab3.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/fd7920a2eadd10fa10c0c03959a2abe0.png", "http://yanxuan.nosdn.127.net/cb0fc84a590f63e61b0eb3ee0833fcff.jpg", "http://yanxuan.nosdn.127.net/cab7242933b1d129f4f66b05e1652641.jpg", "http://yanxuan.nosdn.127.net/e65c7df582c401681bdaa31925cf86e4.jpg", "http://yanxuan.nosdn.127.net/586bdb8102b0fa378e554055a5aa58aa.jpg"],
		"types": ["160*230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/037e5909a5bec975c67bf61d193d7b72.jpg", "http://yanxuan.nosdn.127.net/88486bfa3d7bd68c7780df5cc01e7a7d.jpg", "http://yanxuan.nosdn.127.net/77c2d1819d99dde7cad8c140048a46aa.jpg", "http://yanxuan.nosdn.127.net/f49aed0ebcd5c54f3edb8240921e3a46.jpg", "http://yanxuan.nosdn.127.net/60b923642f98ca62ca3d9a6fe0db8800.jpg", "http://yanxuan.nosdn.127.net/782d6edfc30d1a53711d5f0f6145f8fd.jpg", "http://yanxuan.nosdn.127.net/3b10a5a5f29340056cb6b1673420f46c.jpg", "http://yanxuan.nosdn.127.net/e2e721a8f26030ba31f0b290c47ba232.jpg", "http://yanxuan.nosdn.127.net/77d18b39a7d8b603b869ca4cb8d7235b.jpg", "http://yanxuan.nosdn.127.net/c266d8f75bc074531033430882a93d8a.jpg", "http://yanxuan.nosdn.127.net/ceb7a59b3c56f7ced051cae61d70daf6.jpg", "http://yanxuan.nosdn.127.net/0db841700c868c08d627f01c354b013c.jpg", "http://yanxuan.nosdn.127.net/008ea04b11a0f68116e5eb180ca8a6a0.jpg", "http://yanxuan.nosdn.127.net/dfa3513280704216372dade1751b2bc6.jpg", "http://yanxuan.nosdn.127.net/1287987157d7a1767ccaec835bb82b17.jpg", "http://yanxuan.nosdn.127.net/041f4c058fd201716c456d32588e0611.jpg", "http://yanxuan.nosdn.127.net/22832d570b7eaf8153d5038d9095b990.jpg", "http://yanxuan.nosdn.127.net/e5651dedb8b4d5c1d40345f13a4ad622.jpg", "http://yanxuan.nosdn.127.net/0b988f3146c079e488eeb05ba03cae37.jpg", "http://yanxuan.nosdn.127.net/6d53d4374b9a800da1eb215b6215b403.jpg", "http://yanxuan.nosdn.127.net/1abd7dd665582e0eb1c8e4bd6196b6cb.jpg", "http://yanxuan.nosdn.127.net/39561bb5901a7a80bf362bf4b7b96d30.jpg", "http://yanxuan.nosdn.127.net/99eff53c1440f72152c2b264c22244a7.jpg", "http://yanxuan.nosdn.127.net/8e54bd5c82506db1eed358edcdbd6ef8.jpg", "http://yanxuan.nosdn.127.net/83ca52b41e1907932bc55330fd5a5cad.jpg", "http://yanxuan.nosdn.127.net/6f58dc91de46bbf93fbf054de64958aa.jpg", "http://yanxuan.nosdn.127.net/08d20c7dc0ae462a176ac52a58e7b297.jpg", "http://yanxuan.nosdn.127.net/ca1db2649c0a5c67ed319cb212332380.jpg", "http://yanxuan.nosdn.127.net/2feac4d0a9ef0053863b81e37f7fe9fe.jpg", "http://yanxuan.nosdn.127.net/b9d2fa42d4fec3abd1c151a8dbdab0ef.jpg", "http://yanxuan.nosdn.127.net/e78a8555da079fb963f78fc9149f93cd.jpg", "http://yanxuan.nosdn.127.net/b5384e883e1e96640d1adfca1c2e511f.jpg", "http://yanxuan.nosdn.127.net/9c8ec5307f7f0c5a3dcea9916bbbf091.jpg", "http://yanxuan.nosdn.127.net/3c59d89c8b46e0e740fd6d8f40071422.jpg", "http://yanxuan.nosdn.127.net/4f5640cac8b41175cf3fb620f25ed7ec.jpg", "http://yanxuan.nosdn.127.net/20ab37f417610381659ad47de48aa42f.jpg", "http://yanxuan.nosdn.127.net/f676f5243a835cb63d76e20423666337.jpg", "http://yanxuan.nosdn.127.net/8b9e1a348d1766c803f9b31221f94553.jpg", "http://yanxuan.nosdn.127.net/a49199ab0ee762df58a2dce4bd26b1e3.jpg", "http://yanxuan.nosdn.127.net/4635e2b0daeca9d6dbaf66dc6a74b2f6.jpg", "http://yanxuan.nosdn.127.net/2d05ee8ffcca5df74090153c8892cb4d.jpg", "http://yanxuan.nosdn.127.net/60c532e803c2d4a75c3da1200797d29c.jpg", "http://yanxuan.nosdn.127.net/75b9feace19e5c3c2e5a9e8dca01a0f2.jpg", "http://yanxuan.nosdn.127.net/7f5ef8ad3f27f9f6dd1826afe0494c29.jpg", "http://yanxuan.nosdn.127.net/50aab2e77e905e1f0c1a71ec25739207.jpg"],
		"inventory": [932],
		"information": [{
			"attrName": "颜色",
			"attrValue": "蓝灰格"
		}, {
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}],
		"label": "",
		"manufacture": "",
		"sale": 678,
		"date": "1500012489543",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1128003,
		"price": 559,
		"topName": "简约知性系列居家地毯 白线格",
		"subName": "几何条纹设计 舒适经典享受",
		"shortDescription": ["超细纤维", "至柔细腻", "柔韧耐用", "不易脱毛", "几何条纹", "淡雅经典"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/659cd638f00d46e7841197519fbc0860.jpg", "http://yanxuan.nosdn.127.net/f6e841d2341d4566d54ea50c13120ae6.jpg", "http://yanxuan.nosdn.127.net/baf9ad19cce2fbeca9d194e6a5f08c26.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/6ebd8000a138e97a3f631a399af2a34a.png", "http://yanxuan.nosdn.127.net/645eb853459da6ca857d631e3976a95f.jpg", "http://yanxuan.nosdn.127.net/833249cf88859c3338b120bfe6cbad4d.jpg", "http://yanxuan.nosdn.127.net/7aec2300ebd449f02eeb7ed3f3c5ca4f.jpg", "http://yanxuan.nosdn.127.net/1556de8efaa6168dc291afed71169f4d.jpg"],
		"types": ["160 x 230cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/ee028741a26ffd7509b3004c7739f4cc.jpg", "http://yanxuan.nosdn.127.net/ba0c5c42f49d5eca266bd421d79d0dfc.jpg", "http://yanxuan.nosdn.127.net/2197b4cf639326546a6394c3ab15071e.jpg", "http://yanxuan.nosdn.127.net/081d21b63b54d0e614fa3c0cf1124725.jpg", "http://yanxuan.nosdn.127.net/df37ad9b395a7dbab174ac482b26ed20.jpg", "http://yanxuan.nosdn.127.net/56520889a572fe4046b3ac62f23a370a.jpg", "http://yanxuan.nosdn.127.net/9afc5e5c53d57871f38530804844701a.jpg", "http://yanxuan.nosdn.127.net/cd741eaa9c38af79df599455049da9e5.jpg", "http://yanxuan.nosdn.127.net/0ebfd4bd80c7d76a910623d86b0c0094.jpg", "http://yanxuan.nosdn.127.net/4e551435c2d6b3b6d951e7be62d149e8.jpg", "http://yanxuan.nosdn.127.net/978cdc8cabe5b03213c5ae95dea08892.jpg", "http://yanxuan.nosdn.127.net/dfd54063a93554503540d411b7c9fce9.jpg", "http://yanxuan.nosdn.127.net/98e500c8a16175200442ca257b1cff0a.jpg", "http://yanxuan.nosdn.127.net/6a2450629ec7e35b382f31d8164c8862.jpg", "http://yanxuan.nosdn.127.net/0f93a53d98a982448fd64acc3d325075.jpg", "http://yanxuan.nosdn.127.net/aec9009dd805a76b93d06d6c73377b7d.jpg", "http://yanxuan.nosdn.127.net/84fa69b1ed142dd877c9963284167291.jpg", "http://yanxuan.nosdn.127.net/d86c9021e254bc940a39866423adcdf4.jpg", "http://yanxuan.nosdn.127.net/2706d59ad50e2c647b2a623ec5cf6310.jpg", "http://yanxuan.nosdn.127.net/9270a7c68b0a2b49ecc0831f9bb40dcf.jpg", "http://yanxuan.nosdn.127.net/14d8307d0c930acb6e3c23cea5c5216b.jpg", "http://yanxuan.nosdn.127.net/d4417e0bc7984dc907a2584f112af9b1.jpg", "http://yanxuan.nosdn.127.net/4e480084e18b781559dcc0174845c5d1.jpg", "http://yanxuan.nosdn.127.net/36c18bffd5b0d8aa433ce4e59ccab1b3.jpg", "http://yanxuan.nosdn.127.net/cc3a92c53eb0c78be0c765522d3ce50d.jpg", "http://yanxuan.nosdn.127.net/e3346979ce9963553493ea4a602dbce3.jpg", "http://yanxuan.nosdn.127.net/4214794e5fcb55fcb61c91676be563a6.jpg", "http://yanxuan.nosdn.127.net/5cedc56ce17853a585db45a88949b454.jpg", "http://yanxuan.nosdn.127.net/fb906758cdf0dc3f3b74ea3b19637e02.jpg", "http://yanxuan.nosdn.127.net/2ac3f54156a16a16362b108919fb0958.jpg", "http://yanxuan.nosdn.127.net/55f28e0a9586f1914b5497adf5cb7ec0.jpg", "http://yanxuan.nosdn.127.net/ae452f5dbab8c7208673e71f4153d283.jpg", "http://yanxuan.nosdn.127.net/a5d4418f6a5cc4c7f7d14229af148822.jpg", "http://yanxuan.nosdn.127.net/fac7fedf23d3e3d7569a931f5fae3939.jpg", "http://yanxuan.nosdn.127.net/af4f27d2246606bf4a043418acbdfc2f.jpg", "http://yanxuan.nosdn.127.net/4668b3f705770070288374ff91de1f44.jpg", "http://yanxuan.nosdn.127.net/ff2b7906c6ecb4765cc0181ad30a1ed3.jpg", "http://yanxuan.nosdn.127.net/d49bf72c763841b16ef6652ec5725dd5.jpg", "http://yanxuan.nosdn.127.net/fd0e31be72334682bbefb4370f415948.jpg", "http://yanxuan.nosdn.127.net/21bf16763673dd88f9d1d862c4da16e2.jpg", "http://yanxuan.nosdn.127.net/2a6f9560d9462296b55e1e09782fbbee.jpg", "http://yanxuan.nosdn.127.net/3cecd7d8691af24f150f9410abef3eaf.jpg", "http://yanxuan.nosdn.127.net/4c3b59231d05a211c5a2399d8579d880.jpg", "http://yanxuan.nosdn.127.net/5ddaffa49905de2da357265d52292654.jpg", "http://yanxuan.nosdn.127.net/9c0448156be3a677230cc179321b615e.jpg"],
		"inventory": [288],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "材质",
			"attrValue": "绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉"
		}, {
			"attrName": "产地",
			"attrValue": "中国北京"
		}],
		"label": "",
		"manufacture": "",
		"sale": 94,
		"date": "1500012492031",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1030003,
		"price": 1469,
		"topName": "160*230羊毛手工几何地毯",
		"subName": "几何图案，打造立体的时尚感",
		"shortDescription": ["手工编织", "精细打磨", "立体图纹", "艺术价值", "天然羊毛", "吸湿耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ffef7a5bd4a70603b2a4f336506f4251.jpg", "http://yanxuan.nosdn.127.net/6dda2c2a8d44cb5b0b6dd00dd0b70d57.jpg", "http://yanxuan.nosdn.127.net/75f1e70ed3df2d7f8b17733f494ad4a8.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1d1ab099dc0e254c15e57302e78e200b.png", "http://yanxuan.nosdn.127.net/1e0a3442eba15bcff79112b6462a8e08.jpg", "http://yanxuan.nosdn.127.net/9750ed0f968d4c879c37396f533f02dc.jpg", "http://yanxuan.nosdn.127.net/725bf6af1c14901068370aa051acecea.jpg", "http://yanxuan.nosdn.127.net/aff411a94562694cbdba5a415ff5dda2.jpg"],
		"types": ["赤香红", "玉杏黄", "岩井蓝"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/a03425edf97e1b0299d3095172991847.jpg", "http://yanxuan.nosdn.127.net/d3fc35db4f3956b210032f0a876c2f2e.jpg", "http://yanxuan.nosdn.127.net/cf278ec3726e12e0a07ef4384f80d7c4.jpg", "http://yanxuan.nosdn.127.net/04cdc7e09537f67a140f5bd363751d23.jpg", "http://yanxuan.nosdn.127.net/f4978e0569025d98c7a0cc685a3227d5.jpg", "http://yanxuan.nosdn.127.net/667999a8913e0dfc5118695f690f9ac4.jpg", "http://yanxuan.nosdn.127.net/d0fe6f158bf93e05ae12fbc86ad7df61.jpg", "http://yanxuan.nosdn.127.net/39b84d98bfcbc4f0443ec04e39328d04.jpg", "http://yanxuan.nosdn.127.net/16218f2ea0f8f4ddfd1fcbeac17d3b54.jpg", "http://yanxuan.nosdn.127.net/5e512605b0a5ee1dea333c42f826050b.jpg", "http://yanxuan.nosdn.127.net/001d8961d92c3ebcf860e1745d0c63b4.jpg", "http://yanxuan.nosdn.127.net/25dda9b93dd3dd9aa622779c27481ef4.jpg", "http://yanxuan.nosdn.127.net/037abff9d64cdc761092d47619df82d0.jpg", "http://yanxuan.nosdn.127.net/3f755e4142e8baf68fab301b3e6438d5.jpg", "http://yanxuan.nosdn.127.net/fa9ac1211dca7edc8fd93efd9cdd66e9.jpg", "http://yanxuan.nosdn.127.net/ada62ef76b083d844d0762d2a6d33824.jpg"],
		"inventory": [735, 131, 50],
		"information": [{
			"attrName": "产地",
			"attrValue": "印度"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 2756-2005"
		}, {
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "工艺",
			"attrValue": "手工编织"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1：羊毛材质存在一点羊骚味实属正常情况，建议开窗通风，多散散味道即可。2：羊毛地毯刚刚开始使用的时候多多少少都会有一点掉毛的情况，建议开始使用的时候用吸尘器多吸几次，之后掉毛的情况就会有改善。 3：因为天然羊毛材质，所以脚感会有一点点刺，不属于产品质量问题。"
		}],
		"label": 限时购,
		"manufacture": "",
		"sale": 70,
		"date": "1500012494514",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1030001,
		"price": 969,
		"topName": "160*230羊毛手工地毯",
		"subName": "印度进口，手工编织，简约百搭",
		"shortDescription": ["手工编织", "精细打磨", "立体图纹", "艺术价值", "羊毛毯面", "吸湿耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1d8dc79bbf65af2d891b7e3f2a393e4c.jpg", "http://yanxuan.nosdn.127.net/27595aec8d903541bd05559fcdbf722e.jpg", "http://yanxuan.nosdn.127.net/e3fc5f8424d2d8425103ac588c412846.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/88dc5d80c6f84102f003ecd69c86e1cf.png", "http://yanxuan.nosdn.127.net/b57e971ab0de96e159c2e8de13df25bd.jpg", "http://yanxuan.nosdn.127.net/1e06cd5c6107e37214ea9cf13ef08676.jpg", "http://yanxuan.nosdn.127.net/a7351368b2e1d57958c66a7225230b24.jpg", "http://yanxuan.nosdn.127.net/3b9d726451cbe3c2d4432613d48bc6e9.jpg"],
		"types": ["伽罗棕", "檀香黄", "朽葉褐"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/fbe953060dd4282539ee78e22f9c326c.jpg", "http://yanxuan.nosdn.127.net/fb6320b1b19fe349fca98dcb509ccb41.jpg", "http://yanxuan.nosdn.127.net/4e3517025dc8da160277d7c80c55a83f.jpg", "http://yanxuan.nosdn.127.net/c6d902b098a5009871e7dd2fc47d4aae.jpg", "http://yanxuan.nosdn.127.net/15b721ac1796a6a93c2925c45fbafa91.jpg", "http://yanxuan.nosdn.127.net/c1e30ecc74b5b25869f892f51d4472b0.jpg", "http://yanxuan.nosdn.127.net/e7ddc57f40d4ec7d7e1069fc24438e93.jpg", "http://yanxuan.nosdn.127.net/68e501bd5f6f2018ee275af62edcebce.jpg", "http://yanxuan.nosdn.127.net/6cd10a4cc89e2067421632172382410c.jpg", "http://yanxuan.nosdn.127.net/81d9b02cc74f846bb29bfc57b4d8dab1.jpg", "http://yanxuan.nosdn.127.net/30a9e77d7e0cab9b389bc4a7f4a0be13.jpg", "http://yanxuan.nosdn.127.net/50513c57074971334c4b715d8b3cdfa1.jpg", "http://yanxuan.nosdn.127.net/5497b96a17e01db88d3b8999d78e111d.jpg", "http://yanxuan.nosdn.127.net/3311094b3f6ac170477dbf31fdc36a43.jpg", "http://yanxuan.nosdn.127.net/fb7a1c7b6c6989af9c42a4e66de098e8.jpg", "http://yanxuan.nosdn.127.net/ac42cbdfaa06c00a1bbd22fd63308546.jpg", "http://yanxuan.nosdn.127.net/0d2bf9139a0ca351f0ae4cabece86277.jpg", "http://yanxuan.nosdn.127.net/da1c0eef412d5ff9761a8659fa64d91b.jpg", "http://yanxuan.nosdn.127.net/ba7017652cf73419da57393bb02ca6de.jpg"],
		"inventory": [409, 781, 821],
		"information": [{
			"attrName": "产地",
			"attrValue": "印度"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 2756-2005"
		}, {
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "工艺",
			"attrValue": "手工编织"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1：羊毛材质存在一点羊骚味实属正常情况，建议开窗通风，多散散味道即可。2：羊毛地毯刚刚开始使用的时候多多少少都会有一点掉毛的情况，建议开始使用的时候用吸尘器多吸几次，之后掉毛的情况就会有改善。 3：因为天然羊毛材质，所以脚感会有一点点刺，不属于产品质量问题。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 684,
		"date": "1500012497286",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1030002,
		"price": 1269,
		"topName": "160*230羊毛圈绒枪刺地毯",
		"subName": "印度进口，手工枪刺，简约百搭",
		"shortDescription": ["枪刺编织", "细致手工", "手工染色", "色彩自然", "羊毛混纺", "高档耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/6a8608bff32bb923d66b7578a512a704.jpg", "http://yanxuan.nosdn.127.net/2c0b0ecdcf693217c96e6bf3cb9c7b14.jpg", "http://yanxuan.nosdn.127.net/3a08b73622174b4ce3997fef1b660ce4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/8b9328496990357033d4259fda250679.png", "http://yanxuan.nosdn.127.net/63096efbd6271a42d3d830e79bf9635f.jpg", "http://yanxuan.nosdn.127.net/50643ebbcf8a243ca609477f431fe75a.jpg", "http://yanxuan.nosdn.127.net/bfc9ea77fa117eaa6be19ca7329d4c95.jpg", "http://yanxuan.nosdn.127.net/a8540865c48fb297f77d30cdf3fb4884.jpg"],
		"types": ["极地灰", "戈壁黄", "深海蓝"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/4c409ac170dafe286e2cbd918b30a388.jpg", "http://yanxuan.nosdn.127.net/7c4147de069c1c7d819711e683fae373.jpg", "http://yanxuan.nosdn.127.net/7d4be2d9edd8481dfa51cc7b86a90b36.jpg", "http://yanxuan.nosdn.127.net/61be18dbb282646133551c2bc297fb36.jpg", "http://yanxuan.nosdn.127.net/7160604c5bd97a0f1aef7f3a2a32b72b.jpg", "http://yanxuan.nosdn.127.net/32c5969b18a85bc62d4a855c40ab6142.jpg", "http://yanxuan.nosdn.127.net/62189479f43fd283340ce0fad3706b00.jpg", "http://yanxuan.nosdn.127.net/f39cb441e6778d5d39510099f8befd3a.jpg", "http://yanxuan.nosdn.127.net/6bbb06c48c23cdf11fd93f711512eed7.jpg", "http://yanxuan.nosdn.127.net/c0701aef423ba84cb1aabe8d6a1ab8d8.jpg", "http://yanxuan.nosdn.127.net/4dec1e3bf4d5812d7d9fbddf50657e73.jpg", "http://yanxuan.nosdn.127.net/44497f9ad25cb6d208cc564016c8fd54.jpg", "http://yanxuan.nosdn.127.net/37de0870b61ed6e880936d22000c2e85.jpg", "http://yanxuan.nosdn.127.net/97906141bd8846ea9e7888fa8a6b4ae0.jpg", "http://yanxuan.nosdn.127.net/db23e00419f012686aaf4b3eeecae09b.jpg"],
		"inventory": [619, 114, 97],
		"information": [{
			"attrName": "产地",
			"attrValue": "印度"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 27729-2011"
		}, {
			"attrName": "尺寸",
			"attrValue": "160*230cm"
		}, {
			"attrName": "工艺",
			"attrValue": "手工枪刺"
		}, {
			"attrName": "温馨提示",
			"attrValue": "1：羊毛材质存在一点羊骚味实属正常情况，建议开窗通风，多散散味道即可。2：羊毛地毯刚刚开始使用的时候多多少少都会有一点掉毛的情况，建议开始使用的时候用吸尘器多吸几次，之后掉毛的情况就会有改善。 3：因为天然羊毛材质，所以脚感会有一点点刺，不属于产品质量问题。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 129,
		"date": "1500012501729",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1134022,
		"price": 79,
		"topName": "清新趣粉防滑浴垫",
		"subName": "清新跃动，舒适脚感",
		"shortDescription": ["超细绒面", "至柔吸水", "纤维强韧", "不易脱毛", "简约拼接", "清新悦目"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/8e6246a84efda4dd6a3e760613c86e0a.jpg", "http://yanxuan.nosdn.127.net/054285710ac87a2ca6b5e88d7f1affad.jpg", "http://yanxuan.nosdn.127.net/1e3bbdfefad9040efed003f425fe6bd5.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a2b7489b4a2b1c09b66464cede4dabd7.png", "http://yanxuan.nosdn.127.net/64be227c6953e0bcf44a496aabd0d83f.jpg", "http://yanxuan.nosdn.127.net/ce9f1dfb57b8867361dab7afcc7c8fa1.jpg", "http://yanxuan.nosdn.127.net/4eb77d3e6a9d94899bad5230d189c74f.jpg", "http://yanxuan.nosdn.127.net/93966bbbe3f80a41c47580d83a115741.jpg"],
		"types": ["86x61cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/d68e182e560941e807d33431ad82452e.jpg", "http://yanxuan.nosdn.127.net/758e12cde995bc722cbab81644c29f60.jpg", "http://yanxuan.nosdn.127.net/3b2cadfcad57975bc4b8ad4cb53ebbad.jpg", "http://yanxuan.nosdn.127.net/4600c0173de7dfa48d2c7d278667312f.jpg", "http://yanxuan.nosdn.127.net/3e766cfe5d9f6cf74390e37c271c5193.jpg", "http://yanxuan.nosdn.127.net/97d7a034074e100db15b1c94f9f4308f.jpg", "http://yanxuan.nosdn.127.net/d78fd7ec09228ed93358f187b6c12398.jpg", "http://yanxuan.nosdn.127.net/00960ca0bd8f388fc52a493f39beac38.jpg", "http://yanxuan.nosdn.127.net/bb505efadcd8bb19d88b7ec1d86d5ade.jpg", "http://yanxuan.nosdn.127.net/90ebd0a8cdd8a256b36fd26b2717a655.jpg", "http://yanxuan.nosdn.127.net/7f391c39a3455577651ea1b2f7bb4832.jpg", "http://yanxuan.nosdn.127.net/d153c03f2acc1e3062b507c135b309d6.jpg", "http://yanxuan.nosdn.127.net/a9b6a5e8636dbfaa875b94c0221bf001.jpg", "http://yanxuan.nosdn.127.net/dc971a8f5c766e3dd9f36fdfe6f9afd3.jpg", "http://yanxuan.nosdn.127.net/63dd064c791211bda9f0dfcf0bfe0db7.jpg", "http://yanxuan.nosdn.127.net/15ecb7b4d9f3142a073eacd5506c0a2c.jpg", "http://yanxuan.nosdn.127.net/278235956b0cd9a3aab8933c63c923c4.jpg", "http://yanxuan.nosdn.127.net/84bc90dec0c6f6049a79622f7b9ef83c.jpg", "http://yanxuan.nosdn.127.net/9707c4a9a76f0432bb7c2d03b72f9582.jpg", "http://yanxuan.nosdn.127.net/a3e75d69e0a16177a5b22a07ce0f39f2.jpg", "http://yanxuan.nosdn.127.net/8ea585974061d0c9cc858bf5927f79cd.jpg", "http://yanxuan.nosdn.127.net/aab2d28c54f55eddfeffb9fc7dc5e410.jpg", "http://yanxuan.nosdn.127.net/a9500f694389ca250f09b4f60d1be4f8.jpg", "http://yanxuan.nosdn.127.net/a8f76b4a92255fdcccd1015476cf05b3.jpg", "http://yanxuan.nosdn.127.net/2247af207eb3872a7057f0d3dd0a9033.jpg", "http://yanxuan.nosdn.127.net/b5b557985c26db27b73161505ee5d768.jpg", "http://yanxuan.nosdn.127.net/c16b77cdd7e12a597e2b8508cfc1e3e1.jpg", "http://yanxuan.nosdn.127.net/1cf32a0024e223dd7e3953f642da5f4f.jpg", "http://yanxuan.nosdn.127.net/594dca141f011e7cab4af1f7a19e19f7.jpg", "http://yanxuan.nosdn.127.net/a52b1804711993bd96cdc9ca1ffcd10b.jpg", "http://yanxuan.nosdn.127.net/800bf6fc99f89ee6f0f8155fbd9accdb.jpg", "http://yanxuan.nosdn.127.net/55133777a4a7e79c0b13d31a81c077cc.jpg", "http://yanxuan.nosdn.127.net/0c5a4faf6e647754c6e364dfc4d5cbad.jpg", "http://yanxuan.nosdn.127.net/18792955e7170d770c0f1cd559baee64.jpg", "http://yanxuan.nosdn.127.net/2113fedc915eca6a7655f77d16f3a620.jpg", "http://yanxuan.nosdn.127.net/4df06a31810e04bc083b71896ce9a326.jpg", "http://yanxuan.nosdn.127.net/29ce24ea1f9ba8c078b31aeaded6aa08.jpg", "http://yanxuan.nosdn.127.net/38e3bf328e84f4047a6d5fd4f66ac445.jpg", "http://yanxuan.nosdn.127.net/956559986a2e62e87e6ba423964cd0f9.jpg", "http://yanxuan.nosdn.127.net/e79f219a7f9bbb98cbc7120a1699881e.jpg", "http://yanxuan.nosdn.127.net/88ef1b4cc27eec82cbd38251be88f091.jpg", "http://yanxuan.nosdn.127.net/7261638f3f3a7287f150a20afdf4b66a.jpg", "http://yanxuan.nosdn.127.net/ebe2fcb1f43d47d335f139611bde77f2.jpg", "http://yanxuan.nosdn.127.net/7a153e2aaff1060fae1fd6ec41fdef9c.jpg"],
		"inventory": [789],
		"information": [{
			"attrName": "颜色",
			"attrValue": "多色条纹"
		}, {
			"attrName": "尺寸",
			"attrValue": "86*61cm"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "执行标准",
			"attrValue": "QB/T 3000-2008"
		}],
		"label": "",
		"manufacture": "",
		"sale": 611,
		"date": "1500012504383",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1035006,
		"price": 69,
		"topName": "全棉单面割绒浴室地垫",
		"subName": "手工制作，纯棉材质，柔软舒适",
		"shortDescription": ["全棉材质", "松软吸水", "簇绒工艺", "层叠柔软", "活性印染", "安心健康"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1de0603729ccf75fbe05fe6a26e83009.jpg", "http://yanxuan.nosdn.127.net/a69fbc4ee071cd8b565b1272550103e5.jpg", "http://yanxuan.nosdn.127.net/32024b7f172f9cb15025bc01839846a3.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ee92704f3b8323905b51fc647823e6e5.png", "http://yanxuan.nosdn.127.net/da263f1716b141df0339ea6b8176ce6f.jpg", "http://yanxuan.nosdn.127.net/873f61c908523bc4257a4b511e9e422f.jpg", "http://yanxuan.nosdn.127.net/ecc95cf18f99dee5bfe65f016fa8535f.jpg", "http://yanxuan.nosdn.127.net/80ef121faf019295c15d73ee8cf35425.jpg"],
		"types": ["长61*宽43cm", "长86*宽53cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/39cba017dbf04371863ec3af894cb79c.jpg", "http://yanxuan.nosdn.127.net/727bdb71768265b3c283b2d71ad63d8d.jpg", "http://yanxuan.nosdn.127.net/5b7eb8df6b30b61ff8326a5882bbf411.jpg", "http://yanxuan.nosdn.127.net/5143f756b613c2523954affbdf514a05.jpg", "http://yanxuan.nosdn.127.net/5a6879162b60e2442036c6c5d88275e8.jpg", "http://yanxuan.nosdn.127.net/d65d49dfd73f6b44d8e1b971df58ec1c.jpg", "http://yanxuan.nosdn.127.net/630c9a177eb89c044d4c968745fce915.jpg", "http://yanxuan.nosdn.127.net/1597a314b6ae69f361f4f1fbc2ed876c.jpg", "http://yanxuan.nosdn.127.net/5cfcfff37b305dcc44d9a907377761f1.jpg", "http://yanxuan.nosdn.127.net/27dd23d01d9d110ebb11c92fa087e208.jpg", "http://yanxuan.nosdn.127.net/366f5281836ad5b3a06afe4ace14d2bb.jpg", "http://yanxuan.nosdn.127.net/5cdd2229692184db4793f68ca2d1c307.jpg", "http://yanxuan.nosdn.127.net/999c7854dff1496c2702c510b8c6586d.jpg", "http://yanxuan.nosdn.127.net/7097f2a9c69c4f337ab9ff961276cf0a.jpg", "http://yanxuan.nosdn.127.net/7d6ad8caac9c24f024b9525e492dde1d.jpg", "http://yanxuan.nosdn.127.net/1005834f8ac736dc7bc5c59cfab0ce01.jpg", "http://yanxuan.nosdn.127.net/342365052bc031f64050c0d117786de1.jpg", "http://yanxuan.nosdn.127.net/6bdb057b4b109ad39368d337b26fcef0.jpg", "http://yanxuan.nosdn.127.net/4c764541e44c1bfe9308c4be9ba70eb8.jpg", "http://yanxuan.nosdn.127.net/4e4dafc25a731ccf56b1296e9889530d.jpg", "http://yanxuan.nosdn.127.net/0aae3c93d54fd9a25fc0d297e0cf856e.jpg", "http://yanxuan.nosdn.127.net/4d3f4adea81508c83148517b12b3963f.jpg", "http://yanxuan.nosdn.127.net/a7f792a547c9f534fd4bd00c88fe734c.jpg", "http://yanxuan.nosdn.127.net/41541dc15fbb715ed5311d4343516a6e.jpg", "http://yanxuan.nosdn.127.net/267175ffcb24b51250f642b31cadd977.jpg"],
		"inventory": [812, 95],
		"information": [{
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "尺寸",
			"attrValue": "长61*宽43cm / 长86*宽53cm"
		}, {
			"attrName": "工艺",
			"attrValue": "手工制作"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 26850-2011"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纯棉材质在织造染色过程中，表面不可避免会产生微细的纤维浮绒，使用前清水漂洗1-2次，即可去掉浮绒。不属于产品质量问题。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 903,
		"date": "1500012506935",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135057,
		"price": 199,
		"topName": "梦幻系简约轻透莹白纱帘",
		"subName": "轻透柔软纱 朦胧细纹肌理",
		"shortDescription": ["成品窗帘", "3步选购", "轻透莹白", "百搭透光", "不含甲醛", "安心舒享"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b10794eb049950eb418de0448f9311a6.jpg", "http://yanxuan.nosdn.127.net/155b087d14048bd16995fdb4f95d1c8d.jpg", "http://yanxuan.nosdn.127.net/39e72d03f0d1e692fc7e706293a86387.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/98c5e80b8e328687ce9c949314ebc41d.png", "http://yanxuan.nosdn.127.net/86755475669812cad499b1611ea8f3e3.jpg", "http://yanxuan.nosdn.127.net/1521ee48cff67a3d5170b393179d8032.jpg", "http://yanxuan.nosdn.127.net/28aa5ccf88a314821b0e0efe25bbd356.jpg", "http://yanxuan.nosdn.127.net/0b18fd03be66943110e1541f2cdd1dd1.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/31d4782de8c23698ea882790615ceb70.jpg", "http://yanxuan.nosdn.127.net/dcf0d3ad3daab59aee4f168be0b5eb57.jpg", "http://yanxuan.nosdn.127.net/bfc3372d58c83b0c53e24cd82f2903c8.jpg", "http://yanxuan.nosdn.127.net/4f2d5fe9af1eb78fb1cd0d66a1b493f6.jpg", "http://yanxuan.nosdn.127.net/5e8200363eac8597fcd639a71024b1e4.jpg", "http://yanxuan.nosdn.127.net/6726397e6094bba9ce061e95b1846f45.jpg", "http://yanxuan.nosdn.127.net/0a8def5b07d09072ff4cc189930c0758.jpg", "http://yanxuan.nosdn.127.net/c0d458bd457669493e63fd7f17af99ca.jpg", "http://yanxuan.nosdn.127.net/e25ea4b5e75c25171aee76f92c83b8c8.jpg", "http://yanxuan.nosdn.127.net/3c6887f5c5766b4f78ef4dc203aba3ed.jpg", "http://yanxuan.nosdn.127.net/e010b9fba9ac3c17779ed48c17408758.jpg", "http://yanxuan.nosdn.127.net/ed93c137bf952b7afee5c4d65b46ba89.jpg", "http://yanxuan.nosdn.127.net/3549be8b397fa0ad777e720c9404b247.jpg", "http://yanxuan.nosdn.127.net/c5423dd84d8eecd460a9d89f5bf3e53f.jpg", "http://yanxuan.nosdn.127.net/af8f7852650f6f2b2ee289fe913bc07e.jpg", "http://yanxuan.nosdn.127.net/3c19d77f0afb9b5a13040116d5610609.jpg", "http://yanxuan.nosdn.127.net/7baa048e9c213aed2a957b94024c2c85.jpg", "http://yanxuan.nosdn.127.net/05ce1ca0d5d0b371c0072b7e2fb11cb1.jpg", "http://yanxuan.nosdn.127.net/9dfd44302228bdca8d9224731c407246.jpg", "http://yanxuan.nosdn.127.net/0357d912a53cd473d8b1e0f69b1ea6fc.jpg", "http://yanxuan.nosdn.127.net/7b704fa80a654332a218dc33add254e9.jpg", "http://yanxuan.nosdn.127.net/a9a27bf614093785623f69a3fa9d2d1e.jpg", "http://yanxuan.nosdn.127.net/1f08097c4a6aa18f140b60b5cd8a4ff2.jpg", "http://yanxuan.nosdn.127.net/f9d9be3425af175c608c6155b11a0be5.jpg", "http://yanxuan.nosdn.127.net/3e55aa14b2c550d581919cf5a2fe354a.jpg", "http://yanxuan.nosdn.127.net/1327ac2baa465be1a4c33a84e470624b.jpg", "http://yanxuan.nosdn.127.net/c28c5d4491d0cfe7a4061174a2867d40.jpg", "http://yanxuan.nosdn.127.net/bd229ff5224a9d29353db98a1e045713.jpg", "http://yanxuan.nosdn.127.net/11796cc21318351ea7b2ec6ab9fc8c9f.jpg", "http://yanxuan.nosdn.127.net/8e902d10746259098aca8a7b6456fbd4.jpg", "http://yanxuan.nosdn.127.net/350364fbc3204e450797fcabb3ae42ca.jpg", "http://yanxuan.nosdn.127.net/9d9503668f58a73f724cae41942f0af3.jpg", "http://yanxuan.nosdn.127.net/6a206d9f7fbaf0ae8cb16bdc876291e5.jpg", "http://yanxuan.nosdn.127.net/9a34a942f912570b8ef41274d264be60.jpg", "http://yanxuan.nosdn.127.net/45d9f4a716267649be3491b28e06d1c9.jpg", "http://yanxuan.nosdn.127.net/830b2d213227f1fd9d624a1e916fdef4.jpg", "http://yanxuan.nosdn.127.net/5603412b2dbe1e10c956dc91cf76b370.jpg", "http://yanxuan.nosdn.127.net/89fbe6d0639ad5bdb74ef93882e7afa2.jpg", "http://yanxuan.nosdn.127.net/b1880b65de1dc5b6c95cc4a7771c278e.jpg", "http://yanxuan.nosdn.127.net/fa5dedbfbd6b4fa87924fc1bc5df00c1.jpg", "http://yanxuan.nosdn.127.net/67b69efc10c27e88370aaeb6be7274e6.jpg", "http://yanxuan.nosdn.127.net/ca5c1e3b35c18dab1b27d31849198dd8.jpg", "http://yanxuan.nosdn.127.net/5c5cf3ec9fbfe17c2181d0a5e6d90059.jpg", "http://yanxuan.nosdn.127.net/cedb482b0cc4fbbd41a505f3536f2a2f.jpg", "http://yanxuan.nosdn.127.net/15ae020497e04ea71748947d8025daff.jpg", "http://yanxuan.nosdn.127.net/ad2fcf7680fff19581ac0d084485f5c0.jpg", "http://yanxuan.nosdn.127.net/e33638eb3adac14df638bd192c91ca45.jpg", "http://yanxuan.nosdn.127.net/9bf5cea029229e76ef03fe83845a962d.jpg", "http://yanxuan.nosdn.127.net/523ce03837a083f019b2ca7061d46821.jpg", "http://yanxuan.nosdn.127.net/f08006918285cf876a6ea0d06fcecb66.jpg", "http://yanxuan.nosdn.127.net/d03a7abbeec4df62031793c7bb1fdb45.jpg", "http://yanxuan.nosdn.127.net/d52f061b3fef2625679cd4a5f9ab5ec8.jpg", "http://yanxuan.nosdn.127.net/ebd394d6d62976a201e3ef5f8e53f787.jpg", "http://yanxuan.nosdn.127.net/6a82c194d897877afdecc201012f5dd3.jpg", "http://yanxuan.nosdn.127.net/d4f88f7cc11363464163a20cdef4c9a4.jpg", "http://yanxuan.nosdn.127.net/f55bccb4fac0dfbec8e6f8632fe4e060.jpg", "http://yanxuan.nosdn.127.net/17f1aea8a076a53d89d24485032eca2f.jpg", "http://yanxuan.nosdn.127.net/3660def35dd99162381f4b39660dea1e.jpg", "http://yanxuan.nosdn.127.net/997c1f4cfb7ccb815f176aea5825d2d7.jpg", "http://yanxuan.nosdn.127.net/e38afdb079574cefd0c4dc2fb9b4332f.jpg", "http://yanxuan.nosdn.127.net/30363f765b10be4474dd08ce35c9f4f9.jpg", "http://yanxuan.nosdn.127.net/849f1adeeabdb46d35f2f08a9e85b164.jpg", "http://yanxuan.nosdn.127.net/e5b20e4c45c86e2da8e1d10784fd6fa8.jpg", "http://yanxuan.nosdn.127.net/aea6852941d775c027e2cd94a6da93d1.jpg", "http://yanxuan.nosdn.127.net/b8f30d0fb9fdd8a5961079951022c7c4.jpg", "http://yanxuan.nosdn.127.net/8d6eb9338f592e4dd1b3f73f14f830e9.jpg", "http://yanxuan.nosdn.127.net/31dd0e5a25b229b23ff6e69fee0bbf66.jpg"],
		"inventory": [795, 404, 920, 251, 393, 844],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "颜色",
			"attrValue": "莹白"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}],
		"label": "",
		"manufacture": "",
		"sale": 840,
		"date": "1500012509592",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135052,
		"price": 259,
		"topName": "日式简约素色窗帘",
		"subName": "日式极简美学 舒适棉麻质感",
		"shortDescription": ["成品窗帘", "3步选购", "极简主义", "性冷淡风", "活性染料", "不含甲醛"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fbd4bf52f4f8e3a3af7bfa64071c2a3f.jpg", "http://yanxuan.nosdn.127.net/5b39072b613b003f3eead84639f41d09.jpg", "http://yanxuan.nosdn.127.net/45028ae7ab8a89d8ead1c162435e4414.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/63f5da1f5363af43aa91864bf66af48e.png", "http://yanxuan.nosdn.127.net/4a052c9a96ef8f424ddb35e6a1dae822.jpg", "http://yanxuan.nosdn.127.net/1ad1192c393500a7d6e31036af44b0aa.jpg", "http://yanxuan.nosdn.127.net/de46fc2984dea187c6d95036a3ca7852.jpg", "http://yanxuan.nosdn.127.net/e3fc3ff866a0ac4d588f890cdc45ab20.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/e0bc04861dc0b1d5ba84a94aa86eccaf.jpg", "http://yanxuan.nosdn.127.net/120c00a8dc33b0a8179773afb8e0eb99.jpg", "http://yanxuan.nosdn.127.net/33e9ead328611b898240bca3f8e27320.jpg", "http://yanxuan.nosdn.127.net/ebe2432b70fd226ad8da616da514466e.jpg", "http://yanxuan.nosdn.127.net/f33bcd0b9ff8909d01634c561a729e6c.jpg", "http://yanxuan.nosdn.127.net/59fad0b86291d19617d9130a5ef74669.jpg", "http://yanxuan.nosdn.127.net/e9a071eed30331753f78fd8f568936a5.jpg", "http://yanxuan.nosdn.127.net/984aa7a2517a59b57dcbbf7cdada814d.jpg", "http://yanxuan.nosdn.127.net/1d09395a3b99e760159affa7da1ee736.jpg", "http://yanxuan.nosdn.127.net/fa255bbf41e8db64b99b284f3b052397.jpg", "http://yanxuan.nosdn.127.net/f3f853e8e8fb450749f5145e2e00bde2.jpg", "http://yanxuan.nosdn.127.net/418441244ab7f414c1ebe9cb066a9003.jpg", "http://yanxuan.nosdn.127.net/e1cd67951c3467f832ee76a4a8832dab.jpg", "http://yanxuan.nosdn.127.net/8877a8c0fceac1266906c29664100fd9.jpg", "http://yanxuan.nosdn.127.net/10a4641128c400e72a7e2d16b089ede3.jpg", "http://yanxuan.nosdn.127.net/28f581b713b1d1b4403edf38e41b28e3.jpg", "http://yanxuan.nosdn.127.net/e11e3b10787dd0890392282463d4ce25.jpg", "http://yanxuan.nosdn.127.net/b12739e6eff11999d276ac9903bd1aac.jpg", "http://yanxuan.nosdn.127.net/3107f8363b806ac7120f26708d0f7ee3.jpg", "http://yanxuan.nosdn.127.net/e91c2c50216f5642346f2311900a7483.jpg", "http://yanxuan.nosdn.127.net/863d2b88b27dc86604aab4bead246583.jpg", "http://yanxuan.nosdn.127.net/58a6a97332ab975aa005190f97181f5b.jpg", "http://yanxuan.nosdn.127.net/28638b6d7fb448f60aa5601a48b12703.jpg", "http://yanxuan.nosdn.127.net/8b8f70ca15f1cfe8717c5b201621cc24.jpg", "http://yanxuan.nosdn.127.net/b9fb672feef41eceea78ba2932d9ca67.jpg", "http://yanxuan.nosdn.127.net/a7305a22993e53c0040f7744ce4b3d48.jpg", "http://yanxuan.nosdn.127.net/01f3d4126e8b52257379d13bfaa049db.jpg", "http://yanxuan.nosdn.127.net/5fefb166bbb228ea95d0eee42005f7be.jpg", "http://yanxuan.nosdn.127.net/17aa9e29bd78123e09a061b4ade9ae56.jpg", "http://yanxuan.nosdn.127.net/3cb5b49aaf35f9013f32ca416d7b762a.jpg", "http://yanxuan.nosdn.127.net/6a2bb4f54dd1dcbd8b0eddca5c5396e0.jpg", "http://yanxuan.nosdn.127.net/ee7e23f6c958d0574572ab9160b8c88a.jpg", "http://yanxuan.nosdn.127.net/ae11f48815b68664d2f24eed2157312f.jpg", "http://yanxuan.nosdn.127.net/ccbee739a357e28457b41bbf54536462.jpg", "http://yanxuan.nosdn.127.net/c52be3d44db38e6cd7bfab953e4c61c5.jpg", "http://yanxuan.nosdn.127.net/ab16a5af4895cfd8eaaeb00ff9147a34.jpg", "http://yanxuan.nosdn.127.net/75580198e8067790eda0db99e456aa2c.jpg", "http://yanxuan.nosdn.127.net/d7a5475292f2ecedeb71d6212ccc215d.jpg", "http://yanxuan.nosdn.127.net/e80437232fbeadff26aa18f83766b0a3.jpg", "http://yanxuan.nosdn.127.net/0ece24c6ecdb0abe558113db90b0075e.jpg", "http://yanxuan.nosdn.127.net/a301ad44fe4fd83c0c49bca4037ea472.jpg", "http://yanxuan.nosdn.127.net/57330c5331a3292b88d54616364c0b5f.jpg", "http://yanxuan.nosdn.127.net/4e4de0ac7b9dd61339b0d975898a8cb6.jpg", "http://yanxuan.nosdn.127.net/2149ddd8bf3638b3bee10bba080c7c89.jpg", "http://yanxuan.nosdn.127.net/f52689d636760fed563ec92a6038942f.jpg", "http://yanxuan.nosdn.127.net/7a5f22da4bfcee7efe529bc8f47af20d.jpg", "http://yanxuan.nosdn.127.net/0d08b3b0a8e89409022892ed7815bd7b.jpg", "http://yanxuan.nosdn.127.net/47ee654537bbb4233675ab80f2d15c01.jpg", "http://yanxuan.nosdn.127.net/35165faa02ac188b0f39e461140f3a78.jpg", "http://yanxuan.nosdn.127.net/2b36ca2e5af394bcd4d0ed63559c8434.jpg", "http://yanxuan.nosdn.127.net/0f16e23d63cabd0f2dab3e80c28335c7.jpg", "http://yanxuan.nosdn.127.net/c942c52e27b6939ed606c8d33d623a7e.jpg", "http://yanxuan.nosdn.127.net/a4c3376c3bdb934bcc55b023e946ea7c.jpg", "http://yanxuan.nosdn.127.net/fc28807aeaae8aae10eec13a69e28e29.jpg", "http://yanxuan.nosdn.127.net/c9310a72460b961d2b8746033c5ff8c9.jpg", "http://yanxuan.nosdn.127.net/8fc34e633618ca6fceb65fd413639246.jpg", "http://yanxuan.nosdn.127.net/cb73d3eb5fc85fac0dc3c487c66af78b.jpg", "http://yanxuan.nosdn.127.net/63b1d5575e0c481cbba6b8f89d268273.jpg", "http://yanxuan.nosdn.127.net/407d755be987be37218e4611585af412.jpg", "http://yanxuan.nosdn.127.net/9a22b2d2654305a2ea5375e56da70c3f.jpg", "http://yanxuan.nosdn.127.net/ec98540efa61912d2f6b54bb90f71330.jpg", "http://yanxuan.nosdn.127.net/d47c0fe30ce9517fd772d0d24027cd96.jpg", "http://yanxuan.nosdn.127.net/2017a5fb3c3bf79a9b404ea108d8c983.jpg", "http://yanxuan.nosdn.127.net/fe54761c4013a12a6b0845a4b27087fb.jpg", "http://yanxuan.nosdn.127.net/4bf5b09b24e4f2562db1d21980765e87.jpg", "http://yanxuan.nosdn.127.net/c5213ab0178172c7c9df7e8082fb6132.jpg", "http://yanxuan.nosdn.127.net/4d4a6bcba4bec137043d2a1b1a19d54a.jpg", "http://yanxuan.nosdn.127.net/688fe5042368f402a8feb68251037ccf.jpg", "http://yanxuan.nosdn.127.net/81e9020031e55cc3dc1a89dae9cdc88c.jpg", "http://yanxuan.nosdn.127.net/64e7c4fde3ce18e2496f0dc135cfa7cb.jpg", "http://yanxuan.nosdn.127.net/25e18d07ab8613ec46ec9561b56359fe.jpg", "http://yanxuan.nosdn.127.net/068708af49a9acc16ba2342f2587aa2c.jpg", "http://yanxuan.nosdn.127.net/502fcd57a6b4e56e3a5c50271e43ea1b.jpg", "http://yanxuan.nosdn.127.net/002dbdef7d3441baab635aba3c8941a5.jpg"],
		"inventory": [76, 62, 31, 32, 223, 33],
		"information": [{
			"attrName": "颜色",
			"attrValue": "深卡其/ 米灰/ 灰蓝/ 粉橙"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "物理遮光率",
			"attrValue": "60%-70%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 743,
		"date": "1500012512309",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135051,
		"price": 299,
		"topName": "日式素雅纯色流星纹窗帘",
		"subName": "日式素雅设计 流星纹简约肌理",
		"shortDescription": ["成品窗帘", "3步选购", "日式简约", "素雅纯色", "活性染料", "不含甲醛"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/12c9be06d60b6f59d04ad63044db1cd6.jpg", "http://yanxuan.nosdn.127.net/acde2fd1fce421c5398ba71b1f4a8f37.jpg", "http://yanxuan.nosdn.127.net/7734a27e8bfaf1f63885c165d9972ae2.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png", "http://yanxuan.nosdn.127.net/f3ab20a6f488fdfdadd15402f07b1794.jpg", "http://yanxuan.nosdn.127.net/9afed203129a696d682eb005fdf980ed.jpg", "http://yanxuan.nosdn.127.net/6436743044528b017ea8b40a276dde7d.jpg", "http://yanxuan.nosdn.127.net/7b2f3a9be300acdcb580fe75620d8133.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/e4652c73d560ff4334d2db20d801c64e.jpg", "http://yanxuan.nosdn.127.net/e5e838df3e617f35feb868edc832c206.jpg", "http://yanxuan.nosdn.127.net/3abd8a8df38597a029c58e3a1ce6fdbf.jpg", "http://yanxuan.nosdn.127.net/8360d0916dbe3011d421a4bf0174c03f.jpg", "http://yanxuan.nosdn.127.net/90df366d47d5fee216fb94254dad5397.jpg", "http://yanxuan.nosdn.127.net/838e75b6ab947d0dd09e5764780ac463.jpg", "http://yanxuan.nosdn.127.net/3b98d91b2f41841feceb6179c622f29d.jpg", "http://yanxuan.nosdn.127.net/9747b404b5b7d6563863d953e3574014.jpg", "http://yanxuan.nosdn.127.net/79c4caa8642a6402e55502b323b603dc.jpg", "http://yanxuan.nosdn.127.net/bdced41d8027768e732a3b76eff5645a.jpg", "http://yanxuan.nosdn.127.net/b1d5389c1f81d8d78f5718c221ae43c8.jpg", "http://yanxuan.nosdn.127.net/8987e24934f5fe9e17a29444b904d0c5.jpg", "http://yanxuan.nosdn.127.net/c2ef7f18d277d663c9fd5dfe460aa423.jpg", "http://yanxuan.nosdn.127.net/4e16d77f9243c53fdb8824e072b2b79f.jpg", "http://yanxuan.nosdn.127.net/d426aa2b2b4c3dd18b920eaf66f2c03c.jpg", "http://yanxuan.nosdn.127.net/f5e51d743c51d26b26d67b9cf2bbf14e.jpg", "http://yanxuan.nosdn.127.net/b089d30b44f2c421b7ec7b2e676278f0.jpg", "http://yanxuan.nosdn.127.net/9538fbb575694957a5909a9cc5b596ca.jpg", "http://yanxuan.nosdn.127.net/7f0683943df381c421d3d1f10e47851a.jpg", "http://yanxuan.nosdn.127.net/5fc570b7f748bece51b4a9ab2984cdf5.jpg", "http://yanxuan.nosdn.127.net/c316336ab5216afdd81e99804cc859a3.jpg", "http://yanxuan.nosdn.127.net/71f2109b87d7b90fad27a8ee4dc36c35.jpg", "http://yanxuan.nosdn.127.net/5df4f132c7fe9df8e93b4881067ccb6b.jpg", "http://yanxuan.nosdn.127.net/25deafa726aa76ef477b53a038834d2e.jpg", "http://yanxuan.nosdn.127.net/ea7649121354ea213e524f9770d0af1d.jpg", "http://yanxuan.nosdn.127.net/3105b06a76d5fa56ed969f1e7b6423e9.jpg", "http://yanxuan.nosdn.127.net/f7cbca95716e4cbfcb8193d17e15c53d.jpg", "http://yanxuan.nosdn.127.net/06008400aaa4e9e9dbe6e674d6bbadbc.jpg", "http://yanxuan.nosdn.127.net/c7aef06a6229d31160bc631b0c5099e1.jpg", "http://yanxuan.nosdn.127.net/2f555e7f68d41567e088a4bd2a7f291c.jpg", "http://yanxuan.nosdn.127.net/121feecbb458a79e1e66e9abd00b6c35.jpg", "http://yanxuan.nosdn.127.net/b2557612420708d5c3139a654aa12865.jpg", "http://yanxuan.nosdn.127.net/fa6d100ed0406fe6502a36bddb6ff1b8.jpg", "http://yanxuan.nosdn.127.net/37b91e80047294cdec2443aefe68ce6f.jpg", "http://yanxuan.nosdn.127.net/e2709986ffff0a4174a2ab84b929aaca.jpg", "http://yanxuan.nosdn.127.net/2ba9030612ea03603f0869646c343019.jpg", "http://yanxuan.nosdn.127.net/94e94712034ac8174be97e97497d89b7.jpg", "http://yanxuan.nosdn.127.net/c516dfe7863984740c32aaf1cf4ccde1.jpg", "http://yanxuan.nosdn.127.net/c74c17a201702945484f2730979372e9.jpg", "http://yanxuan.nosdn.127.net/b511a7568aa2af53baedc5fd6e7cb224.jpg", "http://yanxuan.nosdn.127.net/ee7e0a76b891522dbfffd0bd1bb24f8a.jpg", "http://yanxuan.nosdn.127.net/cf11cb7232487a8d9ae3a29fd50b4b88.jpg", "http://yanxuan.nosdn.127.net/8b6a56de6e5eb97b3456613cd5f865ca.jpg", "http://yanxuan.nosdn.127.net/d0bd8faa60b83139b2f0bf2ca6a64b7a.jpg", "http://yanxuan.nosdn.127.net/82a0daf6da518a3f21d9b4ec13989ed2.jpg", "http://yanxuan.nosdn.127.net/208290995d1a9c14a45cebb36950e9de.jpg", "http://yanxuan.nosdn.127.net/522a9f0f1986278587a458f8d986c788.jpg", "http://yanxuan.nosdn.127.net/0bd59ae2a4daa7faf06191170beaa4e0.jpg", "http://yanxuan.nosdn.127.net/31afd2b74c5cfa0a305a51cfa77c4bfa.jpg", "http://yanxuan.nosdn.127.net/838f17e67d1c19f8c9c702c198855ef5.jpg", "http://yanxuan.nosdn.127.net/d8256ad35168ce762490a4d5733ef489.jpg", "http://yanxuan.nosdn.127.net/f5df81cb26aad9e354aa20d781b7f7c2.jpg", "http://yanxuan.nosdn.127.net/3df1aa207667a88258d89dad4dad687e.jpg", "http://yanxuan.nosdn.127.net/d1d5d12b1e1c60729dbf3bffe935056e.jpg", "http://yanxuan.nosdn.127.net/c4b0b1731034f67fc25f0c065f234ba5.jpg", "http://yanxuan.nosdn.127.net/fb97d87fea492ceb8f00dabaa6e9e43d.jpg", "http://yanxuan.nosdn.127.net/cb218a1ac10dfcdd3231a85dbbc3c849.jpg", "http://yanxuan.nosdn.127.net/bdc6c8bf2ce8a3437d8f534bb250c7db.jpg", "http://yanxuan.nosdn.127.net/1e73e7c413b9ceb4cdf002401ba63b83.jpg", "http://yanxuan.nosdn.127.net/c4c6e9e89df4ad4fadda36956aff837f.jpg", "http://yanxuan.nosdn.127.net/2b0eba996caeb05911f7554485381698.jpg", "http://yanxuan.nosdn.127.net/8772d4e7549fedd349a9807b1d0e2e1f.jpg", "http://yanxuan.nosdn.127.net/45e3734a5cc4c17bc68bcaf1ca548833.jpg", "http://yanxuan.nosdn.127.net/e25c25068b14fe7e68d60166e602e0aa.jpg", "http://yanxuan.nosdn.127.net/558dec3b0e97fdfbc62da063a9c9447f.jpg", "http://yanxuan.nosdn.127.net/d8198453599814e6379ac5160c4df988.jpg", "http://yanxuan.nosdn.127.net/11d1c424649ec65134cfbcfbf1b2b92f.jpg", "http://yanxuan.nosdn.127.net/d00a032ee5bd6fb53a162ed6b77b5fb5.jpg", "http://yanxuan.nosdn.127.net/0d80889d9fab2bd4cf4a42e7e6bacde8.jpg", "http://yanxuan.nosdn.127.net/36295c92494ec75f409d635a702d9edc.jpg", "http://yanxuan.nosdn.127.net/80e185f5dd77ca4e3ffab8f14fe76b88.jpg", "http://yanxuan.nosdn.127.net/238f931443ac8b3cf48d6e215f7ff020.jpg", "http://yanxuan.nosdn.127.net/c83158eaf5577b5f58d58b31df60e063.jpg", "http://yanxuan.nosdn.127.net/ddc5203a760c340b9d64b515413b383f.jpg", "http://yanxuan.nosdn.127.net/28129cd0e6c3c33e40909f42c96a3691.jpg"],
		"inventory": [861, 102, 580, 560, 97, 914],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "颜色",
			"attrValue": "米色/ 蓝灰/ 烟灰/ 咖色"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "物理遮光率",
			"attrValue": "80%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 362,
		"date": "1500012515039",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135056,
		"price": 259,
		"topName": "糖果色凹凸条纹儿童房窗帘",
		"subName": "灵动色彩，童趣条纹",
		"shortDescription": ["成品窗帘", "3步选购", "糖果双色", "活泼灵动", "活性染料", "不含甲醛"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d89f989cd6d8bb42781f8ec57ed2b6c6.jpg", "http://yanxuan.nosdn.127.net/582ae85cf3a1090873e2e55e2e046c5a.jpg", "http://yanxuan.nosdn.127.net/08c3f48ab294a4aca10dd654bd456a9b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/536246ca4adb77274a94b18bb2f91f47.png", "http://yanxuan.nosdn.127.net/42d0d0b58137b50c41a472b721817110.jpg", "http://yanxuan.nosdn.127.net/384ab49a469f592b9c3c23bdd1d99456.jpg", "http://yanxuan.nosdn.127.net/a0351b55ae128410718d9abbe048d59d.jpg", "http://yanxuan.nosdn.127.net/05a7288be96a45435fa942dfe73a37c7.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/1088f5a26d2d95d811ffb6db1eb61135.jpg", "http://yanxuan.nosdn.127.net/7b291a6cb44a74893222750f7acbafc5.jpg", "http://yanxuan.nosdn.127.net/5ff293bd1340a55efd3620321f8826af.jpg", "http://yanxuan.nosdn.127.net/3a8dd2886bba2f70e8768769a021acb0.jpg", "http://yanxuan.nosdn.127.net/89b5969bc9d134c6401c7eb4a8d0badb.jpg", "http://yanxuan.nosdn.127.net/183423680ce2854526a12a7fcdf0126d.jpg", "http://yanxuan.nosdn.127.net/c7c0625813d0b6cd437d17b7b2675122.jpg", "http://yanxuan.nosdn.127.net/6a1930f30fa00e8d594012fc3ba8a09c.jpg", "http://yanxuan.nosdn.127.net/dff5202766a7a132a22745331e080f64.jpg", "http://yanxuan.nosdn.127.net/c09aaf0ceff9559e610ad667a901f44e.jpg", "http://yanxuan.nosdn.127.net/41c376604e3f8cbd82721c7ea3964d97.jpg", "http://yanxuan.nosdn.127.net/6ebdc0d7ef0fbdee2910614d69097dc9.jpg", "http://yanxuan.nosdn.127.net/9631457ba5eb3a96cae381adab166848.jpg", "http://yanxuan.nosdn.127.net/78f4bd8f60623c9c703ef0caafff5bab.jpg", "http://yanxuan.nosdn.127.net/5377ca07f3dbc2e37809b67c5d4bf0ce.jpg", "http://yanxuan.nosdn.127.net/6374ff85e7a94993b4aed76c45bbbfcc.jpg", "http://yanxuan.nosdn.127.net/6d3a26ad2ffbf1308ee52042a28d8709.jpg", "http://yanxuan.nosdn.127.net/a29f6b3c6f88bc749b9134008de4a36a.jpg", "http://yanxuan.nosdn.127.net/ee32ee078f281eac70e46caa9bd68ce5.jpg", "http://yanxuan.nosdn.127.net/92ce32d6dd6426ba297e321daee7c509.jpg", "http://yanxuan.nosdn.127.net/bb7d86796e64d2ee3ff0eabb387c320a.jpg", "http://yanxuan.nosdn.127.net/30761e2a5a0f6e9fb6e69240eecfd6af.jpg", "http://yanxuan.nosdn.127.net/cb79a3702b139ffb15fcba6480a293e5.jpg", "http://yanxuan.nosdn.127.net/2da0ae17abdea094b7fcd6ce7a9897ca.jpg", "http://yanxuan.nosdn.127.net/b146c028461c675f6ab14e49e5e5a382.jpg", "http://yanxuan.nosdn.127.net/9a25d3e0c3a7a622d8b03ccf58615619.jpg", "http://yanxuan.nosdn.127.net/b53052e8014ff00cf9b99944ecd96b33.jpg", "http://yanxuan.nosdn.127.net/f9013b5c8273e418928ad5dbd67cd780.jpg", "http://yanxuan.nosdn.127.net/3041df0b06c49f59c3886d16d21a371e.jpg", "http://yanxuan.nosdn.127.net/340cca58bf4efd450d7a8e565080f016.jpg", "http://yanxuan.nosdn.127.net/6aaea69eddcc0c566452d887772bee26.jpg", "http://yanxuan.nosdn.127.net/0f05f68cb20322ea17bf5cdc2eddd4a8.jpg", "http://yanxuan.nosdn.127.net/dbccecd3c4c05b69f67fb28910826b74.jpg", "http://yanxuan.nosdn.127.net/12a1dc9dd4409ce04c5f4b5ae3b4cd16.jpg", "http://yanxuan.nosdn.127.net/9084d7eebc5201b1a474c64dc4cd1905.jpg", "http://yanxuan.nosdn.127.net/89ac9a3fdef079bb206e4f23313e0e8a.jpg", "http://yanxuan.nosdn.127.net/b1293dea1bc2359c9e5276b8f6c01fb3.jpg", "http://yanxuan.nosdn.127.net/110010df84af0bdb15ed27558339ace4.jpg", "http://yanxuan.nosdn.127.net/5409b674d467da71775e467fba7ec54e.jpg", "http://yanxuan.nosdn.127.net/18eefdf84476a04d7d25db0be39d7aaa.jpg", "http://yanxuan.nosdn.127.net/22d76cfdd1904d68407651f2a7838f3a.jpg", "http://yanxuan.nosdn.127.net/6f259df868d8c2dc1e2b9502a71c616b.jpg", "http://yanxuan.nosdn.127.net/300675183317d090a1c7ebbe5baa08ef.jpg", "http://yanxuan.nosdn.127.net/f37b9292b6e43ee0cfb72ae4880ee41a.jpg", "http://yanxuan.nosdn.127.net/4cffbbb3f5e43beb5dc9cdf694af392c.jpg", "http://yanxuan.nosdn.127.net/9826f0d19a7f69af3a54499d6845b9d6.jpg", "http://yanxuan.nosdn.127.net/edb707d8b6c1e5fce542ff9158281bfa.jpg", "http://yanxuan.nosdn.127.net/f4d811b7c15b77b3c4da61b2971ce543.jpg", "http://yanxuan.nosdn.127.net/ed73b2294802c74339ee5abe71e986c5.jpg", "http://yanxuan.nosdn.127.net/ce444388140abe2b8fcd873de450fde9.jpg", "http://yanxuan.nosdn.127.net/251e15ed2898f73e627160d5b9a6f8f7.jpg", "http://yanxuan.nosdn.127.net/a5aef5c30a36b41049700f6b489d6455.jpg", "http://yanxuan.nosdn.127.net/302508a3a81a4441d6663f2c9613d938.jpg", "http://yanxuan.nosdn.127.net/d1949cb25e2a5618b3a1905897669cb1.jpg", "http://yanxuan.nosdn.127.net/4aad5b7bbe1ea47a943b7c37eea27769.jpg", "http://yanxuan.nosdn.127.net/cb4a08b0aebdd54a5c5a85741639d91d.jpg", "http://yanxuan.nosdn.127.net/1176ce072a080f66d30dbaa0a3b0840e.jpg", "http://yanxuan.nosdn.127.net/95616e4b81081da8287371008c37ac78.jpg", "http://yanxuan.nosdn.127.net/79c75154fb117916c1b806ad8f4773c8.jpg", "http://yanxuan.nosdn.127.net/ff278b41e52c5aeb0880c057bd72b55f.jpg", "http://yanxuan.nosdn.127.net/9114682328fa7a55ec9b8204f06bcb41.jpg", "http://yanxuan.nosdn.127.net/60fcc0108de2a6599614e3dbd07d6696.jpg", "http://yanxuan.nosdn.127.net/58f8b66adbe3ac16fcc593c9c92a38b9.jpg", "http://yanxuan.nosdn.127.net/a420c321c262c441378e29af42b8addc.jpg", "http://yanxuan.nosdn.127.net/26c78cc6c727e3753b6b7f620c8ba42a.jpg", "http://yanxuan.nosdn.127.net/e8781b641cf54765354be93e1411c78e.jpg", "http://yanxuan.nosdn.127.net/9baa87692c5181083701d4d5a82be1f0.jpg", "http://yanxuan.nosdn.127.net/c8637b89783046f401a31722654ee9e5.jpg", "http://yanxuan.nosdn.127.net/cabef5de03c5692270ffcf34252d98da.jpg", "http://yanxuan.nosdn.127.net/6b0648a201c24c37fd90b88d48caa109.jpg", "http://yanxuan.nosdn.127.net/346ac9b0b3107b5c7e9a237544048ad8.jpg", "http://yanxuan.nosdn.127.net/6392de7b1e165590a5e3ca5df1fe6914.jpg", "http://yanxuan.nosdn.127.net/ca67befe2e11dde7d6ead2bbc852ac41.jpg", "http://yanxuan.nosdn.127.net/8ee8d8a400e43c610872c226d06871c8.jpg"],
		"inventory": [486, 480, 298, 434, 936, 678],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "颜色",
			"attrValue": "蓝条纹/ 粉条纹"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "物理遮光率",
			"attrValue": "60%-70%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 547,
		"date": "1500012517780",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135055,
		"price": 399,
		"topName": "北欧印象几何条纹混色窗帘",
		"subName": "山形纹提花 北欧简约混色",
		"shortDescription": ["成品窗帘", "3步选购", "北欧简约", "流动几何", "色织提花", "跃动色彩"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/968e58056cbe89717c4a473afa923a3f.jpg", "http://yanxuan.nosdn.127.net/3cb17568daec476e8e1c10c3735e3312.jpg", "http://yanxuan.nosdn.127.net/181744f131aa20f0dedae68fb1635f56.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/87b6a608b99279ebf1764682e9e5fcec.png", "http://yanxuan.nosdn.127.net/c893004aca22660dac6b3edf8e6070cc.jpg", "http://yanxuan.nosdn.127.net/19f4225226cc3d044cdf22fdb5155314.jpg", "http://yanxuan.nosdn.127.net/8fcd82bbd0995d31310c70bb59bab52b.jpg", "http://yanxuan.nosdn.127.net/0e733fc07e89bb025ff5738837cc3d5a.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/3cc548ebe62952d12284d11a0654edd0.jpg", "http://yanxuan.nosdn.127.net/2278796f906003084412f3b66541bae8.jpg", "http://yanxuan.nosdn.127.net/7d2d8362d231954515dd33ce4b3e633a.jpg", "http://yanxuan.nosdn.127.net/44aad50f1c45ed39bfadb7bb1db47338.jpg", "http://yanxuan.nosdn.127.net/09feef12cb6dd978d738488a7bedf1d8.jpg", "http://yanxuan.nosdn.127.net/ae6d208f66f5477f983ffef8a84b3a89.jpg", "http://yanxuan.nosdn.127.net/e0e8bb3136bf0f5b08150c62686a4aa6.jpg", "http://yanxuan.nosdn.127.net/e43f937da874bd3869fe8a4febea930f.jpg", "http://yanxuan.nosdn.127.net/533fc552cb4588b57397b054aa086c31.jpg", "http://yanxuan.nosdn.127.net/5efc000712cc42749d2e0397820cdbf4.jpg", "http://yanxuan.nosdn.127.net/1d19dd4960b4538492e02dd32f3eec1c.jpg", "http://yanxuan.nosdn.127.net/e4e8b1bc9e9a3ae6fd43ec8ee74947ba.jpg", "http://yanxuan.nosdn.127.net/2d77abac54aa2e59dba24c115e89c974.jpg", "http://yanxuan.nosdn.127.net/d39eacb94dfd10f298f05c6c48ac5d2b.jpg", "http://yanxuan.nosdn.127.net/123190bd5c65fd718a2065593bd3be24.jpg", "http://yanxuan.nosdn.127.net/9aa519e9e8ea2b0c421d78b94dab4d19.jpg", "http://yanxuan.nosdn.127.net/4e4d066a7b5ba7a999a55dec323c4333.jpg", "http://yanxuan.nosdn.127.net/a3c2d152b4d5bd3accad5b6d796164da.jpg", "http://yanxuan.nosdn.127.net/ce8d615081e34497bb66b931b37bd3d5.jpg", "http://yanxuan.nosdn.127.net/4562c16a92c27c5c44b208f7d3089b15.jpg", "http://yanxuan.nosdn.127.net/3d51ce35fff5041caf93bffd1b39e9da.jpg", "http://yanxuan.nosdn.127.net/777367b0766c0bf54636ae9c56a16c37.jpg", "http://yanxuan.nosdn.127.net/38dd5ad17e2e14408b4c08b5b1a9f74a.jpg", "http://yanxuan.nosdn.127.net/0f4704c42132b9890df4bdfb00da6561.jpg", "http://yanxuan.nosdn.127.net/9e8c2031ebcd1b17d4948848ec8b15c4.jpg", "http://yanxuan.nosdn.127.net/4dd0f688e26157c27a87d2b87278d39c.jpg", "http://yanxuan.nosdn.127.net/3c4643805464e1fd8216d17ebe970aaf.jpg", "http://yanxuan.nosdn.127.net/997df705651dedf639833aa03fc74873.jpg", "http://yanxuan.nosdn.127.net/ac7975ff0040c1143b2a46adc44305e5.jpg", "http://yanxuan.nosdn.127.net/342fb54a30a291549a552349056574a4.jpg", "http://yanxuan.nosdn.127.net/afd5d307eadc95b62878f51507ff6036.jpg", "http://yanxuan.nosdn.127.net/e749844883292ee40cc83a6a8eb32354.jpg", "http://yanxuan.nosdn.127.net/528631a617958c948e126267409db639.jpg", "http://yanxuan.nosdn.127.net/1bdb012fd9bdb2c83e309537ae54b7c2.jpg", "http://yanxuan.nosdn.127.net/e92cc11f8d3d8e27097bd5b247803da6.jpg", "http://yanxuan.nosdn.127.net/f18bce4c7a77b090ab7da370f04a506f.jpg", "http://yanxuan.nosdn.127.net/0ab7322e0568812f282bd772ccb2e772.jpg", "http://yanxuan.nosdn.127.net/648f847e176c6543619fcd09a19819c5.jpg", "http://yanxuan.nosdn.127.net/11afc252e22cb71264cd6ed9f9fc8ad7.jpg", "http://yanxuan.nosdn.127.net/f89f70349f4635934a90ae7b54dd8b86.jpg", "http://yanxuan.nosdn.127.net/bd50c9bd9d1a2d436013976fd9641f9e.jpg", "http://yanxuan.nosdn.127.net/faf22dade9778275387518c474c3787d.jpg", "http://yanxuan.nosdn.127.net/1d2ae9e7d1b139d1b490d199aa5b7b64.jpg", "http://yanxuan.nosdn.127.net/b8436c67a31b34b85e5a820ad09e87ef.jpg", "http://yanxuan.nosdn.127.net/12fcbce2e9c9d8a095526c2e3efb29d4.jpg", "http://yanxuan.nosdn.127.net/35ce99f1f16fec1eebadb4a7437b68ba.jpg", "http://yanxuan.nosdn.127.net/245d92f31d6b9f9785ec361cd386f1e7.jpg", "http://yanxuan.nosdn.127.net/06ed61e28e930ad481efbf28f5d5812e.jpg", "http://yanxuan.nosdn.127.net/1d1ca46bd748975f85ebbd8c9f710eb3.jpg", "http://yanxuan.nosdn.127.net/c58810291b18df91c0c99e22640074a1.jpg", "http://yanxuan.nosdn.127.net/70334c130d1966d16da4f619c7b3655d.jpg", "http://yanxuan.nosdn.127.net/b1f45334f5fc7dafbf75a530e4b48503.jpg", "http://yanxuan.nosdn.127.net/eb723cfa64ec2dc5348e9ff9f1c48851.jpg", "http://yanxuan.nosdn.127.net/4fb5d3ee70a3101730a315065160e16c.jpg", "http://yanxuan.nosdn.127.net/4f169c26421a45d4a358c632d4e84758.jpg", "http://yanxuan.nosdn.127.net/e5dea53a5217f4943c3640d0e1f79a7f.jpg", "http://yanxuan.nosdn.127.net/d9804e0477e057cdaa6db4667d0db636.jpg", "http://yanxuan.nosdn.127.net/cc90e559ece0be801651280c9b2bf3cb.jpg", "http://yanxuan.nosdn.127.net/9c35055ce6fc5b39053f930d53c31e35.jpg", "http://yanxuan.nosdn.127.net/1281b26f54f70693806f51e844904470.jpg", "http://yanxuan.nosdn.127.net/32b700720cf31003b50e0aa0c75f94cd.jpg", "http://yanxuan.nosdn.127.net/0473b38fb0cb6094508799f3effd2cdf.jpg", "http://yanxuan.nosdn.127.net/2f483535ec4cd7d19324cbe25c8f1322.jpg", "http://yanxuan.nosdn.127.net/a40fcaab34386448bfc1b2e1b5441074.jpg", "http://yanxuan.nosdn.127.net/131a890b93082496a0e9a32be8d3d496.jpg", "http://yanxuan.nosdn.127.net/52b96073aad5ac0f4a93a977253d1a29.jpg", "http://yanxuan.nosdn.127.net/757386421c64a7e52463b5e1f75245a5.jpg", "http://yanxuan.nosdn.127.net/650bfc19a00e1a20653643fa758609f1.jpg", "http://yanxuan.nosdn.127.net/b521155188f8361c37e199b268f4285a.jpg", "http://yanxuan.nosdn.127.net/f5ceae47762ee889cc61108d3a1a8d19.jpg", "http://yanxuan.nosdn.127.net/0fa75b35bcae26ba1578b2ac3792ee61.jpg", "http://yanxuan.nosdn.127.net/87decb3a13de6d1ff10f167d7ed65994.jpg", "http://yanxuan.nosdn.127.net/0b83fbc2bc0c8d15fd9d9911f926a060.jpg", "http://yanxuan.nosdn.127.net/c4afaba6d8b015f74de68f6466273789.jpg"],
		"inventory": [431, 27, 429, 968, 115, 255],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "颜色",
			"attrValue": "米灰几何纹/ 橙灰几何纹/ 蓝灰几何纹"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "物理遮光率",
			"attrValue": "70%-80%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 902,
		"date": "1500012522009",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135053,
		"price": 429,
		"topName": "法式复古山形纹提花窗帘",
		"subName": "轻奢复古，立体提花",
		"shortDescription": ["成品窗帘", "3步选购", "复古提花", "法式优雅", "色织提花", "立体感强"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b3130958fb7aa1627b1821eb9c29a5dc.jpg", "http://yanxuan.nosdn.127.net/fe2a9588d9c0f502dc98b74f79b6518e.jpg", "http://yanxuan.nosdn.127.net/8f0bb6b7126c83535a5fdb95e30aec09.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1f9e34b1aadd14ea0c9c299c530d86ba.png", "http://yanxuan.nosdn.127.net/01578bfc12384b74c0f4ce44f01ee448.jpg", "http://yanxuan.nosdn.127.net/e9764d9aac2a990abe7bac475d5ce116.jpg", "http://yanxuan.nosdn.127.net/9aa7059dc52afc82894e12c05dee3775.jpg", "http://yanxuan.nosdn.127.net/c77e566a855a84f69241d5db0939e160.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/dd2b7ea32c281d23fd40d82ccd68b683.jpg", "http://yanxuan.nosdn.127.net/0317e56d2733488715f5a71719c7ed37.jpg", "http://yanxuan.nosdn.127.net/35e5079bc72a6b4d01c9cf3e3f0b83b5.jpg", "http://yanxuan.nosdn.127.net/14ca02623906149af165f02e397d4be2.jpg", "http://yanxuan.nosdn.127.net/ebbd0da707d0af17c42385b71a1412db.jpg", "http://yanxuan.nosdn.127.net/0815775bd3886a1d6d433910e3472406.jpg", "http://yanxuan.nosdn.127.net/e6a266cf5505a92bc548f27746de4b1a.jpg", "http://yanxuan.nosdn.127.net/eb8342c61c0e8262141afddecadc23a7.jpg", "http://yanxuan.nosdn.127.net/0711d40385dc28ae16fae51d0b86860f.jpg", "http://yanxuan.nosdn.127.net/ebb9ae98e6b7da46233178856d6f1158.jpg", "http://yanxuan.nosdn.127.net/5d421a9202157b5d7d4da5ab1374e901.jpg", "http://yanxuan.nosdn.127.net/8b666d44c1e18356daa5e03aa242ef25.jpg", "http://yanxuan.nosdn.127.net/5ff369109e6f6a3e13f454126c6c9777.jpg", "http://yanxuan.nosdn.127.net/41ca458d3907716cca0e9fb14fff06f5.jpg", "http://yanxuan.nosdn.127.net/c237c4966c8ff6977983a61a568b9869.jpg", "http://yanxuan.nosdn.127.net/6d0170f8a9b421db63fb8771c018c5ba.jpg", "http://yanxuan.nosdn.127.net/0cc188d91862d7d554ce221a484189df.jpg", "http://yanxuan.nosdn.127.net/13266c196b45a8712375fc493376b7fb.jpg", "http://yanxuan.nosdn.127.net/2f54038ae23a2c247db5ed64d035d86d.jpg", "http://yanxuan.nosdn.127.net/bef8217015bfa05e23bfded251a1d842.jpg", "http://yanxuan.nosdn.127.net/7ff2b0787af4b1737c8aa40031d7c95b.jpg", "http://yanxuan.nosdn.127.net/225fbb1baa97383909b805a5a4fff228.jpg", "http://yanxuan.nosdn.127.net/5d9d07e67420de89824a9498e074f2a7.jpg", "http://yanxuan.nosdn.127.net/7fafb60da56d5c2b065dfbcb56cddc4b.jpg", "http://yanxuan.nosdn.127.net/854a8af6813e90262ad7862baa1b9c25.jpg", "http://yanxuan.nosdn.127.net/6cf0c9b8ee11cc6071e26c1e11ffbea9.jpg", "http://yanxuan.nosdn.127.net/ec9db3b94c28f5ee60799ad18dac8da6.jpg", "http://yanxuan.nosdn.127.net/e18694856930dac211ca074aa24b0411.jpg", "http://yanxuan.nosdn.127.net/cac4714d9a1eb585d4bb6a632a79047b.jpg", "http://yanxuan.nosdn.127.net/9816d2f583239d364667b9115081e8a1.jpg", "http://yanxuan.nosdn.127.net/c9d7b023c3905223a28798a2e9c05cf5.jpg", "http://yanxuan.nosdn.127.net/49002e049a28baee5dbc351f44efcb16.jpg", "http://yanxuan.nosdn.127.net/26f2c0127312cb154a31f7ad35980e1b.jpg", "http://yanxuan.nosdn.127.net/59167231cb4374715fe88454d3157141.jpg", "http://yanxuan.nosdn.127.net/90486f52d685efe500ff6800795dcbf9.jpg", "http://yanxuan.nosdn.127.net/5b15f74d46d058d7bcdda7fb28a8e214.jpg", "http://yanxuan.nosdn.127.net/9e08206952d4d3b7eb19f1d7a3164cb3.jpg", "http://yanxuan.nosdn.127.net/e7b6ad28eb591a8f1d5ccc1c5f4c4233.jpg", "http://yanxuan.nosdn.127.net/25278909101383cb7ea0fc8fc43ad7b7.jpg", "http://yanxuan.nosdn.127.net/415e9ff695968a6f60ed6cb900b292fa.jpg", "http://yanxuan.nosdn.127.net/3a70d3d0c9a1f08bf8e4e12cc458e0a7.jpg", "http://yanxuan.nosdn.127.net/dd8b5b2fed95874bfaaa8c5919da1e00.jpg", "http://yanxuan.nosdn.127.net/1d586e9b65450c3bf2ff6972f073829f.jpg", "http://yanxuan.nosdn.127.net/d181238d359fcea2cc9785d9d59461c6.jpg", "http://yanxuan.nosdn.127.net/687619b8a983ca2963295441c1d3a2ed.jpg", "http://yanxuan.nosdn.127.net/4aff5e0a3c7c7e942f7526fc07192191.jpg", "http://yanxuan.nosdn.127.net/94b7be4e2d942910563da7010e2ebf52.jpg", "http://yanxuan.nosdn.127.net/51d74c6d9c979441f0850a4df825ca07.jpg", "http://yanxuan.nosdn.127.net/12490be0baf2884df4a76b056700b6d0.jpg", "http://yanxuan.nosdn.127.net/000c86b662db334bb1a3237201c3170b.jpg", "http://yanxuan.nosdn.127.net/3f65046396755e85d865ff350267f8ad.jpg", "http://yanxuan.nosdn.127.net/9ee20f93f478afb3b163bd8ac1b773f3.jpg", "http://yanxuan.nosdn.127.net/30ea147185e015733f70535d7b83c41a.jpg", "http://yanxuan.nosdn.127.net/e10be0a945ee625dad1f92914d5feb8a.jpg", "http://yanxuan.nosdn.127.net/d05a5483baa6a7df277a1b8e2aa77e20.jpg", "http://yanxuan.nosdn.127.net/6f9db12eb809ae21c792eaa1d2800aa9.jpg", "http://yanxuan.nosdn.127.net/a5d7465c65ae70c91917cb7fb15f9af6.jpg", "http://yanxuan.nosdn.127.net/e76bbc50a0b71005e91b4ab1938b5ef1.jpg", "http://yanxuan.nosdn.127.net/b618fe0763f6fb9fb423744eb628daf8.jpg", "http://yanxuan.nosdn.127.net/cd533fac5a109213c7ac62115778d2d3.jpg", "http://yanxuan.nosdn.127.net/11afd9217272f36a3a2fc5cbef2833a1.jpg", "http://yanxuan.nosdn.127.net/162a9ad0d457bdf019e26a0230ec7690.jpg", "http://yanxuan.nosdn.127.net/48f5af473b24a6f5fa8c1dd62015dd9b.jpg", "http://yanxuan.nosdn.127.net/4bbda7611536f0d3cc719541f330b25e.jpg", "http://yanxuan.nosdn.127.net/23c4e885d4129f75404567721a83881e.jpg", "http://yanxuan.nosdn.127.net/d499212d0e200f155926abed8f23878f.jpg", "http://yanxuan.nosdn.127.net/a51646c3d7e2c863be3f6759c7d691c2.jpg", "http://yanxuan.nosdn.127.net/eefc27c799d087a65e02b10a32c863f2.jpg", "http://yanxuan.nosdn.127.net/dcdbc047f2229f0f3cb1b36ad603a071.jpg", "http://yanxuan.nosdn.127.net/9a36df26998139e18e257dcac54ccb14.jpg", "http://yanxuan.nosdn.127.net/36db7366cfefd96c4665cf535828fb3b.jpg", "http://yanxuan.nosdn.127.net/62943ac1c4aa690e697d92d0922316af.jpg", "http://yanxuan.nosdn.127.net/b0991d5336e783ebcddd1ae3eb0476a0.jpg"],
		"inventory": [387, 416, 954, 114, 96, 758],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "颜色",
			"attrValue": "山岩灰"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "物理遮光率",
			"attrValue": "70-80%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 396,
		"date": "1500012524670",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1135054,
		"price": 559,
		"topName": "美式田园风蜻蜓提花窗帘",
		"subName": "美式蜻蜓提花 甜美田园色彩",
		"shortDescription": ["成品窗帘", "3步选购", "美式田园", "温馨居家", "色织提花", "栩栩如生"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/89ceb33620ef24e66c1d9b0d2e14bcfb.jpg", "http://yanxuan.nosdn.127.net/3ea57e128dca4df956c7de447fd17ec9.jpg", "http://yanxuan.nosdn.127.net/ae31111a3a2055e732ca850e86540356.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/30d7daa0824fbb61b6c36175c8203349.png", "http://yanxuan.nosdn.127.net/4973d54026070f1d9083c83d5951be8b.jpg", "http://yanxuan.nosdn.127.net/1f6a9ce98a3e955946d52d3139b14d11.jpg", "http://yanxuan.nosdn.127.net/b60b64ca87333bf3601b9e502a4b4961.jpg", "http://yanxuan.nosdn.127.net/7255eb59c0cf8312d70a06c4ff818f64.jpg"],
		"types": ["1.4m宽 x 2.6m高（1片）", "1.75m宽 x 2.6m高（1片）", "2.25m宽 x 2.6m高（1片）", "1.4m宽 x 2.6m高（2片）", "1.75m宽 x 2.6m高（2片）", "2.25m宽 x 2.6m高（2片）"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/5ef50e295ad0fb9371abbe7e2872cdc5.jpg", "http://yanxuan.nosdn.127.net/02259325a35acb1869bc9702f9fcbe31.jpg", "http://yanxuan.nosdn.127.net/43aebfb3fca2db86794a0691c77dc38f.jpg", "http://yanxuan.nosdn.127.net/025def2070d1489ced2170f6d3289f8f.jpg", "http://yanxuan.nosdn.127.net/0310c5f4629ce248a41222b183aa688e.jpg", "http://yanxuan.nosdn.127.net/e25bebfff700a75a62dc08ffd0bd9c0f.jpg", "http://yanxuan.nosdn.127.net/d4d42188243c04a007da52610a8576a7.jpg", "http://yanxuan.nosdn.127.net/8a9efeb9db8d354da83a103c36463614.jpg", "http://yanxuan.nosdn.127.net/3d50b29ae30f7e56656c13d4899ce448.jpg", "http://yanxuan.nosdn.127.net/476e04f334c5dc57df088bd758bf71e1.jpg", "http://yanxuan.nosdn.127.net/84043702356f9780c42a3da98a31dac7.jpg", "http://yanxuan.nosdn.127.net/633defdb4a4c97651456002cd7a719e7.jpg", "http://yanxuan.nosdn.127.net/5cf267c5e46e534af62a7a975c0404dd.jpg", "http://yanxuan.nosdn.127.net/c1de43fe4088759c5c639e70220ef871.jpg", "http://yanxuan.nosdn.127.net/5b759e4f530d72b0f0c0d7c3b6322db6.jpg", "http://yanxuan.nosdn.127.net/78bf09adc121ed29cd46b430160db3c3.jpg", "http://yanxuan.nosdn.127.net/0661d0f1c872f5bb1fd6b7065007011c.jpg", "http://yanxuan.nosdn.127.net/b56605e7f880c9cc6b671701b1c654e8.jpg", "http://yanxuan.nosdn.127.net/fdaa3eda8559df3ad8668ce018cc32a4.jpg", "http://yanxuan.nosdn.127.net/e99075468907c17c5dc6abae17194e37.jpg", "http://yanxuan.nosdn.127.net/5f286aaca31f5e975a5297bcdd6dc8ec.jpg", "http://yanxuan.nosdn.127.net/98367cab08fbb202d7e342a4aff38f6e.jpg", "http://yanxuan.nosdn.127.net/5b6425f148b8cfc3a3a167929bc9a0f3.jpg", "http://yanxuan.nosdn.127.net/f78ec4c8d577e767c32315e21bbc0500.jpg", "http://yanxuan.nosdn.127.net/d428d9fe2941bf74e7597dc22ba480c8.jpg", "http://yanxuan.nosdn.127.net/307ee07bc3a15b9f5062cd202f3274bc.jpg", "http://yanxuan.nosdn.127.net/452546e42880e3e1a33cdad06a9103da.jpg", "http://yanxuan.nosdn.127.net/b5f5a3e1d162cac310d8aad470cba9d5.jpg", "http://yanxuan.nosdn.127.net/15b274f63bf7249ff719348befdc2a8f.jpg", "http://yanxuan.nosdn.127.net/35bc56cc24d0de1168e2050aedb97503.jpg", "http://yanxuan.nosdn.127.net/c4af9134ce3f94830b86c03d16bcde11.jpg", "http://yanxuan.nosdn.127.net/0fb25ee9564df3f1881d5b326736a5a6.jpg", "http://yanxuan.nosdn.127.net/8c18301b6c997d6fda71872413327720.jpg", "http://yanxuan.nosdn.127.net/d615c0902467ec4acfafcd9e0e58d662.jpg", "http://yanxuan.nosdn.127.net/2d8c1cf888ae10a18234881c859f5543.jpg", "http://yanxuan.nosdn.127.net/1dfda36a45f4471e7e5b1cef4430b30c.jpg", "http://yanxuan.nosdn.127.net/a2faca0e3075005c39b2489a6cb23b33.jpg", "http://yanxuan.nosdn.127.net/2af0ae1bc51affe6eb712fcf645090a4.jpg", "http://yanxuan.nosdn.127.net/4193270acfd2a9a60e8fa740679a38f9.jpg", "http://yanxuan.nosdn.127.net/03461baecdb10986e6717bb1ece051cf.jpg", "http://yanxuan.nosdn.127.net/8e583d42bfd19eb853f39dfee718c2b5.jpg", "http://yanxuan.nosdn.127.net/4198d8898b2509e5ff4204e6427a24fe.jpg", "http://yanxuan.nosdn.127.net/629a6cd52d3a1391bc306d051c5dacb5.jpg", "http://yanxuan.nosdn.127.net/fcf3a1941579a33b9910699241a0607a.jpg", "http://yanxuan.nosdn.127.net/115e5818e090c5550844ba2abbc2c195.jpg", "http://yanxuan.nosdn.127.net/6b737365ea54df145258b8e9ab618cf1.jpg", "http://yanxuan.nosdn.127.net/3a28276c6c955b0eb7fdf9593d8ec89e.jpg", "http://yanxuan.nosdn.127.net/907a20503903f868cb861c3cd4693b58.jpg", "http://yanxuan.nosdn.127.net/06e93d13ce4dab3732a1a112a2244df2.jpg", "http://yanxuan.nosdn.127.net/cfc69f212687eca8721ce481fd101e1e.jpg", "http://yanxuan.nosdn.127.net/cafdc134d98c8baf4b1e9e1e1eb0cdc4.jpg", "http://yanxuan.nosdn.127.net/1c7c0b835761d2b9b6a9c6291125138c.jpg", "http://yanxuan.nosdn.127.net/20dce68a94e50d60651f00c1c3df0ee6.jpg", "http://yanxuan.nosdn.127.net/8d9331a55475de6dc3b2f29f24238410.jpg", "http://yanxuan.nosdn.127.net/42d9853c8f6914c417b3d9689074ce50.jpg", "http://yanxuan.nosdn.127.net/2440e8ea6874187c756833ba991de5e9.jpg", "http://yanxuan.nosdn.127.net/15e3ef6baa238672ff919d8672bdf939.jpg", "http://yanxuan.nosdn.127.net/e8ccd245394fcacc25881f68a3f65f35.jpg", "http://yanxuan.nosdn.127.net/35daa2dc6ba4cacaf5ff0778068b000f.jpg", "http://yanxuan.nosdn.127.net/d0b9aec27921d434744db85414c1fdd9.jpg", "http://yanxuan.nosdn.127.net/c6bb47554761d3af7b79387165ada963.jpg", "http://yanxuan.nosdn.127.net/7569342d3c34bf8869821b1a37866f96.jpg", "http://yanxuan.nosdn.127.net/88ecdf75287b957e61537a43f6c0a96e.jpg", "http://yanxuan.nosdn.127.net/71c513b6f5f64b1e68b4c8fd39d45896.jpg", "http://yanxuan.nosdn.127.net/1818d3bbba3415f5eb64c4a0a039af44.jpg", "http://yanxuan.nosdn.127.net/2c701da638cc246afd47ba30e08b17e9.jpg", "http://yanxuan.nosdn.127.net/a3e335237b824405a0c7ce2fe19cf2f9.jpg", "http://yanxuan.nosdn.127.net/44e4fffa1ca7c56e3e3ea8a8252c1e55.jpg", "http://yanxuan.nosdn.127.net/81ea2fecac3cdbd28536c6c22fd1afb7.jpg", "http://yanxuan.nosdn.127.net/1192c2b9806d79f2facee98cc0e51f23.jpg", "http://yanxuan.nosdn.127.net/c25e71effaad151c7ffbd8f96852830a.jpg", "http://yanxuan.nosdn.127.net/5c08de25eb72fc35b9dc035b43ff7fba.jpg", "http://yanxuan.nosdn.127.net/e7ca39f2e22af99f77b9e9dfa3ab7395.jpg", "http://yanxuan.nosdn.127.net/e78eda49b39c314cf23d1afaad512fa2.jpg", "http://yanxuan.nosdn.127.net/85fe4203ae103a845800ec4b838fb4b9.jpg"],
		"inventory": [731, 960, 632, 721, 543, 294],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1.4 x 2.6M：适用于1.4M宽以下的窗户。1.75 x 2.6M：适用于1.4M-1.75M宽的窗户。2.25 x 2.6M：适用于1.75M-2.25M宽的窗户。2.8 x 2.6M：适用于2.25M-2.8M宽的窗户。3.5 x 2.6M：适用于2.8M-3.5M宽的窗户。4.5 x 2.6M：适用于3.5M-4.5M宽的窗户。"
		}, {
			"attrName": "颜色",
			"attrValue": "蓝色/ 绿色/ 黄色/ 红色"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 19817-2005"
		}, {
			"attrName": "产地",
			"attrValue": "中国浙江"
		}, {
			"attrName": "物理遮光性",
			"attrValue": "80%左右"
		}],
		"label": "",
		"manufacture": "",
		"sale": 158,
		"date": "1500012527751",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1153008,
		"price": 169,
		"topName": "婴童绒感爬爬垫活动垫",
		"subName": "防摔防磕碰，学步必备",
		"shortDescription": ["抓绒质感", "柔软亲肤", "蓬软填充", "回弹防磕", "严格检测", "安全省心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ce67c2dfe534a27b2ca3d52ea74f4dd9.jpg", "http://yanxuan.nosdn.127.net/1540bec801d3cdf67fa0ee4d4689c439.jpg", "http://yanxuan.nosdn.127.net/8090eb5d27481323bef18f130797ac1d.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/935144c69e049a252152b6d11adf3d5d.png", "http://yanxuan.nosdn.127.net/35a5f5286400f58072e295ab0ec1f3d0.jpg", "http://yanxuan.nosdn.127.net/22036588c18f4bfb4ce280397ddb11c7.jpg", "http://yanxuan.nosdn.127.net/4895cb7573403a8a6cbc739d61fc3da1.jpg", "http://yanxuan.nosdn.127.net/64b9db55560bfe00077619e0787db5f4.jpg"],
		"types": ["直径120cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/df5b703e4da70f3d0b181d1b2fe9cb24.jpg", "http://yanxuan.nosdn.127.net/e00492c325584f77ead8a8a36e0aae71.jpg", "http://yanxuan.nosdn.127.net/52d48ba4a448929adf4a18a9091d4dc4.jpg", "http://yanxuan.nosdn.127.net/4ff10d290e0eb2e6eeaa0df338390ff9.jpg", "http://yanxuan.nosdn.127.net/987315535c93cc0c021ccbfa7eb5f928.jpg", "http://yanxuan.nosdn.127.net/7dc4509e0ffb47dea7b9552f3d25a6ca.jpg", "http://yanxuan.nosdn.127.net/7af528b22d70f978f5b6a4599466b3aa.jpg", "http://yanxuan.nosdn.127.net/d3b68d5d1e2d7f01da131a6eebdb6de7.jpg", "http://yanxuan.nosdn.127.net/005a1a3dbc4b65ffb89f0c5505cb21d8.jpg", "http://yanxuan.nosdn.127.net/38eac628f330b51df63e3d0841b3fd2a.jpg", "http://yanxuan.nosdn.127.net/abb866288cf36996249675b813e34a2e.jpg", "http://yanxuan.nosdn.127.net/c56ce7a8f32beba5b9bd438195f8eedf.jpg", "http://yanxuan.nosdn.127.net/cbaa075282e5da83977ebe69dee51337.jpg", "http://yanxuan.nosdn.127.net/f49a39ae78dca9f876959685f3c8d795.jpg", "http://yanxuan.nosdn.127.net/faa9b0198bb66e5fb75ebe0d6f4fae5f.jpg", "http://yanxuan.nosdn.127.net/b5df48ee3f569a98d8b6c5282196d112.jpg", "http://yanxuan.nosdn.127.net/c460dedb2a1ddcc2ad245d00ffd3d245.jpg", "http://yanxuan.nosdn.127.net/11ee2038f6de4e2bb51d7e4115480e39.jpg", "http://yanxuan.nosdn.127.net/88fa30f53ba9329e37c76a48551f3e11.jpg", "http://yanxuan.nosdn.127.net/7b7094d2268953a57eb8c4331bcef553.jpg", "http://yanxuan.nosdn.127.net/19485ca7734922ce2eb758958cfc4e25.jpg", "http://yanxuan.nosdn.127.net/60d24353a86bc4a8cf9bfe7361ddf84f.jpg", "http://yanxuan.nosdn.127.net/ee36afa84a8c6be620b41ff07b97ddc3.jpg", "http://yanxuan.nosdn.127.net/7d25aa03d227272d38b5c9fd1dd2e7d1.jpg", "http://yanxuan.nosdn.127.net/98b31b6f257f292028e3a1fd93edda37.jpg", "http://yanxuan.nosdn.127.net/49380bf9c770e354d59c2e54e6273014.jpg", "http://yanxuan.nosdn.127.net/dd88134f70925c5a2192fa0f59c6924d.jpg", "http://yanxuan.nosdn.127.net/0a162c37741c2673606be1f7415a9086.jpg", "http://yanxuan.nosdn.127.net/9f050a97bc3906c8cc494d2f4d8a0701.jpg", "http://yanxuan.nosdn.127.net/f88bfe919ebd5489fa3b5ccc1a0975f4.jpg", "http://yanxuan.nosdn.127.net/8bce76a4230d26ff0dc4875059a8d268.jpg", "http://yanxuan.nosdn.127.net/0009a36407102be213f2ed79ee01d619.jpg", "http://yanxuan.nosdn.127.net/924ff3235c3ba5b9c2974aa750d5f977.jpg", "http://yanxuan.nosdn.127.net/983145563fd11e1c6a41077cb476d2ec.jpg", "http://yanxuan.nosdn.127.net/60a44ca533fd90cedac141479a5dab93.jpg", "http://yanxuan.nosdn.127.net/dbdb394f483ff02084f3519a8b78190c.jpg", "http://yanxuan.nosdn.127.net/bde66c2ae97dc9376611d7962c6018cf.jpg", "http://yanxuan.nosdn.127.net/d99bf3cca48f0dcec87b7ed19312ba61.jpg", "http://yanxuan.nosdn.127.net/4816b62323d7ff6d2dcbb2d06d43491d.jpg", "http://yanxuan.nosdn.127.net/85d28b03f86c9ced7cef3dbbd1ae49ad.jpg", "http://yanxuan.nosdn.127.net/9f493599bb507c3490ef1e738017ba4d.jpg"],
		"inventory": [382],
		"information": [{
			"attrName": "颜色",
			"attrValue": "天蓝色刺猬/ 嫩粉色小猪"
		}, {
			"attrName": "尺寸",
			"attrValue": "直径120"
		}, {
			"attrName": "产地",
			"attrValue": "中国山东"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22797-2009"
		}],
		"label": "",
		"manufacture": "",
		"sale": 829,
		"date": "1500012530313",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1055016,
		"price": 59,
		"topName": "日式纯棉针织条纹抱枕",
		"subName": "亲肤舒适，宛如妈妈的怀抱",
		"shortDescription": ["长绒棉朵", "天然呵护", "严格检测", "健康安心", "仪征3D", "高回弹率"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0cb38330a5539758d734f1c6f9bea07f.jpg", "http://yanxuan.nosdn.127.net/0f68f711ee06a8363931b3bc0a8d4d9d.jpg", "http://yanxuan.nosdn.127.net/b77f63637e03202d2facf61d41fd18ea.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/23e0203f1512f33e605f61c28fa03d2d.png", "http://yanxuan.nosdn.127.net/16fe67152585f306df7de145af71315d.jpg", "http://yanxuan.nosdn.127.net/1ade16619d245b1edcd2179321e6387b.jpg", "http://yanxuan.nosdn.127.net/688a1f344a0d898d4ef9c834f236addc.jpg", "http://yanxuan.nosdn.127.net/7d8801b01b1c53cbdfc07678099ebe80.jpg"],
		"types": ["珍珠粉"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/4060bcde249c2501e5d95cfa0888a6c3.jpg", "http://yanxuan.nosdn.127.net/afebd965217cfdbc238de9252c7d6e37.jpg", "http://yanxuan.nosdn.127.net/b017649229c04dad59c312b3fe0cf7be.jpg", "http://yanxuan.nosdn.127.net/e02d923a92d5bef4b264381cffd5d813.jpg", "http://yanxuan.nosdn.127.net/0447366651e06dde345c907e12315c73.jpg", "http://yanxuan.nosdn.127.net/b5fdb8a54a2bc2285d1136bf9a2a674f.jpg", "http://yanxuan.nosdn.127.net/f1836dd3b75444a3ce42dc49fa5ee513.jpg", "http://yanxuan.nosdn.127.net/2f4740ae47c3ca8465e1ea6ec0a43563.jpg", "http://yanxuan.nosdn.127.net/5f9f33a85933788209e6195468044387.jpg", "http://yanxuan.nosdn.127.net/b6ceab4330e0dd218db3c16582465be1.jpg", "http://yanxuan.nosdn.127.net/1dea7df197ba1e5ce5e9646aea43f798.jpg", "http://yanxuan.nosdn.127.net/022e305413c9aa8e8db30a46a2a65286.jpg", "http://yanxuan.nosdn.127.net/cce2571a59a0bc39784d61c4134f9458.jpg", "http://yanxuan.nosdn.127.net/b1f287dab80d1b11450051de6c119611.jpg", "http://yanxuan.nosdn.127.net/f7b6318cb7623349542ba971cf1887da.jpg", "http://yanxuan.nosdn.127.net/cf56a8ae91e07c91d70cf7b88cb59676.jpg", "http://yanxuan.nosdn.127.net/76aebdbc4a150837b2dcaa2293c85cc4.jpg", "http://yanxuan.nosdn.127.net/902fb302066a65488ed1f6da3a16ed66.jpg", "http://yanxuan.nosdn.127.net/dd9df2852e760940b0ab9e599320ed35.jpg", "http://yanxuan.nosdn.127.net/7ad1c6c9e619df09685cf9596339d714.jpg", "http://yanxuan.nosdn.127.net/83e54a3b9d13dc3c67e880c02e63167c.jpg", "http://yanxuan.nosdn.127.net/9f6b75fe4ff9ae0b976c8c85bbf0a719.jpg", "http://yanxuan.nosdn.127.net/82f850ea52ca3e7048283b3f8a65c616.jpg", "http://yanxuan.nosdn.127.net/5bd4faa4898d9ea3c56fba9c5749cc62.jpg", "http://yanxuan.nosdn.127.net/6488dedf51c6e5a90fc5f156a4e8416b.jpg", "http://yanxuan.nosdn.127.net/bc667ddb5116ceaf329f55982da36bb1.jpg", "http://yanxuan.nosdn.127.net/dfbfde943773a0258fa81b84d710d36e.jpg", "http://yanxuan.nosdn.127.net/60d64bb0ac51346dc39d266beacdb846.jpg", "http://yanxuan.nosdn.127.net/6c50c0fd364d6b9a8646d0da75ce48f6.jpg", "http://yanxuan.nosdn.127.net/b24da9df819efdf9e110bb2228eadf0d.jpg", "http://yanxuan.nosdn.127.net/3cbbd9ec8dd41be2b35bf49842b67d86.jpg", "http://yanxuan.nosdn.127.net/4d5bb53b92ed48f3f81980e41b51c0fc.jpg", "http://yanxuan.nosdn.127.net/d75a8fd77357f9a74a36fd7bfa7cebed.jpg", "http://yanxuan.nosdn.127.net/2dd8069e6739d732a53c25c74c0b2a89.jpg", "http://yanxuan.nosdn.127.net/d7b4e172f8fd168e28854c3d8d04c56f.jpg", "http://yanxuan.nosdn.127.net/c8b981b58ffb3e0a75916def11e45493.jpg", "http://yanxuan.nosdn.127.net/0fb12dd3d12c8828a5cf2e16f17a8f27.jpg", "http://yanxuan.nosdn.127.net/8df57201eb9f5e7b576a6ccc31286e8f.jpg", "http://yanxuan.nosdn.127.net/5f86f20ab83206abfdd682418e3cd3ed.jpg", "http://yanxuan.nosdn.127.net/4c64ea783c9bd6dd2cb51b9978769edb.jpg", "http://yanxuan.nosdn.127.net/104dca8bdfb6413fed5379a5b04eec10.jpg", "http://yanxuan.nosdn.127.net/2cfb7760b81f0a82bdbae5079bfcd5ec.jpg", "http://yanxuan.nosdn.127.net/1c6e09984c0599b5205f4d099cd5cfcb.jpg", "http://yanxuan.nosdn.127.net/e32f3a0bbc7ba3ec49b69fa89ba7da39.jpg", "http://yanxuan.nosdn.127.net/408bf6b2815efea1020278ff57204667.jpg", "http://yanxuan.nosdn.127.net/6707b10b7a14f7d2e7487f30a687cfb2.jpg", "http://yanxuan.nosdn.127.net/0c4977d2ce8691f85575698990c13c3a.jpg", "http://yanxuan.nosdn.127.net/22213164e3ce12c23260519cc5f2dd7f.jpg", "http://yanxuan.nosdn.127.net/a9c8f7fda81f79cec8e75404386677c0.jpg", "http://yanxuan.nosdn.127.net/b1e5093b54f817ed1906fc58e7494790.jpg", "http://yanxuan.nosdn.127.net/162452d2cb5ad3348862d5b1da7348c5.jpg", "http://yanxuan.nosdn.127.net/f8f6de9bc947bed7d5cebfe1f49a786d.jpg"],
		"inventory": [959],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "45*45cm"
		}, {
			"attrName": "材质",
			"attrValue": "主面料：100% 棉填充：100% 聚酯纤维"
		}, {
			"attrName": "克重",
			"attrValue": "600G"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 22843-2009"
		}, {
			"attrName": "温馨提示",
			"attrValue": "纺织品经历印染、织造等多道环节，产品初次拿到可能有些许味道，清水漂洗、晾干后味道即可散去。严选面料全部经过国标检测认证，选用环保活性染料，请放心使用。"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 318,
		"date": "1500012532965",
		"category": "居家",
		"subCategory": "布艺软装"
	})
	var goodsEntity = new goodsModel({
		"id": 1116033,
		"price": 1399,
		"topName": "多功能人体工学转椅",
		"subName": "冈村椅制造商携手打造",
		"shortDescription": ["腰部承托", "重点呵护", "防爆气杆", "安全放心", "高弹网布", "透气耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/7aa12ebff01c2912a1644e8ef94cc62b.jpg", "http://yanxuan.nosdn.127.net/4a3af4e24d53b6db814a8f63817c3b7b.jpg", "http://yanxuan.nosdn.127.net/e6cafafe41848754fc56c9e670d9d948.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png", "http://yanxuan.nosdn.127.net/5443fa754bd06656d9ace7ff0e93a579.jpg", "http://yanxuan.nosdn.127.net/5cdc0067b99541005033be616cba7f59.jpg", "http://yanxuan.nosdn.127.net/83a80011207cedc4d147fe25edbcce74.jpg", "http://yanxuan.nosdn.127.net/93e4dec0279a76060b5c602989335dbb.jpg"],
		"types": ["黑色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/8b27b54e1e9d6e8fca94bd8cbe6511c2.jpg", "http://yanxuan.nosdn.127.net/b49ca9174969bacc23da04f76a46b66b.jpg", "http://yanxuan.nosdn.127.net/c556025c9c2d9d25fdd55dee7d88ebda.jpg", "http://yanxuan.nosdn.127.net/19962d1db60d0a322a321acd7f28f88b.jpg", "http://yanxuan.nosdn.127.net/062511a5b222ae724c9e315ab80a8fdc.jpg", "http://yanxuan.nosdn.127.net/a0c4bcbe9467cc35a29c2874d3a55a9a.jpg", "http://yanxuan.nosdn.127.net/01f2a128c9d4f5a02d95f72d9facc51f.jpg", "http://yanxuan.nosdn.127.net/535a506a77d866696201e235e3756c95.jpg", "http://yanxuan.nosdn.127.net/fb721d7556eeecd743076910d50cf092.jpg", "http://yanxuan.nosdn.127.net/3f1aa9957f4026d1b8dd7eea7f62445e.jpg", "http://yanxuan.nosdn.127.net/f63bc9fd8324235084594893ed8b4d2f.jpg", "http://yanxuan.nosdn.127.net/1ac36b9457d3c422033269f7d7a07f42.jpg", "http://yanxuan.nosdn.127.net/cb900671538a0d53b010878daf811327.jpg", "http://yanxuan.nosdn.127.net/10eaf460d458ee72f9e9c4faf2e26e91.jpg", "http://yanxuan.nosdn.127.net/555375f82405155c650952621f0a642c.jpg", "http://yanxuan.nosdn.127.net/d594a1b1a4a9a536f0953ca0b369ce8d.jpg", "http://yanxuan.nosdn.127.net/6d80aa0197573fbfd646d99e1cb63ba2.jpg", "http://yanxuan.nosdn.127.net/da464b3e3a03b6c5b921964be9208726.jpg", "http://yanxuan.nosdn.127.net/d2583876e365766158766eed2e74bf96.jpg", "http://yanxuan.nosdn.127.net/060e9594a053462c067de46ca4d1d8d5.jpg", "http://yanxuan.nosdn.127.net/ab65fdaa7bbe900f94efd0b3bf2cdb2e.jpg", "http://yanxuan.nosdn.127.net/d8a59e6f2281586e9e69c36e10fada91.jpg", "http://yanxuan.nosdn.127.net/4ebce73bd8860e5820333e605e4943dd.jpg", "http://yanxuan.nosdn.127.net/514bbb771795acc0be99d5b9532ba2d9.jpg", "http://yanxuan.nosdn.127.net/aca5ac0313eaddf73ae477c7aa999c0f.jpg", "http://yanxuan.nosdn.127.net/17aa61202a205b7b24171435d7f13c89.jpg", "http://yanxuan.nosdn.127.net/544eaf3ebe2448988766d9bbf3ac0471.jpg", "http://yanxuan.nosdn.127.net/a7b05a7d41e11ee13387bf2b0a832606.jpg", "http://yanxuan.nosdn.127.net/e3b5f135daa95a68070ffda75114ba2e.jpg", "http://yanxuan.nosdn.127.net/b1a026c847c4c82f76b858c0d24d7879.jpg", "http://yanxuan.nosdn.127.net/10858d84ae1da859010f98b30ff63ad6.jpg", "http://yanxuan.nosdn.127.net/2aec9d737180d169dc5a32714874f48f.jpg", "http://yanxuan.nosdn.127.net/b991afcae001fb53cb41f2b88b207a64.jpg", "http://yanxuan.nosdn.127.net/d6b83006d3e5f3796f51f7d8d69e5e9c.jpg", "http://yanxuan.nosdn.127.net/0aa50f3be5c69ed5615a87cb397f24ea.jpg", "http://yanxuan.nosdn.127.net/82f8ae62ca720c3ec08a92a2a8535ab1.jpg", "http://yanxuan.nosdn.127.net/b4b0ae4ee4fbe948649681f6ea9057c5.jpg", "http://yanxuan.nosdn.127.net/3dce2921efc837f35a6aa99aba1802e0.jpg", "http://yanxuan.nosdn.127.net/461bc3b12e024722de8846c138224aad.jpg", "http://yanxuan.nosdn.127.net/0c14271e616893c3e7f3fee73c244655.jpg", "http://yanxuan.nosdn.127.net/8fe72c53b679a3688753c007ed36ea12.jpg", "http://yanxuan.nosdn.127.net/ef07b7f6eea9cfb775bfa6aedf854c27.jpg", "http://yanxuan.nosdn.127.net/915f5c77ff9bfac36e9140f329290f70.jpg", "http://yanxuan.nosdn.127.net/ca42d0a21a0c4689d12a58cd4739b0db.jpg", "http://yanxuan.nosdn.127.net/b599f89629cebeab091c9741b5ba96ad.jpg", "http://yanxuan.nosdn.127.net/76cdde2a0c8db34c58ebdd9b91ec6525.jpg", "http://yanxuan.nosdn.127.net/a358d842115cdfa554641d834d3d7844.jpg", "http://yanxuan.nosdn.127.net/e767d4f6c76c65489f4629ecda58e465.jpg", "http://yanxuan.nosdn.127.net/ff9c26493525e43e7ebafb2d16a86ac6.jpg", "http://yanxuan.nosdn.127.net/a742eca3c7f8ce3f78ad8063cf1563a5.jpg", "http://yanxuan.nosdn.127.net/1ae9b9843d99e0c7335563a16bf7b7a5.jpg", "http://yanxuan.nosdn.127.net/2b0dd63b8b6cbae24412bd1c97dc72c7.jpg", "http://yanxuan.nosdn.127.net/cb520eef337532ee66b1d374c7361b1e.jpg", "http://yanxuan.nosdn.127.net/14d1fa59c3f854b39d4d1dfaace049d5.jpg", "http://yanxuan.nosdn.127.net/448ee99bf179576b5d6c80debbda77aa.jpg", "http://yanxuan.nosdn.127.net/4bc39d3be67b182b3e23b28f6db779c4.jpg", "http://yanxuan.nosdn.127.net/ed01f5f53e1ee7616e9fedce57380cf6.jpg", "http://yanxuan.nosdn.127.net/bac8ec59395f25c956cd5a5725d61138.jpg", "http://yanxuan.nosdn.127.net/4da05daf705b7d28011fb0e4c5f41286.jpg", "http://yanxuan.nosdn.127.net/664ae4c05bccac774507e0723d47c13b.jpg", "http://yanxuan.nosdn.127.net/d78c5b66433d0378fd723192da370e95.jpg", "http://yanxuan.nosdn.127.net/d048491a9fa89cba22e39cda7ef13e22.jpg", "http://yanxuan.nosdn.127.net/0b157311c42fe14a57be3cb629cb15e4.jpg", "http://yanxuan.nosdn.127.net/3b86d2372df851a40dbd6afb33fe003e.jpg", "http://yanxuan.nosdn.127.net/c432d22ce1db44c72cd78e165b85442d.jpg", "http://yanxuan.nosdn.127.net/57d51458166253d7069920b2405666a4.jpg", "http://yanxuan.nosdn.127.net/7b118c0134be977c224faa7c7770b198.jpg", "http://yanxuan.nosdn.127.net/e14ffb4d3fa82194d52f2f643fe078b2.jpg", "http://yanxuan.nosdn.127.net/15de8a22bf3ed86c29ef754c0d87d14d.jpg"],
		"inventory": [641],
		"information": [{
			"attrName": "扶手材质",
			"attrValue": "PU"
		}, {
			"attrName": "框架材质",
			"attrValue": "烤漆钢+工程塑料"
		}, {
			"attrName": "椅轮",
			"attrValue": "PA万向椅轮"
		}, {
			"attrName": "气杆",
			"attrValue": "三弘气压杆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "700*700*1160mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "自行组装"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1.周六日暂无法发货，周末订单延至周一发货，请知悉！2.本产品配送范围：江浙沪、安徽、山东、福建、江西、湖北、河南、北京、天津、湖南、河北、山西、陕西、重庆、四川、海南、广西、贵州、云南、广东、辽宁、甘肃、宁夏、青海、内蒙古、吉林、黑龙江、新疆、西藏（航空件）3.本产品配送整件，不包安装，收到货物后，请自行按照产品说明书进行组装。如果组装时碰到无法解决的问题，可联系客服获取指导。"
		}],
		"label": 爆品,
		"manufacture": "冈村制造商",
		"sale": 767,
		"date": "1500012535498",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1116032,
		"price": 3499,
		"topName": "怀抱休闲椅组合",
		"subName": "敦厚包裹感 葛优躺神器",
		"shortDescription": ["头枕可调", "呵护头颈", "麻布面料", "防褶防霉", "自由旋转", "方向随心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/fdbda87df36a2fad0152d04710bb41b4.jpg", "http://yanxuan.nosdn.127.net/032f8385573e5b11ffc87ea50e36167b.jpg", "http://yanxuan.nosdn.127.net/084d01ef0476cb52c1c8861e7e8cedb3.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1716931a978a688ff817a170e52cfaeb.png", "http://yanxuan.nosdn.127.net/25e3cedac39679c138abbe24826aaa89.jpg", "http://yanxuan.nosdn.127.net/d8ec444138673ac90b7932aee798b0ae.jpg", "http://yanxuan.nosdn.127.net/4d21efc1a0096af9dda0645faee4481a.jpg", "http://yanxuan.nosdn.127.net/fe0471d1c32afd0b7c59095494c6d5d0.jpg"],
		"types": ["蓝色", "绿色", "灰色"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/76711f21f98e12a09114d61568205e1b.jpg", "http://yanxuan.nosdn.127.net/d96cd97e4732a2b317997cee4546702d.jpg", "http://yanxuan.nosdn.127.net/2511cc47a422ed526be2ba205bb895f2.jpg", "http://yanxuan.nosdn.127.net/c104ad0b15c642ed6f50157c3615bbcb.jpg", "http://yanxuan.nosdn.127.net/db2b9f2d6d1912cf28d38687e68e4824.jpg", "http://yanxuan.nosdn.127.net/9475b7c767f42e6f4ba8e68adeb04597.jpg", "http://yanxuan.nosdn.127.net/9916aae21b77642767d813ba43e9aa0a.jpg", "http://yanxuan.nosdn.127.net/ad0511427287e5db30b906b623b33a64.jpg", "http://yanxuan.nosdn.127.net/eaee2d96b0fd5d446b07e3f0975bee03.jpg", "http://yanxuan.nosdn.127.net/4df4fff30fd1eb133ef4d73840d2468e.jpg", "http://yanxuan.nosdn.127.net/90e3ccb60f99a4642544175fef44db91.jpg", "http://yanxuan.nosdn.127.net/73c1e0f3c62aefb6f10303b442712feb.jpg", "http://yanxuan.nosdn.127.net/338adf02bc7d82552503868b605c8048.jpg", "http://yanxuan.nosdn.127.net/6039b8c56d5d88fe3157044d1fda30b8.jpg", "http://yanxuan.nosdn.127.net/0e0c82d3b1ed3439124ec0af05fb0d0b.jpg", "http://yanxuan.nosdn.127.net/edc767c3b532aec6c3d140401c3340c0.jpg", "http://yanxuan.nosdn.127.net/aa4a6bc3c9ddef61e86e468a2e8550ca.jpg", "http://yanxuan.nosdn.127.net/528612b52c5228fb1fc33506aa737cab.jpg", "http://yanxuan.nosdn.127.net/0d9cf44c01b542f960986632672a77a0.jpg", "http://yanxuan.nosdn.127.net/1ef95ec6ac780800e6b8fe66235073ed.jpg", "http://yanxuan.nosdn.127.net/6e3e889c847ef7494dc01495f24ff561.jpg", "http://yanxuan.nosdn.127.net/603dcea28d2348f76a1de546eb5c8df2.jpg", "http://yanxuan.nosdn.127.net/6ceb5daa7fce99e6f5b47a2f5ae8f9dd.jpg", "http://yanxuan.nosdn.127.net/8b94ea2e779910986f183167e3f42ed9.jpg", "http://yanxuan.nosdn.127.net/d86c818de6c47b9b8a1fd192d87353c3.jpg", "http://yanxuan.nosdn.127.net/76844b33f2a61a1cbeb5e33511f5908f.jpg", "http://yanxuan.nosdn.127.net/cdc7bac1d61b0073628a39fd2c879e8a.jpg", "http://yanxuan.nosdn.127.net/9276f87a1c116b85008b95439d175bcf.jpg", "http://yanxuan.nosdn.127.net/24be592480ed20027fc34d9c080b0321.jpg", "http://yanxuan.nosdn.127.net/379f881e03525f924c6ea920ea6c78e0.jpg", "http://yanxuan.nosdn.127.net/1a600949dae14979115c42999a0f6fe7.jpg", "http://yanxuan.nosdn.127.net/ff21db806aafbe32ac78961197953ffc.jpg", "http://yanxuan.nosdn.127.net/3db7b68b230a24be64801a78c458b1eb.jpg", "http://yanxuan.nosdn.127.net/fc12bdf58c5c9ac2ad48b762ac4af6a6.jpg", "http://yanxuan.nosdn.127.net/ed640dcb66fd63c5025ae47ce7e3b70e.jpg", "http://yanxuan.nosdn.127.net/88a622dbe357f42ebd3f5e024a1e2e56.jpg", "http://yanxuan.nosdn.127.net/ce533f48eeae0571e0eae5bbfbd4c828.jpg", "http://yanxuan.nosdn.127.net/ad43f66fe7e2874b421b9d8665eac6cd.jpg", "http://yanxuan.nosdn.127.net/47dceb35bfea94d3d5200f623b8effea.jpg", "http://yanxuan.nosdn.127.net/020d705edc71ac08be002ee59182302f.jpg", "http://yanxuan.nosdn.127.net/03935ed49a0bf225d583726b7ea790c7.jpg", "http://yanxuan.nosdn.127.net/66d34a77117aacaea727fde884a49c78.jpg", "http://yanxuan.nosdn.127.net/107e06e9c73f64091849fc5dc0792c9a.jpg", "http://yanxuan.nosdn.127.net/971966d1d891676ef4fe6b1993b119e1.jpg", "http://yanxuan.nosdn.127.net/1485c1ff3bf4779d660909c596564f28.jpg", "http://yanxuan.nosdn.127.net/a4b7e0ce9bf28ae3395656b0cf15d881.jpg", "http://yanxuan.nosdn.127.net/d70e32747bd1f9edced88936db25401f.jpg", "http://yanxuan.nosdn.127.net/55bd78f6fb5f922b041a7efe508abada.jpg", "http://yanxuan.nosdn.127.net/3a5474f37bd38da4f1fc7b7be717c36a.jpg", "http://yanxuan.nosdn.127.net/ebd63da19a9f26c807f8fcadb80c4472.jpg", "http://yanxuan.nosdn.127.net/cec62479c7274423f0dacad8d121eb70.jpg", "http://yanxuan.nosdn.127.net/169a9333b9e1a5188b8666a144f59141.jpg", "http://yanxuan.nosdn.127.net/570a1b58c1c96c2d9b00b227d0addc88.jpg", "http://yanxuan.nosdn.127.net/f3ea608ed0e606eb8f5fe52a98246374.jpg", "http://yanxuan.nosdn.127.net/5f4a21e78fc232ae471e2dc0a5e5663b.jpg", "http://yanxuan.nosdn.127.net/3db1f27bcfb9e1fd34971c73b7398f4e.jpg", "http://yanxuan.nosdn.127.net/82c08f9be5b2b8edb5eeefb0c4d14420.jpg", "http://yanxuan.nosdn.127.net/86b24ab54498df2062942219931a7540.jpg", "http://yanxuan.nosdn.127.net/5e003d33fc96d2792254343020cc36a0.jpg", "http://yanxuan.nosdn.127.net/b5783565d9d25e5cfe7a81caaed6399c.jpg", "http://yanxuan.nosdn.127.net/4998541c0ae6b3f50a43ef0149c43986.jpg", "http://yanxuan.nosdn.127.net/43bc490fefda9945035825904edb6e8c.jpg", "http://yanxuan.nosdn.127.net/a91b89bbaabc53abb34415b05f831eb5.jpg"],
		"inventory": [191, 763, 585],
		"information": [{
			"attrName": "填充物",
			"attrValue": "高回弹海绵"
		}, {
			"attrName": "躺椅尺寸",
			"attrValue": "840*1250*1090mm"
		}, {
			"attrName": "脚蹬尺寸",
			"attrValue": "550*445*450mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "自行组装"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1.周六日暂无法发货，周末订单延至周一发货，请知悉！2.本产品配送范围：江浙沪、安徽、山东、福建、江西、湖北、河南、北京、天津、湖南、河北、山西、陕西、重庆、四川、海南、广西、贵州、云南、广东、辽宁、甘肃、宁夏、青海、内蒙古、吉林、黑龙江、新疆、西藏（航空件）3.本产品配送整件，不包安装，收到货物后，请自行按照产品说明书及商品页视频进行组装。如果组装时碰到无法解决的问题，可联系客服获取指导。"
		}],
		"label": "",
		"manufacture": "冈村制造商",
		"sale": 864,
		"date": "1500012537989",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1189011,
		"price": 3999,
		"topName": "怀抱休闲椅组合（皮款）",
		"subName": "葛优躺神器皮款",
		"shortDescription": ["头枕可调", "呵护头颈", "头层牛皮", "柔软细腻", "承重椅脚", "稳固耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1d1115282be26c36b999814370913e3a.jpg", "http://yanxuan.nosdn.127.net/812f73f9dc905730ac6277eb54485716.jpg", "http://yanxuan.nosdn.127.net/8e0019cae912e61a364c10aa6f16f399.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/955f8d393969f18f83a30725bd2492f1.png", "http://yanxuan.nosdn.127.net/8d097588167c3b34f893fb8213c9ec23.jpg", "http://yanxuan.nosdn.127.net/ea32911beaa5d3dca689c1201aa87b04.jpg", "http://yanxuan.nosdn.127.net/3af8ff6e7897ebbb3e7d637476077917.jpg", "http://yanxuan.nosdn.127.net/50bcfdb7ee837474be0d2b2772dbe2e6.jpg"],
		"types": ["驼色", "米色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/966880e236834a48be06bd24b6fb4f06.jpg", "http://yanxuan.nosdn.127.net/4a988812558156ad96a52c7d46fa0575.jpg", "http://yanxuan.nosdn.127.net/7b21d7badd4df65039b43cccfe1300cf.jpg", "http://yanxuan.nosdn.127.net/31936b3bc092e002e22caa2c2d1f4a03.jpg", "http://yanxuan.nosdn.127.net/9fe815b374f33eac41b7ad2e29d86341.jpg", "http://yanxuan.nosdn.127.net/8fb4ff12e7f1618fcc0b931141c7fa3b.jpg", "http://yanxuan.nosdn.127.net/6e1cc353f97bf2f8b366cb397eea88fe.jpg", "http://yanxuan.nosdn.127.net/c4ec56a13e3827216dc0be16f5080e5b.jpg", "http://yanxuan.nosdn.127.net/da87947733a0ff5a94c9d936b09174fa.jpg", "http://yanxuan.nosdn.127.net/205d97c26aa229a981c032ab0366ebff.jpg", "http://yanxuan.nosdn.127.net/d88d80fcdd5d03a46434091b0c273631.jpg", "http://yanxuan.nosdn.127.net/183cc243b82e6ea0b91263bb47f21066.jpg", "http://yanxuan.nosdn.127.net/3aac0bdc1e6e3e4279129aa865c8ad5e.jpg", "http://yanxuan.nosdn.127.net/2a3cad0d3134ef2463e75e1b99fc4cec.jpg", "http://yanxuan.nosdn.127.net/042c4ac939a4f1158ef466b88824455f.jpg", "http://yanxuan.nosdn.127.net/c58de7a234eb733e471e1f64ef96a928.jpg", "http://yanxuan.nosdn.127.net/3552968d68612e2a8a35cef79d806115.jpg", "http://yanxuan.nosdn.127.net/86395bc01f6557eb6894dac3f10829a5.jpg", "http://yanxuan.nosdn.127.net/76bf789980a19aa091cbef371bfc25f8.jpg", "http://yanxuan.nosdn.127.net/9629a4b17e4c02fb3dcac8a62163e828.jpg", "http://yanxuan.nosdn.127.net/7d610953146283a8a86b33ed4e2c7a05.jpg", "http://yanxuan.nosdn.127.net/cd41463c0008f6d16324b06fdb4bd3e3.jpg", "http://yanxuan.nosdn.127.net/9fb8bed9eee79e3d203b992ea83003ee.jpg", "http://yanxuan.nosdn.127.net/b47fb87d3ba2b6e830df7c4d4a5abd3d.jpg", "http://yanxuan.nosdn.127.net/236790da0bf30541f47f6557410c579b.jpg", "http://yanxuan.nosdn.127.net/ec682ec3fc9ce9a725b7bbdd22fe65b7.jpg", "http://yanxuan.nosdn.127.net/5f1d4c36acfcaef9d6f45a4b8f59c706.jpg", "http://yanxuan.nosdn.127.net/5d42be158905cfda831a625714a214f6.jpg", "http://yanxuan.nosdn.127.net/9ffbc2ccbc21e464f74e6ca5cf927f51.jpg", "http://yanxuan.nosdn.127.net/4eb91d0bbd75d2d72af02e770e32bbc2.jpg", "http://yanxuan.nosdn.127.net/8f3df1743f6cb91c393d8fbdcee23394.jpg", "http://yanxuan.nosdn.127.net/ac7f16881978a2cecab34a07ffb9fd07.jpg", "http://yanxuan.nosdn.127.net/7df7ea4dbd54a4047d0e910b2e56c4d2.jpg", "http://yanxuan.nosdn.127.net/1a1011a27d6c56fb591f336a88e00b32.jpg", "http://yanxuan.nosdn.127.net/b086d154451e5c430bd6614fa4c45145.jpg", "http://yanxuan.nosdn.127.net/36e1730eb5b4e79c0bde7195aac3e045.jpg", "http://yanxuan.nosdn.127.net/a88477e1752c19ab853765237cd0ca8a.jpg", "http://yanxuan.nosdn.127.net/64784b99c626974074cf80ef8f108d19.jpg", "http://yanxuan.nosdn.127.net/efa31f86ac077a71e44be47cd301b56e.jpg", "http://yanxuan.nosdn.127.net/0acdfb3185dee0e0490da1ddc9844ad2.jpg", "http://yanxuan.nosdn.127.net/cf2dcceb422f50c00569dd64acfec65a.jpg", "http://yanxuan.nosdn.127.net/2237d47f6b351297d3fa12e01daf9cab.jpg", "http://yanxuan.nosdn.127.net/cde1b54bbaf09764fc121e76cca2222f.jpg", "http://yanxuan.nosdn.127.net/f031efd354ca7906ca8bfe3801f4be7b.jpg", "http://yanxuan.nosdn.127.net/339aba636752e8f565b1079fc230bf96.jpg", "http://yanxuan.nosdn.127.net/c3e92e4d64c757a496bc62e9a8646c5a.jpg", "http://yanxuan.nosdn.127.net/58b2f469499542ef63c4327f78e380bc.jpg", "http://yanxuan.nosdn.127.net/cd5ba93708e7443b3c1f59df56ce116c.jpg", "http://yanxuan.nosdn.127.net/0dcf5ef0d4e77d98f7a1cc88ee0176db.jpg", "http://yanxuan.nosdn.127.net/c646a0f1cea7dbb8cb35f48a2e429f9d.jpg", "http://yanxuan.nosdn.127.net/c4e4587a39174a6874f69cd0a3aca155.jpg", "http://yanxuan.nosdn.127.net/e32cb45dc6959db7065890a3d6408815.jpg", "http://yanxuan.nosdn.127.net/1fcd68fb6654f80f072636c0db0904fc.jpg", "http://yanxuan.nosdn.127.net/2b2e46d7976b83319ad32b6f68b4b4f6.jpg", "http://yanxuan.nosdn.127.net/04d03d5e40d4a19f4aafb59ad14c40ab.jpg", "http://yanxuan.nosdn.127.net/fa53b62d256a6c6a3165b3d4befaa285.jpg", "http://yanxuan.nosdn.127.net/1023184a42467e4528d7bb0cbb802840.jpg", "http://yanxuan.nosdn.127.net/831388afdb02b83ee805caf3db403848.jpg", "http://yanxuan.nosdn.127.net/4c534226b9562227937072e515f539b1.jpg", "http://yanxuan.nosdn.127.net/f1a0a156dfd7e8105a506be99ec152c1.jpg", "http://yanxuan.nosdn.127.net/d7072d6801a5fb0dc548e864f178ce63.jpg", "http://yanxuan.nosdn.127.net/9377ea7815e6a665df5ffbecc4ceff93.jpg", "http://yanxuan.nosdn.127.net/f7af042f1e02b9f5888fb3fb8c3cfda1.jpg", "http://yanxuan.nosdn.127.net/cf60a9f2adc985d8898ce60b78d86e46.jpg", "http://yanxuan.nosdn.127.net/529600568387e506569cd5da80c5f79c.jpg", "http://yanxuan.nosdn.127.net/aebb5af5303084877d292cd63220fd35.jpg", "http://yanxuan.nosdn.127.net/95dd4bb6dcbd7ab65c4fc7655cf97369.jpg", "http://yanxuan.nosdn.127.net/e5f8e8ef69c09f946b780c20390cf26f.jpg", "http://yanxuan.nosdn.127.net/3504ac0aec6fef1731088d028d52f1cd.jpg", "http://yanxuan.nosdn.127.net/d34b3687211b91042771546246966a2e.jpg", "http://yanxuan.nosdn.127.net/63047d3276da2d5801e6c3fd706f72ef.jpg", "http://yanxuan.nosdn.127.net/3e87e3af900d9e6d8cd51178981d026f.jpg", "http://yanxuan.nosdn.127.net/38518d9d674f418f9b551f68b12c62fb.jpg"],
		"inventory": [497, 329],
		"information": [{
			"attrName": "填充物",
			"attrValue": "高回弹海绵"
		}, {
			"attrName": "椅身尺寸",
			"attrValue": "840*1250*1090mm"
		}, {
			"attrName": "脚蹬尺寸",
			"attrValue": "550*445*450mm"
		}, {
			"attrName": "组装方式",
			"attrValue": "自行组装（10min）"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1.周六日暂无法发货，周末订单延至周一发货，请知悉！2.本产品配送范围：江浙沪、安徽、山东、福建、江西、湖北、河南、北京、天津、湖南、河北、山西、陕西、重庆、四川、海南、广西、贵州、云南、广东、辽宁、甘肃、宁夏、青海、内蒙古、吉林、黑龙江、新疆、西藏（航空件）3.本产品配送整件，不包安装，收到货物后，请自行按照产品说明书及商品页视频进行组装。如果组装时碰到无法解决的问题，可联系客服获取指导。4.视频仅供参考安装步骤，具体产品信息以详情页描述为准。"
		}],
		"label": "",
		"manufacture": "冈村制造商",
		"sale": 899,
		"date": "1500012540584",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154022,
		"price": 899,
		"topName": "格子转椅",
		"subName": "趣味格子 自由旋转",
		"shortDescription": ["自由旋转", "方向随心", "坚韧钢架", "稳定牢固", "十字方格", "走线平整"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/3b9a116e484fb8b9131b11712acc9b06.jpg", "http://yanxuan.nosdn.127.net/91e4d23076f3eb870c6621b382eb216e.jpg", "http://yanxuan.nosdn.127.net/e7be455e1dd5fc9171734c73b013619b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/b40ae9062899d6906168fa6eed4d5b40.png", "http://yanxuan.nosdn.127.net/b6c976b7f2db4aa9de48ecd353c84e67.jpg", "http://yanxuan.nosdn.127.net/e1aef97e3707646baebe4a0ab6f26375.jpg", "http://yanxuan.nosdn.127.net/c1ac4533e27cbbffddf28c3382f45aef.jpg", "http://yanxuan.nosdn.127.net/f752937f50443acc4e8e266c1d2e38d5.jpg"],
		"types": ["棕灰", "深咖"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/291b3810d8c3990444e4a2b6b3389c97.jpg", "http://yanxuan.nosdn.127.net/9fd83eae337068610249bd6b645c5914.jpg", "http://yanxuan.nosdn.127.net/fc8864751a27742c05d7b9744cce5167.jpg", "http://yanxuan.nosdn.127.net/e4556b34796a0f4147a4cfe271d0c250.jpg", "http://yanxuan.nosdn.127.net/3a7265bb964af5fe7274920066b7a7fb.jpg", "http://yanxuan.nosdn.127.net/1855cef4e3f1a033e406837aab5faef8.jpg", "http://yanxuan.nosdn.127.net/e49274be1c5fa1b98ac72a640d09945d.jpg", "http://yanxuan.nosdn.127.net/9412340d34c565b96f9cd2af59e40b1e.jpg", "http://yanxuan.nosdn.127.net/a2ce03f0386b4d558b09f36b8b9ad24c.jpg", "http://yanxuan.nosdn.127.net/5719589015d9be0f7f174cbd74e7cffb.jpg", "http://yanxuan.nosdn.127.net/e4ca0440c3f07b4955b3330c4ca850b1.jpg", "http://yanxuan.nosdn.127.net/5345984960caa849e4fcab4a450ff29d.jpg", "http://yanxuan.nosdn.127.net/55f88913b4fd1d0c26490422ce4c52d3.jpg", "http://yanxuan.nosdn.127.net/2513000bb7764b459f9ea671ea9d1edc.jpg", "http://yanxuan.nosdn.127.net/8a4dd6a2f1a1f9f03cd4f4fa326ca45e.jpg", "http://yanxuan.nosdn.127.net/d1d0bb2504f0aa41c2e74624d9514b7d.jpg", "http://yanxuan.nosdn.127.net/6e0dd172a2613b95a80bf2f002a576c9.jpg", "http://yanxuan.nosdn.127.net/b244553a76f96e8ff9394a226c7052d7.jpg", "http://yanxuan.nosdn.127.net/564d1e5315d869ef53a3d26bffc5b001.jpg", "http://yanxuan.nosdn.127.net/7aaf825f1f66563a7670f6a3e7c0000f.jpg", "http://yanxuan.nosdn.127.net/d90065b258e12045ec31c4264e2ccee2.jpg", "http://yanxuan.nosdn.127.net/7ac3c963bddc3e3e822f00b8f252ce2a.jpg", "http://yanxuan.nosdn.127.net/5ca17bda8857843627ff29e4e9058768.jpg", "http://yanxuan.nosdn.127.net/aa3768eb1084b32a97d97e25cd22b9b0.jpg", "http://yanxuan.nosdn.127.net/b506f068b9917808305913b8c703ba28.jpg", "http://yanxuan.nosdn.127.net/ed625756d1ff17b5c52db682d217c882.jpg", "http://yanxuan.nosdn.127.net/60a8c24b7687845b5f91270b1e331b1c.jpg", "http://yanxuan.nosdn.127.net/062a9d3a5dced6e2eaa3091e1d161509.jpg", "http://yanxuan.nosdn.127.net/6d8c21b1e45e29f27ac4faa7afbdc8d2.jpg", "http://yanxuan.nosdn.127.net/bc277cff93776051b266c9182b0fd4d1.jpg", "http://yanxuan.nosdn.127.net/74c2eff3a4b3afcc2b7311d7a7526060.jpg", "http://yanxuan.nosdn.127.net/98463e62468d6445219f46c91476e893.jpg", "http://yanxuan.nosdn.127.net/a36518c501c5acb17e4bf07b105eeb73.jpg", "http://yanxuan.nosdn.127.net/d53e48419b1d418ad14404b7fe8c10fa.jpg", "http://yanxuan.nosdn.127.net/ae61e78302a79ba81c70a3c498068c58.jpg", "http://yanxuan.nosdn.127.net/b639aa5aa584457c8f26ba10fe3d1af8.jpg", "http://yanxuan.nosdn.127.net/3e271ac0f85d56dbf1adac7e792b1dbf.jpg", "http://yanxuan.nosdn.127.net/7f6e2eaa30f8f1f2db00ae494509c9ed.jpg", "http://yanxuan.nosdn.127.net/9314d4d6e4b9fc00d7f1f311e4e1b459.jpg", "http://yanxuan.nosdn.127.net/199544dcb4233ef93d957a8af200de38.jpg", "http://yanxuan.nosdn.127.net/a2c4c1226f802308feb43d52fba4cadc.jpg", "http://yanxuan.nosdn.127.net/08b3694d9643db9e1860071259579337.jpg", "http://yanxuan.nosdn.127.net/f30b0c24d04fdd04b84376f089e5dfae.jpg", "http://yanxuan.nosdn.127.net/d68e27cd1d24514d58e39397bc9611de.jpg", "http://yanxuan.nosdn.127.net/41dd0820db9738c10766819c4e715167.jpg", "http://yanxuan.nosdn.127.net/20c81f3d5662e5b94e3a5ef1e4f7d5ae.jpg", "http://yanxuan.nosdn.127.net/dfd7ef7475371961394bfa64b43db939.jpg", "http://yanxuan.nosdn.127.net/05fe42e84dfd36b3260e7f61d6b6ccf2.jpg", "http://yanxuan.nosdn.127.net/b7fd852d3cd0efa29b12de78797c5157.jpg", "http://yanxuan.nosdn.127.net/285353dec7e962e375694f9ddae4a4e7.jpg", "http://yanxuan.nosdn.127.net/069cf761d58ee7025ac45d55d5e4f4a1.jpg", "http://yanxuan.nosdn.127.net/e82353d8339e523ee2868fdf58025243.jpg", "http://yanxuan.nosdn.127.net/7e7e9831fb0ac6645746ebd26216a849.jpg", "http://yanxuan.nosdn.127.net/16352dc25cecbfdc2b27a09cb2688e96.jpg"],
		"inventory": [120, 537],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "472*580*832mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "无需安装"
		}, {
			"attrName": "颜色",
			"attrValue": "深咖；棕灰"
		}],
		"label": "",
		"manufacture": "德国hülsta制造商",
		"sale": 661,
		"date": "1500012543068",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154021,
		"price": 849,
		"topName": "面包椅",
		"subName": "面包椅面 神奇坐感",
		"shortDescription": ["面包椅面", "饱满绵软", "加厚椅背", "贴合曲线", "环保面料", "防水防污"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/da3fce69f9686d7b37e309ae7e596570.jpg", "http://yanxuan.nosdn.127.net/0681d8638e1a3922fedc645dbb399619.jpg", "http://yanxuan.nosdn.127.net/a5e75d7ca8febc0aa690fd9326a6b1d7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/80ddf769c55b9605256cc7a08c8e7264.png", "http://yanxuan.nosdn.127.net/9f8c8266e43bd057f1f51fd82b95983a.jpg", "http://yanxuan.nosdn.127.net/dbd1be6d9d78ff3e32161ca92f019016.jpg", "http://yanxuan.nosdn.127.net/6d0934ecbadb371e90572da22f13f477.jpg", "http://yanxuan.nosdn.127.net/b3936c9de91934479f98933a4542588b.jpg"],
		"types": ["灰色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/5d97f490adcb0094cc1af5244b198b63.jpg", "http://yanxuan.nosdn.127.net/9838b763c91584a619307b14b866c7f9.jpg", "http://yanxuan.nosdn.127.net/aa4d6adb28d30fff614ca7e7d8327c5f.jpg", "http://yanxuan.nosdn.127.net/a755eedaeb821bf06c953cde98f957fe.jpg", "http://yanxuan.nosdn.127.net/f3dbc8ea164d625c1e260a807d6d9e1a.jpg", "http://yanxuan.nosdn.127.net/4d1f4d43ca9a901b0de45865d88613cb.jpg", "http://yanxuan.nosdn.127.net/8e4f4c6bb4926578424155a8a4d702a6.jpg", "http://yanxuan.nosdn.127.net/d25e7ff0e37b5cd52e8247650cde6580.jpg", "http://yanxuan.nosdn.127.net/abdf51aa37a11020284513734e70c3e1.jpg", "http://yanxuan.nosdn.127.net/5e32aeb7c8928957fc8d9212adfd3647.jpg", "http://yanxuan.nosdn.127.net/12fd2daaf3d342f68af7cec627b0056b.jpg", "http://yanxuan.nosdn.127.net/6b49d84304ed670b8aa834ffe0c251cb.jpg", "http://yanxuan.nosdn.127.net/8255d2333aad5e1ef08745080b3a66b7.jpg", "http://yanxuan.nosdn.127.net/712bb7ac42b9e1a7bd53c30fd88aba6c.jpg", "http://yanxuan.nosdn.127.net/c11a6983cdb00af9b6e5935101126143.jpg", "http://yanxuan.nosdn.127.net/8e94dee07f8833180350da096515e2f8.jpg", "http://yanxuan.nosdn.127.net/848c3ef3774416210eb4079add429c08.jpg", "http://yanxuan.nosdn.127.net/15e4d896a3dca854ab1a3392f3920cbb.jpg", "http://yanxuan.nosdn.127.net/1e2399031d1d2fde8f7f43b9c39c7cce.jpg", "http://yanxuan.nosdn.127.net/f8aecb8c158089cdbe2fc5aae4cff83e.jpg", "http://yanxuan.nosdn.127.net/2af33190e76a8d5bc2a06d7650c762b3.jpg", "http://yanxuan.nosdn.127.net/469c8977e5266e328dd5e4d0901bc98b.jpg", "http://yanxuan.nosdn.127.net/a37f25e7f87e57dbe21f9483a894c0af.jpg", "http://yanxuan.nosdn.127.net/5a5e22cdedb6cd37ab03d54ef31a418e.jpg", "http://yanxuan.nosdn.127.net/6b1fa2d6fbb79885f8dc3367e339c629.jpg", "http://yanxuan.nosdn.127.net/0b6bbe497142abc60efcc13eff4a3223.jpg", "http://yanxuan.nosdn.127.net/20a1a5ad255d8f2cb23e0ddf499a7549.jpg", "http://yanxuan.nosdn.127.net/061d055d087b156706aac7a34833568d.jpg", "http://yanxuan.nosdn.127.net/fb3265ded18b7fcb0666547685b71a31.jpg", "http://yanxuan.nosdn.127.net/80643c20dfbec105e5fa95e8d9c63843.jpg", "http://yanxuan.nosdn.127.net/fba7e079d7e23c7419f92024de253a1d.jpg", "http://yanxuan.nosdn.127.net/24bbef3a0353669785c908c518d2fcb0.jpg", "http://yanxuan.nosdn.127.net/888b4d839bff3023700ddf2109bbbd02.jpg", "http://yanxuan.nosdn.127.net/ac9e3fb8adc36b7ce3b72d0be3d21504.jpg", "http://yanxuan.nosdn.127.net/755745c268dc3e43d1b08a12df866b05.jpg", "http://yanxuan.nosdn.127.net/5c89a85a1fda69efc9b83e40e2071a20.jpg", "http://yanxuan.nosdn.127.net/8b6f3d3294c373c13b644d4ac470c8c0.jpg", "http://yanxuan.nosdn.127.net/31011705839f81375ca617067c1f91ba.jpg", "http://yanxuan.nosdn.127.net/38d6a3859b92c4b132b310f90f7e8dff.jpg", "http://yanxuan.nosdn.127.net/a455625af2a0abd02f11428f5e947220.jpg", "http://yanxuan.nosdn.127.net/48fa325daf63e4518542835c06681cb8.jpg", "http://yanxuan.nosdn.127.net/5bd4deecc62607514a7f8091afad839d.jpg", "http://yanxuan.nosdn.127.net/6f3429946d207793e585e7dfaece5686.jpg", "http://yanxuan.nosdn.127.net/2342b24f3ee8f3ec43505d2363ddd386.jpg", "http://yanxuan.nosdn.127.net/99b18e97947f646cd8ab687385b0f550.jpg", "http://yanxuan.nosdn.127.net/93cfbf76425ea2386113fed3e725ab04.jpg", "http://yanxuan.nosdn.127.net/e9a5b34799aa5893232787ed4fb1568c.jpg", "http://yanxuan.nosdn.127.net/8a697eaa30c1277f97c705c6a6dd33f0.jpg", "http://yanxuan.nosdn.127.net/3b7e1ddb8a3efba33b33e3c93fbcabdf.jpg", "http://yanxuan.nosdn.127.net/078150b25d755e33e9d4b5f4c696cab2.jpg"],
		"inventory": [859],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "480*565*830mm"
		}],
		"label": "",
		"manufacture": "德国hülsta制造商",
		"sale": 140,
		"date": "1500012545518",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154023,
		"price": 1099,
		"topName": "2件装 叠加餐椅",
		"subName": "随心叠放 方便存储",
		"shortDescription": ["叠装轻便", "节省空间", "舒适坐面", "久坐不累", "环保面料", "牢固耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/cb06ceba794d17570ffb9982663c2a84.jpg", "http://yanxuan.nosdn.127.net/e8d693d763becee6d8517029452b56a6.jpg", "http://yanxuan.nosdn.127.net/8cf38ec25a6e39d8bac790a7e60f6f3b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3601ddd1952e5cc17e94dc7f178aff1e.png", "http://yanxuan.nosdn.127.net/f55d1ce204cc21c507f2ce635fb443eb.jpg", "http://yanxuan.nosdn.127.net/81b87c1359faf560a7033606457371e4.jpg", "http://yanxuan.nosdn.127.net/a69fa0db6a08b2f2220922cdef6d1a38.jpg", "http://yanxuan.nosdn.127.net/52db8f20e21d6d2656d8c0e47800e0d0.png"],
		"types": ["浅灰", "深灰"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/96e3ff6c52e37c11327f7d9916ae4680.jpg", "http://yanxuan.nosdn.127.net/8ac0f8f90a969ac60efda5cc1eb05bf0.jpg", "http://yanxuan.nosdn.127.net/1e6beca9be3c1c17620cfd1642cd73dc.jpg", "http://yanxuan.nosdn.127.net/5c250df5234a812dd54a64f50f996c1d.jpg", "http://yanxuan.nosdn.127.net/c53a6249cc67b3b26969d77011d46d47.jpg", "http://yanxuan.nosdn.127.net/43861b8a8cf4f07d54f00bb75b4c018a.jpg", "http://yanxuan.nosdn.127.net/3f1c554606276f3588780b084e571cac.jpg", "http://yanxuan.nosdn.127.net/e4d39db31e5d3980e5484715e5685446.jpg", "http://yanxuan.nosdn.127.net/3caf36aeb8f523a96494a5c2bdda1b42.jpg", "http://yanxuan.nosdn.127.net/81f344347ba5a09b4216443cb732bb29.jpg", "http://yanxuan.nosdn.127.net/8e22539689349b65abcb1c5395f6de13.jpg", "http://yanxuan.nosdn.127.net/82619fe218783cae7140a1bb14a05afb.jpg", "http://yanxuan.nosdn.127.net/2634996f2fb9933038c57c7eeebfe96a.jpg", "http://yanxuan.nosdn.127.net/55a599d57362cf992231e6e82fb0df83.jpg", "http://yanxuan.nosdn.127.net/a78e4cc2360501e79fe2211911f9cefb.jpg", "http://yanxuan.nosdn.127.net/12446e0433c1f6014af400795aba0857.jpg", "http://yanxuan.nosdn.127.net/0fad29141fe5b6055103275df607d9dc.jpg", "http://yanxuan.nosdn.127.net/8b9721a126e2359dc5491894bfe78188.jpg", "http://yanxuan.nosdn.127.net/cf581aef8acb2fbec64c0e18f14fba5d.jpg", "http://yanxuan.nosdn.127.net/a7d9d9eeca7d948fee28a6f684a76bd7.jpg", "http://yanxuan.nosdn.127.net/22b803660a71eab46a096ae915ec6a1b.jpg", "http://yanxuan.nosdn.127.net/f10932558877ab9169613c4933d31de5.jpg", "http://yanxuan.nosdn.127.net/9ebd6d009d43c890bdb25133dda94ac3.jpg", "http://yanxuan.nosdn.127.net/c9c59a551fed162326fe6fa6216c0f48.jpg", "http://yanxuan.nosdn.127.net/c4e3a6508cab53862806f581a657cf0b.jpg", "http://yanxuan.nosdn.127.net/f012335e056488aedcef9569966d77af.jpg", "http://yanxuan.nosdn.127.net/251337ba91f5bc7acaa2bd54ee85309c.jpg", "http://yanxuan.nosdn.127.net/793fb0fd4dae1db979f808f3fe236325.jpg", "http://yanxuan.nosdn.127.net/797dced03ad566d4b9ec708022541418.jpg", "http://yanxuan.nosdn.127.net/2e11d4ebc98cf0ac994f1ba4e28cb5db.jpg", "http://yanxuan.nosdn.127.net/637ddf33f96a6817588b3f7b8804db9a.jpg", "http://yanxuan.nosdn.127.net/b5846de481f7a91ec401aab6a93bff0a.jpg", "http://yanxuan.nosdn.127.net/eaed0b61d246b346ecf981d259a6031a.jpg", "http://yanxuan.nosdn.127.net/f08de26f36845a5bd6503f083a0cd107.jpg", "http://yanxuan.nosdn.127.net/91cf25f9fd638e7cec49d21061009b97.jpg", "http://yanxuan.nosdn.127.net/603d9122892aebfcdc580a62ba0194f6.jpg", "http://yanxuan.nosdn.127.net/c008be641c53fa8cb6b805bd75ee82d9.jpg", "http://yanxuan.nosdn.127.net/a17307765df16dda88a58c8ed90c8ed6.jpg", "http://yanxuan.nosdn.127.net/b6f902af88c2322ce6e5ae3a6464b529.jpg", "http://yanxuan.nosdn.127.net/0f54967e2bfea6f2e2be0131833b8fc6.jpg", "http://yanxuan.nosdn.127.net/0e8af9c1e883924384334b4f08db1c92.jpg", "http://yanxuan.nosdn.127.net/46bf5fe783e7082fa4c247431e1343b3.jpg", "http://yanxuan.nosdn.127.net/96729d5eda8eb83e0124439cb6513ca2.jpg", "http://yanxuan.nosdn.127.net/ddb0cbbfd15bf367021ebf4d5bb438ad.jpg", "http://yanxuan.nosdn.127.net/2718723c65a805a5420b170846e75527.jpg", "http://yanxuan.nosdn.127.net/b8bd01da6ca851d6f63fb83cd58cddf5.jpg", "http://yanxuan.nosdn.127.net/84d596078628ad19944471d2c042e4aa.jpg", "http://yanxuan.nosdn.127.net/074a67d11783b452918ebd47127e61e3.jpg", "http://yanxuan.nosdn.127.net/06c6c1f166f389d6fa1374544b2fa799.jpg", "http://yanxuan.nosdn.127.net/6c50a7cc6b73c8f1cd4fa3eee27491bd.jpg", "http://yanxuan.nosdn.127.net/8b204268e66e0dea710836995cb7aa9a.jpg"],
		"inventory": [832, 974],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "445*560*870mm"
		}, {
			"attrName": "规格",
			"attrValue": "2件装"
		}, {
			"attrName": "颜色",
			"attrValue": "浅灰；深灰"
		}],
		"label": "",
		"manufacture": "德国hülsta制造商",
		"sale": 4,
		"date": "1500012548140",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1109008,
		"price": 3999,
		"topName": "黑凤梨 云端沙发组合",
		"subName": "MUJI供应商携手打造",
		"shortDescription": ["舒适靠背", "5档可调", "外套可拆", "方便清洗", "柔软填充", "置身云端"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/2d7f84a8cd457020b9b0a001cb922d82.jpg", "http://yanxuan.nosdn.127.net/ec4080fe279366fd3e0b6bb3e3d4009f.jpg", "http://yanxuan.nosdn.127.net/45292b6bb11eeb06e991d6824c96622b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d2b638c0671be2e507463bcc7f1b0425.png", "http://yanxuan.nosdn.127.net/52e1a79197af9b1cc73c836f74b190d4.jpg", "http://yanxuan.nosdn.127.net/4c07ef11f91c4139411f5fff38c78750.jpg", "http://yanxuan.nosdn.127.net/6ac6c255e6ad5039e903f3051b56e25e.jpg", "http://yanxuan.nosdn.127.net/88aef8f37fd7be612875d93a1b3867c4.jpg"],
		"types": ["2P+1P+0.5P"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/4f018814526cc689c33245add0c73d18.jpg", "http://yanxuan.nosdn.127.net/8772c1ddef07961e5fbacf078bf2e5ac.jpg", "http://yanxuan.nosdn.127.net/44ecf036402fd08e2c706a4d77f71777.jpg", "http://yanxuan.nosdn.127.net/dd3fad87a2a513db4ec0d1ea3fc44058.jpg", "http://yanxuan.nosdn.127.net/5dfa805f1f0e5a727a879cb964e51008.jpg", "http://yanxuan.nosdn.127.net/885b89e44c7d5b34d988749989f95b01.jpg", "http://yanxuan.nosdn.127.net/8cdae1260485bb2d65c094579c502cc9.jpg", "http://yanxuan.nosdn.127.net/d1d06118b3495b523032bbd5f37488ac.jpg", "http://yanxuan.nosdn.127.net/8f85a18b9a3fef0b3655a350c56ef46e.jpg", "http://yanxuan.nosdn.127.net/d4b4a5f1f0e364a48dbd4952c0c055cd.jpg", "http://yanxuan.nosdn.127.net/8158142654c8cd06f52410f9aebf9428.jpg", "http://yanxuan.nosdn.127.net/4019a3222548379fc09f9b1350ed258f.jpg", "http://yanxuan.nosdn.127.net/9f5f283d79b19d1c8fb5614283eeab62.jpg", "http://yanxuan.nosdn.127.net/826a8c9e9eb9e4a6fa027b43a910c23c.jpg", "http://yanxuan.nosdn.127.net/d674253aae822b5dd802c2e597cddabe.jpg", "http://yanxuan.nosdn.127.net/c03e86ef73b4f36e9cba5b3a711b268b.jpg", "http://yanxuan.nosdn.127.net/c0454a4350e0d3f6e806e33c5f10fb89.jpg", "http://yanxuan.nosdn.127.net/00bb899de9558dd7a421bfc8c623b56a.jpg", "http://yanxuan.nosdn.127.net/ee86ba708753450215fed65cf37de038.jpg", "http://yanxuan.nosdn.127.net/8c6178b72779b53eb1fa718758fda9b7.jpg", "http://yanxuan.nosdn.127.net/3b321f3136b519c6c0c6ba3da9edfd82.jpg", "http://yanxuan.nosdn.127.net/c83161c4e05784414da9e6322320ed4c.jpg", "http://yanxuan.nosdn.127.net/b4d4bdf91f6087a085d2e31255ecdad3.jpg", "http://yanxuan.nosdn.127.net/01b63c828af258bd06ede7c7902bdece.jpg", "http://yanxuan.nosdn.127.net/8cda5e9e4b3ef3e56a3008a3027b826b.jpg", "http://yanxuan.nosdn.127.net/3ffbde5e79339a006eda93b6994ad96a.jpg", "http://yanxuan.nosdn.127.net/db182bb5fc6cdd8aa1cad9a2173dbd8b.jpg", "http://yanxuan.nosdn.127.net/9cf2c3e5957ddd4d5b130202d7a9af19.jpg", "http://yanxuan.nosdn.127.net/87354799e2ba119881a0f76eac347ab6.jpg", "http://yanxuan.nosdn.127.net/1c71ce27a6b52f47ea0a0577c1577e31.jpg", "http://yanxuan.nosdn.127.net/1b1b0eff4c63c04b0bc7b7e38861cca6.jpg", "http://yanxuan.nosdn.127.net/2c568f0fbdbe8835a7222c9c89648489.jpg", "http://yanxuan.nosdn.127.net/b48c31aa50048d0453905003301762b2.jpg", "http://yanxuan.nosdn.127.net/e6b898e1d32b7dcd26faf8e161b3b01e.jpg", "http://yanxuan.nosdn.127.net/c3b387dc7283cc8ac1196d224205daf7.jpg", "http://yanxuan.nosdn.127.net/1023b383673768b48772a40fc3169886.jpg", "http://yanxuan.nosdn.127.net/14b03c40ef34070a768ec3e5e90a6eb7.jpg", "http://yanxuan.nosdn.127.net/92a9337b85d6ba4821cb64c36422212a.jpg", "http://yanxuan.nosdn.127.net/8deb2c1ec01fcb84874bb6554d58e9e9.jpg", "http://yanxuan.nosdn.127.net/5939d4f8e23cda756e04a2e167c3cb46.jpg", "http://yanxuan.nosdn.127.net/1c56849dc718e925aca75c9e3dc3de3d.jpg", "http://yanxuan.nosdn.127.net/e34151f6d458563c498fcc6de1e29ba2.jpg", "http://yanxuan.nosdn.127.net/fce3c71a58bbe72543d2164e5dcd50c9.jpg", "http://yanxuan.nosdn.127.net/21a9397e890bd495d00fa0ce812a394f.jpg", "http://yanxuan.nosdn.127.net/2eb27fa65ce7a0a0b6438a23cf66b37b.jpg", "http://yanxuan.nosdn.127.net/9414b97e9c8f5ac8137c8425e42d0955.jpg", "http://yanxuan.nosdn.127.net/ea5ebedb9475c9ea69e23b890e789f87.jpg", "http://yanxuan.nosdn.127.net/995c4e62e8e9292335380d0d1dc446ae.jpg", "http://yanxuan.nosdn.127.net/bbea0b3b5a440f6b14ced2fe4fb81eea.jpg", "http://yanxuan.nosdn.127.net/270f45aa41e948ecde775411838a92b9.jpg", "http://yanxuan.nosdn.127.net/9b888df9915c4f9497d455081cc352e8.jpg", "http://yanxuan.nosdn.127.net/833125f95260b926901c6eb02e31f392.jpg", "http://yanxuan.nosdn.127.net/111033bd20cd0b28841867159120904d.jpg", "http://yanxuan.nosdn.127.net/a32e129436f06e30cbcd3633d11e9007.jpg", "http://yanxuan.nosdn.127.net/2be9f6f815b703217c80888eedd8b1c6.jpg", "http://yanxuan.nosdn.127.net/66415970b8d9dfb8b3c50686f0158e11.jpg", "http://yanxuan.nosdn.127.net/3af3ff254b5793cd7d9f6c81b52397c0.jpg", "http://yanxuan.nosdn.127.net/7d513edb8946496c10b77c6205bdd10b.jpg", "http://yanxuan.nosdn.127.net/c461ada94ce6947d4b4a5c2ac93c4e63.jpg", "http://yanxuan.nosdn.127.net/16f330ac5627a463d70732da7d2efac1.jpg"],
		"inventory": [154],
		"information": [{
			"attrName": "框架材质",
			"attrValue": "钢管"
		}, {
			"attrName": "面料成分",
			"attrValue": "15%亚麻+85%涤"
		}, {
			"attrName": "颜色",
			"attrValue": "米白色"
		}, {
			"attrName": "是否组装",
			"attrValue": "组装【沙发脚】"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "2P:1300*930*930mm; 1P:680*930*930mm; 0.5P:670*450*380mm"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 140,
		"date": "1500012550832",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1207004,
		"price": 2199,
		"topName": "YEATION百合沙发单人位",
		"subName": "柔软舒适，深陷其中",
		"shortDescription": ["优质面料", "轻松拆洗", "弹力坐垫", "舒适坐感", "稳固框架", "结实耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9b3bea99999f0484bff0e62e21e8f1be.jpg", "http://yanxuan.nosdn.127.net/2103d5264d98ee85f9e86d8a85188e12.jpg", "http://yanxuan.nosdn.127.net/3457ec962535a16c6396c895e0c73164.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/294eb0708534482ec72adca8d1d7397b.png", "http://yanxuan.nosdn.127.net/cb13a4955d037ef75ec14defebc26173.jpg", "http://yanxuan.nosdn.127.net/034ecf8926bb56079138664aa0351068.jpg", "http://yanxuan.nosdn.127.net/8086a0a1110cec39151d60bcbda013ea.jpg", "http://yanxuan.nosdn.127.net/cfa6eaf6e4bfa1c1bc03eaa42b4a8395.jpg"],
		"types": ["米白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/02ee66cef162f62d1da88d3d8e3dc235.jpg", "http://yanxuan.nosdn.127.net/4107e7c86db1d17c7216410ef9d36916.jpg", "http://yanxuan.nosdn.127.net/a02957e6692c4b096b540b8fb289ae7e.jpg", "http://yanxuan.nosdn.127.net/28a246dc3466605c44daf3b57103da19.jpg", "http://yanxuan.nosdn.127.net/2d65e26b320b99238c7ba11644a11d47.jpg", "http://yanxuan.nosdn.127.net/0637de2662da9192fe36a0d21c7c1e50.jpg", "http://yanxuan.nosdn.127.net/ec77e392aac3e09b1cca6cbc787d3075.jpg", "http://yanxuan.nosdn.127.net/a97bdcbb7a65e3aa8e642bf0255f4d7a.jpg", "http://yanxuan.nosdn.127.net/a89a2fbb2f98b93b5dd66231016f0920.jpg", "http://yanxuan.nosdn.127.net/933c051271d773c4ffca99ccde6dacec.jpg", "http://yanxuan.nosdn.127.net/dd5a74153bf8e5be26f0c47c0c9f1bb9.jpg", "http://yanxuan.nosdn.127.net/7d8bb14cf2392c32fb81f1d2d6fd1c59.jpg", "http://yanxuan.nosdn.127.net/b7fdd2045678ce21ef9b70a43402bfda.jpg", "http://yanxuan.nosdn.127.net/02ebd7075f149e425300e41eff63ff4f.jpg", "http://yanxuan.nosdn.127.net/12b2cb45ea902a81856ff3d435b85c72.jpg", "http://yanxuan.nosdn.127.net/3ead0810a3420215f51c9f683bed9a4e.jpg", "http://yanxuan.nosdn.127.net/e217fb34efad32b9bd895cd6332aab46.jpg", "http://yanxuan.nosdn.127.net/cd4d35421c4cd181a9162248953ec161.jpg", "http://yanxuan.nosdn.127.net/a1e045426175e1b674f34349e3b0a426.jpg", "http://yanxuan.nosdn.127.net/c2c50929ccffbda440af24baae6825dd.jpg", "http://yanxuan.nosdn.127.net/05f07ee44f14b05605e59c66da007962.jpg", "http://yanxuan.nosdn.127.net/628b4dd6a19b9644420351ac3c058843.jpg", "http://yanxuan.nosdn.127.net/00c2b7d987fc7ceb3f22c86b2984f78e.jpg", "http://yanxuan.nosdn.127.net/41d6e914e5f618d1cafd37cfc88ae8f0.jpg", "http://yanxuan.nosdn.127.net/4fffd983dc8e64fa818369d73d593c97.jpg", "http://yanxuan.nosdn.127.net/c8ac9920ae437794a99801b44dd00a0f.jpg", "http://yanxuan.nosdn.127.net/ac09948222d88478767598ad02aa834c.jpg", "http://yanxuan.nosdn.127.net/2499b1057af90f14af0afd5cb606133b.jpg", "http://yanxuan.nosdn.127.net/ee778d3000d0f1f91541e99b6ec0773b.jpg", "http://yanxuan.nosdn.127.net/33f3aede5dae86a6f762fcd3005ebc01.jpg", "http://yanxuan.nosdn.127.net/b0dbd6e90e27e489b54a0f75822fa1ad.jpg", "http://yanxuan.nosdn.127.net/597a9d93d2bfcd31992bb788f94a0068.jpg", "http://yanxuan.nosdn.127.net/96608c00e2aa8a8a11b217d202193e58.jpg", "http://yanxuan.nosdn.127.net/981858a56ff219acb3e122a6c86233d4.jpg", "http://yanxuan.nosdn.127.net/27fc1bd12fd0f7121f935653878fe4f7.jpg", "http://yanxuan.nosdn.127.net/32dc8ca58ad585ff9b94a77061c91c43.jpg", "http://yanxuan.nosdn.127.net/08c32c4959441dcd411387041fd44566.jpg", "http://yanxuan.nosdn.127.net/75e1ea9a78a821c24c95a80ef3471afe.jpg", "http://yanxuan.nosdn.127.net/c7a49bcaffba8e05608d8094ddc011e4.jpg", "http://yanxuan.nosdn.127.net/47475e7811a117b0c4e7ef6841dc3cf7.jpg", "http://yanxuan.nosdn.127.net/08c023e6ed1665f46798d90130f2f8cd.jpg", "http://yanxuan.nosdn.127.net/58d827ef31e9bea0d4cd1e0a5715db3d.jpg", "http://yanxuan.nosdn.127.net/9cc7d99c4204a3d52476cedbe7335f43.jpg", "http://yanxuan.nosdn.127.net/9ffa666f99323d9d6c66e9d418fdd28d.jpg", "http://yanxuan.nosdn.127.net/df085d8f5d7d3e68cf5e59d3b9570c42.jpg", "http://yanxuan.nosdn.127.net/7a0dbbfadec0d7be46d46ec2d7315710.jpg", "http://yanxuan.nosdn.127.net/2c72e390c12438c4f12afe82806d9ab3.jpg", "http://yanxuan.nosdn.127.net/486ad1aef5de9367b77b8385c548b99b.jpg", "http://yanxuan.nosdn.127.net/375c767a2626d41b32f63c8cecb1c967.jpg", "http://yanxuan.nosdn.127.net/f4e147bf068e7051a81dbbc4e5f305f8.jpg", "http://yanxuan.nosdn.127.net/0d4fd9ac9a7f2d3eeadcc7ea8b5bdf63.jpg", "http://yanxuan.nosdn.127.net/956648260f818cf28e5435f32deeb71d.jpg", "http://yanxuan.nosdn.127.net/2ade8b57a4cc231ec1918a9839f01423.jpg", "http://yanxuan.nosdn.127.net/dc2dbf10cc270fade0336a7c36c3d682.jpg", "http://yanxuan.nosdn.127.net/1eaadbfc21c9220528bf74e416822456.jpg", "http://yanxuan.nosdn.127.net/386fcd4a0135cd9ed71fb0335c4a9453.jpg", "http://yanxuan.nosdn.127.net/3e412134c920b702bdc162669038615f.jpg", "http://yanxuan.nosdn.127.net/bb322aef7d590ebc9de1d9d2a606f5d1.jpg"],
		"inventory": [280],
		"information": [{
			"attrName": "填充物",
			"attrValue": "坐垫：海绵+独立弹簧靠背：70%羽毛+30%棉"
		}, {
			"attrName": "颜色",
			"attrValue": "米白色"
		}, {
			"attrName": "面料成分",
			"attrValue": "50%棉+15%麻+35%纤丝"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "990*890*725mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，实木脚请自行安装"
		}],
		"label": 新品,
		"manufacture": "",
		"sale": 84,
		"date": "1500012553499",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1206002,
		"price": 3999,
		"topName": "YEATION百合沙发三人位",
		"subName": "柔软舒适，深陷其中",
		"shortDescription": ["优质面料", "轻松拆洗", "弹力坐垫", "舒适坐感", "稳固框架", "结实耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/5af208f9056654f5da8e0cb2880339de.jpg", "http://yanxuan.nosdn.127.net/83ea1984a51372d0517de4d0cab84a30.jpg", "http://yanxuan.nosdn.127.net/e0de4fcc4acdbe4d89a71758acd19a9a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ddd45bd330b83a6afdd7ef8973fbf1fb.png", "http://yanxuan.nosdn.127.net/88b1aa2c34f06bfa8714e3e1010c9af1.jpg", "http://yanxuan.nosdn.127.net/85c2e542906b0c23516a66e30f49def0.jpg", "http://yanxuan.nosdn.127.net/a76369828db89fa17f0c574dd0fc2820.jpg", "http://yanxuan.nosdn.127.net/da1085edbf811d4611a8d9bd55427257.jpg"],
		"types": ["米白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/5a91bb95e7c37aacd39f53cdd16e8bf5.jpg", "http://yanxuan.nosdn.127.net/9137bdd3fe370fe23ec0443a8b36b78b.jpg", "http://yanxuan.nosdn.127.net/ee9b3832cfcb82933e11ad1e08210289.jpg", "http://yanxuan.nosdn.127.net/10c5ee0eb83e3d8acda8a80a27f73a69.jpg", "http://yanxuan.nosdn.127.net/c7b5d4fdc51c3cb7d8a388d83764faab.jpg", "http://yanxuan.nosdn.127.net/e66bb979fa1fef4becb7fa621ce499b7.jpg", "http://yanxuan.nosdn.127.net/3f62eccc96b4de7798d3cbb353768295.jpg", "http://yanxuan.nosdn.127.net/ca6b8f97741d1e36c78a07a5af94548b.jpg", "http://yanxuan.nosdn.127.net/dc151312f6429d42e0eb5146effc8d39.jpg", "http://yanxuan.nosdn.127.net/8b9df16236d2497f5262810280694ac4.jpg", "http://yanxuan.nosdn.127.net/d172af924dede254a2c79c330e235069.jpg", "http://yanxuan.nosdn.127.net/58e2f00287cd8bbb87aea9220d994386.jpg", "http://yanxuan.nosdn.127.net/394565874f3998b3a095162ff37c0604.jpg", "http://yanxuan.nosdn.127.net/8ac38da3c452a66998b333b2faafeda8.jpg", "http://yanxuan.nosdn.127.net/fc2c33884d19dc72e00dc3e17c5aa3fe.jpg", "http://yanxuan.nosdn.127.net/f42b791480583e329022175ff03cbb4d.jpg", "http://yanxuan.nosdn.127.net/f22ba39c8e602c2e1057e5df8c8ed3ad.jpg", "http://yanxuan.nosdn.127.net/3382b7f7f7f4d68baabd1370cb45a502.jpg", "http://yanxuan.nosdn.127.net/0e2c92aeb8d9ff2d60ac163cefee7193.jpg", "http://yanxuan.nosdn.127.net/909a98789243427ff9915b4bbb8fa834.jpg", "http://yanxuan.nosdn.127.net/56e5ef749930632613ce327d8c7ef4ad.jpg", "http://yanxuan.nosdn.127.net/0ac20fbbc8f0b35094caa86e2e29ab3b.jpg", "http://yanxuan.nosdn.127.net/703b21eca999d8be1ca1c5799322296c.jpg", "http://yanxuan.nosdn.127.net/cfb166acbbda939154965241d8899f65.jpg", "http://yanxuan.nosdn.127.net/b200fd633cd832f39c585b4ebd53ee44.jpg", "http://yanxuan.nosdn.127.net/dd1972cdcd40d389f9e77e2ac94a13ed.jpg", "http://yanxuan.nosdn.127.net/de39a264adfc81181d5a7f80d83f20d0.jpg", "http://yanxuan.nosdn.127.net/bd5261ac066651f669fd013ec33aec42.jpg", "http://yanxuan.nosdn.127.net/5bc0114c88f62139efd874c3841aff95.jpg", "http://yanxuan.nosdn.127.net/c82856292f9980d1990eea412c531676.jpg", "http://yanxuan.nosdn.127.net/eb5364ed739b080cb794ce0d81b44b51.jpg", "http://yanxuan.nosdn.127.net/223389f8c7ce3f5134e4d5ab5b0b458b.jpg", "http://yanxuan.nosdn.127.net/4c7d3370d739e0312793f7f1ff63d43a.jpg", "http://yanxuan.nosdn.127.net/925680612b6dd7580e28d5be3e42a5da.jpg", "http://yanxuan.nosdn.127.net/1f1419c1f4cfd9684d38c321501a24c9.jpg", "http://yanxuan.nosdn.127.net/df388ef4bcabd695e3a4924cc0209583.jpg", "http://yanxuan.nosdn.127.net/62f469df6ae596133b393535a0f66cee.jpg", "http://yanxuan.nosdn.127.net/1bd5d70c6d23049bb432ee903b4f70c1.jpg", "http://yanxuan.nosdn.127.net/40dac098e464a8ac7545c801d21119cd.jpg", "http://yanxuan.nosdn.127.net/23271e3bb0c1cbe2eb0f2e71d80bcc3c.jpg", "http://yanxuan.nosdn.127.net/fcbef0695d891414715afb82aec5f580.jpg", "http://yanxuan.nosdn.127.net/30d2eb0b3744b0473e6a9f2f98179724.jpg", "http://yanxuan.nosdn.127.net/037b5afe80a06189e61cf304fbaaa05b.jpg", "http://yanxuan.nosdn.127.net/178df36c63656980a2f3853217e483f8.jpg", "http://yanxuan.nosdn.127.net/6132b0d44b22a6a2511400052d91f4ce.jpg", "http://yanxuan.nosdn.127.net/3c11e506fa8e1f8263c467c5a7c5b3fd.jpg", "http://yanxuan.nosdn.127.net/0bbc9d993945dfa2c0b90e294fae153e.jpg", "http://yanxuan.nosdn.127.net/7032ba3799ed1c86fda19d82253d12e4.jpg", "http://yanxuan.nosdn.127.net/19c4b0802fb55037ab450fedbfa96c53.jpg", "http://yanxuan.nosdn.127.net/e92cd94c572f563381ec0dc54013a75d.jpg", "http://yanxuan.nosdn.127.net/9a7a68b728eabe7eb9f8af56ad58cad2.jpg", "http://yanxuan.nosdn.127.net/1d0f72bb05b8240c0fd0dc8b36f6964e.jpg", "http://yanxuan.nosdn.127.net/5723df463502abe4feeb3df0d8d2b6e1.jpg", "http://yanxuan.nosdn.127.net/be1db670565634cc5be87a57057af3bc.jpg", "http://yanxuan.nosdn.127.net/2ac63b346011af07902721edcc71634f.jpg"],
		"inventory": [921],
		"information": [{
			"attrName": "填充物",
			"attrValue": "坐垫：海绵+独立弹簧靠背：70%羽毛+30%棉"
		}, {
			"attrName": "颜色",
			"attrValue": "米白色"
		}, {
			"attrName": "面料成分",
			"attrValue": "50%棉+15%麻+35%纤丝"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "2200*890*725mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，实木脚请自行安装"
		}],
		"label": 新品,
		"manufacture": "",
		"sale": 196,
		"date": "1500012555977",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154020,
		"price": 2699,
		"topName": "对伴沙发",
		"subName": "轻巧两人位 灵动圆润",
		"shortDescription": ["曼妙曲线", "灵动圆润", "优选海绵", "舒适坐感", "牢固框架", "稳定承重"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a7c926f05a451cc03ed9012ea3fbb76f.jpg", "http://yanxuan.nosdn.127.net/d9a65277eee83108bc572824810d402c.jpg", "http://yanxuan.nosdn.127.net/003663f56efd70a5f7ccde469bf22f04.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9c925080d9715e75231440bb32ad898e.png", "http://yanxuan.nosdn.127.net/bf2f2551a7dbe6279cf2e9fec4f0d64e.jpg", "http://yanxuan.nosdn.127.net/82ffc630f9ae8786fcc76634cf34bbcc.jpg", "http://yanxuan.nosdn.127.net/a7b51deb4b75c5297899b8dbceb33597.jpg", "http://yanxuan.nosdn.127.net/a8543896e8cb4281181698be64861478.jpg"],
		"types": ["灰色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/57e60e09db51b9c0262ea12b4cd4a29a.jpg", "http://yanxuan.nosdn.127.net/dc32c46bd9a223242107d38add022e14.jpg", "http://yanxuan.nosdn.127.net/cd4645022cc72a847a3171208ddb57b3.jpg", "http://yanxuan.nosdn.127.net/f88881ca354aa3bd70b09a0a023da2fd.jpg", "http://yanxuan.nosdn.127.net/7d8f9a7b13d0f95f090312853c68e2b5.jpg", "http://yanxuan.nosdn.127.net/3fa9595f63e2df45fd2c5a4f8c9c4351.jpg", "http://yanxuan.nosdn.127.net/a40bbe536e6158aef3d7350fb534f356.jpg", "http://yanxuan.nosdn.127.net/7320fd808631e80eb6848fd01df65ed1.jpg", "http://yanxuan.nosdn.127.net/64e449687f9765c0db67b3c238c81dfe.jpg", "http://yanxuan.nosdn.127.net/dbde31144f53c0ea5d7b11aff3698b47.jpg", "http://yanxuan.nosdn.127.net/dc5c62bc776f62d4a48aa7301fd1e9c5.jpg", "http://yanxuan.nosdn.127.net/01f5c6a67c2947f4b6794da62e497c51.jpg", "http://yanxuan.nosdn.127.net/5321e903c35bc9471e731288fab78e44.jpg", "http://yanxuan.nosdn.127.net/9c44c445f17eface0c01bb944bafdca3.jpg", "http://yanxuan.nosdn.127.net/6536c22cb8b753325a83b55beea86cc6.jpg", "http://yanxuan.nosdn.127.net/85d91b45015b8a91bdc42eba322c8b7e.jpg", "http://yanxuan.nosdn.127.net/ba81c16e93d65dded129e3e72ccc568a.jpg", "http://yanxuan.nosdn.127.net/87ec4379bf3622e62f947909254b79c1.jpg", "http://yanxuan.nosdn.127.net/a8494d121eeb3e35a96ddf6768fcd760.jpg", "http://yanxuan.nosdn.127.net/5aa5776265a1ffb24236efd54b4a9702.jpg", "http://yanxuan.nosdn.127.net/e875e6527927ddb9509446d142a41ab8.jpg", "http://yanxuan.nosdn.127.net/8ac5a81b93e3a892cd19d11bd0da51cd.jpg", "http://yanxuan.nosdn.127.net/ff80f3c555f95d2285106ef6db81c627.jpg", "http://yanxuan.nosdn.127.net/bf0f37aefc2622277ff1511d7390ba11.jpg", "http://yanxuan.nosdn.127.net/aab1481c5f9eaa9fd0378beb0fa5bcfd.jpg", "http://yanxuan.nosdn.127.net/3a2035b791b6b4473e45c565d7034186.jpg", "http://yanxuan.nosdn.127.net/cebc9d2b8923088b67d66a31d1c654fd.jpg", "http://yanxuan.nosdn.127.net/bc84f90cf2e2e50d298504db2047c075.jpg", "http://yanxuan.nosdn.127.net/2224018390bc5b537a90ef1e2a8f1dd5.jpg", "http://yanxuan.nosdn.127.net/887cb27f4fa3593f5ba06bb41ff70fac.jpg", "http://yanxuan.nosdn.127.net/85437861b2481550c23fa45be00b28fc.jpg", "http://yanxuan.nosdn.127.net/8e311a03c3dbb144dcd0955fb45e4640.jpg", "http://yanxuan.nosdn.127.net/d6bcd58d4cbd6a89d59d230de0fef96d.jpg", "http://yanxuan.nosdn.127.net/566e7f5554392f05bdca44b15400248d.jpg", "http://yanxuan.nosdn.127.net/baeda98cb49627542267e44e000ea2e3.jpg", "http://yanxuan.nosdn.127.net/d90faeba5e3abb1f91c100c9a2544695.jpg", "http://yanxuan.nosdn.127.net/ad077fceb32a8bfcd63bf1e6d44bb933.jpg", "http://yanxuan.nosdn.127.net/73b83cdb90b721cffeb83f3b6a89cab2.jpg", "http://yanxuan.nosdn.127.net/98957762d8a943c507281bffabe54584.jpg", "http://yanxuan.nosdn.127.net/c94643d2974f825cd0a10a5ff46555e5.jpg", "http://yanxuan.nosdn.127.net/27ba709f40e43c52fb433768d9cb8c8e.jpg", "http://yanxuan.nosdn.127.net/0d6edad6b283169ad474e4f14f57acda.jpg", "http://yanxuan.nosdn.127.net/222df0479a144713c288b25571609c19.jpg", "http://yanxuan.nosdn.127.net/659a073706f54ebbcf4cbb91908a510e.jpg", "http://yanxuan.nosdn.127.net/93e5a3d6017afd958d4a87a92e441186.jpg", "http://yanxuan.nosdn.127.net/fb9a169dfcda4dc33cdd026a1116ba16.jpg", "http://yanxuan.nosdn.127.net/bb928185f2c42ec25f3fb53be52e921d.jpg", "http://yanxuan.nosdn.127.net/de61612453ba8ed1e611b19db5707ba7.jpg", "http://yanxuan.nosdn.127.net/ad14bae3391cf5bf2c6046ca6cb4cd6c.jpg", "http://yanxuan.nosdn.127.net/093db69c6c213da25be213d8c851971f.jpg", "http://yanxuan.nosdn.127.net/5af83b9a70904e552599f2d17604ad46.jpg", "http://yanxuan.nosdn.127.net/fcb62b3f07c06c3632c2f56019e614a5.jpg", "http://yanxuan.nosdn.127.net/2f837a4f873165cff74cdf4bff6793e4.jpg", "http://yanxuan.nosdn.127.net/e016e25815fe4f9e8852140866384f3f.jpg"],
		"inventory": [915],
		"information": [{
			"attrName": "布艺材质",
			"attrValue": "涤纶"
		}, {
			"attrName": "填充物",
			"attrValue": "高回弹海绵"
		}, {
			"attrName": "尺寸",
			"attrValue": "1320*765*750mm"
		}],
		"label": "",
		"manufacture": "日本Francfranc制造商",
		"sale": 591,
		"date": "1500012558627",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1164013,
		"price": 999,
		"topName": "YEATION唐宁街系列实木置物架",
		"subName": "小巧清新，百搭置物",
		"shortDescription": ["逐层置物", "节省空间", "牢固木腿", "稳固耐用", "耐用五金", "结构安全"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e3c3863b61e9105e5825ff88639502d6.png", "http://yanxuan.nosdn.127.net/915c6a2179c50d0ed14c1f1ee9fa2283.png", "http://yanxuan.nosdn.127.net/d1fc74036fb71a70402a0052cf7ee057.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/367aa83cf16278cd69f008f7e7936db6.png", "http://yanxuan.nosdn.127.net/6ed093553cd10b3a5d713e86b93832c2.jpg", "http://yanxuan.nosdn.127.net/6573c05ca03d95bd173369aabb660c92.jpg", "http://yanxuan.nosdn.127.net/936ae61fa63f65a701f740fcbb925673.jpg", "http://yanxuan.nosdn.127.net/da61977c64ce18b65b6cc437d5bd4868.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/bf98d3d5312a776b9a3dfba55f1e52e3.jpg", "http://yanxuan.nosdn.127.net/fde3a9719fb610076685a23d6ecee8c9.jpg", "http://yanxuan.nosdn.127.net/8bafb970ec1725991db8f057898d08b2.jpg", "http://yanxuan.nosdn.127.net/099d0e7dc6847d8f4e801b00b8c16bfd.jpg", "http://yanxuan.nosdn.127.net/b16995a8f115b59b63cdf60b307b3035.jpg", "http://yanxuan.nosdn.127.net/f8d76a7f7eafb8c92ebb81d027dfada1.jpg", "http://yanxuan.nosdn.127.net/58e4a69e68db04e6c4b853f276f4fb64.jpg", "http://yanxuan.nosdn.127.net/bc8b8683ec871f4f6f3200b978b383f4.jpg", "http://yanxuan.nosdn.127.net/a1a79088b1666cb32bf7806f3e2e1617.jpg", "http://yanxuan.nosdn.127.net/d39f281725305c6fe8c1424aeca4b55d.jpg", "http://yanxuan.nosdn.127.net/f025f08eba6482d250c89b5e76664dd6.jpg", "http://yanxuan.nosdn.127.net/f85875a835df5bc04a7796c7fd53b8ea.jpg", "http://yanxuan.nosdn.127.net/9c1da2e784b910318a0f5243791f1cd6.jpg", "http://yanxuan.nosdn.127.net/dd9169f104e15e262d4e351c1e55f759.jpg", "http://yanxuan.nosdn.127.net/00fb218a63a589c99e7753e2116b3792.jpg", "http://yanxuan.nosdn.127.net/4876367b2b7b40995d4ef0c08a2b1fff.jpg", "http://yanxuan.nosdn.127.net/372fe657a20c3cbd3894f5e8fded6600.jpg", "http://yanxuan.nosdn.127.net/4ea64cc16de0b91ef86c99306607fea3.jpg", "http://yanxuan.nosdn.127.net/43237d6817666d2736ebcd8f2b2efdbf.jpg", "http://yanxuan.nosdn.127.net/d6c3768993a0634ab5f37f3b90a8ff4e.jpg", "http://yanxuan.nosdn.127.net/d68277e5826ca3f266941515ed808841.jpg", "http://yanxuan.nosdn.127.net/3213f9be653d39b0ced1b08adb2da07e.jpg", "http://yanxuan.nosdn.127.net/0fb5483de2892901eab5c96c7706b0f5.jpg", "http://yanxuan.nosdn.127.net/72668ecd0962d4e65fb062070729b7b9.jpg", "http://yanxuan.nosdn.127.net/729983d5140a744bfb73abafff0e9ffe.jpg", "http://yanxuan.nosdn.127.net/b76ae2b0eca4ac121b97a4657c5e9a96.jpg", "http://yanxuan.nosdn.127.net/09e380a88760fa1b93a033adc0addcec.jpg", "http://yanxuan.nosdn.127.net/9371bb4f03a82b809a9b45fd300bc7f9.jpg", "http://yanxuan.nosdn.127.net/8732401409da90b5b9f3c8d6d7235b51.jpg", "http://yanxuan.nosdn.127.net/47e89450138d58f9c9c014a3392eb40c.jpg", "http://yanxuan.nosdn.127.net/bdefd2a0cedda979457d04d23406fce6.jpg", "http://yanxuan.nosdn.127.net/8eb711d8fb725c4e5eaef5f242c58f8f.jpg", "http://yanxuan.nosdn.127.net/efcf327066cf58dc6546eb838ad9c323.jpg", "http://yanxuan.nosdn.127.net/190a36286329473d9800a3308205b7c2.jpg", "http://yanxuan.nosdn.127.net/664de90014ef2777613209396740053a.jpg", "http://yanxuan.nosdn.127.net/0967e3e364a65c0a4fbf919d4fe2e4c4.jpg", "http://yanxuan.nosdn.127.net/62e54cd3bc02cce61ba1298c7d25ece1.jpg", "http://yanxuan.nosdn.127.net/95c5e45e305507b612b715a755cabeb4.jpg", "http://yanxuan.nosdn.127.net/d5cfc8f4eb310fc5e64ef582fe77e053.jpg", "http://yanxuan.nosdn.127.net/dcabb580baad3efef41f4dd596c2524e.jpg", "http://yanxuan.nosdn.127.net/dc2f25523615f73e36877e768a9afba0.jpg", "http://yanxuan.nosdn.127.net/332644ce9bb9d44b44c7ecb62c34e567.jpg", "http://yanxuan.nosdn.127.net/05ba99630c0646da4f51d1d5fdd80ba3.jpg", "http://yanxuan.nosdn.127.net/d76eac0354019a2799e88216a6ba6a26.jpg", "http://yanxuan.nosdn.127.net/04276e8c71ed7a0f8a479ca91b848598.jpg", "http://yanxuan.nosdn.127.net/7243a5270884b8bfd849fa8fa587b20a.jpg", "http://yanxuan.nosdn.127.net/1c2d89483de36ba24a04349bbce27da5.jpg", "http://yanxuan.nosdn.127.net/640ccd08913146f9bacff7c8ab5df5b6.jpg", "http://yanxuan.nosdn.127.net/f052d2d1d4e3e46e43b54c03bcf2f387.jpg"],
		"inventory": [244],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "507*470*1850mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 164,
		"date": "1500012561395",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1201013,
		"price": 4899,
		"topName": "YEATION唐宁街桌椅组合（1桌4椅）",
		"subName": "简约实用，完美组合",
		"shortDescription": ["扎实桌腿", "稳固耐用", "圆角打磨", "安全放心", "完美组合", "相得益彰"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ae1b8fb77b158ce14a47d863d31d9bf0.jpg", "http://yanxuan.nosdn.127.net/d7295644e1a4f1b686f21435a9bf9a75.jpg", "http://yanxuan.nosdn.127.net/b2daad5e34dde15b64ebcd10fac676f4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/359ad8c9c0b8a4bd5422bef43248da07.png", "http://yanxuan.nosdn.127.net/af833193ac40664a3619384045c51b45.jpg", "http://yanxuan.nosdn.127.net/a3cb88cf664a57b5abb76f7b2925d923.jpg", "http://yanxuan.nosdn.127.net/dd7dc33eab8ca03ab3123e94a9befe1e.jpg", "http://yanxuan.nosdn.127.net/12dd28c6f9241bfb4bb5cd35eacf946d.jpg"],
		"types": ["1.4米餐桌+2套餐椅", "1.6米餐桌+2套餐椅"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/4c179d857b83090b06522bdd6b3b6d78.jpg", "http://yanxuan.nosdn.127.net/995cd6c84c623e0b1bc7911848473b72.jpg", "http://yanxuan.nosdn.127.net/5131f72123fb45414275e70c08cb8a3a.jpg", "http://yanxuan.nosdn.127.net/2f482e1eb3009a33c0c42e2727a314b2.jpg", "http://yanxuan.nosdn.127.net/5f617fc8eafc766ed4d05e2745e2efea.jpg", "http://yanxuan.nosdn.127.net/e5ab64b0891a49557994b9ae896decc7.jpg", "http://yanxuan.nosdn.127.net/1cb33a92d060404e90803189c4530282.jpg", "http://yanxuan.nosdn.127.net/a5d2f7cb91ddf6c80de20b4d46f69a38.jpg", "http://yanxuan.nosdn.127.net/ef879dcbb6267e19de2c9e9bd8efb793.jpg", "http://yanxuan.nosdn.127.net/551328172be016e6d2df13db9736c3cd.jpg", "http://yanxuan.nosdn.127.net/1870c714ad335cff33c5d0261c4fdef5.jpg", "http://yanxuan.nosdn.127.net/b9d5e2e69822772d93c7429836faa3b6.jpg", "http://yanxuan.nosdn.127.net/1c79be6baa9d808ddd4694b03e1e05a9.jpg", "http://yanxuan.nosdn.127.net/33b67d2ae0a3584b5c4bd25fd2c99efe.jpg", "http://yanxuan.nosdn.127.net/fe9218d071bb12db5f0d98166977cf78.jpg", "http://yanxuan.nosdn.127.net/e961ce26dccf9ae1f7d008d5d9017733.jpg", "http://yanxuan.nosdn.127.net/d0049148d0d664d50789540b5ec820e9.jpg", "http://yanxuan.nosdn.127.net/bd1dad373b34d1b181ab46de3b9197a9.jpg", "http://yanxuan.nosdn.127.net/6ffa8571df49397a247b2677c3092cd2.jpg", "http://yanxuan.nosdn.127.net/6be334734088ec7754e05da5396b0f74.jpg", "http://yanxuan.nosdn.127.net/0a76dd1073b2cda8a6639ac6acac1278.jpg", "http://yanxuan.nosdn.127.net/8a49dc0eb558b90bd1395b2dd3281f35.jpg", "http://yanxuan.nosdn.127.net/4bd0e1c296c7a0b41920691e4aeca4ae.jpg", "http://yanxuan.nosdn.127.net/2aaf3af9cdd3bae0757a7a009a8bf48f.jpg", "http://yanxuan.nosdn.127.net/8d2a3e778888b22afb0516fdf17f8e8a.jpg", "http://yanxuan.nosdn.127.net/7c86bed2ad4fe3f5b78d6a9894507b8d.jpg", "http://yanxuan.nosdn.127.net/075f2fd9a4f71ca6adcd57a804770294.jpg", "http://yanxuan.nosdn.127.net/3ef81af7a0d7c41cf51c52f4b1e63496.jpg", "http://yanxuan.nosdn.127.net/fdaa93090a95005f3e470ab17258ffc5.jpg", "http://yanxuan.nosdn.127.net/c8a1e2704b5cbd78a44e3459458b079b.jpg", "http://yanxuan.nosdn.127.net/be2a6e536af55b6154fb332dfb00e300.jpg", "http://yanxuan.nosdn.127.net/969c1a51628ebdda2756bd56a294c8a1.jpg", "http://yanxuan.nosdn.127.net/ba956fccc9272e54cff403b43c37dbef.jpg", "http://yanxuan.nosdn.127.net/93eb45428971a438ee15972303ff4a41.jpg", "http://yanxuan.nosdn.127.net/df99ff8e24910efdf13e2095a6168444.jpg", "http://yanxuan.nosdn.127.net/136a20c03f9fca66c50b4094f965a8c4.jpg", "http://yanxuan.nosdn.127.net/7ae7dfa56d2387fb4f50ef058bc7d282.jpg", "http://yanxuan.nosdn.127.net/529e889f86a23d0a304d69aa26c34a68.jpg", "http://yanxuan.nosdn.127.net/47aaae85f686da920c88502050bd9ccc.jpg", "http://yanxuan.nosdn.127.net/d1e67dfc23d10ea377380a29b0e3ccda.jpg", "http://yanxuan.nosdn.127.net/e382ffc8b9d407d62f8d21df7e0adf23.jpg", "http://yanxuan.nosdn.127.net/773a5ea950a09d094857b3e7ef535b10.jpg", "http://yanxuan.nosdn.127.net/f66a7c4ff7cdb734bd35801c61e0c1ab.jpg", "http://yanxuan.nosdn.127.net/be68d6a45f1958facef27a95e17a129e.jpg", "http://yanxuan.nosdn.127.net/51df4ae8ba4e58f82d81c771fe40a78a.jpg", "http://yanxuan.nosdn.127.net/2097cc71a73eb0d44a5cb56b19fbfbca.jpg", "http://yanxuan.nosdn.127.net/fd19847230beb54c7f671e9ca569f22a.jpg", "http://yanxuan.nosdn.127.net/0b4ca35c1337553b78ba7d9c444f9463.jpg", "http://yanxuan.nosdn.127.net/becb466b17c9954f61387a3e6f302884.jpg", "http://yanxuan.nosdn.127.net/f90e788f868f47879cde0d8e7270393a.jpg", "http://yanxuan.nosdn.127.net/903c1eefcca340e1c455e8842542dee4.jpg", "http://yanxuan.nosdn.127.net/8be562173b68e3edccbbf94dab7fc6e0.jpg", "http://yanxuan.nosdn.127.net/b06df2a577e0b230cac29fbf199f7737.jpg", "http://yanxuan.nosdn.127.net/6c03ef394a4cdc75f9fb774fcfe1a949.jpg"],
		"inventory": [455, 613],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "组合内容",
			"attrValue": "1.4m餐桌+4椅/1.6m餐桌+4椅"
		}, {
			"attrName": "安装方式",
			"attrValue": "餐桌腿需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 715,
		"date": "1500012564007",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1164012,
		"price": 1999,
		"topName": "YEATION唐宁街系列实木餐桌",
		"subName": "简约朴实，稳重耐用",
		"shortDescription": ["圆角打磨", "安全放心", "实木滑轨", "久用愈顺", "扎实桌腿", "稳固耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b7ff7463eb7530a145ed1d6e17c21b56.png", "http://yanxuan.nosdn.127.net/062f870b0b6dece3d70a48f787aa232c.png", "http://yanxuan.nosdn.127.net/d2955906f860d28acd3f7c9b46de93f6.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/f830a005bca31d480aa798e2a5557948.png", "http://yanxuan.nosdn.127.net/93b612b39f76315ddb7f7482741d603d.jpg", "http://yanxuan.nosdn.127.net/34b9b942dac744f27633d8b4f5549411.jpg", "http://yanxuan.nosdn.127.net/3e6b1fb2e1cbc8b70ef6ef0b0da37a8b.jpg", "http://yanxuan.nosdn.127.net/29bb13cb718f2f38f310fdf9c5ca53ee.jpg"],
		"types": ["胡桃木色1600*800*760mm", "胡桃木色1400*800*760mm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/8b667e1d445d785a71e7ffc6dabe7019.jpg", "http://yanxuan.nosdn.127.net/a23ccc3fa2b6035b15ea577212b617d3.jpg", "http://yanxuan.nosdn.127.net/48209ef0c80d5d5b8a2271ef84feed9a.jpg", "http://yanxuan.nosdn.127.net/f352f9d17cfb68711481db61dd1d06ac.jpg", "http://yanxuan.nosdn.127.net/9168b6f4c3ad93d42e8d7ac377adcc9a.jpg", "http://yanxuan.nosdn.127.net/5489e57b0dc51e767e868098feab179f.jpg", "http://yanxuan.nosdn.127.net/453abf4adbe16ac9d2be7a20bf83b0c1.jpg", "http://yanxuan.nosdn.127.net/b1fcb87da83b17a39728f81f248fe4d1.jpg", "http://yanxuan.nosdn.127.net/caa568d2613891724aef2e800cb4a7af.jpg", "http://yanxuan.nosdn.127.net/ddc8101fb98ba6f295ba736bb3657eec.jpg", "http://yanxuan.nosdn.127.net/bde19790c7956d98e98eed85709406a1.jpg", "http://yanxuan.nosdn.127.net/7514cf9e58a3362500b4faaa403683a1.jpg", "http://yanxuan.nosdn.127.net/d861cf57023dc2cf8fdc3214e7c88c4f.jpg", "http://yanxuan.nosdn.127.net/10c7e69ee5885f530f41d3acefc5f8c8.jpg", "http://yanxuan.nosdn.127.net/2ab4ae91354969f4b535dde3a5de5335.jpg", "http://yanxuan.nosdn.127.net/3eda64b6e58f99eb67f4274580ec6faa.jpg", "http://yanxuan.nosdn.127.net/5a2bac88e408d01b855b0019c3e8c882.jpg", "http://yanxuan.nosdn.127.net/a3044077dc8d761a4607ecac0b552d23.jpg", "http://yanxuan.nosdn.127.net/deacb23ea2b7f69b237f075609c9efc4.jpg", "http://yanxuan.nosdn.127.net/8dad7da35a25e89f2e0d0b62499e4e33.jpg", "http://yanxuan.nosdn.127.net/d57a886f4414e6f0b2bde4b0e5b8039d.jpg", "http://yanxuan.nosdn.127.net/b54d7f6d19aa4fd039823f8e742a317f.jpg", "http://yanxuan.nosdn.127.net/29bcbd675710c95acf64a2751cb2b870.jpg", "http://yanxuan.nosdn.127.net/0d1914cd019252ab41dc6c01e1b3f329.jpg", "http://yanxuan.nosdn.127.net/10fb1a0a0d363c1af6c7ad8e250a2730.jpg", "http://yanxuan.nosdn.127.net/f734e6a9ca64471b03d8ef9b8ce0b12b.jpg", "http://yanxuan.nosdn.127.net/4d2db543c58aa610837add32ed644a29.jpg", "http://yanxuan.nosdn.127.net/d679cd32ec3bae872b3f2afb1a964184.jpg", "http://yanxuan.nosdn.127.net/2f9a1ec0170caa3617c875044b488453.jpg", "http://yanxuan.nosdn.127.net/4e4d5f82deef906eaeb546c22dc52858.jpg", "http://yanxuan.nosdn.127.net/bae5fef990c60be316cad4047593e5ea.jpg", "http://yanxuan.nosdn.127.net/43342a029a6999bfd9ec95bc690cd9c6.jpg", "http://yanxuan.nosdn.127.net/75c2f10080d2e42126db74db24c504df.jpg", "http://yanxuan.nosdn.127.net/d61cea59b5aa450d0d5b8f3c8861eb32.jpg", "http://yanxuan.nosdn.127.net/6e06f3e178ec6a4f676697d90d123ab6.jpg", "http://yanxuan.nosdn.127.net/9957e92827ea2bf315a178f554759304.jpg", "http://yanxuan.nosdn.127.net/81d204930e6998ea5ef0439f18eb4e49.jpg", "http://yanxuan.nosdn.127.net/c21ab6295d636c06b1d2983046f33f57.jpg", "http://yanxuan.nosdn.127.net/d2d471c94162d20af43676ce1dc4e5f2.jpg", "http://yanxuan.nosdn.127.net/ed23862ef2285f81e3017808f629ab10.jpg", "http://yanxuan.nosdn.127.net/73ad42e90722922bfd9d27a0f4487002.jpg", "http://yanxuan.nosdn.127.net/d37dc34c4c0652b7550f180eb49a89c4.jpg", "http://yanxuan.nosdn.127.net/5650f4c3e24aaea16572fc4aea567f97.jpg", "http://yanxuan.nosdn.127.net/68bba749f534329399b6c8ca6fa4e5e4.jpg", "http://yanxuan.nosdn.127.net/0d9aeb667535573ddacefeaa14766cda.jpg", "http://yanxuan.nosdn.127.net/7354ee9519a58578a4f53a54e93e9b0d.jpg", "http://yanxuan.nosdn.127.net/6a3305f8ecbac8b137cb5b2cd7e4a717.jpg", "http://yanxuan.nosdn.127.net/8fefb5d677b67d29776107032ff359c9.jpg"],
		"inventory": [461, 231],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1400/1600*800*760mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "餐桌腿需要组装"
		}],
		"label": APP专享价,
		"manufacture": "",
		"sale": 501,
		"date": "1500012566775",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1165029,
		"price": 1499,
		"topName": "YEATION唐宁街系列实木餐椅（两把）",
		"subName": "贴合人体曲线",
		"shortDescription": ["榫卯结构", "传统工艺", "弧形椅背", "久坐不累", "扎实椅腿", "稳固耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/45eb090d5426b76cbbe3d6db8d130f47.png", "http://yanxuan.nosdn.127.net/5d1e9ff64ff70779929a6103ee097e83.png", "http://yanxuan.nosdn.127.net/0935b074eca706c915f77b4f36e90a9e.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/525c20c1d28fa3edace3b1207f8f5331.png", "http://yanxuan.nosdn.127.net/593e85dc4e738dfdd8b76ec4bd3a354b.jpg", "http://yanxuan.nosdn.127.net/1668180805c642471f999b24bebd5e78.jpg", "http://yanxuan.nosdn.127.net/123a181b6b6fcbb582753f6ba9258918.jpg", "http://yanxuan.nosdn.127.net/aa357b4e271c4338ad2c00c6bacf38eb.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/c95be9140d9c232fe63c4f3bd69f74de.jpg", "http://yanxuan.nosdn.127.net/8dc9f9819d96e259f141b51e54c0b146.jpg", "http://yanxuan.nosdn.127.net/359ba6d83a1b2d444c5ea1980849c8b8.jpg", "http://yanxuan.nosdn.127.net/af4e77c48c8f95677a9b694df9f5b9e1.jpg", "http://yanxuan.nosdn.127.net/ad367c8f383e8f2f18b07bb73dd6380f.jpg", "http://yanxuan.nosdn.127.net/f8e2a29e13e6a40b3bb4154454fced56.jpg", "http://yanxuan.nosdn.127.net/462572b30b8e88b3270d61330e9658d3.jpg", "http://yanxuan.nosdn.127.net/9ae1d9d9830e883db07437086dbf1a90.jpg", "http://yanxuan.nosdn.127.net/c877214ffaae9ad1edf4df9809e0255e.jpg", "http://yanxuan.nosdn.127.net/6b37d440d05f43c86ba523953c408c97.jpg", "http://yanxuan.nosdn.127.net/1316174a5cf90c680c037727ffc8c78a.jpg", "http://yanxuan.nosdn.127.net/cd4419232a66b607df6b8e036fe3f4d9.jpg", "http://yanxuan.nosdn.127.net/f2ea80cc637c0fe95afed3fc51d8a049.jpg", "http://yanxuan.nosdn.127.net/36de9e12b0d4d137b7b2ddae28db9a84.jpg", "http://yanxuan.nosdn.127.net/570f34a70ed8e01aa2bd5e9d34d52897.jpg", "http://yanxuan.nosdn.127.net/af7a090ba5c17b44288a1819573cd259.jpg", "http://yanxuan.nosdn.127.net/3ce9667142faad73cb2a4d74e45d3411.jpg", "http://yanxuan.nosdn.127.net/2a5f1bc95b9307c83eae83beb93aa902.jpg", "http://yanxuan.nosdn.127.net/bfb40a46b9c4e26447fa4709ddf92a06.jpg", "http://yanxuan.nosdn.127.net/0166c3c2064af02470abbd4a452cbc71.jpg", "http://yanxuan.nosdn.127.net/3fbb28e2a36939be7d9699d91ea74f02.jpg", "http://yanxuan.nosdn.127.net/c559a239206ba9ef99227b1cb7735316.jpg", "http://yanxuan.nosdn.127.net/ae0d580c52c8c15b96a061ebf526468c.jpg", "http://yanxuan.nosdn.127.net/6b8f2bce4ce23f29fbe2ca0c1b66a30d.jpg", "http://yanxuan.nosdn.127.net/0db4ec91bdd7ee4666635f7ef17e10d1.jpg", "http://yanxuan.nosdn.127.net/5fa5a11cc894f021cf72c5c3557abd98.jpg", "http://yanxuan.nosdn.127.net/5d83a4858bb4176cf056f8fdef5af007.jpg", "http://yanxuan.nosdn.127.net/9cacd387152de8cf94f0cc0133f4dadc.jpg", "http://yanxuan.nosdn.127.net/866f916a6885d596a33e1c7d9016d931.jpg", "http://yanxuan.nosdn.127.net/e8dca831cd2a96b90314de3fbf45e2af.jpg", "http://yanxuan.nosdn.127.net/ce0df6c1048e60ec8afe4ebf17f8b7e0.jpg", "http://yanxuan.nosdn.127.net/1be7626ef0d0e63fffd30142311a94ff.jpg", "http://yanxuan.nosdn.127.net/80ad6f820aad92f3acf256cc353cd9be.jpg", "http://yanxuan.nosdn.127.net/f21bcf493c77f4ccd9009f1327c4b095.jpg", "http://yanxuan.nosdn.127.net/d32dc678d4e762643dec8cc9d25896ff.jpg", "http://yanxuan.nosdn.127.net/787df63318d5292082df3636b1f7447d.jpg", "http://yanxuan.nosdn.127.net/b1a47001c6e73c5f9e45711c610a9968.jpg", "http://yanxuan.nosdn.127.net/fd994d378951aee621bff569227788a7.jpg", "http://yanxuan.nosdn.127.net/a06b457d6bd869c62d28eb9edc23b90b.jpg", "http://yanxuan.nosdn.127.net/cb8821e80b03f206b2e77f838c6fdaac.jpg", "http://yanxuan.nosdn.127.net/76e42184b623c9afce29fe8a07694f58.jpg", "http://yanxuan.nosdn.127.net/988222c7ff73087adb0209cdb133587d.jpg", "http://yanxuan.nosdn.127.net/40f720e421510f8f2b4fca2cb87dba02.jpg", "http://yanxuan.nosdn.127.net/f5cf79f107cf3ba7addd2452be3f2fc8.jpg", "http://yanxuan.nosdn.127.net/f1023f5cf5d8b93836d5129195ab5684.jpg", "http://yanxuan.nosdn.127.net/147d9a6ea0c4e159cfbe71111b1aa5da.jpg", "http://yanxuan.nosdn.127.net/c7a855331b7faa348841a45021b19426.jpg", "http://yanxuan.nosdn.127.net/109ab21d2c00d7f8c57423230c867638.jpg"],
		"inventory": [378],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "460*425*905mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "无需安装"
		}],
		"label": APP专享价,
		"manufacture": "",
		"sale": 397,
		"date": "1500012569341",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1201012,
		"price": 3999,
		"topName": "YEATION唐宁街实木电视柜+茶几组合",
		"subName": "田园风情，清新百搭",
		"shortDescription": ["实木滑轨", "久用愈顺", "原木纹理", "自然美观", "圆角打磨", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4e5d44172731af3df9736e6a411f8432.jpg", "http://yanxuan.nosdn.127.net/180cc4b8c50df5947a71b8fd897d7347.jpg", "http://yanxuan.nosdn.127.net/18580bda263bb25ba30c386c585738f7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/6fcf56b7acad401c8c5b812664ed6075.png", "http://yanxuan.nosdn.127.net/593c02781d43c136f1b777227e18a2a4.jpg", "http://yanxuan.nosdn.127.net/994501271c407c9e41d75a22d5d21862.jpg", "http://yanxuan.nosdn.127.net/071062cf446bf5bc4b5f8162d53842e8.jpg", "http://yanxuan.nosdn.127.net/988d57c7ec3638633b37946d72f54ce1.jpg"],
		"types": ["茶几+电视柜组合"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/752e5a5fdeccaf2da6d2e8b47959b8a6.jpg", "http://yanxuan.nosdn.127.net/96e9ffa9b0642e99dde96d8f76edb188.jpg", "http://yanxuan.nosdn.127.net/b3f4e48f1eb2fef475957604dc772a6e.jpg", "http://yanxuan.nosdn.127.net/8dc6a4977792703b1b83de8e63d3c2fe.jpg", "http://yanxuan.nosdn.127.net/72e7779c631169633f4087ff62e2c717.jpg", "http://yanxuan.nosdn.127.net/902fcff991dae419f6cb7df15f4300a4.jpg", "http://yanxuan.nosdn.127.net/fd66dc3f5f55a4b4fb93b7ebf3d77893.jpg", "http://yanxuan.nosdn.127.net/a3d2b037575638f1ddde3b306978c137.jpg", "http://yanxuan.nosdn.127.net/b4cbfbd9acc40cb7d19acd3c98ec3a60.jpg", "http://yanxuan.nosdn.127.net/9e77c0b0c879441b6b70cac49642f379.jpg", "http://yanxuan.nosdn.127.net/43de7ce3c6aa68521f2765ee4e579534.jpg", "http://yanxuan.nosdn.127.net/41f4acff3f7838cb495086d5588fcc14.jpg", "http://yanxuan.nosdn.127.net/111e9c37ab4cfca120362e0b34ab6a2d.jpg", "http://yanxuan.nosdn.127.net/bbfcf82e46a53bebc9ab7a1368416831.jpg", "http://yanxuan.nosdn.127.net/e7dfb68e4697666551d9cca24990f577.jpg", "http://yanxuan.nosdn.127.net/3238b0705a47cd8d5ef6f56ac4e923b1.jpg", "http://yanxuan.nosdn.127.net/ac7b196c3e572405d1c41ce9b3a1ffc2.jpg", "http://yanxuan.nosdn.127.net/f0886b45dd4b4bbb77a53a5111ad3456.jpg", "http://yanxuan.nosdn.127.net/930f681d3e336ea709e2b2e4458963ad.jpg", "http://yanxuan.nosdn.127.net/6012071a1300ecd7b1bb171c42970756.jpg", "http://yanxuan.nosdn.127.net/a0298e8b3e617e5fc75c79deb6b5dfe9.jpg", "http://yanxuan.nosdn.127.net/8d2c1c62b4e1bd014968954dc4666157.jpg", "http://yanxuan.nosdn.127.net/70df7a5c619dba31085b37a6a7d54f85.jpg", "http://yanxuan.nosdn.127.net/af538fdb8399aaad0a865caf54c21703.jpg", "http://yanxuan.nosdn.127.net/60d8e7b7af4fb83df42a023350e0f6e5.jpg", "http://yanxuan.nosdn.127.net/f9fe7b6800d8e8b83370a12ac1f6bb25.jpg", "http://yanxuan.nosdn.127.net/a35061a0e52ff08128eb1eefe1d608ca.jpg", "http://yanxuan.nosdn.127.net/be8f53d6dab18c58f07847764f7f34e4.jpg", "http://yanxuan.nosdn.127.net/2385c443fa2714c5f0b3d5f2961245ac.jpg", "http://yanxuan.nosdn.127.net/08e0bc5fcace224ea5ece8bcf49029c6.jpg", "http://yanxuan.nosdn.127.net/eca3ab5e229c0d7a059dca778e8cf369.jpg", "http://yanxuan.nosdn.127.net/d07f2fc5d8bab4ece2fe6f585fd00746.jpg", "http://yanxuan.nosdn.127.net/67277cbf3680dd79d51089534fb3518d.jpg", "http://yanxuan.nosdn.127.net/b55df6bf6fa5df52372303ba4ca942f8.jpg", "http://yanxuan.nosdn.127.net/a0f5865204037689986e10901995b468.jpg", "http://yanxuan.nosdn.127.net/19d381564ac304904a941e0e90c363c2.jpg", "http://yanxuan.nosdn.127.net/74a4248f85b7d26e6f686e47b8435c9e.jpg", "http://yanxuan.nosdn.127.net/9442bea9ca51c1295f6929600c409e21.jpg", "http://yanxuan.nosdn.127.net/dafcec83ad0f5c16bf4fa3c54e1365d8.jpg", "http://yanxuan.nosdn.127.net/9a818a10ce87e1095276e385e03fd759.jpg", "http://yanxuan.nosdn.127.net/d8a87c2a14bd3d2cb6c72fcd4f4c4552.jpg", "http://yanxuan.nosdn.127.net/61887495a7117e7117ea6360ff48d603.jpg", "http://yanxuan.nosdn.127.net/25c5903dc63607ee538c2bd00cf43415.jpg", "http://yanxuan.nosdn.127.net/c627875fac4d3c472d0588051859c340.jpg", "http://yanxuan.nosdn.127.net/46808f6d3150b94e0134c36e4278b640.jpg", "http://yanxuan.nosdn.127.net/42209da1ecb1df460fff81ac569e3eeb.jpg", "http://yanxuan.nosdn.127.net/51cb628d0d5f8caeecf80462ca9030a0.jpg", "http://yanxuan.nosdn.127.net/f27f0fe48ab826323674da99169c291f.jpg", "http://yanxuan.nosdn.127.net/c7b362f8879ce3e91d09cb69f7c7f535.jpg", "http://yanxuan.nosdn.127.net/16486abc22781c7f11bf5fdbb739c084.jpg", "http://yanxuan.nosdn.127.net/27912b52d99d13ca6abb1ccf050668b4.jpg", "http://yanxuan.nosdn.127.net/dd58a5451b7212f5a14bf0aae369c44b.jpg", "http://yanxuan.nosdn.127.net/c11846097d25328142bd2f90819926cc.jpg", "http://yanxuan.nosdn.127.net/091734ab4829c523fad5a807918dbd7a.jpg"],
		"inventory": [849],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "组合内容",
			"attrValue": "1件茶几+1件电视柜"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，抽屉拉手请自行安装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 550,
		"date": "1500012571946",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1165028,
		"price": 2299,
		"topName": "YEATION唐宁街系列实木电视柜",
		"subName": "经典设计，历久弥新",
		"shortDescription": ["实木滑轨", "久用愈顺", "圆角打磨", "安全放心", "后档设计", "贴心防漏"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4928cf61ae60460aff018a273f0493d5.png", "http://yanxuan.nosdn.127.net/7a6d782330d3359fd5bddd45256ca4b0.png", "http://yanxuan.nosdn.127.net/161d3bf9ab503aa7e17c3523cc9bc3c2.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/c434af304aaaa7de686949c1f662dd5f.png", "http://yanxuan.nosdn.127.net/36587bbc4783ed0311b81bcbad806a2e.jpg", "http://yanxuan.nosdn.127.net/32e6e92cc6ba07faed7f42637ada5515.jpg", "http://yanxuan.nosdn.127.net/26fda63e23d02913dca1eb0fd5aa3680.jpg", "http://yanxuan.nosdn.127.net/c99f25b29b9f17ca8b35312ecba1395f.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/2ef329b22e3bf04d6614e076fb78a526.jpg", "http://yanxuan.nosdn.127.net/ae03829b2a444db4487459527454a9ba.jpg", "http://yanxuan.nosdn.127.net/af022869ac1ee220e635d3cdce162385.jpg", "http://yanxuan.nosdn.127.net/d3eea125e2d04e92d6cd70b04b357b37.jpg", "http://yanxuan.nosdn.127.net/700b87d084e18c4362e8a8b10ef97d10.jpg", "http://yanxuan.nosdn.127.net/69db7dff309d11dc43917532132aa18e.jpg", "http://yanxuan.nosdn.127.net/a7b1113a23f84874624afe565fdf035b.jpg", "http://yanxuan.nosdn.127.net/8db0a7221698c6cb1281bd7fe3268765.jpg", "http://yanxuan.nosdn.127.net/2cffcce1f585f33e875e8c575e46c4fc.jpg", "http://yanxuan.nosdn.127.net/8f262025178986147e2f5b04848d47db.jpg", "http://yanxuan.nosdn.127.net/cbcf3c9ad085bd9d4c8d482e4b002d94.jpg", "http://yanxuan.nosdn.127.net/244074e18c820a9a25e78f643240c574.jpg", "http://yanxuan.nosdn.127.net/176f88781c902511a3ebcb2bb9837ff3.jpg", "http://yanxuan.nosdn.127.net/592b4724f7263095d14cb2e347c272e2.jpg", "http://yanxuan.nosdn.127.net/e406d48d48c77a3f9efd2dfe1b81b026.jpg", "http://yanxuan.nosdn.127.net/4937599a569d6498afeacd0c5841171b.jpg", "http://yanxuan.nosdn.127.net/b1f364d1a57a9071e13bdd45fe92ce12.jpg", "http://yanxuan.nosdn.127.net/b844bdef1233e4d44b80e0f118cde557.jpg", "http://yanxuan.nosdn.127.net/03b1f2c9f8b4c6a5c836e9dea9c9e971.jpg", "http://yanxuan.nosdn.127.net/085155dec0ec24e6d2a0c8fad1c793eb.jpg", "http://yanxuan.nosdn.127.net/6c195216fb7b43414b1c0e15a5c5e8f9.jpg", "http://yanxuan.nosdn.127.net/27e7cff142f1c2b914a3bae5199a2bbf.jpg", "http://yanxuan.nosdn.127.net/cc7a89575ea5ccb38fefa5b846d90a55.jpg", "http://yanxuan.nosdn.127.net/9947b3faa0452acb8ff4ab95164857bb.jpg", "http://yanxuan.nosdn.127.net/129397a062a5dd1d220484d7df79e1c8.jpg", "http://yanxuan.nosdn.127.net/350191eaf5f8e87e886648dde2bec843.jpg", "http://yanxuan.nosdn.127.net/e87b53d16dc603e391b8b7390a2d2b52.jpg", "http://yanxuan.nosdn.127.net/20e9c73f552e3f769ca9fddebf94b2ff.jpg", "http://yanxuan.nosdn.127.net/d9958dd35286d6475c66c6653f17e28d.jpg", "http://yanxuan.nosdn.127.net/5474b0783111ddddb0b9070ed3d4fd60.jpg", "http://yanxuan.nosdn.127.net/8243935b7307cc775d11d7ebb1c7510f.jpg", "http://yanxuan.nosdn.127.net/6ee8b9813948705bf77663e08f892c45.jpg", "http://yanxuan.nosdn.127.net/3442d3cd2ea17097beaed3d11693d620.jpg", "http://yanxuan.nosdn.127.net/416fab9ef28fc58ecfad02b2f3316a53.jpg", "http://yanxuan.nosdn.127.net/0959e36b3a1fd458020e4979dfac1730.jpg", "http://yanxuan.nosdn.127.net/581ab8aac4cd8fb5af407314a853acbe.jpg", "http://yanxuan.nosdn.127.net/ab625c8187f42c2d9d5f1ba2ab8c7645.jpg", "http://yanxuan.nosdn.127.net/df3655b822ed15916b6881c1fb4661d7.jpg", "http://yanxuan.nosdn.127.net/e065b308ba0a0fd56f2f77bd55587798.jpg", "http://yanxuan.nosdn.127.net/656fef9d875d54b3e00f9393215afb97.jpg", "http://yanxuan.nosdn.127.net/0bbff2fa475c6b99ab2dcb05b0960d11.jpg", "http://yanxuan.nosdn.127.net/fa028668f7887b32782b9839aee22a82.jpg", "http://yanxuan.nosdn.127.net/c72fe809850e7b39de772eb959d5cf0f.jpg", "http://yanxuan.nosdn.127.net/c5d44ffc0403093290d7cd843c0873f2.jpg", "http://yanxuan.nosdn.127.net/031847d69bd71224974a92a7bc65bbbb.jpg", "http://yanxuan.nosdn.127.net/5e671773aaba136975148989400f6146.jpg", "http://yanxuan.nosdn.127.net/6490f3cc3b3eb93af8263bf77bdce830.jpg"],
		"inventory": [25],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1800*410*530mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，抽屉拉手请自行安装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 106,
		"date": "1500012574520",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1165027,
		"price": 1899,
		"topName": "YEATION唐宁街系列实木茶几",
		"subName": "美观实用，沉稳大方",
		"shortDescription": ["实木滑轨", "久用愈顺", "圆角打磨", "安全放心", "实木隔板", "结实耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/016df2ef0856905f67aeca2df62a0625.png", "http://yanxuan.nosdn.127.net/97403855f76777e06149bcf5fd4b41d7.png", "http://yanxuan.nosdn.127.net/623d7a91055c2fb1fbfd1a53ccb9a74b.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/74d5c0be7ca9122ff3764ebab89a6d1b.png", "http://yanxuan.nosdn.127.net/8af43313a9733275ae707c50080b2ac9.jpg", "http://yanxuan.nosdn.127.net/b804e03a5276f61602e92a0160685777.jpg", "http://yanxuan.nosdn.127.net/807d428c58d087f20bd51c2963f55abc.jpg", "http://yanxuan.nosdn.127.net/540a9ff0a3605a3f87cd54c596d0d0e7.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/eebb16708a36565bbc9c965f8c596187.jpg", "http://yanxuan.nosdn.127.net/bd6d9319ce0d35fe28886e49e8477135.jpg", "http://yanxuan.nosdn.127.net/88830d0f69d89ef3e58aec36acef966d.jpg", "http://yanxuan.nosdn.127.net/1ec88e7b19fd9279995d67059592c889.jpg", "http://yanxuan.nosdn.127.net/2031acfb73eb4b32bcffd9a26e635c77.jpg", "http://yanxuan.nosdn.127.net/8f8e8b5e4c23a4cf8817db4b7d4cc818.jpg", "http://yanxuan.nosdn.127.net/882dd3454e48329dac9fc1ed3f314200.jpg", "http://yanxuan.nosdn.127.net/85d744c11ae7bb36fe9288dc474cc8c4.jpg", "http://yanxuan.nosdn.127.net/1e93890edf0bf1e1394b8e4b2da167c6.jpg", "http://yanxuan.nosdn.127.net/c5c1f89e8e5a9697b661bc32c68eca7d.jpg", "http://yanxuan.nosdn.127.net/46e0329da69bed108e5848c1d9914a36.jpg", "http://yanxuan.nosdn.127.net/79c5f9efa18b28387b609e17c7ccb66d.jpg", "http://yanxuan.nosdn.127.net/08c4d0f700c3853876b1b3b6721e32fc.jpg", "http://yanxuan.nosdn.127.net/7f94ab782d0dd54ebac73f62a591670f.jpg", "http://yanxuan.nosdn.127.net/1371b72ef41ee7daede2e3ec3a4baae4.jpg", "http://yanxuan.nosdn.127.net/1150647a19ed9df577f5f79255aeffe5.jpg", "http://yanxuan.nosdn.127.net/bbc0eca957e56c96b80adb61aa620464.jpg", "http://yanxuan.nosdn.127.net/c35833acdd54c012115ce1b85775e7b3.jpg", "http://yanxuan.nosdn.127.net/be32af7fc738dc0dc3cac4c61f155b17.jpg", "http://yanxuan.nosdn.127.net/33093f96a7b29625ec8e7961685cc31a.jpg", "http://yanxuan.nosdn.127.net/c121446b59688320471669326925c79b.jpg", "http://yanxuan.nosdn.127.net/b19bfd8c5c70a37d2ebb04716635023d.jpg", "http://yanxuan.nosdn.127.net/e32191ed9939ca4d21958b3a08868407.jpg", "http://yanxuan.nosdn.127.net/2e6157ae310d44571f5851fafa5cf43e.jpg", "http://yanxuan.nosdn.127.net/c47e3388f0f9f6df1a593b0903e4c9ab.jpg", "http://yanxuan.nosdn.127.net/fcd50ee3a32f8b0ae8c146fc8de9dcca.jpg", "http://yanxuan.nosdn.127.net/689669a3b23f19d9751961bcb8af000c.jpg", "http://yanxuan.nosdn.127.net/23fe6bb559b93e86ef130e9235b4c2e9.jpg", "http://yanxuan.nosdn.127.net/46133b2b544864456da368ad042a251c.jpg", "http://yanxuan.nosdn.127.net/aac043fa579e14fd27ee3a3c23be9707.jpg", "http://yanxuan.nosdn.127.net/ad68cb784b1e11053684b9d44785d2e9.jpg", "http://yanxuan.nosdn.127.net/0b9104e0eae7965a34b90c46aeee2015.jpg", "http://yanxuan.nosdn.127.net/3285358b4b04dfa9da1970017af6635f.jpg", "http://yanxuan.nosdn.127.net/db6c91374f5ccf6f2c8a7a041d4fc049.jpg", "http://yanxuan.nosdn.127.net/b7fa9a94068ea34db9e6927762848c6f.jpg", "http://yanxuan.nosdn.127.net/2cf596655756b72b16541d6e982e3d05.jpg", "http://yanxuan.nosdn.127.net/a23b44b13da5bf466a1aec22ab017cb5.jpg", "http://yanxuan.nosdn.127.net/ac34efbce25cf207747ccc0555479aed.jpg", "http://yanxuan.nosdn.127.net/f305ba362098638581fbb68b4e5b4681.jpg", "http://yanxuan.nosdn.127.net/3e73cb3d751d3a0a22236aa749308d37.jpg", "http://yanxuan.nosdn.127.net/7b8bf0ce6602a0b37a679c2f5614a633.jpg", "http://yanxuan.nosdn.127.net/cac2a8dd5a78a1c37afbf4d4c469c291.jpg", "http://yanxuan.nosdn.127.net/d764c5d4a0958d61479832bcfb23aaf5.jpg", "http://yanxuan.nosdn.127.net/37ea3e8a9ea7ace4157afd2bf8fe352e.jpg", "http://yanxuan.nosdn.127.net/7f74f4f8302443ff0485c27f96dd786c.jpg", "http://yanxuan.nosdn.127.net/da9b586bca6c2a1b6c40a24b74f65500.jpg"],
		"inventory": [82],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1200*600*450mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，抽屉拉手请自行安装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 944,
		"date": "1500012577512",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1201015,
		"price": 4899,
		"topName": "YEATION唐宁街实木床+2床头柜组合",
		"subName": "舒适温馨，经典搭配",
		"shortDescription": ["实木床板", "坚实耐用", "圆角打磨", "安全放心", "实木隔板", "储物无忧"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/df61d371843b2b90ec13740c416c49bb.jpg", "http://yanxuan.nosdn.127.net/72c07c0f24c4056eebc8db58139e1df3.jpg", "http://yanxuan.nosdn.127.net/a704d11fd1fdf261dd8fe3f2ee92e248.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/dcd520607031b6a7b9b96a5a45bffd58.png", "http://yanxuan.nosdn.127.net/65eb6fb7f0984143dd1df8dc8057e4dd.jpg", "http://yanxuan.nosdn.127.net/a8fb25db9c27ec6ef8b882dd909fd2b5.jpg", "http://yanxuan.nosdn.127.net/5b9c6e4af5083b7cda3badc734f23eb6.jpg", "http://yanxuan.nosdn.127.net/a7b36a9b8a8df03c1e47a9f4448ec73c.jpg"],
		"types": ["床+2个床头柜"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/fc287648a2d3159f8474bf7248950d21.jpg", "http://yanxuan.nosdn.127.net/95e8cdb6cccc681fccae9431223fe509.jpg", "http://yanxuan.nosdn.127.net/470b90568307e7cd62d3ab0b52f80278.jpg", "http://yanxuan.nosdn.127.net/c9efac6fa29a5b00277c7f8bd4042644.jpg", "http://yanxuan.nosdn.127.net/f508143d34bdc31154a44169b43b56e2.jpg", "http://yanxuan.nosdn.127.net/71a97036102bfcfd9358779a027ad537.jpg", "http://yanxuan.nosdn.127.net/9ef60c80b26ddc9ec3c31e4b6a35ab8b.jpg", "http://yanxuan.nosdn.127.net/3e5c20dc444f1ce4ff0e640723852998.jpg", "http://yanxuan.nosdn.127.net/906a0982cf50805931514051338d11ad.jpg", "http://yanxuan.nosdn.127.net/78e171a6183cb9360b5a9fc679fe2513.jpg", "http://yanxuan.nosdn.127.net/91a25490fc9a37c8c8bf1cd52489534b.jpg", "http://yanxuan.nosdn.127.net/f0058610747ae3956d19513accac974d.jpg", "http://yanxuan.nosdn.127.net/74d676bfb2452750e0a7a7b5783b2af7.jpg", "http://yanxuan.nosdn.127.net/10212482be0a00ee9e59205a121c77d4.jpg", "http://yanxuan.nosdn.127.net/a7a449e3648226886efad245f7c82fd1.jpg", "http://yanxuan.nosdn.127.net/629a46ef8100e434176271cf6d1251e7.jpg", "http://yanxuan.nosdn.127.net/5f23f7f519218b84f42d0a47c6955940.jpg", "http://yanxuan.nosdn.127.net/fa750b467e4ed5cc36c2d033ad74fc30.jpg", "http://yanxuan.nosdn.127.net/d890fa8fdb4d244700db15a34b2fa0f8.jpg", "http://yanxuan.nosdn.127.net/8737256522c788a2a8ea3f0082651eaa.jpg", "http://yanxuan.nosdn.127.net/b3676df5893311842f2c9784081b8aad.jpg", "http://yanxuan.nosdn.127.net/3cbd2f6e02be0de08e1a0530d9c5b3b8.jpg", "http://yanxuan.nosdn.127.net/0cfeba26d731eadda2e75858a3baad94.jpg", "http://yanxuan.nosdn.127.net/780bd080ac85a07cffac187ea1f515dc.jpg", "http://yanxuan.nosdn.127.net/393259afc968ce8747e0996b6bcb3d48.jpg", "http://yanxuan.nosdn.127.net/a54795c7d95b9f237f6b056742fde64b.jpg", "http://yanxuan.nosdn.127.net/652556bb39975e651583a0d8033a4cb5.jpg", "http://yanxuan.nosdn.127.net/1a57a89308dea8d284a7ea1fd7324335.jpg", "http://yanxuan.nosdn.127.net/8ddb27cc4e5f5fc7cac148f36efd0ae2.jpg", "http://yanxuan.nosdn.127.net/d6f1d348c441e51dcb6a794c29bf37a6.jpg", "http://yanxuan.nosdn.127.net/5e32831d00d44e603bf13c94b2489fbc.jpg", "http://yanxuan.nosdn.127.net/70d23e2a268899033fff719037ba97b5.jpg", "http://yanxuan.nosdn.127.net/fd288bfaf00c083147d206b99c57c67d.jpg", "http://yanxuan.nosdn.127.net/18a3e88064cb7b606eda286277268ae7.jpg", "http://yanxuan.nosdn.127.net/8e8ff5181596323ccfbd46f82801acd8.jpg", "http://yanxuan.nosdn.127.net/f8dfa61820829aafac066f8c223159c7.jpg", "http://yanxuan.nosdn.127.net/b669c7117d824c9f2ca16484459c6cbc.jpg", "http://yanxuan.nosdn.127.net/968bcd1db9ad882b0643fdb4f03a6ed5.jpg", "http://yanxuan.nosdn.127.net/b6c1fec88cca287a7ae9b5c1864e0927.jpg", "http://yanxuan.nosdn.127.net/6f3a40702df0ec57fe3dc7550fd2fef9.jpg", "http://yanxuan.nosdn.127.net/63682cab53749925bb477a4aa88e7d89.jpg", "http://yanxuan.nosdn.127.net/e0bbb1aa4f999d6992f7db574988fb5d.jpg", "http://yanxuan.nosdn.127.net/55bf7ce28fca0a8069d588c66b57b997.jpg", "http://yanxuan.nosdn.127.net/d124528c51427a615c386a2f226c1123.jpg", "http://yanxuan.nosdn.127.net/7c8f8cb5a8252916af9abb1138ba3eba.jpg", "http://yanxuan.nosdn.127.net/f91031cfbbe32368320e0c79e2755ff1.jpg", "http://yanxuan.nosdn.127.net/56e357ce630425af8526eefa9224135d.jpg", "http://yanxuan.nosdn.127.net/ba60dec6bf118e9e3fc1ebe1df7590d4.jpg", "http://yanxuan.nosdn.127.net/58487d78e5c1d0b38195119196d95ade.jpg", "http://yanxuan.nosdn.127.net/878b229bb5fcdd8d6fea5736b1208664.jpg", "http://yanxuan.nosdn.127.net/f60de1d0d11938befe97600cffc62bd2.jpg", "http://yanxuan.nosdn.127.net/ab357f3c22bd080b48cc1e59fde83674.jpg", "http://yanxuan.nosdn.127.net/e8b4c4f650d7aafacc63781b2d2d38a4.jpg"],
		"inventory": [557],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "组合内容",
			"attrValue": "1张床+2个床头柜"
		}, {
			"attrName": "安装方式",
			"attrValue": "床需要组装，床头柜的拉手请自行安装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 192,
		"date": "1500012580135",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1165030,
		"price": 3599,
		"topName": "YEATION唐宁街系列实木床",
		"subName": "田园风情，经典搭配",
		"shortDescription": ["复古工边", "追求细节", "稳固桌腿", "立体切割", "耐用五金", "结构安全"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/eba74e1a3951d4e38770cfe14fbba1f3.png", "http://yanxuan.nosdn.127.net/c7ce9632d9ad142d6c8f44a1748a79bf.png", "http://yanxuan.nosdn.127.net/3af2ab26fe7817e6af43a762977418dc.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/32788e747cbe55f4153a58ab087b2fe6.png", "http://yanxuan.nosdn.127.net/711929b550f0bc9b47cba255c9853a4f.jpg", "http://yanxuan.nosdn.127.net/5548a94a1c9d93a25ca251d1b5d664a7.jpg", "http://yanxuan.nosdn.127.net/566f7df507bc15802b56611f4492ce2d.jpg", "http://yanxuan.nosdn.127.net/f48f97962aaf8a79c022de3d58af7cc0.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/254234d11d02075a2ab61be8e6bbe2b9.jpg", "http://yanxuan.nosdn.127.net/ca4689348772565d25dc90d0ba5804c2.jpg", "http://yanxuan.nosdn.127.net/187a250af4fff67baecf28739597627d.jpg", "http://yanxuan.nosdn.127.net/1277a93ce53e2dac020f615315ca58fe.jpg", "http://yanxuan.nosdn.127.net/7fc7253fc93c7c954b41f5c2d1d8df41.jpg", "http://yanxuan.nosdn.127.net/7a12beca766436c9de3b352308273131.jpg", "http://yanxuan.nosdn.127.net/f485c374ff2f0f0a1171dcf740f4e712.jpg", "http://yanxuan.nosdn.127.net/007316802009a812569f6efb11a0435b.jpg", "http://yanxuan.nosdn.127.net/0ca4132a47f0f3f5917920a498e32bf9.jpg", "http://yanxuan.nosdn.127.net/bc682920d793de76f8d343a133e50477.jpg", "http://yanxuan.nosdn.127.net/69681927122d540452c849d23154ee42.jpg", "http://yanxuan.nosdn.127.net/a3bceb78e8b732341fed29180ba926fa.jpg", "http://yanxuan.nosdn.127.net/c4ce9c4ecbd8796a5e490481ca78a223.jpg", "http://yanxuan.nosdn.127.net/3340c1a754f107129d967d3df057be09.jpg", "http://yanxuan.nosdn.127.net/e5ae6bb1c3df79fa04a0f8fae90a0ba5.jpg", "http://yanxuan.nosdn.127.net/36c5d75b7793fa4e82d79c339f97465d.jpg", "http://yanxuan.nosdn.127.net/2edf50703eace6380e9bb51614047779.jpg", "http://yanxuan.nosdn.127.net/656a4ba8adf0accd20dbc0de08f6e96f.jpg", "http://yanxuan.nosdn.127.net/478d412e9c9e11c2f6392c35bd9e5c0d.jpg", "http://yanxuan.nosdn.127.net/7a86baf964a7a7e7196bdcd40316b2cf.jpg", "http://yanxuan.nosdn.127.net/c3871fac63bb41b476f1690a15deb757.jpg", "http://yanxuan.nosdn.127.net/6e91f4a4b7779b7571eb7bc0122f17fe.jpg", "http://yanxuan.nosdn.127.net/f81f32b0d49aa136a2ed23fe607e7449.jpg", "http://yanxuan.nosdn.127.net/7af637841a76088e6f3bb89d2585472e.jpg", "http://yanxuan.nosdn.127.net/0d2d14af9415f65bc132ad0dd9baec4f.jpg", "http://yanxuan.nosdn.127.net/596443e01c3b43d3d3e98df6d7c39a46.jpg", "http://yanxuan.nosdn.127.net/3fb2e9c77cc4ccc863717208440660a1.jpg", "http://yanxuan.nosdn.127.net/811001d3bcfa92745da881b9b2a950a5.jpg", "http://yanxuan.nosdn.127.net/07b60d3a0bce3a3a20b29cab23c69fa1.jpg", "http://yanxuan.nosdn.127.net/c499ea2327e131ce4358eda1939ac24d.jpg", "http://yanxuan.nosdn.127.net/0a06cc601a17300d81b502e83406aba9.jpg", "http://yanxuan.nosdn.127.net/a62130128593bdfad46c59022d5ddbaa.jpg", "http://yanxuan.nosdn.127.net/b333ea39d04432cb155d8b577b7cc240.jpg", "http://yanxuan.nosdn.127.net/27de995586f1e32e6b0659e6eea763f9.jpg", "http://yanxuan.nosdn.127.net/af1d152225b75204b6caf58af3df7cf6.jpg", "http://yanxuan.nosdn.127.net/86031840ddfb700a47ef20b0731ef032.jpg", "http://yanxuan.nosdn.127.net/62bcc0e1d6bd0c880164ca0e773fced8.jpg", "http://yanxuan.nosdn.127.net/29b63ab09c8907a7bcb8d9bd52cf6cac.jpg", "http://yanxuan.nosdn.127.net/b0395de00fc1bdb7a2e1e6ad3f33c4f0.jpg", "http://yanxuan.nosdn.127.net/c2178d630f68be8a5597369ecee65b43.jpg", "http://yanxuan.nosdn.127.net/b8089c917d6ec7539e5a2831c61a7bc1.jpg", "http://yanxuan.nosdn.127.net/bea44e8f0461a61576d0d0603f5df510.jpg", "http://yanxuan.nosdn.127.net/f94ca3b39dc961f52dabebcd426b3c12.jpg", "http://yanxuan.nosdn.127.net/096d55c28fd798126ef1bd9f18b40ed6.jpg", "http://yanxuan.nosdn.127.net/6d96506df2642aaeb8762b61cf8586df.jpg", "http://yanxuan.nosdn.127.net/4d86899f09e9eda61fbc2c2482c5524d.jpg", "http://yanxuan.nosdn.127.net/0de2bc0a77b03dea41c8d0f3de1045ff.jpg"],
		"inventory": [876],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1915*2135*1100mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 350,
		"date": "1500012582928",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1165031,
		"price": 699,
		"topName": "YEATION唐宁街系列实木床头柜",
		"subName": "小巧美观，方便储物",
		"shortDescription": ["稳固桌腿", "立体切割", "后档设计", "贴心防漏", "实木滑轨", "久用愈顺"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/20fc5fd34e9e7f545b82c520a3a72755.png", "http://yanxuan.nosdn.127.net/94eb32c10d1c97d348ae89729fd12463.png", "http://yanxuan.nosdn.127.net/b73e0c21e1b1dcb1ad7e681fc9120596.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/c2e5d199e2cdc35684f8a98a0376ad23.png", "http://yanxuan.nosdn.127.net/4819fb4825c1d0a5597c80abe6518695.jpg", "http://yanxuan.nosdn.127.net/b1752a4fbd6d43b83e55dc47fd0d3402.jpg", "http://yanxuan.nosdn.127.net/5e3cc1e3a31899de1aaa4275be656687.jpg", "http://yanxuan.nosdn.127.net/10879280c74689cd30538223f5c05161.jpg"],
		"types": ["胡桃木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/8a7be053c0dab298e03c114e48685309.jpg", "http://yanxuan.nosdn.127.net/e7ad790dfb3683b474904c7d1a0cf42b.jpg", "http://yanxuan.nosdn.127.net/15d67917036a84c789cda6b9cdb22962.jpg", "http://yanxuan.nosdn.127.net/d9a25d67cab8eb479991e1dbdb33ac63.jpg", "http://yanxuan.nosdn.127.net/8b0aa9f85ac3b9d83f131455c7fa5ca9.jpg", "http://yanxuan.nosdn.127.net/a47c131daef78ee1cd188486812b3d16.jpg", "http://yanxuan.nosdn.127.net/f953e523cb2a01d83a269c70a7d26b73.jpg", "http://yanxuan.nosdn.127.net/7d1c05cd3ec6b8bb0af979a74d298215.jpg", "http://yanxuan.nosdn.127.net/d66cc9be44b7464378c4bcc22a032b9e.jpg", "http://yanxuan.nosdn.127.net/e73f58264dea65603a9ecadec2ed0853.jpg", "http://yanxuan.nosdn.127.net/a995d3b057cc4c3958a4497ff0858920.jpg", "http://yanxuan.nosdn.127.net/78a545211dd9619599b426607739132e.jpg", "http://yanxuan.nosdn.127.net/64c4e28f82a2bab25904af9e8d9d1e2f.jpg", "http://yanxuan.nosdn.127.net/52d01f0cae2c002322614bc1c2afba8a.jpg", "http://yanxuan.nosdn.127.net/f2e00015f18ee8ee83a828a79dc61252.jpg", "http://yanxuan.nosdn.127.net/7aa7d887759d8790740889051755ff24.jpg", "http://yanxuan.nosdn.127.net/230f36045ad310dc687b8b6337574093.jpg", "http://yanxuan.nosdn.127.net/27bb70000c90dc6bc5edf01b39a2710b.jpg", "http://yanxuan.nosdn.127.net/d7d1f10aa5122f7e8f287db3f4846886.jpg", "http://yanxuan.nosdn.127.net/42da2f7be5133c703ec0e90574f28a81.jpg", "http://yanxuan.nosdn.127.net/dd3319f3239d8ea68e8994aa4aa45f17.jpg", "http://yanxuan.nosdn.127.net/a939530eb48310a712bdd7df6414c796.jpg", "http://yanxuan.nosdn.127.net/9750fa9b256824793a026f42088005d6.jpg", "http://yanxuan.nosdn.127.net/8fd489d40aa8133578b87a7ec772d402.jpg", "http://yanxuan.nosdn.127.net/977bddc6ffdda86989aa8490287d4499.jpg", "http://yanxuan.nosdn.127.net/e2458eaacda80bcc80470fa7b6c91a9d.jpg", "http://yanxuan.nosdn.127.net/af5d915d0b1d0d317120602c57c23120.jpg", "http://yanxuan.nosdn.127.net/6a6210c705da1843c1fd6ead65a690ba.jpg", "http://yanxuan.nosdn.127.net/0233d91467717c9e75b9d92421c363ff.jpg", "http://yanxuan.nosdn.127.net/4ce08680ea293d497ef965a4305856d2.jpg", "http://yanxuan.nosdn.127.net/488666567116dbd3d69e44d40b741e70.jpg", "http://yanxuan.nosdn.127.net/3aef20f07f4d229bcc685ae15f1a5bed.jpg", "http://yanxuan.nosdn.127.net/f2f8e49e77fc06efb00ab8012c80e029.jpg", "http://yanxuan.nosdn.127.net/5e6cccf40e00e52f975486593575020d.jpg", "http://yanxuan.nosdn.127.net/f3eebf6379534cfbe838d22acf93b356.jpg", "http://yanxuan.nosdn.127.net/731dc9f623e6f081c55b80ed50835385.jpg", "http://yanxuan.nosdn.127.net/6a04ee6e947d12b0009bc8ac36e8bf64.jpg", "http://yanxuan.nosdn.127.net/8028a012eb596f3b5fd5a5d6aca51a23.jpg", "http://yanxuan.nosdn.127.net/08452f03e9b9ee0824a57f0396336cad.jpg", "http://yanxuan.nosdn.127.net/5fd02d2aaeddeec3ddd9194cf0bf5cef.jpg", "http://yanxuan.nosdn.127.net/3d80fc1a18a0fbe3e5ae7f9337504f70.jpg", "http://yanxuan.nosdn.127.net/125f3853a44a153cdb8c4567fb61ae27.jpg", "http://yanxuan.nosdn.127.net/afe54c98b7ca3dc5a9bab2b878baaafa.jpg", "http://yanxuan.nosdn.127.net/258ca98394717be58de1626638e0cbae.jpg", "http://yanxuan.nosdn.127.net/e616130e732d6990c9c0f2ba167e4b18.jpg", "http://yanxuan.nosdn.127.net/dbcfc2875c80ae5659ac0560eb71eb1b.jpg", "http://yanxuan.nosdn.127.net/33b89a0fbc2f9970e8eb312e9cc57ce5.jpg", "http://yanxuan.nosdn.127.net/9bd2425db0ef313f50ea684623020fc3.jpg"],
		"inventory": [929],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "450*410*550mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "不提供安装，抽屉拉手请自行安装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 969,
		"date": "1500012585517",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1160005,
		"price": 999,
		"topName": "原素系列实木简约椅（两把）",
		"subName": "性价比之选，榫卯连接",
		"shortDescription": ["经典造型", "贴合曲线", "榫卯连接", "稳固扎实", "原木纹理", "自然美观"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a420169ef52b146bddb86c49bdbea131.jpg", "http://yanxuan.nosdn.127.net/b91c87601115aba89036ccd49ef741bc.jpg", "http://yanxuan.nosdn.127.net/2df3c62d0658be2b72e43ede116c47fd.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4f5744971de6aab22ff4312a3a9a4eb1.png", "http://yanxuan.nosdn.127.net/2b956ad7afbf542c4fd87e93d106ef61.jpg", "http://yanxuan.nosdn.127.net/b7357ac16422a45aca4ba90b47de8d9f.jpg", "http://yanxuan.nosdn.127.net/91b93b05739539ec95438f33fa2e3485.jpg", "http://yanxuan.nosdn.127.net/4dbeea5d025b383634a0358f9f11f102.jpg"],
		"types": ["原木色", "胡桃木色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/4f859786b28e1027b93feb6f8603ce28.jpg", "http://yanxuan.nosdn.127.net/5a79ea386cf800b748d65f34cea5df46.jpg", "http://yanxuan.nosdn.127.net/7e366e2f28e6eb47aae97eeb0c83ae61.jpg", "http://yanxuan.nosdn.127.net/00c593bd4e0e214c2e1584ec5e05e10e.jpg", "http://yanxuan.nosdn.127.net/fb6fd8da0fb43b1fb92b3a9b424424e9.jpg", "http://yanxuan.nosdn.127.net/9bf7fb5cd3c3714b1a3c4debff16984c.jpg", "http://yanxuan.nosdn.127.net/e97fa625449f659165f646f24f5694f1.jpg", "http://yanxuan.nosdn.127.net/6b9f13126b43aabc10c0ecf88429c7a6.jpg", "http://yanxuan.nosdn.127.net/747e0299a0feb5e6e94a2b4d2217e7f7.jpg", "http://yanxuan.nosdn.127.net/d3002ef17aecc1008117da62a9cb9f47.jpg", "http://yanxuan.nosdn.127.net/b22937c2a2bbb58df7a408ce7874ca66.jpg", "http://yanxuan.nosdn.127.net/292d4b050cde56b736651db1b2498439.jpg", "http://yanxuan.nosdn.127.net/617bdd450feb950101dd1001af362052.jpg", "http://yanxuan.nosdn.127.net/78313b1687bb7aeaf130d7b6b30def99.jpg", "http://yanxuan.nosdn.127.net/168078bd302ec56054f963d81fddc8cd.jpg", "http://yanxuan.nosdn.127.net/a1e54f8c1b047fe8339143625fa8b2d1.jpg", "http://yanxuan.nosdn.127.net/334be716df2fdcca34b4c7509918282f.jpg", "http://yanxuan.nosdn.127.net/90ea8736204f6d76097ce6518beca089.jpg", "http://yanxuan.nosdn.127.net/ad37782d09309f96f5aed895272550e5.jpg", "http://yanxuan.nosdn.127.net/38721803ca99ce4d2952a2658d84fbf3.jpg", "http://yanxuan.nosdn.127.net/54d5e36b94187169f2b0b151fbb06595.jpg", "http://yanxuan.nosdn.127.net/ded0ded2642af6419039d383510c1022.jpg", "http://yanxuan.nosdn.127.net/ec7d7f1f6de04c00b3e745c46a21205d.jpg", "http://yanxuan.nosdn.127.net/974c2a80522e12d85fe985c4a694b152.jpg", "http://yanxuan.nosdn.127.net/a567f57f4c883861ecc2676ea66aea8d.jpg", "http://yanxuan.nosdn.127.net/7386dacaea831a6bd92d798d1f007303.jpg", "http://yanxuan.nosdn.127.net/83d4313d81fd90a1c6bac7f746c26935.jpg", "http://yanxuan.nosdn.127.net/06a7b5dffe0c369ebb14c099141c0996.jpg", "http://yanxuan.nosdn.127.net/2551e22b8c2840d8a392d80dfd8ae562.jpg", "http://yanxuan.nosdn.127.net/a4118e6e1e39c612546628237858bd4e.jpg", "http://yanxuan.nosdn.127.net/1524230ada57a6c2fcde81a36afb8553.jpg", "http://yanxuan.nosdn.127.net/5b8e157ccdcea4951da234cfc45ed05e.jpg", "http://yanxuan.nosdn.127.net/4dbac1737d5cdc59ebd67a21ad7e0ff4.jpg", "http://yanxuan.nosdn.127.net/b9b22060746898bb0eabf4729257bce8.jpg", "http://yanxuan.nosdn.127.net/88fc62fb1185ebcd0e0f6117fc8410b0.jpg", "http://yanxuan.nosdn.127.net/2c98d89a8c38c887cfa3fc991156aa2e.jpg", "http://yanxuan.nosdn.127.net/ee0d83a35dc4c1c5be24b0561b04d019.jpg", "http://yanxuan.nosdn.127.net/5149de7521ee57dc67326c78fdcb172a.jpg", "http://yanxuan.nosdn.127.net/7cb5e9968a512ec0ce63c266fd523f34.jpg", "http://yanxuan.nosdn.127.net/dafcc9ff21962c8ead31f70222c037c8.jpg", "http://yanxuan.nosdn.127.net/16f8362670fadc4ed1ac6ca173d384ff.jpg", "http://yanxuan.nosdn.127.net/021778d6252d090ee6ce6298f6d218b0.jpg", "http://yanxuan.nosdn.127.net/5fbf77ec9f4a6873d3759f2594e59c1e.jpg", "http://yanxuan.nosdn.127.net/45ca94c7c61eee112ead3581dc37d0b6.jpg", "http://yanxuan.nosdn.127.net/5edeee5005398629570ec885ab54f41b.jpg", "http://yanxuan.nosdn.127.net/ba5dde65181135fcbf25f27a6ecc908a.jpg", "http://yanxuan.nosdn.127.net/07d7d678af1db66f74f930f03c36b03f.jpg", "http://yanxuan.nosdn.127.net/2297d7329e4cbd514360351fffc9fd9e.jpg", "http://yanxuan.nosdn.127.net/52459da7c6590d08e8eef479a490225e.jpg", "http://yanxuan.nosdn.127.net/4fe28364d70f5e04764e6f996a054d2f.jpg", "http://yanxuan.nosdn.127.net/830ad713f24fb4f0c21952f335a82c04.jpg", "http://yanxuan.nosdn.127.net/6a87646c6d6638f838644a414845f598.jpg", "http://yanxuan.nosdn.127.net/f3581dd7b709fd87cf7ee29f9aaaefd8.jpg", "http://yanxuan.nosdn.127.net/5d1b38b4309633d3d933c35304092acb.jpg", "http://yanxuan.nosdn.127.net/14330e3c0a78c3db1da54c6f7c8d50ae.jpg", "http://yanxuan.nosdn.127.net/256bf60fbc59ca2919d102c94f2710e9.jpg", "http://yanxuan.nosdn.127.net/5ec18777dcf29b3c9fb369f9ee92bd5e.jpg", "http://yanxuan.nosdn.127.net/40bddcb5713c68de8ab99a96abe914ff.jpg", "http://yanxuan.nosdn.127.net/b62cd472817637c9f4eeffb5c3054867.jpg", "http://yanxuan.nosdn.127.net/006677bf4174629daf7d8cbe964b7c8a.jpg", "http://yanxuan.nosdn.127.net/577d7774ecde2fffcf9eef578a0f3305.jpg", "http://yanxuan.nosdn.127.net/ad28197f3783bdcb9a9ef9ce433d9990.jpg", "http://yanxuan.nosdn.127.net/26416f93c420f7170ca2ce1107e04d58.jpg", "http://yanxuan.nosdn.127.net/3704f25a5ddb6124eeea706fafb17f96.jpg", "http://yanxuan.nosdn.127.net/ff60644462391f87a2cb41c3816dcaf5.jpg", "http://yanxuan.nosdn.127.net/ce9f80517ba2d4ff0b2d2d2ced8c82f0.jpg", "http://yanxuan.nosdn.127.net/4f5b3044414b797b60c2a1a115776729.jpg", "http://yanxuan.nosdn.127.net/55d179fb1efcfdb54564e2abddb5c865.jpg", "http://yanxuan.nosdn.127.net/2cec909e22dde7a36c70a6e4322ea3e4.jpg", "http://yanxuan.nosdn.127.net/f6f2d9585db7d314a7b8bc19e6abcbbd.jpg", "http://yanxuan.nosdn.127.net/f8f502ea4faf7cb04744ad45484588b5.jpg", "http://yanxuan.nosdn.127.net/c8bc2c9aafaba8e5a89d49e5eabb9dcd.jpg"],
		"inventory": [930, 623],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "525*455*795mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "无需组装"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 759,
		"date": "1500012588312",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1160004,
		"price": 1499,
		"topName": "原素系列实木围椅（两把）",
		"subName": "凹弧椅面，减压舒适",
		"shortDescription": ["原木纹理", "尽显自然", "椅背包围", "贴合曲线", "凹弧椅面", "减压舒适"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/8e8c7c5fbb73078ac9c7b5ad28f14147.jpg", "http://yanxuan.nosdn.127.net/b06c2c21671bf72a08befd5eb2b6b93b.jpg", "http://yanxuan.nosdn.127.net/7363f97a7469ce90089887f0d756dd5c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/57b6055d8465f5c353bcde3fdd67d305.png", "http://yanxuan.nosdn.127.net/8e9efdfad10af173f7460fe2265fe3dd.jpg", "http://yanxuan.nosdn.127.net/9a289e891b26b33ed6cb3d51e103ca0e.jpg", "http://yanxuan.nosdn.127.net/4f9175d6440a6f207107971360e24b3a.jpg", "http://yanxuan.nosdn.127.net/76f45fccb70750cc45eb02eae0c9c2a4.jpg"],
		"types": ["胡桃木色", "原木色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/d0da2740e296cf7788b7c8556d6f4f7e.jpg", "http://yanxuan.nosdn.127.net/72aebfc95aabc517e3763b3b1451cbdd.jpg", "http://yanxuan.nosdn.127.net/7b7f1634ec3a13b19d0e7d7021c5f753.jpg", "http://yanxuan.nosdn.127.net/bb01af080a52b2ee19178b89ed7e3fc7.jpg", "http://yanxuan.nosdn.127.net/5951c1503b719e2a808c404d9e6d15cd.jpg", "http://yanxuan.nosdn.127.net/3e78afa5b5d2a4b495ee33feda8ed375.jpg", "http://yanxuan.nosdn.127.net/e3677bbb3b3aaf73b1dad2fc14bd1858.jpg", "http://yanxuan.nosdn.127.net/1db04830cea7cf871ed8960ae73c4a12.jpg", "http://yanxuan.nosdn.127.net/0ac6b4f258fed7733c7f0cbc4b7e15a8.jpg", "http://yanxuan.nosdn.127.net/f84982a0f3a9c1aa1af7cadffd5d3297.jpg", "http://yanxuan.nosdn.127.net/11afef2c35b998394fa2ac1662536b6d.jpg", "http://yanxuan.nosdn.127.net/1f5fe21ce5bad01a84752df012cbf64d.jpg", "http://yanxuan.nosdn.127.net/32b041d2c025deefc1bbbb3c4c248e6e.jpg", "http://yanxuan.nosdn.127.net/49e6c4c0f3d3cfb20a848604569a0fb3.jpg", "http://yanxuan.nosdn.127.net/e70f4c719ddd7c86d69724ea7a3a55b5.jpg", "http://yanxuan.nosdn.127.net/8a7257cdc937f1fb7dd1acf21c678209.jpg", "http://yanxuan.nosdn.127.net/84225acaf42ca0986041aadb41a419fc.jpg", "http://yanxuan.nosdn.127.net/e6e02a284cbefc463d8f580c4521dcb2.jpg", "http://yanxuan.nosdn.127.net/09e48c4c01c52dd6ee01f568e72170b1.jpg", "http://yanxuan.nosdn.127.net/aaf2ce90ff269760807a5ee95ff09fa6.jpg", "http://yanxuan.nosdn.127.net/d48e64d11967c324c386c6de7423a192.jpg", "http://yanxuan.nosdn.127.net/9be71b59cceb53519d2cc35d7a493e99.jpg", "http://yanxuan.nosdn.127.net/ce3bfeec0e60f0ab8cc1c0162f751676.jpg", "http://yanxuan.nosdn.127.net/881a299962b7ae8e2aad407284de147b.jpg", "http://yanxuan.nosdn.127.net/329fa363bd4a61af1fe1c2c0a07825bb.jpg", "http://yanxuan.nosdn.127.net/dfd88eee145fbbb140dd2883e7e5596f.jpg", "http://yanxuan.nosdn.127.net/5e0d78f67c96bca891f9dcf71a40d535.jpg", "http://yanxuan.nosdn.127.net/cb61a9cb9703cd1621e88e92ce307cb1.jpg", "http://yanxuan.nosdn.127.net/7aac9c195440076ed15848acb8e0da2b.jpg", "http://yanxuan.nosdn.127.net/9e23d3dab6dea040c5e42745c7beecaa.jpg", "http://yanxuan.nosdn.127.net/a953208dcfd16fb1010d4b771d0b3e5f.jpg", "http://yanxuan.nosdn.127.net/7d2a453f5d4bbe196f39806959bd6ae7.jpg", "http://yanxuan.nosdn.127.net/d768767bf6c4375c7605479702f4e7c9.jpg", "http://yanxuan.nosdn.127.net/8d4c36fcaade33d9bf829105bb10f492.jpg", "http://yanxuan.nosdn.127.net/9426cc0cc7b76ae4fed3f9831402f4bf.jpg", "http://yanxuan.nosdn.127.net/5b106d800c7043ea2c97804eee9bb85b.jpg", "http://yanxuan.nosdn.127.net/2a880929ee68faa9ef72e74647c577c5.jpg", "http://yanxuan.nosdn.127.net/477a5b13cebbe1cada588b6be96ae44d.jpg", "http://yanxuan.nosdn.127.net/e1af1d6931a45ebe8fd5acac9531b938.jpg", "http://yanxuan.nosdn.127.net/91204f5ae4ab2c2797540be76160923d.jpg", "http://yanxuan.nosdn.127.net/6ab29fd5d0b1bd862920ecda2e0c0a97.jpg", "http://yanxuan.nosdn.127.net/fb50ef0b92b4dbaa36494360e5a38c90.jpg", "http://yanxuan.nosdn.127.net/7f493393b19c628dc98e94191fa04a8c.jpg", "http://yanxuan.nosdn.127.net/e1be72eb34989ffd87edd609281908dc.jpg", "http://yanxuan.nosdn.127.net/7e4857fab846c5e32db0431f746b3033.jpg", "http://yanxuan.nosdn.127.net/bdbc137f52aebacf72b69af8155bff63.jpg", "http://yanxuan.nosdn.127.net/d36c2b181833739c7e7215b0e762c71b.jpg", "http://yanxuan.nosdn.127.net/072bac19502e371fd1b461ea28dda46a.jpg", "http://yanxuan.nosdn.127.net/5cc4c8c1f18ffa30fc2fce1479ef0e1d.jpg", "http://yanxuan.nosdn.127.net/24167cbc429a899dd7d5eadb45c641a6.jpg", "http://yanxuan.nosdn.127.net/7c2f5b1008cf0d541840b7c7328c3889.jpg", "http://yanxuan.nosdn.127.net/1594296cf1fe7ea0c366dd6b5aa31970.jpg", "http://yanxuan.nosdn.127.net/313b74bfd94235599a6985f7ec2fbb26.jpg", "http://yanxuan.nosdn.127.net/9a4211f905f885724d7f74fd703b37fe.jpg", "http://yanxuan.nosdn.127.net/7c8ce4b52f7eff38ea6b2dcae6a35f72.jpg", "http://yanxuan.nosdn.127.net/b122f70c4a1df834ddb770e99d45b325.jpg", "http://yanxuan.nosdn.127.net/9ae070f75fe7003c02ff7f0b3dfe9a5f.jpg", "http://yanxuan.nosdn.127.net/d8abbd0a20081e4b8b9c2b752588879a.jpg", "http://yanxuan.nosdn.127.net/495810efc375babaed6c4fa8bbf3357b.jpg", "http://yanxuan.nosdn.127.net/e8eb70450331d49c86aadc8d0debd0c3.jpg", "http://yanxuan.nosdn.127.net/209c0baed2844c68b289e0ead40495f2.jpg", "http://yanxuan.nosdn.127.net/4f6d94ffc885b8301fca4c95c5b77bbd.jpg", "http://yanxuan.nosdn.127.net/0ca78cec415d6a003d531022fbd12a45.jpg", "http://yanxuan.nosdn.127.net/a4c7070719742707312a7006ba5fd5e4.jpg", "http://yanxuan.nosdn.127.net/d59876b52e136335197a3810c6130e16.jpg", "http://yanxuan.nosdn.127.net/889bd0f1d2e2bbe7e745fee9249256f4.jpg", "http://yanxuan.nosdn.127.net/05a9e0712c325e97aaac30f72d5fc5e9.jpg", "http://yanxuan.nosdn.127.net/b0254365387c9019ee7f9999374e4db4.jpg", "http://yanxuan.nosdn.127.net/e934d565f7da0f498229f2f5cf83cd5d.jpg", "http://yanxuan.nosdn.127.net/bc24191a13a5b7f0fc4e6f58bb2feea1.jpg", "http://yanxuan.nosdn.127.net/96a354d79dd1ae11c8dc10832103443c.jpg", "http://yanxuan.nosdn.127.net/78503f5f42b8c26bd6e99001328973e0.jpg", "http://yanxuan.nosdn.127.net/c8bc865a8c5345d5a5006c2bb855858c.jpg", "http://yanxuan.nosdn.127.net/5386b3ba0c066d89c72a700536f65c48.jpg", "http://yanxuan.nosdn.127.net/e9fab0344b7417412934f38e2a1a6957.jpg"],
		"inventory": [992, 115],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "540*565*730mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "无需组装"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 539,
		"date": "1500012590871",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097005,
		"price": 1199,
		"topName": "原素系列实木餐椅（两把）",
		"subName": "经典造型，贴合人体曲线",
		"shortDescription": ["经典造型", "贴合曲线", "一级白橡", "质地坚实", "忠于原木", "自然纹理"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0715bbf38cd68aa92c4bef430c5aa216.jpg", "http://yanxuan.nosdn.127.net/bf5ef7c8e4affc01ee31e8bbc06d4871.jpg", "http://yanxuan.nosdn.127.net/00555a5104524174e154adc3f48b8802.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/e5fd0724a05387615738173fb8f1570d.png", "http://yanxuan.nosdn.127.net/3dcd74c8999973a1acc95adbb36e03c6.jpg", "http://yanxuan.nosdn.127.net/80dda4e65f1d9773261133dcf039f7af.jpg", "http://yanxuan.nosdn.127.net/99e6011cd4a60538e195f006c5aaa149.jpg", "http://yanxuan.nosdn.127.net/0162fbe591f22997baf27237b9d3f2c5.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/4b2f28b84deaa6a52cd909ea91590eff.jpg", "http://yanxuan.nosdn.127.net/db40fe251548d80e92d968f41d2d7440.jpg", "http://yanxuan.nosdn.127.net/5ad0930cbaeab80157f98840c2e67580.jpg", "http://yanxuan.nosdn.127.net/8e02c2730b0409bb00b1461678bf45da.jpg", "http://yanxuan.nosdn.127.net/fa365d48eec6535559476d10fe181adc.jpg", "http://yanxuan.nosdn.127.net/b8d2e0bab43a2a69ded0a8f14252081f.jpg", "http://yanxuan.nosdn.127.net/ad7f704cf14f66ba991bdffeacdc18e2.jpg", "http://yanxuan.nosdn.127.net/fba9b0d605d3ea3b732d148156902147.jpg", "http://yanxuan.nosdn.127.net/3a73870d16681a1d8de7ab42ee2d0033.jpg", "http://yanxuan.nosdn.127.net/c17a2347a91ecafc204d0e9ce44cf3ff.jpg", "http://yanxuan.nosdn.127.net/6f763f0c52ca2c0cfe2202e05ea0dcc9.jpg", "http://yanxuan.nosdn.127.net/65c5083e0db49a48c584c0c8fd6226be.jpg", "http://yanxuan.nosdn.127.net/4d8a2c946de440f32158b3b852e6689f.jpg", "http://yanxuan.nosdn.127.net/843c21873c9a0d1e06f73d70ba91a6d6.jpg", "http://yanxuan.nosdn.127.net/832fcb4abb7b12fb6d8ce2f6c1c28494.jpg", "http://yanxuan.nosdn.127.net/1a65461b7a15d3bf3257ce9dafdc865e.jpg", "http://yanxuan.nosdn.127.net/6cbdf92bdd089545fc7670bf16a28fb3.jpg", "http://yanxuan.nosdn.127.net/a62f43f2ee15c24d6e988ccacc08b8e7.jpg", "http://yanxuan.nosdn.127.net/f5706228d8481244dd7540cfa52c1489.jpg", "http://yanxuan.nosdn.127.net/a2b877e8c71e46f7bbcf2ce5d5dc12fe.jpg", "http://yanxuan.nosdn.127.net/2c7cbf46f57778021e698608c47e4249.jpg", "http://yanxuan.nosdn.127.net/491bb25671a9cb3fac60fed37f29c89d.jpg", "http://yanxuan.nosdn.127.net/c40a2d868604ec7c3dfde0ef6cbfd458.jpg", "http://yanxuan.nosdn.127.net/8753b4220227452dd3f128b347a23bc9.jpg", "http://yanxuan.nosdn.127.net/73c61d4ac4282a0065868b789cdac08d.jpg", "http://yanxuan.nosdn.127.net/ba8495673ef46ddc2ebf07a8dae518fe.jpg", "http://yanxuan.nosdn.127.net/9536d63f9c94d7c52101ea1b249f43b9.jpg", "http://yanxuan.nosdn.127.net/37b13afbb4e8d68acb5872acd42f8b5d.jpg", "http://yanxuan.nosdn.127.net/219e2101422650c452ece7057f0c58a5.jpg", "http://yanxuan.nosdn.127.net/290ab4ae7497fb3d271b9a9817bf416c.jpg", "http://yanxuan.nosdn.127.net/3d3b9bfcbf39675289359bef19c5bebf.jpg", "http://yanxuan.nosdn.127.net/6f0b50fcf6d875952df27296899046a1.jpg", "http://yanxuan.nosdn.127.net/cd8cb6edac1442d352c6a43ed8560f84.jpg", "http://yanxuan.nosdn.127.net/86868e2c9aa14d4cf0b8767f45c83d06.jpg", "http://yanxuan.nosdn.127.net/ba1dd3a4191eaadaef84706ec6080b64.jpg", "http://yanxuan.nosdn.127.net/01330219572d4e928d4d4832d3658508.jpg", "http://yanxuan.nosdn.127.net/4d8df2d8407135a67081a4cf77722b37.jpg", "http://yanxuan.nosdn.127.net/e444a6e76f2d604ac604bd47465825cb.jpg", "http://yanxuan.nosdn.127.net/113df36bbddcafcbddc90520a3f3e2de.jpg", "http://yanxuan.nosdn.127.net/7d723c62470847be66e6028c7a4bf92c.jpg", "http://yanxuan.nosdn.127.net/a7345314519b14eb24045cf69689aa59.jpg", "http://yanxuan.nosdn.127.net/3036f30927689ef7fdbbda0b2e459397.jpg", "http://yanxuan.nosdn.127.net/b30e2b21d0b2ad47bb17e3d8dc7cb599.jpg", "http://yanxuan.nosdn.127.net/a807b6d839f329ac48a1a3cf2a788ff4.jpg", "http://yanxuan.nosdn.127.net/e51b52accb529675d1821dbe31049cf1.jpg", "http://yanxuan.nosdn.127.net/759d90957c12dffc4a656694db22763d.jpg", "http://yanxuan.nosdn.127.net/f92ba1ce8d413a97d94055ef73ddfb28.jpg", "http://yanxuan.nosdn.127.net/1a6b14ebb6d0f55052772d926af0b6b5.jpg", "http://yanxuan.nosdn.127.net/98fe77c6c51961c784fef10def64d9d6.jpg", "http://yanxuan.nosdn.127.net/b8d865a4b3b9cfb10a912c7fca5fccfa.jpg", "http://yanxuan.nosdn.127.net/5b15985108e954302d4d9d04f77a39b7.jpg", "http://yanxuan.nosdn.127.net/c96569a5dd5af8378ab022184027b14b.jpg", "http://yanxuan.nosdn.127.net/b04990070b97cea2fbeaa2855a8abc25.jpg", "http://yanxuan.nosdn.127.net/d701143c10f84c9b0d1373dbb4142038.jpg", "http://yanxuan.nosdn.127.net/f99da5c48749fe52473007fcb232aa34.jpg", "http://yanxuan.nosdn.127.net/f518bb3034d43138818be07031b5c7df.jpg", "http://yanxuan.nosdn.127.net/c44537a6dc1c37a0ad25ac8871a2d41c.jpg", "http://yanxuan.nosdn.127.net/ec547275277fae5797075af84eb66d50.jpg", "http://yanxuan.nosdn.127.net/bf37434d970bb3ff394495dfc523f875.jpg", "http://yanxuan.nosdn.127.net/5911835349760ad6e7452cb72d24265d.jpg", "http://yanxuan.nosdn.127.net/c0f93a466c9b40c76bf9401a29d8ea7c.jpg", "http://yanxuan.nosdn.127.net/ac5df2399b008cf7b49e87f4d47e26df.jpg", "http://yanxuan.nosdn.127.net/27a5f416535e1aed47fd7c5eeedd60fe.jpg", "http://yanxuan.nosdn.127.net/989b3c4e4e61a697cfbd0ce63f14535e.jpg"],
		"inventory": [351],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "430*520*870mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "无需组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 179,
		"date": "1500012593457",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1106003,
		"price": 3999,
		"topName": "原素系列实木桌椅组合（1桌+4椅）",
		"subName": "北欧简约风格，人体工学设计",
		"shortDescription": ["优选实木", "防霉防蛀", "榫卯工艺", "结实耐用", "一桌四椅", "满足需求"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e50fc1254e7cd1c0d15aac7aca538bef.png", "http://yanxuan.nosdn.127.net/167aaa521590ca15e569b67bb71eca02.png", "http://yanxuan.nosdn.127.net/47805c830acfb92fd8d918f41a0111b8.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/034d244ebbcdaaa20c058d67d70c6a07.png", "http://yanxuan.nosdn.127.net/f86bb2bf1bbdb12a7801ea232acde480.jpg", "http://yanxuan.nosdn.127.net/ff9266c174052fe251a5e31f67aaef8c.jpg", "http://yanxuan.nosdn.127.net/566ca95920e11a4f9a81e1d216b99c00.jpg", "http://yanxuan.nosdn.127.net/f56729d497af85c89552e7e0006c7ee5.jpg"],
		"types": ["1.4m餐桌+4椅", "1.6m餐桌+4椅"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/5756345c274eb288216b8f39be7ae354.jpg", "http://yanxuan.nosdn.127.net/228a2c5bd41cd4acbcbd08ef6f92357e.jpg", "http://yanxuan.nosdn.127.net/83a22da9820a5b057865c06b2f61142e.jpg", "http://yanxuan.nosdn.127.net/cde678c5a861091ffd51383972735468.jpg", "http://yanxuan.nosdn.127.net/d3041cd70d5b695b78cb95c45f0a6747.jpg", "http://yanxuan.nosdn.127.net/ae7c32bbb7f5569889aacd65fa0bbb60.jpg", "http://yanxuan.nosdn.127.net/a9def606e9f4259ab3e431b7a0267010.jpg", "http://yanxuan.nosdn.127.net/7c4aebab369f86ccdaa5e80c75d33f69.jpg", "http://yanxuan.nosdn.127.net/25bcbf0096103bf252697119e971fdf0.jpg", "http://yanxuan.nosdn.127.net/cc2c52452f7ae32e405ce71ed9d53752.jpg", "http://yanxuan.nosdn.127.net/0b6200b355e5f5dc847a0bf8a3fc186b.jpg", "http://yanxuan.nosdn.127.net/5649656817f1ebd367838e130344bd24.jpg", "http://yanxuan.nosdn.127.net/ab9d5678229be4d6eb5c24cf61f82271.jpg", "http://yanxuan.nosdn.127.net/c77904e26b065362e8e85b8ebed93a2b.jpg", "http://yanxuan.nosdn.127.net/d8c9cdc40c819c3494e6a91608a479ab.jpg", "http://yanxuan.nosdn.127.net/1924e4d14372b287b9529669787e242a.jpg", "http://yanxuan.nosdn.127.net/c79d06e076ee7b3bb20dae34b973e16f.jpg", "http://yanxuan.nosdn.127.net/adc3ed7a8ac3afcb7b987a229c1a4eff.jpg", "http://yanxuan.nosdn.127.net/c2db0c17936d1555e378edae8e7d7f1a.jpg", "http://yanxuan.nosdn.127.net/2745fdecd9a26504289876b417da2464.jpg", "http://yanxuan.nosdn.127.net/782a6cc3758e83c3795358663a29953e.jpg", "http://yanxuan.nosdn.127.net/5e523522e4f6ab4833f64e0692f4952c.jpg", "http://yanxuan.nosdn.127.net/91b6b6264866918e5aa51ce2644af16a.jpg", "http://yanxuan.nosdn.127.net/fdf472ca883f0b513f8d2f7ac8830054.jpg", "http://yanxuan.nosdn.127.net/d205f0de6ef3ebfefed703bc9261ef4d.jpg", "http://yanxuan.nosdn.127.net/7d5f573c9f61a7d13727735e1bb48716.jpg", "http://yanxuan.nosdn.127.net/440aee404385d483be39da6bee13cdb9.jpg", "http://yanxuan.nosdn.127.net/1e780f40d10a5ed63218f6b9f9a5e859.jpg", "http://yanxuan.nosdn.127.net/cafdfc59bd67d709e86be21ade310145.jpg", "http://yanxuan.nosdn.127.net/b6896dbf829c42369961e57b53d33e9b.jpg", "http://yanxuan.nosdn.127.net/36147acb4390a2517fe5acf457eb810a.jpg", "http://yanxuan.nosdn.127.net/b99e5f54ce10b467bfbad1f93d8c44bd.jpg", "http://yanxuan.nosdn.127.net/d8228f6d9da4b1645e1b30b53c2fe2cc.jpg", "http://yanxuan.nosdn.127.net/f09fbcadeac2632df1def54882887050.jpg", "http://yanxuan.nosdn.127.net/db0f3355146eea896e8c9b0404ae29d1.jpg", "http://yanxuan.nosdn.127.net/1cb8a2e40c0d10cbe6bb3cd0596f7995.jpg", "http://yanxuan.nosdn.127.net/ec28f4b445e510b3ccdab4534e2d7a08.jpg", "http://yanxuan.nosdn.127.net/3a4699bb7aa033894afe3f2c2a6344ee.jpg", "http://yanxuan.nosdn.127.net/121bb42b70db546d07d9dd8d513d4d16.jpg", "http://yanxuan.nosdn.127.net/2484040be6dba7e04c6dff5867abac9f.jpg", "http://yanxuan.nosdn.127.net/fff542debaa2174386d38169c1573d10.jpg", "http://yanxuan.nosdn.127.net/fd2c413c901d35a189d51387fc264cfb.jpg", "http://yanxuan.nosdn.127.net/f53adb2d1c2748ecffe7e813677da622.jpg", "http://yanxuan.nosdn.127.net/1ea6137ebd429bceb1414c3139abefad.jpg", "http://yanxuan.nosdn.127.net/7352daf3673bc90d2bf6e36d647d9bf6.jpg", "http://yanxuan.nosdn.127.net/8b86fb318dba015c85763cdaf463ca4c.jpg", "http://yanxuan.nosdn.127.net/0b590339790cff4902113f12ed766a7c.jpg", "http://yanxuan.nosdn.127.net/fcc8c85662e7efa5d69251f229bc3f72.jpg", "http://yanxuan.nosdn.127.net/ee896403d4e8dc9ea3ee275bcf833d97.jpg", "http://yanxuan.nosdn.127.net/27f523af41781331aa713b06aa0b9793.jpg", "http://yanxuan.nosdn.127.net/b945f6a186dd6825c118107a0b096571.jpg", "http://yanxuan.nosdn.127.net/2f90b0e19ab67438f5663085bdcd406b.jpg", "http://yanxuan.nosdn.127.net/8ba52fca6c1cab3c3c9ca646145aa947.jpg", "http://yanxuan.nosdn.127.net/f9e497a88c2f9a5a5e96a8d6a2785431.jpg", "http://yanxuan.nosdn.127.net/3c5b19c38a646b90b8b3588554ff3e5e.jpg", "http://yanxuan.nosdn.127.net/6156d5831f8295effcecbb006c586232.jpg", "http://yanxuan.nosdn.127.net/0cdd4a8cf93d9fb1e6534ae19a3f7a1b.jpg", "http://yanxuan.nosdn.127.net/08692e01496774d4f9b785466d895cd1.jpg", "http://yanxuan.nosdn.127.net/eab530e28f1a3dd99b37bc54ec30e9ce.jpg", "http://yanxuan.nosdn.127.net/e77f146e7bf6b598462d024d20a18bb2.jpg", "http://yanxuan.nosdn.127.net/8e68f80507ab472525d28cd0ec3ded79.jpg", "http://yanxuan.nosdn.127.net/3faef49891fafa49a3b370dbf7e461db.jpg", "http://yanxuan.nosdn.127.net/fefb4ca7398018b770a42df6c9db0cbd.jpg", "http://yanxuan.nosdn.127.net/5d7cc0d3ce159a5cd9fbd4f488cc4a42.jpg", "http://yanxuan.nosdn.127.net/db9208053fa881f4ebe82d7b6a5e7b01.jpg", "http://yanxuan.nosdn.127.net/fe5f1d8839a688cfaab4a13e2c1f930d.jpg", "http://yanxuan.nosdn.127.net/d5d2aaf50fa1d25b6007bc69dee7a49e.jpg", "http://yanxuan.nosdn.127.net/5e3fb5f0cda48ba7817432a2c213200b.jpg", "http://yanxuan.nosdn.127.net/963aeb10f11291e4529af19b34ef5889.jpg", "http://yanxuan.nosdn.127.net/349f5dad2b4d6458528ccb5a12f4904b.jpg", "http://yanxuan.nosdn.127.net/68fa50a6a4d8a2c03146f2ca9344761e.jpg", "http://yanxuan.nosdn.127.net/f77ae8d2c2efbf56b10e94b700d99ffc.jpg", "http://yanxuan.nosdn.127.net/a9c3f650ac60d1a98b18a42961089cac.jpg", "http://yanxuan.nosdn.127.net/1a2bd3ed98d4f1c6e612db86e983ce38.jpg", "http://yanxuan.nosdn.127.net/c7528afc2cf5a615361b4c49823cde41.jpg", "http://yanxuan.nosdn.127.net/7d2b64882da5c5b66e1e8c069bc06d8d.jpg"],
		"inventory": [536, 246],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1.4m餐桌+4椅/1.6m餐桌+4椅"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 755,
		"date": "1500012596094",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1160001,
		"price": 1699,
		"topName": "原素系列实木餐桌 1.4米",
		"subName": "MUJI代工厂，素雅大气，结实不易蛀",
		"shortDescription": ["简单巧妙", "稳固链接", "圆角打磨", "安全放心", "忠于原木", "自然纹理"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b61992344ffb9fccbda99fba5447ca35.jpg", "http://yanxuan.nosdn.127.net/6bc0661e1467457197d99b93dc153dbd.jpg", "http://yanxuan.nosdn.127.net/a5bbe1c9b55266090cf18d8a78ca5a0c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/06b518de9fbb89dcd1a3c83d04fbc05f.png", "http://yanxuan.nosdn.127.net/0530bdac3ae91a52ef1246492e165279.jpg", "http://yanxuan.nosdn.127.net/34ec089f1f9e3fd48865850f78934ab3.jpg", "http://yanxuan.nosdn.127.net/ec58a3669edf70c99f71532f8d0124fe.jpg", "http://yanxuan.nosdn.127.net/ebf8c7dbcfc1bdfd65a93dcc98ed108b.jpg"],
		"types": ["原木色 1400*820*750mm", "胡桃木色 1400*820*750mm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/a9abd56a96749bd48fe4e1c83c094e08.jpg", "http://yanxuan.nosdn.127.net/bcf5fa8a11aca32cd18d687afbc97cd3.jpg", "http://yanxuan.nosdn.127.net/482aabc5d70c949bf2d4bb78bfbc72a1.jpg", "http://yanxuan.nosdn.127.net/b694e34264500d347f220de527ed121d.jpg", "http://yanxuan.nosdn.127.net/fa0492bf466c4b5c077f2b60057e600b.jpg", "http://yanxuan.nosdn.127.net/34bccf20f2deb69a26515c5304733f09.jpg", "http://yanxuan.nosdn.127.net/3f16f7479329185613985af12de59ee2.jpg", "http://yanxuan.nosdn.127.net/aa1e0f65df1f2986ed92de0db09d706b.jpg", "http://yanxuan.nosdn.127.net/3e1c14be308deac84d8b86e643a4b59f.jpg", "http://yanxuan.nosdn.127.net/f8fd3f499ffcb592acc01aac06fd9b7c.jpg", "http://yanxuan.nosdn.127.net/530b0285d6337d73135ae08048968642.jpg", "http://yanxuan.nosdn.127.net/7e10169ebafb8e599deb14b701ad9cb5.jpg", "http://yanxuan.nosdn.127.net/2ff20ad167c7c4a7172eb432386db36d.jpg", "http://yanxuan.nosdn.127.net/2a8640cf7a4d1c114caa3b86cf5b9a36.jpg", "http://yanxuan.nosdn.127.net/9ee9b1168edce30b51e8f95023b91bf2.jpg", "http://yanxuan.nosdn.127.net/4a4b7cfb2b9078372286f42f3802fceb.jpg", "http://yanxuan.nosdn.127.net/6c3ef1cc8a0461817592a05eaafe2f02.jpg", "http://yanxuan.nosdn.127.net/69c3673b30a496006aa554843475d113.jpg", "http://yanxuan.nosdn.127.net/e870ac116b92a227ec00864a867dbacf.jpg", "http://yanxuan.nosdn.127.net/6841a80b29b9eae0ffe5b05db8058dd9.jpg", "http://yanxuan.nosdn.127.net/eaa2e17356568c0c2207b3e558b34a6e.jpg", "http://yanxuan.nosdn.127.net/df97e7536828cf66d27e33b1782fb7a4.jpg", "http://yanxuan.nosdn.127.net/04cb2bcf8752f5bd48389d9d0f7ef470.jpg", "http://yanxuan.nosdn.127.net/22bd8b6d3746a50ba5b9a455ab1214cf.jpg", "http://yanxuan.nosdn.127.net/93f1adfa4997ff4583601ac22d368810.jpg", "http://yanxuan.nosdn.127.net/47e740f372cf587d72e65df8adab67cb.jpg", "http://yanxuan.nosdn.127.net/1c9aa8ae6707ae817ee892bb7a4b7ac7.jpg", "http://yanxuan.nosdn.127.net/8f04b552118a7f5fd84c8eef8a466f5c.jpg", "http://yanxuan.nosdn.127.net/97f9e780997ccec97e787ccb437f93d4.jpg", "http://yanxuan.nosdn.127.net/207aec9285a0a1ff9e9083c989b6cde3.jpg", "http://yanxuan.nosdn.127.net/1e7ee1201f6132c54cc45627495f39d9.jpg", "http://yanxuan.nosdn.127.net/aa1ad74daa4f30d7a6e741e11e1efdd9.jpg", "http://yanxuan.nosdn.127.net/a5ced90af5fba8da374630f193f9424d.jpg", "http://yanxuan.nosdn.127.net/168e63aaa984b1138e7337ed95075bc3.jpg", "http://yanxuan.nosdn.127.net/f4b45eb4cdc64773941af2dddbba9bc2.jpg", "http://yanxuan.nosdn.127.net/51e8481f4f3ce0b903ff519b3ccedaea.jpg", "http://yanxuan.nosdn.127.net/738621410e670ed5d82e02ec67281b95.jpg", "http://yanxuan.nosdn.127.net/10dfaa6fbb76256eb0a15d81f5ebc16c.jpg", "http://yanxuan.nosdn.127.net/d24ef31f0ef9b4ee15a856fe883233dd.jpg", "http://yanxuan.nosdn.127.net/5cf4ccdacb568a53a98f41dff8bf8f82.jpg", "http://yanxuan.nosdn.127.net/b609e6d630a35d3df86104bbcfa3891a.jpg", "http://yanxuan.nosdn.127.net/d63bb0ffc02cdd149afda61fb0514d65.jpg", "http://yanxuan.nosdn.127.net/000ed29a1f97f08bb864947bf390f19f.jpg", "http://yanxuan.nosdn.127.net/95e708779e138e9eeb7917cacc98e26b.jpg", "http://yanxuan.nosdn.127.net/faefa47ff68ebba6d342350548b32b84.jpg", "http://yanxuan.nosdn.127.net/a5176f385d093a3b747fbb3b4cb859d0.jpg", "http://yanxuan.nosdn.127.net/853b5e21570067021a83ef90cc68826d.jpg", "http://yanxuan.nosdn.127.net/922d05be2f5add919a3750c84cb1c764.jpg", "http://yanxuan.nosdn.127.net/c6130a9116757028e90e8ef396ad2e73.jpg", "http://yanxuan.nosdn.127.net/cd0e478c90c565a36a8586a2a196cd95.jpg", "http://yanxuan.nosdn.127.net/a936d149179882e5cc01ae685c98e4a6.jpg", "http://yanxuan.nosdn.127.net/c735aba8f0e578d66fa9a89d157b3e27.jpg", "http://yanxuan.nosdn.127.net/8e6d6f73f97ec5b8c9839f16666d0bee.jpg", "http://yanxuan.nosdn.127.net/98b89a8503ab458af3d7ecc4d38dddfc.jpg", "http://yanxuan.nosdn.127.net/55e35ee22fac15b58fc45fc37d2ac6b2.jpg", "http://yanxuan.nosdn.127.net/e5addf34b583acf6652b312a5b966518.jpg", "http://yanxuan.nosdn.127.net/35aaee9691e13b7c140a5cdab49470b5.jpg", "http://yanxuan.nosdn.127.net/a58453d23552250e37a4ca3010a49190.jpg", "http://yanxuan.nosdn.127.net/d344a7ff5775cafef4681e4e36289d9c.jpg", "http://yanxuan.nosdn.127.net/c4a214d11660df66325cee3045da39f2.jpg", "http://yanxuan.nosdn.127.net/9806cbc6cad11a848a35880b8ce06894.jpg"],
		"inventory": [321, 726],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1400/1600*820*750mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "MUJI制造商",
		"sale": 809,
		"date": "1500012598670",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097004,
		"price": 1859,
		"topName": "原素系列实木餐桌 1.6米",
		"subName": "素雅大气，结实不易蛀",
		"shortDescription": ["宽大桌面", "扎实质感", "圆腿设计", "稳固美观", "环保喷漆", "色泽自然"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/a12a9e16cf1818b71382b21c24118d39.jpg", "http://yanxuan.nosdn.127.net/e67df911fc9ba2aca5df24bc985e5695.jpg", "http://yanxuan.nosdn.127.net/c020bddc83376982eebfe5a6a87bd7bc.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/aec39645ff397711fd881dd7b7b1bf0d.png", "http://yanxuan.nosdn.127.net/dea90e7c308bb1bd9e926cfbe493f243.jpg", "http://yanxuan.nosdn.127.net/308fab883bb2a72adac0e724a3d9aabd.jpg", "http://yanxuan.nosdn.127.net/3d13ba389f3be260c930f582545b9d5d.jpg", "http://yanxuan.nosdn.127.net/524175ab6d501444ac03cb0c89963ca0.jpg"],
		"types": ["原木色 1600*820*750mm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/658b770e35b110231691d5e51c4c7595.jpg", "http://yanxuan.nosdn.127.net/08df73f0d9789c28a4532de5c4880830.jpg", "http://yanxuan.nosdn.127.net/3fe591bbffd7fa4cbfeee4b12b6c10b7.jpg", "http://yanxuan.nosdn.127.net/11cdcf62bee9d2bc487aedf5d80538c5.jpg", "http://yanxuan.nosdn.127.net/9d7bcc54f5d06449e2933525756e97db.jpg", "http://yanxuan.nosdn.127.net/78422657c93ab797ec078a86b5b56698.jpg", "http://yanxuan.nosdn.127.net/9b45df59054ea1da52431a0e8b0ab691.jpg", "http://yanxuan.nosdn.127.net/d00da8a4a0821cc598b42116973fd3db.jpg", "http://yanxuan.nosdn.127.net/8c8f3ab832b802d92f6dfc25593c8925.jpg", "http://yanxuan.nosdn.127.net/bb0bd3f923535aa2828b3ad305fc6cb1.jpg", "http://yanxuan.nosdn.127.net/ddeb4205c9e5d059df58f1406c3f7ad2.jpg", "http://yanxuan.nosdn.127.net/aac3375feb099fcb480c9dc2ffcf789b.jpg", "http://yanxuan.nosdn.127.net/468278b5745ff62a08ee63d4f9131490.jpg", "http://yanxuan.nosdn.127.net/7c849ca28e4902ddb98a4f8479dfca8b.jpg", "http://yanxuan.nosdn.127.net/badd1b62aa5d422544431650d1cff36c.jpg", "http://yanxuan.nosdn.127.net/265f10d102e3806f8fd935828cf342b5.jpg", "http://yanxuan.nosdn.127.net/7ba76bd287ea3cfb89730137d89a4ff4.jpg", "http://yanxuan.nosdn.127.net/caeb3a21256408faf7ad766b7101160d.jpg", "http://yanxuan.nosdn.127.net/a8463505cf076dba125143ecce89c933.jpg", "http://yanxuan.nosdn.127.net/d70ef83aad88b11326f0efee7e512e06.jpg", "http://yanxuan.nosdn.127.net/8e898d7fcc13332a39d7682443ce1353.jpg", "http://yanxuan.nosdn.127.net/3b193760bec88790cdec139f9a267bea.jpg", "http://yanxuan.nosdn.127.net/9d2a691a6e18f034c59d661f00b40649.jpg", "http://yanxuan.nosdn.127.net/0875612773a62c43a71b915bb9665b86.jpg", "http://yanxuan.nosdn.127.net/e7abc6334cd28a04c789b80a4ee4f0aa.jpg", "http://yanxuan.nosdn.127.net/04eb88b60b0db27d056e9e019f81088c.jpg", "http://yanxuan.nosdn.127.net/2f2ba737462a6e01fcb1f7ca853d1347.jpg", "http://yanxuan.nosdn.127.net/9112b08a4177f0855ae609efc45cb532.jpg", "http://yanxuan.nosdn.127.net/55602352784c2c7190618e6552a56f68.jpg", "http://yanxuan.nosdn.127.net/9dededceaf31e5335a09a6d14c75b560.jpg", "http://yanxuan.nosdn.127.net/31fa783cbf77dc6f0e1c202ce433dedc.jpg", "http://yanxuan.nosdn.127.net/d10017850c02c5a71477662451ab8289.jpg", "http://yanxuan.nosdn.127.net/affb50d7d721e7607755e5d2537b8dba.jpg", "http://yanxuan.nosdn.127.net/bcff268d75e35146e4c649e4e3a0e83b.jpg", "http://yanxuan.nosdn.127.net/66d0e297415631b5bfa1f1fa6e1a37fa.jpg", "http://yanxuan.nosdn.127.net/2333a21c1e25c5d3a485b208c81700c6.jpg", "http://yanxuan.nosdn.127.net/405b14169af97e94de7016e3daff5b0a.jpg", "http://yanxuan.nosdn.127.net/2036b2ac8263452bd922279bc2ac056a.jpg", "http://yanxuan.nosdn.127.net/647254f31253d3f8a9a9db343e5eee83.jpg", "http://yanxuan.nosdn.127.net/fa4fdd9dd2d636558eb6c2fdfb062382.jpg", "http://yanxuan.nosdn.127.net/b89750a64f6e5b5200246ebdac1c0921.jpg", "http://yanxuan.nosdn.127.net/b646ea475f0403eaea9ebac3e260767f.jpg", "http://yanxuan.nosdn.127.net/9585dbbd00982f9ec8f012d51daf238d.jpg", "http://yanxuan.nosdn.127.net/7da1f2f566c80db9d26d9ae39a5e42a6.jpg", "http://yanxuan.nosdn.127.net/221f979dbdc78beb0a1c086aa9cc0d33.jpg", "http://yanxuan.nosdn.127.net/43d5cfa8222d9b3409aca28145a123cc.jpg", "http://yanxuan.nosdn.127.net/76093c0ae1b2658356615b5783ef58d6.jpg", "http://yanxuan.nosdn.127.net/cc9df6c3e7313a4e344a976656ae10f3.jpg", "http://yanxuan.nosdn.127.net/e0cbf935a1cc693b7da85f6eec2e8d46.jpg", "http://yanxuan.nosdn.127.net/c5e62ad09462001919b7e6a33339ee8e.jpg", "http://yanxuan.nosdn.127.net/48aa6fc24bf86a9cac48b70ae8c7ff95.jpg", "http://yanxuan.nosdn.127.net/9feffc93b7ae6c61f4e0144d29540496.jpg", "http://yanxuan.nosdn.127.net/1e0668a4d04f04c3c63c3541956e21ed.jpg", "http://yanxuan.nosdn.127.net/b0be28393aaa1d2a1dc6b259251f1f5f.jpg", "http://yanxuan.nosdn.127.net/fde184bbb92f0289ab85412c5d11dc50.jpg", "http://yanxuan.nosdn.127.net/3bf354df63d999beebec540b0bea5154.jpg", "http://yanxuan.nosdn.127.net/55d7ad1835d164f483889a813a980170.jpg", "http://yanxuan.nosdn.127.net/7b7dc4d67800c2d24c79ca23b3b761c2.jpg", "http://yanxuan.nosdn.127.net/d32796a394494b5c609b559fa7ec341e.jpg", "http://yanxuan.nosdn.127.net/111298e3d117bc25d6ade162d38e50fe.jpg", "http://yanxuan.nosdn.127.net/1129785656ec9f74763dba716dfdaf71.jpg", "http://yanxuan.nosdn.127.net/4d1cbb575fe4efb853fb9a75ae4822fc.jpg", "http://yanxuan.nosdn.127.net/6026df4eda4174791643d3ae2b77bc61.jpg", "http://yanxuan.nosdn.127.net/01121efdcf5c4e88c15de729958db671.jpg", "http://yanxuan.nosdn.127.net/45157f28fb415eae9782fdc6ea5930de.jpg"],
		"inventory": [100],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1400/1600*820*750mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 680,
		"date": "1500012601244",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097011,
		"price": 3899,
		"topName": "黑凤梨 原素系列1.8米实木床",
		"subName": "优选实木，环保喷漆",
		"shortDescription": ["加厚用料", "坚实稳固", "独特设计", "私人定制", "精致床头", "倚靠舒适"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ab2f1611d2e84bbe6903898761f09112.jpg", "http://yanxuan.nosdn.127.net/574e690ea7bd22373a148abc53b02bdf.jpg", "http://yanxuan.nosdn.127.net/6d73d24fa22760305dbf70ccde9b405f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/fea36ef2514c904f4f45f1975f37f289.png", "http://yanxuan.nosdn.127.net/181897e9942cb5331442e5f6b9dee863.jpg", "http://yanxuan.nosdn.127.net/303deaccd2b467ab0ac796348da2f6c2.jpg", "http://yanxuan.nosdn.127.net/86bf916dd76e5a855fbc8aa49d4557b2.jpg", "http://yanxuan.nosdn.127.net/1a734852ebcca0a0a328f82b15be2cd8.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/719c1ca0a19561c486ea30d88bec4fd4.jpg", "http://yanxuan.nosdn.127.net/bbb13dc370d939dff281603ea86b5565.jpg", "http://yanxuan.nosdn.127.net/530bae8a588c731be461e759ef89f73a.jpg", "http://yanxuan.nosdn.127.net/d56c1c7d220166641cdd7ef90550781f.jpg", "http://yanxuan.nosdn.127.net/7dd2173b8e740dd6c89fdb2c83e7a5c0.jpg", "http://yanxuan.nosdn.127.net/2e759c6d944dc0447f28c9685180b05a.jpg", "http://yanxuan.nosdn.127.net/bf8c60dac5c4b283742008a60fb70174.jpg", "http://yanxuan.nosdn.127.net/91b56088adc775ff8e5367ab145c996b.jpg", "http://yanxuan.nosdn.127.net/ddfa349f112c0de3013e9ceb316ab97a.jpg", "http://yanxuan.nosdn.127.net/7341c0629dbb171496df3d6f4106d931.jpg", "http://yanxuan.nosdn.127.net/b88cb2f8b3402285c4bfafed2a2c7904.jpg", "http://yanxuan.nosdn.127.net/0202c53531d5f39edba0abd36f5a6a52.jpg", "http://yanxuan.nosdn.127.net/540d430cccd513e07893d83949858b2c.jpg", "http://yanxuan.nosdn.127.net/c87dff566d036829117bb099cb37f20d.jpg", "http://yanxuan.nosdn.127.net/3e5dbf4bfd740d48560ee9fed3354e7a.jpg", "http://yanxuan.nosdn.127.net/3fcb62ac984a86183279e303100d2b10.jpg", "http://yanxuan.nosdn.127.net/378cc6e6889f1a79e72590aef7999500.jpg", "http://yanxuan.nosdn.127.net/6344627b48bc13d5f478565fd700fd26.jpg", "http://yanxuan.nosdn.127.net/df377f87aa517e9ed38549e41556b852.jpg", "http://yanxuan.nosdn.127.net/a9e5ca7536e25ffb9e07fda0fbb26e93.jpg", "http://yanxuan.nosdn.127.net/ced46bfac86301bc6fd6f10e07c0951f.jpg", "http://yanxuan.nosdn.127.net/85621d697e576be09b6b6ed5c1ffd2d3.jpg", "http://yanxuan.nosdn.127.net/8ceeec02eea4bd40990ff051e911e811.jpg", "http://yanxuan.nosdn.127.net/804c697307f58567b69ceaafb74981cc.jpg", "http://yanxuan.nosdn.127.net/189a8f16cb2b7b136b940652e1705e6e.jpg", "http://yanxuan.nosdn.127.net/2eccef8b1d48b5ef2fe8b8c7383fbdfd.jpg", "http://yanxuan.nosdn.127.net/fc5b3bee7940f9915c28ed89b71b8c0d.jpg", "http://yanxuan.nosdn.127.net/30af2bc75c7c119f08ded2a9e85c291a.jpg", "http://yanxuan.nosdn.127.net/d2a0fdec30a634c51c722a4c830c9013.jpg", "http://yanxuan.nosdn.127.net/e4bc45df0c6c18c536e8e1d86964ce19.jpg", "http://yanxuan.nosdn.127.net/1e685ddd86472e2078416b64a0c39959.jpg", "http://yanxuan.nosdn.127.net/3c800bcad7888770a26f25f23ebd6e02.jpg", "http://yanxuan.nosdn.127.net/7bedd067a5100535f4e4689fb9352fef.jpg", "http://yanxuan.nosdn.127.net/d18eb179dffba1d1452d4a9022dde75d.jpg", "http://yanxuan.nosdn.127.net/fb6aa06ba059a7f95ce6ea13ec983d44.jpg", "http://yanxuan.nosdn.127.net/f3be9d2863e5ed1700b7c830c53b6914.jpg", "http://yanxuan.nosdn.127.net/523c2315d7c3021b542e3d21205a2403.jpg", "http://yanxuan.nosdn.127.net/31c94db8d90d91cf9a4f0ac0ec7699cb.jpg", "http://yanxuan.nosdn.127.net/41f69d204061d206158bc5b75444ab5a.jpg", "http://yanxuan.nosdn.127.net/165f6bebcd55c779f6e3d8a32d0b840d.jpg", "http://yanxuan.nosdn.127.net/5d85c03f8c0c7e956459798f7aacae37.jpg", "http://yanxuan.nosdn.127.net/fd549b191caed247795f7a902bd2fca1.jpg", "http://yanxuan.nosdn.127.net/65a5eef777654e1014ae486e4634cafd.jpg", "http://yanxuan.nosdn.127.net/39c29e9db40670f6aa8bb5de7436d031.jpg", "http://yanxuan.nosdn.127.net/0902304a7f00d097393310e6ac3fc2b5.jpg", "http://yanxuan.nosdn.127.net/66de5737efef3804cbc6a196295ae99c.jpg", "http://yanxuan.nosdn.127.net/db25de68a5feef2a38a7b4b6947ca891.jpg", "http://yanxuan.nosdn.127.net/972f64101cd098a38d6092d8205b4392.jpg", "http://yanxuan.nosdn.127.net/8804d3ef8966d6ad96a977228368f4f6.jpg", "http://yanxuan.nosdn.127.net/98a32ed6468541c3bf8416ad9273cb6d.jpg", "http://yanxuan.nosdn.127.net/fc7e7d9c1afc7112015fc2dca71861cf.jpg", "http://yanxuan.nosdn.127.net/bc766f7949651ac478e726cc61efad5d.jpg", "http://yanxuan.nosdn.127.net/49ee2a7b1dec5d562a3d6891fcfe8c59.jpg", "http://yanxuan.nosdn.127.net/04a890a0c2a0bfc77d1cfd1c3bd80fc2.jpg", "http://yanxuan.nosdn.127.net/490d296af14a16226ea6825d11b0ab6a.jpg", "http://yanxuan.nosdn.127.net/40aba36304ea1ee101f27bb5f420ab25.jpg", "http://yanxuan.nosdn.127.net/e5cefa16ec88211bdbaa1d0793ece2d9.jpg", "http://yanxuan.nosdn.127.net/f7dd8a05dc1e0f2606e14272a8ba52f5.jpg", "http://yanxuan.nosdn.127.net/75b01e6548ef9be364aae3e13c2253c3.jpg", "http://yanxuan.nosdn.127.net/e4f08bf1b3570f8cb803822d4a2beb71.jpg", "http://yanxuan.nosdn.127.net/cdf6f8aa5c427bf5b15b1d5d76f7a994.jpg", "http://yanxuan.nosdn.127.net/e558db615ec890d708519c4c4cbfefa3.jpg", "http://yanxuan.nosdn.127.net/a8d6058f6e4be282de32252b45b29100.jpg", "http://yanxuan.nosdn.127.net/0abd953a9c9ab35f6523c238803db925.jpg", "http://yanxuan.nosdn.127.net/a5afc1fbba8b20d28bc17c49b73c8223.jpg", "http://yanxuan.nosdn.127.net/4d0463048c5bc3f896a8eb68b5b24b40.jpg", "http://yanxuan.nosdn.127.net/8f78a15034b92235c34e1eaabb86bea8.jpg", "http://yanxuan.nosdn.127.net/6f5be5a283d0b5acbb9aa32c67651d17.jpg", "http://yanxuan.nosdn.127.net/0de52189bcefa5a3ff97bed8d81611bc.jpg", "http://yanxuan.nosdn.127.net/39e811af9f2013cbcf597e820917e7f6.jpg"],
		"inventory": [237],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "2065*2188*1088mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 26,
		"date": "1500012603803",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097012,
		"price": 999,
		"topName": "黑凤梨 原素系列实木床头柜",
		"subName": "优选实木环保喷漆",
		"shortDescription": ["一级白橡", "防蛀防霉", "圆角设计", "安全放心", "抽屉储物", "美观实用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/12e73a9c4849a6c7da80dcd880422c7f.jpg", "http://yanxuan.nosdn.127.net/b73125d54b3569dfc4e36f9502af0328.jpg", "http://yanxuan.nosdn.127.net/05bf73a9ad8b1902c51c32c91a69179c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a3558708af4c52ecda4702a73b4e982b.png", "http://yanxuan.nosdn.127.net/01b5b444615b342c554d22c58d044e35.jpg", "http://yanxuan.nosdn.127.net/90eb435f5c0e4f98977a4c1fea3bd537.jpg", "http://yanxuan.nosdn.127.net/8d9922c1f2a3cea91f0b5e808ca9245d.jpg", "http://yanxuan.nosdn.127.net/89ee10d06789cda29a697446c014ef70.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/ab7183bdc0b4466820e4a6d5520354fa.jpg", "http://yanxuan.nosdn.127.net/63650ebad95a209bfb795e2a56371d3b.jpg", "http://yanxuan.nosdn.127.net/3404d62a5a1c860aeec64a4d4c93a6e8.jpg", "http://yanxuan.nosdn.127.net/f9f096fc79d656d72cb849a5c8f0b87f.jpg", "http://yanxuan.nosdn.127.net/1cb2998167c5cb216a9dc52f8db1cf10.jpg", "http://yanxuan.nosdn.127.net/35d7156456554976443f79cb7994bc49.jpg", "http://yanxuan.nosdn.127.net/c9d24488c810067fb4bebd6bb42ae72e.jpg", "http://yanxuan.nosdn.127.net/3e4e73b656b9eeb46c89e287acc477e5.jpg", "http://yanxuan.nosdn.127.net/37e0bd59c0aeb9652dba9cc76bbe3958.jpg", "http://yanxuan.nosdn.127.net/33c499abf21c379fff3d4a787a794651.jpg", "http://yanxuan.nosdn.127.net/6db30320d85f3066b8a9485a7f9220b1.jpg", "http://yanxuan.nosdn.127.net/acc8885cc5f1531b7bc6ab39b8b70664.jpg", "http://yanxuan.nosdn.127.net/ea89c37b4c9d0a250ea5c8ce31fdb008.jpg", "http://yanxuan.nosdn.127.net/5a46e930bb6445182237f9326f2324fc.jpg", "http://yanxuan.nosdn.127.net/e0afd61dfc499baecdb20aaee333d35d.jpg", "http://yanxuan.nosdn.127.net/93b672bcea7ffa219518f10973116004.jpg", "http://yanxuan.nosdn.127.net/2ec9fed3aeecc054dbc24c3d72f8d758.jpg", "http://yanxuan.nosdn.127.net/25607b956b069ee8fba8f05c5ed08b51.jpg", "http://yanxuan.nosdn.127.net/fdf5915b92846caed7d93f0ccd7f38f3.jpg", "http://yanxuan.nosdn.127.net/52fcf205043621da0c8ae8e9d47b51a8.jpg", "http://yanxuan.nosdn.127.net/9fcab0b1617d85d3a4ab9b8e96245d90.jpg", "http://yanxuan.nosdn.127.net/231f353d2d5a41a6d755f49c22e9293b.jpg", "http://yanxuan.nosdn.127.net/736a15d50df03cd7874e792d679b2324.jpg", "http://yanxuan.nosdn.127.net/f83291928114459bb505802f66ad8895.jpg", "http://yanxuan.nosdn.127.net/936fc8ef00d8f8db3530bcdb8315a323.jpg", "http://yanxuan.nosdn.127.net/d5a6235d0400f074ea95d87048716b35.jpg", "http://yanxuan.nosdn.127.net/79843b36547076dd6ac9a6a9cdfb2999.jpg", "http://yanxuan.nosdn.127.net/7afb5feef9298c9621903842648190b4.jpg", "http://yanxuan.nosdn.127.net/c589e31f59f48c073e66184ce10f8e6a.jpg", "http://yanxuan.nosdn.127.net/45e1c5c3a920a119f6b8c77586c3aacb.jpg", "http://yanxuan.nosdn.127.net/39be83f959b10542c702f54f7125e8d6.jpg", "http://yanxuan.nosdn.127.net/57101dbb6da696861f16865c8b5b9c57.jpg", "http://yanxuan.nosdn.127.net/bfb9815a4d9693b97307434f635aaa10.jpg", "http://yanxuan.nosdn.127.net/3d753623fa7b627507c4ce0602573d92.jpg", "http://yanxuan.nosdn.127.net/495932c781b58c517067825190fbada9.jpg", "http://yanxuan.nosdn.127.net/7429243eda464645d7f2d297c2436752.jpg", "http://yanxuan.nosdn.127.net/2b1dcfa60cbd810a54709711bc54882e.jpg", "http://yanxuan.nosdn.127.net/a465c10ff433015241a1c92987db98d7.jpg", "http://yanxuan.nosdn.127.net/c8daa90df4ff277928f84fccb88eb315.jpg", "http://yanxuan.nosdn.127.net/15be805245da85c51e2427c05a283a59.jpg", "http://yanxuan.nosdn.127.net/8485d8b5f3ac235219efeb6c53c2d07a.jpg", "http://yanxuan.nosdn.127.net/1fd3509353474c1829329854e8cc374b.jpg", "http://yanxuan.nosdn.127.net/548aeb4b392e62aa33cba8905bb34f35.jpg", "http://yanxuan.nosdn.127.net/dc0f7fd9f7bea55d9380e462193bca56.jpg", "http://yanxuan.nosdn.127.net/991c048a9c48cd891ae87c9b7e1240f1.jpg", "http://yanxuan.nosdn.127.net/7841375b0ef5361f141baff221649032.jpg", "http://yanxuan.nosdn.127.net/562dc797275832af43f8ae19e5243910.jpg", "http://yanxuan.nosdn.127.net/0f5d39af06a1a57f6c38708778e3ae5a.jpg", "http://yanxuan.nosdn.127.net/7fe81477e8061698c1bb4529824cda35.jpg", "http://yanxuan.nosdn.127.net/505648cfd17ffdafe08f5688c9a0e952.jpg", "http://yanxuan.nosdn.127.net/0955d2364fef4b7f843ac248e230a92e.jpg", "http://yanxuan.nosdn.127.net/de50ac51027b5e6030b68ed61b6c1b83.jpg", "http://yanxuan.nosdn.127.net/75a8d752ca16b7152d8a32ea8b96dd2b.jpg", "http://yanxuan.nosdn.127.net/1f1836f34091f1da0675304dfa703a75.jpg", "http://yanxuan.nosdn.127.net/cfa86ba732cd3ab98144f4a274d71578.jpg", "http://yanxuan.nosdn.127.net/ed507625c8f758743aca03254bf6bf42.jpg", "http://yanxuan.nosdn.127.net/c74c71953d85c94a586e1f8519a1cbc3.jpg", "http://yanxuan.nosdn.127.net/ca836e337af707c2ccacb1fd4aa9dd93.jpg", "http://yanxuan.nosdn.127.net/0fa7d86ea7b25d0e29a88e0fcca2cbd4.jpg", "http://yanxuan.nosdn.127.net/2409580866ceefec8e4680e1d7cc8a7f.jpg", "http://yanxuan.nosdn.127.net/ce20e53c13f1cc074d1a93929954b45e.jpg", "http://yanxuan.nosdn.127.net/b9c9803e3728d214f81921399ad99f34.jpg", "http://yanxuan.nosdn.127.net/82ce2cb7489a5ee84c5ed2a69ea2d505.jpg", "http://yanxuan.nosdn.127.net/f0eaded56a8586b50b504c26baa11686.jpg", "http://yanxuan.nosdn.127.net/366aff781c780719bb7a66b1fb6bce14.jpg", "http://yanxuan.nosdn.127.net/48698df1701838e5ce59df8683cd7033.jpg", "http://yanxuan.nosdn.127.net/19c7d281f09b2c1af429ff08bdb97f6d.jpg", "http://yanxuan.nosdn.127.net/fdd8a6c66d2d527fb51a95daaf3aec22.jpg", "http://yanxuan.nosdn.127.net/2332cc90da094f6ff3d138011442c6c0.jpg", "http://yanxuan.nosdn.127.net/b61d2dbd1fe4dd32f93773f98d205d57.jpg", "http://yanxuan.nosdn.127.net/c74b9603eaa5ec4a7db5730c1b2c8d5f.jpg", "http://yanxuan.nosdn.127.net/23b49a444eb3183ca3f84b88a5d16636.jpg"],
		"inventory": [611],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "480*400*500mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 237,
		"date": "1500012606448",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097013,
		"price": 2699,
		"topName": "黑凤梨 原素系列实木五斗柜",
		"subName": "造型经典，收纳的得力助手",
		"shortDescription": ["五抽设计", "款式经典", "优选实木", "价值体现", "独立空间", "随意分类"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b4f915a8ef4baebff99b8e9af465ad3f.jpg", "http://yanxuan.nosdn.127.net/5aa69523634a1b620162d0b5a9b2e793.jpg", "http://yanxuan.nosdn.127.net/a9cd560a176a24d6796f04bed559a8f9.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/7413f7841a8fd8a8e93948dccb0df5f7.png", "http://yanxuan.nosdn.127.net/397dfb128336c9054753179a04bcfb9d.jpg", "http://yanxuan.nosdn.127.net/a668ea514089b6825743444132e7c0ab.jpg", "http://yanxuan.nosdn.127.net/cdcce8f4a28fdb66f131f960055fffa4.jpg", "http://yanxuan.nosdn.127.net/cf35bdb41354da6243f08d0e886eb796.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/9ac05367e85b3e808b514dffe5c864f7.jpg", "http://yanxuan.nosdn.127.net/36b5ce6e746790ecb2210409e23e6f59.jpg", "http://yanxuan.nosdn.127.net/fc59f081dcc4dc5f1d5a66355b2772af.jpg", "http://yanxuan.nosdn.127.net/cc8c805336903137db71af9510f4743a.jpg", "http://yanxuan.nosdn.127.net/6fe86e1a92f30338c23cdbe38268e532.jpg", "http://yanxuan.nosdn.127.net/2f51f96c326cc9fd21295dee9f6c93fb.jpg", "http://yanxuan.nosdn.127.net/c8c22586ca4fa33ab6ffabea815da00e.jpg", "http://yanxuan.nosdn.127.net/1179766e3a8854c7d4fc917f145d5c95.jpg", "http://yanxuan.nosdn.127.net/8a4e5af5bd31bcebd7e7a491ddc82002.jpg", "http://yanxuan.nosdn.127.net/61f3796dc5730a85a7629203c25fb964.jpg", "http://yanxuan.nosdn.127.net/f1b32546689e61b10afb9a319b291bf2.jpg", "http://yanxuan.nosdn.127.net/d460fd2cb4273908cf71b64d77f998f4.jpg", "http://yanxuan.nosdn.127.net/21da6a0f6ef6e9253ec09f5ebbe1ec59.jpg", "http://yanxuan.nosdn.127.net/8ac1c198f2d4e302725f4c0e2dce1a61.jpg", "http://yanxuan.nosdn.127.net/69251c10730ac25bd2f8aa41e8a50198.jpg", "http://yanxuan.nosdn.127.net/b29da6da1d961980070c01724121842e.jpg", "http://yanxuan.nosdn.127.net/4ecbc021b29cbb4f2e33568b58e76c92.jpg", "http://yanxuan.nosdn.127.net/359e3e6f539ba67b09a5d4aa51de12cc.jpg", "http://yanxuan.nosdn.127.net/e2d3c6ba3b33f71a4012dbd65dc4be91.jpg", "http://yanxuan.nosdn.127.net/5f0d6fabc7643a29fbe85951183f6125.jpg", "http://yanxuan.nosdn.127.net/bd152321c73e5b644df0f0110e383c97.jpg", "http://yanxuan.nosdn.127.net/b26d3a4aeabff664b23d6d6dbd47c2aa.jpg", "http://yanxuan.nosdn.127.net/4490cb65f6704375132e557e424473b3.jpg", "http://yanxuan.nosdn.127.net/59d58225b1122fea0f9ed35c361104a3.jpg", "http://yanxuan.nosdn.127.net/592cf4673f7745cd2405a76833cfc828.jpg", "http://yanxuan.nosdn.127.net/16eb723a30ad42c17078c0973154cfd8.jpg", "http://yanxuan.nosdn.127.net/d5b5ac9cde55a1af8ef34e32aab8eeb9.jpg", "http://yanxuan.nosdn.127.net/32a85669cc906efe73c023aa3c7c434f.jpg", "http://yanxuan.nosdn.127.net/f85ba3b906283433482f6b87610682ac.jpg", "http://yanxuan.nosdn.127.net/9fb46f096162e1081b29af402cfa1cd5.jpg", "http://yanxuan.nosdn.127.net/40e82fcded7611309599fbbae30f1093.jpg", "http://yanxuan.nosdn.127.net/6d8a55890cce834852946301455c6bc7.jpg", "http://yanxuan.nosdn.127.net/39206aa20ddb816489e3ec40cafab66a.jpg", "http://yanxuan.nosdn.127.net/c452ad92ef6fb07402ccd11af9d18e42.jpg", "http://yanxuan.nosdn.127.net/e97795678f7f62c4723fd0d0b8ce3ad3.jpg", "http://yanxuan.nosdn.127.net/505054c3d6f81783991207b73cc53956.jpg", "http://yanxuan.nosdn.127.net/9604d215d2fe9355d84641ace1620b2a.jpg", "http://yanxuan.nosdn.127.net/30e7a7451431b5cf632597819eafd1e6.jpg", "http://yanxuan.nosdn.127.net/2195af10e9a2dda73be61c4ecc197514.jpg", "http://yanxuan.nosdn.127.net/9af1b48b67c525324e5390bfa649ed43.jpg", "http://yanxuan.nosdn.127.net/1e2c643cc0a393b7e43b4fc2bf109361.jpg", "http://yanxuan.nosdn.127.net/aa80cf3438c1c3e6bd1cd38c398d5b9f.jpg", "http://yanxuan.nosdn.127.net/0feb8f7b3b763a0e5831d7dd3406200b.jpg", "http://yanxuan.nosdn.127.net/1055a7199613df1fbd249a35c391c6cf.jpg", "http://yanxuan.nosdn.127.net/9eb5e07c7a80ba324559e50ce91fcbe1.jpg", "http://yanxuan.nosdn.127.net/b1298a8a8838fb3ae327b2430c43e0c4.jpg", "http://yanxuan.nosdn.127.net/c103238f5e5cee2a31f2e08ca88ebc50.jpg", "http://yanxuan.nosdn.127.net/6cf51817b04c01af80c32aeac9e691ef.jpg", "http://yanxuan.nosdn.127.net/59bded6d29bad368a5e5769cbbfb6008.jpg", "http://yanxuan.nosdn.127.net/90ac3cd4fe43ea2547962d4256f5f0d1.jpg", "http://yanxuan.nosdn.127.net/83a53cc0eb48d386498c06eb71ffefde.jpg", "http://yanxuan.nosdn.127.net/ba8f36d4d87c8e7a8916856b4e42f18e.jpg", "http://yanxuan.nosdn.127.net/1da3b9d08334eb67d5c3adefff1889d7.jpg", "http://yanxuan.nosdn.127.net/e8e9f8348e5e72b6df6468b29f15bf7e.jpg", "http://yanxuan.nosdn.127.net/5e046f566bf50e7b9a1b98a5c36cff65.jpg", "http://yanxuan.nosdn.127.net/5eeee78675bbb71127a8789315e63efd.jpg", "http://yanxuan.nosdn.127.net/ac696f65c7be356b238c97c877773905.jpg", "http://yanxuan.nosdn.127.net/10c6413963b3774b34056b4966271f9a.jpg", "http://yanxuan.nosdn.127.net/cd7029b513eb4360646678ad1e2a0856.jpg", "http://yanxuan.nosdn.127.net/8a76125d51a8ad30734226a4994acf0b.jpg", "http://yanxuan.nosdn.127.net/a2eafb481eef94f2d5db5120cd28062a.jpg", "http://yanxuan.nosdn.127.net/32166f22271eab14b13bb98ff4309be1.jpg", "http://yanxuan.nosdn.127.net/0ec9a33f850d32f1ca275b0a529dfa6f.jpg", "http://yanxuan.nosdn.127.net/c82c6dd240e674187ad5d84ec7ab0615.jpg", "http://yanxuan.nosdn.127.net/6323256c089ed5a4b01e67b661e56b19.jpg", "http://yanxuan.nosdn.127.net/42c31b2579939cbcc66ccc03e1fe11e5.jpg", "http://yanxuan.nosdn.127.net/03db23da559d7bfd3d16789cefa9dd33.jpg", "http://yanxuan.nosdn.127.net/e53a0213ce9e8b9645c2499d9ddbe4f4.jpg", "http://yanxuan.nosdn.127.net/4506cd18cc7b0a080cc8bfb6cdaf8233.jpg", "http://yanxuan.nosdn.127.net/99124fa7dae3b25f285a900cf3a7603e.jpg"],
		"inventory": [632],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "800*430*1100mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 480,
		"date": "1500012608982",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097014,
		"price": 4199,
		"topName": "黑凤梨 原素系列实木多抽柜",
		"subName": "造型简约，拥有极高实用性",
		"shortDescription": ["更多储物", "实用首选", "精选实木", "防蛀防霉", "榫卯工艺", "稳固耐用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/1b14c8ede3365d0cf678cbc44224b011.jpg", "http://yanxuan.nosdn.127.net/9b02c1969b8515cac1135924b8e1f955.jpg", "http://yanxuan.nosdn.127.net/b474f46741eceac344a2595e0d24e370.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2fee31241af07a70eb6251e6471658c4.png", "http://yanxuan.nosdn.127.net/756b9ad8168b6f05faed90f010cddc13.jpg", "http://yanxuan.nosdn.127.net/3b963f2d5ad9ccbf17753ccadd1d46b7.jpg", "http://yanxuan.nosdn.127.net/efd1ccfdd46a2f40f9e825a6d4348252.jpg", "http://yanxuan.nosdn.127.net/7fa5dc7c08d7a1b6da3f17029a93b93d.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/fddd54b9ffc478e0472125b185785868.jpg", "http://yanxuan.nosdn.127.net/5a5461023fc2f434b600385ce43d0705.jpg", "http://yanxuan.nosdn.127.net/00253b79b47749b09549ebf0beebd15e.jpg", "http://yanxuan.nosdn.127.net/d4b425e3bc0e584004a466580ba9147a.jpg", "http://yanxuan.nosdn.127.net/5b6cbe8bef9e5e6bcc93012c7ebb6996.jpg", "http://yanxuan.nosdn.127.net/13fe01473a420a51227a3a59e9c8ebb6.jpg", "http://yanxuan.nosdn.127.net/5439f8197a9b37b1a82c2b6490fbd794.jpg", "http://yanxuan.nosdn.127.net/fdbb4f1ec6747aa7e8c55dd9a1a90927.jpg", "http://yanxuan.nosdn.127.net/b75d0c444aa6b184c6ecdca460af208d.jpg", "http://yanxuan.nosdn.127.net/4666e9b9bbe2c1d5b45b957f704cf1fa.jpg", "http://yanxuan.nosdn.127.net/97511c2f431beaff450eb5ea78610ccb.jpg", "http://yanxuan.nosdn.127.net/7708e3cfcf47f39e7203ccc09a30d84f.jpg", "http://yanxuan.nosdn.127.net/105f56d22c7361ef2137bd32458fbf31.jpg", "http://yanxuan.nosdn.127.net/5a790d1022f53f635f2d5a144fb86bb0.jpg", "http://yanxuan.nosdn.127.net/106ab2e977f400c707e0c911ecfa48be.jpg", "http://yanxuan.nosdn.127.net/efc8003a5b267cdfe8435debb3767295.jpg", "http://yanxuan.nosdn.127.net/0ef45db6f7833fd7465439c9cc44a196.jpg", "http://yanxuan.nosdn.127.net/ff29fb4d8c52c2c4e5c0729ee9d9494c.jpg", "http://yanxuan.nosdn.127.net/8f866e672b20a6c52b9e0f70396ee967.jpg", "http://yanxuan.nosdn.127.net/a4f45d3b0a1722984a9ad4e938afc28e.jpg", "http://yanxuan.nosdn.127.net/1fec0394cbd6884b2eb4992ebd5f6c3d.jpg", "http://yanxuan.nosdn.127.net/4c5c4f87e4ce1845077e9dc460b67777.jpg", "http://yanxuan.nosdn.127.net/734c23e648015cbbe5e6479ad1474614.jpg", "http://yanxuan.nosdn.127.net/796bca76638f6011293f05b904cabf69.jpg", "http://yanxuan.nosdn.127.net/00e63d95806493c964aecaa9b8d6810d.jpg", "http://yanxuan.nosdn.127.net/c8816578962478535e111d854ac838d3.jpg", "http://yanxuan.nosdn.127.net/f9859eaf424910b47e6493768da34c68.jpg", "http://yanxuan.nosdn.127.net/57d8ee87f111991599fe9f62e19f54c7.jpg", "http://yanxuan.nosdn.127.net/24a615d47520240b31a19bde6c1fc7c5.jpg", "http://yanxuan.nosdn.127.net/a1c86b6961a28c29590d4cd78c181f6b.jpg", "http://yanxuan.nosdn.127.net/65aef5510e178bd40320a4439c492431.jpg", "http://yanxuan.nosdn.127.net/5772682ca7927c93d6da30438521da57.jpg", "http://yanxuan.nosdn.127.net/07f5e16c683bf5b5a29dc44082eb8e97.jpg", "http://yanxuan.nosdn.127.net/340d27f6a8ec2669be937f451b2a4083.jpg", "http://yanxuan.nosdn.127.net/4de9ebcab4cf92e6fb0fec318da7bf54.jpg", "http://yanxuan.nosdn.127.net/b943711a17b6cd05b616b2a5c4d99c57.jpg", "http://yanxuan.nosdn.127.net/7dd7b9db3bf29672309d677ff75274d4.jpg", "http://yanxuan.nosdn.127.net/d0c4f08ab18730e101aef37588d7100b.jpg", "http://yanxuan.nosdn.127.net/128c18822530d086bb2686e995f88396.jpg", "http://yanxuan.nosdn.127.net/cd19be8ce078e4fc459d2addfceb42b0.jpg", "http://yanxuan.nosdn.127.net/52b7852af7bf733114d67aa576119201.jpg", "http://yanxuan.nosdn.127.net/8533d5d8dacc921d7bed3820f6927ad1.jpg", "http://yanxuan.nosdn.127.net/80415afea89f0bea110a4a3e48e435d0.jpg", "http://yanxuan.nosdn.127.net/b629946f29d4614103ae3aef37badaa0.jpg", "http://yanxuan.nosdn.127.net/6fed285655d282f044b468eaca50b438.jpg", "http://yanxuan.nosdn.127.net/36d5697dfcee614926821475886b88ab.jpg", "http://yanxuan.nosdn.127.net/99db4032967d40de8e0e582d0a349df5.jpg", "http://yanxuan.nosdn.127.net/eeda724183990c95eca020eef5e8caac.jpg", "http://yanxuan.nosdn.127.net/ef34656fdd0f6e01c0e53274fa81f752.jpg", "http://yanxuan.nosdn.127.net/08029aeac884d986f7c33974cab02681.jpg", "http://yanxuan.nosdn.127.net/f10531db9f67d36252c867e4a906f7ca.jpg", "http://yanxuan.nosdn.127.net/38543b65630b698e5b3972332079889b.jpg", "http://yanxuan.nosdn.127.net/159ecff37f86525c7ad367995d7f3553.jpg", "http://yanxuan.nosdn.127.net/148b6ea35f1973b0e38da70101778d1c.jpg", "http://yanxuan.nosdn.127.net/e4496fa7f341699bef13b4268c522128.jpg", "http://yanxuan.nosdn.127.net/5c614ac50c9b26c4df43a843b492a87a.jpg", "http://yanxuan.nosdn.127.net/3a98cd6aa553d25fc789a4aac34aaf3c.jpg", "http://yanxuan.nosdn.127.net/e28973f0eec111b1b2a2b465583ffe67.jpg", "http://yanxuan.nosdn.127.net/3380c85d2c181e2c2bfab4f7607b1751.jpg", "http://yanxuan.nosdn.127.net/6b98b8c80ac6ac0cc4d24dae48304df1.jpg", "http://yanxuan.nosdn.127.net/7a3debbd40363d606b15d2a5a14bc897.jpg", "http://yanxuan.nosdn.127.net/15468b7380a31aa287a3efb1f644a70d.jpg", "http://yanxuan.nosdn.127.net/aa6e0a03459ac5e430d774bf9c9b5e12.jpg", "http://yanxuan.nosdn.127.net/f20b9c9f05137f76cc5fb20a19d34df9.jpg", "http://yanxuan.nosdn.127.net/3d7ae0c901f1c253fb06aeaaf4d52bff.jpg", "http://yanxuan.nosdn.127.net/38173263b78af908a0ea98c933475078.jpg", "http://yanxuan.nosdn.127.net/0cba6b2a406d38fd3f7539e3cdcdbd9f.jpg", "http://yanxuan.nosdn.127.net/fb105b5c185eb0f241e9ab1525645918.jpg", "http://yanxuan.nosdn.127.net/d40c6d8e9a316c6ff0ef4745d0696107.jpg", "http://yanxuan.nosdn.127.net/09d0ea931b832fee38e9016e2b7e1eec.jpg"],
		"inventory": [697],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "860*400*1200mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 522,
		"date": "1500012611586",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097009,
		"price": 1599,
		"topName": "黑凤梨 原素系列实木书桌",
		"subName": "无胶龙凤口工艺，经久耐用",
		"shortDescription": ["抽屉设计", "方便储物", "桌腿美观", "稳固支撑", "一级橡木", "自然纹理"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f5318a6caae32766951b6ad5932401d5.jpg", "http://yanxuan.nosdn.127.net/d2b2289c1d19b886a353e5b6f6ddfe2d.jpg", "http://yanxuan.nosdn.127.net/e795e8163bf052f1b8ff034a5b0000b5.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/e7b68189ef2f77a28110c3fc7ca5a697.png", "http://yanxuan.nosdn.127.net/afde10721fa5d6004f98a1e3a4f91db8.jpg", "http://yanxuan.nosdn.127.net/f10669167b6ab602064045e0c4134afd.jpg", "http://yanxuan.nosdn.127.net/5e0ab33f6849c890fcce2c3e61fa3fc2.jpg", "http://yanxuan.nosdn.127.net/a514463e8908df89cb25719ad7eaa077.jpg"],
		"types": ["原木色1000*580*910mm", "原木色1200*580*910mm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/f71ce087cb4982ec3552d5904f59d5ea.jpg", "http://yanxuan.nosdn.127.net/ca2a3cdda89e0aee84850a6591db5201.jpg", "http://yanxuan.nosdn.127.net/d6f7760a0af34c750432e81c14cbf164.jpg", "http://yanxuan.nosdn.127.net/0af93c7dea6325e13967115ed92c51dd.jpg", "http://yanxuan.nosdn.127.net/9cd7b06e38f23340dab122718b38ae3d.jpg", "http://yanxuan.nosdn.127.net/c0b5592f99033ae594c49bbdf8eb2142.jpg", "http://yanxuan.nosdn.127.net/60e41f0cdff82b39e90aeae85b02c797.jpg", "http://yanxuan.nosdn.127.net/8079276bb6f917f4c12191570b917ce4.jpg", "http://yanxuan.nosdn.127.net/72f89e2d219cf3795d5d2dd446a98601.jpg", "http://yanxuan.nosdn.127.net/ec76d7a7b4d85aecaefb8671c766221d.jpg", "http://yanxuan.nosdn.127.net/1c29a338bc0d65db7c76bdfacfab5b9d.jpg", "http://yanxuan.nosdn.127.net/42ef4db0974063b5a62e65bfb9fdc558.jpg", "http://yanxuan.nosdn.127.net/3b862545e04419389e0fbde4e128ce6a.jpg", "http://yanxuan.nosdn.127.net/262d484fc75db1d9cd0a372a6a748c3e.jpg", "http://yanxuan.nosdn.127.net/54cb84f359fa21e2943ac71bfcebc33e.jpg", "http://yanxuan.nosdn.127.net/4d7ba771f36eeddf218545a24c4c3bf6.jpg", "http://yanxuan.nosdn.127.net/e3ecae602de162c415ba7ab43a91f22b.jpg", "http://yanxuan.nosdn.127.net/8264fbf4ce721b47e958d6579e06bea1.jpg", "http://yanxuan.nosdn.127.net/26dd1ed8e2c7764978a74773f6eb8a89.jpg", "http://yanxuan.nosdn.127.net/f1614744d97208eeff7aff0ccb2ed02a.jpg", "http://yanxuan.nosdn.127.net/15307f9ea9a7116a2b439080353f0e3a.jpg", "http://yanxuan.nosdn.127.net/f4feb56af5e22b8a8a987eb5ad0f838d.jpg", "http://yanxuan.nosdn.127.net/e58f73253ce3aedfd1222441252336d7.jpg", "http://yanxuan.nosdn.127.net/42569ef88bf971c19b7e5db2df0e4874.jpg", "http://yanxuan.nosdn.127.net/9de7b4d040b3f3f101b1c1ced875d461.jpg", "http://yanxuan.nosdn.127.net/5e672abe06d27e39a93adb929c7cca6b.jpg", "http://yanxuan.nosdn.127.net/47eeea3f52656fdb2385e5376428fcef.jpg", "http://yanxuan.nosdn.127.net/fb4967f10815255b6e1d714bfd80557d.jpg", "http://yanxuan.nosdn.127.net/c74853eef3ee584b83312a6077c37a12.jpg", "http://yanxuan.nosdn.127.net/e450de48d76a1e562ea5ad7c201d42b2.jpg", "http://yanxuan.nosdn.127.net/e98a13113df8dc69227651f919c6ee54.jpg", "http://yanxuan.nosdn.127.net/4501bd1ab165d8d5315d66d9f467370b.jpg", "http://yanxuan.nosdn.127.net/96a8d0e51ae5c81b370a1ef5b87546ed.jpg", "http://yanxuan.nosdn.127.net/fd0908f158e946c532d72b798f8aa90e.jpg", "http://yanxuan.nosdn.127.net/f8532a7bf5e76b604feb7eb8675ba59a.jpg", "http://yanxuan.nosdn.127.net/664327b04e0bf2bc0e97286ffd7dc5e4.jpg", "http://yanxuan.nosdn.127.net/67a18c092249a5b464daa2d992bfe996.jpg", "http://yanxuan.nosdn.127.net/b14e42fa2ad83a560a4339defff922b9.jpg", "http://yanxuan.nosdn.127.net/5a6168ab737c70c21bbf0078c987d8c1.jpg", "http://yanxuan.nosdn.127.net/2dd9d0bc0484da533ae2622d80fb59b5.jpg", "http://yanxuan.nosdn.127.net/c6b74614b5903a8b31d630400996dc5e.jpg", "http://yanxuan.nosdn.127.net/e6c3287f1ac104b0233e35657f20cdc1.jpg", "http://yanxuan.nosdn.127.net/a239827ad7f35bd1a232ab4cc38f1720.jpg", "http://yanxuan.nosdn.127.net/c0f5c85a8922671db679631a8d7a2fb2.jpg", "http://yanxuan.nosdn.127.net/61e2a4767070d9e053cd8be6d2503e90.jpg", "http://yanxuan.nosdn.127.net/2c84457909cc9de1a7dddfb9c53ea42c.jpg", "http://yanxuan.nosdn.127.net/116001fb7283475038a69e0fbbf2b661.jpg", "http://yanxuan.nosdn.127.net/07a1fa3b5e0e01b0c0423a32950c17ac.jpg", "http://yanxuan.nosdn.127.net/935c48e80e28a66dd99f425cc349adfc.jpg", "http://yanxuan.nosdn.127.net/44282147a0cd102f58ac6a8f6847ef6e.jpg", "http://yanxuan.nosdn.127.net/87782cc1427cc877d219f28c88b1fb0a.jpg", "http://yanxuan.nosdn.127.net/c5daacdb7a2c6bc651d0e4ed74f60cd4.jpg", "http://yanxuan.nosdn.127.net/60eb5805b5c0ecbf2f020a8692cf7afc.jpg", "http://yanxuan.nosdn.127.net/dc420fa2dc2a2697d6f4131e5345a9bc.jpg", "http://yanxuan.nosdn.127.net/e2440daeda16d1317af87b5b88df8b41.jpg", "http://yanxuan.nosdn.127.net/1330724cdc60ef7f3e071e1cf890c3ab.jpg", "http://yanxuan.nosdn.127.net/181ca297e8b6ebfb5ce1a18c68f50217.jpg", "http://yanxuan.nosdn.127.net/98540bbcd53bbf9ff2e32543c505d439.jpg", "http://yanxuan.nosdn.127.net/109b2978c8a5e0cd520c934dadb98bcc.jpg", "http://yanxuan.nosdn.127.net/eb8c981c6e2841c2ab5d937a190b664f.jpg", "http://yanxuan.nosdn.127.net/9cbd3ae4a178bd53bca453a1a283206c.jpg", "http://yanxuan.nosdn.127.net/cf294cd5858b4c896be9f7ef07dfaedb.jpg", "http://yanxuan.nosdn.127.net/6495da2211a32eb2aeec74ae259b550c.jpg", "http://yanxuan.nosdn.127.net/ab56efbfb3b663324daca682bffcbda9.jpg", "http://yanxuan.nosdn.127.net/d9de42ad9ac8830ed2c55aebd4004466.jpg", "http://yanxuan.nosdn.127.net/3b30f6b376b0edcbd892df8fc827d5be.jpg", "http://yanxuan.nosdn.127.net/35c276514e04c24d6fbeff8bfd5abe01.jpg", "http://yanxuan.nosdn.127.net/82a75c3918c189cd965b428175a255e7.jpg", "http://yanxuan.nosdn.127.net/47fc57b354f5db1996160bb84159f385.jpg", "http://yanxuan.nosdn.127.net/aef31b1ea53cdc3bced724ecdbb8a029.jpg", "http://yanxuan.nosdn.127.net/a2bcfeea02117a7ad081f2d9e22b9a61.jpg", "http://yanxuan.nosdn.127.net/e0ac9959696c7f19ef30d2712ef4e2cc.jpg", "http://yanxuan.nosdn.127.net/13895b2f0c5be986361131c156cef3f0.jpg"],
		"inventory": [124, 1],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1000/1200*580*910mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 837,
		"date": "1500012614217",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097017,
		"price": 2199,
		"topName": "黑凤梨 原素系列柜式实木茶几",
		"subName": "山形木纹，经典优雅",
		"shortDescription": ["一级白橡", "结实防蛀", "四抽体验", "功能强大", "环保喷漆", "色泽清透"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/8b68e29caa484894951c2f57c0fe9f24.jpg", "http://yanxuan.nosdn.127.net/9d02d52179d54b034efb8f0730200573.jpg", "http://yanxuan.nosdn.127.net/84344c00eb898ded728e5b3a1bd0d882.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a4c87e59930224828ff110b25e6b73ca.png", "http://yanxuan.nosdn.127.net/4973ea5a10f2c52ca2e2d416f1e7898d.jpg", "http://yanxuan.nosdn.127.net/56993e4764ce4cdb6469bd4d963929aa.jpg", "http://yanxuan.nosdn.127.net/22807c5a25e0d8d49fd46da143c1b23f.jpg", "http://yanxuan.nosdn.127.net/2b1b8ce51e1f41d073a5ef980ef5887c.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/c757bc7ab8b844c582b676d91ecb09cd.jpg", "http://yanxuan.nosdn.127.net/3d0531f847e8e84384192a72e4f83b55.jpg", "http://yanxuan.nosdn.127.net/8efec55888be7e114f7303be2fa838d3.jpg", "http://yanxuan.nosdn.127.net/2d7d46f0b486e5a9c0ad967d6aa1d62e.jpg", "http://yanxuan.nosdn.127.net/9b88e1f0ac9eb52151037f68b812d1ab.jpg", "http://yanxuan.nosdn.127.net/8846308af9fbc1e529c7572291f2934c.jpg", "http://yanxuan.nosdn.127.net/1db5d9fe2b96e7d88d4f5bc2b7894eee.jpg", "http://yanxuan.nosdn.127.net/99be782295ac7d07dce63f558c830c6b.jpg", "http://yanxuan.nosdn.127.net/4cb3132281175264a5235b7e43d50d82.jpg", "http://yanxuan.nosdn.127.net/5b25839d1da5d9a4696565d73be13e33.jpg", "http://yanxuan.nosdn.127.net/c180a7e724fc5e240dafede8fbb21df6.jpg", "http://yanxuan.nosdn.127.net/8ae34f06295d2c115c0d5a3df00c2ca0.jpg", "http://yanxuan.nosdn.127.net/8404b44ec8e338b3a59b860474e6e3b9.jpg", "http://yanxuan.nosdn.127.net/753a6e7265f0468fc1e60ea607d42e46.jpg", "http://yanxuan.nosdn.127.net/3440a4c127334145e88d0c89dea069e0.jpg", "http://yanxuan.nosdn.127.net/aa432fb33188399579843e1583366271.jpg", "http://yanxuan.nosdn.127.net/55bea36ac837aadd7d79f6ad0f73239a.jpg", "http://yanxuan.nosdn.127.net/827d86fbd72c03d60386fe450352b40a.jpg", "http://yanxuan.nosdn.127.net/4893c666e4c3c13d6b3481cea5f4fa4e.jpg", "http://yanxuan.nosdn.127.net/04108a493e287cc0746eb3e5ffad6b91.jpg", "http://yanxuan.nosdn.127.net/b99778b31af644b08ee658f1a2ce1d12.jpg", "http://yanxuan.nosdn.127.net/b80c7e8d3b2ddf19523bb1358691e5c2.jpg", "http://yanxuan.nosdn.127.net/57ec347f1a280fda38574b41605cf117.jpg", "http://yanxuan.nosdn.127.net/40782e6284792633a1102cdae930e9fc.jpg", "http://yanxuan.nosdn.127.net/678e79dfa82b49b5c0131f3aadf5ff3c.jpg", "http://yanxuan.nosdn.127.net/247bb2b96d009557c27d0b5dbf2e6970.jpg", "http://yanxuan.nosdn.127.net/f7866bcb89cbc89e3337d4c63af08ad1.jpg", "http://yanxuan.nosdn.127.net/93c460486d08ff982c5ac05cce3281b9.jpg", "http://yanxuan.nosdn.127.net/7607e66faa14d7cce4be1ac722855722.jpg", "http://yanxuan.nosdn.127.net/0e46007404ea092df9294866a44d657e.jpg", "http://yanxuan.nosdn.127.net/88ae40f5a44fe7decbfd7303daf97108.jpg", "http://yanxuan.nosdn.127.net/0f85991413ea8842c98ac2df8d92e565.jpg", "http://yanxuan.nosdn.127.net/08541a1cc6c30fc93ae92c71efea1de4.jpg", "http://yanxuan.nosdn.127.net/8a6fadff8c386a48953e8609b99a70e4.jpg", "http://yanxuan.nosdn.127.net/33f98f11d4473ef9d36263a97fa7d0f4.jpg", "http://yanxuan.nosdn.127.net/ba7f05ea6583fc50e400dfb977632904.jpg", "http://yanxuan.nosdn.127.net/ca027fc4c9327b422513e0d5ea6dda5d.jpg", "http://yanxuan.nosdn.127.net/55b5d717ffb3dc17ac7d93589b0dcca2.jpg", "http://yanxuan.nosdn.127.net/df997d5f1e70cc53d56ec6a6a202ef71.jpg", "http://yanxuan.nosdn.127.net/19d53b34ad28ba64542b9f71998c1e28.jpg", "http://yanxuan.nosdn.127.net/c93932d23409adfba1670cb42a640b40.jpg", "http://yanxuan.nosdn.127.net/349102669b08785f85904dbe50cb309f.jpg", "http://yanxuan.nosdn.127.net/2784e369c8dc2218a8ab0361e39c694f.jpg", "http://yanxuan.nosdn.127.net/4904155fd9b1949223be55e7d58bc198.jpg", "http://yanxuan.nosdn.127.net/9b93bf54b26144a3de81d5e1cb6d259d.jpg", "http://yanxuan.nosdn.127.net/9c6e57fcf4223d7e8a7cbadd5b499f6e.jpg", "http://yanxuan.nosdn.127.net/dd8db265aada7f8741f4aaa83f1bbbb7.jpg", "http://yanxuan.nosdn.127.net/6e726d8534d56bf98245e395a4461527.jpg", "http://yanxuan.nosdn.127.net/4763eaa02103484d929adece3e8254d9.jpg", "http://yanxuan.nosdn.127.net/d23b18141a3298ec86c2ec2b259fd635.jpg", "http://yanxuan.nosdn.127.net/6054c4f22e2ddbdf47be421429f63d0c.jpg", "http://yanxuan.nosdn.127.net/2228a952ad53e6f252d8e4fd69e65b9c.jpg", "http://yanxuan.nosdn.127.net/ebd7cc910a369abcf4807c7719cc304e.jpg", "http://yanxuan.nosdn.127.net/723c782331852537fe8e9c1b792233cd.jpg", "http://yanxuan.nosdn.127.net/4356a84f4b83cd72068aa8c7be2719e2.jpg", "http://yanxuan.nosdn.127.net/2d92738f1e19e5dd612c976760c05623.jpg", "http://yanxuan.nosdn.127.net/8c52df822760166fc147dc38eb162776.jpg", "http://yanxuan.nosdn.127.net/7d698ffb9776d79a5d1477e530bdf9a9.jpg", "http://yanxuan.nosdn.127.net/391097d263f4776bedd4fd737b7caaf5.jpg", "http://yanxuan.nosdn.127.net/a51c08f58274f9f466016b956aa3d3c4.jpg", "http://yanxuan.nosdn.127.net/1515d1345b7b9389c91d3785154b78aa.jpg", "http://yanxuan.nosdn.127.net/e8f7ef613d591f76309cc42981e0489f.jpg", "http://yanxuan.nosdn.127.net/a2dbf2d134ed3605e6609bf77b524dc0.jpg", "http://yanxuan.nosdn.127.net/eb87e36da070db5ae1024d8dc6ee1584.jpg", "http://yanxuan.nosdn.127.net/e623fe5f3c0da8f6f2d6f0d984eabfb9.jpg", "http://yanxuan.nosdn.127.net/40bfaf4efcbab8a34ad5880d8b78fbdf.jpg", "http://yanxuan.nosdn.127.net/e4ef4bef3fb435001b668d67a7fe1ec1.jpg", "http://yanxuan.nosdn.127.net/805f5b712b6cc97b83767473b2c0e4f1.jpg"],
		"inventory": [802],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1200*600*450mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 6,
		"date": "1500012616737",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1097016,
		"price": 2799,
		"topName": "黑凤梨 原素系列1.8米实木电视柜",
		"subName": "经典木纹，结实不易蛀",
		"shortDescription": ["实木选材", "安全安心", "抽屉柜门", "实用便捷", "圆角打磨", "防磕防碰"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/6f8bc032fd01ade2781a01e27422ec3b.jpg", "http://yanxuan.nosdn.127.net/23759a19364310a0f9c80ec88ab244ef.jpg", "http://yanxuan.nosdn.127.net/caf36d919e18a665805e4e0b26f05c47.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3519d839cfe423ff0fa8be2505cd4d92.png", "http://yanxuan.nosdn.127.net/3f8eaea08de42601c4fbbbf44f57a51f.jpg", "http://yanxuan.nosdn.127.net/ba098f23eb7e21ecf524b7f8833d117f.jpg", "http://yanxuan.nosdn.127.net/c569bc70282462cae8cf948612429b33.jpg", "http://yanxuan.nosdn.127.net/a5a3e4c0825751977900838aba75df90.jpg"],
		"types": ["原木色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/407968144ff761cc527a9caa0264d430.jpg", "http://yanxuan.nosdn.127.net/c35a9815d3ae26494f84f2c8eb109468.jpg", "http://yanxuan.nosdn.127.net/9d20240d379ee62c0764ce5cbe008511.jpg", "http://yanxuan.nosdn.127.net/681a5705b98cc73557f69c73fc2c5cb7.jpg", "http://yanxuan.nosdn.127.net/bc227803292c940cfd6447fce0e9166c.jpg", "http://yanxuan.nosdn.127.net/fdb65b306be161fc384b70f5db9fb49f.jpg", "http://yanxuan.nosdn.127.net/3c102355bc51e0f0a5c1e2057d0540fd.jpg", "http://yanxuan.nosdn.127.net/596d09870606e412f8216b34dab225b2.jpg", "http://yanxuan.nosdn.127.net/828098cf08971cb3b1812622deabafa6.jpg", "http://yanxuan.nosdn.127.net/0ee256f140bf8f5ddafdcfd636204c34.jpg", "http://yanxuan.nosdn.127.net/f217c16cfa38127b7b1abff9717b9fa2.jpg", "http://yanxuan.nosdn.127.net/c85aa64b4307d841c8d7d6c19dcb51b5.jpg", "http://yanxuan.nosdn.127.net/e91c146e12f64ec5e7acc577adb50207.jpg", "http://yanxuan.nosdn.127.net/d4416ba7c91108f4bc94dc10d6512404.jpg", "http://yanxuan.nosdn.127.net/ff6ee5f01fcc3487d384679809a10ac5.jpg", "http://yanxuan.nosdn.127.net/27b313120d34825ca2e873c71fed7d91.jpg", "http://yanxuan.nosdn.127.net/6a987a53020f1de6367b349a1c15603b.jpg", "http://yanxuan.nosdn.127.net/9552296e20fa395c542ebd7302cf654b.jpg", "http://yanxuan.nosdn.127.net/a0d5adc87442828e3d732cd2144657c3.jpg", "http://yanxuan.nosdn.127.net/f8557bbc18ae841b5aba094e53f6ed84.jpg", "http://yanxuan.nosdn.127.net/268b4ea01d4cd3eaeb84a54e3ab9abdb.jpg", "http://yanxuan.nosdn.127.net/e3327d7c5273b15fcdcc1e402ff67b4e.jpg", "http://yanxuan.nosdn.127.net/62472b1ee80fa9035bd0ff7cb32eb140.jpg", "http://yanxuan.nosdn.127.net/dd282fa84597c7f7a1495745ef961663.jpg", "http://yanxuan.nosdn.127.net/83407ed0dcb85670c73c53c6b738644b.jpg", "http://yanxuan.nosdn.127.net/00291311af175e9d85d859d385508c76.jpg", "http://yanxuan.nosdn.127.net/a82d94d978b6bed83a7a46c93b0af9c2.jpg", "http://yanxuan.nosdn.127.net/8450f415a8bf3c207025d6348e383994.jpg", "http://yanxuan.nosdn.127.net/c86af434a3189b307ec21548aa20e1bb.jpg", "http://yanxuan.nosdn.127.net/a808e485c8389209afd235af4aa246ba.jpg", "http://yanxuan.nosdn.127.net/b9a1447eccfce220caa985c782211376.jpg", "http://yanxuan.nosdn.127.net/84a9f94b3bfab923bc92d670c0b10cd9.jpg", "http://yanxuan.nosdn.127.net/b51784407ff3f4011a99c0bd31dd0bcb.jpg", "http://yanxuan.nosdn.127.net/9cb2fe5b5f9fde7d22db061355888d3b.jpg", "http://yanxuan.nosdn.127.net/d643bb2f013f66100dbb42f18b913fa7.jpg", "http://yanxuan.nosdn.127.net/316ce2c4946d76ab2ee43530845e59bc.jpg", "http://yanxuan.nosdn.127.net/f5b9ecb507fad8e7741c4f0bf20e779d.jpg", "http://yanxuan.nosdn.127.net/a718fb6494cb396750da3717b32ec5da.jpg", "http://yanxuan.nosdn.127.net/aaaee26c4ecd384166084708457c1e31.jpg", "http://yanxuan.nosdn.127.net/9c22ca8042ffd2a944a71f6a37b53528.jpg", "http://yanxuan.nosdn.127.net/1a6041ce2e157c95c026099c164cb929.jpg", "http://yanxuan.nosdn.127.net/838e7b48e7367304d356e422ef5410b3.jpg", "http://yanxuan.nosdn.127.net/d1bccfcfe9119a0adec27b9b9a421c4f.jpg", "http://yanxuan.nosdn.127.net/52247e520890ed89b74251ea14a98902.jpg", "http://yanxuan.nosdn.127.net/5847f39145f4dcf3f74fa5e68547fd30.jpg", "http://yanxuan.nosdn.127.net/50056bb534748227129ef752d88b8768.jpg", "http://yanxuan.nosdn.127.net/ae04d856b38c866b07210f627e049ffb.jpg", "http://yanxuan.nosdn.127.net/7dda3d46f4aa5c72021411e9758e20a6.jpg", "http://yanxuan.nosdn.127.net/16d19ece04a4eae09f3d9595902e64b7.jpg", "http://yanxuan.nosdn.127.net/7fe173ea9eca6789198476b1d2afb12e.jpg", "http://yanxuan.nosdn.127.net/617f217e3e4e1e77342caf8cf8f3622a.jpg", "http://yanxuan.nosdn.127.net/a501423ce4f118ec3b368e6e58227271.jpg", "http://yanxuan.nosdn.127.net/892965420cf752100e9303885de9d7e3.jpg", "http://yanxuan.nosdn.127.net/2809e3b3b72afea194b7415df63086f2.jpg", "http://yanxuan.nosdn.127.net/6d50c00cf93c38cf9371ad6f48c8b018.jpg", "http://yanxuan.nosdn.127.net/d729196d52762a669e0fd624f8e1ba8c.jpg", "http://yanxuan.nosdn.127.net/397994693db44df1a5fb96c6b62f4f76.jpg", "http://yanxuan.nosdn.127.net/880f1402e3717f67d07cf2131d09cc0a.jpg", "http://yanxuan.nosdn.127.net/46fb9726f146ee402d108e1e4404fb60.jpg", "http://yanxuan.nosdn.127.net/cad1f470d46b8c5c8845ccd38da3e6f2.jpg", "http://yanxuan.nosdn.127.net/859ee60c65222fd361b626f012dbe054.jpg", "http://yanxuan.nosdn.127.net/b8ff45a54741dda87425165f822c3f66.jpg", "http://yanxuan.nosdn.127.net/79c4444de4a1c58434d64c13d3d48f63.jpg", "http://yanxuan.nosdn.127.net/a982f0934708fde7b41a78bf8879e946.jpg", "http://yanxuan.nosdn.127.net/f798dbd3a68203c8f5602c20dc8812bb.jpg", "http://yanxuan.nosdn.127.net/e002b498d25c71dfb1719d2c4de3caaa.jpg", "http://yanxuan.nosdn.127.net/d0f6d86a1c5a2c8b334a9e024de1174f.jpg", "http://yanxuan.nosdn.127.net/68227aa0023c94047c9312aaea147354.jpg"],
		"inventory": [164],
		"information": [{
			"attrName": "涂漆",
			"attrValue": "环保涂漆"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "1800*450*525mm"
		}, {
			"attrName": "安装方式",
			"attrValue": "需要组装"
		}],
		"label": "",
		"manufacture": "",
		"sale": 873,
		"date": "1500012619304",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154007,
		"price": 2699,
		"topName": "黑凤梨 间格系列 1.8米电视柜",
		"subName": "创新喷粉工艺 零空气污染物",
		"shortDescription": ["创新喷粉", "健康环保", "实木底座", "稳固承重", "进口五金", "缓冲关合"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4242e1792241c53504dac2ac64e8bb37.jpg", "http://yanxuan.nosdn.127.net/ebc3b86d5b3588972ef40d5556430373.jpg", "http://yanxuan.nosdn.127.net/9381561fc3e0e6fed87a764e3a508a9e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/7211987ba1b8eaa14195fae8fd441fa4.png", "http://yanxuan.nosdn.127.net/1fcfb5391cfb84436c220650f986636c.jpg", "http://yanxuan.nosdn.127.net/5c12973c41bbae3257282cdcda44fde2.jpg", "http://yanxuan.nosdn.127.net/954995da3df41d775d8042fcac042d1f.jpg", "http://yanxuan.nosdn.127.net/7b9a3fad1be9babf65c295456a532c57.jpg"],
		"types": ["1800*394*522"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/011eb9864a9e4584132edaa371c30272.jpg", "http://yanxuan.nosdn.127.net/a148799a0432b2fb35903705622394ab.jpg", "http://yanxuan.nosdn.127.net/960c472f41db2f578499e1627d596bc8.jpg", "http://yanxuan.nosdn.127.net/bc962042ed407edbf77011797c97606c.jpg", "http://yanxuan.nosdn.127.net/316c3e31abf7b37d1d5b917c8a2858b3.jpg", "http://yanxuan.nosdn.127.net/0919df2d24765619da718a631e2ca00b.jpg", "http://yanxuan.nosdn.127.net/65749ea93a2499adb82013af7fa74f8c.jpg", "http://yanxuan.nosdn.127.net/7448a856f5022ffe863f37760a21d84a.jpg", "http://yanxuan.nosdn.127.net/0cd2250b2d2d0a2228ec7765e5e30751.jpg", "http://yanxuan.nosdn.127.net/029e474756573c13610c7e1494f0f469.jpg", "http://yanxuan.nosdn.127.net/986e950137b0c772dd31c2c0410b3770.jpg", "http://yanxuan.nosdn.127.net/3710e44ab7edb015e495771f30abd8f8.jpg", "http://yanxuan.nosdn.127.net/7ca68914161ad6e809d4e86b7616dd06.jpg", "http://yanxuan.nosdn.127.net/4641e615e0df5192220e5aeba296c469.jpg", "http://yanxuan.nosdn.127.net/59d9e47c22d16633329f4b38a96b228a.jpg", "http://yanxuan.nosdn.127.net/71d5bb69c68bf673e56797cc6067ee08.jpg", "http://yanxuan.nosdn.127.net/d8a962dec6c3ce7a0c2e646cadad2b78.jpg", "http://yanxuan.nosdn.127.net/48527cfc53efcb9eebb06fcbd53d06df.jpg", "http://yanxuan.nosdn.127.net/d199991ed7aea97c9fadbb0f8ecb780c.jpg", "http://yanxuan.nosdn.127.net/b04fc0b4e0fd0b4de160d6b375d2a18b.jpg", "http://yanxuan.nosdn.127.net/042ebdd887f37bdb6b96800e5da9a662.jpg", "http://yanxuan.nosdn.127.net/e3e071753c1be5a2f61f09fbdf726d20.jpg", "http://yanxuan.nosdn.127.net/d572eeaf4f5f7f2960f38c3ba5ac8e2e.jpg", "http://yanxuan.nosdn.127.net/1f68ea568b9a6712fbb9e582cd944176.jpg", "http://yanxuan.nosdn.127.net/78e790c63db7b11b6871f7e2b3e0c7c1.jpg", "http://yanxuan.nosdn.127.net/44c5012fad252490d87ab219e12ca93a.jpg", "http://yanxuan.nosdn.127.net/5cec0bbab8ccdd219cf55e6a74bced73.jpg", "http://yanxuan.nosdn.127.net/2e6e089c9361c2332054d0ea4457b0ff.jpg", "http://yanxuan.nosdn.127.net/49eb05f3935640104d242088b1fc8664.jpg", "http://yanxuan.nosdn.127.net/2a56c153452ff3e741f522bfd78dcb30.jpg", "http://yanxuan.nosdn.127.net/468d0dec957a52c3da084a29631cf00a.jpg", "http://yanxuan.nosdn.127.net/7f801b34f2942333ab8b7de66f6760df.jpg", "http://yanxuan.nosdn.127.net/5636c833489b4f61a176f5df8cda17e9.jpg", "http://yanxuan.nosdn.127.net/51673589e6971f4b875e7a440c22254f.jpg", "http://yanxuan.nosdn.127.net/e361e8c328e43b67b801cd56a19a4688.jpg", "http://yanxuan.nosdn.127.net/1f7b70650acf2f9f5cdca68e59d653c7.jpg", "http://yanxuan.nosdn.127.net/00da445a2f01f5944ddcc356c5336146.jpg", "http://yanxuan.nosdn.127.net/a76f18c3276d6467c029aef4c4916c1e.jpg", "http://yanxuan.nosdn.127.net/f843ea7aa39174aae8ebaae46b00f898.jpg", "http://yanxuan.nosdn.127.net/80edac8fe3d2fa62e0828b443d7ebe55.jpg", "http://yanxuan.nosdn.127.net/8a8945c3c75ece3208b651c27c1de0f5.jpg", "http://yanxuan.nosdn.127.net/e97b3eb999100da29d0c0a6f6bd59633.jpg", "http://yanxuan.nosdn.127.net/5ef6d78aacba2156ef764a99d5b0fac6.jpg", "http://yanxuan.nosdn.127.net/fdf75a6088cd8783efacf6197b381864.jpg", "http://yanxuan.nosdn.127.net/fb468c17015ee44a3b06f20269cc254d.jpg", "http://yanxuan.nosdn.127.net/217d90bbb76f919db45b1d06cee5d5c2.jpg", "http://yanxuan.nosdn.127.net/23192e2e8fbe0dfdb7ff1d6226c3614e.jpg", "http://yanxuan.nosdn.127.net/295ac65f311fd2ae58f71fdda5062796.jpg", "http://yanxuan.nosdn.127.net/9223da758a4ca30acf16305aae5c7cf4.jpg", "http://yanxuan.nosdn.127.net/869365f9daec800be1a56dc4d0dd236f.jpg", "http://yanxuan.nosdn.127.net/860ae60c15fc755b2bd02b857c358c1d.jpg", "http://yanxuan.nosdn.127.net/38973bed1cf228f4599be8eba26f4fa4.jpg", "http://yanxuan.nosdn.127.net/60f475936c91871094cd14bed28ae663.jpg", "http://yanxuan.nosdn.127.net/9bb73184a6b5f7a59e3e101700091122.jpg", "http://yanxuan.nosdn.127.net/79702c9a12f1ce7c04dcc6cbe223c238.jpg", "http://yanxuan.nosdn.127.net/100f49af24cdce0b1d3a9ee6031e6114.jpg", "http://yanxuan.nosdn.127.net/bb62fae0003b2870597bd7d2ec5a4dca.jpg", "http://yanxuan.nosdn.127.net/532be3e4b2c57c1b9111490a01eb31fb.jpg", "http://yanxuan.nosdn.127.net/8a48051715e28de214173d0c6dca6f21.jpg", "http://yanxuan.nosdn.127.net/96dbd418c88e7f6cfaa88a74d1b0d56b.jpg", "http://yanxuan.nosdn.127.net/3bb9019fb404bfb5513c2c9d562c6a4f.jpg", "http://yanxuan.nosdn.127.net/0fbbe56266f18d73092fb196982297d6.jpg", "http://yanxuan.nosdn.127.net/fdb3cef12775eec6fe963662f1450b5c.jpg", "http://yanxuan.nosdn.127.net/8d4dd03868c1714a9ba1da3f68849a7d.jpg", "http://yanxuan.nosdn.127.net/0dfb438bd8240f31ba1b17777065c5b6.jpg", "http://yanxuan.nosdn.127.net/fc4574090c700dfeb1b67e07c583af9e.jpg", "http://yanxuan.nosdn.127.net/98443ab369cc746248d8d3b4b240c65a.jpg", "http://yanxuan.nosdn.127.net/44501ef267ff2844c79d0a8ff8f03813.jpg", "http://yanxuan.nosdn.127.net/6f85c64e241a8f119cb3a6ecde7f410d.jpg", "http://yanxuan.nosdn.127.net/e31ab30983f3376fe6d8f41326b7449a.jpg", "http://yanxuan.nosdn.127.net/c085aee8ed4d6a0fd502c3d8cbb7572e.jpg", "http://yanxuan.nosdn.127.net/07814b1bb949952875e16b7a8ce2be7e.jpg", "http://yanxuan.nosdn.127.net/4511ca242f299df08247501e7e9ba3d4.jpg", "http://yanxuan.nosdn.127.net/68a7202a74cf17a2db2044df5aa4e3c0.jpg"],
		"inventory": [83],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1800*394*522mm"
		}, {
			"attrName": "涂漆",
			"attrValue": "华润品牌漆"
		}, {
			"attrName": "喷粉",
			"attrValue": "白砂纹"
		}, {
			"attrName": "组装方式",
			"attrValue": "需组装（免费上门）"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1、周日暂无法发货，周日订单延至周一发货，请知悉；2、大家具属贵重商品，收到商品后请务必检查确认没有问题再签收，商品破损请直接拒收并反馈客服；3、退换货需保证商品、配件、包装等完好，不影响二次销售；4、请引导安装师傅查看安装视频及说明书，以确保安装质量；安装遇到任何问题请及时反馈客服，我们将第一时间为您解决问题；5、视频产品色差较大，请参考详情页产品图，以实物为准。"
		}],
		"label": "",
		"manufacture": "日本Francfranc制造商",
		"sale": 853,
		"date": "1500012621934",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154008,
		"price": 2399,
		"topName": "黑凤梨 间格系列 茶几",
		"subName": "开闭储物 百搭实用",
		"shortDescription": ["创新喷粉", "健康环保", "精选油漆", "权威检测", "进口五金", "缓冲关合"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/07313d906d9c6379558bbf55eefbad42.jpg", "http://yanxuan.nosdn.127.net/0e5017c4c3ece4922775271efcec7774.jpg", "http://yanxuan.nosdn.127.net/ba13283273e60f34bf5d93e88426054f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a040c5402ef51bd63c7d17e297ae6e71.png", "http://yanxuan.nosdn.127.net/052233059872c1784a86c79f664ed43d.jpg", "http://yanxuan.nosdn.127.net/a213fe7d119905042febab4621747d95.jpg", "http://yanxuan.nosdn.127.net/e5454d68caaa5de81688be851cb055c0.jpg", "http://yanxuan.nosdn.127.net/180358d37573e248b5bbb618a663813f.jpg"],
		"types": ["1000*600*380mm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/dff096860f61ede5a6cf1c6dc96f1829.jpg", "http://yanxuan.nosdn.127.net/7d672d7cd4d74ebbdcd4bfd0ce76d4b6.jpg", "http://yanxuan.nosdn.127.net/0d0fdff7e3b3dd73d38a4b8fcbdc30bf.jpg", "http://yanxuan.nosdn.127.net/44d7f63c26be8cc70c534f0de92f7014.jpg", "http://yanxuan.nosdn.127.net/eb13609f49d15123316c233e78ec8d8b.jpg", "http://yanxuan.nosdn.127.net/d712781572f045332a47723321f32bba.jpg", "http://yanxuan.nosdn.127.net/ea78cc8a4df11b58b50163be4e47115f.jpg", "http://yanxuan.nosdn.127.net/355dc14070325cd7080b96d6b2d6c85e.jpg", "http://yanxuan.nosdn.127.net/8390904f6e4258dc6db8d9ecbe3baf2c.jpg", "http://yanxuan.nosdn.127.net/53c1733b1309efd996db74dbb2ac44a0.jpg", "http://yanxuan.nosdn.127.net/e0b2ff11377f9185baa0d616db0b8fc6.jpg", "http://yanxuan.nosdn.127.net/391a4e68adde14056db328688e155b20.jpg", "http://yanxuan.nosdn.127.net/86c485cd532558923c15fbb1011272fb.jpg", "http://yanxuan.nosdn.127.net/e250d642ca4136ae1c6121dd53f4b0ce.jpg", "http://yanxuan.nosdn.127.net/0e4214d4eb9c034447df1f84ab6bfed9.jpg", "http://yanxuan.nosdn.127.net/bb67a20283fc2242458a429cde7fa090.jpg", "http://yanxuan.nosdn.127.net/2ae83b5a6dbeb4c631438360d955f1eb.jpg", "http://yanxuan.nosdn.127.net/5f49a4f10e5365c9cfd3d3a85a4cb926.jpg", "http://yanxuan.nosdn.127.net/cbf96629932643fb2ccc85f4377e30e6.jpg", "http://yanxuan.nosdn.127.net/c25c3da49eb363dc230730d89526b287.jpg", "http://yanxuan.nosdn.127.net/8130eb75e1c880834e913cbb98179c09.jpg", "http://yanxuan.nosdn.127.net/d489caf3f5fbf80bf9b4060fd354ed1e.jpg", "http://yanxuan.nosdn.127.net/3d10f550eaffc94a88e9da307c83b1c4.jpg", "http://yanxuan.nosdn.127.net/6a281db197cd2b0a4f3d08b925b11f5c.jpg", "http://yanxuan.nosdn.127.net/d31db440c17b37cad2321043788c8217.jpg", "http://yanxuan.nosdn.127.net/1afa0851a7b5c63cb4d7f6b267f9e660.jpg", "http://yanxuan.nosdn.127.net/4abff9506f913d1d624365b40be24ba6.jpg", "http://yanxuan.nosdn.127.net/21b967c3069a03ce6aeabb755045e23a.jpg", "http://yanxuan.nosdn.127.net/c9eabfac840c79a2513c6713b7fb3de1.jpg", "http://yanxuan.nosdn.127.net/e9403d8a35ac1f3595577208251d4938.jpg", "http://yanxuan.nosdn.127.net/edf0caae61091f0131bf73943834a99b.jpg", "http://yanxuan.nosdn.127.net/14c2877fb9e920b76547335e259cd765.jpg", "http://yanxuan.nosdn.127.net/26a1728d5b8960714353dd4c12179142.jpg", "http://yanxuan.nosdn.127.net/ff51500ebfa1f9e91178fd56d6bace20.jpg", "http://yanxuan.nosdn.127.net/29ee7a41e71cc21343de6d34548f9ce5.jpg", "http://yanxuan.nosdn.127.net/2f76aa91be97212ba09f72e111144b99.jpg", "http://yanxuan.nosdn.127.net/7862a5a6d29a46e0cd7b2baaf1986605.jpg", "http://yanxuan.nosdn.127.net/c256676f8593bbd5a5e4910f3c8b8979.jpg", "http://yanxuan.nosdn.127.net/02309a573a2cb42ae9a2b03567e18055.jpg", "http://yanxuan.nosdn.127.net/50b375fd949fce5ca018709c5db49451.jpg", "http://yanxuan.nosdn.127.net/91e4cd45e0d40ca24f3c28a9a6b59ac1.jpg", "http://yanxuan.nosdn.127.net/5990253b8cddf658ca099ca6aeca5b1c.jpg", "http://yanxuan.nosdn.127.net/a85dc48fc05ca01ce2bc185d7eded553.jpg", "http://yanxuan.nosdn.127.net/ac0953dcee9132fd327857dadb403018.jpg", "http://yanxuan.nosdn.127.net/f93292238dfd9f09d22d631aaac2928d.jpg", "http://yanxuan.nosdn.127.net/ee6ed1c44fd6d5e7fb9dd6ea148d84fb.jpg", "http://yanxuan.nosdn.127.net/32569749cfc10ed2cb76065f45580a2d.jpg", "http://yanxuan.nosdn.127.net/4e643dc6f507b941cf65cb606804c30f.jpg", "http://yanxuan.nosdn.127.net/c01a028aebb6ec6cbde7ed0a56f75acd.jpg", "http://yanxuan.nosdn.127.net/978951d8c7cb0414723cac07fe1e382c.jpg", "http://yanxuan.nosdn.127.net/653acb7320619145eff8c5062abdcbea.jpg", "http://yanxuan.nosdn.127.net/9b87087c03b96578c321c9e1e3c02438.jpg", "http://yanxuan.nosdn.127.net/a986bd338e350c4d067705bc991ceba6.jpg", "http://yanxuan.nosdn.127.net/c83e2d9ee6ac07f647c6c36d9663c5b1.jpg", "http://yanxuan.nosdn.127.net/7da2d8fa6e814cca92bdcb70a45f67ec.jpg", "http://yanxuan.nosdn.127.net/4649c1833a3de377ef63a78c2c2baec5.jpg", "http://yanxuan.nosdn.127.net/da2ded3ed6ece42eb06d9bbe19d3a04e.jpg", "http://yanxuan.nosdn.127.net/9b46fa581c7402dd645c14d10c72d39d.jpg", "http://yanxuan.nosdn.127.net/fa1594744a214e639d480109fcf27b21.jpg", "http://yanxuan.nosdn.127.net/0ee3e68a1e63915e8e383f6fc5883da6.jpg", "http://yanxuan.nosdn.127.net/850bc89ed20917ae074bd8db9a504a78.jpg", "http://yanxuan.nosdn.127.net/91b3ca2865d7ed8c051f2e0bc1b1f9d0.jpg", "http://yanxuan.nosdn.127.net/bd507451ced8fec1bc8ca2a90d76156a.jpg", "http://yanxuan.nosdn.127.net/f09b11f928ebe75a3542aa3246b5672f.jpg", "http://yanxuan.nosdn.127.net/eb1ea8f6ea56f8fb2f4940c7d3e33be0.jpg", "http://yanxuan.nosdn.127.net/d1e1e16b931e7376f1fd6f367d22d90c.jpg", "http://yanxuan.nosdn.127.net/eef06898aff4ad083033e60f11efd865.jpg", "http://yanxuan.nosdn.127.net/8fc4a6319adff920d9190555404c7059.jpg", "http://yanxuan.nosdn.127.net/e0a20145004d7e192f903cb1ea77ab08.jpg", "http://yanxuan.nosdn.127.net/5824f1eb63c55f2888af1276781db4de.jpg", "http://yanxuan.nosdn.127.net/cacdbb4c0c8941be7fc62773b896acb7.jpg", "http://yanxuan.nosdn.127.net/5977565d6a9a96f17467cd51aeeabea2.jpg", "http://yanxuan.nosdn.127.net/c205d7a480d2db720df63d9e287b6c83.jpg", "http://yanxuan.nosdn.127.net/d7b76bd6a4714e283d83fa33ae3f9d88.jpg"],
		"inventory": [129],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "1000*600*380mm"
		}, {
			"attrName": "涂漆",
			"attrValue": "华润品牌漆"
		}, {
			"attrName": "喷粉",
			"attrValue": "白砂纹"
		}, {
			"attrName": "组装方式",
			"attrValue": "需组装（免费上门）"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1、周日暂无法发货，周日订单延至周一发货，请知悉；2、大家具属贵重商品，收到商品后请务必检查确认没有问题再签收，商品破损请直接拒收并反馈客服；3、退换货需保证商品、配件、包装等完好，不影响二次销售；4、请引导安装师傅查看安装视频及说明书，以确保安装质量；安装遇到任何问题请及时反馈客服，我们将第一时间为您解决问题；5、视频产品色差较大，请参考详情页产品图，以实物为准。"
		}],
		"label": "",
		"manufacture": "日本Francfranc制造商",
		"sale": 389,
		"date": "1500012624644",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154011,
		"price": 3299,
		"topName": "黑凤梨 间格系列 1.5米床",
		"subName": "扎实用料 环保舒适",
		"shortDescription": ["环保油漆", "权威检测", "安稳骨架", "均匀承重", "极简设计", "经典百搭"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/617c9e65a089aafef120d44100e2cbfb.jpg", "http://yanxuan.nosdn.127.net/54d970020bd1d1b65bdca12d2c9149bd.jpg", "http://yanxuan.nosdn.127.net/87e1116b7a24cbedffda2ec823a29091.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/3a15f882fbaa85579cb0d4189f67c1c5.png", "http://yanxuan.nosdn.127.net/e025272f2f889e680bee6c1f7954cf3a.jpg", "http://yanxuan.nosdn.127.net/51e59487f2efc927a2b6474cd28697e7.jpg", "http://yanxuan.nosdn.127.net/dfe82dedfc96bc07e7446609f1000252.jpg", "http://yanxuan.nosdn.127.net/531d47031ea5e3bdbf90663984394aed.jpg"],
		"types": ["1510*2010mm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/b4f5220540e550ad3a11d978eb5179b4.jpg", "http://yanxuan.nosdn.127.net/9ff7bbeb86113002e6e26ca941303105.jpg", "http://yanxuan.nosdn.127.net/42e368deed0d06b62ad0024d03334748.jpg", "http://yanxuan.nosdn.127.net/39b7f6f12b49f3096ca3a4055c1672c3.jpg", "http://yanxuan.nosdn.127.net/9db7964e7c92dd85f9c895eabbcd52f5.jpg", "http://yanxuan.nosdn.127.net/27b54214e14b11f9e047339fe935176c.jpg", "http://yanxuan.nosdn.127.net/3c313d5257166d5182fc4810dc7220af.jpg", "http://yanxuan.nosdn.127.net/d1305dc1b6c91a5fc7741805ce73792e.jpg", "http://yanxuan.nosdn.127.net/a4a4fa8b96cd1082698b928e256f0949.jpg", "http://yanxuan.nosdn.127.net/559ebe04663108e5c222044ca69423cf.jpg", "http://yanxuan.nosdn.127.net/595b41fcf33c7fe7565f503185ff0b8c.jpg", "http://yanxuan.nosdn.127.net/52740a3282274d78a395b0295fa648c9.jpg", "http://yanxuan.nosdn.127.net/4a6dd44aacb655a8dc86112c6974fa50.jpg", "http://yanxuan.nosdn.127.net/03641e51df4c993841d39e87cf2ba077.jpg", "http://yanxuan.nosdn.127.net/f38a99675c34efd45fca3cc796bc35ca.jpg", "http://yanxuan.nosdn.127.net/1054f67df21f6593eae479204282cf48.jpg", "http://yanxuan.nosdn.127.net/33763ce3f61b30ffd39561fea4941a22.jpg", "http://yanxuan.nosdn.127.net/4804e22b666a747e5bbbfdb000730940.jpg", "http://yanxuan.nosdn.127.net/67514dde8a4f2a2cae9fdc2ab40184ab.jpg", "http://yanxuan.nosdn.127.net/be57f0d0ae550d8937072e23ffa6efc0.jpg", "http://yanxuan.nosdn.127.net/25871323e0b5ed3f2e2e7e0e40baa61b.jpg", "http://yanxuan.nosdn.127.net/e630b68a4b5883f2b7e765313eb06aa7.jpg", "http://yanxuan.nosdn.127.net/027ffc0bebbcaab361bbe83b250b0e1a.jpg", "http://yanxuan.nosdn.127.net/7f7197c429c9951f58f37f2dcd2551fa.jpg", "http://yanxuan.nosdn.127.net/3e2320f4017e21f5be0d208d6ade466d.jpg", "http://yanxuan.nosdn.127.net/edcaf13c9f9ec127945d3c4bd4d72f68.jpg", "http://yanxuan.nosdn.127.net/abac0b33f760cf3d1e334d9ad3dc0a13.jpg", "http://yanxuan.nosdn.127.net/2d683a7fc1b0456c288a74b88b112508.jpg", "http://yanxuan.nosdn.127.net/b8d2992765412c665c186c9f567de2c5.jpg", "http://yanxuan.nosdn.127.net/c393f7025bf09517da39ecf342101c34.jpg", "http://yanxuan.nosdn.127.net/f87b6cf4bfc424253b97abbd650def30.jpg", "http://yanxuan.nosdn.127.net/e82a1b36df2aac91ccde5a70b30c2ab8.jpg", "http://yanxuan.nosdn.127.net/3fb86f29a8f756b05f0615b1092a71a6.jpg", "http://yanxuan.nosdn.127.net/17dca958ae8f076c5fa10ebf7b480e27.jpg", "http://yanxuan.nosdn.127.net/c36db3aff85715ea4434b9aad484e695.jpg", "http://yanxuan.nosdn.127.net/6618eac198ab5165f92730688aa5d1ab.jpg", "http://yanxuan.nosdn.127.net/9e8ef48eda480239426b9b470267f38e.jpg", "http://yanxuan.nosdn.127.net/cdd682e83ad3c93bfad0866c23847f8c.jpg", "http://yanxuan.nosdn.127.net/508bb7d48d09bc1502b7f0d27a9e66fb.jpg", "http://yanxuan.nosdn.127.net/33be56cdc6dfab0da1a57e8440211223.jpg", "http://yanxuan.nosdn.127.net/30089dbedb145f1ca737c8a747eae98e.jpg", "http://yanxuan.nosdn.127.net/0b38f6e2d531582cbfa3c016ef370de5.jpg", "http://yanxuan.nosdn.127.net/f9f456b12dab05eff872f427956306fc.jpg", "http://yanxuan.nosdn.127.net/af1ef364e03c3f45e239d6ef4b6ee912.jpg", "http://yanxuan.nosdn.127.net/1a114f42083ec1ddf0ce46c1d3312e6c.jpg", "http://yanxuan.nosdn.127.net/abc0e6be9ba92ef85f175218bf2a5a12.jpg", "http://yanxuan.nosdn.127.net/6eef550a7d9b29de633393914f5aa124.jpg", "http://yanxuan.nosdn.127.net/7d3c89f002c4defc602cbd8771270fea.jpg", "http://yanxuan.nosdn.127.net/37d637859878fe6bf676f7b6f110ea61.jpg", "http://yanxuan.nosdn.127.net/8364559c2e309a701a668900dc6f5a57.jpg", "http://yanxuan.nosdn.127.net/2eebf1fad577c23b809ae3b37b351ae2.jpg", "http://yanxuan.nosdn.127.net/08e417738bb7d3df53b4b75ac73f4285.jpg", "http://yanxuan.nosdn.127.net/6d84a5953da7f2904e305ecd14e6427e.jpg", "http://yanxuan.nosdn.127.net/31c05d1e9128f208020f0e56b88e2ca3.jpg", "http://yanxuan.nosdn.127.net/28aaa2ddab48694cd2fc69b332f4dd2d.jpg", "http://yanxuan.nosdn.127.net/8281c34bcb64da34368fec1c9321c944.jpg", "http://yanxuan.nosdn.127.net/8d3fdc521c49fbaab520dd651c5dde26.jpg", "http://yanxuan.nosdn.127.net/64d8bda3addc7788eea936b59ee8dd17.jpg", "http://yanxuan.nosdn.127.net/174fbb412d6a1d6b6afae76c064caa35.jpg", "http://yanxuan.nosdn.127.net/ac46d7f0d1ef0bff4b3409e4596ebd9f.jpg", "http://yanxuan.nosdn.127.net/46d259167aa19a0c20af964a0ce2fff9.jpg", "http://yanxuan.nosdn.127.net/a28fd001c833a3c68969dc3470332cad.jpg", "http://yanxuan.nosdn.127.net/adcaf59ecea6ca32c058013f9a8f6c1c.jpg", "http://yanxuan.nosdn.127.net/ab646fb2bb9d6b2ef615ddef625e97dd.jpg", "http://yanxuan.nosdn.127.net/df6d3f0027694896d5041a336fb80d09.jpg", "http://yanxuan.nosdn.127.net/216c8177a124c2ae1b9a3a5bf00a7b39.jpg", "http://yanxuan.nosdn.127.net/6ba79ac0914a9fe351de3d7e93f430e7.jpg", "http://yanxuan.nosdn.127.net/5142a7ebb6d60b12172497e75dbc1e0f.jpg", "http://yanxuan.nosdn.127.net/67f36526058b095e7fd23f3364513418.jpg", "http://yanxuan.nosdn.127.net/9189eace0963c45c735171c7a5b85cfa.jpg", "http://yanxuan.nosdn.127.net/ee7dcb6416f44341eb156b0786cb905d.jpg", "http://yanxuan.nosdn.127.net/bacacedb8b955462056df7191ab1750e.jpg", "http://yanxuan.nosdn.127.net/6aa219c81ad0e7c04dc178cd60a29bd9.jpg"],
		"inventory": [356],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "内径：1510*2010mm外径：1630*2130*800mm"
		}, {
			"attrName": "涂漆",
			"attrValue": "华润品牌漆"
		}, {
			"attrName": "组装方式",
			"attrValue": "需组装（免费上门）"
		}, {
			"attrName": "*特别提醒",
			"attrValue": "1、周日暂无法发货，周日订单延至周一发货，请知悉；2、大家具属贵重商品，收到商品后请务必检查确认没有问题再签收，商品破损请直接拒收并反馈客服；3、退换货需保证商品、配件、包装等完好，不影响二次销售；4、请引导安装师傅查看安装视频及说明书，以确保安装质量；安装遇到任何问题请及时反馈客服，我们将第一时间为您解决问题；5、视频产品色差较大，请参考详情页产品图，以实物为准。"
		}],
		"label": "",
		"manufacture": "日本Francfranc制造商",
		"sale": 613,
		"date": "1500012627320",
		"category": "居家",
		"subCategory": "家具"
	})
	var goodsEntity = new goodsModel({
		"id": 1160010,
		"price": 99,
		"topName": "定时硅胶LED小夜灯",
		"subName": "定时功能，柔软硅胶",
		"shortDescription": ["定时功能", "安心入睡", "内置灯珠", "两档调光", "环保硅胶", "圆润柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b52df2e23b4a5afda49e21598ab1a443.jpg", "http://yanxuan.nosdn.127.net/39ffb1cb3c1ede7344ca3ba2e49d6cfa.jpg", "http://yanxuan.nosdn.127.net/083b95a7a703716fedcf8a081990c040.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/0a9a7b1b6417314ef8e2b86ca880d323.png", "http://yanxuan.nosdn.127.net/c1be8ef7dd44841831bf5a2a610c31ab.jpg", "http://yanxuan.nosdn.127.net/17a67f520e26ef8a4a215198ad2c5982.jpg", "http://yanxuan.nosdn.127.net/a0f3fff69f89e7db365db7abfcef7547.jpg", "http://yanxuan.nosdn.127.net/98dcd92d446b78c7d901b6a1085e982c.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/f7ec8295b8ab93fe360a0fd4e9076084.jpg", "http://yanxuan.nosdn.127.net/21ae1caadc83d0be0fc2d9dff41d7e49.jpg", "http://yanxuan.nosdn.127.net/6398fb63a236071a9b338e87292d66ad.jpg", "http://yanxuan.nosdn.127.net/ec1b52b47a895b9097d8e5bf4dea2770.jpg", "http://yanxuan.nosdn.127.net/ee3dc81f64cb37c947986e9bd55fc5d2.jpg", "http://yanxuan.nosdn.127.net/880a06c6513ebe0d25e8a9ddc3529409.jpg", "http://yanxuan.nosdn.127.net/50be6d974305e68c325d52351d988dc5.jpg", "http://yanxuan.nosdn.127.net/23a949ed720fd450a7f04693d4ee3b1d.jpg", "http://yanxuan.nosdn.127.net/e813433d423c08b636451b0de3bef305.jpg", "http://yanxuan.nosdn.127.net/30eb118cfc403784996e5498554a7441.jpg", "http://yanxuan.nosdn.127.net/308d21930558b7bb1769c0cf41b38e1a.jpg", "http://yanxuan.nosdn.127.net/1973049fdf683c45e15ad49db130fd9a.jpg", "http://yanxuan.nosdn.127.net/39f6c765a981025002c5c12820e20e53.jpg", "http://yanxuan.nosdn.127.net/7646e442048a4552f19ab8264105b8a5.jpg", "http://yanxuan.nosdn.127.net/56897890969f6e2c3e1c18f672f52563.jpg", "http://yanxuan.nosdn.127.net/1ceaf29160ed161e3ed5e61948e7ba2f.jpg", "http://yanxuan.nosdn.127.net/3e58b27ba439f6d3f3d177c99714f83a.jpg", "http://yanxuan.nosdn.127.net/e89c61feed879e1d4485890621673080.jpg", "http://yanxuan.nosdn.127.net/c6fb2d68b66aa051f677e9d8528f722f.jpg", "http://yanxuan.nosdn.127.net/c960b5d9a342564c84b702023180f0fe.jpg", "http://yanxuan.nosdn.127.net/df372176b8921a1f8fe698fb6ca786de.jpg", "http://yanxuan.nosdn.127.net/e19682a5cd370829ace8773196f83e19.jpg", "http://yanxuan.nosdn.127.net/eec103caf406975b99a43b192bca48d7.jpg", "http://yanxuan.nosdn.127.net/d7d88b0d3fc16f84171616bdf56cf7c0.jpg", "http://yanxuan.nosdn.127.net/273124bc0b3d762819e6d8bea0bec14d.jpg", "http://yanxuan.nosdn.127.net/536aec99ab5d37e7c82eb5eab2a97343.jpg", "http://yanxuan.nosdn.127.net/15a8ce936d0ed2bc0c041fabfd485efa.jpg", "http://yanxuan.nosdn.127.net/e2ec704c9ea0dc2e95f306580cee1574.jpg", "http://yanxuan.nosdn.127.net/e7e8a080023578554839eeaae1a1cc39.jpg", "http://yanxuan.nosdn.127.net/84499d9f236bd2bdc7937d130cb38d49.jpg", "http://yanxuan.nosdn.127.net/6753328c66674321b049247013ef1e88.jpg", "http://yanxuan.nosdn.127.net/f45cd36a7b5159b93223090426e18a06.jpg", "http://yanxuan.nosdn.127.net/c654be43f18321e423f28ab935433887.jpg", "http://yanxuan.nosdn.127.net/57244bf525fffa77be4a267d55c64b9e.jpg", "http://yanxuan.nosdn.127.net/7ffec454dc2e98b24caf78c8a7f41118.jpg", "http://yanxuan.nosdn.127.net/31d7f4d1548bb6d78d66a6b04de312d6.jpg", "http://yanxuan.nosdn.127.net/dcc2a59c4063c1ed5f23a84b0caf8e17.jpg"],
		"inventory": [504],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "直径108mm*高度127mm"
		}, {
			"attrName": "充电时间",
			"attrValue": "约2小时"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "功率",
			"attrValue": "0.5W（3颗）"
		}, {
			"attrName": "充电电压",
			"attrValue": "DC 5.0V"
		}],
		"label": "",
		"manufacture": "",
		"sale": 254,
		"date": "1500012629979",
		"category": "居家",
		"subCategory": "灯具"
	})
	var goodsEntity = new goodsModel({
		"id": 1086015,
		"price": 249,
		"topName": "黑凤梨 北欧极简直杆台灯",
		"subName": "北欧色彩，极简线条",
		"shortDescription": ["线条极简", "低调百搭", "磨砂喷塑", "色泽持久", "八孔散热", "安全安心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/eb31b07a15d7f84b4357c2eebd1a99a0.jpg", "http://yanxuan.nosdn.127.net/e98c89dd63b2724e6922e5179b6e9c8d.jpg", "http://yanxuan.nosdn.127.net/d730c79a15706a9a042587079f40616f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/82dd8deeff71138a254509a4a1d215e7.png", "http://yanxuan.nosdn.127.net/9331158a10c79a0663e53865cd1689ec.jpg", "http://yanxuan.nosdn.127.net/b4706343b3817e690d778e5f8a68a8de.jpg", "http://yanxuan.nosdn.127.net/7a8499c2ded7790addffb9d87fc4532b.jpg", "http://yanxuan.nosdn.127.net/2831d02bb34fabbcaf602fdf7a9cc409.jpg"],
		"types": ["本白", "哑黑", "姜黄"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/97b0c537afdd31479d162843a0d1d84c.jpg", "http://yanxuan.nosdn.127.net/b37bd80283652bd7174694a45589f704.jpg", "http://yanxuan.nosdn.127.net/5347d867f61722a0695b9db09af9990f.jpg", "http://yanxuan.nosdn.127.net/5ffecc39946e35a19455718e508ecbfa.jpg", "http://yanxuan.nosdn.127.net/7d3337aabc4cd48e17df504968b9bcc2.jpg", "http://yanxuan.nosdn.127.net/edcb96d5626a01a021f61386c1818305.jpg", "http://yanxuan.nosdn.127.net/2a4cb2f72588c0edbeef0ddd8d1a0b40.jpg", "http://yanxuan.nosdn.127.net/ec52d796d5157f8afee110ad019be447.jpg", "http://yanxuan.nosdn.127.net/706468839b4ced6effe7151a60da7971.jpg", "http://yanxuan.nosdn.127.net/99e15a962590ca4ebd5b80972e60f3ac.jpg", "http://yanxuan.nosdn.127.net/05365437b5293acdaa82cab3042f31f8.jpg", "http://yanxuan.nosdn.127.net/148a43696d26a46718b34af52bab6e02.jpg", "http://yanxuan.nosdn.127.net/6fe5611b34cbe2325edc817ca8191793.jpg", "http://yanxuan.nosdn.127.net/1c4f30f42af4368ff9bf551aea624032.jpg", "http://yanxuan.nosdn.127.net/761086d5857b8ed91ed41c5869fd83b2.jpg", "http://yanxuan.nosdn.127.net/f594295a6a0b406f9183b7666aaeecb7.jpg", "http://yanxuan.nosdn.127.net/1854325dca8842d82cad840627788b0a.jpg", "http://yanxuan.nosdn.127.net/606580cbd91b9b13c8cc2d42868fd447.jpg", "http://yanxuan.nosdn.127.net/b84ff4d6c2e1d7eb9df07e6955d1a3ff.jpg", "http://yanxuan.nosdn.127.net/b7d6bc7aad160a75c4237480e93e26c4.jpg", "http://yanxuan.nosdn.127.net/bc198e38ce66be717011483345a93180.jpg", "http://yanxuan.nosdn.127.net/470c22b71ce0b5fe11221c42767a8be4.jpg", "http://yanxuan.nosdn.127.net/295c6ce44ce48167974b492bf6647bca.jpg", "http://yanxuan.nosdn.127.net/8c1a9546d3f1f5166090002aa219dfe3.jpg", "http://yanxuan.nosdn.127.net/3b63e297f8537c10b038b9262fe5a09a.jpg", "http://yanxuan.nosdn.127.net/0fe3bdfe082bf47b4053042634119a2e.jpg", "http://yanxuan.nosdn.127.net/116fc27c8412658de40feec0431c6136.jpg", "http://yanxuan.nosdn.127.net/5e6612039aacbfe26fd828b1f0410464.jpg", "http://yanxuan.nosdn.127.net/ae20877524cc681e64cdfe1599fd1818.jpg", "http://yanxuan.nosdn.127.net/c251f87aa5a64337f224f65e585b6916.jpg", "http://yanxuan.nosdn.127.net/555cb6c1a1eba39fc6cd94c476cf2ee1.jpg", "http://yanxuan.nosdn.127.net/5e7d3bccffee8d4dd3bcf0568f6b8d4a.jpg", "http://yanxuan.nosdn.127.net/334c808306358792bf7ae29d7d1a2fb6.jpg", "http://yanxuan.nosdn.127.net/1a278dd1df1ea039774b4191952b218e.jpg", "http://yanxuan.nosdn.127.net/910073b6c377251840f38a3bb8a55f17.jpg", "http://yanxuan.nosdn.127.net/ccb62460dfc3ba0fb60beb2052ea7c68.jpg", "http://yanxuan.nosdn.127.net/afc94193f157c8ab6a38b0f3d62be48b.jpg", "http://yanxuan.nosdn.127.net/6565f2c8f13149dda330beed934f05bf.jpg", "http://yanxuan.nosdn.127.net/0e39b2e7039fd1508ef5656bad01f413.jpg", "http://yanxuan.nosdn.127.net/9ab575cc295e636074e1ae187d3fb7d7.jpg", "http://yanxuan.nosdn.127.net/809c0c0065c9ef01ce9be46e0e7a3d69.jpg", "http://yanxuan.nosdn.127.net/725137857e600fa3481bafb5d30b37c3.jpg", "http://yanxuan.nosdn.127.net/7f347ab2bdb91c4cb5c9c2639f5f8681.jpg", "http://yanxuan.nosdn.127.net/c8abbc31c592453f7a3722be0a731ac6.jpg", "http://yanxuan.nosdn.127.net/b0ff3858e1dd8c00721e73092c0e14bb.jpg", "http://yanxuan.nosdn.127.net/316c9169c6c59da8db87afc3f509654b.jpg", "http://yanxuan.nosdn.127.net/ee9b968bea3ebc3a8281991cdf8f4260.jpg", "http://yanxuan.nosdn.127.net/d83f3603d3893b3a067ebe75de11fb3f.jpg", "http://yanxuan.nosdn.127.net/5841597405d29fc7e98065bf68685d06.jpg", "http://yanxuan.nosdn.127.net/aa6025810c36d9aa5bbd02bd7f6870d8.jpg", "http://yanxuan.nosdn.127.net/80a1adee8cb1479b6b728a8a0a63797f.jpg"],
		"inventory": [889, 162, 509],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB 7000.11-2008"
		}, {
			"attrName": "产地",
			"attrValue": "中国广东"
		}, {
			"attrName": "型号",
			"attrValue": "MT20290-1-130"
		}, {
			"attrName": "温馨提示",
			"attrValue": "本产品不含灯泡"
		}],
		"label": "",
		"manufacture": "",
		"sale": 849,
		"date": "1500012633030",
		"category": "居家",
		"subCategory": "灯具"
	})
	var goodsEntity = new goodsModel({
		"id": 1154002,
		"price": 520,
		"topName": "黑凤梨 一见倾心永生花",
		"subName": "实用收纳功能 浪漫搭配",
		"shortDescription": ["进口花材", "浪漫搭配", "收纳功能", "实用贴心", "安全染料", "色彩鲜亮"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/bd1a17404d0b3c748bec5f86c0715ca1.jpg", "http://yanxuan.nosdn.127.net/8e37032b2d6931ac1278f3c34e71df94.jpg", "http://yanxuan.nosdn.127.net/8b627441de0c59caea1046655e05ec38.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/2972d30c2fb6f7640404594b443de46b.png", "http://yanxuan.nosdn.127.net/4d3b22db060d21ae3a4d24f8723be142.jpg", "http://yanxuan.nosdn.127.net/53e82e8930db6d2893127ab0c4d6bf64.jpg", "http://yanxuan.nosdn.127.net/9f0139dc56f694518298dc8624fa376d.jpg", "http://yanxuan.nosdn.127.net/9f479f800258346822b8226e47148c82.jpg"],
		"types": ["粉"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/b3c401d71c1655da7c339d7b7e9c7384.jpg", "http://yanxuan.nosdn.127.net/0837cc5acfb67f893954b738ef2e8fb5.jpg", "http://yanxuan.nosdn.127.net/b252f7a5e14d4d1271d4865d8be80292.jpg", "http://yanxuan.nosdn.127.net/978cf68df9a199ea1dea9a6e4af27288.jpg", "http://yanxuan.nosdn.127.net/9a908620f0a57314d7551a7626575941.jpg", "http://yanxuan.nosdn.127.net/0ce4f61b0438511ce0098bc0e8bbcd32.jpg", "http://yanxuan.nosdn.127.net/6fa6df2f42debca0f2676501fa3f7215.jpg", "http://yanxuan.nosdn.127.net/acff96b50e867f47298c5bb1c59c0662.jpg", "http://yanxuan.nosdn.127.net/34b764db48600e0fe845de5ddefa4189.jpg", "http://yanxuan.nosdn.127.net/f62f64805ff72dcc18e1ed9bdd296bed.jpg", "http://yanxuan.nosdn.127.net/23ad2495ccf04041557e0ce005f486e4.jpg", "http://yanxuan.nosdn.127.net/fd26665b59cdbe5faf67fcf35d0b65d9.jpg", "http://yanxuan.nosdn.127.net/d5e77110879c7607748fdf798cd25a94.jpg", "http://yanxuan.nosdn.127.net/981c945247d0eb61a986cfb35023d3cb.jpg", "http://yanxuan.nosdn.127.net/f04456a58fbe712ab049e80a77d90571.jpg", "http://yanxuan.nosdn.127.net/af49b9408a85003f1e44574e397e5918.jpg", "http://yanxuan.nosdn.127.net/32c46f345fab7f0a37f6cbc2cb9788c1.jpg", "http://yanxuan.nosdn.127.net/428a41757af283a14eb624bdcd2903b2.jpg", "http://yanxuan.nosdn.127.net/ae60d025093d25bd873885568963937f.jpg", "http://yanxuan.nosdn.127.net/a29b03c0d1c89665d39a3ac50dbaa49b.jpg", "http://yanxuan.nosdn.127.net/663fe69d3ffafe426ae4ab7010601fe7.jpg", "http://yanxuan.nosdn.127.net/dbbf90428711b47da346efebd9d23bb6.jpg", "http://yanxuan.nosdn.127.net/b311b3d67e631a467fda86c1565fd255.jpg", "http://yanxuan.nosdn.127.net/8ed9e05a23e9b42515b155495cd7c2ba.jpg", "http://yanxuan.nosdn.127.net/040b9be6c4d440900190fd4b43f04620.jpg", "http://yanxuan.nosdn.127.net/9f9b0ac0c69c075ef8bf8754b5e63170.jpg", "http://yanxuan.nosdn.127.net/d81f143ab07596cbc5b4f35003e14218.jpg", "http://yanxuan.nosdn.127.net/4e655eca77fa2aa2d6b4aab74ade9e3e.jpg", "http://yanxuan.nosdn.127.net/f993e3634d0369a791a6e36e08a113c8.jpg", "http://yanxuan.nosdn.127.net/ad8dcee12e5aab7bab608c0724376514.jpg", "http://yanxuan.nosdn.127.net/8f305fb4658072b58921f56dcb124edd.jpg", "http://yanxuan.nosdn.127.net/b7a44bd15b6037407488a7641f03c38b.jpg", "http://yanxuan.nosdn.127.net/bf9568d5b8cfbf7294fa4c7372874166.jpg", "http://yanxuan.nosdn.127.net/acc166100a08675eb8f59b60ae198c66.jpg", "http://yanxuan.nosdn.127.net/7514287bc5742f77f8bbc5d2b4879198.jpg", "http://yanxuan.nosdn.127.net/78304fbc20f7da4f5c4b6f79e32db78a.jpg", "http://yanxuan.nosdn.127.net/9d374878dd16cd726b479b489b3371a2.jpg", "http://yanxuan.nosdn.127.net/88c071fb9067fc5fd3babca8fe66625a.jpg", "http://yanxuan.nosdn.127.net/4f2298e4cfbdd78303cfb32786039c0c.jpg", "http://yanxuan.nosdn.127.net/777fead092d985175b4b97d0b028020e.jpg", "http://yanxuan.nosdn.127.net/f99756f085dc4c198aa51a05e8c5f4a8.jpg", "http://yanxuan.nosdn.127.net/a137cc5d69fc20a966ae390bfa81b473.jpg", "http://yanxuan.nosdn.127.net/4bf00cbc5f6496565044bdbb5677f1ed.jpg", "http://yanxuan.nosdn.127.net/7ad6896d3ac79649299bc643cdff33cb.jpg", "http://yanxuan.nosdn.127.net/ff667ead6697714ffcc90c81fb670fc6.jpg", "http://yanxuan.nosdn.127.net/20749a9f4290a449b59c4469cedfe4bd.jpg", "http://yanxuan.nosdn.127.net/e2863000452f44e5e6c271d973b9b03e.jpg", "http://yanxuan.nosdn.127.net/8ddf09ceb5c4aa7f3edaf2faa263c5e8.jpg", "http://yanxuan.nosdn.127.net/bafab9f198a7f58c2d1bb2d9d8392fc8.jpg", "http://yanxuan.nosdn.127.net/0946f61e8cd9b0713d7c52dfa0718c0e.jpg", "http://yanxuan.nosdn.127.net/099a1d226b8536aeab9c99214ea55611.jpg", "http://yanxuan.nosdn.127.net/858f416f32654ffac9be022ccbd8b4d0.jpg", "http://yanxuan.nosdn.127.net/6e415566698f541df3c4ab7b78326c91.jpg", "http://yanxuan.nosdn.127.net/88c5007091934f6d9923ac3cc06e6444.jpg", "http://yanxuan.nosdn.127.net/f50375ceb6fbbe80159b097810b30dba.jpg", "http://yanxuan.nosdn.127.net/b053c2e718578ea139e16d61fa30a0f6.jpg", "http://yanxuan.nosdn.127.net/8eb1bbac8164880e1b58c0235dbc38dc.jpg", "http://yanxuan.nosdn.127.net/588b8b700f3872f288d699fd0f2445fe.jpg", "http://yanxuan.nosdn.127.net/e3d23b1cbed851deb3d30b040f30b89d.jpg", "http://yanxuan.nosdn.127.net/09d2f69a7d15b23c2511019900197d43.jpg", "http://yanxuan.nosdn.127.net/96b5a81bedfa3384138322d3310e3e35.jpg", "http://yanxuan.nosdn.127.net/53a57762ecf5d40d8cb35280f0b126a4.jpg", "http://yanxuan.nosdn.127.net/b115fab5f60dea0321b2bcbf880f579e.jpg"],
		"inventory": [445],
		"information": [{
			"attrName": "鲜花辅材",
			"attrValue": "彼岸花、白色蜡菊、茼蒿花"
		}, {
			"attrName": "颜色",
			"attrValue": "倾情粉"
		}, {
			"attrName": "花材种植地",
			"attrValue": "日本"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "由于花材的季节性供应特点，个别配材会有所调整，且因花材批次不同会有一定微小色差，不会影响整体花盒效果。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 487,
		"date": "1500012635786",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1083009,
		"price": 299,
		"topName": "海洋之心永生花",
		"subName": "厄瓜多尔玫瑰，精致美感",
		"shortDescription": ["厚实花瓣", "傲然盛开", "晶亮钻粉", "点缀浪漫", "典雅礼盒", "见证真心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/92e19beb4edaf19b99d94d9e23c2c4aa.jpg", "http://yanxuan.nosdn.127.net/185da26ea9aac5274aa1099d0685a7e8.jpg", "http://yanxuan.nosdn.127.net/089075e051603240836de34336012fa4.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/76e5c820f6bb71a26517ffa01f499871.png", "http://yanxuan.nosdn.127.net/157be86783a0cab72ac5bd73d9de79aa.jpg", "http://yanxuan.nosdn.127.net/238d39c9f49c2ab186be2cdbe21ebad4.jpg", "http://yanxuan.nosdn.127.net/d361a0c72f4c3d8b61d1502d47878d97.jpg", "http://yanxuan.nosdn.127.net/7f1ab428fbea15ea9c02af2b44b452e1.jpg"],
		"types": ["妖姬蓝"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/1b746ed72f6bf99405c749cb6c9da6eb.jpg", "http://yanxuan.nosdn.127.net/06b441ba473cabbc5189da42a2c0eb77.jpg", "http://yanxuan.nosdn.127.net/b3f24e6e91b100c8132feb082f1a34e9.jpg", "http://yanxuan.nosdn.127.net/696cba61d6b37131c2322b66d0495b93.jpg", "http://yanxuan.nosdn.127.net/f1b458886ef3de6961975f86425fafb0.jpg", "http://yanxuan.nosdn.127.net/63635766ac69f5009483eaca4d696da2.jpg", "http://yanxuan.nosdn.127.net/3b0d9fdd0909325b8a067e2e7d70c157.jpg", "http://yanxuan.nosdn.127.net/82da955cf9e36e3d08dadc59f5f300c3.jpg", "http://yanxuan.nosdn.127.net/20d2cc7cdf5e6efe02bfe466e66cd9f6.jpg", "http://yanxuan.nosdn.127.net/3a337c585ca3a1bbeee9785e0f6a191c.jpg", "http://yanxuan.nosdn.127.net/65277e00b7fc1a3319881a3692777268.jpg", "http://yanxuan.nosdn.127.net/31e4584649abe39c7f197ba8924fb74c.jpg", "http://yanxuan.nosdn.127.net/fbc59ffa03f9901cdccfba627b60e1ce.jpg", "http://yanxuan.nosdn.127.net/d4b72e337df5ed195cfbc661a3777845.jpg", "http://yanxuan.nosdn.127.net/080ce5c403e912ac791b31eb0c289511.jpg", "http://yanxuan.nosdn.127.net/78b066ce0b49497a9501948063322263.jpg", "http://yanxuan.nosdn.127.net/7fb74a8a28be5f5c6dacfd16f978afe2.jpg", "http://yanxuan.nosdn.127.net/36b820addabfb7caf910529969a3f1bb.jpg", "http://yanxuan.nosdn.127.net/219fdb339a336e4f72f40c8849069b15.jpg", "http://yanxuan.nosdn.127.net/bfb962ce656900f82c46c2e2d3a5df1d.jpg", "http://yanxuan.nosdn.127.net/01946020d4e1500d250d28c7e7e0dae5.jpg", "http://yanxuan.nosdn.127.net/20b66f85a1606fda8fc700a85c17d8d7.jpg", "http://yanxuan.nosdn.127.net/31a70dab0b81c7eac9696b2116a6df99.jpg", "http://yanxuan.nosdn.127.net/611db5a79922174f7fc267267c01fb6a.jpg", "http://yanxuan.nosdn.127.net/ceeea13917bc6ba5d8b358007feacc4f.jpg", "http://yanxuan.nosdn.127.net/95cb22dfb9901f209719996cb40c1d41.jpg", "http://yanxuan.nosdn.127.net/e98ac4660f3907189a73040d91c74609.jpg", "http://yanxuan.nosdn.127.net/8593ac139f076079f1600d5c9dc8018d.jpg", "http://yanxuan.nosdn.127.net/0045d4dd0585566f1b93eaf844e3073a.jpg", "http://yanxuan.nosdn.127.net/f9d407b3292b173daec7044c3db1fd6c.jpg", "http://yanxuan.nosdn.127.net/1f5e7818316caa798f48fae4f3cdb938.jpg", "http://yanxuan.nosdn.127.net/be171d645ed6e4f2651df9d3f6f4231e.jpg", "http://yanxuan.nosdn.127.net/ea8bf6c7ebc5641209fb1c846f3bef5f.jpg", "http://yanxuan.nosdn.127.net/95b1e32659f10a90e0ea01255d318df2.jpg", "http://yanxuan.nosdn.127.net/5c60047bd75a8b0cc943925f2ecd6e63.jpg", "http://yanxuan.nosdn.127.net/0d5fdfb237a0ff76f276662437a49bdd.jpg", "http://yanxuan.nosdn.127.net/476a35de0402c6ffb483d890ab0ddbef.jpg", "http://yanxuan.nosdn.127.net/02a627d54428aced361f96e3e6eca226.jpg", "http://yanxuan.nosdn.127.net/e6b5d161c87cae4b6d713fd79e135045.jpg", "http://yanxuan.nosdn.127.net/d893f5518e755af8686cf13e4490a129.jpg", "http://yanxuan.nosdn.127.net/54fa3793ff82c378ab52a9eaf6fa4f7e.jpg", "http://yanxuan.nosdn.127.net/053b11e1be5bbf24773853025125dec0.jpg", "http://yanxuan.nosdn.127.net/57798ce86240acd240f4b56c9aa04f01.jpg", "http://yanxuan.nosdn.127.net/8a379abfeada13c4696c48379a035373.jpg", "http://yanxuan.nosdn.127.net/8a2d49a4c05ee87b057e9f0bd1c22a66.jpg", "http://yanxuan.nosdn.127.net/91bdd265ca73b68ecc940bda58c67d5d.jpg", "http://yanxuan.nosdn.127.net/46328006b2280246628dbbf890cb7b72.jpg"],
		"inventory": [163],
		"information": [{
			"attrName": "朵数",
			"attrValue": "1朵"
		}, {
			"attrName": "颜色",
			"attrValue": "妖姬蓝"
		}, {
			"attrName": "尺寸",
			"attrValue": "17*17*12cm"
		}, {
			"attrName": "花材种植地",
			"attrValue": "厄瓜多尔"
		}],
		"label": "",
		"manufacture": "",
		"sale": 613,
		"date": "1500012638662",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1116031,
		"price": 439,
		"topName": "黑凤梨 怦然心动永生花",
		"subName": "音乐与花的浪漫碰撞",
		"shortDescription": ["进口玫瑰", "惊艳花球", "天空之城", "意境配乐", "环保染料", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/44b1c8285cae2cb86b28c0dbdec94798.jpg", "http://yanxuan.nosdn.127.net/519f08310b659022f06ab148d86df695.jpg", "http://yanxuan.nosdn.127.net/fc511425911e93948c3b2ee6a3210cac.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f88c3dc42f3e4d7da1ded8c1ee6a97ba.png", "http://yanxuan.nosdn.127.net/562ef1acdc8c2a7d5c1fd1de8d778074.jpg", "http://yanxuan.nosdn.127.net/2c74a79d58a9f77cc5214bfdc807d4be.jpg", "http://yanxuan.nosdn.127.net/46a7feb93c24ce74b6a686053e2ddbc8.jpg", "http://yanxuan.nosdn.127.net/7b3084f82ec3a4389f5e5db63a82b087.jpg"],
		"types": ["渐变粉花瓣+灰色底座（无录音功能）", "录音功能款"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/f0c84c042edd11af9ebba69b35b57012.jpg", "http://yanxuan.nosdn.127.net/e2e62335f668b0b02a4d5d34d1f6d3dd.jpg", "http://yanxuan.nosdn.127.net/79efd7a2c817c5257105280a3f369477.jpg", "http://yanxuan.nosdn.127.net/4f0a1a9871a0e7aa94f836d4d933eb23.jpg", "http://yanxuan.nosdn.127.net/87587862a18e2c3c65721876f626cbe3.jpg", "http://yanxuan.nosdn.127.net/7a44cbd746845f58601bb1009271b817.jpg", "http://yanxuan.nosdn.127.net/a014c533734421f95b616ac5155728e5.jpg", "http://yanxuan.nosdn.127.net/7c01d52114ed4b99e7fb73e7c2073741.jpg", "http://yanxuan.nosdn.127.net/1bb9fdbfc9d6d6375d8b6392ae7b0ffc.jpg", "http://yanxuan.nosdn.127.net/f2aaeb066dae56db2a3df63811d6a399.jpg", "http://yanxuan.nosdn.127.net/f7304a57837f789307fbe79b260862f4.jpg", "http://yanxuan.nosdn.127.net/6da199bceda3de32d44e498553bdf646.jpg", "http://yanxuan.nosdn.127.net/7b832dea81b7253ba53c3c7d6c44503e.jpg", "http://yanxuan.nosdn.127.net/c2672abc242dad5a9f007a9d91e8c9e5.jpg", "http://yanxuan.nosdn.127.net/9716f0660d546d235e898fb4b4458684.jpg", "http://yanxuan.nosdn.127.net/47c401072dc19e153baa05aa9994392f.jpg", "http://yanxuan.nosdn.127.net/1aea26b5f370147755e3af352d7f1043.jpg", "http://yanxuan.nosdn.127.net/9e5b854587fb479190a041cbc805ef8d.jpg", "http://yanxuan.nosdn.127.net/5b538f4ca14ff35af8d17b7df7a3a8ca.jpg", "http://yanxuan.nosdn.127.net/f3ae6abd0699a1bf5449558f14eae704.jpg", "http://yanxuan.nosdn.127.net/ab071b8f626f2a99769a7990b75c352c.jpg", "http://yanxuan.nosdn.127.net/5075019eea354cc9f3f96be1647b933c.jpg", "http://yanxuan.nosdn.127.net/fafcae716667afc5acb7dd1f1e6899c4.jpg", "http://yanxuan.nosdn.127.net/cc1e2beca5bc2fd2831fbf919467789b.jpg", "http://yanxuan.nosdn.127.net/6feb3d0330891c6a091e1d6e62fddd3e.jpg", "http://yanxuan.nosdn.127.net/564796c3afcb8e4743b4ff4f5f5b42e7.jpg", "http://yanxuan.nosdn.127.net/031245eb85b27fb27e499d9da40b6c56.jpg", "http://yanxuan.nosdn.127.net/8f2a6c93b37979a014c87eea95b4db6a.jpg", "http://yanxuan.nosdn.127.net/d23012c236f0e23471d613cebffbcdc5.jpg", "http://yanxuan.nosdn.127.net/e7193a8ed886cb60298c4b550feb7803.jpg", "http://yanxuan.nosdn.127.net/4e81c7ba4a9ea3b6da5d7ea95d42df9e.jpg", "http://yanxuan.nosdn.127.net/0e7fc74e2535281e11484289b40fb300.jpg", "http://yanxuan.nosdn.127.net/71b8c4cf01ed3ec9e6d8ad1c8f4a9fb5.jpg", "http://yanxuan.nosdn.127.net/b53f86e45c2c9ea601bcd549a1838420.jpg", "http://yanxuan.nosdn.127.net/ab6164cc6f080a0ed12c9b511e323a31.jpg", "http://yanxuan.nosdn.127.net/62edf39825002ed02743927e138613f4.jpg", "http://yanxuan.nosdn.127.net/112d0148da519b9312ccef31b028061a.jpg", "http://yanxuan.nosdn.127.net/d0f3f972703ea02dbc2cd14efe44b169.jpg", "http://yanxuan.nosdn.127.net/74baec97b72933b30402e85650bcb74f.jpg", "http://yanxuan.nosdn.127.net/0d9e98254e8fee5be14f9fd225cbb31f.jpg", "http://yanxuan.nosdn.127.net/31d5e6b96246f2342894ad35d818fad0.jpg", "http://yanxuan.nosdn.127.net/3830dba2766aec495ac22df3c38d3bc5.jpg", "http://yanxuan.nosdn.127.net/4ff7df14acb298c4cc5329818191a7aa.jpg", "http://yanxuan.nosdn.127.net/98d11fad51ba6803d20ae7d9d4c00159.jpg", "http://yanxuan.nosdn.127.net/b25e1f17c35ab4de3a7c9483575255cf.jpg", "http://yanxuan.nosdn.127.net/194083b4daa7735a38413e1262663544.jpg", "http://yanxuan.nosdn.127.net/738020753a274396c6c21695b8495da6.jpg", "http://yanxuan.nosdn.127.net/252fc3d67d92ad5965f64c8fbc8e0758.jpg", "http://yanxuan.nosdn.127.net/e066fa4df4af095c819caa29869b760b.jpg", "http://yanxuan.nosdn.127.net/92d5b81b946d4610d2f0ddae095f0ef9.jpg", "http://yanxuan.nosdn.127.net/b2058ca9d31838ee64db54ec6ff01148.jpg", "http://yanxuan.nosdn.127.net/39e3fb67a1fbbba9300491f217b3841f.jpg", "http://yanxuan.nosdn.127.net/b32ae22817cb9232fcb83f44a321cfa1.jpg", "http://yanxuan.nosdn.127.net/e49e1563dbc2e96c2c1999c66b04ddfd.jpg", "http://yanxuan.nosdn.127.net/cae6cdc0b0e6398e6f6587a767fa565d.jpg", "http://yanxuan.nosdn.127.net/f724ab0d08508d171b0ff1136a7fb621.jpg", "http://yanxuan.nosdn.127.net/2f3006e85d29ffc71ebd169a4a9f2c41.jpg", "http://yanxuan.nosdn.127.net/9f6f30b8009e62f82c5b934dad834c8a.jpg", "http://yanxuan.nosdn.127.net/de9733d2221449ceffffdd73964c5fb1.jpg"],
		"inventory": [414, 482],
		"information": [{
			"attrName": "附加功能",
			"attrValue": "音乐盒"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "直径10.5cm*高17cm"
		}, {
			"attrName": "颜色",
			"attrValue": "渐变粉花朵+灰色底座"
		}],
		"label": "",
		"manufacture": "",
		"sale": 920,
		"date": "1500012641487",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1116030,
		"price": 439,
		"topName": "黑凤梨 罗马假日永生花",
		"subName": "黑粉优雅性感 浪漫配乐",
		"shortDescription": ["进口玫瑰", "花球巨大", "经典配乐", "爱意满分", "黑粉搭配", "神秘性感"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f1a1ef138e7d4f48a3634a838e6858bd.jpg", "http://yanxuan.nosdn.127.net/4643ad1bfde88ec6c5c62bf3773833ed.jpg", "http://yanxuan.nosdn.127.net/f3701c7852f2e9454fbe710c15dd95bb.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9d59a22b5aff348b5aba5fc7e451ea4d.png", "http://yanxuan.nosdn.127.net/30ed774f89cd6f59b4f0ed5d9e6cbc77.jpg", "http://yanxuan.nosdn.127.net/f079e52277f71656936a0350451ffad2.jpg", "http://yanxuan.nosdn.127.net/26c25328c6e044f47534b3e9582d1f2a.jpg", "http://yanxuan.nosdn.127.net/9dad4607a678e730230b68bf4fbf5255.jpg"],
		"types": ["黑色花球+柔情粉底座（无录音功能）", "录音功能款"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/bb05371d3fea345f397081f7af8a5859.jpg", "http://yanxuan.nosdn.127.net/7ad6534f417b2828020525a89d8fef4a.jpg", "http://yanxuan.nosdn.127.net/a41c224ca7bbab9ca10e824755011454.jpg", "http://yanxuan.nosdn.127.net/e0c483a7f439a2743bf2c4bee687b821.jpg", "http://yanxuan.nosdn.127.net/a9846e3cb203ddaf3cf88f096be2dfaa.jpg", "http://yanxuan.nosdn.127.net/34efa4ada864174a773f519b061aeb34.jpg", "http://yanxuan.nosdn.127.net/ca56198905687d47c0a599184517bb0f.jpg", "http://yanxuan.nosdn.127.net/fac4227e28efd27a17875b04171ccb5a.jpg", "http://yanxuan.nosdn.127.net/31be7a4877a94e5d0a3f7c9c094a2921.jpg", "http://yanxuan.nosdn.127.net/ae6a062bf4be073f9751f0fdbcb6b442.jpg", "http://yanxuan.nosdn.127.net/b07448e49317244039e968a010f8d3af.jpg", "http://yanxuan.nosdn.127.net/1f5d62844df7c1fb9526be2fd961928c.jpg", "http://yanxuan.nosdn.127.net/78cd4495ff4cbfce67d7266bf2aa9a52.jpg", "http://yanxuan.nosdn.127.net/8f580b7146bcf0779fae5fb7230c2710.jpg", "http://yanxuan.nosdn.127.net/bc3afaffd14138f666624e992ec94a7f.jpg", "http://yanxuan.nosdn.127.net/ea4ee0cacd135a9c5987b6f0abe45b28.jpg", "http://yanxuan.nosdn.127.net/150c2e62d01f5b56e286c4466c20fbae.jpg", "http://yanxuan.nosdn.127.net/6f6b8597845651957a5930707e6b0503.jpg", "http://yanxuan.nosdn.127.net/19f1947cb04d06c8bb7d80838896529a.jpg", "http://yanxuan.nosdn.127.net/24a912f4873bf666221f58d388439773.jpg", "http://yanxuan.nosdn.127.net/a929dda1ea58489002e090728eb2c1c6.jpg", "http://yanxuan.nosdn.127.net/380f6be4d7223c3684a30e5ab16a5dd4.jpg", "http://yanxuan.nosdn.127.net/ed09b45b63c7b084bf7818d36c13c05e.jpg", "http://yanxuan.nosdn.127.net/13d3d7b5990176a5008bc1eb7205465a.jpg", "http://yanxuan.nosdn.127.net/4b7ccf8655f0420f5f6e61acf275b992.jpg", "http://yanxuan.nosdn.127.net/def8285703e8e20165d8f4f9d56da612.jpg", "http://yanxuan.nosdn.127.net/c48efb5958780025b223b45648f85bc3.jpg", "http://yanxuan.nosdn.127.net/b31a7238d9c8e67940597040be1b812c.jpg", "http://yanxuan.nosdn.127.net/49181c19205ffa30ffdab4f14f1d1b2c.jpg", "http://yanxuan.nosdn.127.net/167849e3f995b4390b0e99a111fe94f6.jpg", "http://yanxuan.nosdn.127.net/627188afb7204edf06c93e059495b1e4.jpg", "http://yanxuan.nosdn.127.net/49f890ddb9f4d87be96f1108284e4666.jpg", "http://yanxuan.nosdn.127.net/d5ab42e59cca6c3cd2393604b057bb0f.jpg", "http://yanxuan.nosdn.127.net/0409341e70e2ca2c637af82725bf7062.jpg", "http://yanxuan.nosdn.127.net/c9230199908d23b7e1cce94cc1a18498.jpg", "http://yanxuan.nosdn.127.net/7622bbd64cc70b576e1332388fef8f3a.jpg", "http://yanxuan.nosdn.127.net/f81dc8669c94c6a21a9bb660da847446.jpg", "http://yanxuan.nosdn.127.net/1a0c59fceb96d5586bf55fc10c372537.jpg", "http://yanxuan.nosdn.127.net/69811583291b359c79dd10a7c51fb44f.jpg", "http://yanxuan.nosdn.127.net/58f7180f31577243102ee2e46131d5df.jpg", "http://yanxuan.nosdn.127.net/05a206fbf2a9addab6f097738f8567ce.jpg", "http://yanxuan.nosdn.127.net/932673b9f23ea0b90fd2f8b6c874483a.jpg", "http://yanxuan.nosdn.127.net/31367ca5beab1e64ff879721b0fd8080.jpg", "http://yanxuan.nosdn.127.net/35895f712976688cc491e30f88986123.jpg", "http://yanxuan.nosdn.127.net/6e91737668f68d47e90453ae1b5c773e.jpg", "http://yanxuan.nosdn.127.net/f79fa52b83088031659f2340e3642c0b.jpg", "http://yanxuan.nosdn.127.net/ba44de6d4a3ba36631f710b7afc94388.jpg", "http://yanxuan.nosdn.127.net/ba68770e1e6245788073a32a5c5d982a.jpg", "http://yanxuan.nosdn.127.net/c26ae654ce7d865b534ce74a128a9406.jpg", "http://yanxuan.nosdn.127.net/4027a0735232c5a3be9abb129c8da53d.jpg", "http://yanxuan.nosdn.127.net/449e33b860b626c6b8192864af3f6b15.jpg", "http://yanxuan.nosdn.127.net/31954df66dff140ddaac91fc242f7a97.jpg", "http://yanxuan.nosdn.127.net/c1789736f893926dce60348e2d761054.jpg", "http://yanxuan.nosdn.127.net/3018ea27b42d2524bf364a163b7b9d07.jpg", "http://yanxuan.nosdn.127.net/53f2b963b2ed23b5968c344b4b8d588a.jpg", "http://yanxuan.nosdn.127.net/d9a2355c5981b9760c403a5032631f04.jpg", "http://yanxuan.nosdn.127.net/632b4b7cb2e1662b239c1ae791db7bdf.jpg", "http://yanxuan.nosdn.127.net/86664ce8ee4e3a1df809407ef509d5c1.jpg", "http://yanxuan.nosdn.127.net/f734fe4fb4f391599d32d5c0c2c1823a.jpg"],
		"inventory": [61, 684],
		"information": [{
			"attrName": "附加功能",
			"attrValue": "音乐盒"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "直径10.5cm*高17cm"
		}, {
			"attrName": "颜色",
			"attrValue": "黑色花朵+粉色底座"
		}],
		"label": "",
		"manufacture": "",
		"sale": 345,
		"date": "1500012644303",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1083010,
		"price": 469,
		"topName": "绿野仙踪永生花",
		"subName": "花朵与多元素的碰撞",
		"shortDescription": ["七种花材", "柔美搭配", "安全染料", "色泽鲜亮", "精致礼盒", "手工打造"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/edf165a567b664164f63fff3026352db.jpg", "http://yanxuan.nosdn.127.net/8467ec8fe8b6f6c9d91ba5fbcf26275c.jpg", "http://yanxuan.nosdn.127.net/05594350f8bcdf60c59e9d4b3935ddfa.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/b9a12d07f8f2d04d662d9340e68e6687.png", "http://yanxuan.nosdn.127.net/d22c4d48a852444f82f411ab8527e197.jpg", "http://yanxuan.nosdn.127.net/31627021573831753fd8635a73b2186c.jpg", "http://yanxuan.nosdn.127.net/172d2bfb2ad0dccd79c2e3cd64557cac.jpg", "http://yanxuan.nosdn.127.net/16e3828d30c2fcde21c503849cd4fb27.jpg"],
		"types": ["柔情粉"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/872f68ec2c4c81593d7a264b533b8b38.jpg", "http://yanxuan.nosdn.127.net/87e5fe50a1d16ba939666f6d6004de73.jpg", "http://yanxuan.nosdn.127.net/06aaec921b232c61fd12c09ea5a43500.jpg", "http://yanxuan.nosdn.127.net/1004dd3c5389c77f983637d72bc0ec59.jpg", "http://yanxuan.nosdn.127.net/a8636d85945b34f4f46c40d8bb23da1e.jpg", "http://yanxuan.nosdn.127.net/cba38f6d80de232aa7cb41a5ea762ccc.jpg", "http://yanxuan.nosdn.127.net/dbce5a3eb52ba113817529c0f6e19ce6.jpg", "http://yanxuan.nosdn.127.net/fcb43dc45be45570a9b8a2940d508f3e.jpg", "http://yanxuan.nosdn.127.net/f65584ca37db0d4bba7b3ff8d0dd7c85.jpg", "http://yanxuan.nosdn.127.net/ce1d98231b92a08a851bd1df647383bd.jpg", "http://yanxuan.nosdn.127.net/6614fd0aa3434d15305c99893f6275ae.jpg", "http://yanxuan.nosdn.127.net/73bfbb663434efdbfaa16b300af283a9.jpg", "http://yanxuan.nosdn.127.net/91a5e9f66c342ab7620b6110f12cb4e0.jpg", "http://yanxuan.nosdn.127.net/1a697e0d6cd426ad0fd108279d4592a7.jpg", "http://yanxuan.nosdn.127.net/86d524e4372219fe3cf192cf8ced2fce.jpg", "http://yanxuan.nosdn.127.net/631bd72f94c63871b4c635109f67e1c4.jpg", "http://yanxuan.nosdn.127.net/220dfd6fe696ad1c4cc7552d01af7414.jpg", "http://yanxuan.nosdn.127.net/f1886adf40c6e0fb9bf9262c54b3d12c.jpg", "http://yanxuan.nosdn.127.net/f60e5c3002cd00f5b2190ef0eea7c05a.jpg", "http://yanxuan.nosdn.127.net/f1d91663eded7ff87a33c251f6b71168.jpg", "http://yanxuan.nosdn.127.net/5de732d905584125eeaaebc0b7bf2d96.jpg", "http://yanxuan.nosdn.127.net/de2b14e10b3450453b406c238953d9ec.jpg", "http://yanxuan.nosdn.127.net/c9d37955cdadb0800eba149475bd96e9.jpg", "http://yanxuan.nosdn.127.net/e1f75e9d6b70c75670319231f1571dd8.jpg", "http://yanxuan.nosdn.127.net/b890510ea48b7d159a22890406e5b3ec.jpg", "http://yanxuan.nosdn.127.net/cf306751ff360b80219eb56e0236ef66.jpg", "http://yanxuan.nosdn.127.net/54aa26a7c8785299f54719304b75eade.jpg", "http://yanxuan.nosdn.127.net/f7a151c2e24d097b6128415a7d7c17ea.jpg", "http://yanxuan.nosdn.127.net/24de9d76834c16d6811d0db2743e11bf.jpg", "http://yanxuan.nosdn.127.net/a7bafc75fe6a498f2710542f28e129e5.jpg", "http://yanxuan.nosdn.127.net/dc61bdbac2ee9ba29004e4455fb02ead.jpg", "http://yanxuan.nosdn.127.net/077f02722953587161b03664a95e04dc.jpg", "http://yanxuan.nosdn.127.net/240b04e96eb8555f673d5d83987b0085.jpg", "http://yanxuan.nosdn.127.net/e0ea680311627b79e004a1023b8ba667.jpg", "http://yanxuan.nosdn.127.net/e013efd9b24d7776ef14139d09385c22.jpg", "http://yanxuan.nosdn.127.net/771212784bf1dc6f15616d760f84ee3f.jpg", "http://yanxuan.nosdn.127.net/d158de0ad3d9199f69b23dbdc4158145.jpg", "http://yanxuan.nosdn.127.net/907d34328d50e3046569a7dbb3ffc6fa.jpg", "http://yanxuan.nosdn.127.net/a727890123a453f2d985fbf4e8685673.jpg", "http://yanxuan.nosdn.127.net/5a91a0c6ae0b550ac31a2595bd576248.jpg", "http://yanxuan.nosdn.127.net/faae995ebf3c914e15c6fd722e56f723.jpg", "http://yanxuan.nosdn.127.net/42c03d3bb396ff92f41508523528084f.jpg", "http://yanxuan.nosdn.127.net/34cd72d26957d2d21b77e13f72b2c152.jpg", "http://yanxuan.nosdn.127.net/d90740ea6c616414b4d560cfa704924f.jpg", "http://yanxuan.nosdn.127.net/160debe27efa104fba6de6514449619c.jpg", "http://yanxuan.nosdn.127.net/180a58f57add7ac4cd4b73a19407713b.jpg", "http://yanxuan.nosdn.127.net/2f0881dbadf691f92257d073c1e5a780.jpg", "http://yanxuan.nosdn.127.net/f191394211da2a5b0f63d3e102067b28.jpg", "http://yanxuan.nosdn.127.net/2fc6603485665bdc886bf13664d1a493.jpg", "http://yanxuan.nosdn.127.net/693af2b7a263853ef898401b3221e5ba.jpg", "http://yanxuan.nosdn.127.net/a54b9bff291b8e0c98260d0aceea61e0.jpg", "http://yanxuan.nosdn.127.net/356950f4b46e0b039797de034a197a86.jpg"],
		"inventory": [920],
		"information": [{
			"attrName": "鲜花辅材",
			"attrValue": "棉毛苏叶、细爪草、褐色果、满天星"
		}, {
			"attrName": "颜色",
			"attrValue": "柔情粉"
		}, {
			"attrName": "尺寸",
			"attrValue": "17*17*12cm"
		}, {
			"attrName": "花材种植地",
			"attrValue": "日本"
		}, {
			"attrName": "*温馨提示",
			"attrValue": "由于花材的季节性供应特点，个别配材会有所调整，且因花材批次不同会有一定微小色差，不会影响整体花盒效果。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 970,
		"date": "1500012647177",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1161009,
		"price": 12.9,
		"topName": "多功能防水牛皮纸收纳袋",
		"subName": "防水材质，装饰收纳多功能",
		"shortDescription": ["进口材质", "坚韧防水", "褶皱可塑", "造型随心", "搭配皮革", "元素碰撞"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/16deaf803a1290c4e04ecfe908e3969a.jpg", "http://yanxuan.nosdn.127.net/15f15c43a90461f427efb80444edfd3e.jpg", "http://yanxuan.nosdn.127.net/ee7e079487bb17d9657e34be5926c340.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/fd060de555dc42227671a657593fb082.png", "http://yanxuan.nosdn.127.net/f92858599e753bf14931c8671ff7b46c.jpg", "http://yanxuan.nosdn.127.net/d40736d4df805aed25d8c7c7aebfa816.jpg", "http://yanxuan.nosdn.127.net/adcfb0cdc3fead31c3889e366bbc087c.jpg", "http://yanxuan.nosdn.127.net/703f9aa236be83f6e468972f740491e2.jpg"],
		"types": ["中号", "小号", "大号"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/b138699f3789829f368940b8917947f5.jpg", "http://yanxuan.nosdn.127.net/c1959f308337b00d155eefa224744c2c.jpg", "http://yanxuan.nosdn.127.net/c729264b6e7e8bbd2ac9399a45ed8e32.jpg", "http://yanxuan.nosdn.127.net/9c071666ed6de556df91d2f5d4fea8ad.jpg", "http://yanxuan.nosdn.127.net/a9aa4b93becd66f37d9e4447dd4b4dc6.jpg", "http://yanxuan.nosdn.127.net/a2ed96d9d67342c29bd30d4067e706e4.jpg", "http://yanxuan.nosdn.127.net/0fcae2c59ad6758e483906c43367cb27.jpg", "http://yanxuan.nosdn.127.net/03e3c3ccb5c2c345edd2ca1cfd15d5e4.jpg", "http://yanxuan.nosdn.127.net/268fbb245fa8f60299232a05495aea43.jpg", "http://yanxuan.nosdn.127.net/65cf4ea308f66fbb598fdbcdda423089.jpg", "http://yanxuan.nosdn.127.net/71f26262e4977e2cda54ec7108d16b07.jpg", "http://yanxuan.nosdn.127.net/3e11dd968edfad371d2282fcbb2f6564.jpg", "http://yanxuan.nosdn.127.net/fa7a20fbfee2e058d5f99f9d2c385ade.jpg", "http://yanxuan.nosdn.127.net/af16d66eafcb96a36544bbd13582a35f.jpg", "http://yanxuan.nosdn.127.net/f83b23c5090807f897a80671d3eafbc1.jpg", "http://yanxuan.nosdn.127.net/ac983bffae736081487e24e9623ab97a.jpg", "http://yanxuan.nosdn.127.net/ddf740b44e6c5eaae9d4814ab4f200a0.jpg", "http://yanxuan.nosdn.127.net/d4cb72df050334c761a6472b210da0b1.jpg", "http://yanxuan.nosdn.127.net/e99580257d9123cbf4477c694524ec7e.jpg", "http://yanxuan.nosdn.127.net/6f48ef6e928572e0c81cd3c6ef6d7218.jpg", "http://yanxuan.nosdn.127.net/50c063cdb6ce9c06660b37f575cf95e3.jpg", "http://yanxuan.nosdn.127.net/672d611b80b5b3da613939a6998a586d.jpg", "http://yanxuan.nosdn.127.net/80aba6205f11d38bf9371d47f4770605.jpg", "http://yanxuan.nosdn.127.net/93c8eaf5d80bc730e37145fde39ecb70.jpg", "http://yanxuan.nosdn.127.net/91afa341060c5adf72de9ae0fa089e68.jpg", "http://yanxuan.nosdn.127.net/986766fe6c56a268d8db2ff2bab52019.jpg", "http://yanxuan.nosdn.127.net/da1ff4b89e1c73bd27e4083190271a1b.jpg", "http://yanxuan.nosdn.127.net/2b96ecfd734cac34aa9248fe6402a323.jpg", "http://yanxuan.nosdn.127.net/95272ebf6b2848d7793a530370d2ddd2.jpg", "http://yanxuan.nosdn.127.net/0efdcf6ce3f55541f19a38cee0f36a5f.jpg", "http://yanxuan.nosdn.127.net/b2c14a7ff5245330c8887254a984556c.jpg", "http://yanxuan.nosdn.127.net/fff62f28af693cc169deb9b2e418c390.jpg", "http://yanxuan.nosdn.127.net/59fc21c25e44cf7cfdb0b5084b710764.jpg", "http://yanxuan.nosdn.127.net/82c27970c2d5ca5b4215a10ccc1d15c0.jpg", "http://yanxuan.nosdn.127.net/80780ab12aa5cb6ed7984bcf8a89d9f9.jpg"],
		"inventory": [96, 904, 310],
		"information": [{
			"attrName": "颜色",
			"attrValue": "牛皮棕/浅灰"
		}, {
			"attrName": "尺寸",
			"attrValue": "小号：10×10×21cm 中号：16×16×29cm 大号：20×20×38cm"
		}],
		"label": "",
		"manufacture": "",
		"sale": 120,
		"date": "1500012650530",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149041,
		"price": 69,
		"topName": "手工吹制 金属束边玻璃花瓶",
		"subName": "金属元素碰撞，脱俗工业风",
		"shortDescription": ["两种材质", "巧妙结合", "波纹瓶身", "神秘灵动", "厚底锻造", "结实稳固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/3a1eab33ff53754ac9855fe8ad8a9d8a.jpg", "http://yanxuan.nosdn.127.net/c96470aa82bb440d1c624959114a75db.jpg", "http://yanxuan.nosdn.127.net/3eaaa9b0211c8c36b121ad846deb4b95.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/652b7c9c70d085dfb7e19cf9f8b23bb0.png", "http://yanxuan.nosdn.127.net/d1db2f191cc5f66aab70422abffc4252.jpg", "http://yanxuan.nosdn.127.net/7f7f071f4a1adc1e30f5d340f97e7be7.jpg", "http://yanxuan.nosdn.127.net/9df528479854b59b57dd7addbec2ee0d.jpg", "http://yanxuan.nosdn.127.net/00570198917ce05c2bd00426c012b424.jpg"],
		"types": ["广口", "窄口"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/20e0321cf71f00bfd393735c453f479a.jpg", "http://yanxuan.nosdn.127.net/c0b1eb97411b77f74f70410858d8a99e.jpg", "http://yanxuan.nosdn.127.net/a3ef2c1ce24493c723b907a9db2e6de1.jpg", "http://yanxuan.nosdn.127.net/4dd3d797fc72695fe5e6488e109e3533.jpg", "http://yanxuan.nosdn.127.net/cdca38544424f8145e50c9d2e5365a02.jpg", "http://yanxuan.nosdn.127.net/8fbedf8a92ee87b3dd5636b798b2710d.jpg", "http://yanxuan.nosdn.127.net/8a64271217c99c402cc2b9180a2500f3.jpg", "http://yanxuan.nosdn.127.net/ed523cf43939ad457541a4410094c200.jpg", "http://yanxuan.nosdn.127.net/be15f65f0c8b2d7209f15dd071eeddd8.jpg", "http://yanxuan.nosdn.127.net/7aaa53b78ce8c75216a2cb754cecb5ba.jpg", "http://yanxuan.nosdn.127.net/24eb584d6cc4fcc43bff44fcd05faf0f.jpg", "http://yanxuan.nosdn.127.net/2088cb3d8a9280b61c6e615f2f81d05e.jpg", "http://yanxuan.nosdn.127.net/4aa4127ff5c54717172a77d25d269495.jpg", "http://yanxuan.nosdn.127.net/9bd51511dd238a70daad5a97ce391ae4.jpg", "http://yanxuan.nosdn.127.net/a58fe49119de8791b332a997c4539c56.jpg", "http://yanxuan.nosdn.127.net/53fd022215860ab1ad3766f93075f7b8.jpg", "http://yanxuan.nosdn.127.net/a7c725cfcecaebcca1246103c3070e0c.jpg", "http://yanxuan.nosdn.127.net/d62532c161dc48e6e2fa04f6a56be182.jpg", "http://yanxuan.nosdn.127.net/641d2aaba36c5dd34852ede6c8bba975.jpg", "http://yanxuan.nosdn.127.net/269a938bb0f13918f31042ea04a7f113.jpg", "http://yanxuan.nosdn.127.net/7c4c36696bf8e5e8b2acef623291d8ee.jpg", "http://yanxuan.nosdn.127.net/465034cc023b5965d0a349babee20642.jpg", "http://yanxuan.nosdn.127.net/3c378de5ae5cf1f6ea5f1526f1200df8.jpg", "http://yanxuan.nosdn.127.net/1b76f075e6ee1af1efb6a0e01a9ceebd.jpg", "http://yanxuan.nosdn.127.net/0046488b17d64f29a4bd69f9d0737c55.jpg", "http://yanxuan.nosdn.127.net/2af5194ffe094b7e65b8dddc0f451045.jpg", "http://yanxuan.nosdn.127.net/2e5002525f98e80dc4a5a4831df388bd.jpg", "http://yanxuan.nosdn.127.net/c9060321d97e2c91f248abe29d733126.jpg", "http://yanxuan.nosdn.127.net/e159fb44f36c2c1109d52b4814531219.jpg", "http://yanxuan.nosdn.127.net/38775fff1c2484b9a6806e0974388452.jpg", "http://yanxuan.nosdn.127.net/90991aac318f660d904d63d7ca009ed3.jpg", "http://yanxuan.nosdn.127.net/3d93a096c37671adb1e02f8969ffa564.jpg", "http://yanxuan.nosdn.127.net/5a6fef64579757c989e31547ce82ec24.jpg", "http://yanxuan.nosdn.127.net/883475fb90eb1b8e3213342e71d91216.jpg", "http://yanxuan.nosdn.127.net/a7cd5bd1a585adb6d07a0a8fcf77ceca.jpg", "http://yanxuan.nosdn.127.net/cb120293c8600933e8d90e3045f86dfe.jpg", "http://yanxuan.nosdn.127.net/9305df89ffdedd0ef62af756298f8c9e.jpg", "http://yanxuan.nosdn.127.net/46d84d7a1bdcda042f012365a9dd7840.jpg", "http://yanxuan.nosdn.127.net/98b1dac7585b606210caa5cbeca44a21.jpg", "http://yanxuan.nosdn.127.net/9e2dcf8b78056dda2df86798fb2dfd8f.jpg", "http://yanxuan.nosdn.127.net/14dac131e55963bf12748fb67355dc54.jpg", "http://yanxuan.nosdn.127.net/d76187903be593b03c9bf06e7c0e7df3.jpg", "http://yanxuan.nosdn.127.net/7612decf34cf8608c769ef632d33961a.jpg", "http://yanxuan.nosdn.127.net/10d637963ea664070942c846241b10e5.jpg", "http://yanxuan.nosdn.127.net/8ee6a7203d984d91ee3226b8f974389a.jpg", "http://yanxuan.nosdn.127.net/f79579aece460bf25b7100a9fdfe79de.jpg", "http://yanxuan.nosdn.127.net/2e9447430c54a6d8f6925a9431ade324.jpg", "http://yanxuan.nosdn.127.net/b7651361914939087c491cb670386275.jpg", "http://yanxuan.nosdn.127.net/35adccb6bd10530ef6b77c55eb7ecd58.jpg", "http://yanxuan.nosdn.127.net/d7590cc1ae9a2af40de25fb60df269d3.jpg", "http://yanxuan.nosdn.127.net/02bdc83439ef5b4848ab8ea1baa41679.jpg", "http://yanxuan.nosdn.127.net/89a0cb0553438d75a9a9a9bec9839020.jpg", "http://yanxuan.nosdn.127.net/061ef490c9988ae65630f38cd9a9978e.jpg", "http://yanxuan.nosdn.127.net/ccfd26d68229d39d716ba667e0f1397d.jpg", "http://yanxuan.nosdn.127.net/d2cf3547405c30a6b5cb0f69c6dfc48c.jpg", "http://yanxuan.nosdn.127.net/0799bdaf8127e2dca8d217f6117fb538.jpg", "http://yanxuan.nosdn.127.net/71971ae57c2c3b582c0cc9f5d7134a8a.jpg", "http://yanxuan.nosdn.127.net/f6460b709ae81235bf233fd71fac5cd1.jpg", "http://yanxuan.nosdn.127.net/db408b9d1660234990feb71182dd547a.jpg"],
		"inventory": [893, 16],
		"information": [{
			"attrName": "材质",
			"attrValue": "玻璃+金属"
		}, {
			"attrName": "规格",
			"attrValue": "广口/窄口"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 173,
		"date": "1500012653478",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149040,
		"price": 69,
		"topName": "手工吹制 简约玻璃花瓶",
		"subName": "清透简约，居室百搭",
		"shortDescription": ["手工开口", "追求细节", "冷斑效果", "精致迷人", "冰晶厚底", "大气稳固"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e550844232c08e67d6919553830cc279.jpg", "http://yanxuan.nosdn.127.net/3e0049ddcbdef946f951b527cfaa6cf9.jpg", "http://yanxuan.nosdn.127.net/abc3f98d8deb47d055fd302a4467544e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/36174f25bbd350494fd32ebc0c174886.png", "http://yanxuan.nosdn.127.net/885ecd8ec59aa3e4df8e6d3bc6cbf945.jpg", "http://yanxuan.nosdn.127.net/d1a2c9474250874899c8e6a962893a9a.jpg", "http://yanxuan.nosdn.127.net/d3b67279f6468948aa0ae119ff613c19.jpg", "http://yanxuan.nosdn.127.net/9f96dc66f7eb336e3da423755d92e31b.jpg"],
		"types": ["透明"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/d69ed5e2d8af09b3d4c29a691b008de8.jpg", "http://yanxuan.nosdn.127.net/13a5f9bed4bc6446d047d12512f6870a.jpg", "http://yanxuan.nosdn.127.net/f53ece8cb40186bf681d7abd911004fa.jpg", "http://yanxuan.nosdn.127.net/236a7a4e50e7e4c14ea70ce132982e3b.jpg", "http://yanxuan.nosdn.127.net/6de2d17171916e88ba4b9119ece0d1f9.jpg", "http://yanxuan.nosdn.127.net/b56540b7479beb047b712d65c82c5420.jpg", "http://yanxuan.nosdn.127.net/f8b9e469dad8b22443b471b4a903f901.jpg", "http://yanxuan.nosdn.127.net/9dc4e241a82bfabfa25106962ad5e10f.jpg", "http://yanxuan.nosdn.127.net/2ba9c5c3bbdf9fb9ca726470225d8563.jpg", "http://yanxuan.nosdn.127.net/a973d289fe430bfe76ed02f19bed9c25.jpg", "http://yanxuan.nosdn.127.net/a911f4d8e851451eb678984427f0b90e.jpg", "http://yanxuan.nosdn.127.net/8f76a8b63f692a22251157ec74b1fdf4.jpg", "http://yanxuan.nosdn.127.net/38650eafd0f0bdafabdccb653e0b638b.jpg", "http://yanxuan.nosdn.127.net/d7aea6fbb64de80016cf7eb944d09d14.jpg", "http://yanxuan.nosdn.127.net/09bbc634de20674f7da9c2f8ed7dea5c.jpg", "http://yanxuan.nosdn.127.net/613a6be1e39c0c366825029ff384b41f.jpg", "http://yanxuan.nosdn.127.net/4df9ea5d7111d3b35da193cbbac8cd74.jpg", "http://yanxuan.nosdn.127.net/9e83fe0a28a0076fadd05ce7f17fe85b.jpg", "http://yanxuan.nosdn.127.net/fe28f29d067491de77db14ca5cfb9b05.jpg", "http://yanxuan.nosdn.127.net/fb6c0d723616d4f54fbbed7f0bedd7d4.jpg", "http://yanxuan.nosdn.127.net/d40196ea330ec5900d3ed64f9aa06820.jpg", "http://yanxuan.nosdn.127.net/822b0f0ac895ef9ccb21a68bcfbc8a3e.jpg", "http://yanxuan.nosdn.127.net/1056b948b01a690c719afd4980e2ae33.jpg", "http://yanxuan.nosdn.127.net/b9475e45adc79a680e0e76460cd01536.jpg", "http://yanxuan.nosdn.127.net/62c17c15f0ade25f4a54fcc71cc1a2a2.jpg", "http://yanxuan.nosdn.127.net/48e197921eadbf0c61c013e2ce2cf84d.jpg", "http://yanxuan.nosdn.127.net/b248658306caf3d272297a0b803f6081.jpg", "http://yanxuan.nosdn.127.net/082104f6cd93de7a881939b79bf76d47.jpg", "http://yanxuan.nosdn.127.net/1ec4ab184a241f1279a086783c4bc22d.jpg", "http://yanxuan.nosdn.127.net/e58fa225afbf4d73ace38288522692a2.jpg", "http://yanxuan.nosdn.127.net/1ffc3896fe725857b2db53e7cb1b8ded.jpg", "http://yanxuan.nosdn.127.net/8f540fe31352acdcb8be27f69cd9cab1.jpg", "http://yanxuan.nosdn.127.net/535ea410f9ca521d733ca8646990d51a.jpg", "http://yanxuan.nosdn.127.net/e1394493849be8b4082476230a3b8826.jpg", "http://yanxuan.nosdn.127.net/d6118c253e7477ee13177417c83fff32.jpg", "http://yanxuan.nosdn.127.net/bd7d95251ae0ce3683743e063f9df526.jpg", "http://yanxuan.nosdn.127.net/d3d93b0491186b605fc4d8ecfe37e714.jpg", "http://yanxuan.nosdn.127.net/ad4141c51b3ff473187fa1ac818e2893.jpg", "http://yanxuan.nosdn.127.net/f39238790fd98c9a569864bc5568f094.jpg", "http://yanxuan.nosdn.127.net/a5b4d1fcac52ea4e46dfe2001a9f351e.jpg", "http://yanxuan.nosdn.127.net/5d358927f954ed6cac557fe7dc11ebe5.jpg", "http://yanxuan.nosdn.127.net/b35c824114b846e242382da1be45dbbd.jpg", "http://yanxuan.nosdn.127.net/3633cf6bdffaada72e10661b8f593e96.jpg", "http://yanxuan.nosdn.127.net/b823be6601916a4b09cdbaa56368fe56.jpg", "http://yanxuan.nosdn.127.net/f2449e4940620b64aacb31c9ab7423c2.jpg", "http://yanxuan.nosdn.127.net/a140a402991682907b4a4cdfead8757c.jpg", "http://yanxuan.nosdn.127.net/4db24e9b4db54bbcbb39a9d6d8e85705.jpg", "http://yanxuan.nosdn.127.net/69ea8b0e0cc769c9fe3d4659cb6e1b46.jpg", "http://yanxuan.nosdn.127.net/6aca6a8187754b13df6ff80ad373ac25.jpg", "http://yanxuan.nosdn.127.net/0919344571077a9489e70885473d36de.jpg", "http://yanxuan.nosdn.127.net/f4fc5d484f0ed3a9dcbc84341bc31eb8.jpg", "http://yanxuan.nosdn.127.net/c897637ecb7f145cabecf252888784de.jpg", "http://yanxuan.nosdn.127.net/99f5b18461d5735f28e7dc69c41dec12.jpg", "http://yanxuan.nosdn.127.net/78c070b7a55b566effa91e1fe376014b.jpg", "http://yanxuan.nosdn.127.net/b3a7bd2ec896501ef853bd3d69127bb8.jpg", "http://yanxuan.nosdn.127.net/5334ca0985f1ad2de7c82d5419284daa.jpg", "http://yanxuan.nosdn.127.net/a5c9e3a92dd5c0c3949b56d580a322dd.jpg", "http://yanxuan.nosdn.127.net/cd1c75f16406a6250a5286406a73af21.jpg"],
		"inventory": [681],
		"information": [{
			"attrName": "颜色",
			"attrValue": "透明"
		}, {
			"attrName": "材质",
			"attrValue": "玻璃"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 704,
		"date": "1500012656272",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149038,
		"price": 79,
		"topName": "手工吹制 多边玻璃花瓶",
		"subName": "冰晶厚底，多边复古造型",
		"shortDescription": ["细腻竖纹", "别具匠心", "匠人吹制", "一丝不苟", "手工开口", "圆润饱满"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b3c2f45d059f5f01d7923d8ada9abae7.jpg", "http://yanxuan.nosdn.127.net/fcd1943e7252271b7d257ebd683edb31.jpg", "http://yanxuan.nosdn.127.net/350da0766b9c04d912e1e940ba126b2a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/20a314fa1eeda0eab52105bab5f0accb.png", "http://yanxuan.nosdn.127.net/06fde28cf3646a0dd2536db533fe7aa5.jpg", "http://yanxuan.nosdn.127.net/7474e570b75181f759bf878d65c45211.jpg", "http://yanxuan.nosdn.127.net/dba77d29e16dc9b8ad68b1248ff4cbe2.jpg", "http://yanxuan.nosdn.127.net/964bf17837a961bd2b599ab27da02c3e.jpg"],
		"types": ["小号", "大号"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/3a2981e5fb2301bc52774a25bd28213c.jpg", "http://yanxuan.nosdn.127.net/302a97f3837a78499cae18e3b85244ca.jpg", "http://yanxuan.nosdn.127.net/be8e096ba3810c7f1bc1778eeb3e331f.jpg", "http://yanxuan.nosdn.127.net/245059f84179912941240b2218539863.jpg", "http://yanxuan.nosdn.127.net/5776d39ad1a14bdd1556866af05a7631.jpg", "http://yanxuan.nosdn.127.net/1d90095960964a4af9dd740f10c91c5c.jpg", "http://yanxuan.nosdn.127.net/8a175f5bce56cd37ff9fb9ceb0ac00cf.jpg", "http://yanxuan.nosdn.127.net/f9dfb2a0f939b5625f8e3b8c8b6b46b1.jpg", "http://yanxuan.nosdn.127.net/2919bb275c985e136e207b6781b64756.jpg", "http://yanxuan.nosdn.127.net/b21ffcf9b567031ca9ee060a3bdba647.jpg", "http://yanxuan.nosdn.127.net/a83e2930b0c168c58a49124f44d5233b.jpg", "http://yanxuan.nosdn.127.net/f65d0213a2c533f46fb8d3f41f81e851.jpg", "http://yanxuan.nosdn.127.net/1d038cb206f0daf44c321f0657ea0cd7.jpg", "http://yanxuan.nosdn.127.net/b51b920109bbdb91dbaad869fc518410.jpg", "http://yanxuan.nosdn.127.net/bd4fad2fffa90305e19c3c3ff5066b2d.jpg", "http://yanxuan.nosdn.127.net/adc685480c11d832c1448c133e9e7679.jpg", "http://yanxuan.nosdn.127.net/58936e11911a6fd36a6bb38f2c272ebe.jpg", "http://yanxuan.nosdn.127.net/d09661ec63b39a60df6c5e12a9dfb92f.jpg", "http://yanxuan.nosdn.127.net/4b9cd61b4f74ca77ad9cf0b6345d75fb.jpg", "http://yanxuan.nosdn.127.net/440348d2306d93d3fb06fef4d839ed06.jpg", "http://yanxuan.nosdn.127.net/24637f7a7301e6a2cbac8a44b8fe318e.jpg", "http://yanxuan.nosdn.127.net/8c69dcb6ff4ca6087165f45f3a91a0cd.jpg", "http://yanxuan.nosdn.127.net/bc6260dad9d528d170478bc6ebdc7cb3.jpg", "http://yanxuan.nosdn.127.net/fae294e06547b7fb2921014b521afa19.jpg", "http://yanxuan.nosdn.127.net/825b8b31c147a2d5dbad0355b6d5478b.jpg", "http://yanxuan.nosdn.127.net/bd56e7e6cc43d6edfa16dd40c0abfed9.jpg", "http://yanxuan.nosdn.127.net/3ab05d1643c7c4f5ab423d3eaf6bfb68.jpg", "http://yanxuan.nosdn.127.net/66dfbd1a77a153fc886ebd082bca8ba1.jpg", "http://yanxuan.nosdn.127.net/ee228062a1b65b363ed0ecb59fe5c7d4.jpg", "http://yanxuan.nosdn.127.net/86881f26ac298a245e65d6fd52a1d338.jpg", "http://yanxuan.nosdn.127.net/7052c417f153528834240328fb8908bd.jpg", "http://yanxuan.nosdn.127.net/ca4802874c0add2cc387cfa38735e07e.jpg", "http://yanxuan.nosdn.127.net/a9a4502e2c7560133106def859d08c52.jpg", "http://yanxuan.nosdn.127.net/646886b3527a12f45e0f386b143ea4a9.jpg", "http://yanxuan.nosdn.127.net/71ee0f0950381c6589ce817629337d25.jpg", "http://yanxuan.nosdn.127.net/d92a75e0d5c36f868500d27cb4387ba2.jpg", "http://yanxuan.nosdn.127.net/ec39987ec5839177c726572e9e8ccb2c.jpg", "http://yanxuan.nosdn.127.net/d43cf0ad18642bec845867d5292c380f.jpg", "http://yanxuan.nosdn.127.net/a9fe36cf447e3754510e06b633d9ea2c.jpg", "http://yanxuan.nosdn.127.net/74ef0588f894813c63b0b30da665430f.jpg", "http://yanxuan.nosdn.127.net/bd1653686154d442ae4b14f060bfa3ee.jpg", "http://yanxuan.nosdn.127.net/8ce4b42f49b0df02a56125bdd6b75914.jpg", "http://yanxuan.nosdn.127.net/5be33c7a4edbaf58e8c5d4765cc97064.jpg", "http://yanxuan.nosdn.127.net/bd3c3c5de4c79400b02ae14bb5e42e01.jpg", "http://yanxuan.nosdn.127.net/e16688f50241e70bd1da70f2156f62d0.jpg", "http://yanxuan.nosdn.127.net/12869226855848d3a7563ec979f230dc.jpg", "http://yanxuan.nosdn.127.net/34327d8dd727484be0178434f73c87d6.jpg", "http://yanxuan.nosdn.127.net/bc8f3db9707ab82211ea9d1d6b9a248d.jpg", "http://yanxuan.nosdn.127.net/057d967aae5203b63ce4d78d7292e17b.jpg", "http://yanxuan.nosdn.127.net/29c8d9089c0d2d557ec968c545d11a01.jpg", "http://yanxuan.nosdn.127.net/1e2dc74d0c63cc51c4a630d0f9be9dde.jpg", "http://yanxuan.nosdn.127.net/d7aec6fa07729fb3532b16260c7544ab.jpg", "http://yanxuan.nosdn.127.net/b064a42eeaf0fb652839cf243eed1ff0.jpg", "http://yanxuan.nosdn.127.net/c026526da9b63d3b748a29f436e07187.jpg", "http://yanxuan.nosdn.127.net/a7e93d6225dcf7bb39348ed638c0c856.jpg", "http://yanxuan.nosdn.127.net/8a239149831cc8f6aa7d424c314e5c8a.jpg", "http://yanxuan.nosdn.127.net/369a58949b69146f562a47167b55d91c.jpg", "http://yanxuan.nosdn.127.net/778460c89288abb1ae8983a088f06da9.jpg", "http://yanxuan.nosdn.127.net/e108e9438b1ff73258f129c2d1b60e9c.jpg"],
		"inventory": [889, 363],
		"information": [{
			"attrName": "产品颜色",
			"attrValue": "烟灰"
		}, {
			"attrName": "产品规格",
			"attrValue": "小号/大号"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 998,
		"date": "1500012659167",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149039,
		"price": 69,
		"topName": "手工吹制 灯泡玻璃花瓶",
		"subName": "圆萌外貌，精巧造型",
		"shortDescription": ["手工开口", "饱满圆润", "光滑瓶身", "细节取胜", "匠人吹制", "灵魂设计"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e37f79576eb0ed11764adb4e142eaacf.jpg", "http://yanxuan.nosdn.127.net/f78ed17592cf4229a3312f28f3734b02.jpg", "http://yanxuan.nosdn.127.net/5e1b957d36cca6c80479e6ccd7a83f37.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4d79b3c00d9bafa365f45c422111dfc3.png", "http://yanxuan.nosdn.127.net/1999b0b9b7eb09d34ff14e8a6f278722.jpg", "http://yanxuan.nosdn.127.net/4b0b0e3bbbbd4e12d491d95a00e61366.jpg", "http://yanxuan.nosdn.127.net/7bff51f8baf7a9470e8288809b97bb6e.jpg", "http://yanxuan.nosdn.127.net/27e77249025e9049e9f165b40c4719a3.jpg"],
		"types": ["琥珀", "黑色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/cd3a2139db42d40996de563149c60d2b.jpg", "http://yanxuan.nosdn.127.net/74960d69bac541d74061e6be8905f3b9.jpg", "http://yanxuan.nosdn.127.net/4fe7306692f4846a1f6e9ea572bc672d.jpg", "http://yanxuan.nosdn.127.net/c27f96d6c3f3b18104ee7d98b3234ad0.jpg", "http://yanxuan.nosdn.127.net/9cf6f7e19ffe7b1c6bec63ca9d7dbef8.jpg", "http://yanxuan.nosdn.127.net/6c0f4aaec49ac063d2c76731a11e528b.jpg", "http://yanxuan.nosdn.127.net/2b0f878d677504b69986f0a27f0f3eb5.jpg", "http://yanxuan.nosdn.127.net/68bfaedb7173b907c876bcda935aa56e.jpg", "http://yanxuan.nosdn.127.net/fb8bd1d38be41d4d2d1c02d5206d365a.jpg", "http://yanxuan.nosdn.127.net/f8416c0597362df70b316952f17e0b17.jpg", "http://yanxuan.nosdn.127.net/cc0da02c23d503f3eff4dc82b52b9f80.jpg", "http://yanxuan.nosdn.127.net/f5beafe45b152c717a2523f672428232.jpg", "http://yanxuan.nosdn.127.net/df3377b00a11bae2ba8d63e112dd19cc.jpg", "http://yanxuan.nosdn.127.net/f9fafef55521f934218a98f375f87397.jpg", "http://yanxuan.nosdn.127.net/78309d34babe227d960879aab7c12060.jpg", "http://yanxuan.nosdn.127.net/0713e56ab2b9c0398cf0d53df88cfcf5.jpg", "http://yanxuan.nosdn.127.net/53dfdabc071747b363500237bec6373f.jpg", "http://yanxuan.nosdn.127.net/c1d15d594b00d5ed06f7923388fe9286.jpg", "http://yanxuan.nosdn.127.net/94542570dfa3d63e44095a16448ffdb8.jpg", "http://yanxuan.nosdn.127.net/06345c13532f22c40737a5280afdfe1d.jpg", "http://yanxuan.nosdn.127.net/615b4560670ebcd8f4f8a75c25b5126f.jpg", "http://yanxuan.nosdn.127.net/47487f8ce44c8db6174f2863d0ef28c2.jpg", "http://yanxuan.nosdn.127.net/e353863e7be5cf5b5856d375549f8263.jpg", "http://yanxuan.nosdn.127.net/ec706346b38c7e46c823d6a726b26fe7.jpg", "http://yanxuan.nosdn.127.net/06b9251997e3afbdce804d0828939fed.jpg", "http://yanxuan.nosdn.127.net/68a16499ce94ea89f4a30ab6f39596a2.jpg", "http://yanxuan.nosdn.127.net/1b57fc5fa54ca451a897fbc4d1606ce1.jpg", "http://yanxuan.nosdn.127.net/6e260b2050b3c0095fee916aa9fb3d28.jpg", "http://yanxuan.nosdn.127.net/89fe80804196b3899c529c6a60bce4dc.jpg", "http://yanxuan.nosdn.127.net/28649c742793eebb7f6981ded1bd4489.jpg", "http://yanxuan.nosdn.127.net/fd41f2c2b540cd82c751e8bc5a176a14.jpg", "http://yanxuan.nosdn.127.net/b4f512c1a5e0fa4c3d2a42cfb95b3b85.jpg", "http://yanxuan.nosdn.127.net/a74e16bdfc93031ba98af4c1f61378bf.jpg", "http://yanxuan.nosdn.127.net/42ee164960c58562008e646c8b266c98.jpg", "http://yanxuan.nosdn.127.net/535aeebe416c1cb7d6ba9aa7e4d0bfb8.jpg", "http://yanxuan.nosdn.127.net/0d311de4a37ffa04f42c148c1817cc7c.jpg", "http://yanxuan.nosdn.127.net/0a5b593567464cf2e40a0e3b8403574f.jpg", "http://yanxuan.nosdn.127.net/2dd7288411e04eaac4605ad023ea0083.jpg", "http://yanxuan.nosdn.127.net/cdd755d5eb7ef8551d2e87242dab1ee8.jpg", "http://yanxuan.nosdn.127.net/b5e3fcb24e18c25f89121a9640269b0f.jpg", "http://yanxuan.nosdn.127.net/ea00bcf2411e946e55dd0a55b5f70d07.jpg", "http://yanxuan.nosdn.127.net/41f0096b966d79c0409fbcab471da03c.jpg", "http://yanxuan.nosdn.127.net/d94070e7e28b2e1425ec04ef0d199430.jpg", "http://yanxuan.nosdn.127.net/c023b908e5e9c8dd83617da327983942.jpg", "http://yanxuan.nosdn.127.net/ce8a59e5c142a36fd475e839c9ea2cad.jpg", "http://yanxuan.nosdn.127.net/72dc5c5560004e6c0db7099bc64b238b.jpg", "http://yanxuan.nosdn.127.net/85ceafe4054013012c6b9e5ee541ba3b.jpg", "http://yanxuan.nosdn.127.net/b6146adbe4db7d82e34e3f2ddda15ea9.jpg", "http://yanxuan.nosdn.127.net/c9d59b400e5f6fde22e6fbb208c13980.jpg", "http://yanxuan.nosdn.127.net/7d85d4ff1f8b88e07efd1e12d59c0807.jpg", "http://yanxuan.nosdn.127.net/a448aad86e313bc09ddeed9e64b6441a.jpg", "http://yanxuan.nosdn.127.net/68ea0308444693e45c7e6b26eb536e6f.jpg", "http://yanxuan.nosdn.127.net/614ce5ca0353820e0cc2ba033f1a4d61.jpg", "http://yanxuan.nosdn.127.net/92a4e40e55f64de62d26bf1711332d79.jpg", "http://yanxuan.nosdn.127.net/d6460f791b2f8b9e346588614f1a536d.jpg", "http://yanxuan.nosdn.127.net/56ad003c9df65dea88c519d26f14c241.jpg", "http://yanxuan.nosdn.127.net/a6fc9bb8b686c776ef38d19474e896e1.jpg", "http://yanxuan.nosdn.127.net/08c561746b59a5abad8a4143bf168cc9.jpg"],
		"inventory": [394, 72],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黑色/琥珀"
		}, {
			"attrName": "材质",
			"attrValue": "玻璃"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 86,
		"date": "1500012661979",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149037,
		"price": 35,
		"topName": "圆柱陶瓷花瓶",
		"subName": "蜡光釉面炻瓷，光润细腻",
		"shortDescription": ["蜡光釉面", "低调华丽", "质地坚韧", "牢固耐摔", "安全材质", "优质环保"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/801958590b315319fd87831a557c2e29.png", "http://yanxuan.nosdn.127.net/a804f87b012928d843bce957a54d9360.png", "http://yanxuan.nosdn.127.net/4b9f80d9d7cf772fec3cafce7d6afbbe.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/5abe809f3824172f35e90e604c96da49.png", "http://yanxuan.nosdn.127.net/ed070046f840afb73f678615bdde02ab.jpg", "http://yanxuan.nosdn.127.net/0ee340041626b4fb2201035fb81c1124.jpg", "http://yanxuan.nosdn.127.net/4ca5f96e5ab9ecb9f98c62d8e61468c0.jpg", "http://yanxuan.nosdn.127.net/b21953dfe8157dcee775136f36a7493c.jpg"],
		"types": ["浅灰", "粉色", "黑色", "杏色"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/b9e1df212b49d5e8905c855648bec583.jpg", "http://yanxuan.nosdn.127.net/3efc49d43e072a920f33bac32af3a786.jpg", "http://yanxuan.nosdn.127.net/3067925c84a9d8e17cc68260636105e0.jpg", "http://yanxuan.nosdn.127.net/cee6b125a4eb4a829f053a2d1b97f456.jpg", "http://yanxuan.nosdn.127.net/2f37ca16fbd3982206963a0e7536c60b.jpg", "http://yanxuan.nosdn.127.net/8563d7e460ddd7348c7ceb669e803077.jpg", "http://yanxuan.nosdn.127.net/7c68492eba9f7165480a25ddd89cdbe5.jpg", "http://yanxuan.nosdn.127.net/3f96576174cacbbbd030d19c3750fd05.jpg", "http://yanxuan.nosdn.127.net/f06da4c212d2aed849bf8f9712b207fd.jpg", "http://yanxuan.nosdn.127.net/07a051fb517269a7c40af798cf948691.jpg", "http://yanxuan.nosdn.127.net/ca0252795b2ae6f2aa3aaf546e1d6be0.jpg", "http://yanxuan.nosdn.127.net/d42e10449b34fc4cbe3aa764a7cab63c.jpg", "http://yanxuan.nosdn.127.net/572235c606ccf7ab2409b23351e83ed7.jpg", "http://yanxuan.nosdn.127.net/ec83c1f13eadbf4a4b67b62b74464c31.jpg", "http://yanxuan.nosdn.127.net/7e6ffb9feed9ffcff08828b05329eea4.jpg", "http://yanxuan.nosdn.127.net/a84995bcc8ee826faeefb47070f737a1.jpg", "http://yanxuan.nosdn.127.net/c1f8d6d75693345e64fb5039f8a6f782.jpg", "http://yanxuan.nosdn.127.net/1b475dc1164658bf93445ccdf6337c7c.jpg", "http://yanxuan.nosdn.127.net/8ca71ef412fd6989d93ecf1856c4dd55.jpg", "http://yanxuan.nosdn.127.net/d5a45d82c0feb9f00f9d1a7c1d7930f0.jpg", "http://yanxuan.nosdn.127.net/2280b96146f90d8da90290bd08225af9.jpg", "http://yanxuan.nosdn.127.net/706c1bbc262f989e35bdeae78854dbb7.jpg", "http://yanxuan.nosdn.127.net/9ea2c186033bcd9d6e98de1674c235f6.jpg", "http://yanxuan.nosdn.127.net/46d5f8c0980f6a13d6c573ea2d7245d5.jpg", "http://yanxuan.nosdn.127.net/bbb8175b45a1c380bfbe469deec211e1.jpg", "http://yanxuan.nosdn.127.net/78c96ba66c0c4dfb8bd3843f3fbf4ccf.jpg", "http://yanxuan.nosdn.127.net/1a2224e3c9aec694ef6fb9a53983eabc.jpg", "http://yanxuan.nosdn.127.net/7494dfb113c6517d00feafb44ad77169.jpg", "http://yanxuan.nosdn.127.net/03ada1378435887515b9b9ea6f896a88.jpg", "http://yanxuan.nosdn.127.net/d1774a9a24382e67f73764188ee2c395.jpg", "http://yanxuan.nosdn.127.net/b0c1fc2bd1cc318458a94b268c535393.jpg", "http://yanxuan.nosdn.127.net/90bf656ab24739f8777698fa6c454689.jpg", "http://yanxuan.nosdn.127.net/cff716cf0bd4bdec9d63ab78ffad1ac4.jpg", "http://yanxuan.nosdn.127.net/4fa26cfd0fb99b43b3bcb8f01fc3321d.jpg", "http://yanxuan.nosdn.127.net/0530481ae0072601f32118f61ecc5ff7.jpg", "http://yanxuan.nosdn.127.net/cd5fa3ee39e8751f998da117155d1325.jpg", "http://yanxuan.nosdn.127.net/84d4cd7dcfe6dd929df63889734ef183.jpg", "http://yanxuan.nosdn.127.net/e4bdb07b0c55c6171e8a4d576d15f784.jpg", "http://yanxuan.nosdn.127.net/1b3a62be644db480d7cc2575a55dfca7.jpg", "http://yanxuan.nosdn.127.net/7cfc854bb06ab8b176023ad2a534b047.jpg", "http://yanxuan.nosdn.127.net/6a6a7f3c9389fea1f9ace5a198c06b91.jpg", "http://yanxuan.nosdn.127.net/861f4d84b044bf67ca222c264c6319ca.jpg"],
		"inventory": [463, 685, 447, 899],
		"information": [{
			"attrName": "产品等级",
			"attrValue": "AB级品"
		}, {
			"attrName": "产地",
			"attrValue": "广东"
		}, {
			"attrName": "规格",
			"attrValue": "粉色、浅灰、黑色、杏色"
		}, {
			"attrName": "尺寸",
			"attrValue": "中号：直径6cm*高21cm 大号：直径8cm*高25cm"
		}],
		"label": "",
		"manufacture": "",
		"sale": 901,
		"date": "1500012665668",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149042,
		"price": 39,
		"topName": "六边形陶瓷花瓶",
		"subName": "蜡光釉面炻瓷，鲜亮色泽",
		"shortDescription": ["蜡光釉面", "细腻耐磨", "安全材质", "优质环保", "质地坚韧", "牢固耐摔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/25d7c31b59ddb5754777582051b534b5.png", "http://yanxuan.nosdn.127.net/620e8fddda78e5d52bd3e3adc2fa7f46.png", "http://yanxuan.nosdn.127.net/8d4fd8657866d4d4a6cad2eefcfddfa8.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/62bad383e61acbe65e093cf92101ac98.png", "http://yanxuan.nosdn.127.net/0a41dc03d19496183a8f1799af6335fc.jpg", "http://yanxuan.nosdn.127.net/6effc0346884d40b5a19ea4f6ac07052.jpg", "http://yanxuan.nosdn.127.net/15b0377f6ccf9eb36d88b54070cbcc38.jpg", "http://yanxuan.nosdn.127.net/530f82acdce52e0123ef4d3ebd9a21e1.jpg"],
		"types": ["浅灰", "粉色", "黑色", "杏色"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/3a5d1f24223876e79867b88731dbe66e.jpg", "http://yanxuan.nosdn.127.net/04dd545f0a7feea159c2a6c8421b78a5.jpg", "http://yanxuan.nosdn.127.net/dd217d1f706519f19aba0441dac6e0d9.jpg", "http://yanxuan.nosdn.127.net/e2e29c24cc0334ce217f3d1574e405d2.jpg", "http://yanxuan.nosdn.127.net/3718273b51d251cc6579f3ce78ceab52.jpg", "http://yanxuan.nosdn.127.net/5e02d99640d565bc493aaa7e63b807c6.jpg", "http://yanxuan.nosdn.127.net/1161866f40c897914cccf623a4577c10.jpg", "http://yanxuan.nosdn.127.net/77cad08118c277e739e287129cade420.jpg", "http://yanxuan.nosdn.127.net/b01171f57a808da9c630a85e8c21251f.jpg", "http://yanxuan.nosdn.127.net/6f38511a0d56410c5d60e0151fe33e08.jpg", "http://yanxuan.nosdn.127.net/6ee5ab29706b9e3d04bccbeaca74d107.jpg", "http://yanxuan.nosdn.127.net/a50abb800000673cc4ef1b58584091a6.jpg", "http://yanxuan.nosdn.127.net/9879d4b5bd9db70aff78beecf7b1a741.jpg", "http://yanxuan.nosdn.127.net/857e5d0581f2f51587cd929a898a544a.jpg", "http://yanxuan.nosdn.127.net/fda9d8941ff270b2125d73d3d0e6831c.jpg", "http://yanxuan.nosdn.127.net/e10090981cad98cd7642497a4edd88aa.jpg", "http://yanxuan.nosdn.127.net/b11f05cb5f7fed12977103631a01b3b0.jpg", "http://yanxuan.nosdn.127.net/0f4eb9b3613fa6258aa28c0da73b4148.jpg", "http://yanxuan.nosdn.127.net/36b210d4d92b71f1f4816cd89fb770c9.jpg", "http://yanxuan.nosdn.127.net/a18b36d64a9cc3d3bd434a7de7a8f48e.jpg", "http://yanxuan.nosdn.127.net/51029f8ca270c72bd9a1c91cb54e4518.jpg", "http://yanxuan.nosdn.127.net/e401d9c548a64687c559e8e358e4de9c.jpg", "http://yanxuan.nosdn.127.net/fff5430117ff8db3befda3c563338555.jpg", "http://yanxuan.nosdn.127.net/99c4516ec2b565dec7aecdff2081b7a8.jpg", "http://yanxuan.nosdn.127.net/249b98037b6c61182caf7c4b172e7981.jpg", "http://yanxuan.nosdn.127.net/052c92a7f65aab18aad9358062e38cf0.jpg", "http://yanxuan.nosdn.127.net/ec5abf433990016a35f1f1636f81ce91.jpg", "http://yanxuan.nosdn.127.net/05478f903535ffa5ed6c36041eb763e9.jpg", "http://yanxuan.nosdn.127.net/664c03597386fda6789e2e89b83df189.jpg", "http://yanxuan.nosdn.127.net/57b106b6589eaf0b685e70ea7da67109.jpg", "http://yanxuan.nosdn.127.net/e0c28e9eaa8f92330de66be6196b647e.jpg", "http://yanxuan.nosdn.127.net/8e578f34026e62f5215203e928a9f8cf.jpg", "http://yanxuan.nosdn.127.net/a5c7f95897f3ae334486e9c2aa00f4c9.jpg", "http://yanxuan.nosdn.127.net/294fd38da19d6e870eea53e2727b20d6.jpg", "http://yanxuan.nosdn.127.net/eec8ae758d33f3a78758bffe8e146e1f.jpg", "http://yanxuan.nosdn.127.net/3d5c0bffdba1bc149ec27c86bd2cca5a.jpg", "http://yanxuan.nosdn.127.net/c0c6fc810e1665fcea299859215de78d.jpg", "http://yanxuan.nosdn.127.net/04119ed8393392080e09631cabe150c1.jpg", "http://yanxuan.nosdn.127.net/f7b1b62f2f5500fd24e705291bb8c36b.jpg", "http://yanxuan.nosdn.127.net/d507ea26c8b94948b9d8ca442a93f199.jpg", "http://yanxuan.nosdn.127.net/fe8bd862a1c23db950d25ff1a1882c5a.jpg", "http://yanxuan.nosdn.127.net/9594cdbf57bdf31e38e7e5517c1f8e4a.jpg"],
		"inventory": [502, 449, 15, 359],
		"information": [{
			"attrName": "产品等级",
			"attrValue": "AB级品"
		}, {
			"attrName": "产地",
			"attrValue": "广东"
		}, {
			"attrName": "规格",
			"attrValue": "粉色、浅灰、黑色、杏色"
		}, {
			"attrName": "尺寸",
			"attrValue": "中号：直径7.3cm*高21cm 大号：直径9cm*高25cm"
		}],
		"label": "",
		"manufacture": "",
		"sale": 67,
		"date": "1500012668657",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1158013,
		"price": 199,
		"topName": "美式经典实木照片墙",
		"subName": "新西兰进口松木，原木之风",
		"shortDescription": ["进口松木", "实木质感", "手工打磨", "细致边框", "优质透板", "清晰耐摔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/36d271148deba4183359d472887a7864.jpg", "http://yanxuan.nosdn.127.net/3abb708808a62572579829114cfa21d3.jpg", "http://yanxuan.nosdn.127.net/f1970a4ec12fb5a9112e7a0070298773.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/cdf895747870d4ddc637f697ec66520e.png", "http://yanxuan.nosdn.127.net/d4d045a319905e03c1274ab97bf91c07.png", "http://yanxuan.nosdn.127.net/90d80c4730d61d5e6e7afbe03c4cb32f.jpg", "http://yanxuan.nosdn.127.net/3f03d7b85b22d1aea6ea56fc6862b57a.jpg", "http://yanxuan.nosdn.127.net/3f8da1ee212baea2232c09d9110b6baf.jpg"],
		"types": ["胡桃木色", "原木色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/d00b82852cdf52a2e035a4f2b961adc1.jpg", "http://yanxuan.nosdn.127.net/d62ad360002f352a3320251f45e666cf.jpg", "http://yanxuan.nosdn.127.net/08a4bbeaa7fbeb306781838414b30ce9.jpg", "http://yanxuan.nosdn.127.net/4eb9db3c205692e8aeab1856515cec17.jpg", "http://yanxuan.nosdn.127.net/07643946779172939f9cb02aa3413956.jpg", "http://yanxuan.nosdn.127.net/7b23f7f82fadf31cf0141b6f69a59d3a.jpg", "http://yanxuan.nosdn.127.net/0cc8b05ea3089359dbd209d5e824a6b5.jpg", "http://yanxuan.nosdn.127.net/bbd8b36e50d03aa7b093d5b53be7f240.jpg", "http://yanxuan.nosdn.127.net/56b33a21ea860f68e7c2ce1ea9a12c5d.jpg", "http://yanxuan.nosdn.127.net/28d9e181b29e79bf42340e93a0f5fbff.jpg", "http://yanxuan.nosdn.127.net/9dc8f637194c40dcfa1d5d11feb3dbf0.jpg", "http://yanxuan.nosdn.127.net/d6439fbeb678f85afb80c4d860ec9dea.jpg", "http://yanxuan.nosdn.127.net/787b49cb82e7d1cef0071c58913702d3.jpg", "http://yanxuan.nosdn.127.net/1aeaecf8ca4a766b3f1d396cfedf20d5.jpg", "http://yanxuan.nosdn.127.net/bc31a50cc2b9bb1d785c82b635710a8a.jpg", "http://yanxuan.nosdn.127.net/356b17c9c7cc51553f3a70a93444945e.jpg", "http://yanxuan.nosdn.127.net/cf8104acb9962e349ebadff38fcf4c87.jpg", "http://yanxuan.nosdn.127.net/a446bd76b3d7f5203ed36fd7ab9d41b6.jpg", "http://yanxuan.nosdn.127.net/351b2183b9e0031d4354b70a3aa001c7.jpg", "http://yanxuan.nosdn.127.net/75213aa690aadcf8cb43a97641ad4195.jpg", "http://yanxuan.nosdn.127.net/a8e859f470722ec083b434aeb828ec58.jpg", "http://yanxuan.nosdn.127.net/21a7b36f1c71365a80a0f2a08f3d0547.jpg", "http://yanxuan.nosdn.127.net/8771da2e9de5b4ef1e220fa3844a5d8f.jpg", "http://yanxuan.nosdn.127.net/1c7348837e6f54ed372d80f2d3970c2e.jpg", "http://yanxuan.nosdn.127.net/c929c56b37c1bf2c4d839ca28beb3115.jpg", "http://yanxuan.nosdn.127.net/3199265a0f9a32c6da8189df40fde50b.jpg", "http://yanxuan.nosdn.127.net/31256adbfb4394708dd997cf8ade4396.jpg", "http://yanxuan.nosdn.127.net/dfdb715e81f0f476479e5a162a27672b.jpg", "http://yanxuan.nosdn.127.net/d47089bff94a3ffdc631338ce40b5172.jpg", "http://yanxuan.nosdn.127.net/adf29a1879bf9cc7d6b7fa61446aade7.jpg", "http://yanxuan.nosdn.127.net/9db6d499294389858417f58eb2fc7f41.jpg", "http://yanxuan.nosdn.127.net/ae3aa7f90d85cc1872504d350d3f7a24.jpg", "http://yanxuan.nosdn.127.net/06aaab6545463e10c8a481ac19442e50.jpg", "http://yanxuan.nosdn.127.net/4641b5f349d85748241621b2a37644ab.jpg", "http://yanxuan.nosdn.127.net/09cfc75939d28854599082b11941fbd9.jpg", "http://yanxuan.nosdn.127.net/402140a4fae89ec8da140336b91349e4.jpg", "http://yanxuan.nosdn.127.net/5fc035b481cb83e50da0f8e3fe147e4b.jpg", "http://yanxuan.nosdn.127.net/5b8803d16441f9dabdd5abeff3854005.jpg", "http://yanxuan.nosdn.127.net/787201c9f39e5aa8dc477304956b8f37.jpg", "http://yanxuan.nosdn.127.net/40be3c4bf3c7974aa954144957e612aa.jpg", "http://yanxuan.nosdn.127.net/4ee494efe7476df029fbe1113e813d09.jpg", "http://yanxuan.nosdn.127.net/7406d4ceb5eb38c39e3e2086e1089a3c.jpg"],
		"inventory": [210, 734],
		"information": [{
			"attrName": "颜色",
			"attrValue": "原木色/胡桃木色"
		}, {
			"attrName": "产品组合",
			"attrValue": "5寸*2+6寸*3+7寸*7+10寸*1"
		}, {
			"attrName": "照片框数",
			"attrValue": "13个"
		}, {
			"attrName": "产品内附",
			"attrValue": "安装图纸、无痕钉、小图钉、水平仪"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 844,
		"date": "1500012671620",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1194002,
		"price": 199,
		"topName": "现代极简实木照片墙",
		"subName": "精致细框，进口松木",
		"shortDescription": ["进口松木", "实木质感", "优质透板", "清晰耐摔", "手工打磨", "细致边框"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/3a931df6ccd51f587df4ca8a1a9d31b0.jpg", "http://yanxuan.nosdn.127.net/1b27f417e6df8930012ac6a6da1c2414.png", "http://yanxuan.nosdn.127.net/8db661899f4bd270b9c6f9e0c3eacdc9.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/a0053d0cc126c5c46b7deed02bf56b91.png", "http://yanxuan.nosdn.127.net/957814404b325e53975b837fb760df0e.png", "http://yanxuan.nosdn.127.net/729cdb643bb56262e0dae98c468b5017.png", "http://yanxuan.nosdn.127.net/095f748bbd70b8347ed4ed5f2a31da83.jpg", "http://yanxuan.nosdn.127.net/3299b4aa8b371df57f7db25a4f5c9881.jpg"],
		"types": ["黑白混色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/68f2feb5040b60b2ede020db0c809371.jpg", "http://yanxuan.nosdn.127.net/b9fc5b514ccbcce5bc232d1b928f3e80.jpg", "http://yanxuan.nosdn.127.net/f71b7723b3314664c61c4d1815fb59bb.jpg", "http://yanxuan.nosdn.127.net/d8784efa048e25545f73f4a3911f9192.jpg", "http://yanxuan.nosdn.127.net/a724291e9e36e648458e280caef95ad0.jpg", "http://yanxuan.nosdn.127.net/65cf92e74f2b2f1974b2d8491d09978a.jpg", "http://yanxuan.nosdn.127.net/15feec0b11545fa168f8b18d1655e92a.jpg", "http://yanxuan.nosdn.127.net/f13ff5a8b439697c13cb7c96c35f15c5.jpg", "http://yanxuan.nosdn.127.net/54dfcde88bd09adfbc33d26b46136889.jpg", "http://yanxuan.nosdn.127.net/c14a045a976fdbdcbd1ccff3108af23d.jpg", "http://yanxuan.nosdn.127.net/cc1b5c08f4953238dbf4b46289cd326f.jpg", "http://yanxuan.nosdn.127.net/5d392f86eaf785ba6b3395bb57e335aa.jpg", "http://yanxuan.nosdn.127.net/4152a00072ecbdba6290172135d779a5.jpg", "http://yanxuan.nosdn.127.net/38594a54038d6e85dd1a90b01160fc1f.jpg", "http://yanxuan.nosdn.127.net/5a86d63a3643afc8164767de329f2214.jpg", "http://yanxuan.nosdn.127.net/78e81f48ac5bdc321c21d3947fe617ee.jpg", "http://yanxuan.nosdn.127.net/b17d8fec16d4b88473e90ef9ec4275cb.jpg", "http://yanxuan.nosdn.127.net/8e440b3ac15649b9fa4b1b82c7a0e310.jpg", "http://yanxuan.nosdn.127.net/3dbfb733f1000e9084d28f4097c323d9.jpg", "http://yanxuan.nosdn.127.net/b63d988fd12af877a9f50862bc7c86d7.jpg", "http://yanxuan.nosdn.127.net/d18d14c9e24e9d3d0697841df1811979.jpg", "http://yanxuan.nosdn.127.net/8b8aa685f7ea650cc8f0f4fc8320037d.jpg", "http://yanxuan.nosdn.127.net/8dae727d2e05957d3ee7680c6ab43e34.jpg", "http://yanxuan.nosdn.127.net/925ad0842741d4c23f316d9dd25fe5f5.jpg", "http://yanxuan.nosdn.127.net/622864709d01e6aeec3893f0865e8346.jpg", "http://yanxuan.nosdn.127.net/8b8268fb35a9adb0652306114a3d5900.jpg", "http://yanxuan.nosdn.127.net/98433e96d23a0a6924cc1377bab5ffa7.jpg", "http://yanxuan.nosdn.127.net/5f7b74a9ec2b6785a4306c50297d6d96.jpg", "http://yanxuan.nosdn.127.net/df8c2592f6458d6682463f6693677884.jpg", "http://yanxuan.nosdn.127.net/38ebc911db0d638856c835f1eb27bb97.jpg", "http://yanxuan.nosdn.127.net/db40483e41fec4dc1a587ea4e6d440db.jpg", "http://yanxuan.nosdn.127.net/592ed9eb5d144a0b644663247b8c5a9f.jpg", "http://yanxuan.nosdn.127.net/bb562b33b53aef6fcb1df045b5092071.jpg", "http://yanxuan.nosdn.127.net/fb30dafdb2ffa4f21ef15bafe6af8b94.jpg", "http://yanxuan.nosdn.127.net/c5cbf229412c2f5d7522cab77ec00eeb.jpg", "http://yanxuan.nosdn.127.net/57092ed205dcc61d55184904a4b91da4.jpg", "http://yanxuan.nosdn.127.net/d75267d5caffbb19eadd04191724886b.jpg", "http://yanxuan.nosdn.127.net/238a9ea4c174abd41d42483fa453eac4.jpg", "http://yanxuan.nosdn.127.net/a68138ea0975d8843e12bdcb918c62df.jpg", "http://yanxuan.nosdn.127.net/56f51952dd72bf33086f41c30f956df2.jpg"],
		"inventory": [808],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黑白混色"
		}, {
			"attrName": "产品组合",
			"attrValue": "5寸*2+6寸*3+7寸*7+10寸*1"
		}, {
			"attrName": "照片框数",
			"attrValue": "13个"
		}, {
			"attrName": "产品内附",
			"attrValue": "安装图纸、无痕钉、小图钉、水平仪"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 217,
		"date": "1500012674471",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1159011,
		"price": 19.9,
		"topName": "美式实木相框",
		"subName": "美式经典，新西兰进口松木",
		"shortDescription": ["背部挂钩", "支持挂置", "进口松木", "优质精品", "高透明板", "清晰防摔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/20f6e72987db464058630de52d2a9553.jpg", "http://yanxuan.nosdn.127.net/110e90b385e49fb0e41e8a9ed0d8be18.jpg", "http://yanxuan.nosdn.127.net/2fd7b335b4958986ace303d67bdbff10.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/08499d743979c49d1526a2271705e5a9.png", "http://yanxuan.nosdn.127.net/66a55c454641430a84a5526fe9f97355.jpg", "http://yanxuan.nosdn.127.net/0ad5e023b6dc62f5c978d1038b1a42d9.jpg", "http://yanxuan.nosdn.127.net/d878792fb0152fe35f72e3b8b4b1852f.jpg", "http://yanxuan.nosdn.127.net/dc573f238355bbd8f4cf88f2b699e700.jpg"],
		"types": ["胡桃木色", "原木色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/24804c5cd9d38242d69c178ba6bf92cf.jpg", "http://yanxuan.nosdn.127.net/ce4ad41d0663923414d42b2e346beb08.jpg", "http://yanxuan.nosdn.127.net/f79f745bf928b3d477f5314850433ede.jpg", "http://yanxuan.nosdn.127.net/e5f36f1c08710370769c4bba3713c7b0.jpg", "http://yanxuan.nosdn.127.net/60700e200511b8cc40cd1531491d4bd0.jpg", "http://yanxuan.nosdn.127.net/dda3e0731c8b6681411204eb79e51e99.jpg", "http://yanxuan.nosdn.127.net/40934871c889a7584ee3e414b79f373e.jpg", "http://yanxuan.nosdn.127.net/0f8c3897ce0a6f111097bb2557336ec2.jpg", "http://yanxuan.nosdn.127.net/2144507eecf9919b845356570480ad07.jpg", "http://yanxuan.nosdn.127.net/7d2a686d0c23783d58fd07b66b76f5f7.jpg", "http://yanxuan.nosdn.127.net/3ec6a7b021dfbe231f2905c4afe287eb.jpg", "http://yanxuan.nosdn.127.net/13eb97e5f00b8092f47be7847e3f9d58.jpg", "http://yanxuan.nosdn.127.net/5bd7541e1ceae50f757e5cbc9b7d3175.jpg", "http://yanxuan.nosdn.127.net/d72d0684ba9747508cf58de54ac2d30e.jpg", "http://yanxuan.nosdn.127.net/5d73361e2d894c8e0b560fe171f6f998.jpg", "http://yanxuan.nosdn.127.net/866f9ef2804dcb87a72bf681c36a2127.jpg", "http://yanxuan.nosdn.127.net/ac682870380418570add7218706a0459.jpg", "http://yanxuan.nosdn.127.net/e2ff1aff4c423f89da6e82cb10c4300e.jpg", "http://yanxuan.nosdn.127.net/8eb150087461176aced3a584664c09d1.jpg", "http://yanxuan.nosdn.127.net/abf42e63becfe25905071462f8f91068.jpg", "http://yanxuan.nosdn.127.net/453aa28fe8972147bf381255808988c9.jpg", "http://yanxuan.nosdn.127.net/df416fde84f96c6b86d50cbe1759d8df.jpg", "http://yanxuan.nosdn.127.net/03a9f56899e80cca4c4fc3e847fa4eb2.jpg", "http://yanxuan.nosdn.127.net/65186839e90ae8290edbefeec326a35e.jpg", "http://yanxuan.nosdn.127.net/9e3b6df500b27302b94fec3db151bac6.jpg", "http://yanxuan.nosdn.127.net/d0e9adf7204aa30a9ba8974d4ba39918.jpg", "http://yanxuan.nosdn.127.net/aefc3f59031ce3bad76d35eb3e47da2f.jpg", "http://yanxuan.nosdn.127.net/e15681b1f110df661cc344dd82531403.jpg", "http://yanxuan.nosdn.127.net/bc3b3ec39f9af7d88c0e61caa6415bc1.jpg", "http://yanxuan.nosdn.127.net/f282be0b925cf72271991d35e453bfbd.jpg", "http://yanxuan.nosdn.127.net/b3992d920e155dbed38bc9ff16accfc7.jpg", "http://yanxuan.nosdn.127.net/dcf9d42257ae7e10ed44edd2476ac9e0.jpg", "http://yanxuan.nosdn.127.net/6782d160404b3695c341816f0c7d31d4.jpg", "http://yanxuan.nosdn.127.net/4c3f781009ebfc029b7faccbd9f22479.jpg", "http://yanxuan.nosdn.127.net/0c81895869759de22bcb1f7af461ef34.jpg", "http://yanxuan.nosdn.127.net/8716a80657ec93528378f0efb0345f41.jpg", "http://yanxuan.nosdn.127.net/73fbba76fe0245f998646b559d65f122.jpg", "http://yanxuan.nosdn.127.net/60b71d2f8bd2f5bfd297001c7748dffa.jpg", "http://yanxuan.nosdn.127.net/4b572e21c8dc5e70df5161c22f24278d.jpg", "http://yanxuan.nosdn.127.net/7b9bf0563a39038381de82125ff9b29a.jpg", "http://yanxuan.nosdn.127.net/0ee3245fda78849748554836da24ccdd.jpg", "http://yanxuan.nosdn.127.net/ab5aca0340dd880a22eac77649da50d1.jpg"],
		"inventory": [591, 146],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "6寸/7寸"
		}, {
			"attrName": "颜色",
			"attrValue": "原木色/胡桃木色"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 452,
		"date": "1500012678846",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1159010,
		"price": 19,
		"topName": "极简实木相框",
		"subName": "质感榉木，极简纯粹",
		"shortDescription": ["高透明板", "清晰耐摔", "榉木材质", "经典木纹", "稳固撑脚", "横竖皆宜"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/afc7eb16c86ba7dbad33b73367c5cad4.jpg", "http://yanxuan.nosdn.127.net/91ecf85236b58152124cace572bd38db.jpg", "http://yanxuan.nosdn.127.net/5fc88d79adb8b06ff16c7e9d19ec3ab2.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/30633a9adf362f0758f5c97b3f60f7f5.png", "http://yanxuan.nosdn.127.net/014d02183b21d4c1c065884db306c234.jpg", "http://yanxuan.nosdn.127.net/1ce443d4d0a3f4d5ddff9d638ed58d9b.jpg", "http://yanxuan.nosdn.127.net/0da62833cd553a4bc1e7fd86f01695c2.jpg", "http://yanxuan.nosdn.127.net/67156b2a73445b5e3c1614ea021a77a3.jpg"],
		"types": ["6寸", "7寸"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/8b92d94179522574836b7b883b767777.jpg", "http://yanxuan.nosdn.127.net/f17c2c3357bfa37bb4ced01058d4feb8.jpg", "http://yanxuan.nosdn.127.net/a7f3d5b07ba69743b3698eb96111215a.jpg", "http://yanxuan.nosdn.127.net/8fc380d5145ebc2f2ede7c49e752188c.jpg", "http://yanxuan.nosdn.127.net/8af1d18b8f64fb35021b430f66d7f362.jpg", "http://yanxuan.nosdn.127.net/005d62f07f7063c928d68264fcdc5950.jpg", "http://yanxuan.nosdn.127.net/6687a6b8434eb019c75d77389803cafb.jpg", "http://yanxuan.nosdn.127.net/852dd744c4e3409aa33989b44da9fcc5.jpg", "http://yanxuan.nosdn.127.net/4e0dcc60db52b83631974cbcdfc2c59f.jpg", "http://yanxuan.nosdn.127.net/c094a3802e6efcbd6886097b567e17ae.jpg", "http://yanxuan.nosdn.127.net/93bd996173ca14d86701df64468f347a.jpg", "http://yanxuan.nosdn.127.net/890f5c2f6ab13355a7461e893a4674e3.jpg", "http://yanxuan.nosdn.127.net/51745d18a57b6d80e358df93561f2e51.jpg", "http://yanxuan.nosdn.127.net/f7aa27f9acaf130585275d1058231dc3.jpg", "http://yanxuan.nosdn.127.net/1141fd7124211c69945e8fea752345c6.jpg", "http://yanxuan.nosdn.127.net/8eec93d0d43c42096e7a210fff72375e.jpg", "http://yanxuan.nosdn.127.net/beadcfa8acd0d82a01d879591d1559a1.jpg", "http://yanxuan.nosdn.127.net/6d4b5ca5474f62bdb32853ae9e897014.jpg", "http://yanxuan.nosdn.127.net/2021222b95f098d2150e9b9205ae1e98.jpg", "http://yanxuan.nosdn.127.net/d1251dcce377375a92d163e401df3c15.jpg", "http://yanxuan.nosdn.127.net/3c2b7b69c63907e231bd0abbf889db2e.jpg", "http://yanxuan.nosdn.127.net/8898a373709205a4f130a99d420b1596.jpg", "http://yanxuan.nosdn.127.net/6a1231522c170f28d11fe621cb092b42.jpg", "http://yanxuan.nosdn.127.net/9e14c840ee4b337ac050afdaec61e0d5.jpg", "http://yanxuan.nosdn.127.net/c92bfbbd338b1b8175b9e7f6c72c15d9.jpg", "http://yanxuan.nosdn.127.net/39467be03e9ca956c0d62557403479c0.jpg", "http://yanxuan.nosdn.127.net/04a1235d5637e26bc429d0730aaa4375.jpg", "http://yanxuan.nosdn.127.net/5ff33bb43b739c97cbe1cc0d77aedb81.jpg", "http://yanxuan.nosdn.127.net/5b35d6e92ad3640abcd4accc32bfb81f.jpg", "http://yanxuan.nosdn.127.net/9a0e51cbb009f98c85453bc92b2e1df4.jpg", "http://yanxuan.nosdn.127.net/56408e20866d57b6315b23014acaa18f.jpg", "http://yanxuan.nosdn.127.net/9587f8688416190c51a6c0385cea91f7.jpg", "http://yanxuan.nosdn.127.net/a20020d2e54132b6d13b1ee146dd0a80.jpg", "http://yanxuan.nosdn.127.net/bf6e9f9c95f8fdb5f00dbe8ea64b58c7.jpg", "http://yanxuan.nosdn.127.net/3c0f0318fd78d2b194cbe314706f4ca6.jpg", "http://yanxuan.nosdn.127.net/c7670075250f40363d0a5d949a2a3393.jpg", "http://yanxuan.nosdn.127.net/15ac7cf92e7a028d38359319008bffd6.jpg", "http://yanxuan.nosdn.127.net/0cb3f138a46cfca9599e7c78e0bb1871.jpg", "http://yanxuan.nosdn.127.net/fc433dfc48fd72f77f114fa4e2ce599c.jpg"],
		"inventory": [93, 350],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "6寸/7寸"
		}, {
			"attrName": "颜色",
			"attrValue": "原木色"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 326,
		"date": "1500012681509",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149052,
		"price": 19,
		"topName": "花见小路·公主玫瑰",
		"subName": "清新玫瑰，粉嫩百搭",
		"shortDescription": ["花瓣层叠", "自然逼真", "布质花叶", "纹理逼真", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ebe01b897e06774f4bac023f031bc0ff.png", "http://yanxuan.nosdn.127.net/54155529bf9be0b2a4807550c17a75b5.png", "http://yanxuan.nosdn.127.net/3d60cdff5cf134f5eccc2da33f0ee5ee.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/bab275199f4bec5828bea71431ebf25d.png", "http://yanxuan.nosdn.127.net/9e19d2e8f0354d4a32f498ea1ee534f0.jpg", "http://yanxuan.nosdn.127.net/91b43b54df0994400eb6c08e87605e6a.jpg", "http://yanxuan.nosdn.127.net/ede2099d12ea32b86fc0b229e7197c2a.jpg", "http://yanxuan.nosdn.127.net/df3fa4afdba5394944085d8ad71c6d4d.jpg"],
		"types": ["粉色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/433a46d6e356fff3d99419db01938b0f.jpg", "http://yanxuan.nosdn.127.net/cdc8c1df9b0747e97222da6adfd10ab2.jpg", "http://yanxuan.nosdn.127.net/7afde8f3442409d24041717316ce43b5.jpg", "http://yanxuan.nosdn.127.net/fb18a11397e83c623552a89d45538944.jpg", "http://yanxuan.nosdn.127.net/e5b2aa6665206a2a8e94683ff724a1b7.jpg", "http://yanxuan.nosdn.127.net/406c4125cb38505ba9c4979cbe912643.jpg", "http://yanxuan.nosdn.127.net/af85e9efd18d0b6b12af212a064af379.jpg", "http://yanxuan.nosdn.127.net/78d1f82240ac1cbd24d95286784fe0b9.jpg", "http://yanxuan.nosdn.127.net/304c9047b4b7e941798d01fd842bd7f5.jpg", "http://yanxuan.nosdn.127.net/c357e6aeaba1a5e5e30bf82a92c7fc7f.jpg", "http://yanxuan.nosdn.127.net/2964004c5255e72db7cd44be64426d29.jpg", "http://yanxuan.nosdn.127.net/935afcc8370fd6755d4348e215208cbe.jpg", "http://yanxuan.nosdn.127.net/8d9764a6af78b6bb9e78f71b4f231915.jpg", "http://yanxuan.nosdn.127.net/676c5f8aab564967d93f0d6bb302d73d.jpg", "http://yanxuan.nosdn.127.net/3afd969bbe7337b3d2754ed8ef53553b.jpg", "http://yanxuan.nosdn.127.net/4a5e7edbeaf281b5664ffc7c6327a614.jpg", "http://yanxuan.nosdn.127.net/6d4fabaa303fe8238d096880d4bf89ec.jpg", "http://yanxuan.nosdn.127.net/869458d8482c1414d79fdb69970e21e4.jpg", "http://yanxuan.nosdn.127.net/eafddaa81df535dec5e6ab49af8306e4.jpg", "http://yanxuan.nosdn.127.net/9b5aaa4ad901ed4b7f3bad33f7ac2a7a.jpg", "http://yanxuan.nosdn.127.net/32dc36407acf4806358dd2fcca1fabbd.jpg", "http://yanxuan.nosdn.127.net/cb76a51ebf810f34bceb6624bcee9b77.jpg", "http://yanxuan.nosdn.127.net/ac72e2e66ab3d0ceb9a59032d5815fe4.jpg", "http://yanxuan.nosdn.127.net/d175a092538f0de3d43af5abd59a37a7.jpg", "http://yanxuan.nosdn.127.net/09bf90a3068fe94889c9690be58ccc94.jpg", "http://yanxuan.nosdn.127.net/c81faf8308a987379558d51a08b95471.jpg", "http://yanxuan.nosdn.127.net/19e6a7c2464fc2111ee02f9756481ac7.jpg", "http://yanxuan.nosdn.127.net/7b99665045d41542d22676560535dea0.jpg", "http://yanxuan.nosdn.127.net/11b6c6d762d7f1fdddbf52540fe698ea.jpg", "http://yanxuan.nosdn.127.net/037dbcabe118835216f45c35b16e2d6b.jpg", "http://yanxuan.nosdn.127.net/9de154000d18a3e86456f18060366da6.jpg", "http://yanxuan.nosdn.127.net/f0163dc4bf2277773a64a025b03dff7c.jpg", "http://yanxuan.nosdn.127.net/45564103f6f784884ddae5d2cb6df66d.jpg", "http://yanxuan.nosdn.127.net/5d4a04f593f6dfc3c1779bac96600c85.jpg", "http://yanxuan.nosdn.127.net/cf7d883d17571792c8da777bb9c72b86.jpg", "http://yanxuan.nosdn.127.net/2e984ad926e7e83e901d2e2259ae1424.jpg", "http://yanxuan.nosdn.127.net/d6c19e576e5fc8611a0359e39d2e4c93.jpg", "http://yanxuan.nosdn.127.net/4fd304b88b017ce9ad1d067809206d3c.jpg", "http://yanxuan.nosdn.127.net/a0d160523e49eaf63bd6664269bd7665.jpg", "http://yanxuan.nosdn.127.net/9dd13a1f1627cf140ed0f6ef58f12972.jpg", "http://yanxuan.nosdn.127.net/c6f0eb6704d0a40c375ec36b16b52ba2.jpg", "http://yanxuan.nosdn.127.net/67fd77d310b1ab97c132b8ac80269268.jpg", "http://yanxuan.nosdn.127.net/bab17ef4978510eb8e80d960ad34134d.jpg"],
		"inventory": [241],
		"information": [{
			"attrName": "颜色",
			"attrValue": "粉色"
		}, {
			"attrName": "长度",
			"attrValue": "48cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "玫瑰"
		}, {
			"attrName": "数量",
			"attrValue": "一支"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 595,
		"date": "1500012684227",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149051,
		"price": 25,
		"topName": "花见小路·银叶菊",
		"subName": "百搭绿意，清新仿真",
		"shortDescription": ["特殊叶面", "真实自然", "传统工艺", "手工制作", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/709620805aab39603b77f6b9548bd000.png", "http://yanxuan.nosdn.127.net/a73330669be84b098c40dc87b7b242f0.png", "http://yanxuan.nosdn.127.net/dc01cb39fbafd3b26c3b6c92d577606d.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/f4507398ff088770f703bf8ba613ee99.png", "http://yanxuan.nosdn.127.net/4ac6d816dec4cff1b700b28dc0a42588.jpg", "http://yanxuan.nosdn.127.net/e1b552e4b7785673e8568e12e86a54c5.jpg", "http://yanxuan.nosdn.127.net/f36d4fd59bb25bb0b5b000ccc1da2ed8.jpg", "http://yanxuan.nosdn.127.net/23b71b46d92f8d3bcf0ab02188e538cc.jpg"],
		"types": ["绿色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/dab7e7949213472223c927c5ccf38d17.jpg", "http://yanxuan.nosdn.127.net/5ff876a88cdaeb3a3818fdcdb8e0eb3e.jpg", "http://yanxuan.nosdn.127.net/4bd1b7d1e789ccaf3384995534e27099.jpg", "http://yanxuan.nosdn.127.net/ef4fa785b031210297fb081f7ce91e6c.jpg", "http://yanxuan.nosdn.127.net/e853d9ee8a9723678ba10216117c0f12.jpg", "http://yanxuan.nosdn.127.net/5672a2b09c435aaa8bbddc6505aeb604.jpg", "http://yanxuan.nosdn.127.net/5e4d2b67fb713a7811a1ffcb11cc1c46.jpg", "http://yanxuan.nosdn.127.net/89f9d1f74f7222d07a01717e5a5b39b2.jpg", "http://yanxuan.nosdn.127.net/fd8b6943e3c372d8d0f0a439f9cab833.jpg", "http://yanxuan.nosdn.127.net/1a525cf6b4e58299f0da1592b26cd4bb.jpg", "http://yanxuan.nosdn.127.net/2d2b9a61d394a6d367bda1cccec9dc3e.jpg", "http://yanxuan.nosdn.127.net/5a5ca4a1c75e2d9213e4f941bbffbe54.jpg", "http://yanxuan.nosdn.127.net/15d554c5f751eda618a257eabea9f3e6.jpg", "http://yanxuan.nosdn.127.net/d1695c9a11aa50e98e8e0fb3f90f14f5.jpg", "http://yanxuan.nosdn.127.net/5e1e3766f4b24ae82bd644ecf90fdac5.jpg", "http://yanxuan.nosdn.127.net/e5361ceccfab2257c7de0c19ad87002c.jpg", "http://yanxuan.nosdn.127.net/71cb33b7f823dd6531134ad1c2fa50af.jpg", "http://yanxuan.nosdn.127.net/82cf037d15a351fc28b71d32cd7e7386.jpg", "http://yanxuan.nosdn.127.net/1089a1c2755677cd2f1e440c3eb6c609.jpg", "http://yanxuan.nosdn.127.net/2a70ab8e37df5f97e4eb27e0ca5c4eee.jpg", "http://yanxuan.nosdn.127.net/f9cf8bde08e59b7069c8483dbfbc582f.jpg", "http://yanxuan.nosdn.127.net/74ebe712e17256bb70a370b05f5aa6d0.jpg", "http://yanxuan.nosdn.127.net/6efdaa44eaa1d5f2dc22f2fa26b5921b.jpg", "http://yanxuan.nosdn.127.net/e3e4760d29c7f49db1a2ba3c7e3aaa50.jpg", "http://yanxuan.nosdn.127.net/49105a57f0554c8426741556abe2ad64.jpg", "http://yanxuan.nosdn.127.net/5d85441f967bc3254370bbb51d110488.jpg", "http://yanxuan.nosdn.127.net/d9af9ff7eab846cabae0f440a71efd39.jpg", "http://yanxuan.nosdn.127.net/5d8e4eadf0a71635881dce83a99e285d.jpg", "http://yanxuan.nosdn.127.net/7262686ca10d8996c90ef7becccc2a3a.jpg", "http://yanxuan.nosdn.127.net/1af77905b7eed1669114f64b21dfc9a8.jpg", "http://yanxuan.nosdn.127.net/74f0a2cf6e16e95fb4f73fe78b4b7151.jpg", "http://yanxuan.nosdn.127.net/e6b0c83a104398572ae97871ddc7e42f.jpg", "http://yanxuan.nosdn.127.net/7b210482040bec197e72d1ba62df4642.jpg", "http://yanxuan.nosdn.127.net/6950402e76ebf074c6afd19893e3294b.jpg", "http://yanxuan.nosdn.127.net/aa95ba2635ac103d336539ab1b7ef1bd.jpg", "http://yanxuan.nosdn.127.net/f8edf6b87255b6a15071c9c7e25eda9f.jpg", "http://yanxuan.nosdn.127.net/5d9b8263f081bb3e7e7b342f242e9698.jpg", "http://yanxuan.nosdn.127.net/c4f81ca82dac4b0e6597952e96b48506.jpg", "http://yanxuan.nosdn.127.net/c5d5a838cbbbeec5030d410ddc618630.jpg", "http://yanxuan.nosdn.127.net/d0160b5f56c1dc772cd12005c22975e4.jpg", "http://yanxuan.nosdn.127.net/5c58996d0093bd85631fce77767bdd3a.jpg", "http://yanxuan.nosdn.127.net/9221b74ec4d55b6430c5e1b7085c9263.jpg"],
		"inventory": [147],
		"information": [{
			"attrName": "颜色",
			"attrValue": "绿色"
		}, {
			"attrName": "长度",
			"attrValue": "48cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "银叶菊"
		}, {
			"attrName": "数量",
			"attrValue": "一支"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 845,
		"date": "1500012687067",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1093000,
		"price": 39,
		"topName": "月光曲·小木棉",
		"subName": "仿真PU，定格典雅",
		"shortDescription": ["手工裁剪", "立体灵动", "三头木棉", "形态各异", "花香恬静", "恰到好处"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/56c71c101c8e58c31d5ae917200620f0.jpg", "http://yanxuan.nosdn.127.net/7b9da357ea45ece8ca2359e2216f0946.jpg", "http://yanxuan.nosdn.127.net/d546ec9eae0e7070b002a934c9d95c9e.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/1a22cc488390b616e75afbbd94db6584.png", "http://yanxuan.nosdn.127.net/e5143014acaf1831007c3a90eb4f2ed8.jpg", "http://yanxuan.nosdn.127.net/70dffe9b1f565e57866c8d2cbaaf35fc.jpg", "http://yanxuan.nosdn.127.net/8d411259e7af9b37f859858b5cd9027a.jpg", "http://yanxuan.nosdn.127.net/5d467a34e978f99ad5a36b5cff7de7d9.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/5b4f7b1c7645b54fb9135631775c44d1.jpg", "http://yanxuan.nosdn.127.net/215030eb837b8d81ffa35de802dfb201.jpg", "http://yanxuan.nosdn.127.net/c9746b52778ec414fe557a7e9e6bb61c.jpg", "http://yanxuan.nosdn.127.net/bd8f269e2deb6d90ddb7e8f8ea2d96f7.jpg", "http://yanxuan.nosdn.127.net/30e8a8c6694f40c9bef39b32e0bb7721.jpg", "http://yanxuan.nosdn.127.net/21bf19b684b80bb2d8ef8661d65d15df.jpg", "http://yanxuan.nosdn.127.net/1fc84555c266ad2b42ea7d14809292e6.jpg", "http://yanxuan.nosdn.127.net/e8b2d5eba9a2812870446dce43ea9111.jpg", "http://yanxuan.nosdn.127.net/519eb590f329bd330622a4443d52e21c.jpg", "http://yanxuan.nosdn.127.net/f8bfe63c2eae43aab178e4eb08ae2294.jpg", "http://yanxuan.nosdn.127.net/6f837236ac348079f3910389c3bdadd7.jpg", "http://yanxuan.nosdn.127.net/2de72436183e808a6da615cdb4743c87.jpg", "http://yanxuan.nosdn.127.net/3138859c5896d0726e3b7186ac73f34d.jpg", "http://yanxuan.nosdn.127.net/048abf054bd0373015abe44c8455b707.jpg", "http://yanxuan.nosdn.127.net/8d96ec29f78f8043ec48713a11deb52d.jpg", "http://yanxuan.nosdn.127.net/a2493c9d7c48ee6ee53d12e946e8e4a3.jpg", "http://yanxuan.nosdn.127.net/b937b14bf953bd64c5362353b8f5e055.jpg", "http://yanxuan.nosdn.127.net/dd6ff3a660a801918df6c01bf72ed27c.jpg", "http://yanxuan.nosdn.127.net/c215983e1f557db16b5db9f7e51ff14b.jpg", "http://yanxuan.nosdn.127.net/37730a86094625aae577ad68ebfb8253.jpg", "http://yanxuan.nosdn.127.net/bde8a403526d11c307223a0253267a5f.jpg", "http://yanxuan.nosdn.127.net/0cd087a4443af8330dc7654648e88fec.jpg", "http://yanxuan.nosdn.127.net/58f62a0d9ddcc8c0dd8d505005f3107c.jpg", "http://yanxuan.nosdn.127.net/33d0518f396b352c061c7b695194bc0a.jpg", "http://yanxuan.nosdn.127.net/330d0261403d9d0ad11405d19d6bc15f.jpg", "http://yanxuan.nosdn.127.net/6974e3ab2f18401859d4391958b344a8.jpg", "http://yanxuan.nosdn.127.net/ac3159d7d6cc48f952bad1c4586c04d7.jpg", "http://yanxuan.nosdn.127.net/28c2321f53984accfcdc0cdf2761fbc3.jpg", "http://yanxuan.nosdn.127.net/ae31796c18b3ed25687e6fd12cb50c9d.jpg", "http://yanxuan.nosdn.127.net/0a2b3a9b6aa7117d4bc67a516365b0c3.jpg", "http://yanxuan.nosdn.127.net/fba9ea69f30ed059eea01934157e7016.jpg", "http://yanxuan.nosdn.127.net/03b99b6c2ce16be772f09ee09356916d.jpg", "http://yanxuan.nosdn.127.net/84b115d9acbaab972286dda97c1661e7.jpg", "http://yanxuan.nosdn.127.net/5602f58cda58b4e7bad9cb248732e97f.jpg", "http://yanxuan.nosdn.127.net/18ed6a3403fb96e1bd208d393b1dcc5b.jpg", "http://yanxuan.nosdn.127.net/37369ac790686de9cf0ddea2af1d045e.jpg", "http://yanxuan.nosdn.127.net/f57fa2a4c5fe4ca90480b619c0d188de.jpg", "http://yanxuan.nosdn.127.net/d21c94dc65efb8c92eeafb3ee1f75b79.jpg", "http://yanxuan.nosdn.127.net/ae0d16dfa896f2b5a4681de0621870ba.jpg", "http://yanxuan.nosdn.127.net/0ea54974c6f8eec823382abb383057f0.jpg", "http://yanxuan.nosdn.127.net/294e9a51f1692b456dfac753b46fa4c4.jpg", "http://yanxuan.nosdn.127.net/8043ad0af70f60c9df2d2969de73c409.jpg", "http://yanxuan.nosdn.127.net/16f8a25987a31126420e3dee1c850cb1.jpg", "http://yanxuan.nosdn.127.net/81ada0d29e8f96a844e3adce2b850c4e.jpg", "http://yanxuan.nosdn.127.net/8f40c62bd5e57b10992486fd76c8c3a7.jpg", "http://yanxuan.nosdn.127.net/a2310c4f5f74a4fc252e8850cab0753b.jpg", "http://yanxuan.nosdn.127.net/440ce6f17e9f55a2cb4ab75c67a11b72.jpg", "http://yanxuan.nosdn.127.net/eae892cfc10fa235e10a2146e4c62f18.jpg", "http://yanxuan.nosdn.127.net/c0ef2820f6d6283cc05b968d1835cfe9.jpg", "http://yanxuan.nosdn.127.net/3ecc99d34f2974f50abcb75006eb1dee.jpg", "http://yanxuan.nosdn.127.net/710b02daf30326f75d0029da0651c953.jpg", "http://yanxuan.nosdn.127.net/07c00e8f2b7ae873c5478b80c65f247e.jpg", "http://yanxuan.nosdn.127.net/ae6cf1147c23c8b0911346923a5602cf.jpg", "http://yanxuan.nosdn.127.net/3d2a31a9030beea78d1780a607647090.jpg", "http://yanxuan.nosdn.127.net/ee86a9cc0d7dddc47ddef5ca69a166ef.jpg", "http://yanxuan.nosdn.127.net/c9b13a8de3031bbf68600acf1060a862.jpg", "http://yanxuan.nosdn.127.net/0e7e5d9292e77c82fdc20b7e2d2abfc1.jpg", "http://yanxuan.nosdn.127.net/52aff3d2d7f6737fed6c06e475b1a6d7.jpg", "http://yanxuan.nosdn.127.net/3bea2212caf8f2760084d06bf2f15910.jpg", "http://yanxuan.nosdn.127.net/edef2d2f9f2b032429dc141089a85664.jpg", "http://yanxuan.nosdn.127.net/175f2c644c3238f1af8c23cf91c34d23.jpg", "http://yanxuan.nosdn.127.net/79bd08c21f83de81caa65bf38f14c750.jpg", "http://yanxuan.nosdn.127.net/655320ee6dc49430442fbba81e44c41a.jpg", "http://yanxuan.nosdn.127.net/28a8c402c42e9671591167ab49ba6857.jpg", "http://yanxuan.nosdn.127.net/0eb1cb510d5f338af2b595d30da49b7f.jpg", "http://yanxuan.nosdn.127.net/68a6ec175d2c46f0162f8de63add1189.jpg", "http://yanxuan.nosdn.127.net/d0c72d3e82a13c65ef52d5a09f178d2e.jpg"],
		"inventory": [413],
		"information": [{
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "长度",
			"attrValue": "81cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "木棉花"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 257,
		"date": "1500012689826",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149048,
		"price": 35,
		"topName": "花见小路·郁金香",
		"subName": "清新嫩粉，雅致点缀",
		"shortDescription": ["叶纹细腻", "自然逼真", "花瓣饱满", "花型立体", "环保材质", "安全安心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4afde9d0eb296c555479b66c14f8e5d6.png", "http://yanxuan.nosdn.127.net/e4ce6d9218376f6ccc286364211af424.png", "http://yanxuan.nosdn.127.net/2448ce034a569e0ec82f7448527a6177.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/fa0da1f992da8a902466ba3fe6167487.png", "http://yanxuan.nosdn.127.net/49f033343cd41206e5aac79015f9ae91.jpg", "http://yanxuan.nosdn.127.net/1e21ea737e1cfff2b360a9995d3db428.jpg", "http://yanxuan.nosdn.127.net/418d6698b2a9d6ba46ff67aa17b700bb.jpg", "http://yanxuan.nosdn.127.net/e7f4660750e487d5bed868c5dae99aa5.jpg"],
		"types": ["粉色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/bd0fd32452e7247efed5c63c4485a719.jpg", "http://yanxuan.nosdn.127.net/bf1a6c4ebb62280c6c7cb9135ed63ef9.jpg", "http://yanxuan.nosdn.127.net/9c8a1d9536a75031a98fb17ca56c5cae.jpg", "http://yanxuan.nosdn.127.net/222181fadb50e7e1f1d0281cc7dcc0be.jpg", "http://yanxuan.nosdn.127.net/b5080660421b56287e0f3105f2f74071.jpg", "http://yanxuan.nosdn.127.net/c61284e77d76eb18db1ab93370b39294.jpg", "http://yanxuan.nosdn.127.net/08b6bf1bc86aafb732a9d09d3799fc45.jpg", "http://yanxuan.nosdn.127.net/e24da304ed379c60c136b579eaa7e363.jpg", "http://yanxuan.nosdn.127.net/21066b25cf3f97a1916f025138de6db9.jpg", "http://yanxuan.nosdn.127.net/094dd479f6da3b3aa1d6322fb4293769.jpg", "http://yanxuan.nosdn.127.net/0583a523b896554175752ee048874c12.jpg", "http://yanxuan.nosdn.127.net/bc948731ba1cabbb3176a0d07a8bd10c.jpg", "http://yanxuan.nosdn.127.net/29cf4169de6f0df7f87e544b67f6543f.jpg", "http://yanxuan.nosdn.127.net/3d94343d3b0c81ed1897cfacc3e34653.jpg", "http://yanxuan.nosdn.127.net/8ee7c756fe1d00002acb2efe8fb54fa4.jpg", "http://yanxuan.nosdn.127.net/dd50ce5d17dfce42dd455d979699c984.jpg", "http://yanxuan.nosdn.127.net/89614ec91a41fad9483899059f9eb508.jpg", "http://yanxuan.nosdn.127.net/b590b7f769420341e3a5812dd1089a3d.jpg", "http://yanxuan.nosdn.127.net/1a55a49effec354d41ff231ebe126870.jpg", "http://yanxuan.nosdn.127.net/59e5b433b1381691756a13085747ba35.jpg", "http://yanxuan.nosdn.127.net/7c1aad860e62291e7a27dfd6d400377f.jpg", "http://yanxuan.nosdn.127.net/2cc871931e38e78f94f32bf4784da478.jpg", "http://yanxuan.nosdn.127.net/4b5350b330189899f48e1189b433489b.jpg", "http://yanxuan.nosdn.127.net/19b75ba43df6800c7d742e060b69e8d3.jpg", "http://yanxuan.nosdn.127.net/47811cc76e91dd9a183f6300731c734f.jpg", "http://yanxuan.nosdn.127.net/53d8cf7ce348c5210bb300360bba9695.jpg", "http://yanxuan.nosdn.127.net/60fc6e58c36662483d85336af80d8523.jpg", "http://yanxuan.nosdn.127.net/8cbb6a3828ac83f4873d486036332485.jpg", "http://yanxuan.nosdn.127.net/7dce9c87dc79d1f9c7873e7fee882674.jpg", "http://yanxuan.nosdn.127.net/f4ce2690bb64aa2ffdea6389e983096d.jpg", "http://yanxuan.nosdn.127.net/7de8805680dc6e3e056ddbb1581238cf.jpg", "http://yanxuan.nosdn.127.net/d9409d0d150ebcbae1293a3e34e13fbd.jpg", "http://yanxuan.nosdn.127.net/859dbc3cf30561b4bf247087e718f2d0.jpg", "http://yanxuan.nosdn.127.net/70849424c7e2b670bfa969439be9cbfb.jpg", "http://yanxuan.nosdn.127.net/b7b6b6ba31375451ef7eb76078c3ab70.jpg", "http://yanxuan.nosdn.127.net/65ee203fd71f6fc52e478d3d93964be8.jpg", "http://yanxuan.nosdn.127.net/764bc3fb058151f53ac564308e01a33b.jpg", "http://yanxuan.nosdn.127.net/b378f68d9fdbfc246577ec973e4293e4.jpg", "http://yanxuan.nosdn.127.net/dd926c773733f9e2b551b6fc89ad1c95.jpg", "http://yanxuan.nosdn.127.net/c95c9ce37ac5bfca65a17e1e794ea92c.jpg", "http://yanxuan.nosdn.127.net/358b6996f5ceaa704614c9dde417d2d7.jpg", "http://yanxuan.nosdn.127.net/5ff38f8b19a49c2e4e3f8fe07d6df269.jpg", "http://yanxuan.nosdn.127.net/6f75f6a01ff850670c75ca0e4e4efc60.jpg", "http://yanxuan.nosdn.127.net/cb13bbdfedab4ccd06d17450391f0ca4.jpg", "http://yanxuan.nosdn.127.net/5f723c1b24d05a9a31b90af06e010aed.jpg", "http://yanxuan.nosdn.127.net/5e5d2f8c17324d6321d2f96735ad4006.jpg"],
		"inventory": [153],
		"information": [{
			"attrName": "颜色",
			"attrValue": "粉色"
		}, {
			"attrName": "长度",
			"attrValue": "33cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "郁金香"
		}, {
			"attrName": "数量",
			"attrValue": "一束（7支）"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 658,
		"date": "1500012692768",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149049,
		"price": 55,
		"topName": "花见小路·迷你牡丹",
		"subName": "复古优雅，经典牡丹之美",
		"shortDescription": ["多重花瓣", "花型饱满", "手工裁贴", "鲜活灵动", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4c84d400fa8d819059cea0f645677268.png", "http://yanxuan.nosdn.127.net/f86370420376101a7e79c66d6c3b5f69.png", "http://yanxuan.nosdn.127.net/a1c9b0c4fb894dfdff1b393a9e7dab94.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/c35f4cc4dbdf0291d3b55d1efaafe25f.png", "http://yanxuan.nosdn.127.net/fb26d0a93eb2385007e09c4505de3f1c.jpg", "http://yanxuan.nosdn.127.net/0f2d9251253d9ec7b20a9f748d191a63.jpg", "http://yanxuan.nosdn.127.net/c13546da3bd228920e41c8d97b67e3b8.jpg", "http://yanxuan.nosdn.127.net/c2181fc9fea0d49c54716d1e574c5a3e.jpg"],
		"types": ["复古红"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/14e31bb014a549b97cff9ab06f7f4923.jpg", "http://yanxuan.nosdn.127.net/2cb6ce6d6288b8549e3b0d3d9f56a5e4.jpg", "http://yanxuan.nosdn.127.net/f7afbd5e62993c33ccd61515ca45d29f.jpg", "http://yanxuan.nosdn.127.net/ec630b5b44b006464e7e3a28165545e3.jpg", "http://yanxuan.nosdn.127.net/280236fb2a1531062cb76247563d5d0a.jpg", "http://yanxuan.nosdn.127.net/ca6a0c36faf22fa9e74682fd8c1cefae.jpg", "http://yanxuan.nosdn.127.net/f13a815c23fad567dafd8b4c50653ae4.jpg", "http://yanxuan.nosdn.127.net/6f98ed3dc0367f616484739aa8b2b3fc.jpg", "http://yanxuan.nosdn.127.net/e38785117ba55024f5a68ec3c2ddbcde.jpg", "http://yanxuan.nosdn.127.net/7776bf6f41b768e395bc7875143965d8.jpg", "http://yanxuan.nosdn.127.net/cc63f9e5e99320cf91b893e89608c44c.jpg", "http://yanxuan.nosdn.127.net/3629a0064665c971536c943618fa1c84.jpg", "http://yanxuan.nosdn.127.net/7a26516584a496184671e2cd1ce619b1.jpg", "http://yanxuan.nosdn.127.net/c2aa2c539dedddefb43c183831dbc6bb.jpg", "http://yanxuan.nosdn.127.net/87171f31fbf3e8b35f8c500a3b86227e.jpg", "http://yanxuan.nosdn.127.net/162cb56342d7e56eaeb2e182b1a2c09c.jpg", "http://yanxuan.nosdn.127.net/ddbf77217225ccc74d6c885ebfa62b95.jpg", "http://yanxuan.nosdn.127.net/580c1da42b89dfce89072fe8c648891f.jpg", "http://yanxuan.nosdn.127.net/3797903d871f416d927cb57484709856.jpg", "http://yanxuan.nosdn.127.net/7842bae9cb7966c7060f267fccfc5e87.jpg", "http://yanxuan.nosdn.127.net/8828c2533955134e0f35f184d252d1a2.jpg", "http://yanxuan.nosdn.127.net/422f946c020f5ec3d56f32990ca0f648.jpg", "http://yanxuan.nosdn.127.net/8f7940522fe956f19b520d996664ba95.jpg", "http://yanxuan.nosdn.127.net/d9b4fbe8c46d0b335f66c98ea54d81fc.jpg", "http://yanxuan.nosdn.127.net/f8342957dffbdb199caea105f5f754db.jpg", "http://yanxuan.nosdn.127.net/55dd8362ef09dc775521631e714ba2c9.jpg", "http://yanxuan.nosdn.127.net/2fd5785b17cf12775ad4ac994aa64b9c.jpg", "http://yanxuan.nosdn.127.net/3f9c3a8c7b266486af77791c1e5f9179.jpg", "http://yanxuan.nosdn.127.net/6695d832ed49facc151aac721a29a2ba.jpg", "http://yanxuan.nosdn.127.net/ea34e1c401f89989b65927c5992d26e2.jpg", "http://yanxuan.nosdn.127.net/441ea0be6d891cce3e5f405995c28c09.jpg", "http://yanxuan.nosdn.127.net/92e87ce23f607a01fc68963fd16748a4.jpg", "http://yanxuan.nosdn.127.net/ecda0a3cb1440a18653184c6d639b107.jpg", "http://yanxuan.nosdn.127.net/b3fac248f38732d5e28749591294a589.jpg", "http://yanxuan.nosdn.127.net/b4403bc0d8ac17693d45eebf94e7308b.jpg", "http://yanxuan.nosdn.127.net/f5d3e08c4f147f216d6849974d85ae01.jpg", "http://yanxuan.nosdn.127.net/f6d35ad970ca56aa3b89ff3e43ad75e9.jpg", "http://yanxuan.nosdn.127.net/274a1c2b710864ba225ab3235721a172.jpg", "http://yanxuan.nosdn.127.net/da0e189b22c5e0584edb6c748d5496d0.jpg", "http://yanxuan.nosdn.127.net/52df8ba5d59ffb54713e3c5fd103e056.jpg", "http://yanxuan.nosdn.127.net/c1fce64e92b80f5d713050cbd10b8048.jpg", "http://yanxuan.nosdn.127.net/a4a746b609b1f3c33a41162d2e94d1fb.jpg", "http://yanxuan.nosdn.127.net/a08a521b7b361c5482efdd35220c1d15.jpg", "http://yanxuan.nosdn.127.net/ea686029ab484a8656c5af32bcfd58c6.jpg", "http://yanxuan.nosdn.127.net/ad56fe303e57b36a232f6c0f96bd68ca.jpg", "http://yanxuan.nosdn.127.net/50ba37c1d4c22befd2cd8c1d85c2a4e8.jpg"],
		"inventory": [562],
		"information": [{
			"attrName": "颜色",
			"attrValue": "复古红"
		}, {
			"attrName": "长度",
			"attrValue": "25.5cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "牡丹"
		}, {
			"attrName": "数量",
			"attrValue": "一束（8支）"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 164,
		"date": "1500012695410",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1093001,
		"price": 29,
		"topName": "月光曲·马蹄莲",
		"subName": "自然逼真，环保材质",
		"shortDescription": ["材质柔软", "不易变形", "轻盈色泽", "盎然生机", "淡雅花香", "层次丰富"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/8288a92bea54dc91cb8d95e3ccc8a491.jpg", "http://yanxuan.nosdn.127.net/64073fb6c7c26d4b6d84db8171e34519.jpg", "http://yanxuan.nosdn.127.net/a4f827c8b7bc4c53edbb6225eb6b322c.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/71fede861c3641d570a89a65ccf4525f.png", "http://yanxuan.nosdn.127.net/1bfba99384357392f90cd06a63d1f152.jpg", "http://yanxuan.nosdn.127.net/9d9b14c89edd8ebfeb886b7aed80e79c.jpg", "http://yanxuan.nosdn.127.net/3aff9a88b67003e08ebe2f75c3e71aed.jpg", "http://yanxuan.nosdn.127.net/eee4ccfba75b991d6fc4b3a25ee253bd.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/14c4de5b68fb2020a0264babd024c603.jpg", "http://yanxuan.nosdn.127.net/b7d4c10f37efe62df82a9d9ddcf5391d.jpg", "http://yanxuan.nosdn.127.net/88704a0306ac60f7ed5465f1a52f7a97.jpg", "http://yanxuan.nosdn.127.net/9e6f63dc6bd213450ee31307d521fc50.jpg", "http://yanxuan.nosdn.127.net/843c898a55f5ba807ccfcde8171f6ab5.jpg", "http://yanxuan.nosdn.127.net/fe488f44863e3b1b55a94a8fb7d66468.jpg", "http://yanxuan.nosdn.127.net/86ea4ad80d5d9eb678f5845c5bd1f3df.jpg", "http://yanxuan.nosdn.127.net/507427743783c8ad1e1e7acefe7ab16e.jpg", "http://yanxuan.nosdn.127.net/087ac3cee9d8bd4656969f40ff05bde1.jpg", "http://yanxuan.nosdn.127.net/d5756bce5084f0da0d65ee9ba2ac40a8.jpg", "http://yanxuan.nosdn.127.net/3823255dce16fc44337599b63351b02b.jpg", "http://yanxuan.nosdn.127.net/9b152b2d010f933f515059e3ed9758b5.jpg", "http://yanxuan.nosdn.127.net/8fa95525f3e21af9ce526d27581cec4c.jpg", "http://yanxuan.nosdn.127.net/e997646bc2f741071b5f06fedc2a409f.jpg", "http://yanxuan.nosdn.127.net/360ca78e2b931542a920ac7219e93ad3.jpg", "http://yanxuan.nosdn.127.net/6e17fba13878001812d33e60c53a5bb0.jpg", "http://yanxuan.nosdn.127.net/b603073a532c7d16df0b09ff196d9516.jpg", "http://yanxuan.nosdn.127.net/0d14ee677f0cbad8146478f9bdf80b39.jpg", "http://yanxuan.nosdn.127.net/bbb4839d17e5a4b49b16c2cb2a7a0bac.jpg", "http://yanxuan.nosdn.127.net/a6e04bfeaa2be740610fb9ce274dcfed.jpg", "http://yanxuan.nosdn.127.net/456c0767ef28a4ffd52bfdf2339998e8.jpg", "http://yanxuan.nosdn.127.net/b7fa3373676f27f95c5dff94f7bf5b42.jpg", "http://yanxuan.nosdn.127.net/45b2e9c89455735fba95f9c75e0c99a2.jpg", "http://yanxuan.nosdn.127.net/6e7c23c1da969d6a92ecbad43a0f10e4.jpg", "http://yanxuan.nosdn.127.net/bbad0ce217bb20c7d93292ee789492f3.jpg", "http://yanxuan.nosdn.127.net/78b3c74a0fdf05bfcf62730c535ef2fb.jpg", "http://yanxuan.nosdn.127.net/b76a95e96b3f862486bee6dfbaccdaab.jpg", "http://yanxuan.nosdn.127.net/5ca838cfde190a22fa2ad0f8d55971b6.jpg", "http://yanxuan.nosdn.127.net/15f3d4996d1cba52763c30f26a78a04f.jpg", "http://yanxuan.nosdn.127.net/0a2172c4f6744c1024079b48554907ae.jpg", "http://yanxuan.nosdn.127.net/303125108bdfd52bcab6dfb1b0bd7029.jpg", "http://yanxuan.nosdn.127.net/83d7090ea963d133103a3bfcac61484d.jpg", "http://yanxuan.nosdn.127.net/eea591cfebdbb6cba0ae856e9a02894e.jpg", "http://yanxuan.nosdn.127.net/ab2cca8081ab4028778789e84b4a8c07.jpg", "http://yanxuan.nosdn.127.net/12b1054eef2e784a993b4ccd01f240e5.jpg", "http://yanxuan.nosdn.127.net/cde59e5ca29d69227359e0e326d6ff8b.jpg", "http://yanxuan.nosdn.127.net/143ab0a0996071b335a20543ce9b7859.jpg", "http://yanxuan.nosdn.127.net/2bba82dcc5d4e446999fd2f53feea873.jpg", "http://yanxuan.nosdn.127.net/4ed53aff4e1511efbbb44276b86c04f3.jpg", "http://yanxuan.nosdn.127.net/7873136c7901142199933d698f8857c5.jpg", "http://yanxuan.nosdn.127.net/35c9d0b967485ff7f6197c2767578271.jpg", "http://yanxuan.nosdn.127.net/6c7751f977b560b203978f53dd784f77.jpg", "http://yanxuan.nosdn.127.net/251f3e1aa29dfeef37a2c44f315a87d9.jpg", "http://yanxuan.nosdn.127.net/66d17ca9055cd144fea50657ea55d89a.jpg", "http://yanxuan.nosdn.127.net/3351f1a84e9700554add7719325ee7d0.jpg", "http://yanxuan.nosdn.127.net/e647f67fd2581fdde7b77a6f4ba76f8b.jpg", "http://yanxuan.nosdn.127.net/409de727c8353a60b27545ee1f4c9f62.jpg", "http://yanxuan.nosdn.127.net/bd1705c641c3d1dc20d21ca02a45d57c.jpg", "http://yanxuan.nosdn.127.net/1baac00858cd4e174301490c05aa2547.jpg", "http://yanxuan.nosdn.127.net/9233b3612f978c00ca77b2bbb6258a17.jpg", "http://yanxuan.nosdn.127.net/66925098d2c2bf8e6371395a74e5fd75.jpg", "http://yanxuan.nosdn.127.net/f5d209471e5d4c7f3cd44abcd969f017.jpg", "http://yanxuan.nosdn.127.net/54f7aa76e034ea98467e172e5247b52a.jpg", "http://yanxuan.nosdn.127.net/8871ba3e623365c2f0a5bfcbcfcc7df2.jpg", "http://yanxuan.nosdn.127.net/73353926afed90979ceb13f8db3cd789.jpg"],
		"inventory": [389],
		"information": [{
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "长度",
			"attrValue": "35cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "马蹄莲"
		}, {
			"attrName": "数量",
			"attrValue": "一束（9朵）"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 10,
		"date": "1500012698770",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1093002,
		"price": 49,
		"topName": "月光曲·清水木棉",
		"subName": "仿真之美裹于精致玻璃",
		"shortDescription": ["立体裁剪", "灵动鲜活", "一丝不苟", "细节出彩", "淡雅花香", "自然逼真"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d9f6024f7316832b4eaa30625dcb0581.jpg", "http://yanxuan.nosdn.127.net/c9938e3594531ec6089c1590a610749b.jpg", "http://yanxuan.nosdn.127.net/a039c2e33aa6f22812b7783fd8c889c7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/48d95e820628610fcdcda30570d4379c.png", "http://yanxuan.nosdn.127.net/327762ee4559fb78ca99bdfec4ba2941.jpg", "http://yanxuan.nosdn.127.net/63014fa05d18b3b8d312c37646ac78c5.jpg", "http://yanxuan.nosdn.127.net/0c6554fa7977ab5afb9405053f04885c.jpg", "http://yanxuan.nosdn.127.net/7c9340a889501907e5315a572eb0bc9f.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/f7344fa03430c9e7608924f2396e9a3b.jpg", "http://yanxuan.nosdn.127.net/ae8b2c0ab30afa202bb6569bc64fb05c.jpg", "http://yanxuan.nosdn.127.net/260a1043d33c23222d0a643bcb78efa5.jpg", "http://yanxuan.nosdn.127.net/a2ac6fa26b02ccac9e77f469f2f81627.jpg", "http://yanxuan.nosdn.127.net/4f7db39e5c98c07104cfb1838b3a4606.jpg", "http://yanxuan.nosdn.127.net/03cd25c518409a45a6c6d22a6bb36f6b.jpg", "http://yanxuan.nosdn.127.net/baa155140eaf7efbdd7dcdba00bb1c59.jpg", "http://yanxuan.nosdn.127.net/8c9c6b4b7af2cf108b50d17015247429.jpg", "http://yanxuan.nosdn.127.net/c0fcd1ec7c1d0f5bf74a6ecdc288e9ee.jpg", "http://yanxuan.nosdn.127.net/8692aa87d719cb0b6e8e850b415d33ed.jpg", "http://yanxuan.nosdn.127.net/53ee60e2f229f6186f4b14ff2b28359d.jpg", "http://yanxuan.nosdn.127.net/e348fd6476d54cedb1acbef6510e4d59.jpg", "http://yanxuan.nosdn.127.net/b70cf32a96e3ba24d7d73d0d0b573d68.jpg", "http://yanxuan.nosdn.127.net/f16474f1734554a39faad2c49d3e3367.jpg", "http://yanxuan.nosdn.127.net/d5b24698379ac242008ccd444c34ca37.jpg", "http://yanxuan.nosdn.127.net/932dea95459ae481bad1adca3f649ab4.jpg", "http://yanxuan.nosdn.127.net/1961bd3fbd169f3a9da38a33a52bdb95.jpg", "http://yanxuan.nosdn.127.net/27122c54b2745f10b655a018ef167c94.jpg", "http://yanxuan.nosdn.127.net/958e02ebbde0e4e79805b0ab6cff54e5.jpg", "http://yanxuan.nosdn.127.net/5a08733dc5f74f2be9e554f8a9721623.jpg", "http://yanxuan.nosdn.127.net/f1a9b63938e248d83c6ef21db2ab5464.jpg", "http://yanxuan.nosdn.127.net/acf2bc7c117b0619bcc0d4a2f77688a9.jpg", "http://yanxuan.nosdn.127.net/af956b451c2f5c710e5802ca264ace3b.jpg", "http://yanxuan.nosdn.127.net/7a57eebbc20487a9627ed72efbaf77e7.jpg", "http://yanxuan.nosdn.127.net/811d0feee6b594580828d1c0afa87004.jpg", "http://yanxuan.nosdn.127.net/6094507a642ad35bcc6ff6094f786d46.jpg", "http://yanxuan.nosdn.127.net/cc959993726c6f756923ab3a7e79f8ca.jpg", "http://yanxuan.nosdn.127.net/847af1884da2988cb7dc72f4205bcbf7.jpg", "http://yanxuan.nosdn.127.net/3cb47e4ab1d7afd5a61b548007a302d1.jpg", "http://yanxuan.nosdn.127.net/947c55e2df37a5806f1a2ea87cf4a8d1.jpg", "http://yanxuan.nosdn.127.net/9dea6bc310ebe6872a7655c550d825fd.jpg", "http://yanxuan.nosdn.127.net/6890ba6f04ed5574c92cb2b24aaeb5f8.jpg", "http://yanxuan.nosdn.127.net/3fc24ce0bb5969bd6774a8528cebfde5.jpg", "http://yanxuan.nosdn.127.net/0d2c69d95f89632b0dcf342ddfe41def.jpg", "http://yanxuan.nosdn.127.net/147cb97075af63e6001701f73be05869.jpg", "http://yanxuan.nosdn.127.net/c6006af9450c3e705aa8492102c33313.jpg", "http://yanxuan.nosdn.127.net/b1f8b607eeca99a57915539207225fb8.jpg", "http://yanxuan.nosdn.127.net/f1c11c60ac99591a6c38c285adc14c62.jpg", "http://yanxuan.nosdn.127.net/072092ff06a84465883a9c0666bb7c41.jpg", "http://yanxuan.nosdn.127.net/6075177496003cb2a873425f315c0ac0.jpg", "http://yanxuan.nosdn.127.net/ad8b5858463e737515b52fd566ce3443.jpg", "http://yanxuan.nosdn.127.net/4fa88a238b9d4ff1ed3c527bcb54cdbe.jpg", "http://yanxuan.nosdn.127.net/e73c0d99a3934634ab3f05d03c7b4bb6.jpg", "http://yanxuan.nosdn.127.net/0fe3d07b6291ad7c72fdf11df14642bf.jpg", "http://yanxuan.nosdn.127.net/da37af40f71b3b5d1ace9badecc6f452.jpg", "http://yanxuan.nosdn.127.net/43c18f4ddf398f8191f32453207fd7c0.jpg", "http://yanxuan.nosdn.127.net/795cb1b99501a45b51cb948132d4478e.jpg", "http://yanxuan.nosdn.127.net/7b83c807d156eafcd75f2302cff0c335.jpg", "http://yanxuan.nosdn.127.net/3af7559bee8204a678915ff745cb0db9.jpg", "http://yanxuan.nosdn.127.net/ea4fb92585ea1b42f52974aeb6533359.jpg", "http://yanxuan.nosdn.127.net/5801bc264a549ccc28c8a6cbbc586070.jpg", "http://yanxuan.nosdn.127.net/dab91f751ac4a3142ed4ebb5239b73b9.jpg", "http://yanxuan.nosdn.127.net/b4f2fd647fd9816dc5ce9fa7520ee24b.jpg", "http://yanxuan.nosdn.127.net/9f693ee866e239666f5c7257f5380149.jpg", "http://yanxuan.nosdn.127.net/f2b0154f00a81c2a4d5f2c4bdfcc2e4c.jpg", "http://yanxuan.nosdn.127.net/078b0baa26bfe33f8517425717904217.jpg", "http://yanxuan.nosdn.127.net/8722ea6b8b94a084327f43652bd36725.jpg", "http://yanxuan.nosdn.127.net/12afaa904d2bf4d1b99c952b48b41877.jpg", "http://yanxuan.nosdn.127.net/dba1cc41d9cba2118ef0c6acfb3bf7e4.jpg", "http://yanxuan.nosdn.127.net/f5cbff5bda3610d137839e60d19b70a8.jpg", "http://yanxuan.nosdn.127.net/85db07bb2753c51424187d62baff36e3.jpg", "http://yanxuan.nosdn.127.net/e85b5b64edc6e9254fa9291b58a94aa5.jpg", "http://yanxuan.nosdn.127.net/b64f9e066aa66161b05d2e055739599e.jpg", "http://yanxuan.nosdn.127.net/b9ba60f428dbb09d44a0480073a96e04.jpg", "http://yanxuan.nosdn.127.net/dade0ed72bae5bfa019ba89db5c91bb5.jpg", "http://yanxuan.nosdn.127.net/ebc93b3376de58dd6cead7568c97a1d4.jpg", "http://yanxuan.nosdn.127.net/763f44ffec9e182324b46f1c4aeb0ae0.jpg", "http://yanxuan.nosdn.127.net/da4fce648e13fc32865f9eb812de0ca7.jpg", "http://yanxuan.nosdn.127.net/2f435576c31011da4bfdd5eb8812f01d.jpg", "http://yanxuan.nosdn.127.net/34591cf9ab39eea855ff37b4998a432e.jpg", "http://yanxuan.nosdn.127.net/2f84d00a688840605788645d41397849.jpg", "http://yanxuan.nosdn.127.net/9f8d4e0cc9f80cb99c5c2073fd31f75f.jpg", "http://yanxuan.nosdn.127.net/5b099f7cc6fd06976edd575cafad2c49.jpg", "http://yanxuan.nosdn.127.net/4e7cb7b9ac22d6593f71672b121190c3.jpg"],
		"inventory": [18],
		"information": [{
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "长度",
			"attrValue": "33cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "木棉花"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 574,
		"date": "1500012701882",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149050,
		"price": 45,
		"topName": "花见小路·太阳花",
		"subName": "暖暖花束，向阳生活",
		"shortDescription": ["层叠花瓣", "饱满轮廓", "绒毛叶面", "真实自然", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/85dec84d50cd60d1660c22a09a4765df.png", "http://yanxuan.nosdn.127.net/78859755bb3a2100af1d98b1a936b89e.png", "http://yanxuan.nosdn.127.net/a28bbf8720a005e005f4d747e9d1d45f.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/cea1f6ece957e9697a974ccfed41d488.png", "http://yanxuan.nosdn.127.net/fd5609ad6b9eebd61cc5b3258844c297.jpg", "http://yanxuan.nosdn.127.net/9e393619448bd6868d5335686ce834f8.jpg", "http://yanxuan.nosdn.127.net/0fd8590b0a614d8acce3ce1b561b5c3c.jpg", "http://yanxuan.nosdn.127.net/77f90af41af081f91223a8b35d920021.jpg"],
		"types": ["黄白"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/32ab440495acaf07c34ad5d57d7432a0.jpg", "http://yanxuan.nosdn.127.net/5ea15ac8b0025dd90bbf60938213cbd6.jpg", "http://yanxuan.nosdn.127.net/fb1936dadb85f05199538b388aee0c2c.jpg", "http://yanxuan.nosdn.127.net/631caa7757e0afb2ed5583ef17ad6a40.jpg", "http://yanxuan.nosdn.127.net/d20c6a86b741c10e90f44be332acf2fe.jpg", "http://yanxuan.nosdn.127.net/b462294c1436f1bb071b359a5daf0a0c.jpg", "http://yanxuan.nosdn.127.net/2a71d59e79fcad2f64edf23df08ffdf9.jpg", "http://yanxuan.nosdn.127.net/8652e62fe844a4923fe338754cd067a4.jpg", "http://yanxuan.nosdn.127.net/c80dfbf6a45a2d4818241858d281184b.jpg", "http://yanxuan.nosdn.127.net/122dd070f1243f5ffa7cc0d943ee2f71.jpg", "http://yanxuan.nosdn.127.net/510fd2f56d32ebda41b1ff489d5116d8.jpg", "http://yanxuan.nosdn.127.net/64ed7b3254e68d939d68d477fe2760a2.jpg", "http://yanxuan.nosdn.127.net/6011368b6e3fcabe6d5e7c9b0c5c9946.jpg", "http://yanxuan.nosdn.127.net/e5537a1d2c4e997ddc2d0c3accd78d80.jpg", "http://yanxuan.nosdn.127.net/5849eb4ca0dd3a4676d21de08d5d6c5b.jpg", "http://yanxuan.nosdn.127.net/c3e80b9c0f02535fcea7df9844996359.jpg", "http://yanxuan.nosdn.127.net/a39db6f5ed2b22b7d3bc2a3a87804726.jpg", "http://yanxuan.nosdn.127.net/c6c6f6a6157abd77fde180c730bd72b2.jpg", "http://yanxuan.nosdn.127.net/0da71bb38c53d756f0951cfc552aabcc.jpg", "http://yanxuan.nosdn.127.net/10f3a3e5b53b8cf6df9303f738dad5af.jpg", "http://yanxuan.nosdn.127.net/46bf4b004e4778f276aec0f3f0ac88f0.jpg", "http://yanxuan.nosdn.127.net/65b5b856b1cfb894f2a1e61b4a621b6d.jpg", "http://yanxuan.nosdn.127.net/683697fda0cde8a0525bf23d8c32ef04.jpg", "http://yanxuan.nosdn.127.net/18180cc56586c1ed5732f2529fb28641.jpg", "http://yanxuan.nosdn.127.net/56d38d25ce4d7533188168c440f85055.jpg", "http://yanxuan.nosdn.127.net/51971e8c76e7618804af05e24b3730e0.jpg", "http://yanxuan.nosdn.127.net/49d1c7b180396f92eb6611a4117a3349.jpg", "http://yanxuan.nosdn.127.net/89766dfe14151f0ebc8f7c8dadcd9785.jpg", "http://yanxuan.nosdn.127.net/e42078a4fcab6c8de629fb84ed4be28b.jpg", "http://yanxuan.nosdn.127.net/9812001a485613b8d27d491ae413a8d6.jpg", "http://yanxuan.nosdn.127.net/8b328023edff5ee2186c2ad117a2341a.jpg", "http://yanxuan.nosdn.127.net/35669ffd1b6ecf74fb3e4cc4912a4b81.jpg", "http://yanxuan.nosdn.127.net/59ed10af5206bdad981200bf26a087ef.jpg", "http://yanxuan.nosdn.127.net/e12c6c302b328dc86cb3248008ae6f1c.jpg", "http://yanxuan.nosdn.127.net/2fa06841eb8321d5b9cb25a12675e746.jpg", "http://yanxuan.nosdn.127.net/71b555dd4286bd7f26efa53cff3bfd13.jpg", "http://yanxuan.nosdn.127.net/5bf75213d11c0f22d124f8495fcb1ab2.jpg", "http://yanxuan.nosdn.127.net/c706ac5a2f101084f116cee8301955d0.jpg", "http://yanxuan.nosdn.127.net/047da3169029e0c1388ed625d21c898d.jpg"],
		"inventory": [255],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黄白相间"
		}, {
			"attrName": "长度",
			"attrValue": "50cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "太阳花"
		}, {
			"attrName": "数量",
			"attrValue": "一束（6支）"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 443,
		"date": "1500012705116",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149047,
		"price": 49,
		"topName": "花见小路·虞美人",
		"subName": "活力嫩黄，四季如春",
		"shortDescription": ["轮廓简洁", "清新自然", "花型洒脱", "立体生动", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d2486569e27e7481142c5310d62404a8.png", "http://yanxuan.nosdn.127.net/105f71b66db72051b3b9582a6351e6d9.png", "http://yanxuan.nosdn.127.net/015f0fa8476f2ab101ded7350cf355e1.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/ad605f1c0cb46c099f294cd7a8c46324.png", "http://yanxuan.nosdn.127.net/f94d3d5812d7fd76cc231e4c4860628e.jpg", "http://yanxuan.nosdn.127.net/70c9ef27430c1ce9d45b080f0d0a0801.jpg", "http://yanxuan.nosdn.127.net/36bf37b164ac18964c71e156fdff6519.jpg", "http://yanxuan.nosdn.127.net/90cc101bec9809c008472b9e349661f8.jpg"],
		"types": ["黄色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/855116baf19a063c6e7018771eb0ac49.jpg", "http://yanxuan.nosdn.127.net/53079166abc25b2d635a53b497998bf0.jpg", "http://yanxuan.nosdn.127.net/2a5766cbe5c8ce8795032d038a1df37a.jpg", "http://yanxuan.nosdn.127.net/740e4a12227d348ca06cb4c33c411c6a.jpg", "http://yanxuan.nosdn.127.net/861636a76978ba0603ef0a58a79ff6eb.jpg", "http://yanxuan.nosdn.127.net/646ff8e1aebe7e1b457ad5c4a954fea3.jpg", "http://yanxuan.nosdn.127.net/68fb5d9c543bdb723014e39e1ad7439c.jpg", "http://yanxuan.nosdn.127.net/3563c791605b24f3e11d079147abfd44.jpg", "http://yanxuan.nosdn.127.net/9cecbe4014dc5c4bf7fe238d27ca019d.jpg", "http://yanxuan.nosdn.127.net/c3dfff0e180ad72d4915db5595823ac8.jpg", "http://yanxuan.nosdn.127.net/f351fcc6077f0245eb7b4dcf52ab017b.jpg", "http://yanxuan.nosdn.127.net/a005771b2599fd0cb65d40a4fde38718.jpg", "http://yanxuan.nosdn.127.net/ea2dc1fcf443ff68ecc222c42dde1e56.jpg", "http://yanxuan.nosdn.127.net/b6e356e8570e08cad198a0b66e4e4f86.jpg", "http://yanxuan.nosdn.127.net/7c190591274cd63ae0f328e489109402.jpg", "http://yanxuan.nosdn.127.net/0626bef3141c969a022bc4c2575fc0c5.jpg", "http://yanxuan.nosdn.127.net/2dc5a7d7cb61aff4d0b9ec082035e5a1.jpg", "http://yanxuan.nosdn.127.net/60b2ba908146780705778129fa3c494c.jpg", "http://yanxuan.nosdn.127.net/16a3bb351f07f57061482692dff4ea1d.jpg", "http://yanxuan.nosdn.127.net/47db5ddcbf52f8ca951cfa5dd3fcaa0c.jpg", "http://yanxuan.nosdn.127.net/6c90089aa967f0780a8d704ba88aa34e.jpg", "http://yanxuan.nosdn.127.net/ea9b7606914c3a003d3d4ae8f56a5f41.jpg", "http://yanxuan.nosdn.127.net/f49a0e2ecbcdc9ce8db82e856aa924b6.jpg", "http://yanxuan.nosdn.127.net/4a3913dd025d8d3df2c355dbd3d39e65.jpg", "http://yanxuan.nosdn.127.net/b2117b37a5783926d5b93099a3065580.jpg", "http://yanxuan.nosdn.127.net/c410faaa52fd7af3ac4745474775901a.jpg", "http://yanxuan.nosdn.127.net/3312bbf5e72ff37dc1c37d1c6c36e81b.jpg", "http://yanxuan.nosdn.127.net/5977a46fa612b00c68ca9124be2a1b65.jpg", "http://yanxuan.nosdn.127.net/4e63415a2726e7bb3553f8712650ff8e.jpg", "http://yanxuan.nosdn.127.net/c6496a28347fa7cfba0cd9bcf384f519.jpg", "http://yanxuan.nosdn.127.net/16617584a2cad1551277ebdad440cf93.jpg", "http://yanxuan.nosdn.127.net/03b13da9811d0aafc8782db2060a3086.jpg", "http://yanxuan.nosdn.127.net/e7f8cfb725e660d3cdffd72db86b28e1.jpg", "http://yanxuan.nosdn.127.net/37aff1307bfe4ee088217a0a199fccc5.jpg", "http://yanxuan.nosdn.127.net/c856f58eb7bf5405b3462419617c1168.jpg", "http://yanxuan.nosdn.127.net/1228c61ed0abe7d3bad225503b7eb5f7.jpg", "http://yanxuan.nosdn.127.net/215197245bbb4ccdde0949e2138a80be.jpg", "http://yanxuan.nosdn.127.net/94bbb9965ce94567a33a222a57f855ec.jpg", "http://yanxuan.nosdn.127.net/66c900b32b0003f1a9c9dc3f006cc8b3.jpg", "http://yanxuan.nosdn.127.net/9059aca55f452b7f8c18f809b16db87e.jpg", "http://yanxuan.nosdn.127.net/19b8fd7c7ca8d4ac4232c18ad3c166ae.jpg", "http://yanxuan.nosdn.127.net/cee89b6f6f88fa040ebcee9c39f78a4a.jpg", "http://yanxuan.nosdn.127.net/68831b6e41663c5deff7f16a10484547.jpg", "http://yanxuan.nosdn.127.net/7923dd079e1fcd45343e76c926bb744d.jpg", "http://yanxuan.nosdn.127.net/4259b09ebc8936679b105d98e6e3933b.jpg", "http://yanxuan.nosdn.127.net/f4e61c1da3cd32f10c11e21dc2028ff9.jpg", "http://yanxuan.nosdn.127.net/28819eed20569c343a7f9124d8b9a68f.jpg"],
		"inventory": [234],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黄色"
		}, {
			"attrName": "长度",
			"attrValue": "30.5cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "虞美人"
		}, {
			"attrName": "数量",
			"attrValue": "一束（7支）"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 491,
		"date": "1500012707985",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1149053,
		"price": 39,
		"topName": "花见小路·橄榄枝",
		"subName": "清新绿意，园林艺术",
		"shortDescription": ["绢布质地", "叶纹清晰", "手工工艺", "打造真实", "环保材质", "安全放心"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/201ac297aa27e16f5976e6fa933504e7.png", "http://yanxuan.nosdn.127.net/aec0da174309774e7c80f6c29b4f321e.png", "http://yanxuan.nosdn.127.net/459798ea47e5448d7a513ca66f038d9e.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/2b64798a95c542bce1ddf054fa453a55.png", "http://yanxuan.nosdn.127.net/4509a41d4fb51001eb64998b8fc6d440.jpg", "http://yanxuan.nosdn.127.net/cc1a8d1e86115f6ace05d593f9dd4f2d.jpg", "http://yanxuan.nosdn.127.net/b504c743025f8e80a2476581aaf73321.jpg", "http://yanxuan.nosdn.127.net/13b34c60e764cbd296cb71102ea6b266.jpg"],
		"types": ["绿色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/b2ee82e24ff8f415641e92141ca52831.jpg", "http://yanxuan.nosdn.127.net/524ce94a13bd2fd1494509744c13b311.jpg", "http://yanxuan.nosdn.127.net/df0e3f6cc6769d8602bcc4a1e2acf819.jpg", "http://yanxuan.nosdn.127.net/e546df5c5499b7477b5deae43257ec2d.jpg", "http://yanxuan.nosdn.127.net/50dd41854a7603fd77441fed10f172a3.jpg", "http://yanxuan.nosdn.127.net/97637105be4f9d9dd0717e6b414929bb.jpg", "http://yanxuan.nosdn.127.net/e7a074e3a86d33d4cb6a561c30f1380b.jpg", "http://yanxuan.nosdn.127.net/12ddd32ab9b1f4a2c0d3432078a4d423.jpg", "http://yanxuan.nosdn.127.net/7616a2a53f56312fe9a3b05b3a858bfe.jpg", "http://yanxuan.nosdn.127.net/2ba8be420307a52e0665d77e4b6b8954.jpg", "http://yanxuan.nosdn.127.net/67a7ca892344f02e015de299e934269b.jpg", "http://yanxuan.nosdn.127.net/972ac8c1d5eb9a6c7a333ae6f300eb19.jpg", "http://yanxuan.nosdn.127.net/e56f996f3e2e723425ad83a61f87125a.jpg", "http://yanxuan.nosdn.127.net/e27ad35a4922a0d3e0f9860611a8d20f.jpg", "http://yanxuan.nosdn.127.net/089530c184df1e9022c7d3c2628cf67f.jpg", "http://yanxuan.nosdn.127.net/f2ee6dfbabeb7be2515fbb003bdec730.jpg", "http://yanxuan.nosdn.127.net/41b66cee25ef40bf0b70358d8481c042.jpg", "http://yanxuan.nosdn.127.net/178604afa685566e6d29713b986338a5.jpg", "http://yanxuan.nosdn.127.net/94491d16a48c3498d3dd1681455fc7b7.jpg", "http://yanxuan.nosdn.127.net/c39d18cce2a867687f1eb86b89bfcf1e.jpg", "http://yanxuan.nosdn.127.net/9d3a9f9d17002d8c38cb6c397d319040.jpg", "http://yanxuan.nosdn.127.net/84db5565cf9303ed359cac1bcf94f285.jpg", "http://yanxuan.nosdn.127.net/6cd47a195137738ba942d8824726e687.jpg", "http://yanxuan.nosdn.127.net/ebd2f214d89e538a0c61d2a2264044c6.jpg", "http://yanxuan.nosdn.127.net/e6692bac513a9dd92d7049ef8d36869e.jpg", "http://yanxuan.nosdn.127.net/2408395779decaddad0ee99682b31263.jpg", "http://yanxuan.nosdn.127.net/1e085d90df3810d7c34cb8b814259470.jpg", "http://yanxuan.nosdn.127.net/d5a7e2911c32b31b34a66dd81ddcdde8.jpg", "http://yanxuan.nosdn.127.net/4986ee386998e23bb4a69ae76a60a286.jpg", "http://yanxuan.nosdn.127.net/2e909069c3569ebdc547e80342d08fd4.jpg", "http://yanxuan.nosdn.127.net/d3fbcb32cd1ff6993ddefabb6ee092da.jpg", "http://yanxuan.nosdn.127.net/e6b6dc0ee90600ad9136fe80cfa3dfbe.jpg", "http://yanxuan.nosdn.127.net/30aa57172bcc9bcc20e400e999e8c860.jpg", "http://yanxuan.nosdn.127.net/35ae8f49dab1aaaf41edfe005176f317.jpg", "http://yanxuan.nosdn.127.net/f94ee19cf34de6757ce0e63e521691cc.jpg", "http://yanxuan.nosdn.127.net/ea0fe8a74ce860e00db4291141590e48.jpg", "http://yanxuan.nosdn.127.net/349339d5c67fa73c1be664831e3bf45a.jpg", "http://yanxuan.nosdn.127.net/09c070bfc38d6dc099facc728b4996a5.jpg", "http://yanxuan.nosdn.127.net/b54685e7e8fc50f2a637efde0ed9be09.jpg", "http://yanxuan.nosdn.127.net/4a220fd628175c1202d6945351ad1c28.jpg", "http://yanxuan.nosdn.127.net/5d3bcff0c6ab2650ec23b009d0824e8e.jpg", "http://yanxuan.nosdn.127.net/9d3fac602e3608900b052492b931bf9c.jpg", "http://yanxuan.nosdn.127.net/dc4249b6aed8be5e717f46085fa7a640.jpg"],
		"inventory": [75],
		"information": [{
			"attrName": "颜色",
			"attrValue": "绿色"
		}, {
			"attrName": "长度",
			"attrValue": "100cm"
		}, {
			"attrName": "花草种类",
			"attrValue": "橄榄枝"
		}, {
			"attrName": "数量",
			"attrValue": "一支"
		}],
		"label": "",
		"manufacture": "Harbor House制造商",
		"sale": 862,
		"date": "1500012711177",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1065004,
		"price": 199,
		"topName": "悦己日式木质落地镜",
		"subName": "流畅线条，日式简约",
		"shortDescription": ["支架牢固", "稳定耐用", "优质银镜", "成像清晰", "精选五金", "防潮防锈"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/5e1c317d11e340bf0154f6ef331fc770.jpg", "http://yanxuan.nosdn.127.net/e0be70df7447753dbfd0b14b35f35809.jpg", "http://yanxuan.nosdn.127.net/243c28ff560392bac1ccc1a0e18dc870.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/369da1561ecc731b7300f87294309e86.png", "http://yanxuan.nosdn.127.net/3ca2cf7fcfb2bf2b9eba22157a636344.jpg", "http://yanxuan.nosdn.127.net/95d190d1f69187f02385ebc493342cb8.jpg", "http://yanxuan.nosdn.127.net/954b84c81b137c4cf15c93d21d4e4945.jpg", "http://yanxuan.nosdn.127.net/38d3e733df9a3c7dc2b47f4895fe36cb.jpg"],
		"types": ["原木色", "棕色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/071505a555d7af3302888633ecf1a333.jpg", "http://yanxuan.nosdn.127.net/63af8dab1db0b12a52eb57c7cdd13907.jpg", "http://yanxuan.nosdn.127.net/e12daa804d477c788dc3fde7cbbbcf9c.jpg", "http://yanxuan.nosdn.127.net/e1774e70b84d5649c3f59160366a8be2.jpg", "http://yanxuan.nosdn.127.net/6bc88b8ff219bbbb9c314a60a539ab76.jpg", "http://yanxuan.nosdn.127.net/528a4a9baf15d763365769999e787564.jpg", "http://yanxuan.nosdn.127.net/afdc632bcb0604fb9a2dc692c6834c4e.jpg", "http://yanxuan.nosdn.127.net/38c34f66c7ec5ca66addf09ae943a613.jpg", "http://yanxuan.nosdn.127.net/982421fefa534064491077cfb8386113.jpg", "http://yanxuan.nosdn.127.net/de1abde1a9677876e9c376d931ec588a.jpg", "http://yanxuan.nosdn.127.net/272fc358498057cdd10f8f9dd99a86bd.jpg", "http://yanxuan.nosdn.127.net/e997339dee9e99bf077d51dc1a3bec44.jpg", "http://yanxuan.nosdn.127.net/a58d59b86dfcaaa50c9a09d8395ed4a0.jpg", "http://yanxuan.nosdn.127.net/d2f4cb3d00ebf750197e66eee3526c11.jpg", "http://yanxuan.nosdn.127.net/20618b212b6346536b1ee5bf41cf5dad.jpg", "http://yanxuan.nosdn.127.net/e7d06fa872740ca7da95fc4776dce3ec.jpg", "http://yanxuan.nosdn.127.net/7a5f32728136b480c2c111ff1044ce83.jpg", "http://yanxuan.nosdn.127.net/c13b162992646bdfa930f2700512d958.jpg", "http://yanxuan.nosdn.127.net/ed01c9ed90b3f7e612431513f0b9c208.jpg", "http://yanxuan.nosdn.127.net/06c384ef3116265888d3603b0174f5d7.jpg", "http://yanxuan.nosdn.127.net/c830d6d5d40ddf9781a864b4c3bec83c.jpg", "http://yanxuan.nosdn.127.net/05a0002f0886f4376790d00c03112ed6.jpg", "http://yanxuan.nosdn.127.net/bb2e6937b3cd8c8680f775801f7b26ca.jpg", "http://yanxuan.nosdn.127.net/56debcbe3a03f1417952e4ac7c89c808.jpg", "http://yanxuan.nosdn.127.net/b356769c6bb5ddebd99edd7792c76aff.jpg", "http://yanxuan.nosdn.127.net/6b539c78b905f02ef2be70518d3ac0a1.jpg", "http://yanxuan.nosdn.127.net/20d39e45843e2ee11507debc6ba7cd23.jpg"],
		"inventory": [804, 407],
		"information": [{
			"attrName": "颜色",
			"attrValue": "原木色/ 棕色"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB/T 23148-2008"
		}, {
			"attrName": "产地",
			"attrValue": "中国苏州"
		}, {
			"attrName": "温馨提示",
			"attrValue": "原木色为水曲柳贴皮，棕色为胡桃木贴皮。"
		}],
		"label": "",
		"manufacture": "",
		"sale": 896,
		"date": "1500012714469",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1109034,
		"price": 129,
		"topName": "LCD电子钟 升级版",
		"subName": "MUJI风格，清晰简明",
		"shortDescription": ["精确闹铃", "可靠安心", "温度显示", "科学实用", "夜间背光", "轻柔护眼"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/07e332e862084dd3161e8af4bbdacd28.jpg", "http://yanxuan.nosdn.127.net/4a2ff57e6b7f005e8f6761af56d64a35.jpg", "http://yanxuan.nosdn.127.net/a52458ace4992a034f51cf358ee2e927.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/74771e64cdb6f123bdc8b8050baeffd7.png", "http://yanxuan.nosdn.127.net/0251bd141f5b55bd4311678750a6b344.jpg", "http://yanxuan.nosdn.127.net/59c2d5822cda19f8caa2d9034937f565.jpg", "http://yanxuan.nosdn.127.net/3d089c7c2a04ee17767a283a9f115dd0.jpg", "http://yanxuan.nosdn.127.net/0421111cdef15b0c9777da80eb66f696.jpg"],
		"types": ["象牙白"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/916068b542d339d851afa9ed21cbb615.jpg", "http://yanxuan.nosdn.127.net/1772c676b8a0151a3277415147e91aea.jpg", "http://yanxuan.nosdn.127.net/a2654631d02db94d1b16f35c3386e295.jpg", "http://yanxuan.nosdn.127.net/fe4364bc9c185394f155ef30a9fe7a20.jpg", "http://yanxuan.nosdn.127.net/2c75be07a87009da083944b52a283bf3.jpg", "http://yanxuan.nosdn.127.net/f19e7292288a347d0fa0590e22069946.jpg", "http://yanxuan.nosdn.127.net/39f509f66ae98d0aca642af803abdf04.jpg", "http://yanxuan.nosdn.127.net/8d540abac2bef015ac85083e377bbcd7.jpg", "http://yanxuan.nosdn.127.net/c7468d589f382664c61275bebfaf9177.jpg", "http://yanxuan.nosdn.127.net/885bb0148c6104578cd7ee31813dab44.jpg", "http://yanxuan.nosdn.127.net/a4ec0f7b8cabadbaca834957b65fd5ec.jpg", "http://yanxuan.nosdn.127.net/fb2cf783f23f6945e961979a5cb2af27.jpg", "http://yanxuan.nosdn.127.net/62c6c3025ce0a80b9cb0a214595a5a99.jpg", "http://yanxuan.nosdn.127.net/7be5447b74b0afd0cd3943adbf559cb9.jpg", "http://yanxuan.nosdn.127.net/840c818a1206e5ae2a01a1e8800e4b4b.jpg", "http://yanxuan.nosdn.127.net/fb8b9a45109a23285415fade5a798e27.jpg", "http://yanxuan.nosdn.127.net/c00c0a1b4af1503a90ef691999fdf4d9.jpg", "http://yanxuan.nosdn.127.net/be93945860e951158237bbf4a1c86b96.jpg", "http://yanxuan.nosdn.127.net/bc0d8c9697cbf9303954b77761ff4a0f.jpg", "http://yanxuan.nosdn.127.net/8abfd0b6ea2dd3106ea8678793279d6f.jpg", "http://yanxuan.nosdn.127.net/abd55ff4c1325917cca7123dfaaccf2c.jpg", "http://yanxuan.nosdn.127.net/ec2c42f5a7c6c2efefb16db80cf761b2.jpg", "http://yanxuan.nosdn.127.net/5f394d926f4acfbd70b6ad3d733cc3e5.jpg", "http://yanxuan.nosdn.127.net/01a4b743fe1395c9797c5922dd1f3a8a.jpg", "http://yanxuan.nosdn.127.net/22115c51b22dcf614054887e6662ddd3.jpg", "http://yanxuan.nosdn.127.net/8fc720dc92ab05aaef2b055e5e3d27c8.jpg", "http://yanxuan.nosdn.127.net/adb14137997b1a886a39e98a043ec511.jpg", "http://yanxuan.nosdn.127.net/e53b80ee6104b5cea8edbff8bbe5547c.jpg", "http://yanxuan.nosdn.127.net/92e56e6bc6f548fae669831b38bfbc6f.jpg", "http://yanxuan.nosdn.127.net/20b74a363cdb9b31e0141869fd285dbe.jpg", "http://yanxuan.nosdn.127.net/031d65d8ebee352f28f614cc07935606.jpg", "http://yanxuan.nosdn.127.net/a31a92d72ea93692a5cfbcaa7a02ced4.jpg", "http://yanxuan.nosdn.127.net/b897a81ca59bc7dd3aae8fe314254538.jpg", "http://yanxuan.nosdn.127.net/77d0fbc4678a56713ae675a9884e4158.jpg", "http://yanxuan.nosdn.127.net/da8a7b7237f083a6561c9ffc8a97b466.jpg", "http://yanxuan.nosdn.127.net/2724952293dfb4ab737640fab4b229d9.jpg", "http://yanxuan.nosdn.127.net/e10bbb914bf44916e86b446e4c563d85.jpg", "http://yanxuan.nosdn.127.net/c64c103d15388c0eda01086b8b977fe5.jpg", "http://yanxuan.nosdn.127.net/8d21b85379acabe83c692c5ebf625578.jpg", "http://yanxuan.nosdn.127.net/2f5c0d32e5ef81288dc44d08d183770b.jpg", "http://yanxuan.nosdn.127.net/24dedb497122ca1a4b5bcdf10f4b9a85.jpg", "http://yanxuan.nosdn.127.net/02ece671c8dbca5f5436ff9f2eaf1b81.jpg", "http://yanxuan.nosdn.127.net/348adaa1d5bfe5b12296bb28e55e7017.jpg", "http://yanxuan.nosdn.127.net/d22886559be279a0adbe787b5aae9dd0.jpg"],
		"inventory": [705],
		"information": [{
			"attrName": "执行标准",
			"attrValue": "GB/T22779-2008"
		}, {
			"attrName": "尺寸",
			"attrValue": "9.8 x 3.05 x 5.8cm"
		}],
		"label": "",
		"manufacture": "西铁城CITIZEN制造商",
		"sale": 412,
		"date": "1500012717703",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1154004,
		"price": 79,
		"topName": "黑凤梨 复古双耳闹钟",
		"subName": "小巧复古，精致双耳",
		"shortDescription": ["丽声机芯", "时间精准", "双耳设计", "精致复古", "夜灯功能", "轻松读书"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0c6e69b57ad630145389e6109a685614.png", "http://yanxuan.nosdn.127.net/ca5e71c8b29825283a3a760a3e0e6b82.png", "http://yanxuan.nosdn.127.net/4fa062d7919cf1cc82d8e123e87703f6.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/ef534d54d742a9fbf752545aab788897.png", "http://yanxuan.nosdn.127.net/ce2bcff1241800c374cb760c81007490.jpg", "http://yanxuan.nosdn.127.net/d058604d895f03524c1c388a824a4896.jpg", "http://yanxuan.nosdn.127.net/1730b073e1650f8814d869d7f20d490c.jpg", "http://yanxuan.nosdn.127.net/ef498b450c315be571c7ef737089df33.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/90508104f8ae4714d57a6d0df83bb649.jpg", "http://yanxuan.nosdn.127.net/16a9c99b2023415953bd0672de77559f.jpg", "http://yanxuan.nosdn.127.net/cb138f5836bd07d2b3c26f6ab902c9eb.jpg", "http://yanxuan.nosdn.127.net/eefea99df5534b1d6e96dfaf84de6e02.jpg", "http://yanxuan.nosdn.127.net/a0e4903e2526f6739fd9e0fc211b4a93.jpg", "http://yanxuan.nosdn.127.net/78c232e940f803e547b0e7243a98526d.jpg", "http://yanxuan.nosdn.127.net/a29087331eb968753c3307ef56fa78a0.jpg", "http://yanxuan.nosdn.127.net/1552b48031384ec0033a5ce4c50432b1.jpg", "http://yanxuan.nosdn.127.net/8b27c791472e151832f3112032d470b0.jpg", "http://yanxuan.nosdn.127.net/38124e1fc59c8eb1f955f7d77a6f2c24.jpg", "http://yanxuan.nosdn.127.net/3601e947a7c0de675e4eabc1262012ad.jpg", "http://yanxuan.nosdn.127.net/9cb23d4e5851b026009bb72470a9ff15.jpg", "http://yanxuan.nosdn.127.net/c7922665632e395bdf0b49e7d8a1e2a1.jpg", "http://yanxuan.nosdn.127.net/eb36ff54ef0bf28fa322cae4e4108dd2.jpg", "http://yanxuan.nosdn.127.net/0621136b1d380d15fb36a8fb1e07ab12.jpg", "http://yanxuan.nosdn.127.net/b2fc6c626887e47217b55279ec8ed2a5.jpg", "http://yanxuan.nosdn.127.net/576498e8ad125d312ffdd8eb5bb9736b.jpg", "http://yanxuan.nosdn.127.net/df011d8bf5d47470ca3d5321db316230.jpg", "http://yanxuan.nosdn.127.net/91d35554aa9be3123425c618f6067a5d.jpg", "http://yanxuan.nosdn.127.net/94570965d005608f723d2f2fc32c55cc.jpg", "http://yanxuan.nosdn.127.net/cc82637bf572e0f12d1eed98850da85e.jpg", "http://yanxuan.nosdn.127.net/8741334435d3d626880b98e4a89e522b.jpg", "http://yanxuan.nosdn.127.net/e09321f69fbb15efa5c786534c27c81e.jpg", "http://yanxuan.nosdn.127.net/9c7b5bf964b2572fb347a5ce12273bd0.jpg", "http://yanxuan.nosdn.127.net/6c791a5a83b63c089f1f593780baaba4.jpg", "http://yanxuan.nosdn.127.net/cca1536ceb14cd92ab34203fa6e2282c.jpg", "http://yanxuan.nosdn.127.net/83f7c1d14a3e90dd27e8a96b5b071a2c.jpg", "http://yanxuan.nosdn.127.net/44268676e9e78b09573808888dfafc31.jpg", "http://yanxuan.nosdn.127.net/026243e6a0ff5600d43417c1342c8d4d.jpg", "http://yanxuan.nosdn.127.net/9e50603ca0f4065a8f2553d3194943e4.jpg", "http://yanxuan.nosdn.127.net/b15c557a77802da6d21e777506bce284.jpg", "http://yanxuan.nosdn.127.net/f7b47b967b9879c37d755baf9e57b57b.jpg", "http://yanxuan.nosdn.127.net/cb8fac3e026ecd6901f4de063ec8bd4a.jpg", "http://yanxuan.nosdn.127.net/15235e62d79b213512d944652eeb254b.jpg", "http://yanxuan.nosdn.127.net/ab5aff71cfebb53756346c2cc1364971.jpg", "http://yanxuan.nosdn.127.net/fb4182b42eb38592d43896f8a3267ea9.jpg", "http://yanxuan.nosdn.127.net/666eb549ac10dde09b7b71481b4c1ecb.jpg", "http://yanxuan.nosdn.127.net/17d68978744ae76a7cec14113658ee5e.jpg", "http://yanxuan.nosdn.127.net/67be59a8b0a7462c50504c5a1f5977bd.jpg", "http://yanxuan.nosdn.127.net/c7f0922943c7932bad1deae45c405f94.jpg", "http://yanxuan.nosdn.127.net/f088b265609a7ea7f2c0f87d6de9b3ff.jpg", "http://yanxuan.nosdn.127.net/42d9c6ab41823dab536fcf1e9b13d68c.jpg", "http://yanxuan.nosdn.127.net/bf15185d411c9fdde26ce254ec83bea8.jpg", "http://yanxuan.nosdn.127.net/c9d41602cb8a13f9650eb55f922b568c.jpg", "http://yanxuan.nosdn.127.net/e830fc0e8854bb85c3dd1ef783e9254d.jpg", "http://yanxuan.nosdn.127.net/4be8d4c2958944cd0bab724055f34aae.jpg", "http://yanxuan.nosdn.127.net/79f5b6dc1299f53403da1f5c69620989.jpg"],
		"inventory": [419],
		"information": [{
			"attrName": "时钟功能",
			"attrValue": "石英钟表"
		}, {
			"attrName": "颜色",
			"attrValue": "白色"
		}, {
			"attrName": "防水防尘功能",
			"attrValue": "无"
		}, {
			"attrName": "是否含电池",
			"attrValue": "不含"
		}, {
			"attrName": "能源",
			"attrValue": "5号电池*1"
		}],
		"label": 新品,
		"manufacture": "西铁城CITIZEN制造商",
		"sale": 238,
		"date": "1500012720746",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1109005,
		"price": 79,
		"topName": "黑凤梨 方圆木钟",
		"subName": "坚硬榉木，实木雕刻",
		"shortDescription": ["圆角打磨", "预防磕碰", "静音机芯", "安稳陪伴", "闹铃功能", "简约实用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/e18f53fa9a09003e20c0b9f0717960b4.jpg", "http://yanxuan.nosdn.127.net/1845169291628e13ff262daae7c82123.jpg", "http://yanxuan.nosdn.127.net/624e290c9f8ff42ff2103693f9009572.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f5bcadd3851c7d86937cf2325fad6590.png", "http://yanxuan.nosdn.127.net/fc5bf833a02a3be40e3e396a1c5a9c13.jpg", "http://yanxuan.nosdn.127.net/43870fe7ec3c7186fb093ab50d94fa3a.jpg", "http://yanxuan.nosdn.127.net/66ac578985180b614c88fda44a2eb26b.jpg", "http://yanxuan.nosdn.127.net/afcd8c99f588072f1ad755762294dca1.jpg"],
		"types": ["榉木"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/f5bff32bb597d4fcc52b83d5fae83cf0.jpg", "http://yanxuan.nosdn.127.net/54b21ce97c884476514ad9a60ef12c6a.jpg", "http://yanxuan.nosdn.127.net/56a7240d063f92da3ef2433a3ccd5fea.jpg", "http://yanxuan.nosdn.127.net/24e2a230f78d05a9d0c82651fce17c11.jpg", "http://yanxuan.nosdn.127.net/c0351fbdd69eca35acb4d866e7c9f3b5.jpg", "http://yanxuan.nosdn.127.net/25b4c2add128d66d26490e336b957d9e.jpg", "http://yanxuan.nosdn.127.net/cf7aea172123707ae6e6f1fa5c34a43e.jpg", "http://yanxuan.nosdn.127.net/2b1fed9fc548408dfa50ea693773fc2f.jpg", "http://yanxuan.nosdn.127.net/31bbf17b6b7f9f1286906f957ec7d984.jpg", "http://yanxuan.nosdn.127.net/c9c2e985e9a1618cdcfd7757ffe673b5.jpg", "http://yanxuan.nosdn.127.net/94f1b371b08b3edf5b2d1dea018c2876.jpg", "http://yanxuan.nosdn.127.net/15a5166d7d37710be45a5e6a8dc89bf5.jpg", "http://yanxuan.nosdn.127.net/b051bf121ba67fc32a2b8fc0a3764596.jpg", "http://yanxuan.nosdn.127.net/3a6c79bfe59b3b1e21d449a0eb2b44d9.jpg", "http://yanxuan.nosdn.127.net/5d4a5dd2924d001274417036e706eb19.jpg", "http://yanxuan.nosdn.127.net/3861c3ea39143fdf6ef7f70f4fb0c53b.jpg", "http://yanxuan.nosdn.127.net/6d0d68f7b5743b1312773b8afb5d8a9f.jpg", "http://yanxuan.nosdn.127.net/b006dddca75983150e0ca74aa34825c1.jpg", "http://yanxuan.nosdn.127.net/d771e3f987bb0623e1df607ce4fb7423.jpg", "http://yanxuan.nosdn.127.net/1184f8b75af305491b9670519fd82645.jpg", "http://yanxuan.nosdn.127.net/dad61a53e6f6836ba353d72a0659dedd.jpg", "http://yanxuan.nosdn.127.net/95f6793a273fc69d77451f05f718e85a.jpg", "http://yanxuan.nosdn.127.net/1fa9a0cada05e1b732b580b70ceea9af.jpg", "http://yanxuan.nosdn.127.net/b1a0b09cc1baebd43c13a4a8a004c463.jpg", "http://yanxuan.nosdn.127.net/99d1884472b1ebfeaa9f451280de1a0b.jpg", "http://yanxuan.nosdn.127.net/0f1bf668d7158d0a989d0dbc935c1100.jpg", "http://yanxuan.nosdn.127.net/d838520237696c42e7088a5e41701240.jpg", "http://yanxuan.nosdn.127.net/5da779d3d62a6a562ca2ed38e389561f.jpg", "http://yanxuan.nosdn.127.net/ee10b35bbb592ee841388722f693c3b4.jpg", "http://yanxuan.nosdn.127.net/c412b5e2aa03d45b15f81f8366941c3d.jpg", "http://yanxuan.nosdn.127.net/5be582fc17080e6daa029b5835d8b9e4.jpg", "http://yanxuan.nosdn.127.net/d4d5b814738f6b2fa5fd0d8b044d84d8.jpg", "http://yanxuan.nosdn.127.net/f2ae64b6c6f7b66d0b34020cc988c657.jpg", "http://yanxuan.nosdn.127.net/eb56d362a618d766bbf1ad421bcdade7.jpg", "http://yanxuan.nosdn.127.net/ab2c3e8e9bd62cde925fa9403dc41dd8.jpg", "http://yanxuan.nosdn.127.net/49a60f4b2321d31c4347f62c80e858b3.jpg", "http://yanxuan.nosdn.127.net/62cbc56d8a09c0bfe4cdd8cbc58758ee.jpg", "http://yanxuan.nosdn.127.net/a0c5c7342cac216c9528f13cbde39a7c.jpg", "http://yanxuan.nosdn.127.net/3336d5d9c0d383c8c96da249ad2992e5.jpg", "http://yanxuan.nosdn.127.net/47f414375d9365f0ba4fe7be15bf5456.jpg", "http://yanxuan.nosdn.127.net/8091cb24d4fc19b5394cc13faec2c20d.jpg", "http://yanxuan.nosdn.127.net/2a53e4f99601f82dbb6a0accd8d65e5e.jpg", "http://yanxuan.nosdn.127.net/e97d1a12aa0cf5b90a7d279f1d749442.jpg", "http://yanxuan.nosdn.127.net/89e527647017316db04d8941fc8e7f6b.jpg", "http://yanxuan.nosdn.127.net/d3f0b166c73da04a307845c8299b5b2b.jpg", "http://yanxuan.nosdn.127.net/3293dcc8baa03a4675bc2daa856cb80d.jpg"],
		"inventory": [18],
		"information": [{
			"attrName": "尺寸",
			"attrValue": "12*4.5*12cm"
		}, {
			"attrName": "机芯类型",
			"attrValue": "扫秒机芯"
		}, {
			"attrName": "颜色",
			"attrValue": "原木色"
		}, {
			"attrName": "能源",
			"attrValue": "5号电池*1"
		}],
		"label": "",
		"manufacture": "",
		"sale": 133,
		"date": "1500012723876",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1109004,
		"price": 89,
		"topName": "简日挂钟",
		"subName": "极简风格，精确读数",
		"shortDescription": ["机芯静音", "安稳陪伴", "经典造型", "百搭配色", "无镜钟面", "质朴纯粹"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4178a54d9f9d15a882fc182f83f4d806.jpg", "http://yanxuan.nosdn.127.net/04b88a7d93cf1f184539553028a6c181.jpg", "http://yanxuan.nosdn.127.net/e4380ea559b080f35cd9715214bda648.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d25b5990f16c6d1ac168a34b7aeca681.png", "http://yanxuan.nosdn.127.net/ed50cbf7fab10b35f676e2451e112130.jpg", "http://yanxuan.nosdn.127.net/6e13c6483850a3fb217b888ff22eee6d.png", "http://yanxuan.nosdn.127.net/d5d2f5173682bcd9e1d5472b7dcac591.jpg", "http://yanxuan.nosdn.127.net/cb465057857eade369ace03ad95d6765.jpg"],
		"types": ["10寸", "12寸"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/ed6209acc582861a4532565144bef700.jpg", "http://yanxuan.nosdn.127.net/d93a219ccd2cf7fbd0a6123794d78134.jpg", "http://yanxuan.nosdn.127.net/d3e1e4b0e1c00934ac0c07c4ae45a950.jpg", "http://yanxuan.nosdn.127.net/1c9c486cff57a78914ad8e4e67da3593.jpg", "http://yanxuan.nosdn.127.net/bf1894242c6f85ccc1e344bc74a7d3fc.jpg", "http://yanxuan.nosdn.127.net/131e4470d228bab143b5430da6ec0321.jpg", "http://yanxuan.nosdn.127.net/11b92847ff14aab16ba8358dcece8abb.jpg", "http://yanxuan.nosdn.127.net/57477bb84bc01af24cdf48056a2caad7.jpg", "http://yanxuan.nosdn.127.net/61b9cb485b704ddb9f83a60fd09e91c5.jpg", "http://yanxuan.nosdn.127.net/fa87555d481801395547dd76f5a8cfd8.jpg", "http://yanxuan.nosdn.127.net/9078b58525c6f68d0e49d1bf9b634486.jpg", "http://yanxuan.nosdn.127.net/99288d5715265c7db5f95374749e5210.jpg", "http://yanxuan.nosdn.127.net/e7db2e77fc52923ac4b520755390e107.jpg", "http://yanxuan.nosdn.127.net/8e294cb72f4597d3483a58672036fc79.jpg", "http://yanxuan.nosdn.127.net/dedf9275a5cb14e0e40d9a0a44e2ab7d.jpg", "http://yanxuan.nosdn.127.net/2fb4872d2688aef5fbff9874f67df039.jpg", "http://yanxuan.nosdn.127.net/f42e6c5d2fa6cc6769836e58ce6b204d.jpg", "http://yanxuan.nosdn.127.net/29ee925e530280f8ef9d2d17e2d3f6c4.jpg", "http://yanxuan.nosdn.127.net/c958c89c52482f66a2b7fe2f2ca7f86d.jpg", "http://yanxuan.nosdn.127.net/5489eb22d3d00557e3e6f90af54a32d3.jpg", "http://yanxuan.nosdn.127.net/b55e4bbca8dbc6ec36280243540fce36.jpg", "http://yanxuan.nosdn.127.net/e69bd0a9b72ea444a2a9597d8573d808.jpg", "http://yanxuan.nosdn.127.net/b1ead82c1d20e969d93714c91575891a.jpg", "http://yanxuan.nosdn.127.net/8ae0db50efe7feb7236788568143c9e9.jpg", "http://yanxuan.nosdn.127.net/3161bbead17d75b34763be4552ab06ea.jpg", "http://yanxuan.nosdn.127.net/88715f3acaec8cd8124acf8e765725c3.jpg", "http://yanxuan.nosdn.127.net/fe0a81f50cd82722f2fee0d3f2bcdccf.jpg", "http://yanxuan.nosdn.127.net/9a3d279a06c30bc982926000a7bcf149.jpg", "http://yanxuan.nosdn.127.net/c0f481e69077703f35f542509d799426.jpg", "http://yanxuan.nosdn.127.net/86df378f128f248a591c6c972843272a.jpg", "http://yanxuan.nosdn.127.net/8427432a97e187089144bacd891467dd.jpg", "http://yanxuan.nosdn.127.net/d86f92f33c4e022fcc805aa26364b68f.jpg", "http://yanxuan.nosdn.127.net/9ec0158a6100b3b28fd28026617a9979.jpg"],
		"inventory": [858, 208],
		"information": [{
			"attrName": "机芯",
			"attrValue": "太阳机芯"
		}, {
			"attrName": "材质",
			"attrValue": "水柳木/胡桃木"
		}, {
			"attrName": "能源",
			"attrValue": "5号电池*1（本产品不含电池）"
		}],
		"label": "",
		"manufacture": "",
		"sale": 265,
		"date": "1500012726881",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1154006,
		"price": 139,
		"topName": "黑凤梨 静音日式挂钟",
		"subName": "卓越静音机芯，经典不过时",
		"shortDescription": ["丽声机芯", "卓越静音", "天然木纹", "光油涂装", "经典日式", "百搭精致"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/4ff845bccbb882623317455a1e308af7.png", "http://yanxuan.nosdn.127.net/087d6fb90b3734d77f986d7d48613c6b.jpg", "http://yanxuan.nosdn.127.net/bc4db751a0971edfa090ba2f7ee94006.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/dfa8b4e1a2cadce6cd9f280af2f3d502.png", "http://yanxuan.nosdn.127.net/d3ef7f41310b5cea702d675598849480.jpg", "http://yanxuan.nosdn.127.net/3ca695c9e56f23768b20755321364a66.jpg", "http://yanxuan.nosdn.127.net/c7a9712da797363e27a7ea3a6e126c8d.jpg", "http://yanxuan.nosdn.127.net/06faf29d7c8b23298ddbf363971ab45b.jpg"],
		"types": ["原木色", "胡桃木色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/e2575e2df48ead3a5ef34ca7510604e2.jpg", "http://yanxuan.nosdn.127.net/44e38f7990c14b142f7439dbf980068e.jpg", "http://yanxuan.nosdn.127.net/c9b21b2f6ce4e39c91f0061396852e37.jpg", "http://yanxuan.nosdn.127.net/768522bf607349d2581251137be56f02.jpg", "http://yanxuan.nosdn.127.net/3a7166c691464f83a9d32fc0a29d583e.jpg", "http://yanxuan.nosdn.127.net/f0853aef54bfa99cf56563addd153bf9.jpg", "http://yanxuan.nosdn.127.net/0e05c374f4cdd8ef429b16b1ba47d7b8.jpg", "http://yanxuan.nosdn.127.net/54139dd3283150859ba23300d29b587c.jpg", "http://yanxuan.nosdn.127.net/5f6cfbfb115a5322afd6f57e6b20a54d.jpg", "http://yanxuan.nosdn.127.net/d7085a6decdca93922b52b8290954c5c.jpg", "http://yanxuan.nosdn.127.net/b5a253b6910298498f53a9540fa3eb6b.jpg", "http://yanxuan.nosdn.127.net/581ebced8c899045488a8b8296b50ca5.jpg", "http://yanxuan.nosdn.127.net/d30a934d00c5732547900658616520d1.jpg", "http://yanxuan.nosdn.127.net/2abbf0ecae6478068362e1527a775f10.jpg", "http://yanxuan.nosdn.127.net/689e0e6a3f5cdd52b36a8e9b3c0d8488.jpg", "http://yanxuan.nosdn.127.net/b0e9340311409e0eeaaca948e75cd6bd.jpg", "http://yanxuan.nosdn.127.net/fcc7fc118771506a88e265df638eb036.jpg", "http://yanxuan.nosdn.127.net/75c3ac2b3629a325665317af544b1045.jpg", "http://yanxuan.nosdn.127.net/6a640f1b4c13d21fb41a27a945d07387.jpg", "http://yanxuan.nosdn.127.net/0cd9ae21c47c0b0de88c2b24bccb76e3.jpg", "http://yanxuan.nosdn.127.net/1b52075e9e6364bcd6bf1e349cfdf853.jpg", "http://yanxuan.nosdn.127.net/897d1308f39b68015eb1ae56e1e468d1.jpg", "http://yanxuan.nosdn.127.net/78187d1860fde980f0f53ce560a254ef.jpg", "http://yanxuan.nosdn.127.net/1e219894cb0b202141feccf7d31e04e2.jpg", "http://yanxuan.nosdn.127.net/a39f6694df4402d65e0c94fc54dcbb17.jpg", "http://yanxuan.nosdn.127.net/a5184a6ddbfff7b6951617940dda2dfd.jpg", "http://yanxuan.nosdn.127.net/92a1f60c3cf5e548ef6834133a8629f8.jpg", "http://yanxuan.nosdn.127.net/eab8857d2b8a83c7033473d9344c992b.jpg", "http://yanxuan.nosdn.127.net/f39da328caee5025d2b9d50e788e1d59.jpg", "http://yanxuan.nosdn.127.net/556850e7a8d4d9a338ea2d1d3ce0438a.jpg", "http://yanxuan.nosdn.127.net/dac7e9a21756d8c8a899f3499e4a8420.jpg", "http://yanxuan.nosdn.127.net/aeeeafb390cff3ff5bc1a0a1c0a93c0c.jpg", "http://yanxuan.nosdn.127.net/6c99b51b3029cf6f9336ea7850ecd067.jpg", "http://yanxuan.nosdn.127.net/8e869254f218be278dd76fbae9e6c10c.jpg", "http://yanxuan.nosdn.127.net/831f34e4ecc181bfc18fa173bf9625b2.jpg", "http://yanxuan.nosdn.127.net/8c7d286d7d17a5cb56680b43e36e7f1b.jpg", "http://yanxuan.nosdn.127.net/eb37d6ea6aaab1d9823dee8906a20ba0.jpg", "http://yanxuan.nosdn.127.net/6d0e24aca51d19667a81abe28f5c2905.jpg", "http://yanxuan.nosdn.127.net/e2a87311891ff5961e52d860e708bf39.jpg"],
		"inventory": [616, 855],
		"information": [{
			"attrName": "颜色",
			"attrValue": "原木色/胡桃木色"
		}, {
			"attrName": "产品尺寸",
			"attrValue": "直径32cm"
		}, {
			"attrName": "表面是否有玻璃",
			"attrValue": "是"
		}],
		"label": "",
		"manufacture": "西铁城CITIZEN制造商",
		"sale": 861,
		"date": "1500012730241",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1125016,
		"price": 139,
		"topName": "大丰收收纳摆件",
		"subName": "兼具设计感与实用性",
		"shortDescription": ["色泽明亮", "心神愉悦", "收纳口袋", "小物可放", "样式别致", "趣味生活"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b58ced9a3fb3d51ebe596d6d4f709ae8.jpg", "http://yanxuan.nosdn.127.net/0799e5d61396165226972e9b46b73240.jpg", "http://yanxuan.nosdn.127.net/e2fb24733720ab2c860fe03ab48daf63.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/46f3059b020eb3900e9af8e8c1af8a97.png", "http://yanxuan.nosdn.127.net/16dd2a12b4ab2651dc7450127eed6d68.png", "http://yanxuan.nosdn.127.net/fe0f0fbc76283801b5b565c629f9cf35.jpg", "http://yanxuan.nosdn.127.net/1d316791256871884416a4ae770e0a00.jpg", "http://yanxuan.nosdn.127.net/6617f833f475070d3302644032c82f03.jpg"],
		"types": ["黄色", "蓝色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/ae27e0a0c0ab324a41f8b2d248780ad9.jpg", "http://yanxuan.nosdn.127.net/987d4a3348e3ebe7f2c1440226fb4cb6.jpg", "http://yanxuan.nosdn.127.net/13e4aa784b0eb73bfb6b5b3e5977b243.jpg", "http://yanxuan.nosdn.127.net/6db31027e707b02234f23c756be58af2.jpg", "http://yanxuan.nosdn.127.net/4cc9ee906052c55216cb39bf8486dc4f.jpg", "http://yanxuan.nosdn.127.net/3147f03dbe5a1c4c2ffefb029447eefc.jpg", "http://yanxuan.nosdn.127.net/04528ccb2039eedf2ee402fee77301c3.jpg", "http://yanxuan.nosdn.127.net/4fa302f9f9c7184d664dc1e54d59f417.jpg", "http://yanxuan.nosdn.127.net/4672db948312ed04f3e6d15aa38b458a.jpg", "http://yanxuan.nosdn.127.net/98d129cece00b5ce0463d28b98b40a02.jpg", "http://yanxuan.nosdn.127.net/e323f9d77edd608b1e5e8e198b0edf4e.jpg", "http://yanxuan.nosdn.127.net/2200ffe2ab0a7fbef6d7fc6156259bda.jpg", "http://yanxuan.nosdn.127.net/809f7fa3f0946e0f071f2a8cf6f04d30.jpg", "http://yanxuan.nosdn.127.net/3bcef4f852c8e352402b9505e92b1d98.jpg", "http://yanxuan.nosdn.127.net/4dc8f9234990ef09bcbca29095c3454e.jpg", "http://yanxuan.nosdn.127.net/b78ea3f7063792c1d8eaa14e31da7416.jpg", "http://yanxuan.nosdn.127.net/c836ec4710bf71a67c7347530e708974.jpg", "http://yanxuan.nosdn.127.net/ef4691a37792a9a91e1e9495f10eee2c.jpg", "http://yanxuan.nosdn.127.net/423d98ad66c3e43960d613c9392a94ec.jpg", "http://yanxuan.nosdn.127.net/d82731aeadfa5991f9afb47cd85c7263.jpg", "http://yanxuan.nosdn.127.net/70763b7fb7facddc6e2f053e596cf879.jpg", "http://yanxuan.nosdn.127.net/437ad106a1fd0f8f84c5ff52568e56a5.jpg", "http://yanxuan.nosdn.127.net/21fbefc6cdff6874487678915a57bc50.jpg", "http://yanxuan.nosdn.127.net/cb4184aa045e950887fcb49d9c1ff850.jpg", "http://yanxuan.nosdn.127.net/47c2ca629524b9f4f57f5ea83d9397c1.jpg", "http://yanxuan.nosdn.127.net/9f9f766b6cde02b09d1d757bad857b16.jpg", "http://yanxuan.nosdn.127.net/d2a5fd13539ec6952af8a1500b01d194.jpg", "http://yanxuan.nosdn.127.net/0580fde8988f4f549aeea35adbb379bd.jpg", "http://yanxuan.nosdn.127.net/e1627cb343db58af5e477a493c5579d1.jpg", "http://yanxuan.nosdn.127.net/80372df184a4486aac0b9bc7d64179eb.jpg", "http://yanxuan.nosdn.127.net/357e9f911d22e61b0bf316bd9a60e813.jpg", "http://yanxuan.nosdn.127.net/bd5ffb54d54ad9cd45a2bb093878aebc.jpg", "http://yanxuan.nosdn.127.net/41511325b5f2d1809937d656c4436539.jpg", "http://yanxuan.nosdn.127.net/a0ae5c4f81d44a7e39be64e22b20fb9e.jpg", "http://yanxuan.nosdn.127.net/85620c4bbf824adaad9357ebcf63100f.jpg", "http://yanxuan.nosdn.127.net/20c40764fa85e99b9957ec1ab9ef47f1.jpg", "http://yanxuan.nosdn.127.net/824167c4acb7f568a207de964c9e3950.jpg", "http://yanxuan.nosdn.127.net/a009b2ba646a28ec871e280cfda71970.jpg", "http://yanxuan.nosdn.127.net/ff81e9f5d4e2f7cd9bdf1ca8b8716590.jpg", "http://yanxuan.nosdn.127.net/a2b8815482e71297b5d866093d84899f.jpg", "http://yanxuan.nosdn.127.net/6db10a758905d3e85231a35f1f10a2fd.jpg", "http://yanxuan.nosdn.127.net/96bfe146d6c11c42fdca1d609f326536.jpg", "http://yanxuan.nosdn.127.net/b4d890102d42ff9c6467ab23cddbaa8b.jpg", "http://yanxuan.nosdn.127.net/1199aadeb28c7373a4bd7d2408790620.jpg", "http://yanxuan.nosdn.127.net/8bb6be9a67727515fa270bf9628fb4a7.jpg", "http://yanxuan.nosdn.127.net/015c9f8d18232f2fd932d77e89ef5127.jpg", "http://yanxuan.nosdn.127.net/9a43c8b6676832dc4ff37cd4183e9e7f.jpg", "http://yanxuan.nosdn.127.net/7cd095a43dca96f64994e6e29092c33a.jpg", "http://yanxuan.nosdn.127.net/43d1f07be1aee43e1730bec251c430f4.jpg", "http://yanxuan.nosdn.127.net/145e05fcee62c4c61cb1081b15133422.jpg"],
		"inventory": [200, 629],
		"information": [{
			"attrName": "颜色",
			"attrValue": "黄色/蓝色"
		}, {
			"attrName": "尺寸",
			"attrValue": "129mm*96mm*302mm"
		}, {
			"attrName": "摆件类型",
			"attrValue": "收纳型桌面摆件"
		}],
		"label": "",
		"manufacture": "",
		"sale": 993,
		"date": "1500012733085",
		"category": "居家",
		"subCategory": "家饰"
	})
	var goodsEntity = new goodsModel({
		"id": 1125017,
		"price": 99,
		"topName": "天鹅船创意摆件",
		"subName": "造型可人，精巧实用",
		"shortDescription": ["天鹅造型", "线条优雅", "陶瓷制品", "均匀色泽", "艺术造型", "点缀生活"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/10a5263bb3d4c5234b7344a83c7e9851.jpg", "http://yanxuan.nosdn.127.net/fb960f00f01e2e27df0226ddd824951d.jpg", "http://yanxuan.nosdn.127.net/27b2dc8f55d93522a24faa60ccbf8e52.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/ae63fed274187e3e572043c53fefd836.png", "http://yanxuan.nosdn.127.net/c8527661e3c87a530e30bd110a14faa9.png", "http://yanxuan.nosdn.127.net/fbef44dbf82b0b92c60e71b41c447f72.jpg", "http://yanxuan.nosdn.127.net/0890a572df4316f7020c84535b696bfe.jpg", "http://yanxuan.nosdn.127.net/cb3615bf2bcbc52b1f2ef1c64e2b3cac.jpg"],
		"types": ["粉色", "哑黑"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/a51dfc28aa51d1b4771cd67040e606bc.jpg", "http://yanxuan.nosdn.127.net/e0aa16773f6637c6d03e031491a828fd.jpg", "http://yanxuan.nosdn.127.net/15b29314162f7a4058c2546e7704fefb.jpg", "http://yanxuan.nosdn.127.net/5b89e060a6a1fdbe350784ff7e39d2f8.jpg", "http://yanxuan.nosdn.127.net/0906675208be301e4fce31d761366ef1.jpg", "http://yanxuan.nosdn.127.net/8f7bd4bc1d95ac4fefa49bc4011fa18e.jpg", "http://yanxuan.nosdn.127.net/41fa6ebead02bcde81a7b7c1ad51d199.jpg", "http://yanxuan.nosdn.127.net/8fb341ce2b44d9cac286ee3573bd1448.jpg", "http://yanxuan.nosdn.127.net/446aa2f61b820732aec4387464ba6eec.jpg", "http://yanxuan.nosdn.127.net/9d65185d342b039333d4914d06f26b3e.jpg", "http://yanxuan.nosdn.127.net/2185e0d078235feebd200752601e14a7.jpg", "http://yanxuan.nosdn.127.net/281ae1164e204a908f15159bbc55d682.jpg", "http://yanxuan.nosdn.127.net/2c2fbd771452be4375466eca773d5b71.jpg", "http://yanxuan.nosdn.127.net/9f9a5117024408d2ef4175e570e31b6d.jpg", "http://yanxuan.nosdn.127.net/889b4854a059e7aebdc02f9cd7b3d4a6.jpg", "http://yanxuan.nosdn.127.net/29ee93a187a8048b4a45d92481d76d69.jpg", "http://yanxuan.nosdn.127.net/fc9f7d810b79157d293927cd8b9bd6af.jpg", "http://yanxuan.nosdn.127.net/facdaec0774f7bd948b44cff20601cc3.jpg", "http://yanxuan.nosdn.127.net/26b9a61917f842b65a20d71c7ce9eeb2.jpg", "http://yanxuan.nosdn.127.net/7f3cd2ffbcde3c2515e971b627cf92f4.jpg", "http://yanxuan.nosdn.127.net/bddd887a78dcce7105b69bc4b7278403.jpg", "http://yanxuan.nosdn.127.net/5ae5da1a932d09bae158e27107140213.jpg", "http://yanxuan.nosdn.127.net/ad5270a07e24be663407702d93b1726e.jpg", "http://yanxuan.nosdn.127.net/a7ae98eed18dae98c68633c0b3faadd3.jpg", "http://yanxuan.nosdn.127.net/349d8491cbf7df8209ff3648c8aaff56.jpg", "http://yanxuan.nosdn.127.net/cc7b3d5b3b866b7f797c9116451174d0.jpg", "http://yanxuan.nosdn.127.net/bf42f7ccdaba23f767b3bbbd57c8f9a7.jpg", "http://yanxuan.nosdn.127.net/14b8fda555eb3792186cac4ada29547b.jpg", "http://yanxuan.nosdn.127.net/8d6eb01d8614d2301365c4af07eb3f62.jpg", "http://yanxuan.nosdn.127.net/25f9940e2cdc70a3698aca1bdd0c13fa.jpg", "http://yanxuan.nosdn.127.net/7863d339f85ec1cabea6ffdbbb7cde5e.jpg", "http://yanxuan.nosdn.127.net/ea2478d43f3478ebe89688e49a479522.jpg", "http://yanxuan.nosdn.127.net/8cd1f58b12bdcc4e583b582f19b26996.jpg", "http://yanxuan.nosdn.127.net/65b153479f9a7ba1dac5f55c1045e143.jpg", "http://yanxuan.nosdn.127.net/36570da498aea05ab30da0b062c4f18e.jpg", "http://yanxuan.nosdn.127.net/e4f6d9bf0f69dc04391b5e114025a144.jpg", "http://yanxuan.nosdn.127.net/2f11681610b750c9df77971695bca463.jpg", "http://yanxuan.nosdn.127.net/6d7458ad28a8c7dd09937789625d623d.jpg", "http://yanxuan.nosdn.127.net/3eade836202126955fef56da3094ac18.jpg", "http://yanxuan.nosdn.127.net/d2d2b70f33d4e49b95a116ceece3fff5.jpg", "http://yanxuan.nosdn.127.net/2edc095b18e555ac4885151019df8700.jpg", "http://yanxuan.nosdn.127.net/4c0e54da96db752c4ba4299efe73f543.jpg", "http://yanxuan.nosdn.127.net/0bd47f5860de32e185b1bf64d2a92aa0.jpg", "http://yanxuan.nosdn.127.net/0976af88cba94c894fd18c4405959dd3.jpg", "http://yanxuan.nosdn.127.net/fab77fe01f06d7cf816d1b29cef412ec.jpg", "http://yanxuan.nosdn.127.net/51c96503b34613aefb25e8e173bba736.jpg", "http://yanxuan.nosdn.127.net/f9019d59726e02ee0e0160766c70aaa6.jpg", "http://yanxuan.nosdn.127.net/db22ecba52a1cc7accce3d9deb2a2a3b.jpg"],
		"inventory": [863, 123],
		"information": [{
			"attrName": "颜色",
			"attrValue": "粉色/哑黑"
		}, {
			"attrName": "尺寸",
			"attrValue": "160mm*145mm*135mm"
		}, {
			"attrName": "摆件类型",
			"attrValue": "桌面摆件"
		}],
		"label": "",
		"manufacture": "",
		"sale": 64,
		"date": "1500012739479",
		"category": "居家",
		"subCategory": "家饰"
	})

	var goodsEntity = new goodsModel({
		"id": 1221001,
		"price": 499,
		"topName": "网易智造N520除螨吸尘器",
		"subName": "除螨吸尘 深层清洁",
		"shortDescription": ["强力拍打", "螺纹滚刷", "智能感光", "降噪技术", "一手提握", "旋风集尘"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f2d5004fed7a7b43666bf1c09b9a392f.png", "http://yanxuan.nosdn.127.net/6fe4c18a19978403fa81aab469c60e22.png", "http://yanxuan.nosdn.127.net/95de892675de55bd6a715b818afea9b4.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/6c279b7830290cd4597439433d647381.png", "http://yanxuan.nosdn.127.net/dd5db91920e6a2996e0c9b887c47f3cf.jpg", "http://yanxuan.nosdn.127.net/44e3f9a43a38c6baa242aea4fc533749.jpg", "http://yanxuan.nosdn.127.net/a6533002acf4b283388162d8ffda3a85.jpg", "http://yanxuan.nosdn.127.net/869ee8972a43a468af4c34fa7b20b317.jpg"],
		"types": ["粉色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/64c37faf4e42414476aa58f455e01e14.jpg", "http://yanxuan.nosdn.127.net/020c10fa8005c59a1940cea3189bcb7e.jpg", "http://yanxuan.nosdn.127.net/b2b130e1fd5255aa810f55d2bbc66427.jpg", "http://yanxuan.nosdn.127.net/297e89c36a98dd32cfa6cc2e7e3eef54.jpg", "http://yanxuan.nosdn.127.net/f74b47f58f325610e587d7cf6cba9ed3.jpg", "http://yanxuan.nosdn.127.net/af6d436a782eec7e5f178126f159ee80.jpg", "http://yanxuan.nosdn.127.net/ed8a51508615aea7620d9e2da583afea.jpg", "http://yanxuan.nosdn.127.net/afb15ac7efd8b7c88de45a408f6d6f3f.jpg", "http://yanxuan.nosdn.127.net/bea93176f94a8cc3e9998809239306b3.jpg", "http://yanxuan.nosdn.127.net/20ca843b1a42afb8cbe69013d40bd1ff.jpg", "http://yanxuan.nosdn.127.net/cd6c48400aff06e047358a1ee7a9462b.jpg", "http://yanxuan.nosdn.127.net/950f57998e42c85bd2d9dc7aec2152a9.jpg", "http://yanxuan.nosdn.127.net/0e5cf07b3cc50290ff981fda6a44bb5f.jpg", "http://yanxuan.nosdn.127.net/6e5b4e85d8b4a63b6a47e6da9b565548.jpg", "http://yanxuan.nosdn.127.net/ed2b4e3fa4823b81c56cba113a5378de.jpg", "http://yanxuan.nosdn.127.net/0b685f140f919b7c35541080c62e29e8.jpg", "http://yanxuan.nosdn.127.net/cb7392941ba1d35e516a9599f9de631e.jpg", "http://yanxuan.nosdn.127.net/db2ff61b025b902bf4a50b744414b145.jpg", "http://yanxuan.nosdn.127.net/b1970088262270fd3b85f30f87a34f9d.jpg", "http://yanxuan.nosdn.127.net/def4b4697fae8af72b6851e75eac4bd3.jpg", "http://yanxuan.nosdn.127.net/24a6d5bfcd8032e4c6df060b3d718e83.jpg", "http://yanxuan.nosdn.127.net/ec21a8671b1fefa489436c86f1eee6e8.jpg", "http://yanxuan.nosdn.127.net/2ad1e3585290d25bf1f6d45da78e6ebc.jpg", "http://yanxuan.nosdn.127.net/fb20b389c8a0f48c25b5f44ec654216a.jpg", "http://yanxuan.nosdn.127.net/bb1d474577e587295874777c55a5efd9.jpg", "http://yanxuan.nosdn.127.net/cefe03220c23afb07349f5aaaeebaa0e.jpg", "http://yanxuan.nosdn.127.net/580cb2cc627453e1e17329a5c2bcc57e.jpg", "http://yanxuan.nosdn.127.net/1b0258c0a8015071af9830a3b184f83e.jpg", "http://yanxuan.nosdn.127.net/3914eab9c8af5dea12bbe0a0df353c72.jpg", "http://yanxuan.nosdn.127.net/599e97889250a6c0f22b033d7e001e1d.jpg", "http://yanxuan.nosdn.127.net/75499a4f416975b532f0fc83e20c2b39.jpg", "http://yanxuan.nosdn.127.net/1b8ebbc3db0a87d3cbcd5cdc584f2565.jpg", "http://yanxuan.nosdn.127.net/c7e209a65c97f29e0237d21a7b3e10e8.jpg", "http://yanxuan.nosdn.127.net/3de108a421a9553d4644d246a17987dd.jpg", "http://yanxuan.nosdn.127.net/de36f28408c5d7ae597c4ebb98827ea3.jpg", "http://yanxuan.nosdn.127.net/84968ac0c789acf227b274327e3daeda.jpg", "http://yanxuan.nosdn.127.net/0bf2a5db85f828fcdfa85fe6551e56a4.jpg", "http://yanxuan.nosdn.127.net/c0b258990795ee825374a02f077de59d.jpg", "http://yanxuan.nosdn.127.net/4c4ebb7b04644ca1a544dc0e57a0b62e.jpg", "http://yanxuan.nosdn.127.net/fcd8c4e9819e6d40f58dbd95bf446d19.jpg", "http://yanxuan.nosdn.127.net/9311e426e82cbc4a5c4f48ba65c92dbc.jpg", "http://yanxuan.nosdn.127.net/dccbb682fcb50e953fadd3c74a436bf3.jpg", "http://yanxuan.nosdn.127.net/4d49a80c3de9fc5745c96ac0fd86278a.jpg", "http://yanxuan.nosdn.127.net/7b28847f315230d4bc55787442bcb40e.jpg", "http://yanxuan.nosdn.127.net/47fd958eea7ca8e78fea98ea747f3670.jpg", "http://yanxuan.nosdn.127.net/7c4b6e409fc6c2bbd3b2d21266c94aff.jpg", "http://yanxuan.nosdn.127.net/963c972ca1233fa4483e697782fe968a.jpg", "http://yanxuan.nosdn.127.net/200b9f89ddf9ffe1bfa82e7e206ed3e2.jpg", "http://yanxuan.nosdn.127.net/1c58182860a4fbf38ab2fc8f92296526.jpg"],
		"inventory": [669],
		"information": [{
			"attrName": "产品重量",
			"attrValue": "2.5kg"
		}, {
			"attrName": "电源",
			"attrValue": "220V~50Hz"
		}, {
			"attrName": "工作音量",
			"attrValue": "＜76dB"
		}, {
			"attrName": "额定功率",
			"attrValue": "350W"
		}, {
			"attrName": "电源线长度",
			"attrValue": "5米"
		}, {
			"attrName": "集尘容量",
			"attrValue": "0.2L"
		}],
		"label": "",
		"manufacture": "",
		"sale": 414,
		"date": "1500012748146",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1223001,
		"price": 69,
		"topName": "网易智造小旋风风扇",
		"subName": "凉快安静 便携易带 连用省电",
		"shortDescription": ["红点团队", "经典设计", "凉快安静", "迷你便携", "调节送风", "连用省电"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/05c7225cdb0210920eb79df469f58112.png", "http://yanxuan.nosdn.127.net/3c873881f0cf65156dab0113da06c709.png", "http://yanxuan.nosdn.127.net/07bfd701e249e94f56b8f128d07c2b42.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/0ea3ed6da7beecb9b1960b8d2175c33d.png", "http://yanxuan.nosdn.127.net/5ebcc9b5f938d2e8bf4e26f8ae010374.jpg", "http://yanxuan.nosdn.127.net/94a99a3aaec4813e02549763c47eb5d8.jpg", "http://yanxuan.nosdn.127.net/02b36fdc5403587a9603eb3f0d4a0f7f.jpg", "http://yanxuan.nosdn.127.net/22ffb507ed0545512b2547abc694cda4.jpg"],
		"types": ["磨砂白"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/a8cdabe7d99524df81da4faf06e9d255.jpg", "http://yanxuan.nosdn.127.net/121d84b903df32acdfcb3e3b4bfe75a6.jpg", "http://yanxuan.nosdn.127.net/5c3eb14cb4e0cad764bf10153f12819d.jpg", "http://yanxuan.nosdn.127.net/d41bc44a003ae1c7187271320fb83b68.jpg", "http://yanxuan.nosdn.127.net/5db73aa5f5bfd7e24355a550fc2f525c.jpg", "http://yanxuan.nosdn.127.net/25935d20cd46f114c44f43890d2029e5.jpg", "http://yanxuan.nosdn.127.net/7e4bb2b4882e2499b3eb1a50216c7752.jpg", "http://yanxuan.nosdn.127.net/97a1600930b11f82739a14bfad39e4ae.jpg", "http://yanxuan.nosdn.127.net/f9b2c20cfe714a0ef007684c2454d7ef.jpg", "http://yanxuan.nosdn.127.net/e22dd614e703488735e6b7f8eb2c3657.jpg", "http://yanxuan.nosdn.127.net/3afb512a2ecade4fc22b09698d5e4487.jpg", "http://yanxuan.nosdn.127.net/be4f67a64d6088047ab7f8b75fa6c37b.jpg", "http://yanxuan.nosdn.127.net/0fac09044ab0e5639d5448dfcf039342.jpg", "http://yanxuan.nosdn.127.net/02f6e6fe6d84d08c14392db6a698a079.jpg", "http://yanxuan.nosdn.127.net/0095564727768589668bb88e30df71c3.jpg", "http://yanxuan.nosdn.127.net/b2e31fde08d8a678c24e078c6559358c.jpg", "http://yanxuan.nosdn.127.net/59fa4ed222d243c08c400900ea0c0c34.jpg", "http://yanxuan.nosdn.127.net/15b700b93df6093823e801061eabf95d.jpg", "http://yanxuan.nosdn.127.net/b60bcf2e673707cd7a4c018744ee9ae1.jpg", "http://yanxuan.nosdn.127.net/ffd3b24dc6a78509cd2a1e4cf3cf2099.jpg", "http://yanxuan.nosdn.127.net/cdff55f00da4b06bdb18001b47c53a13.jpg", "http://yanxuan.nosdn.127.net/2b5d757f7149aa4585115eac87b7db89.jpg", "http://yanxuan.nosdn.127.net/eb975ce046c9bab8777b38502afb4e99.jpg", "http://yanxuan.nosdn.127.net/8db85c72514bc76e96f6126c991dcc98.jpg", "http://yanxuan.nosdn.127.net/4c090349e06543ef64e53c4a9f94b8be.jpg", "http://yanxuan.nosdn.127.net/c895c93d1d4e3f600dcf26cf9f167507.jpg", "http://yanxuan.nosdn.127.net/79be4e19497e7d6a302d87f7af59e413.jpg", "http://yanxuan.nosdn.127.net/71d1ccfd732750e8ea8429783e84ff03.jpg", "http://yanxuan.nosdn.127.net/7892babfa000a4a15882cc5ab5d2e685.jpg", "http://yanxuan.nosdn.127.net/9aa6344e79168600138d13ee94bcd61a.jpg", "http://yanxuan.nosdn.127.net/4e9dd862358d57f68c0e65f7534e0bec.jpg", "http://yanxuan.nosdn.127.net/52c5bb29126b228c3e4efd0a20b97b28.jpg", "http://yanxuan.nosdn.127.net/7a8af46072593acc9b4ccc19208ae8c5.jpg"],
		"inventory": [793],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "109*52*125mm"
		}, {
			"attrName": "产品净重",
			"attrValue": "160g"
		}, {
			"attrName": "外壳材质",
			"attrValue": "ABS环保材质"
		}, {
			"attrName": "额定功率",
			"attrValue": "2.5W"
		}, {
			"attrName": "额定电压",
			"attrValue": "DC5V(micro USB)"
		}, {
			"attrName": "内置电池容量",
			"attrValue": "2200mAh"
		}, {
			"attrName": "充电电压/电流",
			"attrValue": "DC5V/1A"
		}, {
			"attrName": "风速",
			"attrValue": "1档、2档、3档"
		}, {
			"attrName": "马达最高转速",
			"attrValue": "3400转"
		}, {
			"attrName": "USB充电线长度",
			"attrValue": "0.8m"
		}],
		"label": 三石福利价,
		"manufacture": "",
		"sale": 558,
		"date": "1500012751710",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1110002,
		"price": 119,
		"topName": "黑凤梨 大头风扇",
		"subName": "静音劲风，小巧灵动",
		"shortDescription": ["双重扇翼", "强力送风", "异形扇叶", "卓越降噪", "便捷供电", "随插随用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b99b31b131a446ac8d2fe740d8aba7d1.jpg", "http://yanxuan.nosdn.127.net/257d2de6dba2ed479f86382f3f6f2c94.jpg", "http://yanxuan.nosdn.127.net/bc925623c35943ac0c37c2b94a59c5af.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4480c25b6d22f2eedb2db0bff9c8f7a4.png", "http://yanxuan.nosdn.127.net/375db2797db92b446d45b3003ca84660.jpg", "http://yanxuan.nosdn.127.net/9d2c517b9da985b9c997f6d9cb597ac0.jpg", "http://yanxuan.nosdn.127.net/6eb39c3ee3db8d9a6a2cbf3d2d2f581c.jpg", "http://yanxuan.nosdn.127.net/5e230a93445d2791719f9421a66113e3.jpg"],
		"types": ["本白", "冷灰", "樱花粉", "静谧蓝"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/b370bcf7f95c3517493cf92067a35691.jpg", "http://yanxuan.nosdn.127.net/02e6d1c73c32bceddf08f75d04f1b304.jpg", "http://yanxuan.nosdn.127.net/46509ee2c061474f33745d64d96fed93.jpg", "http://yanxuan.nosdn.127.net/5d30d0a76b52e46e9efef2ebb6aed82a.jpg", "http://yanxuan.nosdn.127.net/7c9df0956581e9461518069a976bf2b6.jpg", "http://yanxuan.nosdn.127.net/a70ce3b02f0baba3e43fc18e73ad5ec3.jpg", "http://yanxuan.nosdn.127.net/cf0310a5cc74a99844049400fe2c4180.jpg", "http://yanxuan.nosdn.127.net/320145222951d50f628a8592a2e71f4f.jpg", "http://yanxuan.nosdn.127.net/1613e61c8e2b2799f1630d4437049000.jpg", "http://yanxuan.nosdn.127.net/ad99f7c8bf87a5e3970a9547b3b1c673.jpg", "http://yanxuan.nosdn.127.net/09090f0ac521d9267342e038f4bceaaf.jpg", "http://yanxuan.nosdn.127.net/92bc2334da340215c2f2f57395646cde.jpg", "http://yanxuan.nosdn.127.net/20ecb92b8f659569e270fb5277d7a88f.jpg", "http://yanxuan.nosdn.127.net/cbd0f9b3a3d2cdc04ec7120cb7c8db35.jpg", "http://yanxuan.nosdn.127.net/6c2bf3e4f94c374023ad0b4e654835a2.jpg", "http://yanxuan.nosdn.127.net/7fe245c1a48d1be407b9a10549e639da.jpg", "http://yanxuan.nosdn.127.net/08f1388f98bee1cdbedec19d65bb9be0.jpg", "http://yanxuan.nosdn.127.net/8b134c33771c332d5fcba039b4fa0c01.jpg", "http://yanxuan.nosdn.127.net/d9143fe7297c270f9da653f7cd5af645.jpg", "http://yanxuan.nosdn.127.net/c5affcce45c28861b69c0b7fbb319e9d.jpg", "http://yanxuan.nosdn.127.net/debb80da0d3ada6685a11344e912c90f.jpg", "http://yanxuan.nosdn.127.net/a831950019819b8435335d73ed540784.jpg", "http://yanxuan.nosdn.127.net/61c5fd8ec0f78e1632518caf55a69bcc.jpg", "http://yanxuan.nosdn.127.net/91c9778d863c357eb6f338275537a3e7.jpg", "http://yanxuan.nosdn.127.net/b89e5d87d3d469ff971afcb249aaa20c.jpg", "http://yanxuan.nosdn.127.net/697457e7c8351265dea73114186bc89a.jpg", "http://yanxuan.nosdn.127.net/183668468b815808394f16623c7e2e6e.jpg", "http://yanxuan.nosdn.127.net/ddcfe3fbadc711c82a0afeae60245fbb.jpg", "http://yanxuan.nosdn.127.net/21466edc060f4e4707259ba982b22a2c.jpg", "http://yanxuan.nosdn.127.net/ae7e1db48fe047dc295d62ee6656a39b.jpg", "http://yanxuan.nosdn.127.net/c8521d8e4e1ba85520846788ac18cd92.jpg", "http://yanxuan.nosdn.127.net/d8d06c7ff2bfa9772e2d7a7541ca8093.jpg", "http://yanxuan.nosdn.127.net/875d36ff57ba8a7e303db93fb8e346b0.jpg", "http://yanxuan.nosdn.127.net/2f4150eca32370875b3b159966ec06a1.jpg", "http://yanxuan.nosdn.127.net/e4cc1a82b9b40291be2e4c3b303aba8c.jpg", "http://yanxuan.nosdn.127.net/ece251d3d77ffaaa0f22d23ff0942905.jpg", "http://yanxuan.nosdn.127.net/8484b4421e584c68b3ac07514198ddfd.jpg", "http://yanxuan.nosdn.127.net/fd9cb90b42da7ac1b80fde3236b4efb5.jpg", "http://yanxuan.nosdn.127.net/1b399e6112168e4af4c5fd9c4ced1992.jpg", "http://yanxuan.nosdn.127.net/29813ccc3aa33ab8dd4c6bdf2712d5f1.jpg", "http://yanxuan.nosdn.127.net/220cecae74642d0925602cee1eaf33bd.jpg", "http://yanxuan.nosdn.127.net/242ae905b9a7f6542cc766b9af1510c0.jpg", "http://yanxuan.nosdn.127.net/ca3a542e9e58845927d5341f37acd3d2.jpg", "http://yanxuan.nosdn.127.net/cb95fe3aef23897718eaf4bf23905abd.jpg", "http://yanxuan.nosdn.127.net/3c68b14d9174a7581767da9daf685efe.jpg", "http://yanxuan.nosdn.127.net/26ed192292c3dd3088efa33487d77bf5.jpg", "http://yanxuan.nosdn.127.net/6b5e60ecda0e142dbd858277425ece0d.jpg", "http://yanxuan.nosdn.127.net/e7fcda6fcc0261e47a457a01eefd1073.jpg", "http://yanxuan.nosdn.127.net/3d18ecf39871464283d665b47da84591.jpg", "http://yanxuan.nosdn.127.net/5c72fd30cd9210984ddc6bb0b482fee2.jpg", "http://yanxuan.nosdn.127.net/f16dd02724c7deabaa677c23a2495de9.jpg", "http://yanxuan.nosdn.127.net/791a23b7bd196fff32922e23b9476e37.jpg", "http://yanxuan.nosdn.127.net/b41521140d80c755a4164e7434d9e0da.jpg", "http://yanxuan.nosdn.127.net/e5c248fca52539909c9549ec6a0caf54.jpg", "http://yanxuan.nosdn.127.net/76bebdc4ccbe0d0ad5eaa94ffd9ce9b5.jpg", "http://yanxuan.nosdn.127.net/eba5cc7579316f882bba6b375ff9c579.jpg", "http://yanxuan.nosdn.127.net/2a22bae2b8413e7c30718aedd7a54b24.jpg", "http://yanxuan.nosdn.127.net/f81bc5d9c387f3e206ac2b16d6c6221b.jpg", "http://yanxuan.nosdn.127.net/e0358ba8b07b25bc239e4992182bc977.jpg", "http://yanxuan.nosdn.127.net/b3c450a5e8621d5fbdecfe247aef0533.jpg", "http://yanxuan.nosdn.127.net/ed1050c7cc40f8cd18d3c2bb6f7b1497.jpg", "http://yanxuan.nosdn.127.net/90d339ab63ea71b97d028391bae3a864.jpg", "http://yanxuan.nosdn.127.net/4b5dae73820a97327bde472f41c46e4a.jpg"],
		"inventory": [842, 499, 622, 531],
		"information": [{
			"attrName": "USB线长",
			"attrValue": "总长约1m，机身外长度约90cm"
		}, {
			"attrName": "尺寸",
			"attrValue": "102mm*130mm*85mm"
		}, {
			"attrName": "颜色",
			"attrValue": "本白/冷灰/樱花粉/静谧蓝"
		}],
		"label": "",
		"manufacture": "",
		"sale": 341,
		"date": "1500012755994",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1154005,
		"price": 99,
		"topName": "黑凤梨 便携手持风扇",
		"subName": "便携小巧，手持清风",
		"shortDescription": ["流线弧度", "轻松手握", "低音劲风", "两档可调", "配备底座", "方便两用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/cd1516308d32e94adfa70e16f388d73e.jpg", "http://yanxuan.nosdn.127.net/09c4da8807f4b9ffe6f449f491b96252.jpg", "http://yanxuan.nosdn.127.net/48926ebab0589285b14dfcc28981d272.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/103376fb9bf6b7e28ea58f3e34244120.png", "http://yanxuan.nosdn.127.net/e46bc25e9f46e9c7414cb69c0a31cd02.jpg", "http://yanxuan.nosdn.127.net/6012a2c96665560b57d9efc005a38ec9.jpg", "http://yanxuan.nosdn.127.net/f1d3c022d16fdff92325a9137a39e19a.jpg", "http://yanxuan.nosdn.127.net/92a3b3df61740ab31050f63c58225923.jpg"],
		"types": ["深邃黑", "樱花粉", "本白"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/801b728431ad01e17e7630baf920b148.jpg", "http://yanxuan.nosdn.127.net/679e17e238f5796b36e380aeaebfe169.jpg", "http://yanxuan.nosdn.127.net/67583a6c276ee93426f87a213c804210.jpg", "http://yanxuan.nosdn.127.net/48c717dc2bc85be094c4ac4f267bb698.jpg", "http://yanxuan.nosdn.127.net/ea902c8757615ea036257f7d0d069490.jpg", "http://yanxuan.nosdn.127.net/8a4dfa83be4eef4df8fbce0f708e521d.jpg", "http://yanxuan.nosdn.127.net/07910b21e6d22c021439a9f7c0c89750.jpg", "http://yanxuan.nosdn.127.net/a60f6a7cd06a63c296ba68574712c344.jpg", "http://yanxuan.nosdn.127.net/67249599d4e99662b4122d67e9f9c4dc.jpg", "http://yanxuan.nosdn.127.net/25df0214dd716b4b545bfc7370466864.jpg", "http://yanxuan.nosdn.127.net/308557bdc692ba9b1ec674193a5bb854.jpg", "http://yanxuan.nosdn.127.net/e2ed9102ea0a67eb806a553babfe7b75.jpg", "http://yanxuan.nosdn.127.net/adbcf9ba819648f770191b9a1ef240a6.jpg", "http://yanxuan.nosdn.127.net/92569ae401f7be22e30a4503418cf42d.jpg", "http://yanxuan.nosdn.127.net/42423067de8b112d3cb91db62793591d.jpg", "http://yanxuan.nosdn.127.net/0ab7036bcf0e30a522b0c58ad14b4730.jpg", "http://yanxuan.nosdn.127.net/2035aef0900c6b859f4f7f6abef0761e.jpg", "http://yanxuan.nosdn.127.net/cc7d71d31fc11c65f31fa89688cebf61.jpg", "http://yanxuan.nosdn.127.net/fff141031001155b9f106b7dca5ce8c2.jpg", "http://yanxuan.nosdn.127.net/5dea739e972cd4f5c8154e39b7d499f9.jpg", "http://yanxuan.nosdn.127.net/8fd4808197cf773546242af5f7b08d92.jpg", "http://yanxuan.nosdn.127.net/bd58c6cddbeaa5d447908caf7cf5a303.jpg", "http://yanxuan.nosdn.127.net/c569caa2838af7388b745994c9749adc.jpg", "http://yanxuan.nosdn.127.net/a803362b1f5472b0528dd399d656ae97.jpg", "http://yanxuan.nosdn.127.net/5ab8853c86da2c5de8d7ec2580ff572f.jpg", "http://yanxuan.nosdn.127.net/3243f6f99faf83782326cf49bb02f24b.jpg", "http://yanxuan.nosdn.127.net/adc01227f8dfd192bd1bbae92e3e0155.jpg", "http://yanxuan.nosdn.127.net/5d7ccf2489447972e89682a466a047bd.jpg", "http://yanxuan.nosdn.127.net/09d21771149e322197002f1924b88021.jpg", "http://yanxuan.nosdn.127.net/e9d03b7969d6964903cd954152786f46.jpg", "http://yanxuan.nosdn.127.net/93993fbe8c28fb41f374f0d8e9531ed7.jpg", "http://yanxuan.nosdn.127.net/32b14d2f4f8a5e1450ea30fd0a0f30fd.jpg", "http://yanxuan.nosdn.127.net/e0eaf438c447ba73056773162f200842.jpg", "http://yanxuan.nosdn.127.net/97981f3265322f33d714296238882666.jpg", "http://yanxuan.nosdn.127.net/2e1dc738f34722bff8c885d28f25a66e.jpg", "http://yanxuan.nosdn.127.net/3d86f8ff0f0b17b0cccbdfadb3ec7f2c.jpg", "http://yanxuan.nosdn.127.net/1661f81224d9be9ca8325d10d3cebf7b.jpg", "http://yanxuan.nosdn.127.net/c184917098d138dcff478504a20d1c20.jpg", "http://yanxuan.nosdn.127.net/54d6227ce968cd9f7480fee5b4a1a36a.jpg", "http://yanxuan.nosdn.127.net/dee504c1a7ee23d8e3eb00349f485b2f.jpg", "http://yanxuan.nosdn.127.net/a3893374ce15e5a6dfcc43757449f2ef.jpg", "http://yanxuan.nosdn.127.net/4db8d4d648836a35ec759fbfceedab30.jpg", "http://yanxuan.nosdn.127.net/cf99e95a3688d12f289afba72cef68f6.jpg", "http://yanxuan.nosdn.127.net/caa8b2fb8d86a42e2430a62cec4f8ed7.jpg", "http://yanxuan.nosdn.127.net/43adabd457eaba8151cca4a79c37bc86.jpg", "http://yanxuan.nosdn.127.net/9ab4c327139e576d44f9d50784ac8254.jpg"],
		"inventory": [791, 549, 860],
		"information": [{
			"attrName": "材质",
			"attrValue": "ABS树脂+PP树脂"
		}, {
			"attrName": "USB充电线",
			"attrValue": "线长1米"
		}, {
			"attrName": "有无底座",
			"attrValue": "有"
		}, {
			"attrName": "风速档位",
			"attrValue": "2档可调"
		}],
		"label": "",
		"manufacture": "",
		"sale": 834,
		"date": "1500012759104",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1223000,
		"price": 59,
		"topName": "网易智造电子体重秤",
		"subName": "高精确值 高清显示 安全抗压",
		"shortDescription": ["高精确值", "高清显示", "安全抗压", "超薄设计", "超长续航", "自动显示"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c5395594f13027d902c76bd0a4f3eb84.png", "http://yanxuan.nosdn.127.net/7c33c1b16a0df0147c871d9e567fff59.png", "http://yanxuan.nosdn.127.net/7f745fdd5b2bc8aa6329d1ebcc618771.png"],
		"headImage": ["http://yanxuan.nosdn.127.net/d629b55149e540ad84a7958ae20f53a3.png", "http://yanxuan.nosdn.127.net/8ef9d3e04439bdcb6ef853033f2483d2.jpg", "http://yanxuan.nosdn.127.net/cbfccae86d8d8b0e7919e705eb53d5e4.jpg", "http://yanxuan.nosdn.127.net/4a185cb75838fe69b303da818b7a2132.jpg", "http://yanxuan.nosdn.127.net/490a82bc8e0ff5a133c7ccfdb1914c4c.jpg"],
		"types": ["白色"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/a9321dc5eb4f72200cd6beba0a2d864b.jpg", "http://yanxuan.nosdn.127.net/78de4346950e7b492b094c5570af842c.jpg", "http://yanxuan.nosdn.127.net/9027d29a3d9d301c8daa0cc8c4c80526.jpg", "http://yanxuan.nosdn.127.net/ff1844406498213c4a8e637b42504a16.jpg", "http://yanxuan.nosdn.127.net/d3912ec70dad59264408c8bdc9745239.jpg", "http://yanxuan.nosdn.127.net/99731599c683a3bf395c1c0b36939876.jpg", "http://yanxuan.nosdn.127.net/a6319776568d727cdbced8e1180bc232.jpg", "http://yanxuan.nosdn.127.net/511956574ef464e9c4ac881eb614c752.jpg", "http://yanxuan.nosdn.127.net/0e845f36d10214954b948c18960dbdc6.jpg", "http://yanxuan.nosdn.127.net/146762927fecfd0bc3f676f63579bb41.jpg", "http://yanxuan.nosdn.127.net/1dbef3ad173a4e76f00e355163423f94.jpg", "http://yanxuan.nosdn.127.net/2a9b6558a8d2f3e19e374a9bf5466c74.jpg", "http://yanxuan.nosdn.127.net/ccf69168e6ddcb0d54b58a94fd972098.jpg", "http://yanxuan.nosdn.127.net/cc3e28f046b44d32fc600bc7a5996dea.jpg", "http://yanxuan.nosdn.127.net/a91bd2ef428f681cab3e0a6c75dc9888.jpg", "http://yanxuan.nosdn.127.net/2443c3ac7f7a33190e0f6e881baece10.jpg", "http://yanxuan.nosdn.127.net/a35343a39152de4d4e20c300d2439813.jpg", "http://yanxuan.nosdn.127.net/9fcfb40da8c9de8d45d89e34711f564c.jpg", "http://yanxuan.nosdn.127.net/1f81709b7b7e89a65b58ae8596b8e02e.jpg", "http://yanxuan.nosdn.127.net/8cc7644765185240b435957501f1d44d.jpg", "http://yanxuan.nosdn.127.net/296bc7105144d908509f9983e203232f.jpg", "http://yanxuan.nosdn.127.net/c812063804671356affcc61d24322421.jpg", "http://yanxuan.nosdn.127.net/340d2135e6009ed004d31ff44b3f9c8a.jpg", "http://yanxuan.nosdn.127.net/3bff37e909f9d0cae7c982c6e74cc132.jpg", "http://yanxuan.nosdn.127.net/0d1d4b15ba4e0f9bb8fa9f0eef86a0be.jpg", "http://yanxuan.nosdn.127.net/e5e9e2f8b28a612d4049b691e5f285b2.jpg", "http://yanxuan.nosdn.127.net/6d2fa0e05a8f9cee366ca43df6a582c1.jpg"],
		"inventory": [199],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "270*280*22mm"
		}, {
			"attrName": "测量范围",
			"attrValue": "5~150kg"
		}, {
			"attrName": "计量单位",
			"attrValue": "kg"
		}, {
			"attrName": "最小显示单位",
			"attrValue": "0.1kg"
		}, {
			"attrName": "工作温度范围",
			"attrValue": "5~35℃"
		}],
		"label": "",
		"manufacture": "",
		"sale": 487,
		"date": "1500012762674",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1154012,
		"price": 129,
		"topName": "黑凤梨 体脂秤",
		"subName": "超薄材质，精确记录",
		"shortDescription": ["轻盈纤薄", "超强承重", "灵敏测量", "美观通透", "蓝光显示", "数据清晰"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/ddaacaf960ec1e77ba910f6e0d251989.jpg", "http://yanxuan.nosdn.127.net/1a0bf1496ac8df23aedc688566eb4a76.jpg", "http://yanxuan.nosdn.127.net/51e16560361a237cd4e75b3449d90cad.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/9526cf23967d59289a15b69e900bf43b.png", "http://yanxuan.nosdn.127.net/6a45a7de9e1410c3bab5d24293550a68.jpg", "http://yanxuan.nosdn.127.net/844ba4bf04a9d5218652654059073c33.jpg", "http://yanxuan.nosdn.127.net/3417ac8f6890fc917850dc4e9560ec58.jpg", "http://yanxuan.nosdn.127.net/ce2e826d4d72213a234dd57db9e4b066.jpg"],
		"types": ["黑色", "粉色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/f3a3bfd5f91efd300ff7fe14e69a60d3.jpg", "http://yanxuan.nosdn.127.net/137316eb014d9e44254e3ec3b9979ca2.jpg", "http://yanxuan.nosdn.127.net/0ce639002a2003533f74b08ad71e4639.jpg", "http://yanxuan.nosdn.127.net/14cd4c163f16de5665049fdb5a6d5b45.jpg", "http://yanxuan.nosdn.127.net/7e75706196c0b48a1b9e09335b2fcd1c.jpg", "http://yanxuan.nosdn.127.net/e88dfa8a3c6734a5df36318dcbb1180f.jpg", "http://yanxuan.nosdn.127.net/4f87719e9f79f86d1c7412cf5783fd0f.jpg", "http://yanxuan.nosdn.127.net/ec40652107f8bc80461cde0fa2a36c1a.jpg", "http://yanxuan.nosdn.127.net/36714bef1b7629408056bcc35b6944a6.jpg", "http://yanxuan.nosdn.127.net/c937ca9701091e935687a5a9087cce31.jpg", "http://yanxuan.nosdn.127.net/3dca84c348e33c32e210e6e934caaed2.jpg", "http://yanxuan.nosdn.127.net/a29ed3fb48fb6cb4b530fa317685f49b.jpg", "http://yanxuan.nosdn.127.net/a494bd29a82d33b3b65855f09052d4aa.jpg", "http://yanxuan.nosdn.127.net/50f59a77df7f448283277e9ae2a2e592.jpg", "http://yanxuan.nosdn.127.net/e1c77b3fe1e560ba465ec4cf7c589486.jpg", "http://yanxuan.nosdn.127.net/3ec87e35fc1028ceb69a92b7b9c07c22.jpg", "http://yanxuan.nosdn.127.net/f7d915ff0e82f3f77e909091b678282f.jpg", "http://yanxuan.nosdn.127.net/1299e4808f469049e7ccde00aaf14a90.jpg", "http://yanxuan.nosdn.127.net/682d8e9a6c41539dc1ba5a80fa5bd67f.jpg", "http://yanxuan.nosdn.127.net/9a0e2048352b30ac0ef60829212ec0da.jpg", "http://yanxuan.nosdn.127.net/efe24dbf20f64db597793918aaf46734.jpg", "http://yanxuan.nosdn.127.net/ac88d7368c22492c7d6aa1ff73294442.jpg", "http://yanxuan.nosdn.127.net/a19f027281be6c1e13f3f57554a0f915.jpg", "http://yanxuan.nosdn.127.net/6b73b51eba4eed3dce2188fd3103adf4.jpg", "http://yanxuan.nosdn.127.net/08d5ff3b5ba894fe3466a9efacaee77d.jpg", "http://yanxuan.nosdn.127.net/19a0772cfda3c3d919598f884157debd.jpg", "http://yanxuan.nosdn.127.net/cf91f15dccc8eec4288d9c79ea5883fa.jpg", "http://yanxuan.nosdn.127.net/f598357e6476344b917dd11d4100cc41.jpg", "http://yanxuan.nosdn.127.net/9981a1dd8405f9bfc726019884dd043b.jpg", "http://yanxuan.nosdn.127.net/5c1e1fdc215792b56ecd992e8d99e587.jpg", "http://yanxuan.nosdn.127.net/4c1641bacff2bb842609a9546b04f7f1.jpg", "http://yanxuan.nosdn.127.net/5cefb02808b8f8bc384fbec619fb2ca0.jpg", "http://yanxuan.nosdn.127.net/48d349fb4943e41bd70534487a4209e8.jpg", "http://yanxuan.nosdn.127.net/9299d48e9c45e0760f860b31f0488e36.jpg", "http://yanxuan.nosdn.127.net/d4b4f434d9c1bb31722254ab4723ed1f.jpg", "http://yanxuan.nosdn.127.net/723b29bb8c8c8c4005f7ea7856ee1a46.jpg", "http://yanxuan.nosdn.127.net/7cdcd9b255fc3b1976a9b380754f59e6.jpg", "http://yanxuan.nosdn.127.net/bd10f153c91cf55371726b185d8ca029.jpg", "http://yanxuan.nosdn.127.net/394b3fdd370ffd2850f0429677d2df46.jpg", "http://yanxuan.nosdn.127.net/05c944740ea71260ac92fe8f994fab29.jpg", "http://yanxuan.nosdn.127.net/4c3b8d331e0263dfcdc1b856edddaf5b.jpg", "http://yanxuan.nosdn.127.net/4eb6fc7b0c9a70b19d39fe0b5d0f1292.jpg", "http://yanxuan.nosdn.127.net/70e98e2befd345d50e3a3b53f45f0edc.jpg", "http://yanxuan.nosdn.127.net/5d55c71d42abaeb89acc75b318a8a0fc.jpg", "http://yanxuan.nosdn.127.net/6aed5b1c16a21c8b2c0762695a9587ac.jpg", "http://yanxuan.nosdn.127.net/d45fce1bcfa21a054644a7be9e19fff0.jpg", "http://yanxuan.nosdn.127.net/fc8e128e83ad37269c8dd4cd3e77147e.jpg", "http://yanxuan.nosdn.127.net/f5e024cdfaa696810bc0e507cbf6857f.jpg", "http://yanxuan.nosdn.127.net/29d574ca39b450765101450d3d1dfacb.jpg", "http://yanxuan.nosdn.127.net/9affdfe27760d2300f7b3948f295238c.jpg", "http://yanxuan.nosdn.127.net/37054c1e8128e1d87ff3f62e85391018.jpg", "http://yanxuan.nosdn.127.net/d7a0c119048ba27a8b1d937dbb08772c.jpg", "http://yanxuan.nosdn.127.net/246e6fd760becd19376f94d47e2d30a2.jpg", "http://yanxuan.nosdn.127.net/de2563a5dd5df512d1c331b9a785356f.jpg", "http://yanxuan.nosdn.127.net/63e603ca327c4998e2be0ae831074e77.jpg", "http://yanxuan.nosdn.127.net/85a7908074d622e9978ef721acd5c5f2.jpg", "http://yanxuan.nosdn.127.net/996a5f522c415c5a60afb8ef96e468b2.jpg", "http://yanxuan.nosdn.127.net/698f77d40411f262cc04eb072ac5df44.jpg", "http://yanxuan.nosdn.127.net/22ffc2aec5cafbe8ff724830a2b4697f.jpg", "http://yanxuan.nosdn.127.net/fd1a6081204aa0522a2f729e930a3937.jpg", "http://yanxuan.nosdn.127.net/f1f7e7b2f9d56051cd5380bbd0533780.jpg", "http://yanxuan.nosdn.127.net/65ca707bbdcb9b4a6d43bdbcf73c44c7.jpg"],
		"inventory": [522, 668],
		"information": [{
			"attrName": "材质",
			"attrValue": "ABS环保塑胶+5MM钢化玻璃"
		}, {
			"attrName": "测量范围",
			"attrValue": "5-150 KG"
		}, {
			"attrName": "净重",
			"attrValue": "约1.5 KG"
		}, {
			"attrName": "注意事项",
			"attrValue": "孕妇禁止使用"
		}],
		"label": "",
		"manufacture": "",
		"sale": 954,
		"date": "1500012765946",
		"category": "居家",
		"subCategory": "生活电器"
	})
	var goodsEntity = new goodsModel({
		"id": 1135050,
		"price": 179,
		"topName": "黑凤梨 多功能封闭式环保除菌猫砂盆",
		"subName": "银离子吸附脏东西，多功能",
		"shortDescription": ["PP树脂", "耐用省心", "封闭设计", "防止外溅", "抽屉设计", "方便铲屎"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f31fcf01b27718e5891333d2815f4805.jpg", "http://yanxuan.nosdn.127.net/6ac501124a6208f29542de7e60bbc2b6.jpg", "http://yanxuan.nosdn.127.net/fb6e31c75f285d63a44672dda4fe23ab.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/366f3f3f0e8971c8cf871e2b55b74ff2.png", "http://yanxuan.nosdn.127.net/2a7f492c870c603bbb8619d6ff40c22b.jpg", "http://yanxuan.nosdn.127.net/c43ff066b17207c21bb99e261d23a40d.jpg", "http://yanxuan.nosdn.127.net/e3d397a574d0867906a69278741a1562.jpg", "http://yanxuan.nosdn.127.net/64c1dd9a8a3cb26f9105ac68c8700171.jpg"],
		"types": ["雾灰", "豆沙红"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/3038f51062770ffaee30b78f94a2b657.jpg", "http://yanxuan.nosdn.127.net/d4612e8bad500ef7a8fc8efc62f8eb40.jpg", "http://yanxuan.nosdn.127.net/0bedf983a6342fa93dd71fd54d333a1e.jpg", "http://yanxuan.nosdn.127.net/e50b2960965aea52837220be0a67b485.jpg", "http://yanxuan.nosdn.127.net/5fba724a77c33b9b39759b6aa4d5e881.jpg", "http://yanxuan.nosdn.127.net/404ac5e06b60f92468323d439ac00852.jpg", "http://yanxuan.nosdn.127.net/11571ab96fbe116592ac36a62e48d696.jpg", "http://yanxuan.nosdn.127.net/81f97d5a146b2fb1fe96c4af566abfa5.jpg", "http://yanxuan.nosdn.127.net/9e84a6f175291a91a19aab47589c7c72.jpg", "http://yanxuan.nosdn.127.net/8f9a1794ffca4b7bb20d705664c8ab62.jpg", "http://yanxuan.nosdn.127.net/9b0bf7bc53c158cc565d9c773ae7fd6e.jpg", "http://yanxuan.nosdn.127.net/e20f1d9e31ebc27da72ce28020555e3b.jpg", "http://yanxuan.nosdn.127.net/ed7074fd5464c48fa582ca0c943f06b7.jpg", "http://yanxuan.nosdn.127.net/a70113629c23a64925f41f6eaa9c49e5.jpg", "http://yanxuan.nosdn.127.net/b6fa461f0817c04c9bfe7c4deffa8a36.jpg", "http://yanxuan.nosdn.127.net/7d758399e9da5bfdd833bcc7b7284575.jpg", "http://yanxuan.nosdn.127.net/f784c8c7ee377264ab69ca27dc667d25.jpg", "http://yanxuan.nosdn.127.net/5cec64ba5655f9ba80fe11cccf649fd1.jpg", "http://yanxuan.nosdn.127.net/7c1c0651edaf5da5aa651e2ee0a73bc4.jpg", "http://yanxuan.nosdn.127.net/5b76f7b140d06fb9d7438a76d26233ca.jpg", "http://yanxuan.nosdn.127.net/6e855871a7ea7f0966294f95ec63d8cf.jpg", "http://yanxuan.nosdn.127.net/b58bd38908aed42f6122e27edd5d26af.jpg", "http://yanxuan.nosdn.127.net/2d6e2639fcc07553ad6526b35843addc.jpg", "http://yanxuan.nosdn.127.net/8d2fe43bbf6d583898bfdede1ca8a52e.jpg", "http://yanxuan.nosdn.127.net/b6f83107b9181b0878c0b0f321b262ce.jpg", "http://yanxuan.nosdn.127.net/43c0d85cae62d2a5988c512207e4b014.jpg", "http://yanxuan.nosdn.127.net/cd4c99fa3e9fda3fcb442ea492677945.jpg", "http://yanxuan.nosdn.127.net/d63fb905939177cc82867c36fc0e675d.jpg", "http://yanxuan.nosdn.127.net/ffc5529e67965e7857acafaf1b49db96.jpg", "http://yanxuan.nosdn.127.net/6c786133098fafbfbaab3087ba4ac8c9.jpg", "http://yanxuan.nosdn.127.net/5bb6890a74cbaf86c3b1a126d895e8aa.jpg", "http://yanxuan.nosdn.127.net/c4c5a808ec381a040f19e3c600bf0487.jpg", "http://yanxuan.nosdn.127.net/b7f579d2602a6199a07e736f979fc557.jpg", "http://yanxuan.nosdn.127.net/3a24254f26e49d9a477449964c248eab.jpg", "http://yanxuan.nosdn.127.net/63bb0387f308812d33e2f6e58572f59a.jpg", "http://yanxuan.nosdn.127.net/9c3ca66b427ac913c2e3861c46d5d409.jpg", "http://yanxuan.nosdn.127.net/60de0ef16d1489bc3f838412054c4e8c.jpg", "http://yanxuan.nosdn.127.net/b87d0c3dc0e7a2fbc03461e0e0f4de4f.jpg", "http://yanxuan.nosdn.127.net/3216c61443d3567f7dfd579a5f515988.jpg", "http://yanxuan.nosdn.127.net/0cd8ffd74d19196a2f43b566fbbbe9a1.jpg", "http://yanxuan.nosdn.127.net/674564a151c93c35e15c856f1ffdd5f5.jpg", "http://yanxuan.nosdn.127.net/c67bbfdf9fff94fca73b9784919161f5.jpg", "http://yanxuan.nosdn.127.net/9fda02a1171045c7378019437cf53d44.jpg", "http://yanxuan.nosdn.127.net/643012f41ea84cde3bfc71079b952340.jpg", "http://yanxuan.nosdn.127.net/dbb4e4fc661e66463604a026c5840db5.jpg", "http://yanxuan.nosdn.127.net/28af983c3b4a27917307e007f68ecd64.jpg", "http://yanxuan.nosdn.127.net/c0a91d38b56657ca860b6eb7e2a7b1b3.jpg", "http://yanxuan.nosdn.127.net/112c7e2c15abc152f669d5984c4e3482.jpg", "http://yanxuan.nosdn.127.net/6a4de08f3d124191a044edb9a78ef6ea.jpg", "http://yanxuan.nosdn.127.net/fdeff11789d826255e462e03caf695d2.jpg", "http://yanxuan.nosdn.127.net/07f24735d764fb510515e047f8d42127.jpg", "http://yanxuan.nosdn.127.net/0c7b842f917c2c6fa22046f09e3f0ca4.jpg", "http://yanxuan.nosdn.127.net/9507d8bc9ac5e989ffdf142257924b53.jpg", "http://yanxuan.nosdn.127.net/0dbc5772d82ac216c8bab206e1dc57e6.jpg", "http://yanxuan.nosdn.127.net/a40b22e6663fad470916a9d8918ab077.jpg", "http://yanxuan.nosdn.127.net/a3c3a07f0ca92f49efa3e2034c5512dc.jpg", "http://yanxuan.nosdn.127.net/55e13494e0dcd4e2210c5674a2d6a06e.jpg", "http://yanxuan.nosdn.127.net/5d29d38646e14c16f81e8cfbfe9d4eb0.jpg", "http://yanxuan.nosdn.127.net/038920cc4ea997d694ad9886188fb54c.jpg", "http://yanxuan.nosdn.127.net/3d5fc54a1e16e60b1120d4f7cdfabae4.jpg", "http://yanxuan.nosdn.127.net/8fe6c3bed381d066d087e92e57c7fc10.jpg", "http://yanxuan.nosdn.127.net/dc3430ce82f528cb58fb8401aea27563.jpg", "http://yanxuan.nosdn.127.net/e48f1634cde251645fcba657dfc49efe.jpg", "http://yanxuan.nosdn.127.net/b10cd6bc0ba609479126daa96f3827e2.jpg", "http://yanxuan.nosdn.127.net/ec61855a8276ff91d615ab162a789af3.jpg", "http://yanxuan.nosdn.127.net/7da8c339a0e775074d554c2f0194ea86.jpg", "http://yanxuan.nosdn.127.net/05a4a29ca3c07a0a942d725fdf15b130.jpg", "http://yanxuan.nosdn.127.net/729cea89be0e78933179e06dc1262acd.jpg"],
		"inventory": [25, 718],
		"information": [{
			"attrName": "产品尺寸",
			"attrValue": "52*42*40cm"
		}, {
			"attrName": "产品净重",
			"attrValue": "2.105kg"
		}, {
			"attrName": "产品毛重",
			"attrValue": "3.215kg"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB 9688-1988"
		}, {
			"attrName": "配送范围",
			"attrValue": "请咨询客服"
		}],
		"label": "",
		"manufacture": "",
		"sale": 301,
		"date": "1500012769123",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1064003,
		"price": 89,
		"topName": "六边形南瓜式宠物窝",
		"subName": "给萌宠柔软包裹的归家感",
		"shortDescription": ["麂皮绒面", "糯软悬垂", "南瓜设计", "安全领域", "PP棉", "回弹柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/787fa5a8e54aab5f40196ddf1e396077.jpg", "http://yanxuan.nosdn.127.net/09a4b1a49956cc96bfb95fcd45ffa195.jpg", "http://yanxuan.nosdn.127.net/fe370e67e0874374f14a211d0e02b16a.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/58ed94b63b39339e7814f1339013793c.png", "http://yanxuan.nosdn.127.net/b2de2ebcee090213861612909374f9f8.jpg", "http://yanxuan.nosdn.127.net/3b905dd63fc81b0359a2716fe2a48b65.jpg", "http://yanxuan.nosdn.127.net/dbb11f9a0277b957ee7fa1c82f77d0bd.jpg", "http://yanxuan.nosdn.127.net/9e2f6edb8edfedb03a2e3e6cdfe37b51.jpg"],
		"types": ["45R"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/44f4fe5b43365884131b07c25b3c54ca.jpg", "http://yanxuan.nosdn.127.net/beabfe6fd0717daa3544ac7c2d82b430.jpg", "http://yanxuan.nosdn.127.net/25467804bf2eed0d07f171c10f798d2e.jpg", "http://yanxuan.nosdn.127.net/7fced8c058df228bed15bc8822fa871c.jpg", "http://yanxuan.nosdn.127.net/a3eea3bd19f75f01a7ed424be3aa9d42.jpg", "http://yanxuan.nosdn.127.net/e30076799805a678af405dce6ccf6d62.jpg", "http://yanxuan.nosdn.127.net/ac4cdbb579512a23287b4a43639b5e34.jpg", "http://yanxuan.nosdn.127.net/2cf8b27e7c89f0a46cbd330bb81ab1a5.jpg", "http://yanxuan.nosdn.127.net/3021babd417d3b3791db8b9684c9a07e.jpg", "http://yanxuan.nosdn.127.net/a72b172bf0e8ad6d0d6735750e1d375c.jpg"],
		"inventory": [621],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "尺寸",
			"attrValue": "29*19cm"
		}, {
			"attrName": "颜色",
			"attrValue": "藏青色"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 326,
		"date": "1500012772425",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1064002,
		"price": 69,
		"topName": "黑凤梨 秋冬加厚条纹宠物窝",
		"subName": "时尚牛仔，加厚温暖",
		"shortDescription": ["抓绒面料", "柔软保温", "牛仔帆布", "不易起球", "PP填充", "回弹柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f4d7bef300db406db289df5dbff7de73.jpg", "http://yanxuan.nosdn.127.net/fcee0b6400c809cdbba0878e2c8f7bc3.jpg", "http://yanxuan.nosdn.127.net/b972c0fa2585ec5df3e0568dfa87d7b9.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/48dbfe207b2203ef45055dcc9cedbe60.png", "http://yanxuan.nosdn.127.net/874a3f226d63546ca28f774cd9242251.jpg", "http://yanxuan.nosdn.127.net/5e728b405af9d32114162800ffa67d8b.jpg", "http://yanxuan.nosdn.127.net/eb83d490f564fd34b18b65583d0658d1.jpg", "http://yanxuan.nosdn.127.net/af4347f2c2333dfbf654d6b5e549f9e8.jpg"],
		"types": ["40cm", "60cm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/af55e5cf107279aff19f980782cc123e.jpg", "http://yanxuan.nosdn.127.net/c3abf7b0819211502f3c396b1a8c8e3e.jpg", "http://yanxuan.nosdn.127.net/40318cdd76bd3d0f001be9ea4f54895e.jpg", "http://yanxuan.nosdn.127.net/1c3e7460d40f3495446c854e4e60e65e.jpg", "http://yanxuan.nosdn.127.net/89a41c2eb741d4851989ea22115da469.jpg", "http://yanxuan.nosdn.127.net/6bb111af5959b51886c6ddecf62087ea.jpg", "http://yanxuan.nosdn.127.net/7576e8c85e36caeb75ede62cdb4c72cc.jpg", "http://yanxuan.nosdn.127.net/defc287312e29cf3bed1671d37ff76fe.jpg", "http://yanxuan.nosdn.127.net/2c007f61c29cd69d12dfd45d2f7868cd.jpg", "http://yanxuan.nosdn.127.net/212d3020bac13731a2e7ed13d9c2d24d.jpg", "http://yanxuan.nosdn.127.net/9c17307d5d0f42ab37f0379d2b0f5799.jpg", "http://yanxuan.nosdn.127.net/149bdd95c6c840de50f044c6a52bfa60.jpg", "http://yanxuan.nosdn.127.net/c94fd00369a0042e24d74ea531a6b6da.jpg", "http://yanxuan.nosdn.127.net/13fc42f0079f27633e372714bf2661e5.jpg", "http://yanxuan.nosdn.127.net/5c21d5cee49bd126b538a43cf64d2d0a.jpg", "http://yanxuan.nosdn.127.net/1a9ab12fa52fbf213bb60b55bdc2b602.jpg", "http://yanxuan.nosdn.127.net/340dc8efce6703ab623150444a295e55.jpg", "http://yanxuan.nosdn.127.net/8bbea99a6d2c6feece9ce18f215d278b.jpg", "http://yanxuan.nosdn.127.net/5dfcea1ac4d5e88f733da54460b0dd00.jpg", "http://yanxuan.nosdn.127.net/cc81118caaba9566eddd0133da590f92.jpg", "http://yanxuan.nosdn.127.net/10120dbed62dd0286e180f8af8c0364e.jpg", "http://yanxuan.nosdn.127.net/48db29084c7bcda0aa192bf3ebd3f6d1.jpg", "http://yanxuan.nosdn.127.net/0307d02bb2c4064617c0299e84d62f51.jpg", "http://yanxuan.nosdn.127.net/2a5067219b8bf9bb219f6f2468d101ed.jpg", "http://yanxuan.nosdn.127.net/8a57e62802b4cd5ae648e9e5f29ef548.jpg", "http://yanxuan.nosdn.127.net/7c4a7746484d0cc1b7cbccf0ca3a6e25.jpg", "http://yanxuan.nosdn.127.net/d7cfc2015eaff7614ae7391f8c0ab75a.jpg", "http://yanxuan.nosdn.127.net/d4970a2819b1f1d92393f8e176b9b3ab.jpg", "http://yanxuan.nosdn.127.net/149d0c58555018d6112a1539a2fe3d5b.jpg", "http://yanxuan.nosdn.127.net/86314e3d012e89a0b91369c18162dd4d.jpg", "http://yanxuan.nosdn.127.net/f01fd12b14d6ca4688446893942e63f3.jpg", "http://yanxuan.nosdn.127.net/eb0260f7a03a8a99454c4da1ffebef08.jpg", "http://yanxuan.nosdn.127.net/5dac9f4ac17044774a5b882f62580428.jpg", "http://yanxuan.nosdn.127.net/c88c0b215ca7a0398c71f28104f5e4a9.jpg", "http://yanxuan.nosdn.127.net/c996022de2b90af8ecbe0d9c460b8c6f.jpg", "http://yanxuan.nosdn.127.net/3dee2fc201d55a0962fe9bbd7680ecff.jpg", "http://yanxuan.nosdn.127.net/afe476025e22b5d5488c4a4d124fe73c.jpg", "http://yanxuan.nosdn.127.net/16f6773678ab86716a7ae463e93a7f48.jpg", "http://yanxuan.nosdn.127.net/78f088ab514f3509a839b2804e4702de.jpg", "http://yanxuan.nosdn.127.net/913d59fa34da530062cc3f1bb506e6f4.jpg", "http://yanxuan.nosdn.127.net/1ab28f6e09afb4569837371b5ceca32b.jpg", "http://yanxuan.nosdn.127.net/cc5dfc5d57ff1902116598fff0135c65.jpg", "http://yanxuan.nosdn.127.net/5ce8f5925ba0bdc8ba407f8f084341e8.jpg", "http://yanxuan.nosdn.127.net/a6aa9f339e039462d1641f55218dac11.jpg", "http://yanxuan.nosdn.127.net/28404012e24709db73c07334d0d801e2.jpg", "http://yanxuan.nosdn.127.net/4a078919e5132aebeeb899d809cd44c0.jpg", "http://yanxuan.nosdn.127.net/5e9e789ef53afd60332c9cb589dd4e4c.jpg", "http://yanxuan.nosdn.127.net/22d9041d25660d75f27e1f8bb6b590d9.jpg", "http://yanxuan.nosdn.127.net/5c32fae4a3af427cd180f082cd82fdfb.jpg", "http://yanxuan.nosdn.127.net/e11f7103ffd4775386af00887f805c3c.jpg", "http://yanxuan.nosdn.127.net/d3a0c59f0fd70570fbb7b75266950c57.jpg", "http://yanxuan.nosdn.127.net/0fcc8d3c7bb6768e19e860e7cb8d5628.jpg"],
		"inventory": [684, 327],
		"information": [{
			"attrName": "产品标准",
			"attrValue": "FZ/T 62011.3-2008"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "填充物重量",
			"attrValue": "110g"
		}, {
			"attrName": "颜色",
			"attrValue": "蓝白"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 932,
		"date": "1500012775901",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1064004,
		"price": 99,
		"topName": "方形封闭式宠物窝",
		"subName": "封闭式设计猫咪独享",
		"shortDescription": ["包裹式窝", "空间保护", "牛仔帆布", "耐磨耐抓", "PP棉", "回弹柔软"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/b78e5e99dabcf4adc5841d4de57ee3b9.jpg", "http://yanxuan.nosdn.127.net/8c457bad707e979fd1cf37a6a1847f7f.jpg", "http://yanxuan.nosdn.127.net/06cff3b70dc10a13daabf15dc6efcc0f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/074ad39c9f43b410067d99fb10a2b6b5.png", "http://yanxuan.nosdn.127.net/0ce6d033a3550d293737007a088026e1.jpg", "http://yanxuan.nosdn.127.net/510b4711672df2d9b2d83e1505cdc4a3.jpg", "http://yanxuan.nosdn.127.net/d7e4f07329f9ff163ae0e37512ff56d3.jpg", "http://yanxuan.nosdn.127.net/b5cfb249243d2e0d7704c4b84d71e4c1.jpg"],
		"types": ["32*32*32cm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/09f022af55341d80d5d3ad620ce6d779.jpg", "http://yanxuan.nosdn.127.net/d75ea4c580effd435ed00f652c01a778.jpg", "http://yanxuan.nosdn.127.net/8fad82d53a0494c625608786f5931950.jpg", "http://yanxuan.nosdn.127.net/0a1d8a1cb8a57ae7921f34a9d761f3aa.jpg", "http://yanxuan.nosdn.127.net/261670eea6a48c7e307393ce295e2ce5.jpg", "http://yanxuan.nosdn.127.net/11bfc68005a0ce9b80e01f614a259af7.jpg", "http://yanxuan.nosdn.127.net/688f822cf34c656367cccfb0d9f72151.jpg", "http://yanxuan.nosdn.127.net/f3721906d7c6c0c30193d4778eff9e4e.jpg", "http://yanxuan.nosdn.127.net/090e9c28dc2736a1246ef914e35634c4.jpg", "http://yanxuan.nosdn.127.net/f31d497ae028ff2c2e933d712ccc055d.jpg", "http://yanxuan.nosdn.127.net/a424b9e51b854c4abf61b8c1c1cdf1aa.jpg", "http://yanxuan.nosdn.127.net/7660d03152dea988256eac3be92541b3.jpg"],
		"inventory": [58],
		"information": [{
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "规格",
			"attrValue": "32*32*32cm"
		}, {
			"attrName": "颜色",
			"attrValue": "牛仔条纹"
		}],
		"label": "",
		"manufacture": "NITORI制造商",
		"sale": 352,
		"date": "1500012778769",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1108032,
		"price": 29,
		"topName": "黑凤梨 宠物外出便携硅胶折叠碗",
		"subName": "环保材质，安全出行",
		"shortDescription": ["硅胶材质", "健康无害", "折叠设计", "便携易收", "高频耐折", "不易变形"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/7af2d150712370eadd4bd42c384b8e08.jpg", "http://yanxuan.nosdn.127.net/083926c8bd31fce4edbb55a874d1e733.jpg", "http://yanxuan.nosdn.127.net/0925d00ce676514253aba605fed28df2.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/b1f9e1f700469f71fe3c4187ef53c99f.png", "http://yanxuan.nosdn.127.net/971ba39166439705d7a254d5d736a753.jpg", "http://yanxuan.nosdn.127.net/16c11f11c03b0f0e596f6c9cd85170bc.jpg", "http://yanxuan.nosdn.127.net/31469f008127ea2f1c7ffed1755fff42.jpg", "http://yanxuan.nosdn.127.net/31376f28a3d00cfe767713b93d3a84be.jpg"],
		"types": ["粉色S", "蓝色S", "粉色M", "蓝色M"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/d1412f0fe39acbd5ca1acd7de2f3cb3a.jpg", "http://yanxuan.nosdn.127.net/2fbb853d131ad19b0828f53df94fa009.jpg", "http://yanxuan.nosdn.127.net/1e1f8e186e45677bb1ddbb1923a5fa68.jpg", "http://yanxuan.nosdn.127.net/bae5061249fd9d4e9a7acd73ebfcfdce.jpg", "http://yanxuan.nosdn.127.net/00077569f8431dff0f29f9d7549dc99e.jpg", "http://yanxuan.nosdn.127.net/c105eb25dbd4e12665da9bdd57e8a813.jpg", "http://yanxuan.nosdn.127.net/a2747388a8c156c02bfd4a235e0b1985.jpg", "http://yanxuan.nosdn.127.net/7010e2c0929c9dc462e84baeda48a258.jpg", "http://yanxuan.nosdn.127.net/b194eca9d84d9b1622c8713da198abc4.jpg", "http://yanxuan.nosdn.127.net/88f9edaa85c7cdfccc186ddf501535c3.jpg", "http://yanxuan.nosdn.127.net/285a7f869fda2ffff913394fec3d7808.jpg", "http://yanxuan.nosdn.127.net/e04585cd07ddeb0fcfd6e5f4dac3e1b7.jpg", "http://yanxuan.nosdn.127.net/ad1ecc9f2e375bba49ae547d04723660.jpg", "http://yanxuan.nosdn.127.net/bbe201e864d07f6115e92adc2bd9f59b.jpg", "http://yanxuan.nosdn.127.net/361eab79733321360e2c3da94475debc.jpg", "http://yanxuan.nosdn.127.net/5352689c666209bf9a5b4481131e7b85.jpg", "http://yanxuan.nosdn.127.net/8dd3ff7afd4e32f663ad5889085ead40.jpg", "http://yanxuan.nosdn.127.net/dac31201563447d81f784b9ffbbdeb9d.jpg", "http://yanxuan.nosdn.127.net/1200eec641bb91850585493ed1b132d9.jpg", "http://yanxuan.nosdn.127.net/c43eca81f5c611cf80f3e99cc87480e1.jpg", "http://yanxuan.nosdn.127.net/c886c0672fca255fc1043f4bf3487ff1.jpg", "http://yanxuan.nosdn.127.net/b54745f4610e0a4e2f3539487ac4c989.jpg", "http://yanxuan.nosdn.127.net/9fb06610c10ddaf870b5e1b6f8079b58.jpg", "http://yanxuan.nosdn.127.net/d686382839afd0791d749be217d1dd7e.jpg", "http://yanxuan.nosdn.127.net/458ebcb9fbb56d218584c753cb461d3b.jpg", "http://yanxuan.nosdn.127.net/a61ef7b0c7a9816ed932d644b670d6a1.jpg", "http://yanxuan.nosdn.127.net/2a9c1462e8d38800af27dae974bd621a.jpg", "http://yanxuan.nosdn.127.net/62885387d90babb428bda31c54ec6522.jpg", "http://yanxuan.nosdn.127.net/57058614390ba35b14ed606fb36967fb.jpg", "http://yanxuan.nosdn.127.net/1065485f2a3e8062bf394dc0a0fe7e59.jpg", "http://yanxuan.nosdn.127.net/4762bb6066066e6a0fba4b342a63abc2.jpg", "http://yanxuan.nosdn.127.net/003aebae3e9b02d156c6282e8cea1854.jpg", "http://yanxuan.nosdn.127.net/0f9438678a25f29888eb05b291bc74aa.jpg", "http://yanxuan.nosdn.127.net/07510ce163e0d6e715dd2e7c60b5dff5.jpg", "http://yanxuan.nosdn.127.net/d51a318c70b0607006e0295b546e2bde.jpg", "http://yanxuan.nosdn.127.net/1d60fc3d0c86a7dbc76865b8b4b57bd9.jpg", "http://yanxuan.nosdn.127.net/61c78f471d2974d10342a97c2df64b58.jpg", "http://yanxuan.nosdn.127.net/3819f1fcefc2c90dd9da06ee7d45fca7.jpg", "http://yanxuan.nosdn.127.net/a9a90f5ef2f8b2247c156f7b2135aa88.jpg", "http://yanxuan.nosdn.127.net/a3d9b7eb5284d4af59a2d8f39caa5b04.jpg", "http://yanxuan.nosdn.127.net/05a2fe2d08dcf2817b011f05cd3b6361.jpg", "http://yanxuan.nosdn.127.net/bc3d55da70b1725e4c59b48a6c400c82.jpg", "http://yanxuan.nosdn.127.net/543e09e5fed6b44220de50cfda5cb3df.jpg", "http://yanxuan.nosdn.127.net/aa2a8d79e1728cac8eabd880c7e8cb60.jpg", "http://yanxuan.nosdn.127.net/d51a077a7ca480200ff47d214c04272f.jpg", "http://yanxuan.nosdn.127.net/e2351a47b34e0eb9cd344cfb19648ad4.jpg", "http://yanxuan.nosdn.127.net/157647d3f4c7a3521568822d2697a268.jpg", "http://yanxuan.nosdn.127.net/a068dc07de09260110c3fc5bbcd7da43.jpg", "http://yanxuan.nosdn.127.net/39f40738562656a59d7938b1d3f766cf.jpg", "http://yanxuan.nosdn.127.net/0d8ba861f645008e226905f1f1885966.jpg", "http://yanxuan.nosdn.127.net/8201d91a926eadfb367e6776bd5198f5.jpg", "http://yanxuan.nosdn.127.net/1b74d92d0b7fdf97d117601cd7ad59fe.jpg"],
		"inventory": [263, 147, 949, 210],
		"information": [{
			"attrName": "材料",
			"attrValue": "硅胶"
		}],
		"label": "",
		"manufacture": "",
		"sale": 546,
		"date": "1500012782106",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1108030,
		"price": 39,
		"topName": "黑凤梨 宠物便携出行圆球饮水器",
		"subName": "外出饮水必备",
		"shortDescription": ["环保密胺", "无害健康", "旋转收纳", "便携干净", "独立评审", "外带储水"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/00f82b321276d968321218040411ab58.jpg", "http://yanxuan.nosdn.127.net/69f896783f7f9321f6c3f050d689e72b.jpg", "http://yanxuan.nosdn.127.net/54e1f2850e901fb189b54029f4601b55.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4891e60ff08ceed36d40a754e45e8742.png", "http://yanxuan.nosdn.127.net/139b7be83a064eaa5f99feeea44729fd.jpg", "http://yanxuan.nosdn.127.net/ad6757535783bbbba22325943caad862.jpg", "http://yanxuan.nosdn.127.net/3528b0ec40265759371405415b74c734.jpg", "http://yanxuan.nosdn.127.net/61d995604039df8026fee4b3c15e8692.jpg"],
		"types": ["BB粉", "BB蓝"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/76246fd4d147923cd8b228f5388a4c70.jpg", "http://yanxuan.nosdn.127.net/8bc329a9a6a84d41ce0ea09adafb2758.jpg", "http://yanxuan.nosdn.127.net/7c1048007dac326f86ad63ccddc6569a.jpg", "http://yanxuan.nosdn.127.net/8b93c1cc81c413664ac5c7f5c82b6b0f.jpg", "http://yanxuan.nosdn.127.net/c16887e02437b30014b36cc397f5b961.jpg", "http://yanxuan.nosdn.127.net/3261ea020a423cf6d77fdd47f064a952.jpg", "http://yanxuan.nosdn.127.net/e00ffb38d358ff1bc50245427e5f996e.jpg", "http://yanxuan.nosdn.127.net/1c4ad85eb5c5a1ce09f7e776a843187a.jpg", "http://yanxuan.nosdn.127.net/40d1059251a734104aa8a867c72dc4b4.jpg", "http://yanxuan.nosdn.127.net/f687ce0c04b0267a6334c123d2597c5f.jpg", "http://yanxuan.nosdn.127.net/3fda9b9130413be95221066b4f81e884.jpg", "http://yanxuan.nosdn.127.net/f8c2044398291f217028909a784e0b13.jpg", "http://yanxuan.nosdn.127.net/95f73c7882f9ac95a351240da187db09.jpg", "http://yanxuan.nosdn.127.net/afee0341a9d9f0d45cb39f0ad1e23311.jpg", "http://yanxuan.nosdn.127.net/603d34b8d684e19bb840976e063daabe.jpg", "http://yanxuan.nosdn.127.net/b21f1b81347ee9390b5f240d9befcd15.jpg", "http://yanxuan.nosdn.127.net/ef4eb1190b487ea3c0423b37cd580556.jpg", "http://yanxuan.nosdn.127.net/11b87440d902114319ddd48037df6d14.jpg", "http://yanxuan.nosdn.127.net/966561a54b2924f6a24404048edcbd85.jpg", "http://yanxuan.nosdn.127.net/252ec530ace8cc935f68466fec090b7a.jpg", "http://yanxuan.nosdn.127.net/461db5e5863361fdfc838219bb49bb1c.jpg", "http://yanxuan.nosdn.127.net/8da8a5747f9738b7783ed564e1d4a2fc.jpg", "http://yanxuan.nosdn.127.net/bb043978f52fd78e828372810b61b48f.jpg", "http://yanxuan.nosdn.127.net/147567dcd9095332126800234253fc0b.jpg", "http://yanxuan.nosdn.127.net/77b7c00ed7f2aebe72e5d11dc8bd5b9c.jpg", "http://yanxuan.nosdn.127.net/cd47ce41cc67b3799c7db28f0d602b6c.jpg", "http://yanxuan.nosdn.127.net/90b7bc84dc85dd465bf7cfede9b2b9fa.jpg", "http://yanxuan.nosdn.127.net/546b6ee44fca1bf076b9132e071bb42c.jpg", "http://yanxuan.nosdn.127.net/0913146e2c05b6f7dcb11cb87c793f4d.jpg", "http://yanxuan.nosdn.127.net/64f5a300c1aaa2da61ebb99000b62901.jpg", "http://yanxuan.nosdn.127.net/da8ee6d477c4a9e6eff109bfe26f0984.jpg", "http://yanxuan.nosdn.127.net/710e9c766cb35daaedbae115f2a28869.jpg", "http://yanxuan.nosdn.127.net/32efc2d2ef4a16652d4d8464eb9cc420.jpg", "http://yanxuan.nosdn.127.net/3133f864d8185d5346d850420c6a7e9e.jpg", "http://yanxuan.nosdn.127.net/8a07745d459efb5dff9d0f7d4eef2e66.jpg", "http://yanxuan.nosdn.127.net/52dcd476bdaaf5eb7caa5ba60c4e5025.jpg", "http://yanxuan.nosdn.127.net/bba9b6795287cab073d87d64d31968a2.jpg", "http://yanxuan.nosdn.127.net/1d41fbc33aa761cb1470305ccd40ab45.jpg", "http://yanxuan.nosdn.127.net/f493a803589011efa273a361a3d63ee4.jpg", "http://yanxuan.nosdn.127.net/8ea3910ca6e3ce5b981bd29cd6514943.jpg", "http://yanxuan.nosdn.127.net/0a278a7da788bf2deed71f9c92ebaacf.jpg", "http://yanxuan.nosdn.127.net/100b933651ca2dd3110cb9a7222338a3.jpg", "http://yanxuan.nosdn.127.net/97d2430f37790c02ad10ed6a8e49c507.jpg", "http://yanxuan.nosdn.127.net/e34a211ed8086a8d6653dd9828cb4e84.jpg", "http://yanxuan.nosdn.127.net/bb731b3f58a89b4830dfe086195504f6.jpg", "http://yanxuan.nosdn.127.net/e6470fe9cb3222b4499e88c87df94cf7.jpg", "http://yanxuan.nosdn.127.net/477e7e4dc00bbe98104489ecf5e54f46.jpg", "http://yanxuan.nosdn.127.net/67eda798327d01608f0181e70b1f6ac3.jpg", "http://yanxuan.nosdn.127.net/118250dbb889c300814110038475e769.jpg", "http://yanxuan.nosdn.127.net/4be5471374d38e1db646babbb421b01d.jpg", "http://yanxuan.nosdn.127.net/3141058c58dbffb2544f3590a8e445ce.jpg", "http://yanxuan.nosdn.127.net/35cbf1a66bff976454b0885ad9dabc20.jpg", "http://yanxuan.nosdn.127.net/d3b744149f6bb1e1fb279eade70902f4.jpg", "http://yanxuan.nosdn.127.net/d4b8f15d3417a7b58722a303d8d13c51.jpg", "http://yanxuan.nosdn.127.net/db4fc48c760ba2a70edf9dd7bc54cc1b.jpg", "http://yanxuan.nosdn.127.net/114b89b1693281c062e238504c541a43.jpg", "http://yanxuan.nosdn.127.net/946830ffc75a6fec44b292963a63a079.jpg", "http://yanxuan.nosdn.127.net/de042a6610dd9c3e77c149190e244e30.jpg", "http://yanxuan.nosdn.127.net/391a3fd12e566cec943e4b2ecda88071.jpg", "http://yanxuan.nosdn.127.net/d1b5982d1e700fa0f6c882eaae6c4a71.jpg", "http://yanxuan.nosdn.127.net/d574585c2fad90896f37141e0ddad603.jpg", "http://yanxuan.nosdn.127.net/9810176c1018dc6b7a0c18ae1f699212.jpg", "http://yanxuan.nosdn.127.net/84e78eea5af7850611ce91becb59f437.jpg", "http://yanxuan.nosdn.127.net/1f1e73b0acfe9153d19dab82a747bc10.jpg", "http://yanxuan.nosdn.127.net/51095ad8f796428bdb8ae932ca1b0074.jpg", "http://yanxuan.nosdn.127.net/8cbd7745a97fb7b7e4c12df87fc44c85.jpg"],
		"inventory": [249, 585],
		"information": [{
			"attrName": "材料",
			"attrValue": "美耐皿树脂、聚碳酸酯（pc）"
		}],
		"label": "",
		"manufacture": "",
		"sale": 663,
		"date": "1500012785260",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1108031,
		"price": 39,
		"topName": "宠物不锈钢圆形倾斜餐碗",
		"subName": "15°倾斜设计，保护萌宠颈椎",
		"shortDescription": ["环保密胺", "无害健康", "倾斜盆口", "方便进食", "拆卸两件", "方便清洗"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/851f9decbd20488dbe990f37734c1571.jpg", "http://yanxuan.nosdn.127.net/70cf5434e5cce517323161abd2dd8bee.jpg", "http://yanxuan.nosdn.127.net/8b5de656d343b6585d4291c4a7301f14.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/e13e9697e01339c6cf7479eb81b3fbe2.png", "http://yanxuan.nosdn.127.net/f2c5d5f0e1628cd1e834b7b0221cf513.jpg", "http://yanxuan.nosdn.127.net/49c00c7cffcbc5fc6438bdac50f772e0.jpg", "http://yanxuan.nosdn.127.net/7ae6591eca8cedeb94270d0c73eaebd7.jpg", "http://yanxuan.nosdn.127.net/2d0e71288124d5ca4ba44f826b53c78b.jpg"],
		"types": ["BB粉-S号", "BB蓝-S号", "BB粉-M号", "BB蓝-M号", "BB粉-L号", "BB蓝-L号"],
		"chara": "6色可选",
		"description": ["http://yanxuan.nosdn.127.net/fe442c6b8b05d23d83c190640065b302.jpg", "http://yanxuan.nosdn.127.net/ba20be368cb41c574702e6744a0c2ce8.jpg", "http://yanxuan.nosdn.127.net/7092d305d9b11aa72f95038e90154fdf.jpg", "http://yanxuan.nosdn.127.net/a5347b835761722810025b9f3c6b6242.jpg", "http://yanxuan.nosdn.127.net/3044ad714ba17abfe7bff91852dbbb7a.jpg", "http://yanxuan.nosdn.127.net/8f2e55960d44c44fe16be14ca42b79b9.jpg", "http://yanxuan.nosdn.127.net/6ab5ffee3b444a77f27ac16a823b26e9.jpg", "http://yanxuan.nosdn.127.net/35f2901cbb277423113591ff6888679e.jpg", "http://yanxuan.nosdn.127.net/2f6f5b1d8a683b1250bd5ebc27b833d8.jpg", "http://yanxuan.nosdn.127.net/d12811178bd5bcbf4a8084b96d983510.jpg", "http://yanxuan.nosdn.127.net/3a91d9ab01721022697a0317d806acf1.jpg", "http://yanxuan.nosdn.127.net/fda53f2d82de49415036a1b7f3682897.jpg", "http://yanxuan.nosdn.127.net/06ad2786bb0ed2e15db6e0ca4a7f6e9f.jpg", "http://yanxuan.nosdn.127.net/6364ac31e8f2c6dca96a15272b4bdf74.jpg", "http://yanxuan.nosdn.127.net/63676d91181fe828d311152cf64e7c96.jpg", "http://yanxuan.nosdn.127.net/4e3720a6ebaa9e055e13a59b949846a7.jpg", "http://yanxuan.nosdn.127.net/8e7b6a3053033461ac16f131a144d712.jpg", "http://yanxuan.nosdn.127.net/71a84329dd57b8ea6ea475dfc7d7ea45.jpg", "http://yanxuan.nosdn.127.net/b9aa4a346e8aaa99e5f0a8a8ddbbae52.jpg", "http://yanxuan.nosdn.127.net/871bf338274c5a2c12fbcf47253dee9e.jpg", "http://yanxuan.nosdn.127.net/e64906f44387ba5aa1fe0a46e0e868e3.jpg", "http://yanxuan.nosdn.127.net/5aaf91ae7b9a724adbd328212717f133.jpg", "http://yanxuan.nosdn.127.net/9bac8b99202edba9e578577c8b400c27.jpg", "http://yanxuan.nosdn.127.net/905476e8794cb20932c79fe979d4d6e4.jpg", "http://yanxuan.nosdn.127.net/a390619762e9aded0830c8ef7a9019cf.jpg", "http://yanxuan.nosdn.127.net/8e6feb711c65e1df4ea4b6e219e46e5b.jpg", "http://yanxuan.nosdn.127.net/384cf19dbc0d907658129066fbb677cc.jpg", "http://yanxuan.nosdn.127.net/559f367e0268c32cd9b1981fca44a194.jpg", "http://yanxuan.nosdn.127.net/b756d95d2d65bb3f88d6d0da32000c9e.jpg", "http://yanxuan.nosdn.127.net/b3b9047a5c3c574137b560899d1ee719.jpg", "http://yanxuan.nosdn.127.net/19a3db18a8023be0926479cda7bccccf.jpg", "http://yanxuan.nosdn.127.net/75e1ddf4c49513673cff06fb12f2fe71.jpg", "http://yanxuan.nosdn.127.net/14115b6c7119e2f1941080b3c1d21aad.jpg", "http://yanxuan.nosdn.127.net/57fdadf97765f41fd7137ba8f1b9d67d.jpg", "http://yanxuan.nosdn.127.net/f240883b30ce338fcbeddcd428301ecc.jpg", "http://yanxuan.nosdn.127.net/722689c017134b67bffe74ca5449cc13.jpg", "http://yanxuan.nosdn.127.net/4cbafb1ac8a140f33d1e1f6d187e0f14.jpg", "http://yanxuan.nosdn.127.net/8ee61f4cbdcf2da8e794367d22951299.jpg", "http://yanxuan.nosdn.127.net/cebd5973ee2c12a2db2e1480b6bb247e.jpg", "http://yanxuan.nosdn.127.net/ab3fa0823a7397d78d4ed76130d6e07a.jpg", "http://yanxuan.nosdn.127.net/2a9e54a13c48800a2540eecfea8b46e2.jpg", "http://yanxuan.nosdn.127.net/bf08302aa55a026f7276c9ce7d7caf70.jpg", "http://yanxuan.nosdn.127.net/5074c7dd82423817b5efd1440dfe0f3b.jpg", "http://yanxuan.nosdn.127.net/16ada32c3b2ba7bd3781b6cbb5fc4a71.jpg", "http://yanxuan.nosdn.127.net/52a58f1c5fc81211f04bc23055421d3f.jpg", "http://yanxuan.nosdn.127.net/c73e3beb3afaf28e6293e9dd4f88f1ba.jpg"],
		"inventory": [831, 965, 624, 449, 995, 421],
		"information": [{
			"attrName": "材料",
			"attrValue": "美耐皿树脂、201不锈钢（奥氏体型）"
		}],
		"label": "",
		"manufacture": "",
		"sale": 47,
		"date": "1500012788524",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1108029,
		"price": 89,
		"topName": "宠物多功能喂水喂食器",
		"subName": "喂水喂食一体机",
		"shortDescription": ["硅胶材质", "健康无害", "加银离子", "抗菌除臭", "一体设计", "省心干净"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/c24bd20bdf2f70e0c95552786d7c593c.jpg", "http://yanxuan.nosdn.127.net/6b6466ac58d64a7c2cd4fe8438204585.jpg", "http://yanxuan.nosdn.127.net/5a4ad755363790d807a135a2f948205b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/fe52cd141b4b330db5627114b0e0e550.png", "http://yanxuan.nosdn.127.net/0c8df971748c9e84759dbacaf8b6d1b9.jpg", "http://yanxuan.nosdn.127.net/870481d2629256214d404cb42af00cbc.jpg", "http://yanxuan.nosdn.127.net/43f94a4f78c77078194f882534c73dd1.jpg", "http://yanxuan.nosdn.127.net/b8f00bf92940a0f65d251df91afb586b.jpg"],
		"types": ["BB粉", "BB蓝"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/3bf8e67e0463e2571d37012a325db488.jpg", "http://yanxuan.nosdn.127.net/a4e77fa5bca0ae2f7a8958c9e140df1e.jpg", "http://yanxuan.nosdn.127.net/36191cbd08985b5243cd772f3e9aaac5.jpg", "http://yanxuan.nosdn.127.net/29e2ae41fdc593c30ec5ec0aa626cb2b.jpg", "http://yanxuan.nosdn.127.net/43dca05a07c303b53fab3abc8c24859b.jpg", "http://yanxuan.nosdn.127.net/62a3bfcdcfe31d37b94c19b54f3f6a9b.jpg", "http://yanxuan.nosdn.127.net/7533bfcc453038ce04c41528fe21b8da.jpg", "http://yanxuan.nosdn.127.net/bda204fa9f136c9cb96648b010f6a10c.jpg", "http://yanxuan.nosdn.127.net/5388fcb07fdb920e3395107edc539a40.jpg", "http://yanxuan.nosdn.127.net/22c61bb098f35b258c56cb125c151188.jpg", "http://yanxuan.nosdn.127.net/0009cc0c641be4894ca7ad2eb783fd4f.jpg", "http://yanxuan.nosdn.127.net/7db29c859575edeb95c9441765ace2fd.jpg", "http://yanxuan.nosdn.127.net/fb3b43977f90bd58c8d43ec9bc21dd39.jpg", "http://yanxuan.nosdn.127.net/f52aa926637aa95ab37d68a56f858b76.jpg", "http://yanxuan.nosdn.127.net/96197f28360be46a045dd84f7c9c3d92.jpg", "http://yanxuan.nosdn.127.net/d782399abb5589ad73cf07e334500fe8.jpg", "http://yanxuan.nosdn.127.net/84ca5f52f317691f9916c11f9376b730.jpg", "http://yanxuan.nosdn.127.net/de7ae0e78a5ce6912a7ef425fadf0eca.jpg", "http://yanxuan.nosdn.127.net/145e3897ee245669d592ee2565679d6a.jpg", "http://yanxuan.nosdn.127.net/03ed7555a00651cf887bbae7642166bf.jpg", "http://yanxuan.nosdn.127.net/ffc5597f1d9c3c1fa4c69d35a214b035.jpg", "http://yanxuan.nosdn.127.net/256469fef7985abc5996136246ca8b00.jpg", "http://yanxuan.nosdn.127.net/2020ded743ca398a6842c33cb40e2877.jpg", "http://yanxuan.nosdn.127.net/39d806810ce52681e6ba7d2fbbf251c6.jpg", "http://yanxuan.nosdn.127.net/3a68e8f40bb91921ae319ec2f0f5f6c8.jpg", "http://yanxuan.nosdn.127.net/b874965467b55c34b0f28bad35b03bf9.jpg", "http://yanxuan.nosdn.127.net/29bd66954c53e023364968cc908f87fe.jpg", "http://yanxuan.nosdn.127.net/69eaa19be01f0f5b9435ddda59015b33.jpg", "http://yanxuan.nosdn.127.net/4ba111a384ac2eb2cb481d767f6645c3.jpg", "http://yanxuan.nosdn.127.net/cff9b886b5633c4f65218bd582999a7e.jpg", "http://yanxuan.nosdn.127.net/ccbae3f496c5330fdd213477289938e8.jpg", "http://yanxuan.nosdn.127.net/9c5e34fdc3c8fe76f12691b347e29664.jpg", "http://yanxuan.nosdn.127.net/8e0483aaf7c4af0175640ecf76298c14.jpg", "http://yanxuan.nosdn.127.net/c1db819b96049f466652fdc6000c20d8.jpg", "http://yanxuan.nosdn.127.net/edd00950d840dc7200a3fe93387ace4d.jpg", "http://yanxuan.nosdn.127.net/8f9bf5f71b81d65f3f436ecf99736a61.jpg", "http://yanxuan.nosdn.127.net/353d3c382ba4d106b179efacaa5b3556.jpg", "http://yanxuan.nosdn.127.net/b6ff4ab6bbfcee7c86d3bedc55c0b46e.jpg", "http://yanxuan.nosdn.127.net/a734c8741a07eded056745572d420366.jpg", "http://yanxuan.nosdn.127.net/a581fb66bf5b225518d68895370d0d30.jpg", "http://yanxuan.nosdn.127.net/89462fa746af04888e42977446b109f6.jpg", "http://yanxuan.nosdn.127.net/aa0565c8fe8106078005ef3eec6043a2.jpg", "http://yanxuan.nosdn.127.net/4377fc275d75cbd22fd51349adf5683c.jpg", "http://yanxuan.nosdn.127.net/3f8ad9a23c7712936bf683ad1b426a61.jpg", "http://yanxuan.nosdn.127.net/d5a7331657407c0bcd2b441f367a0b5e.jpg", "http://yanxuan.nosdn.127.net/723be903fc95458184906b016023f472.jpg", "http://yanxuan.nosdn.127.net/aca7894a56492d14a66cf4489cb0101e.jpg", "http://yanxuan.nosdn.127.net/64444603ae2928179b5cfd8ae92751fa.jpg", "http://yanxuan.nosdn.127.net/7d7b5fe28ee279bf0255add5693ad479.jpg", "http://yanxuan.nosdn.127.net/a04ac95008f4ba1ca6398c724df714db.jpg", "http://yanxuan.nosdn.127.net/c4456c996bb369b15d1d9f47eea0ac1d.jpg", "http://yanxuan.nosdn.127.net/7f857dd5a5e64a02c8ae2749cd1b4d28.jpg", "http://yanxuan.nosdn.127.net/91c11fb52abf61d69c19b7b1671e333b.jpg"],
		"inventory": [932, 623],
		"information": [{
			"attrName": "材料",
			"attrValue": "美耐皿树脂硅胶201不锈钢（奥氏体型）"
		}],
		"label": "",
		"manufacture": "",
		"sale": 569,
		"date": "1500012791566",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1071006,
		"price": 9.9,
		"topName": "清新宠物水食钵食盆",
		"subName": "含银离子的洁净除菌食盆",
		"shortDescription": ["进口树脂", "无毒安全", "加银离子", "抗菌除臭", "圆润打磨", "不刮伤嘴"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/3bab1df153be500b2055c55464eb57b1.jpg", "http://yanxuan.nosdn.127.net/49b680110bf336bcc2aad278b4ada855.jpg", "http://yanxuan.nosdn.127.net/ab13423f562c8a5e7bb0c3bdc1bd5ec7.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d206e0d15955b4d76431a752f2c94f9f.png", "http://yanxuan.nosdn.127.net/1abb129cd7cab1f6469adf6bcde59a3d.jpg", "http://yanxuan.nosdn.127.net/1b5b295e3dfc745c0759e0ebbf683bdf.jpg", "http://yanxuan.nosdn.127.net/07b8e6b55ebcbb5554c99f8d4a43d9aa.jpg", "http://yanxuan.nosdn.127.net/07fb9bad42bc23e248039fdd61abfb31.jpg"],
		"types": ["天蓝", "樱花粉", "橘米"],
		"chara": "3色可选",
		"description": ["http://yanxuan.nosdn.127.net/f6211683724401e87e2458378137f31b.jpg"],
		"inventory": [722, 37, 371],
		"information": [{
			"attrName": "材料",
			"attrValue": "聚丙烯树脂"
		}],
		"label": "",
		"manufacture": "",
		"sale": 608,
		"date": "1500012794812",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1071005,
		"price": 39,
		"topName": "便携多功能宠物拾便器",
		"subName": "方便携带，环保卫生",
		"shortDescription": ["PP树脂", "耐用省心", "加银离子", "抗菌除臭", "可置物仓", "轻便收纳"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/85c2d917e93ed2cda0f0f75dc6a07173.jpg", "http://yanxuan.nosdn.127.net/18b89c4695a9a6c733c8a97ada0f17f5.jpg", "http://yanxuan.nosdn.127.net/fbe26d32b37845d35978a144d4946265.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/07a47d73e2eb53b1a7939219a4e63618.png", "http://yanxuan.nosdn.127.net/821f3e9e08116060fef28f24f787d05c.jpg", "http://yanxuan.nosdn.127.net/508d8f7768e53fd2e8666a10882ae09a.jpg", "http://yanxuan.nosdn.127.net/1df6745760f5c35089e542835e6e0c9f.jpg", "http://yanxuan.nosdn.127.net/100d0c180c2569cb2e4b221620a9d7ca.jpg"],
		"types": ["蓝色", "粉色"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/0439a458150f17b3c54e1898b4ddf71f.jpg", "http://yanxuan.nosdn.127.net/759a3d2dc0fea138932feb0b03def7ab.jpg", "http://yanxuan.nosdn.127.net/4fbc1e3aaaec589986fe8c460006b408.jpg", "http://yanxuan.nosdn.127.net/29ff62dcfcc7df4e69bdbfb6830d3729.jpg", "http://yanxuan.nosdn.127.net/8413e338d3d16087645d817aac894bc3.jpg", "http://yanxuan.nosdn.127.net/8746c36ec37fe13c0124c13162a903cd.jpg", "http://yanxuan.nosdn.127.net/5ba42ac14b311acbcc1b1ab3f9c0c239.jpg", "http://yanxuan.nosdn.127.net/381576780a6acb18d4b9720caff81d51.jpg", "http://yanxuan.nosdn.127.net/ec97befffd24b79f095b698d5da500bc.jpg", "http://yanxuan.nosdn.127.net/1a95dcc67a1ddd5c653aa38d085ca289.jpg", "http://yanxuan.nosdn.127.net/148b5c0861ce138fed9ce344be4f3735.jpg", "http://yanxuan.nosdn.127.net/853b3e416ac990886f252b492a18d765.jpg", "http://yanxuan.nosdn.127.net/bc62219c8eded9aa632bf130fd816844.jpg", "http://yanxuan.nosdn.127.net/ad28c490b2c43b7ca1d9da3fc3631465.jpg", "http://yanxuan.nosdn.127.net/d371fd88d9312493cfd3be36a322d92b.jpg", "http://yanxuan.nosdn.127.net/f40e9c97a58c8c93335e5374b6e6d70c.jpg", "http://yanxuan.nosdn.127.net/74092ef98970e14ad640949e923a40e3.jpg", "http://yanxuan.nosdn.127.net/ea98fada7b079deb466e5a787d241dae.jpg", "http://yanxuan.nosdn.127.net/f69dd49e4d45cc27ccc9e5a6e765fbfd.jpg", "http://yanxuan.nosdn.127.net/77137b44be1a680cae7b1c25e37e386d.jpg", "http://yanxuan.nosdn.127.net/ce607d0b53a481683a78520c8ab6ccae.jpg", "http://yanxuan.nosdn.127.net/011c0ff03dc6d9c4abbfb717d1757bf4.jpg", "http://yanxuan.nosdn.127.net/2290de54b4dfca00cb57fc879b5bbbab.jpg", "http://yanxuan.nosdn.127.net/c08cc448c81b6256db91211579dfb738.jpg", "http://yanxuan.nosdn.127.net/9ede1bd346840f490cadbb4e2091e236.jpg", "http://yanxuan.nosdn.127.net/0243642fd350cb2b7873817f052c37e6.jpg", "http://yanxuan.nosdn.127.net/7a4acab695c5596de04e3642ac2bd711.jpg", "http://yanxuan.nosdn.127.net/fd5e8c7e865dcf50b662c6f2224deb05.jpg", "http://yanxuan.nosdn.127.net/b132996c99b3a02443692ececf52f5fd.jpg", "http://yanxuan.nosdn.127.net/175b24fab11d1f543e10ccc2f2ac4eb6.jpg", "http://yanxuan.nosdn.127.net/e0a51eb838b01dac5bec6057e1e59428.jpg", "http://yanxuan.nosdn.127.net/cda60b57d1f0e78cd3921bc4e3d8ccf2.jpg", "http://yanxuan.nosdn.127.net/1437057917d6deb2e453e711bcbf40ee.jpg", "http://yanxuan.nosdn.127.net/121b6dc31268b1a82c632fcb634f9a64.jpg", "http://yanxuan.nosdn.127.net/0923c11aec66cec291f8a142b8391e01.jpg", "http://yanxuan.nosdn.127.net/736a20d6584ffaacc39bd62c700b68ea.jpg", "http://yanxuan.nosdn.127.net/7643379507709dba5947571eb18fc7b1.jpg", "http://yanxuan.nosdn.127.net/0217adfd4f3a62963f18f841fa945e5f.jpg", "http://yanxuan.nosdn.127.net/c4055e755e250b2c84a0548e031de7f4.jpg", "http://yanxuan.nosdn.127.net/9f3c65c42ffac403bf55ff33454849f7.jpg", "http://yanxuan.nosdn.127.net/349b23e34055e38d2311b82cc42b9402.jpg", "http://yanxuan.nosdn.127.net/2f9a830bb03074182f19931ec6aaf1c0.jpg", "http://yanxuan.nosdn.127.net/32bc1a4cb7aa944ac67856fcb6e5c73f.jpg", "http://yanxuan.nosdn.127.net/381b80fabf330062ab9ffcde4ea025be.jpg", "http://yanxuan.nosdn.127.net/1f987d33585b22286115fbb684edbbf7.jpg", "http://yanxuan.nosdn.127.net/89e8c521f234dfb1c0217e553826b4f9.jpg", "http://yanxuan.nosdn.127.net/de5822513f7a21e52a23e65709311072.jpg", "http://yanxuan.nosdn.127.net/4437746b0494178f77250f55937d7080.jpg", "http://yanxuan.nosdn.127.net/b46621bf43e028b86ae69fb68019318b.jpg", "http://yanxuan.nosdn.127.net/208bf739edd3b19c8fba3f2cb47792f5.jpg", "http://yanxuan.nosdn.127.net/e63ee61d221db9cbe9978da2394ee2b2.jpg", "http://yanxuan.nosdn.127.net/3719e6b0d3e8cd37b9c9e3f7c84fbc2c.jpg", "http://yanxuan.nosdn.127.net/1e5613aef6325482b310cb2bbe4a23e8.jpg"],
		"inventory": [762, 741],
		"information": [{
			"attrName": "材料",
			"attrValue": "聚丙烯树脂"
		}],
		"label": "",
		"manufacture": "",
		"sale": 627,
		"date": "1500012798309",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1092039,
		"price": 59,
		"topName": "圆钵碗状高密材质猫抓板",
		"subName": "可抓可睡，一物两用",
		"shortDescription": ["美卡纸板", "加厚抗抓", "进口猫粉", "天然吸引", "碗形设计", "一物两用"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/f7fc2a7fa852a723796b3220321ef028.jpg", "http://yanxuan.nosdn.127.net/ce6bb65c50ef143597d17c6a53937766.jpg", "http://yanxuan.nosdn.127.net/ac727b0dfa60218a40a3d22b0f9b76a9.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d8c18953bcb05f0b07d6b48e2d159ace.png", "http://yanxuan.nosdn.127.net/b50a9a25a4bce5e5ed533dfbb79a2291.jpg", "http://yanxuan.nosdn.127.net/cfb74ab8c094ef7d6ea81691ccbcd72b.jpg", "http://yanxuan.nosdn.127.net/d55ec11fb9f3fd8d7427de1e4e597cbe.jpg", "http://yanxuan.nosdn.127.net/9e1821d07934c717c3ff8a031e57ee48.jpg"],
		"types": ["380*125mm"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/7f5a8783df659ea49722ea12304a5f63.jpg"],
		"inventory": [379],
		"information": [{
			"attrName": "重量",
			"attrValue": "950g"
		}, {
			"attrName": "材质",
			"attrValue": "美卡瓦楞纸板"
		}, {
			"attrName": "颜色",
			"attrValue": "本色"
		}],
		"label": "",
		"manufacture": "",
		"sale": 958,
		"date": "1500012801284",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1086023,
		"price": 19.9,
		"topName": "彩色波点缓冲宠物牵引绳",
		"subName": "精致合金，萌趣波点",
		"shortDescription": ["抗拉材质", "增大强度", "合理长度", "轻松牵引", "彩色波点", "活泼外观"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/9131bb9e4764535ed46eed84995d92e5.jpg", "http://yanxuan.nosdn.127.net/ca9a9aa7ce4e9bf468dc5eb5775f7fcb.jpg", "http://yanxuan.nosdn.127.net/d48f704b318f98733e8648f5c46f20f3.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/121a99e896b3e332c102eb5f6f9b3406.png", "http://yanxuan.nosdn.127.net/5a16ce8c351ee6d0dc8f27bed1e29e15.jpg", "http://yanxuan.nosdn.127.net/eddb587eb4b502e4abb186eac0a819bb.jpg", "http://yanxuan.nosdn.127.net/28844a40fc7a7ad714c796769fa54df2.jpg", "http://yanxuan.nosdn.127.net/f6185198a77cd6c98758b4757f17c703.jpg"],
		"types": ["米色（颈圈）", "蓝色（颈圈）", "米色（拉带）", "蓝色（拉带）"],
		"chara": "4色可选",
		"description": ["http://yanxuan.nosdn.127.net/04e5d14f49ea8efd77f8f3904ec9a8e2.jpg"],
		"inventory": [653, 457, 945, 686],
		"information": [{
			"attrName": "搭扣",
			"attrValue": "锌合金"
		}, {
			"attrName": "拉带规格",
			"attrValue": "120cm"
		}, {
			"attrName": "颈圈规格",
			"attrValue": "30-45cm"
		}],
		"label": "",
		"manufacture": "",
		"sale": 661,
		"date": "1500012807542",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1130039,
		"price": 89,
		"topName": "房型封闭式凉感条纹宠物窝",
		"subName": "日式面料，四季可用",
		"shortDescription": ["凉感面料", "舒爽透气", "绒感面料", "保暖柔软", "房型设计", "安全空间"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/5f736e5b40794f492eef6a59cc133c70.jpg", "http://yanxuan.nosdn.127.net/673d42c8c41a2bbadde3ffcdb07f03d3.jpg", "http://yanxuan.nosdn.127.net/0fdabd040f70560970a58812de754a66.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/03c73e1f1ce1d2365e83b3230e507030.png", "http://yanxuan.nosdn.127.net/19b1375334f2e19130a3ba0e993d7e91.jpg", "http://yanxuan.nosdn.127.net/aba31dea912ac4fa9526ddf6a014876e.jpg", "http://yanxuan.nosdn.127.net/7046f8b5eb83dea640eea187c6a43b11.jpg", "http://yanxuan.nosdn.127.net/a3d635f82a5bae0c4fa29a49367f3451.jpg"],
		"types": ["400*400*300", "450*450*400"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/9e78f3a9155168aca8bd50083875e3fb.jpg", "http://yanxuan.nosdn.127.net/ba0636e29d01abce502b1dc84e62cc2c.jpg", "http://yanxuan.nosdn.127.net/b207a973b61041dbc7eec09619add068.jpg", "http://yanxuan.nosdn.127.net/a0289835ea572eeb1d1e0923c0768325.jpg", "http://yanxuan.nosdn.127.net/d23df0c7c6a11cdd1e8b195a8fd78cb2.jpg", "http://yanxuan.nosdn.127.net/7e5080e6609f904c38dc7f1c5f16e556.jpg", "http://yanxuan.nosdn.127.net/26f049272ec6d5a08731f8cf92ee4439.jpg", "http://yanxuan.nosdn.127.net/73113fd6a615ec6108ea1ac8d7165b86.jpg", "http://yanxuan.nosdn.127.net/08799889879dff07a6df41064c128543.jpg", "http://yanxuan.nosdn.127.net/4f6029c7ef6695236df00d54a548541e.jpg", "http://yanxuan.nosdn.127.net/d8fe0b49ed9ba43958a97a43d4e96e33.jpg", "http://yanxuan.nosdn.127.net/5ceb6588fcdbd9d0ba149c88b365daf9.jpg", "http://yanxuan.nosdn.127.net/ecf37fdcc8f1f081a2ab6d748a002a6e.jpg", "http://yanxuan.nosdn.127.net/e119cab2d0c007426e80be242b9ed4c6.jpg", "http://yanxuan.nosdn.127.net/db604928e27b9f209c03ba100e37c2d1.jpg", "http://yanxuan.nosdn.127.net/0efd77f08332366a10bc92b7b194be74.jpg", "http://yanxuan.nosdn.127.net/5e5eebc32aa33f515fc40fa2685bbaa4.jpg", "http://yanxuan.nosdn.127.net/cc89018a716a2367ade7343c071644df.jpg", "http://yanxuan.nosdn.127.net/a1c40fe00c8c53e69e0aa02e08d9db48.jpg", "http://yanxuan.nosdn.127.net/f267a9ae110e931ef7c83868fcc02abd.jpg", "http://yanxuan.nosdn.127.net/0b1a69656f1c242c3d6a6af7249fc972.jpg", "http://yanxuan.nosdn.127.net/625f5005592ad93a64a062f4d2323e80.jpg", "http://yanxuan.nosdn.127.net/501bb48e89f4a95e903fe89749365552.jpg", "http://yanxuan.nosdn.127.net/9344a4a2f76bfdcc20c54360ea0ae076.jpg", "http://yanxuan.nosdn.127.net/20ea55bb961bfc7fa2669f2a360b7ce4.jpg", "http://yanxuan.nosdn.127.net/261a655367fd6bacaa26fa994eb8e601.jpg", "http://yanxuan.nosdn.127.net/6cde6f384602074785aca9cdba6dc96f.jpg", "http://yanxuan.nosdn.127.net/5ab7a5509494ef19961b5512635c00f8.jpg", "http://yanxuan.nosdn.127.net/e89b028d8621a290dd27518a622cdcb1.jpg", "http://yanxuan.nosdn.127.net/7626d4c26971e9bc05c3764d31c72f50.jpg", "http://yanxuan.nosdn.127.net/aa2ccceeaf5bc88372c4a488f30628ee.jpg", "http://yanxuan.nosdn.127.net/df64cdd692b31f9cd45ed51e631756cc.jpg", "http://yanxuan.nosdn.127.net/986d4c6503a816d1069b741fe37c6b44.jpg", "http://yanxuan.nosdn.127.net/437a5c5321b9c57f6b57362fa3bb5c2c.jpg", "http://yanxuan.nosdn.127.net/0d4bf273f22be3ad72d3a7cd0d85709e.jpg", "http://yanxuan.nosdn.127.net/1a43abdb2190c8e7007b2c55787e6061.jpg", "http://yanxuan.nosdn.127.net/5875f7daf04a2d160f22eade58ff006a.jpg", "http://yanxuan.nosdn.127.net/bb459a1303a1c0f5a900120ca733d0fe.jpg", "http://yanxuan.nosdn.127.net/0f77cc12b45fc6f97cc24d00ce9cb17d.jpg", "http://yanxuan.nosdn.127.net/80cb02604580931bdda4b0e4fed8f465.jpg", "http://yanxuan.nosdn.127.net/29d649bbf5697d4dee49625b7f8e0dc5.jpg", "http://yanxuan.nosdn.127.net/17bca0a4a16b2df99e6023ba42c8eec3.jpg", "http://yanxuan.nosdn.127.net/d5462a2e182a09d1522345ee40aae209.jpg", "http://yanxuan.nosdn.127.net/450a30a20d6462d28532c157f778255a.jpg", "http://yanxuan.nosdn.127.net/f0a50c06a85234bf7d949c22fd09053a.jpg", "http://yanxuan.nosdn.127.net/688293753191e702ec11e3fc33b9dc0d.jpg", "http://yanxuan.nosdn.127.net/d9f2d0d7dd6a1a9bf793491cbc741acb.jpg", "http://yanxuan.nosdn.127.net/26537aa88cb8e43d534d030b30de5ad6.jpg", "http://yanxuan.nosdn.127.net/54de62b34d83ace8be510ecd31157357.jpg", "http://yanxuan.nosdn.127.net/35d659402d194a8c59727852ce5f6a4e.jpg", "http://yanxuan.nosdn.127.net/d930fe6cd4923d9fe3f51edcf06063b7.jpg", "http://yanxuan.nosdn.127.net/3976e0be1c5d86c0d339b7113f7371f3.jpg", "http://yanxuan.nosdn.127.net/d3ffe6103c85c9112ff24603815946a4.jpg", "http://yanxuan.nosdn.127.net/98000a17e79d3c17d32bf08b230b119e.jpg", "http://yanxuan.nosdn.127.net/d5cadb5673213bb150c2778d79453de6.jpg", "http://yanxuan.nosdn.127.net/def09d5b57c51ceb31119b08a27b1b4f.jpg", "http://yanxuan.nosdn.127.net/afc2668d01bfa50af7e920856b86de2a.jpg", "http://yanxuan.nosdn.127.net/b6bc670f8c45a70fa2e859c9ec0eaa60.jpg", "http://yanxuan.nosdn.127.net/3b09a02e2034fa04af09a96d9234b06f.jpg", "http://yanxuan.nosdn.127.net/63b9bd30f35cdd320b8810aa9639b193.jpg", "http://yanxuan.nosdn.127.net/856a8d97b6123cde7f573e18f8f019da.jpg", "http://yanxuan.nosdn.127.net/119cfec9ab94d9f4a5a8f2c368b2ba13.jpg"],
		"inventory": [154, 101],
		"information": [{
			"attrName": "面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "填充物重量",
			"attrValue": "170g/250g"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 62011.3-2008"
		}],
		"label": "",
		"manufacture": "",
		"sale": 284,
		"date": "1500012810798",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1071004,
		"price": 89,
		"topName": "日式圆形宠物盆猫砂盆",
		"subName": "日式配色，圆滑细腻",
		"shortDescription": ["进口树脂", "无毒安全", "加银离子", "抗菌除臭", "加厚材料", "耐用抗摔"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/0b5870a29f451fa916b0cdc1a22a5f53.jpg", "http://yanxuan.nosdn.127.net/970e3f7777800766d8951076d712c145.jpg", "http://yanxuan.nosdn.127.net/41d5e95121290d7d266f90d59d3e1150.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/f0abf2bf11c8d303212e4a0c1106bb73.png", "http://yanxuan.nosdn.127.net/38bc080faa7fc71f0659d8f01c2732cb.png", "http://yanxuan.nosdn.127.net/2fb5b6d817c8abe928499b38e85f9175.jpg", "http://yanxuan.nosdn.127.net/a7b14f413a7880aeab33d54273b75a61.png", "http://yanxuan.nosdn.127.net/86a75ab34cdc6dba5f86917dbfc5c573.jpg"],
		"types": ["黑+红", "黄+白"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/8fcac09d7577060c0a512ea6739c97ab.jpg", "http://yanxuan.nosdn.127.net/b69b19b139cd26bf6dab5d5a648937b7.jpg", "http://yanxuan.nosdn.127.net/272be92e722c0336aa8ea5dfea9c8160.jpg", "http://yanxuan.nosdn.127.net/b0585ea90000fff3a6cd8ef3d0f311e7.jpg", "http://yanxuan.nosdn.127.net/f0e6f8bff79c8fb501ad2e27e578e62d.jpg", "http://yanxuan.nosdn.127.net/2447c2a4d60144b25e9f103175531ac7.jpg", "http://yanxuan.nosdn.127.net/8557a4772478e932fcc516df28ff8b26.jpg", "http://yanxuan.nosdn.127.net/5bcebc60f77b9dc0ec98beef7685710e.jpg", "http://yanxuan.nosdn.127.net/a125c5c2835777fb86e806b4f91c95a7.jpg", "http://yanxuan.nosdn.127.net/71cd7a9c5ff13033878477c72bd8bcf4.jpg", "http://yanxuan.nosdn.127.net/9cd3a745cafb0ade80fef30282f33c39.jpg", "http://yanxuan.nosdn.127.net/3d604b2a4e400c5de3ae6d8fac2b0a89.jpg", "http://yanxuan.nosdn.127.net/c2a0a3a2c8e45bba29aa51b7b5f08308.jpg", "http://yanxuan.nosdn.127.net/1a65be28f7c1b9e4a1043cac8a415089.jpg", "http://yanxuan.nosdn.127.net/7bde1458f209cd046378455838c6c89c.jpg", "http://yanxuan.nosdn.127.net/c7a561a6b7461d45ffc6ed90e7f48c9a.jpg", "http://yanxuan.nosdn.127.net/d6c2b53acdb9e4a8bc95609bf97f4513.jpg", "http://yanxuan.nosdn.127.net/ececb765899660140651e29ab4526eca.jpg", "http://yanxuan.nosdn.127.net/83ad2165ee9891683052f26c928068b0.jpg", "http://yanxuan.nosdn.127.net/786bdedae9e0d2d7ab4de3697d3642b9.jpg", "http://yanxuan.nosdn.127.net/33eeab8794cadfb86498a366b56d8b57.jpg", "http://yanxuan.nosdn.127.net/8b4b835a0268eed92c845b851be3be71.jpg", "http://yanxuan.nosdn.127.net/dde1d2f1d7d8a19f162fcd7f0535a7dd.jpg", "http://yanxuan.nosdn.127.net/885792079ae57ba6de8507fab565c586.jpg", "http://yanxuan.nosdn.127.net/c9110f49c6a9f29f0b03855582af0d88.jpg", "http://yanxuan.nosdn.127.net/b7fee119279d42ba0fb697cf9e8f53d2.jpg", "http://yanxuan.nosdn.127.net/b44824d6ab6387b9cc37f9d6aecb9d43.jpg", "http://yanxuan.nosdn.127.net/34620b3bf872306803dfe9560acdcff4.jpg", "http://yanxuan.nosdn.127.net/c2c60c4177b50725cd3d2a11eb54714b.jpg", "http://yanxuan.nosdn.127.net/5f74507842ac9dd42103de38cc878a34.jpg", "http://yanxuan.nosdn.127.net/63c1f83a1a5d1ba546ac7d875dabfeed.jpg", "http://yanxuan.nosdn.127.net/acc33719f9810f8a69be93903a0b64f4.jpg", "http://yanxuan.nosdn.127.net/108405824c2b2590655f75638dd41c06.jpg", "http://yanxuan.nosdn.127.net/bd1a84cf1e70f02541dfd546bdb0d563.jpg", "http://yanxuan.nosdn.127.net/901ab7dcd0a1e5c4339dbadf93889233.jpg", "http://yanxuan.nosdn.127.net/fb98fc4e92fb69f27eb95a13c267e165.jpg", "http://yanxuan.nosdn.127.net/50e017498ac9caf6a0679dd26bbec392.jpg", "http://yanxuan.nosdn.127.net/79469391cecf19b30111fa4385e89d6e.jpg", "http://yanxuan.nosdn.127.net/ef40b078efaa06acd1487f07b7dfb213.jpg", "http://yanxuan.nosdn.127.net/0f42673dcf2d61d5c695ffb7705c53f7.jpg", "http://yanxuan.nosdn.127.net/0aecfd282d652b7451143ae42aa0f3bf.jpg", "http://yanxuan.nosdn.127.net/c80632b60bb7191671adb473e04111c5.jpg", "http://yanxuan.nosdn.127.net/2414ed9c34593c5a12f57d73099795b3.jpg", "http://yanxuan.nosdn.127.net/b1e849da7d5e442717c2ceb64e8de762.jpg", "http://yanxuan.nosdn.127.net/32ab9b54417e5f571aad635625a1fd97.jpg", "http://yanxuan.nosdn.127.net/f06afbd180cd2eb34e181df8bbba5098.jpg", "http://yanxuan.nosdn.127.net/0ffce5e44238942d4cfcb2300376cbda.jpg", "http://yanxuan.nosdn.127.net/6014bf19a6d49285681a1c05250709f1.jpg", "http://yanxuan.nosdn.127.net/b3a51faae51f1a03cc44f36b1850037c.jpg", "http://yanxuan.nosdn.127.net/846b1d0320958c8b5451f3b217e7e8f2.jpg", "http://yanxuan.nosdn.127.net/99789d189daa1e63f292ca9d8d950c03.jpg", "http://yanxuan.nosdn.127.net/29a06ebfaaded39141e85496b5e3af84.jpg", "http://yanxuan.nosdn.127.net/15c8def8966137bc5708a4591ec1eff8.jpg"],
		"inventory": [595, 36],
		"information": [{
			"attrName": "配色",
			"attrValue": "黑红/白姜黄"
		}, {
			"attrName": "材质",
			"attrValue": "聚丙烯树脂"
		}, {
			"attrName": "执行标准",
			"attrValue": "GB 9688-1988"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}],
		"label": "",
		"manufacture": "",
		"sale": 170,
		"date": "1500012814281",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1130038,
		"price": 89,
		"topName": "贝壳型凉感蓬松宠物窝垫",
		"subName": "日本面料，简约条纹",
		"shortDescription": ["凉感面料", "舒爽透气", "绒感面料", "保暖柔软", "厚实填充", "蓬松包裹"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/06b7c19c469e4b3b40e1a20b6b00c77b.jpg", "http://yanxuan.nosdn.127.net/85fb2f018f1d4d4779fb9a424a4ac593.jpg", "http://yanxuan.nosdn.127.net/a5bbec203cb6d84a939f6dec75f6cd7b.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/4d77296e02896675558f1a8a83742132.png", "http://yanxuan.nosdn.127.net/39de8ddff1b400d9a97f1e5f9e9dbfeb.jpg", "http://yanxuan.nosdn.127.net/3e26ee5ec4d49970a0325ca7cc2cea15.jpg", "http://yanxuan.nosdn.127.net/993bb3da9f03945eaef6e6199efc86c9.jpg", "http://yanxuan.nosdn.127.net/d39ad81f2e6babc693edaf08817bd308.jpg"],
		"types": ["550*450*200mm", "780*730*210mm"],
		"chara": "2色可选",
		"description": ["http://yanxuan.nosdn.127.net/059b907f29ca9b42cd8c557f816c0539.jpg", "http://yanxuan.nosdn.127.net/e0092c56f686465dced8fc5c9f20ee83.jpg", "http://yanxuan.nosdn.127.net/d05395d0eb72086e44e2ccea28ae3305.jpg", "http://yanxuan.nosdn.127.net/f0737f145ba8537e2dced67097b9234c.jpg", "http://yanxuan.nosdn.127.net/e93f720fc1b8bdbd679507b005656b45.jpg", "http://yanxuan.nosdn.127.net/bbaae179ee7b72855684d012b92f266e.jpg", "http://yanxuan.nosdn.127.net/1648181bbccae91f68a8f1635ac16b40.jpg", "http://yanxuan.nosdn.127.net/0d04be6040f898b5e6a863fe8db994f8.jpg", "http://yanxuan.nosdn.127.net/b76390a61211507bd3b4fd59d63ae1ed.jpg", "http://yanxuan.nosdn.127.net/be888684dfc9c98099ecee5ccb3e4be1.jpg", "http://yanxuan.nosdn.127.net/9d86c664b86dce12675c3a0aecedd1da.jpg", "http://yanxuan.nosdn.127.net/42433d23fb457d028fa8ab72e8f71be1.jpg", "http://yanxuan.nosdn.127.net/e9f0254cc65908c3b49321afb7b7b617.jpg", "http://yanxuan.nosdn.127.net/2b470af86ba597a2a697ce58be9bc165.jpg", "http://yanxuan.nosdn.127.net/ae088c2b44f5912778d9353e19beb8fd.jpg", "http://yanxuan.nosdn.127.net/2aef96cbb9f6a375181cd722dd1c5044.jpg", "http://yanxuan.nosdn.127.net/60a7dbc24f6a5b4b70b3233ed9b3171c.jpg", "http://yanxuan.nosdn.127.net/02dbe94a7628239525ab1dbcaf18877c.jpg", "http://yanxuan.nosdn.127.net/6304bee4e983307f5c90ff4a23298e6a.jpg", "http://yanxuan.nosdn.127.net/a35cd54903aacc270f74521547b47ad3.jpg", "http://yanxuan.nosdn.127.net/030185c358dc68422ac1fdffc95fa363.jpg", "http://yanxuan.nosdn.127.net/c0251965e2abe926fcb8f849c9da66e6.jpg", "http://yanxuan.nosdn.127.net/e838324e0683806d766a17f95e1597b5.jpg", "http://yanxuan.nosdn.127.net/3280da2140e8754014172c4d84849589.jpg", "http://yanxuan.nosdn.127.net/4c2e8acba8f910cd4607ff4ad83eed5f.jpg", "http://yanxuan.nosdn.127.net/4058c4d201820b2e1f5a83bab0419f79.jpg", "http://yanxuan.nosdn.127.net/190f509c493416b63449a5f868ca6f24.jpg", "http://yanxuan.nosdn.127.net/ad17ac9489371b6daae0db4d3a2a28d1.jpg", "http://yanxuan.nosdn.127.net/99210b4d7e0576eb6632377f5f364904.jpg", "http://yanxuan.nosdn.127.net/673acfda1a0571305fcdd34cb1a328c8.jpg", "http://yanxuan.nosdn.127.net/cf6350a48db47600211e98af09e24f48.jpg", "http://yanxuan.nosdn.127.net/3b1c73c1bce170fe5d0e87b65aa0ff19.jpg", "http://yanxuan.nosdn.127.net/e3229f6d11765cebc93c307bf5fa2daa.jpg", "http://yanxuan.nosdn.127.net/e0d0fec780fa383e0869b4ec39e1e0ad.jpg", "http://yanxuan.nosdn.127.net/29b1a8a4279153e716e1682689583e8d.jpg", "http://yanxuan.nosdn.127.net/1aac76948be2bb4050ad00d680b3893a.jpg", "http://yanxuan.nosdn.127.net/94e12b7be308b2bf478b53d500c36ca0.jpg", "http://yanxuan.nosdn.127.net/aa3b24b6534e6d7c66d097302fc297d2.jpg", "http://yanxuan.nosdn.127.net/d0afbc69808a444fbf31200c56b5f57c.jpg", "http://yanxuan.nosdn.127.net/c4252972e16de0672326c626fb502808.jpg", "http://yanxuan.nosdn.127.net/1d52a4ce09cc7cc50d9faecf43fd8aed.jpg", "http://yanxuan.nosdn.127.net/e91924b09bfa51da4d777605428e20c8.jpg", "http://yanxuan.nosdn.127.net/a183b31496b2a43b9ac77296a990935a.jpg", "http://yanxuan.nosdn.127.net/2571acfd742f3e2e73b75efabe77310d.jpg", "http://yanxuan.nosdn.127.net/b46e670603b9ac4834c3425bd5f0d719.jpg", "http://yanxuan.nosdn.127.net/c5124ab472981d8b8842aae9f1c77045.jpg", "http://yanxuan.nosdn.127.net/a2b92c2202e1a932d0d129657e5509fe.jpg", "http://yanxuan.nosdn.127.net/8e81ac96844da7508be00e72dc894455.jpg", "http://yanxuan.nosdn.127.net/69e721a78cc0b0d36bfc3640b25f0980.jpg", "http://yanxuan.nosdn.127.net/5202210bc7a7b7f1f41e514847a3b8e1.jpg", "http://yanxuan.nosdn.127.net/d0ba79cfd2fc8d8b9ea463e704f041b6.jpg", "http://yanxuan.nosdn.127.net/34eb3ed49340a618f459c2cf1b928c79.jpg", "http://yanxuan.nosdn.127.net/fec54099b2bc8600a0ec8dba37d96b68.jpg", "http://yanxuan.nosdn.127.net/1e74404f832a3405e6c9738f2e252660.jpg", "http://yanxuan.nosdn.127.net/0225da336873cd5bdf5e391023c1d004.jpg", "http://yanxuan.nosdn.127.net/9614645790eacd454524d776cd07573e.jpg", "http://yanxuan.nosdn.127.net/9eb9b9cb6c34ef641c376bcfeb371f94.jpg", "http://yanxuan.nosdn.127.net/0973af60cce00b176d7afe2e8890952e.jpg"],
		"inventory": [824, 759],
		"information": [{
			"attrName": "填充物重量",
			"attrValue": "340g/725g"
		}, {
			"attrName": "面料",
			"attrValue": "100%聚酯纤维"
		}, {
			"attrName": "执行标准",
			"attrValue": "FZ/T 62011.3-2008"
		}, {
			"attrName": "安全类别",
			"attrValue": "GB 18401-2010 B类"
		}, {
			"attrName": "产品等级",
			"attrValue": "合格品"
		}],
		"label": "",
		"manufacture": "",
		"sale": 322,
		"date": "1500012817392",
		"category": "居家",
		"subCategory": "宠物"
	})
	var goodsEntity = new goodsModel({
		"id": 1110018,
		"price": 79,
		"topName": "3件装 耐用狗狗清洁美容护理套装",
		"subName": "精致钢材，耐咬美容",
		"shortDescription": ["指甲钳", "修剪防抓", "气垫梳", "美容按摩", "去毛梳", "去除死毛"],
		"shortDescriptionimage": ["http://yanxuan.nosdn.127.net/d73c8de6b506a571d7a36a7eca8ed35e.jpg", "http://yanxuan.nosdn.127.net/47b4573302ef4255dd850fa66e834100.jpg", "http://yanxuan.nosdn.127.net/5df64e15dfea0c463a84f1cdc9c52c7f.jpg"],
		"headImage": ["http://yanxuan.nosdn.127.net/d93aa5d6e7a296101cf4cb72613aeda6.png", "http://yanxuan.nosdn.127.net/ac5f93bd705e97e96d18c44729adf111.jpg", "http://yanxuan.nosdn.127.net/863069f626e8093858bd944961672116.jpg", "http://yanxuan.nosdn.127.net/3f54aad95403f6763d2971cf64ee0f02.jpg", "http://yanxuan.nosdn.127.net/95fd3351c1be18c3b9ed445ef0a38434.jpg"],
		"types": ["大剪刀*1+大号钢针梳*1+双排针梳*1"],
		"chara": "1色可选",
		"description": ["http://yanxuan.nosdn.127.net/3854994be7c4da17e5a2f316b8e0a115.jpg", "http://yanxuan.nosdn.127.net/875e35f196d220324fa1d1448c635852.jpg", "http://yanxuan.nosdn.127.net/60ed2b973f7be99c217d2a7cebbd4296.jpg", "http://yanxuan.nosdn.127.net/ff5e0e33fd75703190ae409c6d21e366.jpg", "http://yanxuan.nosdn.127.net/be57569f669c85a9b0187a66e1572178.jpg", "http://yanxuan.nosdn.127.net/191dc75b06fa04bef578f0e848d17d07.jpg", "http://yanxuan.nosdn.127.net/bbf0148a77e3441b68939abb092496e9.jpg", "http://yanxuan.nosdn.127.net/ac2fa1219b362841a6d1dc241a51d2c9.jpg", "http://yanxuan.nosdn.127.net/c27a79ce5a90f227ff4e50f3fb619e1b.jpg", "http://yanxuan.nosdn.127.net/9ce899dc8db6d3353d9c34b50a24a111.jpg", "http://yanxuan.nosdn.127.net/f2c7d9ad1e857941277f82f9874c2081.jpg", "http://yanxuan.nosdn.127.net/28edef9e1654a433a400ca200d7c7c55.jpg", "http://yanxuan.nosdn.127.net/2ba3171699b0d6c2f695e6cdcf8e598e.jpg", "http://yanxuan.nosdn.127.net/d0d29d0225d53e8922260018b0c86642.jpg", "http://yanxuan.nosdn.127.net/70a629edf4e3d395ba12c96a1e6d7180.jpg", "http://yanxuan.nosdn.127.net/f6c160891c4df84eda72a641f86cadd6.jpg", "http://yanxuan.nosdn.127.net/e96a60883b2bd0145f8af51168c547a8.jpg", "http://yanxuan.nosdn.127.net/a45dd7da46705aee759e95d0d8587f06.jpg", "http://yanxuan.nosdn.127.net/b7f20607c2e7a2780e2b37cae44b52af.jpg", "http://yanxuan.nosdn.127.net/8efd5ead32d88db8fcd944dd1f72f9d6.jpg", "http://yanxuan.nosdn.127.net/1032f7228911b42dbfae13d3a7093b9e.jpg", "http://yanxuan.nosdn.127.net/b96b094cedf2ddceb42c273477cc3717.jpg", "http://yanxuan.nosdn.127.net/3c7bc21e4bc28e894d58cbd7c66706eb.jpg", "http://yanxuan.nosdn.127.net/491b83a15dda113d32f03807ca005684.jpg", "http://yanxuan.nosdn.127.net/625930a2fa643787da5d7f2f8b7403a2.jpg", "http://yanxuan.nosdn.127.net/dd061b996d5bfa2b0ff4cb0252fc193a.jpg", "http://yanxuan.nosdn.127.net/433c5a8317a3806cc81e14c3f8cb84a9.jpg", "http://yanxuan.nosdn.127.net/2bace2645a1676f402168453afe0abc6.jpg", "http://yanxuan.nosdn.127.net/f71c354f48548663f30b982b56dffd2f.jpg", "http://yanxuan.nosdn.127.net/47d6aeeefdeb2c16fc0fb5e3dfadf5d3.jpg", "http://yanxuan.nosdn.127.net/9950b6e3db69079542793ff1a5767e7b.jpg", "http://yanxuan.nosdn.127.net/30b8844248a0063ac6242f0c71be15ff.jpg", "http://yanxuan.nosdn.127.net/66c73c753f1071a23b0d9a1b2557726a.jpg", "http://yanxuan.nosdn.127.net/448f60c3e39778df00dc650374005029.jpg", "http://yanxuan.nosdn.127.net/d02115e001d27a057cfe22c7d5aebf2e.jpg", "http://yanxuan.nosdn.127.net/38af331901526fa722a8287481fb926c.jpg", "http://yanxuan.nosdn.127.net/ab8fdd7ef8d01c0130b53095d6497a94.jpg", "http://yanxuan.nosdn.127.net/3ecabbfba3838ec15af9f0599943f47a.jpg", "http://yanxuan.nosdn.127.net/d502d68633f2c4ea2b4c5d0ab80c5a5c.jpg", "http://yanxuan.nosdn.127.net/4a45df861c4167e26960694ddc076401.jpg", "http://yanxuan.nosdn.127.net/0d1aabd78848eea2965f9668e5335d5f.jpg", "http://yanxuan.nosdn.127.net/dbb869169b8b23830e324f96779424c1.jpg", "http://yanxuan.nosdn.127.net/fd9ce065fe1563d5520de468a1179b65.jpg", "http://yanxuan.nosdn.127.net/7b89dfd9f8acd2b5cd2782d1a648c5e6.jpg", "http://yanxuan.nosdn.127.net/70876851a29e0e910842ac894f96eba8.jpg", "http://yanxuan.nosdn.127.net/ace99aa398960caeb7ca6c5b766be6e4.jpg", "http://yanxuan.nosdn.127.net/a7f4307003805e93698588edee29c130.jpg", "http://yanxuan.nosdn.127.net/fecdb7d78e8301c026397575a661d02e.jpg", "http://yanxuan.nosdn.127.net/6f3a1391596df218f87ee68336bb3074.jpg"],
		"inventory": [31],
		"information": [{
			"attrName": "材料",
			"attrValue": "合金钢、不锈钢针、塑胶（PP TPR）"
		}, {
			"attrName": "颜色",
			"attrValue": "白黑"
		}, {
			"attrName": "执行标准",
			"attrValue": "Q/PM001-2016Q/PM003-2016"
		}, {
			"attrName": "安全类别",
			"attrValue": "符合RoHs六项检测"
		}],
		"label": "",
		"manufacture": "",
		"sale": 790,
		"date": "1500012820530",
		"category": "居家",
		"subCategory": "宠物"
	})

}