#!/usr/bin/env python
import libvirt

c = libvirt.open('qemu:///system')

ids = c.listDomainsID()
for id in ids:
    vm = c.lookupByID(id)
    print ("%s (id:%s)" % (vm.name(), vm.ID()))
    print ("max vcpus : %s" % vm.maxVcpus())
    maxmem = vm.maxMemory()
    print (maxmem)

defined_ids = c.listDefinedDomains()
for id in defined_ids:
    vm = c.lookupByName(id)
    print ("%s (not running)" % vm.name())

