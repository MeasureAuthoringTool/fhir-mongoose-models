const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductStatus' },
});

class BiologicallyDerivedProductStatus extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductStatusSchema);
    this._type = 'FHIR::BiologicallyDerivedProductStatus';
  }
};


module.exports.BiologicallyDerivedProductStatusSchema = BiologicallyDerivedProductStatusSchema;
module.exports.BiologicallyDerivedProductStatus = BiologicallyDerivedProductStatus;
