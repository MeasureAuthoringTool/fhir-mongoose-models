const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapInputModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapInputMode' },
});

class StructureMapInputMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapInputModeSchema);
    this._type = 'FHIR::StructureMapInputMode';
  }
};


module.exports.StructureMapInputModeSchema = StructureMapInputModeSchema;
module.exports.StructureMapInputMode = StructureMapInputMode;
