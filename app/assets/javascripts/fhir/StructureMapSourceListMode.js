const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapSourceListModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapSourceListMode' },
});

class StructureMapSourceListMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapSourceListModeSchema);
    this._type = 'FHIR::StructureMapSourceListMode';
  }
};


module.exports.StructureMapSourceListModeSchema = StructureMapSourceListModeSchema;
module.exports.StructureMapSourceListMode = StructureMapSourceListMode;
