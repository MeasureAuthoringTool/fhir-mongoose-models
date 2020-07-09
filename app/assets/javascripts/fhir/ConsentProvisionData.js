const { BackboneElementSchema } = require('./BackboneElement');
const { ConsentDataMeaningSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionDataSchema } = require('./allSchemaHeaders.js');

ConsentProvisionDataSchema.add(BackboneElementSchema);
ConsentProvisionDataSchema.remove('id');
ConsentProvisionDataSchema.add({
  meaning: ConsentDataMeaningSchema,
  reference: ReferenceSchema,
});

module.exports.ConsentProvisionDataSchema = ConsentProvisionDataSchema;
