#!/usr/bin/env python

import SimpleXMLRPCServer

class StringFunctions(object):
    def __init__(self):
        # Make all of the Python string functions available through
        # python_string.func_name
        import string
        self.python_string = string

    def _privateFunction(self):
        # This function cannot be called through XML-RPC because it
        # starts with an '_'
        pass
    
    def chop_in_half(self, astr):
        return astr[:len(astr)/2]

    def repeat(self, astr, times):
        return astr * times
    
def main():
    import SimpleXMLRPCServer
    running = True
    def finis():
        global running
        running = False
        return 1
    server = SimpleXMLRPCServer.SimpleXMLRPCServer(("127.0.0.1", 19999))
    server.register_instance(StringFunctions())
    server.register_function(lambda astr: '_' + astr, '_string')
    server.register_function(finis)
    while running:
        server.handle_request()

if __name__ == '__main__':
    main()

