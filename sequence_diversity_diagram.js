// var alignment = [
// 	'-------MSKLIEYDETARRAMEVGMDKLADTVRVTLGPRGRHVVLAKAFGGPTVTNDGVTVAREIELEDPFEDLGAQLVKSVATKTNDVAGDGTTTATILAQALIKGGLRLVAAGVNPIALGVGIGKAADAVSEALLASATPVSGKTGIAQVATVSSR-DEQIGDLVGEAMSKVGHDGVVSVEESSTLGTELEFTEGIGFDKGFLSAYFVTDFDNQQAVLEDALILLHQDKISSLPDLLPLLEKVAGTGKPLLIVAEDVEGEALATLVVNAIRKTLKAVAVKGPYFGDRRKAFLEDLAVVTGGQVVNPDAGMVLREVGLEVLGSARRVVVSKDDTVIVDGGGTAEAVANRAKHLRAEIDKSDSDWDREKLGERLAKLAGGVAVIKVGAATETALKERKESVEDAVAAAKAAVEEGIVPGGGASLIHQAR-KALTELRASLTGDEVLGVDVFSEALAAPLFWIAANAGLDGSVVVNKVSELPAGHGLNVNTLSYGDLAADGVIDPVKVTRSAVLNASSVARMVLTTETVVVDK----PAK--AEDH-DHHHGH-----------AH--------------------',
// 	'-------MSKLIEYDETARRAMEVGMDKLADTVRVTLGPRGRHVVLAKAFGGPTVTNDGVTAAREIELEDPFEDLGAQLVKSVATKTNDVAGDGTTTATILAQALIKGGLRLVAAGVNPIALGVGIGKAADAVSEALLASATPVSGKTGIAQVATVSSR-DEQIGDLVGEAMSKVGHDGVVSVEESSTLGTELEFTEGIGFDKGFLSAYFVTDFDNQQAVLEDALILLHQDKISSLPDLLPLLEKVAGTGKPLLIVAEDVEGEALATLVVNAIRKTLKAVAVKGPYFGDRRKAFLEDLAVVTGGQVVNPDAGMVLREVGLEVLGSARRVVVSKDDTVIVDGGGTAEAVANRAKHLRAEIDKSDSDWDREKLGERLAKLAGGVAVIKVGAATETALKERKESVEDAVAAAKAAVEEGIVPGGGASLIHQAR-KALTELRASLTGDEVLGVDVFSEALAAPLFWIAANAGLDGSVVVNKVSELPAGHGLNVNTLSYGDLAADGVIDPVKVTRSAVLNASSVARMVLTTETVVVDK----PAK--AEDH-DHHHGH-----------AH--------------------',
// 	'-------MSKLIEYDETARRAMEVGMDKLADTVRVTLGPRGRHVVLAKAFGGPTVTNDGVTVAREIELEDPFEDLGAQLVKSVATKTNDVAGDGTTTATILAQALIKGGLRLVAAGVNPIALGVGIGKAADAVSEALLASATPVSGKTGIAQVATVSSR-DEQIGDLVGEAMSKVGHDGVVSVEESSTLGIELEFTEGIGFDKGFLSAYFVTDFDNQQAVLEDALILLHQDKISSLPDLLPLLEKVAGTGKPLLIVAEDVEGEALATLVVNAIRKTLKAVAVKGPYFGDRRKAFLEDLAVVTGGQVVNPDAGMVLREVGLEVLGSARRVVVSKDDTVIVDGGGTAEAVANRAKHLRAEIDKSDSDWDREKLGERLAKLAGGVAVIKVGAATETALKERKESVEDAVAAAKAAVEEGIVPGGGASLIHQAR-KALTELRASLTGDEVLGVDVFSEALAAPLFWIAANAGLDGSVVVNKVSELPAGHGLNVNTLSYGDLAADGVIDPVKVTRSAVLNASSVARMVLTTETVVVGR----QAG--QGRR-SRPSPR-----------ARGTELRSADAKAPDTPSVRGL',
// 	'-------MSKLIEYDETARHAMEVGMNKLADTVRVTLGPRGRHVVLAKAFGGPTITNDGVTVAREIDLEDPFENLGAQLVKSVATKTNDVAGDGTTTATVLAQALVKGGLRMVAAGANPVALGAGISKAADAVSEALLAVATPVAGKDAITQVATVSSR-DEQIGALVGEGMNKVGTDGVVSVEESSTLDTELEFTEGVGFDKGFLSAYFVTDFDSQQAVLDDPLVLLHQEKISSLPELLPMLEKVTESGKPLLIVAEDLEGEALATLVVNSIRKTLKAVAVKSPFFGDRRKAFLEDLAIVTGGQVVNPETGLVLREVGTDVLGSARRVVVSKDDTIIVDGGGSNDAVAKRVNQLRAEIEVSDSEWDREKLQERVAKLAGGVAVIKVGAVTETALKKRKESVEDAVAAAKASIEEGIIAGGGSALV-QCG-AALKQLRTSLTGDEALGIDVFFEALKAPLYWIATNAGLDGAVVVDKVSGLPAGHGLNASTLGYGDLVADGVVDPVKVTRSAVLNAASVARMMLTTETAVVDK----PAK--TEEH-DH-HGH-----------AH--------------------'
// ]

// What's the datastructure that I need?
// dagPaths
// [{id: 1, nodes:['-','-','M','S','K',...]}, ...]
// dagNodes: need weight: just count number of occurences for that position
// dagLinks: need weight: count how many times link occurs

var xSizeWindow = 1000
var xSizeNode = 10
var xSizeLink = 15
var yScaling = 5

var dagPaths = new Array

for ( var i = 0; i < alignment.length; i++ ) {
    dagPaths.push({id:i, nodes:alignment[i].split('')})
}

var dagPathNodes = dagPaths.map(function(x) { return x.nodes })
var transposedDagPaths = Object.keys(dagPathNodes[0]).map(function (c) {
        return dagPathNodes.map(function (r) {
            return r[c];
        });
    });

// datastructure:
// {0: {AG:3,AR:2}, 1:{V-:5}}
var links = new Array
for ( var i = 0; i < dagPaths.length; i++ ) {
    for ( var j = 0; j < dagPaths[i].nodes.length - 1; j++ ) {
        var connection = dagPaths[i].nodes[j] + dagPaths[i].nodes[j+1]
        if ( ! links.hasOwnProperty(j) ) {
            links[j] = {}
        }
        if ( ! links[j].hasOwnProperty(connection) ) {
            links[j][connection] = 0
        }
        links[j][connection] += 1
    }
}

function countNodeOccurrences(array) {
    return array.reduce(function(counts, currentValue, index, array) {
        if ( currentValue in counts ) {
            counts[currentValue] += 1
        } else {
            counts[currentValue] = 1
        }
        return counts
    },{})
}

// console.log(JSON.stringify(dagPaths))
//console.log(JSON.stringify(transposedDagPaths))
var dagNodes = transposedDagPaths.map(function(x,i) { return {position:i, counts: countNodeOccurrences(x)}})
// console.log(JSON.stringify(dagNodes))
// console.log(JSON.stringify(links))

var verticalOrder = {"A":1, "G":2, "I":3, "L":4, "V":5, "C":6, "M":7, "S":8, "T":9,
                    "P":10, "F":11, "W":12, "Y":13, "H":14, "K":15, "R":16, "D":17,
                    "E":18, "N":19, "Q":20, "-":21, "X":22}

// Draw nodes
var xOffset = 0
var yOffset = 0
for ( var i = 0; i < dagNodes.length; i++ ) {
    var x = i*(xSizeNode+xSizeLink)
    if ( ( x - xOffset ) > xSizeWindow ) {
        xOffset += xSizeWindow + (xSizeNode + xSizeLink)
        yOffset += 23*yScaling // 22 aminoacids
    }
    var keys = Object.keys(dagNodes[i].counts)
    for ( var j = 0; j < keys.length; j++ ) {
        var y = verticalOrder[keys[j]]*yScaling
        var nodeLine = new Path()
        nodeLine.add(new Point(x - xOffset, y + yOffset))
        nodeLine.add(new Point(x - xOffset+xSizeNode,y + yOffset))
        nodeLine.strokeWidth = dagNodes[i].counts[keys[j]]/450
        // if ( nodeLine.strokeWidth == 4) {
            nodeLine.strokeColor = 'blue'
        // } else {
        //     nodeLine.strokeColor = 'red'
        // }
    }
}

// Draw links
xOffset = 0
yOffset = 0
for ( var i = 0; i < links.length; i++ ) {
    var x = i*(xSizeNode + xSizeLink)
    if ( (x - xOffset) > xSizeWindow ) {
        xOffset += xSizeWindow + (xSizeNode + xSizeLink)
        yOffset += 23*yScaling // 22 aminoacids
    }
    var distinctLinks = Object.keys(links[i])
    for ( var j = 0; j < distinctLinks.length; j++ ) {
        var from = distinctLinks[j][0]
        var to = distinctLinks[j][1]
        var yFrom = verticalOrder[from]*yScaling
        var yTo = verticalOrder[to]*yScaling
        
        var point1 = new Point(x - xOffset + xSizeNode, yFrom + yOffset)
        var handle1Out = new Point(xSizeNode/2, 0)
        var handle2In = new Point(-xSizeNode/2, 0)
        var point2 = new Point(x - xOffset + xSizeNode + xSizeLink, yTo + yOffset)
        var linkLine = new Path()
        linkLine.add(new Segment(point1, new Point(0,0), handle1Out))
        linkLine.add(new Segment(point2, handle2In, new Point(0,0)))
        linkLine.strokeWidth = links[i][distinctLinks[j]]/450
        linkLine.strokeColor = 'lightgrey'
    }
}