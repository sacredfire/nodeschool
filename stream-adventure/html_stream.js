var through = require('through2');
var trumpet = require('trumpet');
var tr = trumpet();

var streamLoud = tr.select('.loud').createStream();

streamLoud.pipe(through( function (buf, encoding, next) {
    this.push(buf.toString().toUpperCase());
    next();
})).pipe(streamLoud);

process.stdin.pipe(tr).pipe(process.stdout);

/*I think you might be confusing the two streams loud and tr.

tr is the main trumpet stream

It is a transform stream (has input and output like a pipe)
It takes html as input
It outputs html
we connect stdin to its input, and we connect its output to stdout

loud is another stream, we created loud by asking tr to select html
elements with class loud

It is a duplex stream (has input and output like a telephone)
it outputs or sends html elements
it also receives html elements

tr behaves such that, when html is streamed to it, if there are
elements with class loud, they are output from loud, which sends
them to the through stream you built for making the text uppercase,
which sends them to back to loud's input, where they are reinserted
into the html tr originally received and output from tr.*/

/*an important thing to note is that, although loud has an important
connection with tr, they are not actually piped together at all.*/

/*I think this is pretty confusing because, while tr and loud are
absolutely connected, the connection is not that clear, and it does not
relate to the pipes we see here.

You do want to send your html back to tr, but we achieve that by sending
it back to loud. Anything sent to the input part of tr is interpreted as
new html to be processed, so we can't send to the input of tr. Instead we 
send to the input of loud, which through some magic internal to trumpet,
causes it to be output from tr.

It might help to think of the flows separately:

stdin > tr (which does some kind of processing) > stdout
loud > through > loud
So, while both tr and loud are duplex streams, meaning they have both an
input and an output, they act in very different ways.

tr receives an input, and then sends output as a result.

loud sends an output, and waits for input to arrive as a result.

If you like, you can imagine loud as two streams, one read and one write,
instead of just one read/write stream. This makes it look a lot more like
stdin and stdout.

loudout > through > loudin

loud absolutely does know that when it receives input it should pass it
back to tr, this just happens to be internal to trumpet, making it a bit
mysterious, I'm not sure how you could have known that =(*/