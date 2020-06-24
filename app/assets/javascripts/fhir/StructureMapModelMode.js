const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapModelModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapModelMode' },
});

class StructureMapModelMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapModelModeSchema);
    this._type = 'FHIR::StructureMapModelMode';
  }
};


module.exports.StructureMapModelModeSchema = StructureMapModelModeSchema;
module.exports.StructureMapModelMode = StructureMapModelMode;
