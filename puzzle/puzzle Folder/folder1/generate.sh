#!/bin/bash
string="                                                                        bbbbbbbb           bbbbbbbb                                                                                                                b::::::b           b::::::b            lllllll                                                                                             b::::::b           b::::::b            l:::::l                                                                                             b::::::b           b::::::b            l:::::l                                                                                              b:::::b            b:::::b            l:::::l                         ssssssssss       ccccccccccccccccrrrrr   rrrrrrrrr   aaaaaaaaaaaaa   b:::::bbbbbbbbb    b:::::bbbbbbbbb     l::::l     eeeeeeeeeeee  ss::::::::::s    cc:::::::::::::::cr::::rrr:::::::::r  a::::::::::::a  b::::::::::::::bb  b::::::::::::::bb   l::::l   ee::::::::::::ee  ss:::::::::::::s  c:::::::::::::::::cr:::::::::::::::::r aaaaaaaaa:::::a b::::::::::::::::b b::::::::::::::::b  l::::l  e::::::eeeee:::::ees::::::ssss:::::sc:::::::cccccc:::::crr::::::rrrrr::::::r         a::::a b:::::bbbbb:::::::bb:::::bbbbb:::::::b l::::l e::::::e     e:::::e s:::::s  ssssss c::::::c     ccccccc r:::::r     r:::::r  aaaaaaa:::::a b:::::b    b::::::bb:::::b    b::::::b l::::l e:::::::eeeee::::::e   s::::::s      c:::::c              r:::::r     rrrrrrraa::::::::::::a b:::::b     b:::::bb:::::b     b:::::b l::::l e:::::::::::::::::e       s::::::s   c:::::c              r:::::r           a::::aaaa::::::a b:::::b     b:::::bb:::::b     b:::::b l::::l e::::::eeeeeeeeeee  ssssss   s:::::s c::::::c     ccccccc r:::::r          a::::a    a:::::a b:::::b     b:::::bb:::::b     b:::::b l::::l e:::::::e           s:::::ssss::::::sc:::::::cccccc:::::c r:::::r          a::::a    a:::::a b:::::bbbbbb::::::bb:::::bbbbbb::::::bl::::::le::::::::e          s::::::::::::::s  c:::::::::::::::::c r:::::r          a:::::aaaa::::::a b::::::::::::::::b b::::::::::::::::b l::::::l e::::::::eeeeeeee   s:::::::::::ss    cc:::::::::::::::c r:::::r           a::::::::::aa:::ab:::::::::::::::b  b:::::::::::::::b  l::::::l  ee:::::::::::::e    sssssssssss        cccccccccccccccc rrrrrrr            aaaaaaaaaa  aaaabbbbbbbbbbbbbbbb   bbbbbbbbbbbbbbbb   llllllll    eeeeeeeeeeeeee  "

for ((a=1; a<=2500; a++))
do
    hashout=`md5 -s "$a"`
    nextnum=$(($a+1))
    nexthash=`md5 -s "$nextnum"`
    hashnum=${hashout: -32}
    nextnum=${nexthash: -32}
    echo "$a hash is $hashnum"
    echo "next hash is $nextnum"
    mkdir "$hashnum"
    echo "the next item is \"$nextnum\"" > $hashnum/next 
    currentchar="${string:$a:1}"
    echo "this item has special character: \"$currentchar\"" >> $hashnum/next
done
