const ProductsData = {
    // Main product data
    mainProduct: {
        id: 'macbook-air-m1',
        title: 'Apple Macbook air M1, 8/512 SSD gb, Space Gray',
        price: 12850000,
        priceFormatted: '12 850 000 сум',
        image: '/api/placeholder/400/320',
        isFavorite: true,
        inStock: false,
        code: '32453',
        description: 'Оптический привод С новой силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук полностью преобразился. Центральный процессор теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря нашей передовой системе Neural Engine скорость машинного обучения возросла до 9 раз. Новый Mac. Book Air работает без подзарядки дольше, чем предыдущие модели.',
        specifications: [
            {label: 'Код товара', value: 'MGN93RU/A'},
            {label: 'Производитель', value: 'Apple'},
            {label: 'Разрешение экрана', value: '2560x1600'},
            {label: 'Количество ядер процессора', value: '8'},
            {label: 'Оптический привод', value: 'Отсутствует'},
            {label: 'Объем оперативной памяти', value: '8 ГБ'},
            {label: 'Объем накопителя', value: '256 ГБ'}
        ]
    },
    heroBanners: [
        {
            id: 'banner-1',
            image: 'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/27/f9/27f9c07712196d54b3813d23862a53df/241101150049292861.webp',
            alt: 'Special offer on electronics',
            link: '#'
        },
        {
            id: 'banner-2',
            image: 'https://images.uzum.uz/cus76pjvgbkm5ehg56m0/original.jpg',
            alt: 'New arrivals',
            link: '#'
        },
        {
            id: 'banner-3',
            image: 'https://brostore.uz/cdn/shop/files/4_ca56b8ba-7788-4fd4-8a93-d545c43d0dc4_610x_crop_center.png?v=1730728707',
            alt: 'Sale up to 50% off',
            link: '#'
        }
    ],

    similarProducts: [
        {
            id: 'knife-sharpener-1',
            title: 'Knife Sharpener Tool Professional',
            price: 3000000,
            priceFormatted: '3 000 000 сум',
            image: 'https://images.uzum.uz/cus76pjvgbkm5ehg56m0/original.jpg',
            isFavorite: false,
            availability: 'in',
            seller: {
                name: 'Media Park',
                location: 'г. Ташкент'
            }
        },
        {
            id: 'knife-sharpener-2',
            title: 'Knife Sharpener Tool Professional',
            price: 3000000,
            priceFormatted: '3 000 000 сум',
            image: 'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/27/f9/27f9c07712196d54b3813d23862a53df/241101150049292861.webp',
            isFavorite: false,
            availability: 'in',
            seller: {
                name: 'Media Park',
                location: 'г. Ташкент'
            }
        },
        {
            id: 'knife-sharpener-3',
            title: 'Knife Sharpener Tool Professional',
            price: 3000000,
            priceFormatted: '3 000 000 сум',
            image: 'https://brostore.uz/cdn/shop/files/4_ca56b8ba-7788-4fd4-8a93-d545c43d0dc4_610x_crop_center.png?v=1730728707',
            isFavorite: true,
            availability: 'in',
            seller: {
                name: 'Brostore',
                location: 'г. Ташкент'
            }
        },
        {
            id: 'knife-sharpener-4',
            title: 'Knife Sharpener Tool Professional',
            price: 3000000,
            priceFormatted: '3 000 000 сум',
            image: 'https://files.glotr.uz/company/000/001/689/products/2022/06/29/2022-06-29-17-49-48-063253-0917d0063029ef0eec7fc9f34b8bf87d.webp?_=ozb9y',
            isFavorite: false,
            availability: 'order',
            discount: '15%',
            seller: {
                name: 'Media Park',
                location: 'г. Ташкент'
            }
        },
        {
            id: 'knife-sharpener-5',
            title: 'Smartfon HONOR X5 Plus 6/256 Midnight Black,Ocean Blue',
            price: 3000000,
            priceFormatted: '3 000 000 сум',
            image: 'https://files.glotr.uz/company/000/001/689/products/2024/12/07/2024-12-07-11-55-32-071833-1f27285560b6a7baf533cd7876b112b3.webp?_=ozb9y',
            isFavorite: true,
            availability: 'in',
            discount: '15%',
            seller: {
                name: 'My Tech',
                location: 'г. Ташкент'
            }
        },
        {
            id: 'knife-sharpener-6',
            title: 'Planshet Samsung TAB S8 10.5" 8/128GB Wi-Fi',
            price: 8844000,
            priceFormatted: '3 000 000 сум',
            image: 'https://files.glotr.uz/company/000/001/689/products/2023/10/27/2023-10-27-16-13-17-078449-908839b9a39e9dcd2afc7e3581d5689e.webp?_=ozb9y',
            isFavorite: false,
            availability: 'out',
            seller: {
                name: 'Media Park',
                location: 'г. Ташкент'
            }
        }
    ],

    // Payment methods data
    paymentMethods: [
        'Наличными',
        'Перечислением',
        'Терминал UzCard',
        'Терминал HUMO',
        'POS терминал',
        'Payme'
    ],

    // Delivery methods data
    deliveryMethods: ["Доставка курьером", "Доставка почтой"],

    // Search tags data
    searchTags: [
        'Камера',
        'Куртки женские',
        'Автозапчасти',
        'Радиаторы и обогреватели',
        'Спортивные костюмы'
    ],

    // Seller data
    seller: {
        name: 'Amazon',
        logo: '../assets/images/amazon-logo.svg',
        location: 'г. Ташкент, Узбекистан',
        workingHours: 'Сегодня работает до 18:00',
        partialPhone: '+998 99 ...',
        fullPhone: '+998 99 123 45 67',
        websiteDisplay: 'amazon.com',
        website: 'https://amazon.com'
    },

    // Confirmation data
    confirmationData: {
        seller: {
            name: 'E-bidet Uzbekistan', address: 'Ташкент, Шайхантахурский район', logo: '../assets/images/e-bidet-logo.svg'
        },
        orderNumber: '3957',
        message: 'Ваш заказ успешно принят и передан на обработку продавцу.',
        details: [{label: 'Компания', value: 'E-bidet Uzbekistan', icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M10 5.67682C9.3175 4.27926 8.00594 3.33334 6.49937 3.33334C4.29062 3.33334 2.5 5.36791 2.5 7.87863C2.5 11.7305 8.24875 15.5823 10 16.6667C11.7512 15.5834 17.5 11.7305 17.5 7.87863C17.5 5.36897 15.7094 3.33334 13.4997 3.33334C11.9941 3.33334 10.6825 4.27926 10 5.67682Z" stroke="#344054" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>', isLink: false}, {
            label: 'Адрес', value: 'г.Ташкент, ул. Саларская 35 В две строки', icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9.99832 17.7767C9.99832 17.7767 3.52832 13.8892 3.52832 8.70335C3.52832 5.12335 6.42999 2.22168 10.01 2.22168C13.59 2.22168 16.4917 5.12335 16.4917 8.70335C16.4917 13.8892 9.99832 17.7767 9.99832 17.7767Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '<path d="M10.01 11.2967C11.4418 11.2967 12.6025 10.136 12.6025 8.70418C12.6025 7.27238 11.4418 6.11168 10.01 6.11168C8.57819 6.11168 7.41749 7.27238 7.41749 8.70418C7.41749 10.136 8.57819 11.2967 10.01 11.2967Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>', isLink: false
        }, {label: 'График работы', value: 'Посмотреть', icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9.99996 6.78V9.99917L12.2225 11.0325M16.665 9.99917C16.665 13.6801 13.6809 16.6642 9.99996 16.6642C6.31898 16.6642 3.33496 13.6801 3.33496 9.99917C3.33496 6.31819 6.31898 3.33417 9.99996 3.33417C13.6809 3.33417 16.665 6.31819 16.665 9.99917Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>', isLink: true}, {
            label: 'Номер телефона', value: '+998 90 900 90 90', icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M11.7788 3.03226C14.6328 3.03226 16.946 5.34571 16.946 8.20002M11.7788 5.68778C13.1657 5.68778 14.2908 6.81225 14.2908 8.20002M8.19271 11.764C8.86777 12.4113 9.6591 12.938 10.5337 13.3115L10.923 13.4773L12.1193 12.2621C12.4163 11.9605 12.8461 11.83 13.2609 11.917L16.1592 12.5239C16.6497 12.6281 17 13.061 17 13.5621V15.649C17 16.3954 16.3954 17 15.6491 17H15.0078C12.0571 17 9.1453 16.0226 6.9431 14.0587C6.76159 13.8974 6.58532 13.7301 6.41355 13.5591L6.44131 13.5868C6.26954 13.415 6.10303 13.2388 5.94176 13.0572C3.97734 10.8555 3 7.94347 3 4.99239V4.35102C3 3.60462 3.60455 3 4.35087 3H6.43756C6.9386 3 7.37139 3.35032 7.47565 3.84092L8.0832 6.73948C8.16946 7.15357 8.0397 7.58415 7.73817 7.88121L6.52306 9.07769L6.68883 9.46702C7.06236 10.3409 7.54466 11.0888 8.19271 11.764Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>', isLink: false
        }, {label: 'Сайт', value: 'wellblue.gl.uz', icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M16.665 10C16.665 13.681 13.6809 16.665 9.99996 16.665M16.665 10C16.665 6.31904 13.6809 3.33502 9.99996 3.33502M16.665 10H3.33496M9.99996 16.665C6.31898 16.665 3.33496 13.681 3.33496 10M9.99996 16.665C11.4953 16.665 12.7075 13.681 12.7075 10C12.7075 6.31904 11.4953 3.33502 9.99996 3.33502M9.99996 16.665C8.50465 16.665 7.29246 13.681 7.29246 10C7.29246 6.31904 8.50465 3.33502 9.99996 3.33502M3.33496 10C3.33496 6.31904 6.31898 3.33502 9.99996 3.33502" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>', isLink: true, url: 'https://wellblue.gl.uz'}]
    }
};