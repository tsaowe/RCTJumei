import commands
import re
import codecs

if __name__ == '__main__':
    status, output = commands.getstatusoutput("ifconfig|grep netmask|grep -v 127.0.0.1")
    pat = re.compile(r'(?<![\.\d])(?:\d{1,3}\.){3}\d{1,3}(?![\.\d])|localhost')
    ips = pat.findall(output)
    currentip = ips[0]
    file_object = open('ios/RCTJumei/AppDelegate.m')
    try:
         all_the_text = file_object.read()
         searchIps = pat.findall(all_the_text)
         searchIp = searchIps[0]
         all_the_text = all_the_text.replace(searchIp, currentip)
         # print all_the_text
         f = codecs.open('ios/RCTJumei/AppDelegate.m','w','utf-8')
         f.write(all_the_text)
         f.close()
    finally:
         file_object.close( )