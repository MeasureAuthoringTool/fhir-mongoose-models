const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ConsentDataMeaningSchema } = require('./ConsentDataMeaning');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentProvisionDataSchema = BackboneElementSchemaFunction({
   meaning : ConsentDataMeaningSchema,
   reference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ConsentProvisionData' },
});

class ConsentProvisionData extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionDataSchema);
    this._type = 'FHIR::ConsentProvisionData';
  }
};


module.exports.ConsentProvisionDataSchema = ConsentProvisionDataSchema;
module.exports.ConsentProvisionData = ConsentProvisionData;
