const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ConsentDataMeaningSchema } = require('./ConsentDataMeaning');
const { ReferenceSchema } = require('./Reference');

const ConsentProvisionDataSchema = BackboneElementSchemaFunction({
  meaning: ConsentDataMeaningSchema,
  reference: ReferenceSchema,
  typeName: { type: String, default: 'ConsentProvisionData' },
  _type: { type: String, default: 'FHIR::ConsentProvisionData' },
});

class ConsentProvisionData extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionDataSchema);
    this.typeName = 'ConsentProvisionData';
    this._type = 'FHIR::ConsentProvisionData';
  }
}

module.exports.ConsentProvisionDataSchema = ConsentProvisionDataSchema;
module.exports.ConsentProvisionData = ConsentProvisionData;
