function domino(size) {
    var mid = 0;
    var sectionMid1 = 0;
    var sectionMid2 = 0;

    if (size % 2 === 1) {
        mid = Math.floor(size/2);
        sectionMid1 = mid/2;
        sectionMid2 = mid*1.5;
    } else {
        mid = size/2-1;
        sectionMid1 = Math.floor(mid/2);
        sectionMid2 = mid + 1 + Math.floor(size/4);
    }
    
    for (var i = 0; i < size; i++) {
        var output = ""
        for (var j = 0; j < size; j++) {
            if (i === 0 || i === size - 1) {
                output += "*";
            } else if (i === mid) {
                output += "*";
            } else if (size % 2 === 0 && i === mid + 1) {
                output += "*";
            } else if (j === 0 || j === size - 1) {
                output += "*";
            } else if ((i === sectionMid1 || i === sectionMid2) && j === Math.floor(size/2)) {
                output += Math.ceil(Math.random()*6);
            } else {
                output += " ";
            }
        }
        console.log(output);
    }

    return "";
}

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########

*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda

############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############

*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########

*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda

#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################

*/