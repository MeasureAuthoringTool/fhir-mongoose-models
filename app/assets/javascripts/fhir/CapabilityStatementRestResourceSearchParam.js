const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { SearchParamTypeSchema } = require('./SearchParamType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestResourceSearchParamSchema = BackboneElementSchemaFunction({
   name : String,
   definition : String,
   type : SearchParamTypeSchema,
   documentation : String,
   fhirTitle: { type: String, default: 'CapabilityStatementRestResourceSearchParam' },
});

class CapabilityStatementRestResourceSearchParam extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceSearchParamSchema);
    this._type = 'FHIR::CapabilityStatementRestResourceSearchParam';
  }
};


module.exports.CapabilityStatementRestResourceSearchParamSchema = CapabilityStatementRestResourceSearchParamSchema;
module.exports.CapabilityStatementRestResourceSearchParam = CapabilityStatementRestResourceSearchParam;
