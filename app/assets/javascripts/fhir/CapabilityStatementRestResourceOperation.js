const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestResourceOperationSchema = BackboneElementSchemaFunction({
   name : String,
   definition : String,
   documentation : String,
   fhirTitle: { type: String, default: 'CapabilityStatementRestResourceOperation' },
});

class CapabilityStatementRestResourceOperation extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceOperationSchema);
    this._type = 'FHIR::CapabilityStatementRestResourceOperation';
  }
};


module.exports.CapabilityStatementRestResourceOperationSchema = CapabilityStatementRestResourceOperationSchema;
module.exports.CapabilityStatementRestResourceOperation = CapabilityStatementRestResourceOperation;
