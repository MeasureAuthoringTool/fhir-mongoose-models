const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupTypeModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapGroupTypeMode' },
});

class StructureMapGroupTypeMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupTypeModeSchema);
    this._type = 'FHIR::StructureMapGroupTypeMode';
  }
};


module.exports.StructureMapGroupTypeModeSchema = StructureMapGroupTypeModeSchema;
module.exports.StructureMapGroupTypeMode = StructureMapGroupTypeMode;
