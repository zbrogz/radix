

var app = new Vue({
    el: '#app',
    data: {
        dec: '',
        hex: '',
        bin: '',
        gridData: [
            {
                base: 'Decimal',
                valid_input: '-, 0-9',
                range: '-9223372036854775808 - 9223372036854775807'
            },
            {
                base: 'Hexidecimal',
                valid_input: '-, 0-9, a-f, A-F',
                range: '8000000000000000 - 7fffffffffffffff'
            },
            {
                base: 'Binary',
                valid_input: '-, 0-1',
                range: '1000...000 - 0111...111'
            },

        ]
    },
    watch: {
        dec: function() {
            if(this.dec === '-' || this.dec === '') return;
            d = Long.fromString(this.dec, true, 10);
            this.hex = d.toString(16).padStart(16, '0');
            this.bin = d.toString(2).padStart(64, '0');
        },
        hex: function() {
            if(this.hex === '-' || this.hex === '') return;
            h = Long.fromString(this.hex, true, 16);
            this.dec = h.toSigned().toString(10);
            this.bin = h.toString(2).padStart(64, '0');
        },
        bin: function() {
            if(this.bin === '-' || this.bin === '') return;
            b = Long.fromString(this.bin, true, 2);
            this.dec = b.toSigned().toString(10);
            this.hex = b.toString(16).padStart(16, '0');
        },
    },
    methods: {
        clear: function() {
            this.dec = '';
            this.hex = '';
            this.bin = '';
        },
        random: function() {
            max = 2147483647;
            min = -2147483648;
            rand1 = Math.floor(Math.random() * (max - min + 1)) + min;
            rand2 = Math.floor(Math.random() * (max - min + 1)) + min;
            rand = new Long(rand1, rand2);
            this.dec = rand.toString();
            console.log(this.dec);
        }
    }
});