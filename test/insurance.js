var Insurance = artifacts.require("Insurance");

contract('Insurance', function(accounts, app) {

  it("The starting number of insurance contracts should be 0", function() {
    return Insurance.deployed().then(function(instance) {
      return instance.getNumberOfInsuranceContracts();
    }).then(function(insuranceCovers) {
      assert.equal(insuranceCovers.valueOf(), 0, "The starting number of insurance contracts is not 0");
    });
  });

  it("A user should be able to propose an insurance contract, which can be retrieved", function() {
    // var app;
    var proposer = accounts[0];
    var flightProof =
    '\x20\x00\x10\x00\xff\xff\x03\x00\x37\x5d\x38\x55\x17\x69\x05\x00\x04\xb5\x48\x55\x17\x69\x05\x00\x40\x00\x00\x00\x04\x00\x00\x00\x58\x62\xa0\x9a\xec\x1f\xf9\xd4\xa3\x4d\xd1\x98\x90\x04\x53\xd0\x81\x06\xe6\x87\xfa\xa2\x72\xe2\x21\x0d\x8c\x02\xc4\x5b\xe5\x2f\x59\xcf\x60\x70\x6c\xf1\x0d\x9c\x51\x82\x57\x67\x18\x7e\x26\xe0\x8f\x91\x37\x88\xb4\x98\x7b\x0a\xcb\x2a\x36\x26\x36\xeb\xb3\x1a\x02\xdb\x00\x00\x47\x45\x54\x20\x2f\x70\x72\x6f\x78\x79\x2e\x70\x79\x3f\x75\x72\x6c\x3d\x68\x74\x74\x70\x73\x25\x33\x41\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x75\x73\x2f\x72\x65\x73\x74\x2f\x76\x32\x2f\x6a\x73\x6f\x6e\x2f\x66\x6c\x69\x67\x68\x74\x2f\x73\x74\x61\x74\x75\x73\x2f\x39\x35\x34\x38\x34\x31\x32\x36\x37\x25\x33\x46\x61\x70\x70\x49\x64\x25\x33\x44\x31\x64\x34\x37\x65\x30\x34\x32\x25\x32\x36\x61\x70\x70\x4b\x65\x79\x25\x33\x44\x61\x35\x62\x66\x65\x32\x61\x32\x35\x61\x31\x35\x66\x30\x35\x64\x62\x31\x35\x38\x38\x30\x38\x34\x65\x61\x32\x35\x36\x34\x37\x37\x20\x48\x54\x54\x50\x2f\x31\x2e\x31\x0d\x0a\x48\x6f\x73\x74\x3a\x20\x74\x6c\x73\x2d\x6e\x2e\x6f\x72\x67\x0d\x0a\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x3a\x20\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65\x0d\x0a\x0d\x0a\x5e\x3f\xa9\x71\xff\x3e\xdb\xe5\x8b\x47\x10\x07\x3b\xa4\x30\xdf\x02\xf9\x00\x01\x48\x54\x54\x50\x2f\x31\x2e\x31\x20\x32\x30\x30\x20\x4f\x4b\x0d\x0a\x44\x61\x74\x65\x3a\x20\x54\x68\x75\x2c\x20\x30\x35\x20\x41\x70\x72\x20\x32\x30\x31\x38\x20\x31\x30\x3a\x32\x33\x3a\x33\x38\x20\x47\x4d\x54\x0d\x0a\x53\x65\x72\x76\x65\x72\x3a\x20\x41\x70\x61\x63\x68\x65\x2f\x32\x2e\x34\x2e\x36\x20\x28\x52\x65\x64\x20\x48\x61\x74\x20\x45\x6e\x74\x65\x72\x70\x72\x69\x73\x65\x20\x4c\x69\x6e\x75\x78\x29\x20\x6d\x6f\x64\x5f\x6e\x73\x73\x2f\x31\x2e\x30\x2e\x31\x34\x20\x4e\x53\x53\x2f\x33\x2e\x33\x30\x2e\x31\x20\x4f\x70\x65\x6e\x53\x53\x4c\x2f\x31\x2e\x30\x2e\x32\x6b\x2d\x66\x69\x70\x73\x20\x50\x48\x50\x2f\x35\x2e\x34\x2e\x31\x36\x0d\x0a\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x3a\x20\x63\x6c\x6f\x73\x65\x0d\x0a\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68\x3a\x20\x32\x39\x36\x34\x0d\x0a\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65\x3a\x20\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38\x0d\x0a\x0d\x0a\x12\x87\x2a\xf3\xa3\xbb\xce\x66\x87\xf0\x6a\x74\xc1\xdb\x9f\xfe\x02\x94\x0b\x01\x7b\x22\x72\x65\x71\x75\x65\x73\x74\x22\x3a\x7b\x22\x66\x6c\x69\x67\x68\x74\x49\x64\x22\x3a\x7b\x22\x72\x65\x71\x75\x65\x73\x74\x65\x64\x22\x3a\x22\x39\x35\x34\x38\x34\x31\x32\x36\x37\x22\x2c\x22\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x64\x22\x3a\x39\x35\x34\x38\x34\x31\x32\x36\x37\x7d\x2c\x22\x65\x78\x74\x65\x6e\x64\x65\x64\x4f\x70\x74\x69\x6f\x6e\x73\x22\x3a\x7b\x7d\x2c\x22\x75\x72\x6c\x22\x3a\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x75\x73\x2f\x72\x65\x73\x74\x2f\x76\x32\x2f\x6a\x73\x6f\x6e\x2f\x66\x6c\x69\x67\x68\x74\x2f\x73\x74\x61\x74\x75\x73\x2f\x39\x35\x34\x38\x34\x31\x32\x36\x37\x22\x7d\x2c\x22\x61\x70\x70\x65\x6e\x64\x69\x78\x22\x3a\x7b\x22\x61\x69\x72\x6c\x69\x6e\x65\x73\x22\x3a\x5b\x7b\x22\x66\x73\x22\x3a\x22\x41\x41\x22\x2c\x22\x69\x61\x74\x61\x22\x3a\x22\x41\x41\x22\x2c\x22\x69\x63\x61\x6f\x22\x3a\x22\x41\x41\x4c\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x41\x6d\x65\x72\x69\x63\x61\x6e\x20\x41\x69\x72\x6c\x69\x6e\x65\x73\x22\x2c\x22\x70\x68\x6f\x6e\x65\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x30\x38\x34\x35\x37\x2d\x35\x36\x37\x2d\x35\x36\x37\x22\x2c\x22\x61\x63\x74\x69\x76\x65\x22\x3a\x74\x72\x75\x65\x7d\x2c\x7b\x22\x66\x73\x22\x3a\x22\x4a\x4a\x22\x2c\x22\x69\x61\x74\x61\x22\x3a\x22\x4a\x4a\x22\x2c\x22\x69\x63\x61\x6f\x22\x3a\x22\x54\x41\x4d\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x4c\x41\x54\x41\x4d\x20\x41\x69\x72\x6c\x69\x6e\x65\x73\x20\x42\x72\x61\x73\x69\x6c\x22\x2c\x22\x70\x68\x6f\x6e\x65\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x31\x2d\x38\x38\x38\x2d\x32\x46\x4c\x59\x20\x54\x41\x4d\x22\x2c\x22\x61\x63\x74\x69\x76\x65\x22\x3a\x74\x72\x75\x65\x7d\x2c\x7b\x22\x66\x73\x22\x3a\x22\x42\x41\x22\x2c\x22\x69\x61\x74\x61\x22\x3a\x22\x42\x41\x22\x2c\x22\x69\x63\x61\x6f\x22\x3a\x22\x42\x41\x57\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x42\x72\x69\x74\x69\x73\x68\x20\x41\x69\x72\x77\x61\x79\x73\x22\x2c\x22\x70\x68\x6f\x6e\x65\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x31\x2d\x38\x30\x30\x2d\x41\x49\x52\x57\x41\x59\x53\x22\x2c\x22\x61\x63\x74\x69\x76\x65\x22\x3a\x74\x72\x75\x65\x7d\x5d\x2c\x22\x61\x69\x72\x70\x6f\x72\x74\x73\x22\x3a\x5b\x7b\x22\x66\x73\x22\x3a\x22\x4c\x59\x53\x22\x2c\x22\x69\x61\x74\x61\x22\x3a\x22\x4c\x59\x53\x22\x2c\x22\x69\x63\x61\x6f\x22\x3a\x22\x4c\x46\x4c\x4c\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x4c\x79\x6f\x6e\x20\x53\x61\x69\x6e\x74\x2d\x45\x78\x75\x70\x65\x72\x79\x20\x49\x6e\x74\x65\x72\x6e\x61\x74\x69\x6f\x6e\x61\x6c\x20\x41\x69\x72\x70\x6f\x72\x74\x22\x2c\x22\x63\x69\x74\x79\x22\x3a\x22\x4c\x79\x6f\x6e\x22\x2c\x22\x63\x69\x74\x79\x43\x6f\x64\x65\x22\x3a\x22\x4c\x59\x53\x22\x2c\x22\x63\x6f\x75\x6e\x74\x72\x79\x43\x6f\x64\x65\x22\x3a\x22\x46\x52\x22\x2c\x22\x63\x6f\x75\x6e\x74\x72\x79\x4e\x61\x6d\x65\x22\x3a\x22\x46\x72\x61\x6e\x63\x65\x22\x2c\x22\x72\x65\x67\x69\x6f\x6e\x4e\x61\x6d\x65\x22\x3a\x22\x45\x75\x72\x6f\x70\x65\x22\x2c\x22\x74\x69\x6d\x65\x5a\x6f\x6e\x65\x52\x65\x67\x69\x6f\x6e\x4e\x61\x6d\x65\x22\x3a\x22\x45\x75\x72\x6f\x70\x65\x2f\x50\x61\x72\x69\x73\x22\x2c\x22\x6c\x6f\x63\x61\x6c\x54\x69\x6d\x65\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x32\x3a\x32\x33\x3a\x33\x39\x2e\x34\x36\x37\x22\x2c\x22\x75\x74\x63\x4f\x66\x66\x73\x65\x74\x48\x6f\x75\x72\x73\x22\x3a\x32\x2e\x30\x2c\x22\x6c\x61\x74\x69\x74\x75\x64\x65\x22\x3a\x34\x35\x2e\x37\x32\x31\x34\x32\x36\x2c\x22\x6c\x6f\x6e\x67\x69\x74\x75\x64\x65\x22\x3a\x35\x2e\x30\x38\x30\x33\x33\x34\x2c\x22\x65\x6c\x65\x76\x61\x74\x69\x6f\x6e\x46\x65\x65\x74\x22\x3a\x38\x32\x31\x2c\x22\x63\x6c\x61\x73\x73\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x22\x3a\x32\x2c\x22\x61\x63\x74\x69\x76\x65\x22\x3a\x74\x72\x75\x65\x2c\x22\x64\x65\x6c\x61\x79\x49\x6e\x64\x65\x78\x55\x72\x6c\x22\x3a\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x64\x65\x6c\x61\x79\x69\x6e\x64\x65\x78\x2f\x72\x65\x73\x74\x2f\x76\x31\x2f\x6a\x73\x6f\x6e\x2f\x61\x69\x72\x70\x6f\x72\x74\x73\x2f\x4c\x59\x53\x3f\x63\x6f\x64\x65\x54\x79\x70\x65\x3d\x66\x73\x22\x2c\x22\x77\x65\x61\x74\x68\x65\x72\x55\x72\x6c\x22\x3a\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x77\x65\x61\x74\x68\x65\x72\x2f\x72\x65\x73\x74\x2f\x76\x31\x2f\x6a\x73\x6f\x6e\x2f\x61\x6c\x6c\x2f\x4c\x59\x53\x3f\x63\x6f\x64\x65\x54\x79\x70\x65\x3d\x66\x73\x22\x7d\x2c\x7b\x22\x66\x73\x22\x3a\x22\x4c\x48\x52\x22\x2c\x22\x69\x61\x74\x61\x22\x3a\x22\x4c\x48\x52\x22\x2c\x22\x69\x63\x61\x6f\x22\x3a\x22\x45\x47\x4c\x4c\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x4c\x6f\x6e\x64\x6f\x6e\x20\x48\x65\x61\x74\x68\x72\x6f\x77\x20\x41\x69\x72\x70\x6f\x72\x74\x22\x2c\x22\x63\x69\x74\x79\x22\x3a\x22\x4c\x6f\x6e\x64\x6f\x6e\x22\x2c\x22\x63\x69\x74\x79\x43\x6f\x64\x65\x22\x3a\x22\x4c\x4f\x4e\x22\x2c\x22\x73\x74\x61\x74\x65\x43\x6f\x64\x65\x22\x3a\x22\x45\x4e\x22\x2c\x22\x63\x6f\x75\x6e\x74\x72\x79\x43\x6f\x64\x65\x22\x3a\x22\x47\x42\x22\x2c\x22\x63\x6f\x75\x6e\x74\x72\x79\x4e\x61\x6d\x65\x22\x3a\x22\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x22\x2c\x22\x72\x65\x67\x69\x6f\x6e\x4e\x61\x6d\x65\x22\x3a\x22\x45\x75\x72\x6f\x70\x65\x22\x2c\x22\x74\x69\x6d\x65\x5a\x6f\x6e\x65\x52\x65\x67\x69\x6f\x6e\x4e\x61\x6d\x65\x22\x3a\x22\x45\x75\x72\x6f\x70\x65\x2f\x4c\x6f\x6e\x64\x6f\x6e\x22\x2c\x22\x6c\x6f\x63\x61\x6c\x54\x69\x6d\x65\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x31\x3a\x32\x33\x3a\x33\x39\x2e\x34\x36\x37\x22\x2c\x22\x75\x74\x63\x4f\x66\x66\x73\x65\x74\x48\x6f\x75\x72\x73\x22\x3a\x31\x2e\x30\x2c\x22\x6c\x61\x74\x69\x74\x75\x64\x65\x22\x3a\x35\x31\x2e\x34\x36\x39\x36\x30\x33\x2c\x22\x6c\x6f\x6e\x67\x69\x74\x75\x64\x65\x22\x3a\x2d\x30\x2e\x34\x35\x33\x35\x36\x36\x2c\x22\x65\x6c\x65\x76\x61\x74\x69\x6f\x6e\x46\x65\x65\x74\x22\x3a\x38\x30\x2c\x22\x63\x6c\x61\x73\x73\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x22\x3a\x31\x2c\x22\x61\x63\x74\x69\x76\x65\x22\x3a\x74\x72\x75\x65\x2c\x22\x64\x65\x6c\x61\x79\x49\x6e\x64\x65\x78\x55\x72\x6c\x22\x3a\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x64\x65\x6c\x61\x79\x69\x6e\x64\x65\x78\x2f\x72\x65\x73\x74\x2f\x76\x31\x2f\x6a\x73\x6f\x6e\x2f\x61\x69\x72\x70\x6f\x72\x74\x73\x2f\x4c\x48\x52\x3f\x63\x6f\x64\x65\x54\x79\x70\x65\x3d\x66\x73\x22\x2c\x22\x77\x65\x61\x74\x68\x65\x72\x55\x72\x6c\x22\x3a\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x66\x6c\x69\x67\x68\x74\x73\x74\x61\x74\x73\x2e\x63\x6f\x6d\x2f\x66\x6c\x65\x78\x2f\x77\x65\x61\x74\x68\x65\x72\x2f\x72\x65\x73\x74\x2f\x76\x31\x2f\x6a\x73\x6f\x6e\x2f\x61\x6c\x6c\x2f\x4c\x48\x52\x3f\x63\x6f\x64\x65\x54\x79\x70\x65\x3d\x66\x73\x22\x7d\x5d\x2c\x22\x65\x71\x75\x69\x70\x6d\x65\x6e\x74\x73\x22\x3a\x5b\x7b\x22\x69\x61\x74\x61\x22\x3a\x22\x33\x32\x30\x22\x2c\x22\x6e\x61\x6d\x65\x22\x3a\x22\x41\x69\x72\x62\x75\x73\x20\x41\x33\x32\x30\x22\x2c\x22\x74\x75\x72\x62\x6f\x50\x72\x6f\x70\x22\x3a\x66\x61\x6c\x73\x65\x2c\x22\x6a\x65\x74\x22\x3a\x74\x72\x75\x65\x2c\x22\x77\x69\x64\x65\x62\x6f\x64\x79\x22\x3a\x66\x61\x6c\x73\x65\x2c\x22\x72\x65\x67\x69\x6f\x6e\x61\x6c\x22\x3a\x66\x61\x6c\x73\x65\x7d\x5d\x7d\x2c\x22\x66\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x75\x73\x22\x3a\x7b\x22\x66\x6c\x69\x67\x68\x74\x49\x64\x22\x3a\x39\x35\x34\x38\x34\x31\x32\x36\x37\x2c\x22\x63\x61\x72\x72\x69\x65\x72\x46\x73\x43\x6f\x64\x65\x22\x3a\x22\x42\x41\x22\x2c\x22\x66\x6c\x69\x67\x68\x74\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x33\x36\x32\x22\x2c\x22\x64\x65\x70\x61\x72\x74\x75\x72\x65\x41\x69\x72\x70\x6f\x72\x74\x46\x73\x43\x6f\x64\x65\x22\x3a\x22\x4c\x48\x52\x22\x2c\x22\x61\x72\x72\x69\x76\x61\x6c\x41\x69\x72\x70\x6f\x72\x74\x46\x73\x43\x6f\x64\x65\x22\x3a\x22\x4c\x59\x53\x22\x2c\x22\x64\x65\x70\x61\x72\x74\x75\x72\x65\x44\x61\x74\x65\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x33\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x32\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x2c\x22\x61\x72\x72\x69\x76\x61\x6c\x44\x61\x74\x65\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x36\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x34\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x2c\x22\x73\x74\x61\x74\x75\x73\x22\x3a\x22\x53\x22\x2c\x22\x73\x63\x68\x65\x64\x75\x6c\x65\x22\x3a\x7b\x22\x66\x6c\x69\x67\x68\x74\x54\x79\x70\x65\x22\x3a\x22\x4a\x22\x2c\x22\x73\x65\x72\x76\x69\x63\x65\x43\x6c\x61\x73\x73\x65\x73\x22\x3a\x22\x52\x46\x4a\x59\x22\x2c\x22\x72\x65\x73\x74\x72\x69\x63\x74\x69\x6f\x6e\x73\x22\x3a\x22\x22\x7d\x2c\x22\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x61\x6c\x54\x69\x6d\x65\x73\x22\x3a\x7b\x22\x70\x75\x62\x6c\x69\x73\x68\x65\x64\x44\x65\x70\x61\x72\x74\x75\x72\x65\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x33\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x32\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x2c\x22\x70\x75\x62\x6c\x69\x73\x68\x65\x64\x41\x72\x72\x69\x76\x61\x6c\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x36\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x34\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x2c\x22\x73\x63\x68\x65\x64\x75\x6c\x65\x64\x47\x61\x74\x65\x44\x65\x70\x61\x72\x74\x75\x72\x65\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x33\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x32\x3a\x35\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x2c\x22\x73\x63\x68\x65\x64\x75\x6c\x65\x64\x47\x61\x74\x65\x41\x72\x72\x69\x76\x61\x6c\x22\x3a\x7b\x22\x64\x61\x74\x65\x4c\x6f\x63\x61\x6c\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x36\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x22\x2c\x22\x64\x61\x74\x65\x55\x74\x63\x22\x3a\x22\x32\x30\x31\x38\x2d\x30\x34\x2d\x30\x35\x54\x31\x34\x3a\x33\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x7d\x7d\x2c\x22\x63\x6f\x64\x65\x73\x68\x61\x72\x65\x73\x22\x3a\x5b\x7b\x22\x66\x73\x43\x6f\x64\x65\x22\x3a\x22\x41\x41\x22\x2c\x22\x66\x6c\x69\x67\x68\x74\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x36\x34\x38\x37\x22\x2c\x22\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x22\x3a\x22\x4c\x22\x7d\x2c\x7b\x22\x66\x73\x43\x6f\x64\x65\x22\x3a\x22\x4a\x4a\x22\x2c\x22\x66\x6c\x69\x67\x68\x74\x4e\x75\x6d\x62\x65\x72\x22\x3a\x22\x32\x37\x38\x35\x22\x2c\x22\x72\x65\x6c\x61\x74\x69\x6f\x6e\x73\x68\x69\x70\x22\x3a\x22\x4c\x22\x7d\x5d\x2c\x22\x66\x6c\x69\x67\x68\x74\x44\x75\x72\x61\x74\x69\x6f\x6e\x73\x22\x3a\x7b\x22\x73\x63\x68\x65\x64\x75\x6c\x65\x64\x42\x6c\x6f\x63\x6b\x4d\x69\x6e\x75\x74\x65\x73\x22\x3a\x31\x30\x30\x7d\x2c\x22\x61\x69\x72\x70\x6f\x72\x74\x52\x65\x73\x6f\x75\x72\x63\x65\x73\x22\x3a\x7b\x22\x64\x65\x70\x61\x72\x74\x75\x72\x65\x54\x65\x72\x6d\x69\x6e\x61\x6c\x22\x3a\x22\x33\x22\x2c\x22\x61\x72\x72\x69\x76\x61\x6c\x54\x65\x72\x6d\x69\x6e\x61\x6c\x22\x3a\x22\x54\x31\x41\x22\x7d\x2c\x22\x66\x6c\x69\x67\x68\x74\x45\x71\x75\x69\x70\x6d\x65\x6e\x74\x22\x3a\x7b\x22\x73\x63\x68\x65\x64\x75\x6c\x65\x64\x45\x71\x75\x69\x70\x6d\x65\x6e\x74\x49\x61\x74\x61\x43\x6f\x64\x65\x22\x3a\x22\x33\x32\x30\x22\x2c\x22\x61\x63\x74\x75\x61\x6c\x45\x71\x75\x69\x70\x6d\x65\x6e\x74\x49\x61\x74\x61\x43\x6f\x64\x65\x22\x3a\x22\x33\x32\x30\x22\x7d\x7d\x7d\xc5\x85\xfd\x47\x90\x8f\x6f\x8d\x5b\x1c\xb3\x73\x75\xd4\x15\xa8';
    var premiumAmount = web3.toWei(0.2, "ether");
    var totalCoverAmount = web3.toWei(1, "ether");
    var flightID = 954841267;

    return Insurance.deployed().then(function(instance) {
      app = instance;
      return app.proposeInsuranceCover(flightProof, totalCoverAmount, {from: proposer, value: premiumAmount});
    }).then(function() {
      return app.getInsuranceContracts();
    }).then(function(contracts) {
      assert.equal(contracts[0].toNumber(),1000,"contract ID not set properly");
      return app.allInsuranceCovers(contracts[0].toNumber());
    }).then(function(contract){
      assert.equal(contract[0].toNumber(), 1000, "contract ID not set properly");
      assert.equal(contract[1], proposer, "proposer is not set correctly");
      assert.equal(contract[2].toNumber(), 0, "number of providers not set correctly");
      assert.equal(contract[3].toNumber(), totalCoverAmount, "total cover amount is not set correctly");
      assert.equal(contract[4].toNumber(), 0, "current funded cover amount is not set correctly");
      assert.equal(contract[5].toNumber(), premiumAmount, "premium amount is not set correctly");
      assert.equal(contract[6].toNumber(), flightID, "flight ID is not set correctly");
      assert.equal(contract[7], false, "contract resolved is not set correctly");
      assert.equal(contract[8], false, "contract deleted is not set correctly");
    });
  });

  it("The number of insurance contracts should now be 1", function() {
    return Insurance.deployed().then(function(instance) {
      return instance.getNumberOfInsuranceContracts();
    }).then(function(insuranceCovers) {
      assert.equal(insuranceCovers.valueOf(), 1, "The total number of insurance contracts is not 1");
    });
  });

  it("A user should not be able to contribute to a contract if the value more than the requirement", function(){
    var app;
    var acceptor = accounts[1];
    var acceptorAmount = web3.toWei(1.2, "ether");
    var insuranceID;

    return Insurance.deployed().then(function(instance) {
      app = instance;
    }).then(function(){
      return app.getInsuranceContracts();
    }).then(function(contracts){
      insuranceID = contracts[0].toNumber();
      app.acceptContract(insuranceID, {from: acceptor, value: acceptorAmount})
    }).then(function(){
      assert.equal(insuranceID,1000,"the insurance ID is not correct")
      return app.allInsuranceCovers(insuranceID);
    }).then(function(contract){
      assert.equal(contract[4].toNumber(), 0, "the user was able to provide too much capital");
    })
  });

  it("A user should be able to contribute to a contract if the value is within the requirement", function(){
    var app;
    var acceptor = accounts[1];
    var acceptorAmount = web3.toWei(0.5, "ether");
    var insuranceID;

    return Insurance.deployed().then(function(instance) {
      app = instance;
    }).then(function(){
      return app.getInsuranceContracts();
    }).then(function(contracts){
      insuranceID = contracts[0].toNumber();
      app.acceptContract(insuranceID, {from: acceptor, value: acceptorAmount})
    }).then(function(){
      assert.equal(insuranceID,1000,"the insurance ID is not correct");
      return app.allInsuranceCovers(insuranceID);
    }).then(function(contract){
      assert.equal(contract[2].toNumber(), 1, "the number of providers has not been incremented");
      assert.equal(contract[4].toNumber(), acceptorAmount, "the contract has recorded the right amount of capital");
      return app.getProviderAmount.call(insuranceID, acceptor);
    }).then(function(providerAmount){
      assert.equal(providerAmount,acceptorAmount, "the acceptor address has not been added to the contract");
    })
  });


});
